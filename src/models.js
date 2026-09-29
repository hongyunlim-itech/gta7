// Procedural models: humanoids, weapons, vehicles, helicopter. Everything is built from primitives.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { GeoBuilder } from './geo.js';
import { clamp, TAU } from './util.js';
import { G } from './state.js';

const WHITE = [1, 1, 1];
const C = (hex) => { const c = new THREE.Color(hex); return [c.r, c.g, c.b]; };

// ------------------------------------------------------------------ shared materials
export const M = {
  glass: new THREE.MeshStandardMaterial({ color: 0x1b2a38, roughness: 0.12, metalness: 0.55 }),
  detail: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.35 }),
  headOff: new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xfff0c0, emissiveIntensity: 0.06, roughness: 0.3 }),
  headOn: new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xfff0c0, emissiveIntensity: 2.6, roughness: 0.3 }),
  tailOff: new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xff1010, emissiveIntensity: 0.25, roughness: 0.3 }),
  tailOn: new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xff1010, emissiveIntensity: 2.6, roughness: 0.3 }),
  redOn: new THREE.MeshStandardMaterial({ color: 0x220000, emissive: 0xff1010, emissiveIntensity: 3.5 }),
  blueOn: new THREE.MeshStandardMaterial({ color: 0x000022, emissive: 0x1a40ff, emissiveIntensity: 3.5 }),
  barOff: new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.4 }),
  tire: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0.05 }),
  skin: {},
  cloth: {},
};
const clothMat = (hex) => M.cloth[hex] || (M.cloth[hex] = new THREE.MeshStandardMaterial({ color: hex, roughness: 0.85 }));
const skinMat = (hex) => M.skin[hex] || (M.skin[hex] = new THREE.MeshStandardMaterial({ color: hex, roughness: 0.7 }));

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.castShadow = true;
  return m;
}
// Box whose top is at local origin (for limbs) so rotating the parent swings it about the joint
function limb(w, h, d, mat) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(0, -h / 2, 0);
  const m = new THREE.Mesh(g, mat); m.castShadow = true; return m;
}

// ------------------------------------------------------------------ humanoid
export const SKIN = [0xf1c9a5, 0xe0ac86, 0xc68642, 0x8d5524, 0x6b4226, 0xffdbb4];
export const SHIRTS = [0xc0392b, 0x2980b9, 0x27ae60, 0xf1c40f, 0x8e44ad, 0xecf0f1, 0x2c3e50, 0xe67e22, 0x16a085, 0xd35400, 0x7f8c8d, 0xe84393];
export const PANTS = [0x2c3e50, 0x34495e, 0x1e272e, 0x6c5b45, 0x3d4b63, 0x555555, 0x8a7a5a];
export const HAIR = [0x1a1a1a, 0x3b2a1a, 0x6b4a2a, 0xc9a24a, 0x8a8a8a, 0x8a2a1a];

const humanoidMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, metalness: 0.02 });
function colored(geo, col) {
  const n = geo.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = col[0]; a[i * 3 + 1] = col[1]; a[i * 3 + 2] = col[2]; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return geo;
}
const hexc = (h) => C(h);

