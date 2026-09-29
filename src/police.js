// Wanted system: crime reporting, police cars (road-graph pursuit), foot cops, helicopters, arrest.
import { G } from './state.js';
import { Actor } from './actor.js';
import { Vehicle } from './vehicle.js';
import { makeHelicopter, SKIN } from './models.js';
import { fireWeapon } from './combat.js';
import { lineOfSight, groundHeight } from './collision.js';
import { nodePos, nodeNeighbors, nodeId, blockIndex, NODE_COUNT } from './world.js';
import { route, nearestInter, cardinal, randomLane, DIRS } from './roads.js';
import { obstacleAhead, TrafficAI, traffic } from './traffic.js';
import { audio } from './audio.js';
import { fx } from './fx.js';
import { snd } from './sound.js';
import { GRID, PITCH, roadCenter } from './config.js';
import { clamp, wrapAngle, rr, pick, chance, dist2, damp } from './util.js';

const HEAT = { murder: 3.2, hitrun: 1.6, assault: 0.7, carjack: 1.8, copcar: 2.2, explosion: 2.6, grenade: 0.5, shots: 0.15, copattack: 1.3, copkill: 5 };
const THRESH = [1.2, 4.5, 10, 18, 30];
const CARS_FOR = [0, 2, 3, 4, 6, 8], FOOT_FOR = [0, 2, 3, 4, 5, 6];
const _n = { x: 0, z: 0 };

export function playerTarget() {
  const p = G.player, v = p.inVehicle;
  return v ? { x: v.x, y: v.y, z: v.z, vx: v.vx, vz: v.vz, veh: v } : { x: p.x, y: p.y, z: p.z, vx: p.vx, vz: p.vz, veh: null };
}

function nearestNodeId(x, z) {
  const i = clamp(blockIndex(x), 0, GRID - 1), j = clamp(blockIndex(z), 0, GRID - 1);
  let best = 0, bd = 1e12;
  for (let k = 0; k < 4; k++) { const id = nodeId(i, j, k), p = nodePos(id, _n), d = dist2(p.x, p.z, x, z); if (d < bd) { bd = d; best = id; } }
  return best;
}
function nodeRoute(a, b) {
  if (a === b) return [];
  const prev = new Map([[a, -1]]); const q = [a]; let h = 0, found = false;
  while (h < q.length && h < 600) {
    const c = q[h++];
    for (const n of nodeNeighbors(c)) { if (prev.has(n)) continue; prev.set(n, c); if (n === b) { found = true; h = q.length; break; } q.push(n); }
  }
  if (!found) return [];
  const out = []; let c = b; while (c !== a) { out.push(c); c = prev.get(c); }
  return out.reverse();
}

