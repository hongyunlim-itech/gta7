// Jobs (race, car theft delivery, assassination) plus shop / hospital interactions.
import * as THREE from 'three';
import { G } from './state.js';
import { world } from './world.js';
import { Vehicle } from './vehicle.js';
import { Ped } from './peds.js';
import { audio } from './audio.js';
import { nodePos, nodeId } from './world.js';
import { randomLane, nearestInter } from './roads.js';
import { GRID, roadCenter, PITCH } from './config.js';
import { rr, pick, chance, fmtMoney, clamp } from './util.js';

const _n = { x: 0, z: 0 };

function makeBeam(color, r = 2.4, h = 40) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.24, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 20, 1, true), mat); beam.position.y = h / 2; g.add(beam);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.14, 6, 30), new THREE.MeshBasicMaterial({ color })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.3; g.add(ring);
  g.userData = { beam, ring, mat };
  G.scene.add(g);
  return g;
}
function setBeam(b, x, y, z, color, scale = 1) {
  b.visible = true; b.position.set(x, y, z); b.scale.set(scale, 1, scale);
  b.userData.mat.color.set(color); b.userData.ring.material.color.set(color);
}

const STARTS = [
  { kind: 'race', name: 'Street Race', i: 4, j: 3, k: 2, ch: 'R', reward: 2500 },
  { kind: 'delivery', name: 'Grab & Go', i: 7, j: 9, k: 0, ch: 'G', reward: 3000 },
  { kind: 'hit', name: 'Take Him Out', i: 2, j: 9, k: 1, ch: 'H', reward: 2200 },
  { kind: 'race', name: 'Harbor Sprint', i: 9, j: 4, k: 3, ch: 'R', reward: 2800 },
];