// 5 meshes per character (legs, torso+head, arms) sharing one vertex-coloured material.
export function makeHumanoid(o = {}) {
  const skin = hexc(o.skin ?? SKIN[0]), shirt = hexc(o.shirt ?? 0x2980b9), pants = hexc(o.pants ?? 0x2c3e50);
  const hair = hexc(o.hair ?? 0x1a1a1a), shoes = hexc(o.shoes ?? 0x1c1c1c);
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);

  const mk = (geo, x, y, z) => { const m = new THREE.Mesh(geo, humanoidMat); m.position.set(x, y, z); m.castShadow = true; return m; };
  const legGeo = () => { const b = new GeoBuilder(); b.box(0, -0.83, 0, 0.17, 0.85, 0.2, pants); b.box(0, -0.92, 0.04, 0.17, 0.09, 0.28, shoes); return b.build(); };
  const legL = mk(legGeo(), 0.1, 0.92, 0), legR = mk(legGeo(), -0.1, 0.92, 0);
  const armGeo = () => {
    const b = new GeoBuilder(), long = o.jacket || o.cop || o.long, sleeve = o.jacket ? hexc(o.jacket) : shirt;
    if (long) b.box(0, -0.58, 0, 0.115, 0.58, 0.125, sleeve);
    else { b.box(0, -0.24, 0, 0.115, 0.26, 0.125, shirt); b.box(0, -0.58, 0, 0.1, 0.34, 0.11, skin); }
    b.box(0, -0.68, 0, 0.1, 0.1, 0.1, skin);
    return b.build();
  };
  const armL = mk(armGeo(), 0.29, 1.5, 0), armR = mk(armGeo(), -0.29, 1.5, 0);
  // torso + head merged
  const tb = new GeoBuilder();
  tb.box(0, 0.92, 0, 0.46, 0.62, 0.26, o.jacket ? hexc(o.jacket) : shirt);
  tb.box(0, 0.92, 0, 0.44, 0.14, 0.27, pants); // hips
  if (o.cop) { tb.box(0, 1.0, 0, 0.48, 0.07, 0.28, [0.08, 0.08, 0.09]); tb.box(0.12, 1.36, 0.135, 0.07, 0.07, 0.02, [0.85, 0.7, 0.2]); }
  tb.box(0, 1.5, 0, 0.09, 0.06, 0.09, skin); // neck
  const parts = [tb.build()];
  const skull = new THREE.SphereGeometry(0.125, 9, 7); skull.scale(1, 1.05, 1.03); skull.translate(0, 1.68, 0); parts.push(colored(skull, skin));
  const face = new GeoBuilder(); face.box(0.045, 1.685, 0.115, 0.034, 0.028, 0.02, [0.05, 0.05, 0.06]); face.box(-0.045, 1.685, 0.115, 0.034, 0.028, 0.02, [0.05, 0.05, 0.06]); face.box(0, 1.645, 0.122, 0.04, 0.03, 0.03, skin); parts.push(face.build());
  if (o.cop) {
    const cap = new GeoBuilder(); cap.box(0, 1.79, 0.01, 0.27, 0.09, 0.28, [0.06, 0.09, 0.2]); cap.box(0, 1.77, 0.17, 0.24, 0.02, 0.12, [0.03, 0.05, 0.1]);
    parts.push(cap.build());
  } else if (o.hat) {
    const hb = new GeoBuilder(); const hc = hexc(o.hat); hb.box(0, 1.79, 0, 0.3, 0.05, 0.3, hc); hb.box(0, 1.83, 0, 0.2, 0.08, 0.2, hc); parts.push(hb.build());
  } else {
    const hg = new THREE.SphereGeometry(0.133, 9, 6, 0, TAU, 0, Math.PI * 0.52); hg.scale(1, 1.05, 1.03); hg.translate(0, 1.69, -0.012); parts.push(colored(hg, hair));
  }
  const torso = mk(mergeGeometries(parts.map((g) => { if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); return g.index ? g.toNonIndexed() : g; })), 0, 0, 0);
  const hand = new THREE.Group(); hand.position.set(0, -0.62, 0.04); armR.add(hand);
  body.add(legL, legR, torso, armL, armR);
  return { root, body, legL, legR, armL, armR, torso, hand, phase: Math.random() * TAU, weaponId: null, weapon: null, recoil: 0, deadT: 0, height: 1.8 };
}

export function setHeldWeapon(h, id) {
  if (h.weaponId === id) return;
  h.weaponId = id;
  if (h.weapon) { h.hand.remove(h.weapon); h.weapon = null; }
  if (id && id !== 'fist') { h.weapon = makeWeaponModel(id); h.hand.add(h.weapon); }
}

