// The player: on-foot controls, weapons, vehicle entry/exit, death/respawn, and the third-person camera rig.
import * as THREE from 'three';
import { G } from './state.js';
import { Actor } from './actor.js';
import { Input } from './input.js';
import { WEAPONS, WEAPON_ORDER, castRay, fireWeapon, throwGrenade, fireRocket } from './combat.js';
import { raycastStatics, lineOfSight, groundHeight } from './collision.js';
import { audio } from './audio.js';
import { snd } from './sound.js';
import { fx } from './fx.js';
import { clamp, damp, dampAngle, wrapAngle, rr, lerp } from './util.js';

const _v = new THREE.Vector3(), _o = new THREE.Vector3(), _d = new THREE.Vector3(), _m = new THREE.Vector3();

export class Player extends Actor {
  constructor() {
    super({ skin: 0xe0ac86, shirt: 0x1d2b45, jacket: 0x1d2b45, pants: 0x3a3f4d, hair: 0x1a1a1a, shoes: 0xe8e8e8 });
    this.kind = 'player';
    this.removeAfter = 1e9;
    this.radius = 0.38;
    this.money = 1500;
    this.weapons = { pistol: { mag: 12, reserve: 60 } };
    this.cur = 'pistol';
    this.fireT = 0; this.reloadT = 0; this.faceCamT = 0; this.sprint = false;
    this.respawnT = 0; this.lastHurt = 0; this.punchHit = false; this.bustedT = 0;
    this.enterCd = 0;
    this.setWeapon('pistol');
    this.yaw = 0; this.pitch = 0.25; this.camDist = 4.4; this.mouseIdle = 0;
    this.fov = 65; this.lookBack = false;
    this.aimT = 0;
  }

  get cx() { return this.inVehicle ? this.inVehicle.x : this.x; }
  get cz() { return this.inVehicle ? this.inVehicle.z : this.z; }
  armed() { const w = WEAPONS[this.cur]; return !w.melee && !w.thrown && !this.inVehicle; }
  get weapon() { return WEAPONS[this.cur]; }
  get wstate() { return this.weapons[this.cur]; }

  addMoney(n) { this.money = Math.max(0, this.money + n); if (G.hud) G.hud.moneyDelta(n); }

  giveWeapon(id, ammo) {
    const w = WEAPONS[id]; if (!w || id === 'fist') return;
    let s = this.weapons[id];
    if (!s) s = this.weapons[id] = { mag: w.mag || 0, reserve: 0 };
    s.reserve = Math.min(w.ammoMax, s.reserve + ammo);
    if (G.hud) G.hud.toast('Picked up ' + w.name);
  }
  giveAll(mult = 1) {
    for (const id of WEAPON_ORDER) { const w = WEAPONS[id]; if (id === 'fist') continue; const s = this.weapons[id] || (this.weapons[id] = { mag: w.mag || 0, reserve: 0 }); s.mag = w.mag || 0; s.reserve = Math.floor(w.ammoMax * mult); }
  }
  selectWeapon(id) {
    if (this.cur === id || (id !== 'fist' && !this.weapons[id])) return;
    this.cur = id; this.reloadT = 0; this.fireT = 0.2;
    this.setWeapon(id);
    if (G.hud) G.hud.weaponChanged();
    audio.click();
  }
  cycleWeapon(dir) {
    const owned = WEAPON_ORDER.filter((id) => id === 'fist' || this.weapons[id]);
    const i = owned.indexOf(this.cur);
    this.selectWeapon(owned[(i + dir + owned.length) % owned.length]);
  }

  // ------------------------------------------------------------ damage & death
  onDamaged(amount, src, o) {
    this.lastHurt = G.time;
    if (G.hud) G.hud.damageFlash(clamp(amount / 40, 0.15, 0.7));
    if (amount > 4) audio.pain(0.7);
    if (this.inVehicle) G.shake = Math.min(1, (G.shake || 0) + 0.1);
  }
  onDeath(src, o) {
    if (this.inVehicle) this.exitVehicle(true);
    G.stats.deaths++;
    this.respawnT = 4.6;
    audio.engine.stop(); audio.radio.off(); audio.wasted();
    if (G.hud) G.hud.wasted(true);
  }
  onCrash(imp) { if (imp > 11) this.damage((imp - 11) * 2.4, null, { kind: 'crash', ignoreArmor: false }); }
  onVehicleExploded(veh) { if (this.inVehicle === veh) this.exitVehicle(true); }