// ------------------------------------------------------------------ foot cop
const COP_GUN = { id: 'cop', dmg: 7, range: 95, spread: 0.06, snd: 'pistol', alert: 0 };
export class Cop extends Actor {
  constructor(x, z) {
    super({ cop: true, skin: pick(SKIN.slice(0, 4)), shirt: 0x1d2c5b, pants: 0x141c33, hair: 0x222222, shoes: 0x0a0a0a });
    this.kind = 'cop';
    this.maxHp = this.hp = 85; this.armor = 25;
    this.setWeapon('pistol');
    this.place(x, z, rr(0, 6.28));
    this.shootT = rr(0.5, 1.5); this.burst = 0; this.arrestT = 0; this.los = false; this.losT = 0;
    this.path = []; this.pathT = 0; this.state = 'chase'; this.leaveT = 0; this.stuckT = 0; this.lx = x; this.lz = z; this.hurtCd = 0;
    this.speedRun = rr(5.4, 6.4);
  }
  onDamaged(a, src) {
    if (src === G.player || (src && src.driver === 'player')) {
      if (this.hurtCd <= 0) { police.crime('copattack', this.x, this.z, null); this.hurtCd = 1.5; }
      police.hostile = true;
    }
  }
  onDeath(src) {
    if (src === G.player || (src && src.driver === 'player')) { police.crime('copkill', this.x, this.z, null); G.stats.kills++; }
    if (G.pickups && chance(0.5)) G.pickups.dropCash(this.x, this.z, Math.floor(rr(40, 160)));
  }
  update(dt) {
    if (this.dead || this.stun > 0) { this.animate(dt); return; }
    this.hurtCd -= dt; this.shootT -= dt; this.losT -= dt; this.pathT -= dt;
    this.wishSpeed = 0; this.aiming = false; this.flee = false;
    const p = G.player, t = playerTarget();
    const dx = t.x - this.x, dz = t.z - this.z, dist = Math.hypot(dx, dz);
    if (police.wanted === 0 || p.dead) {
      this.leaveT += dt;
      if (this.pathT <= 0) { this.pathT = 3; this.path = nodeRoute(nearestNodeId(this.x, this.z), (Math.random() * NODE_COUNT) | 0).slice(0, 12); }
      this.followPath(dt, 1.6);
      this.stepMove(dt); this.animate(dt);
      if (this.leaveT > 30 && dist > 90 && traffic.hidden(this.x, this.z, 60)) this.remove();
      return;
    }
    this.leaveT = 0;
    if (this.losT <= 0) { this.losT = 0.25; this.los = lineOfSight(this.x, this.y + 1.5, this.z, t.x, t.y + 1.2, t.z); }
    const hostile = police.hostile || police.wanted >= 2;
    const inRange = this.los && dist < 46;
    if (inRange) {
      // face and shoot (or close in for the arrest at 1 star)
      const closing = !hostile || dist > 16;
      this.faceTowards(Math.atan2(dx, dz), dt, 12);
      if (hostile) {
        this.aiming = true;
        this.aimUp = 0;
        if (this.shootT <= 0 && !p.dead) this.shoot(t, dist);
      }
      if (closing && dist > 1.4) { this.wishX = dx / dist; this.wishZ = dz / dist; this.wishSpeed = hostile ? 3.2 : this.speedRun; }
      else if (dist < 8 && hostile) { this.wishX = -dx / dist * 0.6 + Math.cos(G.time + this.x) * 0.5; this.wishZ = -dz / dist * 0.6; this.wishSpeed = 2; }
    } else {
      // path to the player along sidewalks
      if (this.pathT <= 0) { this.pathT = 1.2; this.path = nodeRoute(nearestNodeId(this.x, this.z), nearestNodeId(t.x, t.z)); }
      if (this.path.length) this.followPath(dt, this.speedRun);
      else if (dist > 1) { this.wishX = dx / dist; this.wishZ = dz / dist; this.wishSpeed = this.speedRun; this.faceTowards(Math.atan2(dx, dz), dt, 10); }
    }
    // arrest
    if (!p.inVehicle && !p.dead && dist < 1.9 && p.stun <= 0) {
      this.arrestT += dt;
      if (this.arrestT > 1.3 && !police.hostile) p.busted();
      else if (this.arrestT > 2.6) p.busted();
    } else this.arrestT = Math.max(0, this.arrestT - dt * 2);
    this.stepMove(dt);
    if (this.wishSpeed > 0.5) {
      if (Math.abs(this.x - this.lx) + Math.abs(this.z - this.lz) < 0.015) this.stuckT += dt; else this.stuckT = 0;
      if (this.stuckT > 2) { this.stuckT = 0; this.pathT = 0; this.los = false; this.losT = 1; }
    }
    this.lx = this.x; this.lz = this.z;
    this.animate(dt);
  }
  followPath(dt, speed) {
    while (this.path.length) {
      const n = nodePos(this.path[0], _n);
      if (Math.hypot(n.x - this.x, n.z - this.z) < 1.4) this.path.shift(); else break;
    }
    if (!this.path.length) return;
    const n = nodePos(this.path[0], _n), dx = n.x - this.x, dz = n.z - this.z, d = Math.hypot(dx, dz) || 1;
    this.wishX = dx / d; this.wishZ = dz / d; this.wishSpeed = speed;
    this.faceTowards(Math.atan2(dx, dz), dt, 10);
  }
  shoot(t, dist) {
    const w = { ...COP_GUN, dmg: 4 + police.wanted * 1.1 };
    const spread = clamp(0.085 - police.wanted * 0.011 + dist * 0.0009, 0.03, 0.14);
    const ox = this.x + Math.sin(this.heading) * 0.5, oz = this.z + Math.cos(this.heading) * 0.5, oy = this.y + 1.45;
    const tx = t.x + rr(-0.3, 0.3), ty = t.y + (t.veh ? 0.9 : 1.1), tz = t.z + rr(-0.3, 0.3);
    const dx = tx - ox, dy = ty - oy, dz = tz - oz, d = Math.hypot(dx, dy, dz);
    this.h.recoil = 1;
    fireWeapon(this, w, { x: ox, y: oy, z: oz }, { x: dx / d, y: dy / d, z: dz / d }, { x: ox, y: oy, z: oz }, { spread });
    this.burst++;
    if (this.burst >= 3) { this.burst = 0; this.shootT = rr(0.9, 1.7); } else this.shootT = 0.24;
  }
}