// Pose the humanoid. speed in m/s, aim: bool, aimUp: radians (+ = looking up), dead: 0..1 fall progress, sit: bool
export function poseHumanoid(h, dt, s) {
  const { speed = 0, aim = false, aimUp = 0, air = false, fallDir = -1, punch = 0, flee = false, cower = false } = s;
  const moving = speed > 0.15;
  if (moving) h.phase += dt * (3.2 + speed * 1.55);
  const amp = clamp(speed / 5.5, 0, 1) * 0.95 + (moving ? 0.08 : 0);
  const sw = Math.sin(h.phase) * amp;
  h.legL.rotation.x = air ? -0.5 : sw; h.legR.rotation.x = air ? 0.3 : -sw;
  h.recoil = Math.max(0, h.recoil - dt * 7);
  const two = h.weaponId === 'smg' || h.weaponId === 'shotgun' || h.weaponId === 'rifle' || h.weaponId === 'rpg';
  const armed = h.weapon && h.weaponId !== 'grenade';
  if (aim && armed) {
    h.armR.rotation.set(-Math.PI / 2 - aimUp + h.recoil * 0.35, 0, 0.05);
    if (two) h.armL.rotation.set(-Math.PI / 2 - aimUp + 0.15, 0, -0.55); else h.armL.rotation.set(-0.2 + sw * 0.3, 0, 0);
    h.body.rotation.y = 0; h.torso.rotation.y = 0.0;
  } else if (punch > 0) {
    const p = Math.sin(punch * Math.PI);
    h.armR.rotation.set(-Math.PI / 2 * p - 0.2, 0, 0); h.armL.rotation.set(sw * 0.5, 0, 0);
  } else if (cower) {
    h.armL.rotation.set(-2.4, 0, -0.3); h.armR.rotation.set(-2.4, 0, 0.3);
  } else if (flee) {
    h.armL.rotation.set(-sw * 1.3 - 0.6, 0, 0.2); h.armR.rotation.set(sw * 1.3 - 0.6, 0, -0.2);
  } else {
    h.armL.rotation.set(-sw * 0.9, 0, 0.04); h.armR.rotation.set(armed ? -0.35 + sw * 0.2 : sw * 0.9, 0, -0.04);
    if (armed) h.armR.rotation.x = -0.5 + h.recoil * 0.3;
  }
  // death
  if (s.dead !== undefined) {
    h.deadT = s.dead;
    const t = 1 - Math.pow(1 - clamp(s.dead, 0, 1), 2);
    h.body.rotation.x = fallDir * -t * (Math.PI / 2);
    h.body.position.y = t * 0.16; h.body.position.z = fallDir * -t * 0.02;
  }
}

// ------------------------------------------------------------------ weapons
export function makeWeaponModel(id) {
  const g = new THREE.Group();
  const dark = clothMat(0x1c1c1e), metal = new THREE.MeshStandardMaterial({ color: 0x3a3d42, roughness: 0.4, metalness: 0.8 }), wood = clothMat(0x6b4a2a);
  const muzzle = new THREE.Vector3();
  if (id === 'pistol') {
    g.add(box(0.05, 0.07, 0.24, metal, 0, 0.02, 0.1), box(0.05, 0.13, 0.06, dark, 0, -0.06, 0.02)); muzzle.set(0, 0.03, 0.24);
  } else if (id === 'smg') {
    g.add(box(0.06, 0.09, 0.4, metal, 0, 0.02, 0.15), box(0.05, 0.2, 0.06, dark, 0, -0.1, 0.1), box(0.05, 0.12, 0.06, dark, 0, -0.06, 0.0)); muzzle.set(0, 0.04, 0.37);
  } else if (id === 'shotgun') {
    g.add(box(0.06, 0.07, 0.85, metal, 0, 0.02, 0.3), box(0.07, 0.09, 0.3, wood, 0, 0.0, -0.2), box(0.07, 0.08, 0.28, wood, 0, -0.03, 0.25)); muzzle.set(0, 0.04, 0.74);
  } else if (id === 'rifle') {
    g.add(box(0.06, 0.1, 0.8, metal, 0, 0.03, 0.25), box(0.06, 0.09, 0.3, dark, 0, -0.01, -0.28), box(0.05, 0.2, 0.08, dark, 0, -0.14, 0.18), box(0.04, 0.05, 0.18, dark, 0, 0.1, 0.15)); muzzle.set(0, 0.05, 0.66);
  } else if (id === 'rpg') {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.1, 8), new THREE.MeshStandardMaterial({ color: 0x4d5a3a, roughness: 0.7 })); t.rotation.x = Math.PI / 2; t.position.set(0, 0.06, 0.2); t.castShadow = true;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.25, 8), clothMat(0x7a2a1a)); cone.rotation.x = Math.PI / 2; cone.position.set(0, 0.06, 0.88);
    g.add(t, cone, box(0.05, 0.14, 0.06, dark, 0, -0.06, 0.05)); muzzle.set(0, 0.06, 1.0);
  } else if (id === 'grenade') {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), clothMat(0x3f5a2a)); s.position.set(0, 0, 0.05); g.add(s);
  }
  g.userData.muzzle = muzzle;
  return g;
}