  respawn(kind) {
    const w = G.world.pois[kind === 'busted' ? 'police' : 'hospital'];
    if (this.inVehicle) this.exitVehicle(true);
    const loss = kind === 'busted' ? Math.min(this.money, Math.max(200, Math.floor(this.money * 0.12))) : Math.min(this.money, 400);
    this.dead = false; this.deadT = 0; this.hp = this.maxHp; this.armor = 0; this.stun = 0; this.removed = false;
    this.h.body.rotation.x = 0; this.h.body.position.set(0, 0, 0); this.h.deadT = 0;
    this.vx = this.vz = this.vy = 0;
    this.place(w.x, w.z, kind === 'busted' ? 0 : 0);
    this.money -= loss;
    if (kind === 'busted') { for (const id of Object.keys(this.weapons)) if (id !== 'pistol') delete this.weapons[id]; this.weapons.pistol = { mag: 12, reserve: 24 }; this.selectWeapon('pistol'); }
    if (G.police) G.police.clear(true);
    this.yaw = Math.PI; // face away from the building
    if (G.hud) { G.hud.wasted(false); G.hud.toast(kind === 'busted' ? `Busted! Fine: $${loss}` : `Hospital bill: $${loss}`); }
    audio.ambience(0.5);
  }
  busted() {
    if (this.dead || this.bustedT > 0) return;
    this.bustedT = 3.2; G.paused_input = true;
    audio.busted();
    if (G.hud) G.hud.busted(true);
    if (this.inVehicle) this.exitVehicle(true);
    this.wishSpeed = 0;
  }
  remove() { /* the player is never removed */ }

  // ------------------------------------------------------------ vehicles
  nearestVehicle(maxD = 3.4) {
    let best = null, bd = maxD;
    for (const v of G.vehicles) {
      if (v.removed || v.exploded) continue;
      const dx = this.x - v.x, dz = this.z - v.z;
      if (Math.abs(dx) > v.spec.hl + maxD || Math.abs(dz) > v.spec.hl + maxD) continue;
      const f = Math.sin(v.heading), g = Math.cos(v.heading);
      const lf = Math.abs(dx * f + dz * g) - v.spec.hl, lr = Math.abs(dx * -g + dz * f) - v.spec.hw;
      const d = Math.hypot(Math.max(0, lf), Math.max(0, lr));
      if (d < bd) { bd = d; best = v; }
    }
    return best;
  }
  enterVehicle(v) {
    if (this.inVehicle || v.exploded) return;
    if (v.driver === 'ai') {
      G.peds.fromVehicle(v, this.x, this.z, true);
      if (G.police) G.police.crime('carjack', v.x, v.z, null);
      G.stats.carjacks++;
    } else if (v.driver === 'cop') {
      if (G.police) G.police.ejectCop(v);
      if (G.police) G.police.crime('copcar', v.x, v.z, null);
    } else if (v.parked) {
      if (v.key === 'police' && G.police) G.police.crime('copcar', v.x, v.z, null);
    }
    v.driver = 'player'; v.ai = null; v.parked = false; v.siren = false;
    if (v.tag !== 'mission') v.tag = null;
    if (!v.stolen) { v.stolen = true; G.stats.cars++; }
    this.inVehicle = v; this.h.root.visible = false;
    this.x = v.x; this.z = v.z; this.vx = this.vz = 0;
    audio.doorOpen(); audio.engine.start(v.spec.eng); audio.radio.on();
    if (G.hud) G.hud.toast(v.spec.name, 1400);
    if (G.missions) G.missions.onEnterVehicle(v);
    this.enterCd = 0.4;
  }
  exitVehicle(force = false) {
    const v = this.inVehicle; if (!v) return;
    const spot = v.exitSpot(true, this.radius);
    this.inVehicle = null; v.driver = null; v.tag = v.tag === 'mission' ? 'mission' : 'left';
    v.throttle = 0; v.steerIn = 0; v.handbrake = false;
    this.x = spot.x; this.z = spot.z; this.y = groundHeight(spot.x, spot.z);
    this.vx = v.vx * 0.5; this.vz = v.vz * 0.5;
    this.h.root.visible = true;
    const sp = v.speed;
    if (sp > 13 && !force) { this.damage((sp - 10) * 2.2, null, { kind: 'fall' }); this.stun = 0.9; this.stunAge = 0; }
    audio.engine.stop(); audio.horn(false); audio.skid(0); audio.doorClose(); audio.radio.off();
    this.enterCd = 0.4;
    this.heading = v.heading;
  }