// ------------------------------------------------------------------ police car AI
export class PoliceAI {
  constructor() { this.isPolice = true; this.route = []; this.repath = 0; this.stuckT = 0; this.reverseT = 0; this.dodge = 1; this.crew = 2; this.stuckCount = 0; this.dismounted = false; }
  aheadInter(veh) {
    const d = cardinal(veh.heading);
    if (d[0] !== 0) {
      const j = clamp(Math.round(veh.z / PITCH + GRID / 2), 0, GRID), u = veh.x / PITCH + GRID / 2;
      return [clamp(d[0] > 0 ? Math.ceil(u + 0.12) : Math.floor(u - 0.12), 0, GRID), j];
    }
    const i = clamp(Math.round(veh.x / PITCH + GRID / 2), 0, GRID), u = veh.z / PITCH + GRID / 2;
    return [i, clamp(d[1] > 0 ? Math.ceil(u + 0.12) : Math.floor(u - 0.12), 0, GRID)];
  }
  update(veh, dt) {
    const t = playerTarget();
    const dx = t.x - veh.x, dz = t.z - veh.z, dist = Math.hypot(dx, dz), vf = veh.fwd;
    veh.handbrake = false;
    if (this.reverseT > 0) {
      this.reverseT -= dt; veh.throttle = -1; veh.brakeIn = 0; veh.steerIn = this.dodge;
      return;
    }
    if (police.wanted === 0) return;
    // stop and pile out when the suspect is on foot nearby
    if (dist < 20 && !t.veh && veh.speed < 7 && !this.dismounted) { police.dismount(veh); return; }
    const direct = dist < 48 && lineOfSight(veh.x, 1, veh.z, t.x, 1, t.z);
    let tx, tz, desired = t.veh ? clamp(t.veh.speed * 1.1 + 5, 16, 44) : 26;
    if (direct) {
      tx = t.x + t.vx * 0.45; tz = t.z + t.vz * 0.45;
      if (!t.veh) desired = clamp(dist * 0.9, 0, 26);
    } else {
      this.repath -= dt;
      if (this.repath <= 0) {
        this.repath = 1.1;
        const a = this.aheadInter(veh), b = nearestInter(t.x, t.z);
        this.route = route(a[0], a[1], b[0], b[1]);
        this.route.unshift(a);
      }
      while (this.route.length > 1 && Math.hypot(roadCenter(this.route[0][0]) - veh.x, roadCenter(this.route[0][1]) - veh.z) < 13) this.route.shift();
      if (this.route.length) {
        const n0 = this.route[0], cx = roadCenter(n0[0]), cz = roadCenter(n0[1]);
        tx = cx; tz = cz;
        const nx = this.route[1];
        if (nx) {
          const dd = Math.hypot(cx - veh.x, cz - veh.z);
          const d2x = nx[0] - n0[0], d2z = nx[1] - n0[1];
          const turning = Math.abs(Math.sin(veh.heading) * d2z - Math.cos(veh.heading) * d2x) > 0.5 || (Math.sin(veh.heading) * d2x + Math.cos(veh.heading) * d2z) < 0.5;
          if (dd < 17) { tx = cx + d2x * 25; tz = cz + d2z * 25; }
          if (turning && dd < 42) desired = Math.min(desired, 10 + dd * 0.25);
        }
      } else { tx = t.x; tz = t.z; }
    }
    const err = wrapAngle(Math.atan2(tx - veh.x, tz - veh.z) - veh.heading);
    veh.steerIn = clamp(err * 2.2, -1, 1);
    desired = Math.min(desired, 34 - 24 * clamp(Math.abs(err) / 1.2, 0, 1));
    // avoid ploughing into civilians at low speed
    const ob = obstacleAhead(veh, 7 + Math.max(0, vf) * 0.9);
    if (ob < Infinity && !(t.veh && dist < 12)) desired = Math.min(desired, Math.max(0, ob - 2.5) * 1.3);
    if (ob < 2.2 && veh.speed < 2 && !(t.veh && dist < 12)) { this.stuckT += dt * 2; }
    const e = desired - vf;
    if (e > 0) { veh.throttle = clamp(e * 0.5, 0, 1); veh.brakeIn = 0; } else { veh.throttle = 0; veh.brakeIn = clamp(-e * 0.2, 0, 1); }
    if (desired < 0.5 && vf < 1) { veh.brakeIn = 0.5; veh.throttle = 0; }
    if (desired > 3 && Math.abs(vf) < 0.5) this.stuckT += dt; else this.stuckT = Math.max(0, this.stuckT - dt);
    if (this.stuckT > 2) { this.stuckT = 0; this.reverseT = 1.3; this.dodge = -Math.sign(err || 1); this.stuckCount++; this.repath = 0; }
  }
  onDamage() {}
  onCrash(veh, imp) { if (imp > 12 && veh.hpFrac < 0.4) veh.siren = true; }
}

