// Arcade vehicle physics, damage, fire/explosions, and collisions (world, other vehicles, pedestrians).
import * as THREE from 'three';
import { G } from './state.js';
import { VTYPES, makeVehicleModel, M } from './models.js';
import { groundHeight, obbStatics, obbVsOBB, obbVsCircle, resolveCircle } from './collision.js';
import { fx } from './fx.js';
import { snd } from './sound.js';
import { clamp, damp, rr, wrapAngle, TAU } from './util.js';
import { LAND } from './config.js';

const _r = { nx: 0, nz: 0, depth: 0, px: 0, pz: 0 };
const _c = { x: 0, z: 0, r: 0 };
let nextId = 1;
const G_ACC = 24;

export class Vehicle {
  constructor(key, x, z, heading, color) {
    this.id = nextId++;
    this.key = key; this.spec = VTYPES[key];
    const s = this.spec;
    this.model = makeVehicleModel(key, color, G.world.headlightTex);
    this.model.group.rotation.order = 'YXZ';
    this.x = x; this.z = z; this.y = groundHeight(x, z); this.heading = heading;
    this.vx = 0; this.vz = 0; this.vy = 0; this.yawRate = 0; this.spin = 0;
    this.pitch = 0; this.roll = 0; this.steer = 0; this.air = false; this.rampVy = 0;
    this.throttle = 0; this.steerIn = 0; this.brakeIn = 0; this.handbrake = false;
    this.hp = s.hp; this.maxHp = s.hp; this.burning = false; this.fuse = 0; this.exploded = false; this.wreckT = 0;
    this.driver = null; this.ai = null; this.siren = false; this.removed = false;
    this.rad = Math.hypot(s.hl, s.hw);
    this.obb = { x, z, hl: s.hl, hw: s.hw, fx: Math.sin(heading), fz: Math.cos(heading) };
    this.skidT = 0; this.lastSkid = { l: null, r: null };
    this.fireT = 0; this.lastDamager = null; this.owned = false; this.stolen = false;
    this.brakeLit = false; this.slip = 0; this.wheelRot = 0; this.tag = null;
    G.scene.add(this.model.group);
    G.vehicles.push(this);
    this.sync(0);
  }

  get speed() { return Math.hypot(this.vx, this.vz); }
  get fwd() { return this.vx * Math.sin(this.heading) + this.vz * Math.cos(this.heading); }
  get lat() { return this.vx * -Math.cos(this.heading) + this.vz * Math.sin(this.heading); }
  get hpFrac() { return clamp(this.hp / this.maxHp, 0, 1); }

  // Door position on the given side (-1 = right, +1 = left)
  doorPoint(side, out = {}) {
    const f = Math.sin(this.heading), g = Math.cos(this.heading);
    const lx = g, lz = -f; // left vector
    const d = this.spec.hw + 0.85;
    out.x = this.x + lx * side * d; out.z = this.z + lz * side * d; out.heading = this.heading;
    return out;
  }
  // First clear spot beside the car to place a person
  exitSpot(preferLeft = true, r = 0.4) {
    const order = preferLeft ? [1, -1] : [-1, 1];
    const p = { x: 0, z: 0 };
    for (const side of order) {
      this.doorPoint(side, p);
      const q = { x: p.x, z: p.z };
      if (!resolveCircle(q, r + 0.05)) return { x: p.x, z: p.z };
    }
    // fall back: behind the car
    const f = Math.sin(this.heading), g = Math.cos(this.heading);
    return { x: this.x - f * (this.spec.hl + 1.2), z: this.z - g * (this.spec.hl + 1.2) };
  }

  damage(amount, src) {
    if (this.exploded || amount <= 0 || this.removed) return;
    this.hp -= amount;
    if (src) this.lastDamager = src;
    if (this.hp <= 0 && !this.burning) { this.burning = true; this.fuse = 2.2 + Math.random() * 2.4; }
    this.updatePaint();
    if (this.driver === 'player' && G.hud) G.hud.damageFlash(0.25);
    if (this.ai && this.ai.onDamage) this.ai.onDamage(this, src, amount);
  }