// ------------------------------------------------------------------ vehicles
// hl/hw are physics half-extents. Stats feed vehicle.js.
export const VTYPES = {
  sedan:   { name: 'Sedan',   len: 4.6, wid: 1.84, y0: 0.30, bh: 0.62, cab: [-1.45, 0.85, -1.0, 0.2, 0.56], wr: 0.34, ww: 0.22, wb: 2.7, track: 1.56, mass: 1400, vmax: 40, acc: 13, brake: 24, grip: 7.5, steer: 0.62, hp: 1000, eng: 'car' },
  sports:  { name: 'Sports',  len: 4.4, wid: 1.96, y0: 0.22, bh: 0.5, cab: [-1.1, 0.6, -0.8, -0.05, 0.42], wr: 0.35, ww: 0.3, wb: 2.6, track: 1.66, mass: 1250, vmax: 58, acc: 21, brake: 30, grip: 9, steer: 0.55, hp: 900, eng: 'sports', ext: ['spoiler'] },
  muscle:  { name: 'Muscle',  len: 4.9, wid: 1.95, y0: 0.30, bh: 0.56, cab: [-1.35, 0.6, -0.95, -0.15, 0.5], wr: 0.37, ww: 0.3, wb: 2.9, track: 1.64, mass: 1650, vmax: 52, acc: 19, brake: 26, grip: 7.0, steer: 0.55, hp: 1100, eng: 'sports', ext: ['scoop', 'stripes'] },
  suv:     { name: 'SUV',     len: 4.8, wid: 2.0, y0: 0.40, bh: 0.8, cab: [-2.1, 1.0, -1.85, 0.5, 0.68], wr: 0.42, ww: 0.28, wb: 2.9, track: 1.7, mass: 2100, vmax: 36, acc: 11, brake: 22, grip: 7.0, steer: 0.55, hp: 1400, eng: 'truck', ext: ['rack'] },
  pickup:  { name: 'Pickup',  len: 5.2, wid: 1.98, y0: 0.42, bh: 0.72, cab: [0.0, 1.4, 0.25, 0.85, 0.6], wr: 0.4, ww: 0.28, wb: 3.1, track: 1.66, mass: 1900, vmax: 36, acc: 11, brake: 22, grip: 6.8, steer: 0.55, hp: 1300, eng: 'truck', ext: ['bed'] },
  van:     { name: 'Van',     len: 5.2, wid: 2.0, y0: 0.38, bh: 1.5, cab: null, wr: 0.38, ww: 0.24, wb: 3.2, track: 1.7, mass: 2300, vmax: 30, acc: 9, brake: 20, grip: 6.5, steer: 0.5, hp: 1400, eng: 'truck', ext: ['van'] },
  taxi:    { name: 'Taxi',    len: 4.6, wid: 1.84, y0: 0.30, bh: 0.62, cab: [-1.45, 0.85, -1.0, 0.2, 0.56], wr: 0.34, ww: 0.22, wb: 2.7, track: 1.56, mass: 1400, vmax: 40, acc: 13, brake: 24, grip: 7.5, steer: 0.62, hp: 1000, eng: 'car', ext: ['taxi'], color: 0xf2c40c },
  police:  { name: 'Police',  len: 4.8, wid: 1.9, y0: 0.30, bh: 0.62, cab: [-1.5, 0.85, -1.05, 0.2, 0.56], wr: 0.35, ww: 0.24, wb: 2.8, track: 1.6, mass: 1600, vmax: 50, acc: 17, brake: 28, grip: 8.2, steer: 0.6, hp: 1300, eng: 'sports', ext: ['police'], color: 0x14161b },
  bus:     { name: 'Bus',     len: 11.2, wid: 2.6, y0: 0.5, bh: 2.8, cab: null, wr: 0.5, ww: 0.32, wb: 6.4, track: 2.1, mass: 9000, vmax: 22, acc: 5, brake: 14, grip: 5.5, steer: 0.4, hp: 3000, eng: 'bus', ext: ['bus'], color: 0x2d7fd3 },
};
export const CIVILIAN_TYPES = ['sedan', 'sedan', 'sedan', 'sports', 'muscle', 'suv', 'suv', 'pickup', 'van', 'taxi', 'taxi', 'bus'];
export const CAR_COLORS = [0xc0392b, 0x2c3e50, 0xecf0f1, 0x1a1a1a, 0x7f8c8d, 0x2980b9, 0x27ae60, 0xd35400, 0x8e44ad, 0xf1c40f, 0x95a5a6, 0x16a085, 0x5b2a2a, 0xb8c2cc, 0x0e6f8f];
for (const k in VTYPES) { const t = VTYPES[k]; t.hl = t.len / 2; t.hw = t.wid / 2; t.top = t.y0 + t.bh + (t.cab ? t.cab[4] : 0.2); }

