// DOM HUD + canvas minimap / full map.
import { G } from './state.js';
import { audio } from './audio.js';
import { world, streetAt, districtAt } from './world.js';
import { WEAPONS } from './combat.js';
import { LAND, HALF } from './config.js';
import { clamp, lerp, fmtMoney } from './util.js';

const $ = (id) => document.getElementById(id);
let el = {};
let mm, mctx, fm, fctx;
let flashA = 0, lastPlace = '', placeT = 0, placeCheck = 0, radioT = 0, hitT = null, reloadEnd = 0, moneyT = 0, statT = 0, frames = 0, fpsT = 0, fps = 0;

export const hud = {
  fading: false, mapOpen: false,
  init() {
    for (const id of ['hud', 'vignette', 'hpbar', 'arbar', 'clock', 'money', 'moneyfloat', 'stars', 'wname', 'ammo', 'crosshair', 'hitmarker', 'prompt', 'mission', 'mtitle', 'mtext', 'mtimer', 'location', 'speedo', 'kmh', 'vhp', 'radio', 'toasts', 'fade', 'bigmsg', 'fullmap', 'stat', 'game']) el[id] = $(id);
    mm = $('minimap'); mctx = mm.getContext('2d'); fm = $('fmap'); fctx = fm.getContext('2d');
    el.hp = el.hpbar.querySelector('i'); el.ar = el.arbar.querySelector('i'); el.vh = el.vhp.querySelector('i');
    audio.radio.onChange = (i, name) => { el.radio.textContent = i < 0 ? '♪ Radio off' : '♪ ' + name; el.radio.classList.add('show'); radioT = 3; };
  },
  show(on) { el.hud.classList.toggle('hidden', !on); },
  toast(text, ms = 2600) {
    const d = document.createElement('div'); d.className = 'toast'; d.textContent = text; el.toasts.appendChild(d);
    while (el.toasts.children.length > 5) el.toasts.firstChild.remove();
    setTimeout(() => { d.style.opacity = 0; setTimeout(() => d.remove(), 450); }, ms);
  },
  prompt(text) { el.prompt.style.display = text ? 'block' : 'none'; if (text) el.prompt.textContent = text; },
  hitMarker(kill, head) {
    el.hitmarker.className = 'on' + (kill || head ? ' kill' : '');
    clearTimeout(hitT); hitT = setTimeout(() => { el.hitmarker.className = ''; }, 110);
  },
  damageFlash(a) { flashA = Math.max(flashA, a); },
  moneyDelta(n) {
    if (!n) return;
    el.moneyfloat.textContent = (n > 0 ? '+' : '−') + fmtMoney(Math.abs(n)); el.moneyfloat.style.color = n > 0 ? '#b8ffbb' : '#ff9d8f'; el.moneyfloat.style.opacity = 1; moneyT = 1.8;
  },
  weaponChanged() { reloadEnd = 0; },
  reloading(t) { reloadEnd = G.time + t; },
  wasted(on) {
    el.bigmsg.className = on ? 'wasted' : ''; el.bigmsg.textContent = on ? 'WASTED' : '';
    el.game.classList.toggle('wasted', !!on);
  },
  busted(on) {
    el.bigmsg.className = on ? 'busted' : ''; el.bigmsg.textContent = on ? 'BUSTED' : '';
  },
  banner(text, cls, ms = 3200) {
    el.bigmsg.textContent = text; el.bigmsg.className = cls;
    setTimeout(() => { if (el.bigmsg.textContent === text) el.bigmsg.className = ''; }, ms);
  },
  fade(on) { this.fading = on; el.fade.classList.toggle('on', on); },
  toggleMap() { this.mapOpen = !this.mapOpen; el.fullmap.classList.toggle('hidden', !this.mapOpen); },

  update(dt, renderer) {
    const p = G.player, v = p.inVehicle;
    // bars
    el.hp.style.width = clamp(p.hp / p.maxHp, 0, 1) * 100 + '%';
    el.hpbar.classList.toggle('low', p.hp < 30);
    el.ar.style.width = clamp(p.armor, 0, 100) + '%';
    const h = Math.floor(G.hour), m = Math.floor((G.hour - h) * 60);
    el.clock.textContent = String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
    el.money.textContent = fmtMoney(p.money);
    if (moneyT > 0) { moneyT -= dt; if (moneyT <= 0) el.moneyfloat.style.opacity = 0; }
    // wanted
    const pol = G.police, stars = el.stars.children;
    for (let i = 0; i < 5; i++) stars[i].classList.toggle('on', i < pol.wanted);
    el.stars.classList.toggle('flash', pol.wanted > 0 && pol.evading);
    // weapon
    const w = WEAPONS[p.cur], s = p.weapons[p.cur];
    el.wname.textContent = w.name;
    if (w.melee) el.ammo.textContent = '∞';
    else if (w.thrown) el.ammo.textContent = s ? String(s.reserve) : '0';
    else el.ammo.textContent = G.time < reloadEnd ? 'RELOADING' : (s ? `${s.mag} / ${s.reserve}` : '');
    // crosshair
    const showCross = !v && !p.dead && (p.armed() || w.thrown);
    el.crosshair.classList.toggle('off', !showCross);
    el.crosshair.classList.toggle('aim', p.aiming);
    // vehicle
    if (v) {
      el.speedo.style.display = 'block'; el.kmh.textContent = Math.round(v.speed * 3.6);
      el.vh.style.width = v.hpFrac * 100 + '%';
    } else el.speedo.style.display = 'none';
    // damage vignette
    flashA = Math.max(0, flashA - dt * 1.3);
    el.vignette.style.opacity = Math.max(flashA, p.hp < 30 && !p.dead ? 0.35 + Math.sin(G.time * 6) * 0.1 : 0);
    // radio label
    if (radioT > 0) { radioT -= dt; if (radioT <= 0) el.radio.classList.remove('show'); }
    // prompt
    this.updatePrompt();
    // location
    placeCheck -= dt;
    if (placeCheck <= 0) {
      placeCheck = 0.6;
      const x = p.cx, z = p.cz, key = districtAt(x, z) + '|' + streetAt(x, z);
      if (key !== lastPlace) {
        lastPlace = key; const [d, st] = key.split('|');
        el.location.innerHTML = `${d}<small>${st}</small>`; el.location.classList.add('show'); placeT = 4;
      }
    }
    if (placeT > 0) { placeT -= dt; if (placeT <= 0) el.location.classList.remove('show'); }
    // mission
    const mi = G.missions ? G.missions.hud() : null;
    if (mi) {
      el.mission.style.display = 'block'; el.mtitle.textContent = mi.title; el.mtext.textContent = mi.text;
      el.mtimer.textContent = mi.timer !== undefined ? Math.max(0, mi.timer).toFixed(1) : ''; el.mtimer.classList.toggle('low', mi.timer !== undefined && mi.timer < 10);
    } else el.mission.style.display = 'none';
    this.drawMinimap();
    if (this.mapOpen) this.drawFullMap();
    // debug stats
    frames++; fpsT += dt;
    if (fpsT >= 0.5) { fps = frames / fpsT; frames = 0; fpsT = 0; }
    if (G.showStats) {
      el.stat.classList.remove('hidden');
      const r = renderer.info.render;
      el.stat.textContent = `${fps.toFixed(0)} fps  calls ${r.calls}  tris ${(r.triangles / 1000).toFixed(0)}k\nveh ${G.vehicles.length} actors ${G.actors.length} hour ${G.hour.toFixed(1)}\npos ${p.cx.toFixed(0)}, ${p.cz.toFixed(0)}  heat ${pol.heat.toFixed(1)}`;
    } else el.stat.classList.add('hidden');
  },

  updatePrompt() {
    const p = G.player;
    let text = null;
    if (p.dead || p.bustedT > 0) text = null;
    else if (p.inVehicle) text = null;
    else {
      G.nearInteract = null;
      for (const it of G.interactables) {
        if (Math.hypot(it.x - p.x, it.z - p.z) < it.r) { G.nearInteract = it; text = it.text(); break; }
      }
      if (!text) {
        const veh = p.nearestVehicle();
        if (veh) text = veh.driver === 'ai' || veh.driver === 'cop' ? `F — Carjack ${veh.spec.name}` : `F — Enter ${veh.spec.name}`;
      }
    }
    this.prompt(text);
  },

  blips() {
    const out = [];
    const pol = G.police;
    for (const [k, poi, col, ch] of [['hospital', G.world.pois.hospital, '#ff4a4a', '+'], ['police', G.world.pois.police, '#4a86ff', '★'], ['shop', G.world.pois.shop, '#ffb13b', '$']]) out.push({ x: poi.x, z: poi.z, col, ch, r: 7 });
    if (G.missions) for (const b of G.missions.blips()) out.push(b);
    if (pol.wanted > 0) {
      const flash = Math.floor(G.time * 4) % 2 === 0;
      for (const v of G.vehicles) if (v.key === 'police' && !v.exploded && v.siren) out.push({ x: v.x, z: v.z, col: flash ? '#ff3b3b' : '#3b6bff', r: 5 });
      for (const a of G.actors) if (a.kind === 'cop' && !a.dead) out.push({ x: a.x, z: a.z, col: flash ? '#ff5a5a' : '#5a8aff', r: 3.5 });
      for (const h of G.helis) if (!h.dead) out.push({ x: h.x, z: h.z, col: '#fff', ch: '✈', r: 6 });
    }
    return out;
  },

  drawMinimap() {
    const p = G.player, v = p.inVehicle, W = mm.width, R = W / 2;
    const S = lerp(0.8, 0.5, v ? clamp(v.speed / 40, 0, 1) : 0);
    this.mmScale = lerp(this.mmScale || S, S, 0.08);
    const s = this.mmScale;
    const px = p.cx, pz = p.cz, yaw = G.camYaw || 0, th = yaw + Math.PI, O = world.mapOrigin;
    mctx.save();
    mctx.clearRect(0, 0, W, W);
    mctx.beginPath(); mctx.arc(R, R, R, 0, 7); mctx.clip();
    mctx.fillStyle = '#1c3d5a'; mctx.fillRect(0, 0, W, W);
    mctx.translate(R, R); mctx.rotate(th); mctx.scale(s, s); mctx.translate(-(px + O), -(pz + O));
    mctx.drawImage(world.mapCanvas, 0, 0);
    mctx.restore();
    const cosT = Math.cos(th), sinT = Math.sin(th);
    mctx.save();
    mctx.beginPath(); mctx.arc(R, R, R - 1, 0, 7); mctx.clip();
    for (const b of this.blips()) {
      const dx = b.x - px, dz = b.z - pz;
      let sx = (dx * cosT - dz * sinT) * s, sy = (dx * sinT + dz * cosT) * s;
      const d = Math.hypot(sx, sy), lim = R - 10;
      let edge = false;
      if (d > lim) { if (!b.edge && b.r < 6) continue; sx = sx / d * lim; sy = sy / d * lim; edge = true; }
      mctx.fillStyle = b.col; mctx.strokeStyle = 'rgba(0,0,0,.8)'; mctx.lineWidth = 2;
      mctx.beginPath();
      if (edge) { const a = Math.atan2(sy, sx); mctx.save(); mctx.translate(R + sx, R + sy); mctx.rotate(a); mctx.moveTo(6, 0); mctx.lineTo(-5, 5); mctx.lineTo(-5, -5); mctx.closePath(); mctx.stroke(); mctx.fill(); mctx.restore(); }
      else { mctx.arc(R + sx, R + sy, b.r, 0, 7); mctx.stroke(); mctx.fill(); if (b.ch) { mctx.fillStyle = '#fff'; mctx.font = 'bold 11px Arial'; mctx.textAlign = 'center'; mctx.textBaseline = 'middle'; mctx.fillText(b.ch, R + sx, R + sy + 1); } }
    }
    // north marker
    const nx = (0 * cosT - -1 * sinT), ny = (0 * sinT + -1 * cosT);
    mctx.fillStyle = '#fff'; mctx.font = 'bold 14px Arial'; mctx.textAlign = 'center'; mctx.textBaseline = 'middle';
    mctx.strokeStyle = '#000'; mctx.lineWidth = 3; mctx.strokeText('N', R + nx * (R - 12), R + ny * (R - 12)); mctx.fillText('N', R + nx * (R - 12), R + ny * (R - 12));
    // player arrow
    const heading = v ? v.heading : p.heading;
    mctx.translate(R, R); mctx.rotate(yaw - heading);
    mctx.fillStyle = '#fff'; mctx.strokeStyle = '#000'; mctx.lineWidth = 2;
    mctx.beginPath(); mctx.moveTo(0, -9); mctx.lineTo(7, 8); mctx.lineTo(0, 4); mctx.lineTo(-7, 8); mctx.closePath(); mctx.stroke(); mctx.fill();
    mctx.restore();
  },

  drawFullMap() {
    const W = fm.width, k = W / (LAND * 2), O = world.mapOrigin, p = G.player;
    fctx.clearRect(0, 0, W, W);
    fctx.drawImage(world.mapCanvas, 0, 0, W, W);
    for (const b of this.blips()) {
      const x = (b.x + O) * k, y = (b.z + O) * k;
      fctx.fillStyle = b.col; fctx.strokeStyle = '#000'; fctx.lineWidth = 2;
      fctx.beginPath(); fctx.arc(x, y, b.r + 3, 0, 7); fctx.stroke(); fctx.fill();
      if (b.ch) { fctx.fillStyle = '#fff'; fctx.font = 'bold 14px Arial'; fctx.textAlign = 'center'; fctx.textBaseline = 'middle'; fctx.fillText(b.ch, x, y + 1); }
    }
    const heading = p.inVehicle ? p.inVehicle.heading : p.heading;
    fctx.save(); fctx.translate((p.cx + O) * k, (p.cz + O) * k); fctx.rotate(Math.PI - heading);
    fctx.fillStyle = '#fff'; fctx.strokeStyle = '#000'; fctx.lineWidth = 2;
    fctx.beginPath(); fctx.moveTo(0, -12); fctx.lineTo(9, 10); fctx.lineTo(0, 5); fctx.lineTo(-9, 10); fctx.closePath(); fctx.stroke(); fctx.fill();
    fctx.restore();
    fctx.fillStyle = '#fff'; fctx.font = 'bold 16px Arial'; fctx.textAlign = 'left'; fctx.fillText('N ↑', 10, 22);
  },
};