  updatePaint() {
    const t = this.hpFrac;
    this.model.paintMat.color.copy(this.model.baseColor).multiplyScalar(this.exploded ? 0.08 : 0.35 + 0.65 * t);
    this.model.paintMat.roughness = 0.32 + (1 - t) * 0.5;
  }

  explode() {
    if (this.exploded) return;
    this.exploded = true; this.burning = true; this.wreckT = 0;
    const big = this.spec.len > 8 ? 1.5 : 1;
    G.explode(this.x, this.y + 0.6, this.z, 9 * big, 320, { source: this.lastDamager, vehicle: this });
    this.vy = 8; this.air = true; this.spin += rr(-2.5, 2.5); this.vx += rr(-2, 2); this.vz += rr(-2, 2);
    this.throttle = 0; this.steerIn = 0;
    if (this.driver === 'player') G.player.onVehicleExploded(this);
    this.driver = null; this.ai = null; this.siren = false;
    this.model.headMesh.visible = false; this.model.tailMesh.visible = false;
    if (this.model.beam) this.model.beam.visible = false;
    if (this.model.bar) { this.model.bar.red.material = M.barOff; this.model.bar.blue.material = M.barOff; }
    this.updatePaint();
  }

  updateObb() {
    const o = this.obb;
    o.x = this.x; o.z = this.z; o.fx = Math.sin(this.heading); o.fz = Math.cos(this.heading);
  }