// ------------------------------------------------------------------ helicopter
const HELI_GUN = { id: 'heli', dmg: 4.5, range: 170, spread: 0.05, snd: 'rifle', alert: 0 };
export class Heli {
  constructor(x, z) {
    this.model = makeHelicopter(); G.scene.add(this.model.group);
    this.x = x; this.z = z; this.y = 70; this.vx = this.vz = this.vy = 0; this.yaw = 0; this.hp = 900; this.dead = false;
    this.ang = Math.random() * 6.28; this.shootT = 2; this.burst = 0; this.leave = false; this.tilt = 0; this.rollT = 0; this.removed = false; this.fall = 0;
    G.helis.push(this);
  }
  damage(a, src) {
    if (this.dead) return; this.hp -= a;
    if (this.hp <= 0) {
      this.dead = true; this.fall = 0.01;
      police.hostile = true;
      if (src === G.player && G.hud) G.hud.toast('Helicopter down!');
    }
  }
  update(dt) {
    const m = this.model;
    m.rotor.rotation.y += dt * (this.dead ? 6 : 34); m.tail.rotation.x += dt * 30;
    if (this.dead) {
      this.fall += dt; this.vy -= 22 * dt; this.y += this.vy * dt; this.yaw += dt * 3; this.x += this.vx * dt; this.z += this.vz * dt;
      if (Math.random() < dt * 30) fx.blackSmoke(this.x, this.y, this.z, 1.6);
      m.group.rotation.z += dt * 1.5;
      if (this.y < groundHeight(this.x, this.z) + 1.5) {
        G.explode(this.x, this.y, this.z, 12, 380, { source: null });
        if (G.pickups) G.pickups.dropCash(this.x + 2, this.z, 400);
        this.remove(); return;
      }
    } else {
      const t = playerTarget();
      let tx, tz, ty = 50;
      if (this.leave || police.wanted === 0) { tx = this.x + 200; tz = this.z; ty = 140; this.leave = true; if (this.y > 120) { this.remove(); return; } }
      else { this.ang += dt * 0.32; tx = t.x + Math.cos(this.ang) * 36; tz = t.z + Math.sin(this.ang) * 36; ty = 46 + Math.sin(G.time * 0.5) * 4; }
      const ax = (tx - this.x) * 0.9, az = (tz - this.z) * 0.9;
      const sp = Math.hypot(ax, az), cap = 34;
      const k = sp > cap ? cap / sp : 1;
      this.vx = damp(this.vx, ax * k, 1.4, dt); this.vz = damp(this.vz, az * k, 1.4, dt); this.vy = damp(this.vy, (ty - this.y) * 0.8, 1.5, dt);
      this.x += this.vx * dt; this.z += this.vz * dt; this.y += this.vy * dt;
      const want = Math.atan2(t.x - this.x, t.z - this.z);
      this.yaw += wrapAngle(want - this.yaw) * Math.min(1, dt * 2.2);
      // shooting
      this.shootT -= dt;
      const d = Math.hypot(t.x - this.x, t.z - this.z);
      if (!this.leave && police.wanted >= 3 && d < 110 && this.shootT <= 0 && !G.player.dead) {
        if (lineOfSight(this.x, this.y - 1, this.z, t.x, t.y + 1.2, t.z)) {
          const ox = this.x, oy = this.y - 1.2, oz = this.z;
          const tx2 = t.x + rr(-1, 1), ty2 = t.y + 1, tz2 = t.z + rr(-1, 1);
          const dx = tx2 - ox, dy = ty2 - oy, dz = tz2 - oz, dd = Math.hypot(dx, dy, dz);
          const w = { ...HELI_GUN, dmg: 2.5 + police.wanted * 0.8 };
          fireWeapon(this, w, { x: ox, y: oy, z: oz }, { x: dx / dd, y: dy / dd, z: dz / dd }, { x: ox + dx / dd * 2, y: oy + dy / dd * 2, z: oz + dz / dd * 2 }, { spread: 0.045 });
          this.burst++; if (this.burst >= 8) { this.burst = 0; this.shootT = rr(2.2, 3.5); } else this.shootT = 0.09;
        } else this.shootT = 0.6;
      }
    }
    m.group.position.set(this.x, this.y, this.z);
    this.tilt = damp(this.tilt, this.dead ? 0.3 : clamp(Math.hypot(this.vx, this.vz) * 0.014, 0, 0.3), 3, dt);
    if (!this.dead) m.group.rotation.set(this.tilt, this.yaw, clamp((this.vx * Math.cos(this.yaw) - this.vz * Math.sin(this.yaw)) * 0.012, -0.25, 0.25), 'YXZ');
    else m.group.rotation.y = this.yaw;
  }
  remove() {
    if (this.removed) return; this.removed = true; this.dead = true;
    G.scene.remove(this.model.group);
    const i = G.helis.indexOf(this); if (i >= 0) G.helis.splice(i, 1);
  }
}