  // ------------------------------------------------------------ per-frame update
  update(dt) {
    const cam = G.camera;
    this.fireT -= dt; this.enterCd -= dt;
    if (this.bustedT > 0) {
      this.bustedT -= dt;
      this.wishSpeed = 0; this.stepMove(dt); this.animate(dt, { speed: 0 });
      if (this.bustedT <= 0) { G.paused_input = false; this.respawn('busted'); if (G.hud) G.hud.busted(false); }
      return;
    }
    if (this.dead) {
      this.animate(dt);
      this.respawnT -= dt;
      if (this.respawnT <= 0.9 && G.hud && !G.hud.fading) G.hud.fade(true);
      if (this.respawnT <= 0) { this.respawn('wasted'); if (G.hud) G.hud.fade(false); }
      return;
    }
    // slow health regen
    if (this.hp < 50 && G.time - this.lastHurt > 9) this.hp = Math.min(50, this.hp + dt * 1.5);

    if (this.inVehicle) this.updateDriving(dt);
    else this.updateFoot(dt);

    // weapons hotkeys
    for (let i = 0; i < WEAPON_ORDER.length; i++) if (Input.pressed('Digit' + (i + 1))) this.selectWeapon(WEAPON_ORDER[i]);
    const wh = Input.takeWheel(); if (wh && !this.inVehicle) this.cycleWeapon(wh);
    if (!this.inVehicle) this.handleFire(dt);
  }

  updateFoot(dt) {
    const w = WEAPONS[this.cur];
    // aim / sprint
    this.aiming = Input.mouse(2) && this.armed();
    this.sprint = Input.down('ShiftLeft') && !this.aiming;
    // movement relative to camera
    let ix = 0, iz = 0;
    if (Input.down('KeyW')) iz += 1; if (Input.down('KeyS')) iz -= 1;
    if (Input.down('KeyA')) ix -= 1; if (Input.down('KeyD')) ix += 1;
    const len = Math.hypot(ix, iz);
    const fwdX = Math.sin(this.yaw), fwdZ = Math.cos(this.yaw), rgtX = -Math.cos(this.yaw), rgtZ = Math.sin(this.yaw);
    if (len > 0 && this.stun <= 0) {
      ix /= len; iz /= len;
      const dx = fwdX * iz + rgtX * ix, dz = fwdZ * iz + rgtZ * ix;
      const spd = this.aiming ? 2.7 : this.sprint ? 7.4 : 4.3;
      this.wishX = dx; this.wishZ = dz; this.wishSpeed = spd;
      if (!this.aiming && this.faceCamT <= 0) this.faceTowards(Math.atan2(dx, dz), dt, 13);
    } else { this.wishSpeed = 0; }
    this.faceCamT -= dt;
    if (this.aiming || this.faceCamT > 0) this.faceTowards(this.yaw, dt, 18);
    if (Input.pressed('Space') && this.grounded && this.stun <= 0) { this.vy = 7.2; this.grounded = false; }
    this.aimUp = -(this.pitch - 0.12) * 0.8;
    this.stepMove(dt, this.grounded ? 34 : 4);
    this.animate(dt, {});
    if (Input.pressed('KeyF') && this.enterCd <= 0 && this.stun <= 0) {
      const v = this.nearestVehicle();
      if (v) this.enterVehicle(v);
    }
    if (Input.pressed('KeyR') && this.armed()) this.startReload();
    if (Input.pressed('KeyE')) { const it = G.nearInteract; if (it) it.action(); }
    if (this.speed > 4.5 && this.grounded && (G.time * 3.4 | 0) !== this._stepK) { this._stepK = (G.time * 3.4) | 0; audio.footstep(0.5); }
  }