  update(dt) {
    if (this.removed) return;
    const s = this.spec;
    if (this.exploded) { this.throttle = 0; this.steerIn = 0; this.brakeIn = 0.1; this.handbrake = false; }
    else if (this.ai) this.ai.update(this, dt);
    else if (!this.driver) { this.throttle = 0; this.steerIn = 0; this.brakeIn = 0.4; this.handbrake = this.speed < 3.5; }

    const fxv = Math.sin(this.heading), fzv = Math.cos(this.heading), rxv = -fzv, rzv = fxv;
    let vf = this.vx * fxv + this.vz * fzv, vl = this.vx * rxv + this.vz * rzv;
    const speedN = Math.abs(vf) / s.vmax;
    const gh = groundHeight(this.x, this.z);

    if (!this.air) {
      // ---- steering angle (limited at speed) ----
      const maxAng = s.steer * (1 - 0.68 * clamp(speedN * 1.25, 0, 1));
      const target = this.steerIn * maxAng;
      const rate = (Math.abs(target) > Math.abs(this.steer) ? 2.6 : 4.2) * dt;
      this.steer += clamp(target - this.steer, -rate, rate);
      // ---- longitudinal ----
      const th = this.throttle;
      let a = 0;
      if (th > 0.01) a = vf < -1.5 ? s.brake * th : th * s.acc * clamp(1 - Math.pow(Math.max(vf, 0) / s.vmax, 2.2), 0, 1);
      else if (th < -0.01) a = vf > 1.5 ? -s.brake * -th : th * s.acc * 0.55 * clamp(1 - (-vf) / (s.vmax * 0.3), 0, 1);
      if (th > 0.01 && vf < -1.5 || th < -0.01 && vf > 1.5) { const d = Math.min(Math.abs(vf), s.brake * Math.abs(th) * dt); vf -= Math.sign(vf) * d; a = 0; }
      vf += a * dt;
      if (this.brakeIn > 0.01) vf -= Math.sign(vf) * Math.min(Math.abs(vf), s.brake * this.brakeIn * dt);
      if (Math.abs(th) < 0.01 && this.brakeIn < 0.01) vf -= Math.sign(vf) * Math.min(Math.abs(vf), 1.4 * dt);
      vf -= vf * Math.abs(vf) * 0.0009 * dt;
      if (this.handbrake) vf -= Math.sign(vf) * Math.min(Math.abs(vf), 9 * dt);
      // ---- lateral grip ----
      let grip = this.handbrake ? 1.25 : s.grip;
      if (this.handbrake) grip *= 1; else grip *= 1 - 0.28 * clamp(Math.abs(this.steer) / s.steer, 0, 1) * clamp(speedN * 2, 0, 1);
      vl *= Math.exp(-grip * dt);
      // ---- yaw ----
      let yaw = (vf / s.wb) * Math.tan(this.steer);
      if (this.handbrake && Math.abs(vf) > 4) yaw *= 1.7;
      // cornering is limited by lateral grip: yaw rate <= a_lat / speed (drifts allowed with the handbrake)
      const aLat = s.grip * 2.3 * (this.handbrake ? 2.2 : 1);
      const yawMax = Math.min(2.8, aLat / Math.max(Math.abs(vf), 3));
      this.yawRate = damp(this.yawRate, clamp(yaw, -yawMax, yawMax), 14, dt);
      this.slip = Math.abs(vl);
    } else {
      this.yawRate *= Math.exp(-0.5 * dt);
    }

    this.vx = fxv * vf + rxv * vl; this.vz = fzv * vf + rzv * vl;
    this.heading = wrapAngle(this.heading + (this.yawRate + this.spin) * dt);
    this.spin *= Math.exp(-2.6 * dt);
    this.x += this.vx * dt; this.z += this.vz * dt;

    // ---- vertical / ramps ----
    const gh2 = groundHeight(this.x, this.z);
    if (this.air) {
      this.vy -= G_ACC * dt; this.y += this.vy * dt;
      if (this.y <= gh2) {
        const imp = -this.vy; this.y = gh2; this.vy = 0; this.air = false;
        if (imp > 5) { this.crashed(imp * 0.8, this.x, this.z, 0, 1); }
        if (imp > 3) { fx.dust(this.x, 0.3, this.z, 8, 4, 1.5); }
      }
    } else {
      const prev = this.y;
      // climb rate along ramps (measured from the slope behind us) so we can launch off the lip
      const onRamp = gh2 > 0.3;
      if (onRamp) {
        const behind = groundHeight(this.x - fxv * 0.6, this.z - fzv * 0.6);
        this.rampVy = damp(this.rampVy, Math.max(0, ((gh2 - behind) / 0.6) * vf), 30, dt);
      }
      if (gh2 < prev - 0.35 && this.rampVy > 1.5 && Math.abs(vf) > 5) { this.air = true; this.vy = this.rampVy; this.rampVy = 0; }
      else {
        if (!onRamp) this.rampVy = 0;
        if (Math.abs(gh2 - prev) < 0.5) this.y = damp(prev, gh2, 26, dt);
        else this.y = gh2;
      }
    }
    // pitch from ground slope / trajectory
    let pt;
    if (this.air) pt = -Math.atan2(this.vy, Math.max(4, Math.abs(this.fwd))) * 0.9;
    else {
      const hF = groundHeight(this.x + fxv * s.hl * 0.85, this.z + fzv * s.hl * 0.85), hR = groundHeight(this.x - fxv * s.hl * 0.85, this.z - fzv * s.hl * 0.85);
      pt = -Math.atan2(hF - hR, s.hl * 1.7);
      // accel squat / brake dive
      pt += clamp(-(this.throttle - this.brakeIn * Math.sign(vf)) * 0.015, -0.03, 0.03);
    }
    this.pitch = damp(this.pitch, pt, 10, dt);
    this.roll = damp(this.roll, clamp(vl * 0.012 * clamp(speedN * 3, 0, 1), -0.07, 0.07), 6, dt);

    this.updateObb();
    this.collideWorld(dt);
    if (Math.abs(this.speed) > 0.8) this.hitActors();
    // world bounds
    const lim = LAND - 4;
    if (Math.abs(this.x) > lim) { this.x = Math.sign(this.x) * lim; this.vx *= -0.3; this.vz *= 0.9; }
    if (Math.abs(this.z) > lim) { this.z = Math.sign(this.z) * lim; this.vz *= -0.3; this.vx *= 0.9; }

    this.updateFireState(dt);
    this.skidMarks(dt);
  }

