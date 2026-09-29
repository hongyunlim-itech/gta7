// Base class for every humanoid in the world (player, civilians, cops): movement, collisions, damage, death.
import { G } from './state.js';
import { makeHumanoid, poseHumanoid, setHeldWeapon } from './models.js';
import { resolveCircle, groundHeight, obbVsCircle } from './collision.js';
import { fx } from './fx.js';
import { snd } from './sound.js';
import { clamp, rr, damp, dampAngle, wrapAngle } from './util.js';
import { LAND } from './config.js';

const _p = { x: 0, z: 0 };
const _res = { nx: 0, nz: 0, depth: 0, px: 0, pz: 0 };
const _c = { x: 0, z: 0, r: 0 };

export class Actor {
  constructor(look = {}) {
    this.kind = 'civ';
    this.x = 0; this.y = 0; this.z = 0; this.vx = 0; this.vz = 0; this.vy = 0;
    this.heading = rr(0, 6.28);
    this.radius = 0.36;
    this.maxHp = 100; this.hp = 100; this.armor = 0;
    this.dead = false; this.deadT = 0; this.fallDir = -1; this.stun = 0; this.stunAge = 0; this.removed = false;
    this.grounded = true;
    this.wishX = 0; this.wishZ = 0; this.wishSpeed = 0;
    this.aiming = false; this.aimUp = 0; this.punchT = 0; this.flee = false; this.cower = false;
    this.inVehicle = null;
    this.h = makeHumanoid(look);
    this.h.root.userData.actor = this;
    G.scene.add(this.h.root);
    G.actors.push(this);
    this.removeAfter = 22;
    this.headY = 1.65;
  }

  get speed() { return Math.hypot(this.vx, this.vz); }
  get alive() { return !this.dead && !this.removed; }

  place(x, z, heading) {
    this.x = x; this.z = z; this.y = groundHeight(x, z); if (heading !== undefined) this.heading = heading;
    this.vx = this.vz = this.vy = 0; this.grounded = true; this.sync();
  }

  setWeapon(id) { setHeldWeapon(this.h, id); this.weaponId = id; }

  // Move with acceleration towards wish velocity, resolve against world + vehicles.
  stepMove(dt, accel = 28) {
    const tvx = this.wishX * this.wishSpeed, tvz = this.wishZ * this.wishSpeed;
    const a = (this.grounded ? accel : 3) * dt;
    this.vx += clamp(tvx - this.vx, -a, a); this.vz += clamp(tvz - this.vz, -a, a);
    this.integrate(dt);
  }

  integrate(dt) {
    _p.x = this.x + this.vx * dt; _p.z = this.z + this.vz * dt;
    resolveCircle(_p, this.radius);
    // vehicles block the actor
    const vs = G.vehicles;
    for (let i = 0; i < vs.length; i++) {
      const v = vs[i];
      if (v.removed || v === this.inVehicle) continue;
      if (Math.abs(v.x - _p.x) > v.spec.hl + 2 || Math.abs(v.z - _p.z) > v.spec.hl + 2) continue;
      _c.x = _p.x; _c.z = _p.z; _c.r = this.radius;
      if (obbVsCircle(v.obb, _c, _res)) { _p.x -= _res.nx * _res.depth; _p.z -= _res.nz * _res.depth; }
    }
    const lim = LAND - 3;
    _p.x = clamp(_p.x, -lim, lim); _p.z = clamp(_p.z, -lim, lim);
    this.x = _p.x; this.z = _p.z;
    const gh = groundHeight(this.x, this.z);
    if (this.grounded) {
      this.y = Math.abs(gh - this.y) < 0.4 ? damp(this.y, gh, 22, dt) : gh;
      if (this.y > gh + 0.6) this.grounded = false;
    } else {
      this.vy -= 24 * dt; this.y += this.vy * dt;
      if (this.y <= gh) { this.y = gh; this.vy = 0; this.grounded = true; this.onLand?.(); }
    }
  }

  faceTowards(a, dt, k = 12) { this.heading = dampAngle(this.heading, a, k, dt); }

