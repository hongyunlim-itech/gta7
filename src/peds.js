// Civilian pedestrians: walk the sidewalk graph, react to violence, and occasionally fight back.
import { G } from './state.js';
import { Actor } from './actor.js';
import { SKIN, SHIRTS, PANTS, HAIR } from './models.js';
import { nodePos, nodeNeighbors, nodeId, NODE_COUNT, blockIndex } from './world.js';
import { traffic } from './traffic.js';
import { snd } from './sound.js';
import { fireWeapon } from './combat.js';
import { lineOfSight } from './collision.js';
import { GRID, BLOCK, PITCH, HALF, blockCenter } from './config.js';
import { clamp, rr, pick, chance, wrapAngle, dist2 } from './util.js';

const TARGET = 52, SPAWN_MIN = 45, SPAWN_MAX = 125, DESPAWN = 165;
const _n = { x: 0, z: 0 };
const HATS = [0xb03a2e, 0x2e4053, 0xd4ac0d, 0x1e8449, 0x5d6d7e];
const JACKETS = [0x3b2f2f, 0x1c2833, 0x4a235a, 0x7b7d7d, 0x6e2c00];

export class Ped extends Actor {
  constructor(node) {
    const look = {
      skin: pick(SKIN), shirt: pick(SHIRTS), pants: pick(PANTS), hair: pick(HAIR),
      hat: chance(0.14) ? pick(HATS) : undefined, jacket: chance(0.22) ? pick(JACKETS) : undefined, long: chance(0.2),
    };
    super(look);
    this.kind = 'civ';
    this.maxHp = this.hp = rr(55, 80);
    this.walkSpeed = rr(1.25, 1.8);
    this.runSpeed = rr(5.2, 6.6);
    this.state = 'walk'; this.timer = 0; this.wait = 0;
    this.ox = rr(-0.7, 0.7); this.oz = rr(-0.7, 0.7);
    this.node = node; this.prevNode = -1; this.target = node;
    this.threat = null; this.aimedAt = 0; this.screamCd = 0; this.punchCd = 0; this.tough = chance(0.12);
    this.cash = chance(0.6) ? Math.floor(rr(8, 90)) : 0;
    this.stuckT = 0; this.lx = 0; this.lz = 0; this.keep = false; this.armed = false; this.shootT = 1;
    const p = nodePos(node, _n);
    this.place(p.x + this.ox, p.z + this.oz, rr(0, 6.28));
    this.pickNext();
  }

  pickNext() {
    this.prevNode = this.node;
    const nb = nodeNeighbors(this.target);
    this.node = this.target;
    let choices = nb.filter((n) => n !== this.prevNode);
    if (!choices.length) choices = nb;
    // weight: prefer continuing along the block, sometimes cross a road
    const a = nodePos(this.node, { x: 0, z: 0 });
    const weighted = [];
    for (const n of choices) {
      const b = nodePos(n, { x: 0, z: 0 });
      const cross = Math.hypot(a.x - b.x, a.z - b.z) < 30 && Math.hypot(a.x - b.x, a.z - b.z) > 15;
      weighted.push([n, cross ? 0.5 : 1, cross]);
    }
    const tot = weighted.reduce((s, w) => s + w[1], 0);
    let r = Math.random() * tot, pickN = weighted[0];
    for (const w of weighted) { r -= w[1]; if (r <= 0) { pickN = w; break; } }
    this.target = pickN[0]; this.crossing = pickN[2];
    if (chance(0.12)) { this.state = 'idle'; this.timer = rr(1.5, 5); }
  }

  roadClear(tx, tz) {
    const mx = (this.x + tx) / 2, mz = (this.z + tz) / 2;
    for (const v of G.vehicles) {
      if (v.removed) continue;
      const dx = v.x - mx, dz = v.z - mz, d = Math.hypot(dx, dz);
      if (d > 26 || v.speed < 2) continue;
      if ((v.vx * -dx + v.vz * -dz) / (v.speed * d + 0.01) > 0.35) return false;
    }
    return true;
  }

  scare(fromX, fromZ, panic = true) {
    if (this.dead || this.state === 'fight') return;
    this.threat = { x: fromX, z: fromZ };
    this.state = 'flee'; this.timer = rr(5, 10); this.cower = false;
    if (panic && this.screamCd <= 0 && chance(0.55)) { snd.scream(this.x, this.z); this.screamCd = 4; }
  }

  onDamaged(amount, src, o) {
    if (src === G.player) {
      if (this.tough && this.hp > 0 && chance(0.6)) { this.state = 'fight'; this.timer = 14; this.threat = null; }
      else this.scare(src.x, src.z);
      G.peds.alert(this.x, this.z, 16, src.x, src.z);
    } else if (src && src.x !== undefined) this.scare(src.x, src.z);
    else this.scare(this.x + rr(-5, 5), this.z + rr(-5, 5));
  }
  onHitByVehicle(veh) {
    if (veh.driver === 'player') { G.police && G.police.crime('hitrun', this.x, this.z, this); G.peds.alert(this.x, this.z, 20, veh.x, veh.z); }
  }
  onDeath(src, o) {
    if (this.cash && G.pickups) G.pickups.dropCash(this.x, this.z, this.cash);
    G.peds.witnessDeath(this, src);
    if (src === G.player || (src && src.driver === 'player')) { G.stats.kills++; if (G.police) G.police.crime('murder', this.x, this.z, this); if (G.missions) G.missions.onKill(this); }
  }