function frustum(b, top, y0, h, xb, zb0, zb1, xt, zt0, zt1, glassCol, roofCol) {
  const y1 = y0 + h;
  const nf = [0, zb1 - zt1, h], nr = [0, zt0 - zb0, -h];
  b.quad([-xb, y0, zb1], [xb, y0, zb1], [xt, y1, zt1], [-xt, y1, zt1], nf, null, glassCol);
  b.quad([xb, y0, zb0], [-xb, y0, zb0], [-xt, y1, zt0], [xt, y1, zt0], nr, null, glassCol);
  b.quad([xb, y0, zb1], [xb, y0, zb0], [xt, y1, zt0], [xt, y1, zt1], [h, xb - xt, 0], null, glassCol);
  b.quad([-xb, y0, zb0], [-xb, y0, zb1], [-xt, y1, zt1], [-xt, y1, zt0], [-h, xb - xt, 0], null, glassCol);
  top.quad([-xt, y1, zt1], [xt, y1, zt1], [xt, y1, zt0], [-xt, y1, zt0], [0, 1, 0], null, roofCol);
}

const carGeoCache = {};
function carGeometry(key) {
  if (carGeoCache[key]) return carGeoCache[key];
  const s = VTYPES[key], hw = s.hw, hl = s.hl;
  const paint = new GeoBuilder(), detail = new GeoBuilder(), head = new GeoBuilder(), tail = new GeoBuilder(), extraP = paint;
  const dark = [0.05, 0.05, 0.06], glass = [0.07, 0.11, 0.16], chrome = [0.6, 0.62, 0.66];
  const ext = s.ext || [];
  // body
  if (ext.includes('bed')) {
    const frontZ0 = -0.05, frontZ1 = hl;
    paint.box(0, s.y0, (frontZ0 + frontZ1) / 2, s.wid, s.bh, frontZ1 - frontZ0, WHITE, { tile: 4 });
    paint.box(0, s.y0, (-hl + frontZ0) / 2, s.wid, 0.3, frontZ0 + hl, WHITE, { tile: 4 });
    const wallH = 0.42, y = s.y0 + 0.3, L = frontZ0 + hl - 0.1;
    paint.box(hw - 0.05, y, (-hl + frontZ0) / 2, 0.1, wallH, L, WHITE, { tile: 4 }); paint.box(-hw + 0.05, y, (-hl + frontZ0) / 2, 0.1, wallH, L, WHITE, { tile: 4 });
    paint.box(0, y, -hl + 0.05, s.wid, wallH, 0.1, WHITE, { tile: 4 }); paint.box(0, y, frontZ0 - 0.05, s.wid, wallH, 0.1, WHITE, { tile: 4 });
    detail.box(0, s.y0 + 0.28, (-hl + frontZ0) / 2, s.wid - 0.2, 0.03, L - 0.1, [0.12, 0.12, 0.13]);
  } else {
    paint.box(0, s.y0, 0, s.wid, s.bh, s.len, WHITE, { tile: 4 });
  }
  if (s.cab) {
    const [zb0, zb1, zt0, zt1, ch] = s.cab;
    const yb = s.y0 + s.bh;
    frustum(detail, paint, yb, ch, hw * 0.9, zb0, zb1, hw * 0.78, zt0, zt1, glass, WHITE);
    // pillars for readability
    detail.box(hw * 0.86, yb, (zb0 + zt0) / 2 + 0.15, 0.06, ch, 0.09, dark); detail.box(-hw * 0.86, yb, (zb0 + zt0) / 2 + 0.15, 0.06, ch, 0.09, dark);
  }
  if (ext.includes('van')) {
    const yb = s.y0 + 0.8;
    detail.box(hw + 0.005, yb, 1.3, 0.02, 0.55, 1.5, glass); detail.box(-hw - 0.005, yb, 1.3, 0.02, 0.55, 1.5, glass);
    detail.box(0, yb + 0.05, hl + 0.005, s.wid * 0.86, 0.6, 0.03, glass);
    paint.box(0, s.y0 + s.bh, 0, s.wid * 0.97, 0.05, s.len * 0.97, WHITE, { tile: 4 });
  }
  if (ext.includes('bus')) {
    const yb = s.y0 + 1.0, hh = 1.15;
    detail.box(hw + 0.005, yb, 0.0, 0.02, hh, s.len - 1.2, glass); detail.box(-hw - 0.005, yb, 0.0, 0.02, hh, s.len - 1.2, glass);
    detail.box(0, yb, hl + 0.005, s.wid * 0.9, hh + 0.4, 0.03, glass);
    for (let z = -hl + 1.6; z < hl - 1; z += 1.7) { paint.box(hw + 0.02, yb, z, 0.02, hh, 0.16, WHITE, { tile: 4 }); paint.box(-hw - 0.02, yb, z, 0.02, hh, 0.16, WHITE, { tile: 4 }); }
    detail.box(0, s.y0 + s.bh - 0.3, hl + 0.01, s.wid * 0.6, 0.22, 0.03, [0.05, 0.4, 0.1]);
    detail.box(0, s.y0 + s.bh + 0.0, 0, 1.6, 0.3, 3.2, [0.7, 0.7, 0.72]); // roof AC
  }
  // bumpers, grille, underbody, plates
  detail.box(0, s.y0 - 0.14, 0, s.wid * 0.92, 0.22, s.len * 0.92, dark);
  detail.box(0, s.y0 - 0.02, hl - 0.03, s.wid * 1.005, 0.24, 0.16, dark, { top: true });
  detail.box(0, s.y0 - 0.02, -hl + 0.03, s.wid * 1.005, 0.24, 0.16, dark);
  detail.box(0, s.y0 + s.bh * 0.55, hl + 0.005, s.wid * 0.5, s.bh * 0.32, 0.03, [0.03, 0.03, 0.035]);
  detail.box(0, s.y0 + 0.1, hl + 0.06, 0.5, 0.13, 0.02, [0.9, 0.9, 0.85]); detail.box(0, s.y0 + 0.1, -hl - 0.06, 0.5, 0.13, 0.02, [0.9, 0.9, 0.85]);
  detail.box(hw + 0.02, s.y0 + s.bh * 0.5, 0.0, 0.02, 0.05, s.len * 0.62, [0.1, 0.1, 0.1]); detail.box(-hw - 0.02, s.y0 + s.bh * 0.5, 0.0, 0.02, 0.05, s.len * 0.62, [0.1, 0.1, 0.1]);
  // mirrors
  if (s.cab) { const mz = s.cab[1] - 0.3; detail.box(hw + 0.08, s.y0 + s.bh + 0.1, mz, 0.14, 0.1, 0.08, dark); detail.box(-hw - 0.08, s.y0 + s.bh + 0.1, mz, 0.14, 0.1, 0.08, dark); }
  // lights
  const ly = s.y0 + s.bh * (s.bh > 1 ? 0.3 : 0.62), lx = hw - 0.34;
  for (const sx of [-1, 1]) {
    head.box(sx * lx, ly, hl + 0.01, 0.4, 0.13, 0.05, [1, 1, 0.9]);
    tail.box(sx * lx, ly, -hl - 0.01, 0.42, 0.12, 0.05, [1, 0.15, 0.1]);
  }
  if (ext.includes('spoiler')) { paint.box(0, s.y0 + s.bh + 0.16, -hl + 0.3, s.wid * 0.9, 0.05, 0.4, WHITE, { tile: 4 }); paint.box(hw * 0.7, s.y0 + s.bh, -hl + 0.3, 0.06, 0.16, 0.3, WHITE); paint.box(-hw * 0.7, s.y0 + s.bh, -hl + 0.3, 0.06, 0.16, 0.3, WHITE); }
  if (ext.includes('scoop')) paint.box(0, s.y0 + s.bh, hl * 0.45, 0.6, 0.12, 0.9, WHITE, { tile: 4 });
  if (ext.includes('stripes')) { detail.box(0.18, s.y0 + s.bh + 0.006, 0, 0.18, 0.005, s.len * 0.98, [0.92, 0.92, 0.95]); detail.box(-0.18, s.y0 + s.bh + 0.006, 0, 0.18, 0.005, s.len * 0.98, [0.92, 0.92, 0.95]); }
  if (ext.includes('rack')) { const yr = s.y0 + s.bh + s.cab[4]; for (const sx of [-1, 1]) detail.box(sx * hw * 0.68, yr, -0.4, 0.05, 0.08, 2.4, chrome); }
  if (ext.includes('taxi')) { detail.box(0, s.y0 + s.bh + s.cab[4], -0.15, 0.6, 0.18, 0.24, [1, 0.95, 0.7]); }
  if (ext.includes('police')) {
    // white door panels & bumper
    detail.box(hw + 0.012, s.y0 + 0.08, -0.1, 0.02, s.bh - 0.12, 1.55, [0.93, 0.93, 0.96]); detail.box(-hw - 0.012, s.y0 + 0.08, -0.1, 0.02, s.bh - 0.12, 1.55, [0.93, 0.93, 0.96]);
    detail.box(0, s.y0 + s.bh + s.cab[4], -0.15, 1.0, 0.06, 0.4, [0.1, 0.1, 0.12]);
    detail.box(0, s.y0 + s.bh + 0.0, hl - 0.04, s.wid * 1.01, 0.05, 0.05, [0.05, 0.05, 0.4]);
  }
  const cache = { paint: paint.build(), detail: detail.build(), head: head.build(), tail: tail.build() };
  carGeoCache[key] = cache;
  return cache;
}