  updateDriving(dt) {
    const v = this.inVehicle;
    this.x = v.x; this.z = v.z; this.y = v.y; this.vx = v.vx; this.vz = v.vz;
    this.aiming = false; this.h.root.position.set(v.x, v.y, v.z);
    let th = 0; if (Input.down('KeyW') || Input.down('ArrowUp')) th += 1; if (Input.down('KeyS') || Input.down('ArrowDown')) th -= 1;
    let st = 0; if (Input.down('KeyA') || Input.down('ArrowLeft')) st += 1; if (Input.down('KeyD') || Input.down('ArrowRight')) st -= 1;
    v.throttle = th; v.steerIn = st; v.handbrake = Input.down('Space'); v.brakeIn = 0;
    audio.horn(Input.down('KeyH'), v.key === 'bus' ? 1 : 0);
    if (Input.pressed('KeyR')) audio.radio.next();
    if (Input.pressed('KeyQ')) audio.radio.prev();
    if (Input.pressed('KeyF') && this.enterCd <= 0) this.exitVehicle();
    if (v.spec) audio.engine.set(clamp(Math.abs(v.fwd) / v.spec.vmax * 0.9 + 0.12 + (th > 0 ? 0.06 : 0), 0, 1), Math.max(0, th));
    audio.skid(v.skidding ? clamp(v.slip / 8, 0.25, 1) : 0);
  }

  // ------------------------------------------------------------ weapons
  startReload() {
    const w = WEAPONS[this.cur], s = this.wstate;
    if (!s || !w.mag || this.reloadT > 0 || s.mag >= w.mag || s.reserve <= 0) return;
    this.reloadT = w.reload; audio.reload();
    if (G.hud) G.hud.reloading(w.reload);
  }
  finishReload() {
    const w = WEAPONS[this.cur], s = this.wstate; if (!s) return;
    const need = w.mag - s.mag, take = Math.min(need, s.reserve);
    s.mag += take; s.reserve -= take;
  }

  aimPoint(maxRange = 250) {
    const cam = G.camera;
    cam.getWorldDirection(_d);
    const dist = G.camDistNow || 4;
    _o.copy(cam.position).addScaledVector(_d, dist);
    let hit = castRay(_o.x, _o.y, _o.z, _d.x, _d.y, _d.z, maxRange, this, this.inVehicle);
    // soft aim assist: snap to a nearby actor near the crosshair
    if (!hit || hit.kind !== 'actor') {
      let best = null, bestA = 0.05;
      for (const a of G.actors) {
        if (a === this || a.dead || a.removed || a.inVehicle) continue;
        _v.set(a.x - _o.x, a.y + 1.15 - _o.y, a.z - _o.z);
        const d = _v.length(); if (d > 70 || d < 3) continue;
        _v.divideScalar(d);
        const ang = Math.acos(clamp(_v.dot(_d), -1, 1));
        if (ang < bestA && (!hit || d < hit.t + 1)) {
          if (lineOfSight(_o.x, _o.y, _o.z, a.x, a.y + 1.2, a.z)) { bestA = ang; best = a; }
        }
      }
      if (best && (this.aiming || Input.mouse(0))) return { x: best.x, y: best.y + 1.15, z: best.z, actor: best };
    }
    if (hit) return { x: hit.x, y: hit.y, z: hit.z, hit };
    return { x: _o.x + _d.x * maxRange, y: _o.y + _d.y * maxRange, z: _o.z + _d.z * maxRange };
  }

  muzzle(out) {
    this.h.root.updateMatrixWorld(true);
    const wm = this.h.weapon;
    if (wm) { out.copy(wm.userData.muzzle); wm.localToWorld(out); }
    else out.set(this.x, this.y + 1.4, this.z);
    return out;
  }