export const missions = {
  starts: [], active: null, beams: [], msgT: 0,

  init() {
    for (const s of STARTS) {
      const p = nodePos(nodeId(s.i, s.j, s.k), {});
      const m = { ...s, x: p.x, z: p.z, cool: 0, beam: makeBeam(0xffd23a, 2.2, 26) };
      m.beam.position.set(p.x, 0.2, p.z);
      this.starts.push(m);
    }
    this.beams = [makeBeam(0xffd23a, 5, 60), makeBeam(0xffffff, 3.2, 40), makeBeam(0xff5a4a, 2.6, 60)];
    for (const b of this.beams) b.visible = false;
    // shop & hospital
    const shop = G.world.pois.shop, hosp = G.world.pois.hospital;
    const sb = makeBeam(0xffb13b, 1.8, 14); sb.position.set(shop.x, 0.2, shop.z);
    const hb = makeBeam(0xff4a4a, 1.8, 14); hb.position.set(hosp.x, 0.2, hosp.z);
    G.interactables = [
      {
        x: shop.x, z: shop.z, r: 2.6,
        text: () => (Object.keys(G.player.weapons).length >= 6 ? 'E — Refill ammo ($300)' : 'E — Buy all weapons & ammo ($1,200)'),
        action: () => {
          const p = G.player, all = Object.keys(p.weapons).length >= 6, cost = all ? 300 : 1200;
          if (p.money < cost) { G.hud.toast('Not enough cash'); return; }
          p.addMoney(-cost); p.giveAll(all ? 0.6 : 1); audio.cash(); G.hud.toast(all ? 'Ammo refilled' : 'Weapons purchased');
          if (!all) p.selectWeapon('smg');
        },
      },
      {
        x: hosp.x, z: hosp.z, r: 2.6,
        text: () => (G.player.hp < G.player.maxHp || G.player.armor < 100 ? 'E — Treatment ($150)' : 'You are in perfect health'),
        action: () => {
          const p = G.player;
          if (p.hp >= p.maxHp && p.armor >= 100) return;
          if (p.money < 150) { G.hud.toast('Not enough cash'); return; }
          p.addMoney(-150); p.hp = p.maxHp; p.armor = 100; audio.pickup(); G.hud.toast('Fully healed');
        },
      },
    ];
  },

  hud() {
    const a = this.active; if (!a) return null;
    return { title: a.name.toUpperCase(), text: a.text, timer: a.timer };
  },
  blips() {
    const out = [];
    if (!this.active) for (const m of this.starts) if (m.cool <= 0) out.push({ x: m.x, z: m.z, col: '#ffd23a', ch: m.ch, r: 7, edge: true });
    if (this.active && this.active.blips) out.push(...this.active.blips());
    return out;
  },

  start(m) {
    const p = G.player;
    m.cool = 0;
    const a = { kind: m.kind, name: m.name, start: m, reward: m.reward, stage: 0, text: '', timer: undefined, t: 0 };
    this.active = a;
    audio.click();
    if (m.kind === 'race') {
      a.stage = 'getcar'; a.text = 'Get in a vehicle'; a.grace = 60;
      // build checkpoint loop
      const cps = []; let [ci, cj] = nearestInter(m.x, m.z), total = 0, px = m.x, pz = m.z;
      for (let n = 0; n < 8; n++) {
        let bi, bj, tries = 0;
        do { bi = clamp(ci + ((Math.random() * 9) | 0) - 4, 0, GRID); bj = clamp(cj + ((Math.random() * 9) | 0) - 4, 0, GRID); tries++; }
        while ((Math.hypot(roadCenter(bi) - px, roadCenter(bj) - pz) < 130 || (bi === ci && bj === cj)) && tries < 30);
        const x = roadCenter(bi), z = roadCenter(bj);
        total += Math.hypot(x - px, z - pz); cps.push({ x, z }); px = x; pz = z; ci = bi; cj = bj;
      }
      const [si, sj] = nearestInter(m.x, m.z); cps.push({ x: roadCenter(si), z: roadCenter(sj) }); total += Math.hypot(cps[8].x - px, cps[8].z - pz);
      a.cps = cps; a.idx = 0; a.limit = total / 15.5 + 22;
      a.blips = () => {
        if (a.stage === 'getcar') return [];
        const o = []; const c = a.cps[a.idx], n = a.cps[a.idx + 1];
        if (c) o.push({ x: c.x, z: c.z, col: '#ffd23a', r: 7, edge: true });
        if (n) o.push({ x: n.x, z: n.z, col: '#ffffff', r: 4 });
        return o;
      };
    } else if (m.kind === 'delivery') {
      a.stage = 'steal';
      let lane = null; for (let n = 0; n < 30 && !lane; n++) lane = randomLane(m.x, m.z, 35, 130, 4);
      lane = lane || { x: m.x + 20, z: m.z, heading: 0 };
      const cols = [0xff2d55, 0x00c2ff, 0xffd400, 0xa020f0, 0xff7a00];
      const car = new Vehicle('sports', lane.x + (lane.dir ? -lane.dir[1] * 3 : 0), lane.z + (lane.dir ? lane.dir[0] * 3 : 0), lane.heading, pick(cols));
      car.parked = true; car.tag = 'mission'; a.car = car;
      a.text = 'Steal the marked sports car';
      a.blips = () => (a.stage === 'steal' && a.car && !a.car.removed ? [{ x: a.car.x, z: a.car.z, col: '#ff5a4a', r: 7, edge: true }] : a.dest ? [{ x: a.dest.x, z: a.dest.z, col: '#4aff7a', r: 7, edge: true }] : []);
    } else if (m.kind === 'hit') {
      a.stage = 'hunt'; a.text = 'Find and kill the target';
      let node = 0;
      for (let n = 0; n < 60; n++) { node = (Math.random() * 576) | 0; const q = nodePos(node, _n); const d = Math.hypot(q.x - p.cx, q.z - p.cz); if (d > 220 && d < 520) break; }
      const q = nodePos(node, {});
      const t = new Ped(node); t.keep = true; t.maxHp = t.hp = 120; t.place(q.x, q.z, 0);
      G.peds.list.push(t);
      a.target = t;
      a.guards = [];
      for (let i = 0; i < 2; i++) {
        const g = new Ped(node); g.keep = true; g.tough = true; g.armed = true; g.maxHp = g.hp = 110; g.place(q.x + rr(-3, 3), q.z + rr(-3, 3), 0);
        G.peds.list.push(g); a.guards.push(g);
      }
      a.blips = () => (a.target && !a.target.dead ? [{ x: a.target.x, z: a.target.z, col: '#ff3b3b', r: 7, edge: true }] : []);
    }
    G.hud.banner(m.name, 'pass', 1800);
  },

  end(pass, reason) {
    const a = this.active; if (!a) return;
    this.active = null;
    a.start.cool = 100;
    for (const b of this.beams) b.visible = false;
    if (a.car && !a.car.removed && a.car.tag === 'mission') a.car.tag = 'left';
    if (a.target) a.target.keep = false;
    if (a.guards) for (const g of a.guards) g.keep = false;
    if (pass) {
      let reward = a.reward;
      if (a.kind === 'delivery' && a.car) reward += Math.round(a.car.hpFrac * 1000);
      if (a.kind === 'race') reward += Math.round(clamp(a.timer, 0, 60) * 30);
      G.player.addMoney(reward); G.stats.missions++;
      audio.missionPass();
      G.hud.banner('MISSION PASSED', 'pass', 3600);
      G.hud.toast('Reward ' + fmtMoney(reward), 4000);
    } else {
      audio.missionFail();
      G.hud.banner('MISSION FAILED', 'fail', 3200);
      if (reason) G.hud.toast(reason, 4000);
    }
  },

  onKill() {},
  onEnterVehicle(v) {},

  update(dt) {
    const p = G.player;
    for (const m of this.starts) {
      if (m.cool > 0) m.cool -= dt;
      m.beam.visible = !this.active && m.cool <= 0;
      m.beam.userData.ring.rotation.z += dt;
    }
    for (const b of this.beams) if (b.visible) b.userData.ring.rotation.z += dt * 2;
    const a = this.active;
    if (!a) {
      if (p.dead || p.bustedT > 0) return;
      for (const m of this.starts) if (m.cool <= 0 && Math.hypot(p.cx - m.x, p.cz - m.z) < 3.4) { this.start(m); break; }
      return;
    }
    if (p.dead || p.bustedT > 0) { this.end(false, p.dead ? 'You died' : 'You got arrested'); return; }
    a.t += dt;
    if (a.timer !== undefined) a.timer -= dt;
    const v = p.inVehicle;
    if (a.kind === 'race') {
      if (a.stage === 'getcar') {
        a.grace -= dt; a.timer = undefined;
        if (v) { a.stage = 'race'; a.timer = a.limit; a.text = 'Reach the checkpoints'; audio.click(); }
        else if (a.grace <= 0) { this.end(false, 'You took too long'); return; }
        this.beams[0].visible = false; this.beams[1].visible = false;
      } else {
        const c = a.cps[a.idx], n = a.cps[a.idx + 1];
        a.text = `Checkpoint ${a.idx + 1} / ${a.cps.length}`;
        setBeam(this.beams[0], c.x, 0, c.z, a.idx === a.cps.length - 1 ? 0x4aff7a : 0xffd23a, 1.6);
        if (n) setBeam(this.beams[1], n.x, 0, n.z, 0xffffff, 0.7); else this.beams[1].visible = false;
        if (Math.hypot(p.cx - c.x, p.cz - c.z) < 12) {
          a.idx++; a.timer += 4.5; audio.pickup();
          if (a.idx >= a.cps.length) { this.end(true); return; }
        }
        if (a.timer <= 0) { this.end(false, 'Out of time'); return; }
      }
    } else if (a.kind === 'delivery') {
      if (a.stage === 'steal') {
        if (a.car.removed || a.car.exploded) { this.end(false, 'The car was destroyed'); return; }
        setBeam(this.beams[2], a.car.x, 0, a.car.z, 0xff5a4a, 0.8);
        if (v === a.car) {
          a.stage = 'deliver';
          const [ci, cj] = nearestInter(a.car.x, a.car.z);
          let bi = ci, bj = cj;
          for (let n = 0; n < 40; n++) { bi = (Math.random() * (GRID + 1)) | 0; bj = (Math.random() * (GRID + 1)) | 0; const d = Math.hypot(roadCenter(bi) - a.car.x, roadCenter(bj) - a.car.z); if (d > 420 && d < 800) break; }
          a.dest = { x: roadCenter(bi), z: roadCenter(bj) };
          const d = Math.hypot(a.dest.x - a.car.x, a.dest.z - a.car.z);
          a.timer = d / 11 + 40;
          a.text = 'Deliver the car to the drop-off';
          G.police.addHeat(1.3);
          G.hud.toast('The owner called the cops!');
          this.beams[2].visible = false;
        }
      } else {
        if (a.car.removed || a.car.exploded) { this.end(false, 'The car was destroyed'); return; }
        a.text = v === a.car ? 'Deliver the car to the drop-off' : 'Get back in the car';
        setBeam(this.beams[0], a.dest.x, 0, a.dest.z, 0x4aff7a, 1.5);
        if (v !== a.car) setBeam(this.beams[2], a.car.x, 0, a.car.z, 0xff5a4a, 0.8); else this.beams[2].visible = false;
        if (v === a.car && Math.hypot(a.car.x - a.dest.x, a.car.z - a.dest.z) < 8) { this.end(true); return; }
        if (a.timer <= 0) { this.end(false, 'Out of time'); return; }
      }
    } else if (a.kind === 'hit') {
      const t = a.target;
      if (t.removed) { this.end(false, 'The target got away'); return; }
      if (t.dead) { this.end(true); return; }
      setBeam(this.beams[2], t.x, 0, t.z, 0xff3b3b, 0.8);
      const d = Math.hypot(p.cx - t.x, p.cz - t.z);
      for (const g of a.guards) if (!g.dead && d < 40 && g.state !== 'fight') { g.state = 'fight'; g.timer = 40; }
      if (d < 45 && t.state !== 'flee') t.scare(p.cx, p.cz, false);
      a.text = d < 60 ? 'The target is nearby!' : 'Find and kill the target';
    }
  },
};
G.missions = missions;