const wheelGeoCache = {};
function wheelGeometry(r, w) {
  const k = r + '_' + w;
  if (wheelGeoCache[k]) return wheelGeoCache[k];
  const tire = new THREE.CylinderGeometry(r, r, w, 14); tire.rotateZ(Math.PI / 2);
  const hub = new THREE.CylinderGeometry(r * 0.62, r * 0.62, w + 0.03, 10); hub.rotateZ(Math.PI / 2);
  const nut = new THREE.BoxGeometry(w + 0.05, r * 0.2, r * 0.2);
  const paintCol = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = c[0]; a[i * 3 + 1] = c[1]; a[i * 3 + 2] = c[2]; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
  const geo = mergeGeometries([paintCol(tire, [0.05, 0.05, 0.055]), paintCol(hub, [0.62, 0.64, 0.68]), paintCol(nut, [0.2, 0.2, 0.22])]);
  wheelGeoCache[k] = geo;
  return geo;
}

let beamGeo = null;
export function makeVehicleModel(key, colorHex, beamTexture) {
  const s = VTYPES[key];
  const geo = carGeometry(key);
  const group = new THREE.Group();
  const color = colorHex ?? s.color ?? 0xc0392b;
  const paintMat = new THREE.MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.45, envMap: G.envMap || null, envMapIntensity: 0.7 });
  const paintMesh = new THREE.Mesh(geo.paint, paintMat), detailMesh = new THREE.Mesh(geo.detail, M.detail);
  const headMesh = new THREE.Mesh(geo.head, M.headOff), tailMesh = new THREE.Mesh(geo.tail, M.tailOff);
  paintMesh.castShadow = detailMesh.castShadow = true;
  group.add(paintMesh, detailMesh, headMesh, tailMesh);
  const wheels = [];
  const wg = wheelGeometry(s.wr, s.ww);
  for (const [sx, sz, front] of [[1, 1, true], [-1, 1, true], [1, -1, false], [-1, -1, false]]) {
    const pivot = new THREE.Group(); pivot.position.set(sx * s.track / 2, s.wr, sz * s.wb / 2);
    const spin = new THREE.Mesh(wg, M.tire); spin.castShadow = true;
    if (sx < 0) spin.rotation.y = Math.PI; // keep hub facing outward
    pivot.add(spin); group.add(pivot);
    wheels.push({ pivot, spin, front });
  }
  // second axle pair for buses
  let bar = null;
  if (s.ext && s.ext.includes('police')) {
    const y = s.y0 + s.bh + s.cab[4] + 0.06;
    const red = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.26), M.barOff), blue = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.26), M.barOff);
    red.position.set(-0.28, y, -0.15); blue.position.set(0.28, y, -0.15);
    group.add(red, blue); bar = { red, blue };
  }
  if (!beamGeo) { beamGeo = new THREE.PlaneGeometry(4.4, 13); beamGeo.rotateX(Math.PI / 2); beamGeo.translate(0, 0.09, 8.2); }
  let beam = null;
  if (beamTexture) {
    beam = new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ map: beamTexture, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, opacity: 0.7 }));
    beam.position.z = s.hl - 0.6; beam.visible = false; beam.renderOrder = 6;
    group.add(beam);
  }
  return { group, paintMat, paintMesh, detailMesh, headMesh, tailMesh, wheels, bar, beam, spec: s, baseColor: new THREE.Color(color) };
}