  handleFire(dt) {
    const w = WEAPONS[this.cur], s = this.wstate;
    if (this.reloadT > 0) { this.reloadT -= dt; if (this.reloadT <= 0) this.finishReload(); return; }
    const want = w.melee ? Input.mousePressed(0) || (Input.mouse(0) && this.fireT <= 0) : (w.auto ? Input.mouse(0) : Input.mousePressed(0));
    if (this.punchT > 0) { this.punchT += dt * 3; if (!this.punchHit && this.punchT > 0.4) { this.punchHit = true; this.doPunch(); } if (this.punchT >= 1) { this.punchT = 0; } }
    if (!want || this.fireT > 0 || this.stun > 0) return;
    if (w.melee) {
      this.fireT = w.rate; this.punchT = 0.001; this.punchHit = false; this.faceCamT = 0.5;
      return;
    }
    if (w.thrown) {
      if (!s || s.reserve <= 0) return;
      s.reserve--; this.fireT = w.rate; this.faceCamT = 0.6;
      if (s.reserve <= 0) { delete this.weapons.grenade; this.cur = 'pistol'; this.setWeapon('pistol'); if (G.hud) G.hud.weaponChanged(); }
      const tgt = this.aimPoint(60); const m = this.muzzle(_m);
      const dx = tgt.x - m.x, dy = tgt.y - m.y, dz = tgt.z - m.z, d = Math.hypot(dx, dy, dz) || 1;
      throwGrenade(this, m.x, m.y + 0.2, m.z, dx / d, Math.max(-0.2, dy / d) + 0.25, dz / d, clamp(8 + d * 0.5, 10, 20));
      if (G.police) G.police.crime('grenade', this.x, this.z, null, 0.5);
      return;
    }
    if (s.mag <= 0) {
      if (s.reserve > 0) this.startReload(); else { audio.dryFire(); this.fireT = 0.3; }
      return;
    }
    s.mag--; this.fireT = w.rate; this.faceCamT = 0.9; this.h.recoil = 1;
    const tgt = this.aimPoint(w.range || 200);
    const m = this.muzzle(_m);
    _d.set(tgt.x - m.x, tgt.y - m.y, tgt.z - m.z);
    const dist = _d.length();
    if (dist < 1.4) G.camera.getWorldDirection(_d); else _d.divideScalar(dist);
    const mv = this.speed > 2 ? 1.5 : 1, aim = this.aiming ? 0.5 : 1;
    const dir = { x: _d.x, y: _d.y, z: _d.z };
    const mz = { x: m.x, y: m.y, z: m.z };
    if (w.projectile) { fireRocket(this, mz.x, mz.y, mz.z, dir.x, dir.y, dir.z); snd.gunshot('rpg', mz.x, mz.z); fx.muzzle(mz.x, mz.y, mz.z, dir.x, dir.y, dir.z, 2); }
    else fireWeapon(this, w, mz, dir, mz, { spread: w.spread * mv * aim });
    this.pitch -= w.kick * (this.aiming ? 0.6 : 1) * (0.7 + Math.random() * 0.6);
    this.yaw += rr(-0.5, 0.5) * w.kick * 0.5;
    if (G.police) G.police.crime('shots', this.x, this.z, null, 0.15);
    if (s.mag <= 0 && s.reserve > 0) { setTimeout(() => { if (!this.dead && this.wstate === s) this.startReload(); }, 250); }
  }

  doPunch() {
    const w = WEAPONS.fist;
    let best = null, bd = w.range + 0.3;
    for (const a of G.actors) {
      if (a === this || a.dead || a.removed || a.inVehicle) continue;
      const dx = a.x - this.x, dz = a.z - this.z, d = Math.hypot(dx, dz);
      if (d > bd) continue;
      const ang = Math.abs(wrapAngle(Math.atan2(dx, dz) - this.heading));
      if (ang > 1.0) continue;
      bd = d; best = a;
    }
    if (best) {
      const dx = best.x - this.x, dz = best.z - this.z, d = Math.hypot(dx, dz) || 1;
      best.vx += dx / d * 3.5; best.vz += dz / d * 3.5;
      snd.punch(best.x, best.z);
      best.damage(w.dmg, this, { dir: { x: dx / d, z: dz / d }, kind: 'melee' });
      if (best.kind === 'civ' && G.police) G.police.crime('assault', best.x, best.z, best);
      if (G.hud) G.hud.hitMarker(best.dead, false);
    } else audio.punch(0.5, 0);
  }
}