  update(dt) {
    if (this.dead || this.stun > 0) { this.animate(dt); return; }
    this.screamCd -= dt; this.punchCd -= dt; this.timer -= dt;
    this.aimedAt = Math.max(0, this.aimedAt - dt);
    this.cower = false; this.flee = false;
    this.wishSpeed = 0;

    if (this.state !== 'fight' && this.state !== 'flee' && this.aimedAt > 0.05 && G.player && G.player.armed()) {
      // hands up while a gun points at us
      this.cower = true; this.wishSpeed = 0; this.faceTowards(Math.atan2(G.player.x - this.x, G.player.z - this.z), dt, 6);
      if (this.aimedAt > 0.05) { this.stepMove(dt); this.animate(dt); return; }
    }

    switch (this.state) {
      case 'walk': this.doWalk(dt); break;
      case 'idle': if (this.timer <= 0) this.state = 'walk'; break;
      case 'flee': this.doFlee(dt); break;
      case 'fight': this.doFight(dt); break;
    }
    this.stepMove(dt);
    // stuck watchdog
    if (this.wishSpeed > 0.5) {
      if (Math.abs(this.x - this.lx) + Math.abs(this.z - this.lz) < 0.02) this.stuckT += dt; else this.stuckT = 0;
      if (this.stuckT > 2.2) { this.stuckT = 0; if (this.state === 'flee') this.timer = 0; else { this.target = this.node; this.pickNext(); } }
    }
    this.lx = this.x; this.lz = this.z;
    this.animate(dt);
  }

  doWalk(dt) {
    const t = nodePos(this.target, _n);
    const tx = t.x + this.ox, tz = t.z + this.oz;
    const dx = tx - this.x, dz = tz - this.z, d = Math.hypot(dx, dz);
    if (d < 1.1) { this.pickNext(); return; }
    // wait at kerb for traffic
    if (this.crossing && this.wait <= 0) {
      const nodeP = nodePos(this.node, { x: 0, z: 0 });
      if (Math.hypot(this.x - nodeP.x, this.z - nodeP.z) < 3.5 && !this.roadClear(tx, tz)) { this.wait = 0.6; }
    }
    if (this.wait > 0) { this.wait -= dt; this.faceTowards(Math.atan2(dx, dz), dt); return; }
    this.wishX = dx / d; this.wishZ = dz / d; this.wishSpeed = this.walkSpeed;
    this.faceTowards(Math.atan2(dx, dz), dt, 8);
  }

  doFlee(dt) {
    this.flee = true;
    if (this.timer <= 0) { this.state = 'walk'; this.target = this.nearestNode(); this.pickNext(); return; }
    let ax = this.x - this.threat.x, az = this.z - this.threat.z; const d = Math.hypot(ax, az) || 1;
    ax /= d; az /= d;
    // veer along the sidewalk when blocked by walls: jitter direction slowly
    const a = Math.atan2(ax, az) + Math.sin(G.time * 1.3 + this.ox * 9) * 0.5;
    this.wishX = Math.sin(a); this.wishZ = Math.cos(a); this.wishSpeed = this.runSpeed;
    this.faceTowards(a, dt, 14);
    if (d > 60) this.timer = Math.min(this.timer, 0.5);
  }