// ------------------------------------------------------------------ helicopter
export function makeHelicopter() {
  const g = new THREE.Group();
  const body = new THREE.MeshStandardMaterial({ color: 0x15181f, roughness: 0.4, metalness: 0.5 });
  const white = new THREE.MeshStandardMaterial({ color: 0xe8ecf2, roughness: 0.5, metalness: 0.3 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x1c2b3a, roughness: 0.1, metalness: 0.6 });
  const fus = new THREE.Mesh(new THREE.SphereGeometry(1.5, 14, 10), body); fus.scale.set(1, 0.9, 1.7); fus.castShadow = true; g.add(fus);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(1.2, 12, 8, 0, TAU, 0, Math.PI / 2), glass); nose.scale.set(1, 0.9, 1.3); nose.rotation.x = Math.PI / 2 - 0.35; nose.position.set(0, 0.35, 1.7); g.add(nose);
  g.add(box(0.5, 0.5, 5, body, 0, 0.35, -3.6), box(0.2, 1.4, 0.7, white, 0, 1.0, -6), box(1.8, 0.1, 0.8, body, 0, 0.5, -5.8));
  g.add(box(3.2, 0.06, 0.1, white, 0, -1.25, 0.2).translateX(0), box(0.06, 0.6, 0.1, body, 0.9, -1.0, 0.9), box(0.06, 0.6, 0.1, body, -0.9, -1.0, 0.9));
  for (const sx of [-1, 1]) g.add(box(0.12, 0.1, 3.4, body, sx * 0.9, -1.3, 0.2));
  const rotor = new THREE.Group(); rotor.position.y = 1.6;
  for (let i = 0; i < 4; i++) { const b = box(8.6, 0.05, 0.32, body, 0, 0, 0); b.rotation.y = (i / 4) * TAU; b.position.set(0, 0, 0); rotor.add(b); }
  const mast = box(0.16, 0.5, 0.16, body, 0, 1.35, 0); g.add(mast); rotor.position.y = 1.62; g.add(rotor);
  const tail = new THREE.Group(); tail.position.set(0.15, 1.0, -6);
  tail.add(box(0.05, 1.5, 0.2, body, 0, 0, 0), box(0.05, 0.2, 1.5, body, 0, 0, 0)); g.add(tail);
  const light = new THREE.Mesh(new THREE.SphereGeometry(0.16, 6, 6), new THREE.MeshBasicMaterial({ color: 0xff2020 })); light.position.set(0, -0.9, 0.5); g.add(light);
  return { group: g, rotor, tail, light };
}
