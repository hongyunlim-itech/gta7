// Civilian traffic: lane-following AI with signals & obstacle braking, plus spawn/despawn management and parked cars.
import { G } from './state.js';
import { Vehicle } from './vehicle.js';
import { CIVILIAN_TYPES, CAR_COLORS, VTYPES } from './models.js';
import { lightState } from './world.js';
import { DIRS, rightOf, leftOf, cardinal, inGrid, intersectionPath, randomLane, dirHeading, nearestInter } from './roads.js';
import { GRID, PITCH, LANE, PARK_OFFSET, roadCenter, HALF } from './config.js';
import { clamp, wrapAngle, pick, rr, chance } from './util.js';

const TRAFFIC_TARGET = 34, PARKED_TARGET = 26;
const SPAWN_MIN = 90, SPAWN_MAX = 260, DESPAWN = 330;

// Nearest obstacle ahead of a vehicle within `look` metres (bumper distance), or Infinity
export function obstacleAhead(veh, look) {
  const f = Math.sin(veh.heading), g = Math.cos(veh.heading), rx = -g, rz = f, hl = veh.spec.hl, hw = veh.spec.hw;
  let best = Infinity;
  const vs = G.vehicles;
  for (let i = 0; i < vs.length; i++) {
    const o = vs[i];
    if (o === veh || o.removed) continue;
    const dx = o.x - veh.x, dz = o.z - veh.z;
    if (Math.abs(dx) > look + 12 || Math.abs(dz) > look + 12) continue;
    const fw = dx * f + dz * g, lat = dx * rx + dz * rz;
    if (fw < 0.5 || fw > look + hl + o.rad) continue;
    if (Math.abs(lat) > hw + o.rad * 0.55 + 0.35) continue;
    // ignore cars moving in the opposite direction in the other lane
    const ov = o.vx * f + o.vz * g;
    if (ov < -3 && Math.abs(lat) > hw + 0.9) continue;
    best = Math.min(best, fw - hl - o.rad * 0.75);
  }
  const acts = G.actors;
  for (let i = 0; i < acts.length; i++) {
    const a = acts[i];
    if (a.removed || a.inVehicle) continue;
    const dx = a.x - veh.x, dz = a.z - veh.z;
    if (Math.abs(dx) > look + 6 || Math.abs(dz) > look + 6) continue;
    const fw = dx * f + dz * g, lat = dx * rx + dz * rz;
    if (fw < 0.5 || fw > look + hl) continue;
    if (Math.abs(lat) > hw + 0.75 + a.radius) continue;
    best = Math.min(best, fw - hl - 0.4);
  }
  return best;
}

export class TrafficAI {
  constructor(veh, lane) {
    this.dir = lane.dir; this.ni = lane.ni; this.nj = lane.nj;
    this.queue = []; this.prev = { x: veh.x, z: veh.z };
    this.cruise = rr(10, 15.5) * (VTYPES[veh.key].vmax > 50 ? 1.05 : 1) * (veh.key === 'bus' ? 0.75 : 1);
    this.stuckT = 0; this.reverseT = 0; this.panic = 0; this.honk = 0; this.wait = 0; this.waitT = 0; this.ghostT = 0; this.idleT = 0; this.why = 'go';
    this.plan(veh);
  }

  // Append the path through the next intersection
  plan() {
    const dIn = this.dir;
    const opts = [[dIn, 0.62], [rightOf(dIn), 0.19], [leftOf(dIn), 0.19]].filter(([d]) => inGrid(this.ni + d[0], this.nj + d[1]));
    let dOut;
    if (!opts.length) dOut = [-dIn[0], -dIn[1]];
    else {
      let r = Math.random() * opts.reduce((s, o) => s + o[1], 0);
      for (const [d, w] of opts) { r -= w; if (r <= 0) { dOut = d; break; } }
      dOut = dOut || opts[0][0];
    }
    intersectionPath(this.ni, this.nj, dIn, dOut, this.queue);
    this.ni += dOut[0]; this.nj += dOut[1]; this.dir = dOut;
  }

  // Re-acquire the nearest lane after being knocked off course
  recover(veh) {
    const d = cardinal(veh.heading);
    const axisX = d[0] !== 0;
    let ni, nj;
    if (axisX) {
      const j = clamp(Math.round(veh.z / PITCH + GRID / 2), 0, GRID);
      const u = veh.x / PITCH + GRID / 2;
      ni = d[0] > 0 ? Math.ceil(u + 0.15) : Math.floor(u - 0.15); nj = j;
    } else {
      const i = clamp(Math.round(veh.x / PITCH + GRID / 2), 0, GRID);
      const u = veh.z / PITCH + GRID / 2;
      nj = d[1] > 0 ? Math.ceil(u + 0.15) : Math.floor(u - 0.15); ni = i;
    }
    ni = clamp(ni, 0, GRID); nj = clamp(nj, 0, GRID);
    this.dir = d; this.ni = ni; this.nj = nj; this.queue.length = 0;
    // lane-aligned lead-in point
    const r = rightOf(d);
    const lx = axisX ? veh.x + d[0] * 6 : roadCenter(ni) + r[0] * LANE, lz = axisX ? roadCenter(nj) + r[1] * LANE : veh.z + d[1] * 6;
    this.queue.push({ x: lx, z: lz });
    this.prev = { x: veh.x, z: veh.z };
    this.plan();
  }

