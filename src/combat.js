// Weapons, hitscan, projectiles and explosions.
import * as THREE from 'three';
import { G } from './state.js';
import { raycastStatics, rayCyl, rayOBB, resolveCircle } from './collision.js';
import { fx } from './fx.js';
import { snd } from './sound.js';
import { rr, clamp } from './util.js';

export const WEAPONS = {
  fist:    { id: 'fist', name: 'Fists', melee: true, dmg: 16, rate: 0.42, range: 2.0, slot: 1 },
  pistol:  { id: 'pistol', name: 'Pistol', dmg: 26, rate: 0.25, mag: 12, spread: 0.010, range: 150, auto: false, reload: 1.1, snd: 'pistol', ammoMax: 168, slot: 2, kick: 0.018, alert: 40 },
  smg:     { id: 'smg', name: 'Micro SMG', dmg: 14, rate: 0.068, mag: 30, spread: 0.032, range: 120, auto: true, reload: 1.5, snd: 'smg', ammoMax: 360, slot: 3, kick: 0.011, alert: 50 },
  shotgun: { id: 'shotgun', name: 'Pump Shotgun', dmg: 12, pellets: 9, rate: 0.85, mag: 6, spread: 0.07, range: 50, auto: false, reload: 2.1, snd: 'shotgun', ammoMax: 48, slot: 4, kick: 0.05, alert: 55 },
  rifle:   { id: 'rifle', name: 'Assault Rifle', dmg: 21, rate: 0.092, mag: 30, spread: 0.02, range: 220, auto: true, reload: 1.8, snd: 'rifle', ammoMax: 360, slot: 5, kick: 0.014, alert: 60 },
  grenade: { id: 'grenade', name: 'Grenades', thrown: true, rate: 0.9, ammoMax: 20, slot: 6, mag: 0 },
  rpg:     { id: 'rpg', name: 'RPG', projectile: true, rate: 1.4, mag: 1, reload: 2.4, snd: 'rpg', ammoMax: 12, slot: 7, kick: 0.06, alert: 80 },
};
export const WEAPON_ORDER = ['fist', 'pistol', 'smg', 'shotgun', 'rifle', 'grenade', 'rpg'];
export const VEH_BULLET_MUL = 2.6;

const _n = { nx: 0, ny: 0, nz: 0 };
const _v = new THREE.Vector3();

// Cast a ray against the static world, actors and vehicles. Returns nearest hit or null.
export function castRay(ox, oy, oz, dx, dy, dz, range, ignoreActor = null, ignoreVeh = null) {
  let best = null, bt = range;
  const s = raycastStatics(ox, oy, oz, dx, dy, dz, range);
  if (s) { bt = s.t; best = { kind: s.ground ? 'ground' : 'static', t: s.t, nx: s.nx, ny: s.ny, nz: s.nz }; }
  const acts = G.actors;
  for (let i = 0; i < acts.length; i++) {
    const a = acts[i];
    if (a === ignoreActor || a.removed || a.dead || a.inVehicle) continue;
    const rx = a.x - ox, rz = a.z - oz;
    const along = rx * dx + rz * dz;
    if (along < -1 || rx * rx + rz * rz > (bt + 2) * (bt + 2)) continue;
    const t = rayCyl(ox, oy - a.y, oz, dx, dy, dz, a.x, a.z, 0.42, 1.85, bt, _n);
    if (t >= 0 && t < bt) { bt = t; best = { kind: 'actor', actor: a, t, head: oy + dy * t - a.y > 1.5, nx: _n.nx, ny: _n.ny, nz: _n.nz }; }
  }
  const vs = G.vehicles;
  for (let i = 0; i < vs.length; i++) {
    const v = vs[i];
    if (v === ignoreVeh || v.removed) continue;
    const rx = v.x - ox, rz = v.z - oz;
    if (rx * rx + rz * rz > (bt + v.rad) * (bt + v.rad)) continue;
    const t = rayOBB(ox, oy - v.y, oz, dx, dy, dz, v.obb, 0, v.spec.top, bt);
    if (t >= 0 && t < bt) { bt = t; best = { kind: 'vehicle', vehicle: v, t, nx: -dx, ny: 0.2, nz: -dz }; }
  }
  const hs = G.helis;
  for (let i = 0; i < hs.length; i++) {
    const h = hs[i];
    if (h.dead) continue;
    const cx = h.x - ox, cy = h.y - oy, cz = h.z - oz;
    const tca = cx * dx + cy * dy + cz * dz;
    if (tca < 0 || tca > bt + 3) continue;
    const d2 = cx * cx + cy * cy + cz * cz - tca * tca;
    if (d2 > 9) continue;
    const t = tca - Math.sqrt(9 - d2);
    if (t >= 0 && t < bt) { bt = t; best = { kind: 'heli', heli: h, t, nx: -dx, ny: 0, nz: -dz }; }
  }
  if (best) { best.x = ox + dx * best.t; best.y = oy + dy * best.t; best.z = oz + dz * best.t; }
  return best;
}