  doFight(dt) {
    const p = G.player;
    if (!p || p.dead || this.timer <= 0) { this.state = 'walk'; return; }
    const tgtx = p.inVehicle ? p.inVehicle.x : p.x, tgtz = p.inVehicle ? p.inVehicle.z : p.z;
    const dx = tgtx - this.x, dz = tgtz - this.z, d = Math.hypot(dx, dz);
    if (d > 32 || (p.inVehicle && p.inVehicle.speed > 8)) { this.state = 'walk'; return; }
    this.faceTowards(Math.atan2(dx, dz), dt, 12);
    if (this.armed) {
      if (!this.weaponId) this.setWeapon('pistol');
      this.shootT -= dt;
      const los = d < 40 && lineOfSight(this.x, this.y + 1.4, this.z, tgtx, (p.inVehicle ? p.inVehicle.y + 1 : p.y + 1.2), tgtz);
      if (los) {
        this.aiming = true; this.aimUp = 0;
        if (d > 22) { this.wishX = dx / d; this.wishZ = dz / d; this.wishSpeed = 3.5; }
        else if (d < 7) { this.wishX = -dx / d; this.wishZ = -dz / d; this.wishSpeed = 2.4; }
        if (this.shootT <= 0) {
          this.shootT = rr(0.5, 1.1);
          const oy = this.y + 1.4, ty = (p.inVehicle ? p.inVehicle.y + 0.9 : p.y + 1.1), dd = Math.hypot(dx, ty - oy, dz);
          this.h.recoil = 1;
          fireWeapon(this, { id: 'guard', dmg: 6, range: 60, spread: 0.06, snd: 'pistol', alert: 0 }, { x: this.x, y: oy, z: this.z }, { x: dx / dd, y: (ty - oy) / dd, z: dz / dd }, { x: this.x + dx / d * 0.5, y: oy, z: this.z + dz / d * 0.5 }, { spread: 0.05 });
        }
        return;
      }
    }
    if (d > 1.3) { this.wishX = dx / d; this.wishZ = dz / d; this.wishSpeed = 4.6; this.flee = false; }
    else if (this.punchCd <= 0 && !p.inVehicle) {
      this.punchCd = 1.0; this.punchT = 0.001;
      setTimeout(() => { if (!this.dead && !p.dead && Math.hypot(p.x - this.x, p.z - this.z) < 1.9) { p.damage(rr(5, 9), this, { kind: 'melee' }); snd.punch(this.x, this.z); } }, 180);
    }
    if (this.punchT > 0) { this.punchT += dt * 2.6; if (this.punchT >= 1) this.punchT = 0; }
  }

  nearestNode() {
    const i = clamp(blockIndex(this.x), 0, GRID - 1), j = clamp(blockIndex(this.z), 0, GRID - 1);
    let best = 0, bd = 1e9;
    for (let k = 0; k < 4; k++) {
      const id = nodeId(i, j, k), p = nodePos(id, _n), d = dist2(p.x, p.z, this.x, this.z);
      if (d < bd) { bd = d; best = id; }
    }
    return best;
  }
}

export const peds = {
  list: [],
  timer: 0,
  init() {
    const p = G.playerPos();
    for (let i = 0; i < TARGET; i++) this.spawn(p.x, p.z, 8, SPAWN_MAX);
  },
  spawn(px, pz, minD, maxD) {
    for (let n = 0; n < 24; n++) {
      const id = (Math.random() * NODE_COUNT) | 0;
      const p = nodePos(id, _n), d = Math.hypot(p.x - px, p.z - pz);
      if (d < minD || d > maxD) continue;
      if (d < 70 && !traffic.hidden(p.x, p.z, 70)) continue;
      const ped = new Ped(id);
      this.list.push(ped);
      return ped;
    }
    return null;
  },
  // Spawn someone at a vehicle's door who runs from `from` (used for car-jackings & bailing drivers)
  fromVehicle(veh, fromX, fromZ, fight = false) {
    const spot = veh.exitSpot(true, 0.4);
    const ped = new Ped(0);
    ped.place(spot.x, spot.z, veh.heading);
    this.list.push(ped);
    if (fight && ped.tough) { ped.state = 'fight'; ped.timer = 12; } else ped.scare(fromX, fromZ);
    ped.node = ped.target = ped.nearestNode();
    return ped;
  },
  driverBailsOut(veh) {
    if (veh.driver !== 'ai' || veh.exploded) return;
    veh.driver = null; veh.ai = null;
    const src = veh.lastDamager && veh.lastDamager.x !== undefined ? veh.lastDamager : { x: veh.x + 3, z: veh.z };
    this.fromVehicle(veh, src.x, src.z, chance(0.4));
  },
  alert(x, z, radius, fromX = x, fromZ = z) {
    const r2 = radius * radius;
    for (const p of this.list) {
      if (p.dead || p.removed || p.state === 'fight') continue;
      if (dist2(p.x, p.z, x, z) < r2) p.scare(fromX, fromZ);
    }
  },
  witnessDeath(ped, src) {
    this.alert(ped.x, ped.z, 22, ped.x, ped.z);
  },
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      if (p.removed) { this.list.splice(i, 1); continue; }
      p.update(dt);
    }
    this.timer -= dt;
    if (this.timer > 0) return;
    this.timer = 0.5;
    const pp = G.playerPos();
    let alive = 0;
    for (const p of this.list) {
      if (p.removed) continue;
      const d = Math.hypot(p.x - pp.x, p.z - pp.z);
      p.h.root.visible = d < 210;
      p.h.torso.castShadow = p.h.legL.castShadow = p.h.legR.castShadow = p.h.armL.castShadow = p.h.armR.castShadow = d < 55;
      if (!p.dead && !p.keep && d > DESPAWN && traffic.hidden(p.x, p.z, 130)) { p.remove(); continue; }
      if (!p.dead) alive++;
    }
    const want = Math.round(TARGET * (G.settings.quality >= 1 ? 1 : 0.6));
    for (let i = alive; i < want && i < alive + 4; i++) this.spawn(pp.x, pp.z, SPAWN_MIN, SPAWN_MAX);
  },
};