  collideWorld(dt) {
    obbStatics(this.obb, (res, c) => {
      if (this.y > c.h + 0.4 || c.tag === 'pond') return;
      if (c.rb && ((c.rb.axis === 'x' ? this.x : this.z) - c.rb.edge) * c.rb.sign < 0) return; // on the ramp side
      this.x += res.nx * res.depth; this.z += res.nz * res.depth;
      this.obb.x = this.x; this.obb.z = this.z;
      const vn = this.vx * res.nx + this.vz * res.nz;
      if (vn < 0) {
        const imp = -vn;
        this.vx -= 1.22 * vn * res.nx; this.vz -= 1.22 * vn * res.nz;
        const tx = -res.nz, tz = res.nx, vt = this.vx * tx + this.vz * tz;
        this.vx -= tx * vt * 0.06; this.vz -= tz * vt * 0.06;
        const rx = res.px - this.x, rz = res.pz - this.z;
        this.spin += clamp((rz * res.nx - rx * res.nz) * imp * 0.045, -2, 2);
        this.crashed(imp, res.px, res.pz, res.nx, res.nz, c);
      }
    });
  }

  crashed(imp, px, pz, nx, nz, other) {
    if (imp < 2.2) return;
    const soft = other && (other.tag === 'tree' || other.tag === 'lamp' || other.tag === 'signal') ? 0.45 : 1;
    const dmg = Math.pow(Math.max(imp - 2.6, 0), 2) * 3.4 * soft * Math.sqrt(1500 / this.spec.mass);
    if (dmg > 1) this.damage(dmg, null);
    snd.crash(clamp(imp / 16, 0.15, 1), px, pz);
    if (imp > 4) fx.spark(px, this.y + 0.5, pz, nx, 0.4, nz, Math.min(10, Math.floor(imp)), 4);
    if (this.driver === 'player') G.shake = Math.min(1, (G.shake || 0) + clamp(imp / 30, 0, 0.6));
    if (this.driver === 'player' && imp > 9 && G.player) G.player.onCrash(imp);
    if (this.ai && this.ai.onCrash) this.ai.onCrash(this, imp, other);
    if (other && other.tag === 'lamp' && imp > 6) fx.debris(px, 1.5, pz, 5, 5, [0.3, 0.3, 0.3]);
  }

  hitActors() {
    const acts = G.actors, o = this.obb;
    const f = Math.sin(this.heading), g = Math.cos(this.heading);
    for (let i = 0; i < acts.length; i++) {
      const a = acts[i];
      if (a.removed || a.inVehicle) continue;
      const dx = a.x - this.x, dz = a.z - this.z;
      if (Math.abs(dx) > this.rad + 1 || Math.abs(dz) > this.rad + 1) continue;
      if (Math.abs(a.y - this.y) > 1.5) continue;
      _c.x = a.x; _c.z = a.z; _c.r = a.radius;
      if (!obbVsCircle(o, _c, _r)) continue;
      const toward = -(this.vx * _r.nx + this.vz * _r.nz); // speed of car moving toward the actor
      if (toward < 1.2) continue;
      if (a.dead) { a.vx += -_r.nx * toward * 0.5; a.vz += -_r.nz * toward * 0.5; continue; }
      if (a.stun > 0.5) continue;
      a.hitByVehicle(this, toward, -_r.nx, -_r.nz);
      this.vx *= 0.985; this.vz *= 0.985;
      if (this.driver === 'player' && toward > 3) G.shake = Math.min(1, (G.shake || 0) + 0.1);
    }
  }