  update(veh, dt) {
    const s = veh.spec, q = this.queue;
    while (q.length < 12) this.plan();
    const f = Math.sin(veh.heading), g = Math.cos(veh.heading);
    const vf = veh.fwd;
    this.panic = Math.max(0, this.panic - dt);

    if (this.reverseT > 0) {
      this.reverseT -= dt;
      veh.throttle = -1; veh.brakeIn = 0; veh.handbrake = false; veh.steerIn = this.reverseSteer;
      if (this.reverseT <= 0) this.recover(veh);
      return;
    }

    // follow queue
    let nxt = q[0];
    let ux = nxt.x - this.prev.x, uz = nxt.z - this.prev.z, ul = Math.hypot(ux, uz) || 1; ux /= ul; uz /= ul;
    const along = (veh.x - this.prev.x) * ux + (veh.z - this.prev.z) * uz;
    if (along > ul - 1.8) { this.prev = { x: nxt.x, z: nxt.z }; q.shift(); nxt = q[0]; ux = nxt.x - this.prev.x; uz = nxt.z - this.prev.z; ul = Math.hypot(ux, uz) || 1; ux /= ul; uz /= ul; }
    const look = clamp(5 + Math.abs(vf) * 0.5, 5, 14);
    const t = clamp((veh.x - this.prev.x) * ux + (veh.z - this.prev.z) * uz + look, 0, ul);
    const tx = this.prev.x + ux * t, tz = this.prev.z + uz * t;
    const err = wrapAngle(Math.atan2(tx - veh.x, tz - veh.z) - veh.heading);
    veh.steerIn = clamp(err * 2.0, -1, 1);

    // target speed
    let target = this.cruise * (this.panic > 0 ? 1.5 : 1);
    if (nxt.turn || (q[1] && q[1].turn) || (q[2] && q[2].turn)) target = Math.min(target, 6.2);
    // traffic signal
    let lightHold = false;
    for (let i = 0; i < q.length && i < 4; i++) {
      const p = q[i];
      if (!p.stop) continue;
      const dist = (p.x - veh.x) * f + (p.z - veh.z) * g;
      if (dist < -1) break;
      const st = lightState(p.stop);
      const canStop = dist > (vf * vf) / (2 * 6.5) + 3;
      if (st === 'red' || (st === 'yellow' && canStop)) { target = Math.min(target, Math.sqrt(Math.max(0, 2 * 4.5 * (dist - 1.2)))); lightHold = true; }
      break;
    }
    // obstacles (with a deadlock breaker: after waiting a while, creep through and let physics shove)
    this.ghostT = Math.max(0, this.ghostT - dt);
    let ob = obstacleAhead(veh, 6 + Math.max(0, vf) * 1.3);
    if (this.ghostT > 0) { if (ob > 1.2) ob = Infinity; target = Math.min(target, 4); }
    if (ob < Infinity) {
      target = Math.min(target, Math.max(0, (ob - 2.2)) * 1.1);
      if (ob < 1.6) target = 0;
    }
    this.why = lightHold ? 'light' : ob < Infinity && target < 1 ? 'obstacle' : 'go';
    if (this.why === 'obstacle' && Math.abs(vf) < 0.6) this.waitT += dt; else this.waitT = Math.max(0, this.waitT - dt * 2);
    if (this.waitT > 4 + (veh.id % 6) * 0.9) { this.waitT = 0; this.ghostT = 3.5; }
    if (Math.abs(vf) < 0.5 && this.why !== 'light') this.idleT += dt; else this.idleT = Math.max(0, this.idleT - dt);
    const e = target - vf;
    if (e > 0) { veh.throttle = clamp(e * 0.4, 0, 1); veh.brakeIn = 0; }
    else { veh.throttle = 0; veh.brakeIn = clamp(-e * 0.22, 0, 1); }
    if (target < 0.1 && vf < 0.6) { veh.brakeIn = 0.6; veh.throttle = 0; }
    veh.handbrake = false;

    // stuck detection
    if (target > 2.5 && Math.abs(vf) < 0.45) this.stuckT += dt; else this.stuckT = Math.max(0, this.stuckT - dt * 2);
    if (this.stuckT > 2.6) { this.stuckT = 0; this.reverseT = 1.4; this.reverseSteer = -Math.sign(err || 1); this.stuckCount = (this.stuckCount || 0) + 1; }
  }