// ------------------------------------------------------------------ manager
export const police = {
  wanted: 0, heat: 0, evadeT: 0, hostile: false, evading: false, timer: 0, seenT: 0, spawnT: 0, msgCd: 0,
  cops: [],

  crime(type, x, z, victim, weight) {
    const p = G.player;
    if (!p || p.dead) return;
    const base = weight ?? HEAT[type] ?? 1;
    const seen = this.copNear(x, z, 78) || this.pedNear(x, z, 26, victim);
    if (!seen) return;
    if (type === 'copattack' || type === 'copkill') this.hostile = true;
    this.addHeat(base);
  },
  addHeat(n) {
    this.heat += n; this.evadeT = 0;
    let s = 0; for (const th of THRESH) if (this.heat >= th) s++;
    if (s > this.wanted) {
      this.wanted = s; audio.wantedUp();
      if (G.hud) G.hud.toast(`Wanted level ${s}`, 1500);
    }
  },
  copNear(x, z, r) {
    const r2 = r * r;
    for (const a of G.actors) if (a.kind === 'cop' && !a.dead && dist2(a.x, a.z, x, z) < r2) return true;
    for (const v of G.vehicles) if (v.key === 'police' && !v.exploded && v.driver && dist2(v.x, v.z, x, z) < r2) return true;
    return false;
  },
  pedNear(x, z, r, except) {
    const r2 = r * r;
    for (const a of G.actors) if (a.kind === 'civ' && a !== except && !a.dead && dist2(a.x, a.z, x, z) < r2) return true;
    return false;
  },
  clear(silent) {
    const had = this.wanted > 0;
    this.wanted = 0; this.heat = 0; this.evadeT = 0; this.hostile = false; this.evading = false;
    for (const v of G.vehicles) {
      if (v.ai && v.ai.isPolice) {
        v.ai = new TrafficAI(v, { dir: cardinal(v.heading), ni: 0, nj: 0 }); v.ai.recover(v); v.driver = 'ai'; v.siren = false; v.tag = null;
      } else if (v.key === 'police') v.siren = false;
    }
    for (const h of G.helis) h.leave = true;
    if (had && !silent) { audio.wantedClear(); if (G.hud) G.hud.toast('Wanted level cleared', 2000); }
    audio.siren(0); audio.heli(0);
  },
  ejectCop(veh) {
    const n = veh.ai && veh.ai.crew ? veh.ai.crew : 1;
    veh.driver = null; veh.ai = null;
    for (let i = 0; i < n; i++) { const s = veh.exitSpot(i === 0); const c = new Cop(s.x, s.z); this.cops.push(c); }
    this.hostile = true;
  },
  dismount(veh) {
    if (!veh.ai || veh.ai.dismounted) return;
    veh.ai.dismounted = true;
    const n = veh.ai.crew;
    let alive = this.cops.filter((c) => !c.removed && !c.dead).length;
    for (let i = 0; i < n && alive < 12; i++) { const s = veh.exitSpot(i === 0); const c = new Cop(s.x, s.z); this.cops.push(c); alive++; }
    veh.driver = null; veh.ai = null; veh.tag = 'cop';
    veh.brakeIn = 0.6;
  },

  spawnCar() {
    const p = G.playerPos();
    for (let n = 0; n < 8; n++) {
      const lane = randomLane(p.x, p.z, 150, 270, 10);
      if (!lane || !traffic.hidden(lane.x, lane.z, 120) || !traffic.clear(lane.x, lane.z, 12)) continue;
      const v = new Vehicle('police', lane.x, lane.z, lane.heading);
      v.driver = 'cop'; v.tag = 'cop'; v.siren = true; v.ai = new PoliceAI();
      v.vx = Math.sin(v.heading) * 14; v.vz = Math.cos(v.heading) * 14;
      return v;
    }
    return null;
  },
  spawnFoot() {
    const p = G.playerPos();
    for (let n = 0; n < 16; n++) {
      const id = (Math.random() * NODE_COUNT) | 0, q = nodePos(id, _n), d = Math.hypot(q.x - p.x, q.z - p.z);
      if (d < 55 || d > 130 || (d < 90 && !traffic.hidden(q.x, q.z, 90))) continue;
      const c = new Cop(q.x, q.z); this.cops.push(c); return c;
    }
    return null;
  },

  update(dt) {
    const p = G.player;
    for (let i = this.cops.length - 1; i >= 0; i--) { const c = this.cops[i]; if (c.removed) this.cops.splice(i, 1); else c.update(dt); }
    for (let i = G.helis.length - 1; i >= 0; i--) G.helis[i].update(dt);
    this.timer -= dt;
    if (this.timer > 0) return;
    this.timer = 0.4;
    const t = playerTarget();
    let sirenLevel = 0, heliLevel = 0, seen = false;
    for (const v of G.vehicles) {
      if (v.key !== 'police' || v.exploded) continue;
      const d = Math.hypot(v.x - t.x, v.z - t.z);
      if (v.siren) sirenLevel = Math.max(sirenLevel, clamp(1 - d / 230, 0, 1));
      if (this.wanted > 0 && v.ai && v.ai.isPolice && d < 55 && lineOfSight(v.x, 1.2, v.z, t.x, 1.2, t.z)) seen = true;
      // ambient patrol cars join the pursuit
      if (this.wanted > 0 && v.ai && !v.ai.isPolice && v.driver === 'ai' && d < 160) { v.ai = new PoliceAI(); v.driver = 'cop'; v.tag = 'cop'; v.siren = true; }
    }
    for (const c of this.cops) if (!c.dead && !c.removed && c.los && dist2(c.x, c.z, t.x, t.z) < 55 * 55) seen = true;
    for (const h of G.helis) {
      if (h.dead) continue;
      const d = Math.hypot(h.x - t.x, h.z - t.z);
      heliLevel = Math.max(heliLevel, clamp(1 - d / 260, 0, 1));
      if (d < 130 && lineOfSight(h.x, h.y, h.z, t.x, t.y + 1, t.z)) seen = true;
    }
    audio.siren(sirenLevel * (this.wanted > 0 ? 1 : 0.6)); audio.heli(heliLevel);
    if (this.wanted > 0) {
      if (seen) this.evadeT = 0; else this.evadeT += 0.4;
      this.evading = this.evadeT > 2.5;
      if (this.evadeT > 15 + this.wanted * 2.5) this.clear(false);
      // reinforcements
      this.spawnT -= 0.4;
      if (this.spawnT <= 0 && !p.dead) {
        this.spawnT = 2.2;
        const cars = G.vehicles.filter((v) => v.ai && v.ai.isPolice && !v.exploded).length;
        const foot = this.cops.filter((c) => !c.dead && !c.removed).length;
        if (cars < CARS_FOR[this.wanted]) this.spawnCar();
        else if (foot < FOOT_FOR[this.wanted] && this.cops.length < 14) this.spawnFoot();
        const want = this.wanted >= 5 ? 2 : this.wanted >= 3 ? 1 : 0;
        if (G.helis.filter((h) => !h.dead && !h.leave).length < want) { const a = Math.random() * 6.28; new Heli(t.x + Math.cos(a) * 220, t.z + Math.sin(a) * 220); }
      }
    }
  },
};
G.police = police;