  updateFireState(dt) {
    const s = this.spec, f = Math.sin(this.heading), g = Math.cos(this.heading);
    if (this.exploded) {
      this.wreckT += dt;
      if (this.wreckT < 30 && Math.random() < dt * 30) fx.fire(this.x + rr(-1, 1), this.y + 0.8, this.z + rr(-1, 1), 1.1);
      if (this.wreckT < 40 && Math.random() < dt * 14) fx.blackSmoke(this.x, this.y + 1, this.z, 1.3);
      return;
    }
    if (this.burning) {
      this.fuse -= dt;
      if (Math.random() < dt * 40) fx.fire(this.x + f * s.hl * 0.55, this.y + 0.9, this.z + g * s.hl * 0.55, 0.9);
      if (Math.random() < dt * 18) fx.blackSmoke(this.x + f * s.hl * 0.5, this.y + 1, this.z + g * s.hl * 0.5, 0.8);
      if (this.fuse <= 0) this.explode();
    } else if (this.hpFrac < 0.3) {
      const k = (0.3 - this.hpFrac) / 0.3;
      if (Math.random() < dt * (6 + 14 * k)) fx.smoke(this.x + f * s.hl * 0.6, this.y + 0.95, this.z + g * s.hl * 0.6, 0.8, 0.5 - 0.35 * k);
      if (this.hpFrac < 0.12 && Math.random() < dt * 10) fx.fire(this.x + f * s.hl * 0.6, this.y + 0.9, this.z + g * s.hl * 0.6, 0.5);
    }
  }

  skidMarks(dt) {
    if (this.air) { this.lastSkid.l = null; return; }
    const skidding = (this.slip > 3.2 && this.speed > 4) || (this.handbrake && this.speed > 5) || (this.brakeIn > 0.8 && this.speed > 10) || (this.throttle > 0.9 && this.speed < 5 && this.slip > 1.5);
    this.skidding = skidding;
    if (!skidding) { this.lastSkid.l = null; return; }
    this.skidT -= dt;
    if (this.skidT > 0) return;
    this.skidT = 0.05;
    const s = this.spec, f = Math.sin(this.heading), g = Math.cos(this.heading), lx = g, lz = -f;
    for (const side of [-1, 1]) {
      const x = this.x - f * s.wb * 0.5 + lx * side * s.track * 0.5, z = this.z - g * s.wb * 0.5 + lz * side * s.track * 0.5;
      fx.skid(x - f * 0.3, z - g * 0.3, this.heading, 1.0, 0.26);
    }
    if (Math.random() < 0.4) fx.dust(this.x - f * s.wb * 0.5, 0.2, this.z - g * s.wb * 0.5, 1, 1.2, 0.8);
  }

  // Visual update, called every render frame
  sync(dt) {
    const m = this.model, s = this.spec;
    if (G.envI !== undefined) m.paintMat.envMapIntensity = G.envI;
    m.group.position.set(this.x, this.y, this.z);
    m.group.rotation.set(this.pitch, this.heading, this.roll);
    const vf = this.fwd;
    this.wheelRot += (vf * dt) / s.wr;
    for (const w of m.wheels) {
      w.spin.rotation.x = this.wheelRot;
      if (w.front) w.pivot.rotation.y = this.steer;
    }
    // lights
    const night = G.night > 0.35;
    const occupied = !!(this.driver || this.ai);
    const lightsOn = night && occupied && !this.exploded;
    m.headMesh.material = lightsOn ? M.headOn : M.headOff;
    this.brakeLit = this.brakeIn > 0.05 || (this.throttle < -0.1 && vf > 1);
    m.tailMesh.material = this.brakeLit && !this.exploded ? M.tailOn : M.tailOff;
    if (m.beam) {
      const cam = G.camera;
      m.beam.visible = lightsOn && cam && Math.abs(cam.position.x - this.x) < 140 && Math.abs(cam.position.z - this.z) < 140;
    }
    if (m.bar) {
      if (this.siren && !this.exploded) {
        const ph = Math.floor(G.time * 5) % 2 === 0;
        m.bar.red.material = ph ? M.redOn : M.barOff; m.bar.blue.material = ph ? M.barOff : M.blueOn;
      } else { m.bar.red.material = M.barOff; m.bar.blue.material = M.barOff; }
    }
  }