// ---------------------------------------------------------------- camera rig
let idleLook = 0, shakeT = 0;
const _fw = new THREE.Vector3();
export function updateCamera(dt, first = false) {
  const p = G.player, cam = G.camera, v = p.inVehicle;
  const m = Input.takeMouse();
  const sens = 0.0021 * G.settings.sensitivity * (p.aiming ? 0.6 : 1);
  if (!G.paused_input && !p.dead) {
    p.yaw -= m.dx * sens; p.pitch += m.dy * sens;
  }
  p.pitch = clamp(p.pitch, -0.55, 1.25);
  if (v) {
    if (m.dx || m.dy) idleLook = 0; else idleLook += dt;
    const back = Input.down('KeyC');
    // auto-centre behind the vehicle's direction of travel
    const moveAng = v.speed > 2 ? (v.fwd >= 0 ? v.heading : v.heading + Math.PI) : v.heading;
    if (back) p.yaw = dampAngle(p.yaw, v.heading + Math.PI, 8, dt);
    else if (idleLook > 0.9 || first) p.yaw = dampAngle(p.yaw, v.heading, first ? 40 : 2.6, dt);
    if (idleLook > 1.4 && !back) p.pitch = damp(p.pitch, 0.22, 2, dt);
  }
  G.camYaw = p.yaw;
  // target point & distance
  let tx, ty, tz, dist, shoulder = 0, fovT = 65;
  if (v) {
    tx = v.x; ty = v.y + v.spec.top * 0.6 + 0.6; tz = v.z;
    dist = v.spec.len * 0.85 + 3.6 + Math.min(v.speed * 0.06, 2.2);
    fovT = 68 + Math.min(v.speed * 0.32, 20);
  } else {
    tx = p.x; ty = p.y + 1.5 - (p.dead ? 0.9 : 0); tz = p.z;
    if (p.aiming) { dist = 2.4; shoulder = 0.85; fovT = 50; }
    else { dist = 4.4; shoulder = 0.35; fovT = p.sprint && p.speed > 5 ? 72 : 65; }
    if (p.dead) dist = 5.5;
  }
  p.camDist = damp(p.camDist, dist, 9, dt);
  p.fov = damp(p.fov, fovT, 6, dt);
  const cp = Math.cos(p.pitch), sp = Math.sin(p.pitch);
  _fw.set(Math.sin(p.yaw) * cp, -sp, Math.cos(p.yaw) * cp); // camera forward
  const rx = -Math.cos(p.yaw), rz = Math.sin(p.yaw);
  let ux = -_fw.x * p.camDist + rx * shoulder, uy = -_fw.y * p.camDist + 0.25, uz = -_fw.z * p.camDist + rz * shoulder;
  let len = Math.hypot(ux, uy, uz);
  ux /= len; uy /= len; uz /= len;
  const hit = raycastStatics(tx, ty, tz, ux, uy, uz, len + 0.5, true);
  if (hit && !hit.ground && hit.t < len + 0.4) len = Math.max(0.9, hit.t - 0.45);
  let px = tx + ux * len, py = ty + uy * len, pz = tz + uz * len;
  py = Math.max(py, 0.35 + groundHeight(px, pz));
  G.camDistNow = len;
  // shake
  const sh = G.shake || 0;
  shakeT += dt * 40;
  const sx = sh > 0.01 ? (Math.sin(shakeT * 1.3) + Math.sin(shakeT * 2.7)) * 0.05 * sh : 0;
  const sy = sh > 0.01 ? (Math.cos(shakeT * 1.7) + Math.sin(shakeT * 2.1)) * 0.05 * sh : 0;
  cam.position.set(px + sx, py + sy, pz);
  cam.rotation.set(-p.pitch + sy * 0.4, p.yaw + Math.PI + sx * 0.4, 0, 'YXZ');
  if (Math.abs(cam.fov - p.fov) > 0.05) { cam.fov = p.fov; cam.updateProjectionMatrix(); }
}