  damage(amount, src, o = {}) {
    if (this.dead || this.removed || amount <= 0) return;
    if (this.armor > 0 && !o.ignoreArmor) { const a = Math.min(this.armor, amount * 0.7); this.armor -= a; amount -= a; }
    this.hp -= amount;
    if (o.dir) fx.blood(this.x, this.y + 1.2, this.z, o.dir.x, o.dir.z, o.headshot ? 12 : 6);
    if (this.onDamaged) this.onDamaged(amount, src, o);
    if (this.hp <= 0) this.die(src, o);
  }

  die(src, o = {}) {
    if (this.dead) return;
    this.dead = true; this.deadT = 0; this.hp = 0;
    this.fallDir = Math.random() < 0.5 ? -1 : 1;
    if (o.dir) { this.vx += o.dir.x * 2.5; this.vz += o.dir.z * 2.5; }
    this.wishSpeed = 0; this.aiming = false;
    fx.blood(this.x, this.y + 1, this.z, o.dir ? o.dir.x : 0, o.dir ? o.dir.z : 0, 10);
    setTimeout(() => { if (!this.removed) fx.decal(this.x, this.z, 1.2 + Math.random() * 0.8, [0.32, 0.02, 0.02], 0.9); }, 500);
    if (this.onDeath) this.onDeath(src, o);
  }

  hitByVehicle(veh, speed, nx, nz) {
    if (this.dead || this.removed || this.inVehicle) return;
    const dmg = Math.max(0, (speed - 1.5)) * 11;
    const driver = veh.driver === 'player' ? G.player : veh;
    this.vx = nx * speed * 0.85 + veh.vx * 0.3; this.vz = nz * speed * 0.85 + veh.vz * 0.3;
    if (speed > 4) { this.vy = 2.5 + speed * 0.15; this.grounded = false; }
    if (this.stun <= 0) this.stunAge = 0;
    this.stun = Math.max(this.stun, 0.9 + speed * 0.05);
    snd.crash(0.35, this.x, this.z);
    if (this.onHitByVehicle) this.onHitByVehicle(veh, speed);
    this.damage(dmg, driver, { dir: { x: nx, z: nz }, kind: 'vehicle', vehicle: veh });
  }

  sync() {
    const r = this.h.root;
    r.position.set(this.x, this.y, this.z);
    r.rotation.y = this.heading;
  }

  // Common per-frame tail: physics for corpses / stunned, animation, transform sync.
  animate(dt, poseExtra = {}) {
    if (this.dead || this.stun > 0) {
      if (this.dead) this.deadT += dt;
      else { this.stun -= dt; this.stunAge += dt; }
      // slide / ragdoll
      const fr = Math.exp(-(this.grounded ? 3.2 : 0.2) * dt);
      this.vx *= fr; this.vz *= fr;
      if (Math.abs(this.vx) + Math.abs(this.vz) > 0.05 || !this.grounded) {
        this.integrate(dt);
      }
      const up = this.dead ? Math.min(1, this.deadT / 0.45) : Math.min(1, Math.min(this.stunAge * 4, this.stun * 4));
      poseHumanoid(this.h, dt, { speed: 0, dead: up, fallDir: this.fallDir });
    } else {
      if (this.h.deadT !== 0) { this.h.body.rotation.x = 0; this.h.body.position.set(0, 0, 0); this.h.deadT = 0; }
      poseHumanoid(this.h, dt, { speed: this.speed, aim: this.aiming, aimUp: this.aimUp, air: !this.grounded && this.vy !== 0, punch: this.punchT, flee: this.flee, cower: this.cower, ...poseExtra });
    }
    if (this.dead && this.deadT > this.removeAfter) {
      this.y -= dt * 0.5;
      if (this.deadT > this.removeAfter + 2.5) this.remove();
    }
    this.sync();
  }

  remove() {
    if (this.removed) return;
    this.removed = true;
    G.scene.remove(this.h.root);
    const i = G.actors.indexOf(this); if (i >= 0) G.actors.splice(i, 1);
    this.onRemove?.();
  }
}