  remove() {
    if (this.removed) return;
    this.removed = true;
    G.scene.remove(this.model.group);
    this.model.paintMat.dispose();
    const i = G.vehicles.indexOf(this); if (i >= 0) G.vehicles.splice(i, 1);
  }
}

// ---------------------------------------------------------------- vehicle vs vehicle
function pairCollide(a, b) {
  const dx = a.x - b.x, dz = a.z - b.z, R = a.rad + b.rad;
  if (dx * dx + dz * dz > R * R) return;
  if (Math.abs(a.y - b.y) > 2.5) return;
  if (!obbVsOBB(a.obb, b.obb, _r)) return;
  const ma = a.spec.mass, mb = b.spec.mass, tot = ma + mb;
  const nx = _r.nx, nz = _r.nz, d = _r.depth + 0.01;
  a.x += nx * d * (mb / tot); a.z += nz * d * (mb / tot);
  b.x -= nx * d * (ma / tot); b.z -= nz * d * (ma / tot);
  a.updateObb(); b.updateObb();
  const vrel = (a.vx - b.vx) * nx + (a.vz - b.vz) * nz;
  if (vrel >= 0) return;
  const j = (-(1 + 0.32) * vrel) / (1 / ma + 1 / mb);
  a.vx += (j / ma) * nx; a.vz += (j / ma) * nz; b.vx -= (j / mb) * nx; b.vz -= (j / mb) * nz;
  const imp = -vrel;
  const cx = _r.px, cz = _r.pz;
  a.spin += clamp(((cz - a.z) * nx - (cx - a.x) * nz) * imp * 0.03 * (mb / tot) * 2, -2, 2);
  b.spin += clamp(-((cz - b.z) * nx - (cx - b.x) * nz) * imp * 0.03 * (ma / tot) * 2, -2, 2);
  if (imp > 2.2) {
    const base = Math.pow(imp - 2.2, 2) * 3.2;
    a.damage(base * (mb / tot) * 1.6, b.driver === 'player' ? G.player : b); b.damage(base * (ma / tot) * 1.6, a.driver === 'player' ? G.player : a);
    snd.crash(clamp(imp / 14, 0.2, 1), cx, cz);
    fx.spark(cx, a.y + 0.6, cz, nx, 0.3, nz, Math.min(12, Math.floor(imp * 1.2)), 4);
    if (a.driver === 'player' || b.driver === 'player') { G.shake = Math.min(1, (G.shake || 0) + clamp(imp / 25, 0, 0.6)); if (imp > 9) G.player.onCrash(imp); }
    if (a.ai && a.ai.onCrash) a.ai.onCrash(a, imp, b);
    if (b.ai && b.ai.onCrash) b.ai.onCrash(b, imp, a);
  }
}

export function updateVehicles(dt) {
  const vs = G.vehicles;
  for (let i = 0; i < vs.length; i++) vs[i].update(dt);
  for (let i = 0; i < vs.length; i++) {
    const a = vs[i]; if (a.removed) continue;
    for (let j = i + 1; j < vs.length; j++) { const b = vs[j]; if (!b.removed) pairCollide(a, b); }
  }
  for (let i = vs.length - 1; i >= 0; i--) if (vs[i].removed) vs.splice(i, 1);
}
export function syncVehicles(dt) {
  const vs = G.vehicles;
  for (let i = 0; i < vs.length; i++) vs[i].sync(dt);
}