function applyHit(hit, shooter, w, dx, dy, dz, isPlayer) {
  switch (hit.kind) {
    case 'actor': {
      const a = hit.actor;
      const dmg = w.dmg * (hit.head ? 3.2 : 1);
      a.damage(dmg, shooter, { dir: { x: dx, z: dz }, headshot: hit.head, kind: 'bullet' });
      if (isPlayer && G.hud) G.hud.hitMarker(a.dead, hit.head);
      break;
    }
    case 'vehicle': {
      const v = hit.vehicle;
      v.damage(w.dmg * VEH_BULLET_MUL, shooter);
      fx.spark(hit.x, hit.y, hit.z, hit.nx, 0.3, hit.nz, 4, 4);
      snd.bulletHit(hit.x, hit.z);
      if (v.driver === 'player' && shooter !== G.player) G.player.damage(w.dmg * 0.4, shooter, { kind: 'bullet' });
      if (isPlayer && G.hud) G.hud.hitMarker(false, false);
      break;
    }
    case 'heli':
      hit.heli.damage(w.dmg * 3.2, shooter);
      fx.spark(hit.x, hit.y, hit.z, hit.nx, 0.3, hit.nz, 4, 4);
      if (isPlayer && G.hud) G.hud.hitMarker(hit.heli.dead, false);
      break;
    case 'static':
      fx.spark(hit.x, hit.y, hit.z, hit.nx, hit.ny, hit.nz, 5, 4);
      fx.dust(hit.x, hit.y, hit.z, 2, 0.6, 0.35);
      snd.bulletHit(hit.x, hit.z);
      break;
    case 'ground':
      fx.dust(hit.x, 0.1, hit.z, 3, 1, 0.5);
      break;
  }
}

// Fire one shot (all pellets) from origin along dir with a muzzle position for the tracer.
export function fireWeapon(shooter, w, origin, dir, muzzle, opts = {}) {
  const isPlayer = shooter === G.player;
  const pellets = w.pellets || 1;
  const spread = (opts.spread ?? w.spread) || 0;
  let lastEnd = null;
  for (let p = 0; p < pellets; p++) {
    _v.set(dir.x + rr(-spread, spread), dir.y + rr(-spread, spread), dir.z + rr(-spread, spread)).normalize();
    const hit = castRay(origin.x, origin.y, origin.z, _v.x, _v.y, _v.z, w.range, shooter, shooter.inVehicle || null);
    const t = hit ? hit.t : w.range;
    const ex = origin.x + _v.x * t, ey = origin.y + _v.y * t, ez = origin.z + _v.z * t;
    if (p < 3 || pellets === 1) fx.tracer(muzzle.x, muzzle.y, muzzle.z, ex, ey, ez, isPlayer ? [1, 0.9, 0.5] : [1, 0.55, 0.35]);
    if (hit) applyHit(hit, shooter, w, _v.x, _v.y, _v.z, isPlayer);
    lastEnd = { x: ex, y: ey, z: ez };
  }
  fx.muzzle(muzzle.x, muzzle.y, muzzle.z, dir.x, dir.y, dir.z, w.id === 'shotgun' ? 1.6 : w.id === 'pistol' ? 0.9 : 1.1);
  snd.gunshot(shooter.kind === 'cop' ? 'cop' : w.snd, muzzle.x, muzzle.z);
  if (w.alert && G.peds) G.peds.alert(shooter.x, shooter.z, w.alert, shooter.x, shooter.z);
  return lastEnd;
}

// ---------------------------------------------------------------- projectiles
const projectiles = [];
let grenadeMesh = null, rocketGroup = null;

export function throwGrenade(owner, x, y, z, dx, dy, dz, speed = 17) {
  if (!grenadeMesh) grenadeMesh = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), new THREE.MeshStandardMaterial({ color: 0x3f5a2a, roughness: 0.6 }));
  const mesh = grenadeMesh.clone(); G.scene.add(mesh);
  projectiles.push({ type: 'grenade', x, y, z, vx: dx * speed, vy: dy * speed + 3, vz: dz * speed, life: 2.6, mesh, owner, rest: false });
}
export function fireRocket(owner, x, y, z, dx, dy, dz) {
  if (!rocketGroup) {
    rocketGroup = new THREE.Group();
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.8, 8), new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.6, roughness: 0.4 })); b.rotation.x = Math.PI / 2;
    const c = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.25, 8), new THREE.MeshStandardMaterial({ color: 0xa02020 })); c.rotation.x = Math.PI / 2; c.position.z = 0.5;
    rocketGroup.add(b, c);
  }
  const mesh = rocketGroup.clone(); G.scene.add(mesh);
  const sp = 62;
  projectiles.push({ type: 'rocket', x, y, z, vx: dx * sp, vy: dy * sp, vz: dz * sp, life: 5, mesh, owner });
}