  onDamage(veh, src) { if (src) this.panic = 5; }
  onCrash(veh, imp) {
    if (imp > 4) { this.recoverT = 0.8; }
    if (imp > 11 && chance(0.4) && veh.driver === 'ai' && G.peds) G.peds.driverBailsOut(veh);
    else if (imp > 3) this.panic = 3;
    if (imp > 5) { this.queue.length = 0; this.recover(veh); }
  }
}

export const traffic = {
  timer: 0,
  init() {
    // initial population all around the start
    const p = G.playerPos();
    for (let i = 0; i < TRAFFIC_TARGET; i++) this.spawnMoving(p.x, p.z, 40, SPAWN_MAX);
    for (let i = 0; i < PARKED_TARGET; i++) this.spawnParked(p.x, p.z, 30, 240);
  },
  clear(x, z, r) {
    for (const v of G.vehicles) if (Math.hypot(v.x - x, v.z - z) < r) return false;
    return true;
  },
  spawnMoving(px, pz, minD, maxD) {
    const lane = randomLane(px, pz, minD, maxD);
    if (!lane || !this.clear(lane.x, lane.z, 11)) return null;
    if (!this.hidden(lane.x, lane.z, 110)) return null;
    const key = pick(CIVILIAN_TYPES);
    const v = new Vehicle(key, lane.x, lane.z, lane.heading, key === 'taxi' || key === 'bus' || key === 'police' ? undefined : pick(CAR_COLORS));
    v.driver = 'ai'; v.ai = new TrafficAI(v, lane);
    const sp = v.ai.cruise * 0.8; v.vx = Math.sin(v.heading) * sp; v.vz = Math.cos(v.heading) * sp;
    return v;
  },
  spawnParked(px, pz, minD, maxD) {
    for (let n = 0; n < 20; n++) {
      const lane = randomLane(px, pz, minD, maxD, 4);
      if (!lane) continue;
      // shift from lane to the curb lane
      const r = rightOf(lane.dir);
      const along = lane.dir[0] !== 0 ? lane.x : lane.z;
      const off = PARK_OFFSET - LANE; // extra towards the kerb (right side)
      const x = lane.x + r[0] * off, z = lane.z + r[1] * off;
      // avoid parking on intersections
      const a = ((along + HALF) % PITCH + PITCH) % PITCH;
      if (a < 24 || a > PITCH - 24) continue;
      if (!this.clear(x, z, 6.5)) continue;
      if (!this.hidden(x, z, 90)) continue;
      const key = pick(['sedan', 'sedan', 'sports', 'muscle', 'suv', 'pickup', 'van', 'taxi']);
      const v = new Vehicle(key, x, z, lane.heading + (chance(0.03) ? 0.05 : 0), pick(CAR_COLORS));
      v.parked = true;
      return v;
    }
    return null;
  },
  // true if the position is out of the camera's sight (or far enough)
  hidden(x, z, farEnough) {
    const cam = G.camera;
    if (!cam) return true;
    const dx = x - cam.position.x, dz = z - cam.position.z, d = Math.hypot(dx, dz);
    if (d > farEnough) return true;
    const yaw = G.camYaw || 0;
    const dot = (dx * Math.sin(yaw) + dz * Math.cos(yaw)) / (d || 1);
    return dot < -0.25;
  },
  update(dt) {
    this.timer -= dt;
    if (this.timer > 0) return;
    this.timer = 0.6;
    const p = G.playerPos();
    let moving = 0, parked = 0;
    for (const v of G.vehicles) {
      if (v.removed) continue;
      const d = Math.hypot(v.x - p.x, v.z - p.z);
      if (v.driver === 'player' || v.tag === 'mission' || v.tag === 'cop') { continue; }
      if (v.exploded && v.wreckT > 40) { v.remove(); continue; }
      const far = d > DESPAWN && this.hidden(v.x, v.z, 200);
      if (far || (v.tag === 'left' && d > 520)) { v.remove(); continue; }
      if (v.ai) moving++; else if (v.parked && !v.exploded) parked++;
      // stuck AI cars get recycled when nobody is looking
      if (v.ai && (v.ai.stuckCount > 3 || v.ai.idleT > 22) && this.hidden(v.x, v.z, 60)) v.remove();
    }
    const want = Math.round(TRAFFIC_TARGET * (G.settings.quality >= 1 ? 1 : 0.6));
    for (let i = moving; i < want && i < moving + 3; i++) this.spawnMoving(p.x, p.z, SPAWN_MIN, SPAWN_MAX);
    for (let i = parked; i < PARKED_TARGET && i < parked + 2; i++) this.spawnParked(p.x, p.z, 60, 260);
  },
};
