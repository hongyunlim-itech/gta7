// Floating pickups: health, armour, cash, weapons, ammo.
import * as THREE from 'three';
import { G } from './state.js';
import { makeWeaponModel } from './models.js';
import { WEAPONS, WEAPON_ORDER } from './combat.js';
import { nodePos, NODE_COUNT } from './world.js';
import { audio } from './audio.js';
import { rr, pick, TAU } from './util.js';

const COLORS = { health: 0xff3b3b, armor: 0x3b8bff, cash: 0x38e07a, weapon: 0xffb13b, ammo: 0xffe04a };
const glowCache = {};
let sharedGeo = null;

function build(type, wid) {
  const g = new THREE.Group();
  const col = COLORS[type];
  const mat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.55, roughness: 0.4 });
  if (type === 'health') {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.2, 0.2), mat), new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.62, 0.2), mat));
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.16), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x666666, roughness: 0.5 })); back.position.z = -0.1; g.add(back);
  } else if (type === 'armor') {
    const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.42), mat); s.scale.set(1, 1.25, 0.6); g.add(s);
  } else if (type === 'cash') {
    for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.28), mat); b.position.y = i * 0.11 - 0.1; b.rotation.y = i * 0.3; g.add(b); }
  } else if (type === 'weapon') {
    const m = makeWeaponModel(wid); m.scale.setScalar(1.5); m.rotation.y = Math.PI / 2; m.position.x = 0.3; g.add(m);
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.06, 0.5), mat); box.position.y = -0.35; g.add(box);
  } else {
    g.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.35), mat));
  }
  const key = type;
  if (!glowCache[key]) glowCache[key] = new THREE.SpriteMaterial({ map: G.world.glowTex, color: col, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.8 });
  const glow = new THREE.Sprite(glowCache[key]); glow.scale.set(2.2, 2.2, 1); g.add(glow);
  g.traverse((o) => { if (o.isMesh) o.castShadow = false; });
  return g;
}

export const pickups = {
  list: [],
  init() {
    const place = (type, n, extra) => {
      for (let i = 0; i < n; i++) {
        const id = (Math.random() * NODE_COUNT) | 0, p = nodePos(id, {});
        this.spawn(type, p.x + rr(-0.6, 0.6), p.z + rr(-0.6, 0.6), extra ? extra() : {});
      }
    };
    place('health', 14); place('armor', 10); place('cash', 16, () => ({ amount: Math.floor(rr(60, 400)) }));
    for (const id of ['pistol', 'smg', 'shotgun', 'rifle', 'grenade', 'rpg', 'smg', 'shotgun', 'rifle', 'grenade']) place('weapon', 1, () => ({ wid: id }));
    place('ammo', 8);
  },
  spawn(type, x, z, o = {}) {
    const wid = o.wid || null;
    const mesh = build(type, wid);
    mesh.position.set(x, 1, z); G.scene.add(mesh);
    const p = { type, wid, x, z, amount: o.amount || 0, mesh, alive: true, respawn: o.temp ? 0 : 70, timer: 0, phase: Math.random() * TAU, ttl: o.ttl || 0 };
    this.list.push(p);
    return p;
  },
  dropCash(x, z, amount) { this.spawn('cash', x, z, { amount, temp: true, ttl: 60 }); },
  update(dt) {
    const p = G.player;
    if (!p) return;
    const px = p.cx, pz = p.cz, r = p.inVehicle ? 3.2 : 1.7;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const k = this.list[i];
      if (!k.alive) {
        if (k.respawn > 0) { k.timer -= dt; if (k.timer <= 0) { k.alive = true; k.mesh.visible = true; } }
        continue;
      }
      if (k.ttl > 0) { k.ttl -= dt; if (k.ttl <= 0) { G.scene.remove(k.mesh); this.list.splice(i, 1); continue; } }
      const dx = k.x - px, dz = k.z - pz;
      const d2 = dx * dx + dz * dz;
      k.mesh.visible = d2 < 140 * 140;
      if (!k.mesh.visible) continue;
      k.mesh.rotation.y += dt * 1.8;
      k.mesh.position.y = 1.0 + Math.sin(G.time * 2.2 + k.phase) * 0.12;
      if (d2 < r * r && !p.dead) this.collect(k, i);
    }
  },
  collect(k, idx) {
    const p = G.player;
    let took = true;
    switch (k.type) {
      case 'health': if (p.hp >= p.maxHp) took = false; else { p.hp = Math.min(p.maxHp, p.hp + 50); G.hud.toast('+ Health'); audio.pickup(); } break;
      case 'armor': if (p.armor >= 100) took = false; else { p.armor = 100; G.hud.toast('+ Body armour'); audio.pickup(); } break;
      case 'cash': p.addMoney(k.amount); audio.cash(); break;
      case 'weapon': { const w = WEAPONS[k.wid]; p.giveWeapon(k.wid, w.thrown ? 5 : Math.floor((w.ammoMax || 60) * 0.35)); audio.pickup(); if (!p.weapons[p.cur] && p.cur !== 'fist') p.selectWeapon(k.wid); break; }
      case 'ammo': {
        let any = false;
        for (const id of Object.keys(p.weapons)) { const w = WEAPONS[id], s = p.weapons[id]; if (s.reserve < w.ammoMax) { s.reserve = Math.min(w.ammoMax, s.reserve + Math.ceil(w.ammoMax * 0.25)); any = true; } }
        if (!any) took = false; else { G.hud.toast('+ Ammo'); audio.pickup(); }
        break;
      }
    }
    if (!took) return;
    k.alive = false; k.mesh.visible = false; k.timer = k.respawn;
    if (!k.respawn) { G.scene.remove(k.mesh); this.list.splice(idx, 1); }
  },
};