const _p = { x: 0, z: 0 };
export function updateProjectiles(dt) {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    p.life -= dt;
    if (p.type === 'grenade') {
      if (!p.rest) {
        p.vy -= 22 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        _p.x = p.x; _p.z = p.z;
        if (p.y < 4 && resolveCircle(_p, 0.14)) { p.x = _p.x; p.z = _p.z; p.vx *= -0.35; p.vz *= -0.35; }
        if (p.y < 0.13) { p.y = 0.13; p.vy = -p.vy * 0.38; p.vx *= 0.72; p.vz *= 0.72; if (Math.abs(p.vy) < 1) { p.vy = 0; p.rest = true; } }
        p.mesh.rotation.x += dt * 8;
      }
      p.mesh.position.set(p.x, p.y, p.z);
      if (p.life <= 0) { explode(p.x, p.y + 0.3, p.z, 10, 300, { source: p.owner }); G.scene.remove(p.mesh); projectiles.splice(i, 1); }
    } else {
      const nx = p.x + p.vx * dt, ny = p.y + p.vy * dt, nz = p.z + p.vz * dt;
      const len = Math.hypot(nx - p.x, ny - p.y, nz - p.z) + 0.4;
      const dx = p.vx / 62, dy = p.vy / 62, dz = p.vz / 62;
      const hit = castRay(p.x, p.y, p.z, dx, dy, dz, len, p.owner, p.owner && p.owner.inVehicle);
      if (hit || p.life <= 0) {
        const h = hit || { x: nx, y: ny, z: nz };
        explode(h.x - dx * 0.3, Math.max(0.3, h.y - dy * 0.3), h.z - dz * 0.3, 11, 420, { source: p.owner });
        G.scene.remove(p.mesh); projectiles.splice(i, 1); continue;
      }
      p.x = nx; p.y = ny; p.z = nz;
      p.mesh.position.set(p.x, p.y, p.z); p.mesh.lookAt(p.x + dx, p.y + dy, p.z + dz);
      fx.smoke(p.x - dx * 0.6, p.y - dy * 0.6, p.z - dz * 0.6, 0.7, 0.55);
      fx.fire(p.x - dx * 0.5, p.y - dy * 0.5, p.z - dz * 0.5, 0.5);
    }
  }
}

// ---------------------------------------------------------------- explosions
export function explode(x, y, z, radius = 8, dmg = 300, o = {}) {
  fx.explosion(x, y, z, radius);
  snd.explosion(x, z);
  const cam = G.camera;
  if (cam) { const d = Math.hypot(cam.position.x - x, cam.position.z - z); G.shake = Math.min(1.8, (G.shake || 0) + clamp(1.4 - d / 90, 0, 1.4)); }
  const R = radius * 1.25;
  for (const a of G.actors.slice()) {
    if (a.removed) continue;
    const dx = a.x - x, dy = a.y + 0.9 - y, dz = a.z - z, d = Math.hypot(dx, dy, dz);
    if (d > R) continue;
    const f = 1 - d / R;
    const dir = { x: dx / (d || 1), z: dz / (d || 1) };
    if (!a.inVehicle) {
      a.vx += dir.x * 14 * f; a.vz += dir.z * 14 * f; a.vy = 7 * f + 1; a.grounded = false;
      if (a.stun <= 0) a.stunAge = 0;
      a.stun = Math.max(a.stun, 1.5 * f + 0.4);
    }
    a.damage(dmg * f * f * 1.4, o.source || null, { dir, kind: 'explosion', ignoreArmor: false });
  }
  for (const v of G.vehicles.slice()) {
    if (v.removed || v === o.vehicle) continue;
    const dx = v.x - x, dy = v.y + 0.7 - y, dz = v.z - z, d = Math.hypot(dx, dy, dz);
    if (d > R + v.rad) continue;
    const f = clamp(1 - d / (R + v.rad), 0, 1);
    v.damage(dmg * f * 2.6, o.source || null);
    const k = f * 9 * (1500 / v.spec.mass);
    v.vx += (dx / (d || 1)) * k; v.vz += (dz / (d || 1)) * k;
    if (f > 0.35 && v.spec.mass < 4000) { v.vy = Math.max(v.vy, 3 + 6 * f); v.air = true; }
    v.spin += rr(-1.5, 1.5) * f * 3;
  }
  for (const h of G.helis) { const d = Math.hypot(h.x - x, h.y - y, h.z - z); if (d < R + 4) h.damage(dmg * (1 - d / (R + 4)) * 3, o.source || null); }
  if (G.peds) G.peds.alert(x, z, 75, x, z);
  if (o.source === G.player || (o.source && o.source.driver === 'player')) { if (G.police) G.police.crime('explosion', x, z, null); }
}
G.explode = explode;

export const combat = { fireWeapon, castRay, throwGrenade, fireRocket, updateProjectiles, explode, WEAPONS };
G.combat = combat;
