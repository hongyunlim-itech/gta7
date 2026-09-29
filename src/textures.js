// Procedural canvas textures (no asset files).
import * as THREE from 'three';
import { makeRng } from './util.js';

let aniso = 4;
export function setAnisotropy(a) { aniso = a; }

function cv(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function tex(c, { repeat = true, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  return t;
}
function speckle(ctx, w, h, amt, rng, n = 4000) {
  for (let i = 0; i < n; i++) {
    const v = (rng() - 0.5) * amt;
    ctx.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`;
    ctx.fillRect(rng() * w, rng() * h, 1 + rng() * 2, 1 + rng() * 2);
  }
}
const rgb = (r, g, b) => `rgb(${r | 0},${g | 0},${b | 0})`;

// ------------------------------------------------------------------ facades
// Each tile shows 3x3 window cells and represents 12 m x 12 m of wall.
const CELL = 80;
export function facadeTexture(kind, seed = 1) {
  const rng = makeRng(seed * 977 + kind.length * 31);
  const [c, x] = cv(CELL * 3, CELL * 3);
  const [ce, xe] = cv(CELL * 3, CELL * 3);
  xe.fillStyle = '#000'; xe.fillRect(0, 0, c.width, c.height);
  const litColors = ['#ffe3a0', '#ffd27a', '#fff2cf', '#cfe6ff', '#ffc78a'];
  const lit = (px, py, pw, ph, p = 0.55) => {
    if (rng() < p) { xe.fillStyle = litColors[(rng() * litColors.length) | 0]; xe.fillRect(px, py, pw, ph); }
  };
  if (kind === 'glass') {
    const g = x.createLinearGradient(0, 0, 0, c.height);
    g.addColorStop(0, '#41566b'); g.addColorStop(1, '#2d3f52');
    x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const t = rng();
      const gg = x.createLinearGradient(0, j * CELL, 0, j * CELL + CELL);
      gg.addColorStop(0, rgb(70 + t * 40, 120 + t * 50, 160 + t * 50)); gg.addColorStop(1, rgb(40 + t * 30, 80 + t * 40, 120 + t * 40));
      x.fillStyle = gg; x.fillRect(i * CELL + 4, j * CELL + 5, CELL - 8, CELL - 10);
      x.fillStyle = 'rgba(255,255,255,0.10)'; x.beginPath();
      x.moveTo(i * CELL + 4, j * CELL + 5); x.lineTo(i * CELL + 40, j * CELL + 5); x.lineTo(i * CELL + 4, j * CELL + 45); x.fill();
      lit(i * CELL + 4, j * CELL + 5, CELL - 8, CELL - 10, 0.5);
    }
  } else if (kind === 'office') {
    x.fillStyle = rgb(196, 190, 178); x.fillRect(0, 0, c.width, c.height);
    speckle(x, c.width, c.height, 0.12, rng, 3000);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      x.fillStyle = '#2b3846'; x.fillRect(i * CELL + 6, j * CELL + 14, CELL - 12, 44);
      x.fillStyle = 'rgba(140,180,210,0.35)'; x.fillRect(i * CELL + 6, j * CELL + 14, CELL - 12, 14);
      x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(i * CELL, j * CELL + 60, CELL, 3);
      lit(i * CELL + 6, j * CELL + 14, CELL - 12, 44, 0.5);
    }
  } else if (kind === 'brick') {
    x.fillStyle = rgb(140, 78, 62); x.fillRect(0, 0, c.width, c.height);
    for (let r = 0; r < 30; r++) for (let b = 0; b < 8; b++) {
      const v = rng() * 30 - 15;
      x.fillStyle = rgb(146 + v, 82 + v * 0.6, 64 + v * 0.5);
      x.fillRect(b * 32 + (r % 2 ? 16 : 0) - 16, r * 8, 30, 6);
    }
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const px = i * CELL + 18, py = j * CELL + 12;
      x.fillStyle = '#e9e4d6'; x.fillRect(px - 3, py - 3, 50, 62);
      x.fillStyle = '#24303c'; x.fillRect(px, py, 44, 56);
      x.fillStyle = '#e9e4d6'; x.fillRect(px + 21, py, 2, 56); x.fillRect(px, py + 26, 44, 2);
      lit(px, py, 44, 56, 0.5);
    }
  } else if (kind === 'apartment') {
    const tint = [[226, 210, 182], [206, 218, 224], [230, 196, 176], [214, 224, 200]][(rng() * 4) | 0];
    x.fillStyle = rgb(...tint); x.fillRect(0, 0, c.width, c.height);
    speckle(x, c.width, c.height, 0.14, rng, 3500);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const px = i * CELL + 20, py = j * CELL + 10;
      x.fillStyle = '#3a4756'; x.fillRect(px, py, 40, 46);
      x.fillStyle = 'rgba(255,255,255,0.18)'; x.fillRect(px, py, 40, 12);
      x.fillStyle = '#9b7b5c'; x.fillRect(px - 5, py + 46, 50, 5);       // balcony
      x.fillStyle = 'rgba(0,0,0,0.18)'; x.fillRect(px - 5, py + 51, 50, 3);
      lit(px, py, 40, 46, 0.55);
    }
  } else if (kind === 'dark') {
    x.fillStyle = rgb(92, 98, 110); x.fillRect(0, 0, c.width, c.height);
    speckle(x, c.width, c.height, 0.1, rng, 2500);
    for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) {
      const px = i * (CELL / 2) + 8, py = j * CELL + 8;
      x.fillStyle = '#1b2530'; x.fillRect(px, py, 24, 62);
      x.fillStyle = 'rgba(120,160,200,0.25)'; x.fillRect(px, py, 24, 16);
      lit(px, py, 24, 62, 0.5);
    }
  } else { // 'house' stucco
    const tint = [[240, 236, 226], [232, 226, 206], [226, 236, 240], [244, 226, 214]][(rng() * 4) | 0];
    x.fillStyle = rgb(...tint); x.fillRect(0, 0, c.width, c.height);
    speckle(x, c.width, c.height, 0.16, rng, 4000);
    for (let i = 0; i < 3; i++) {
      const px = i * CELL + 16;
      x.fillStyle = '#efe9dc'; x.fillRect(px - 3, 17, 54, 52);
      x.fillStyle = '#2e3c4a'; x.fillRect(px, 20, 48, 46);
      x.fillStyle = '#efe9dc'; x.fillRect(px + 23, 20, 2, 46);
      lit(px, 20, 48, 46, 0.4);
      // lower row
      x.fillStyle = '#efe9dc'; x.fillRect(px - 3, 137, 54, 52);
      x.fillStyle = '#2e3c4a'; x.fillRect(px, 140, 48, 46);
      lit(px, 140, 48, 46, 0.4);
    }
    x.fillStyle = '#6b4a34'; x.fillRect(CELL * 1 + 20, 2 * CELL + 10, 40, 70); // door row
    x.fillStyle = '#d9b070'; x.fillRect(CELL * 1 + 52, 2 * CELL + 46, 4, 4);
  }
  return { map: tex(c), emissive: tex(ce) };
}

export function concreteTexture() {
  const rng = makeRng(7);
  const [c, x] = cv(256, 256);
  x.fillStyle = rgb(150, 148, 142); x.fillRect(0, 0, 256, 256);
  speckle(x, 256, 256, 0.18, rng, 4000);
  x.strokeStyle = 'rgba(0,0,0,0.28)'; x.lineWidth = 2;
  x.strokeRect(1, 1, 254, 254); x.beginPath(); x.moveTo(128, 0); x.lineTo(128, 256); x.moveTo(0, 128); x.lineTo(256, 128); x.stroke();
  return tex(c);
}
export function grassTexture() {
  const rng = makeRng(11);
  const [c, x] = cv(256, 256);
  x.fillStyle = rgb(74, 122, 58); x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 3500; i++) {
    const v = (rng() - 0.5) * 40;
    x.fillStyle = rgb(74 + v, 122 + v * 1.2, 58 + v * 0.5);
    x.fillRect(rng() * 256, rng() * 256, 2, 4);
  }
  return tex(c);
}
export function sandTexture() {
  const rng = makeRng(13);
  const [c, x] = cv(256, 256);
  x.fillStyle = rgb(214, 196, 150); x.fillRect(0, 0, 256, 256);
  speckle(x, 256, 256, 0.22, rng, 5000);
  return tex(c);
}
export function roofTexture() {
  const rng = makeRng(17);
  const [c, x] = cv(128, 128);
  x.fillStyle = rgb(88, 90, 94); x.fillRect(0, 0, 128, 128);
  speckle(x, 128, 128, 0.25, rng, 1500);
  x.strokeStyle = 'rgba(0,0,0,0.25)'; x.strokeRect(0, 0, 128, 128);
  return tex(c);
}
export function waterTexture() {
  const rng = makeRng(19);
  const [c, x] = cv(256, 256);
  x.fillStyle = rgb(30, 92, 140); x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 260; i++) {
    x.strokeStyle = `rgba(255,255,255,${0.03 + rng() * 0.07})`; x.lineWidth = 1 + rng() * 2;
    const px = rng() * 256, py = rng() * 256, l = 8 + rng() * 26;
    x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + l / 2, py - 3, px + l, py); x.stroke();
  }
  return tex(c);
}

// Road: 20 m wide (u) by 10 m repeat (v). Double-yellow centre, white parking-lane edges, tyre wear.
export function roadTexture() {
  const rng = makeRng(23);
  const [c, x] = cv(512, 256);
  x.fillStyle = rgb(52, 54, 59); x.fillRect(0, 0, 512, 256);
  speckle(x, 512, 256, 0.16, rng, 9000);
  x.fillStyle = 'rgba(0,0,0,0.18)';
  x.fillRect(256 - 128 - 30, 0, 60, 256); x.fillRect(256 + 128 - 30, 0, 60, 256);
  x.strokeStyle = 'rgba(0,0,0,0.35)'; x.lineWidth = 1;
  for (let i = 0; i < 6; i++) { x.beginPath(); let px = rng() * 512, py = rng() * 256; x.moveTo(px, py); for (let k = 0; k < 5; k++) { px += (rng() - 0.5) * 30; py += (rng() - 0.5) * 30; x.lineTo(px, py); } x.stroke(); }
  x.fillStyle = '#d8b62b';
  x.fillRect(256 - 8, 0, 4, 256); x.fillRect(256 + 4, 0, 4, 256);
  x.fillStyle = 'rgba(225,225,225,0.9)';
  x.fillRect(256 - 154 - 2, 0, 5, 256); x.fillRect(256 + 154 - 2, 0, 5, 256);
  return tex(c);
}
export function crosswalkTexture() {
  const [c, x] = cv(512, 128);
  x.clearRect(0, 0, 512, 128);
  x.fillStyle = 'rgba(232,232,232,0.92)';
  for (let i = 0; i < 16; i++) x.fillRect(i * 32 + 6, 0, 18, 128);
  return tex(c, { repeat: false });
}
export function asphaltTexture() {
  const rng = makeRng(29);
  const [c, x] = cv(128, 128);
  x.fillStyle = rgb(52, 54, 59); x.fillRect(0, 0, 128, 128);
  speckle(x, 128, 128, 0.18, rng, 2500);
  return tex(c);
}

// ------------------------------------------------------------------ sprites
export function softCircleTexture() {
  const [c, x] = cv(64, 64);
  const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.4, 'rgba(255,255,255,0.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 64, 64);
  return tex(c, { repeat: false });
}
export function headlightTexture() { // light pool on the ground, elongated along v
  const [c, x] = cv(64, 128);
  const g = x.createLinearGradient(0, 128, 0, 0);
  g.addColorStop(0, 'rgba(255,240,200,0.55)'); g.addColorStop(1, 'rgba(255,240,200,0)');
  x.fillStyle = g; x.beginPath(); x.moveTo(22, 128); x.lineTo(42, 128); x.lineTo(64, 0); x.lineTo(0, 0); x.closePath(); x.fill();
  return tex(c, { repeat: false });
}
export function cloudTexture(seed) {
  const rng = makeRng(seed);
  const [c, x] = cv(256, 128);
  for (let i = 0; i < 26; i++) {
    const px = 40 + rng() * 176, py = 50 + rng() * 40, r = 16 + rng() * 26;
    const g = x.createRadialGradient(px, py, 0, px, py, r);
    g.addColorStop(0, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.beginPath(); x.arc(px, py, r, 0, 7); x.fill();
  }
  return tex(c, { repeat: false });
}
export function particleTexture() { return softCircleTexture(); }

// Billboard advert. Parody brands only.
const ADS = [
  ['BITE BARN', '#e8402c', '#fff2c8', 'BURGERS & SHAKES'],
  ['FIZZ-O', '#1e8a4e', '#f6ffe8', 'TASTE THE BUBBLES'],
  ['NOVA TECH', '#243a8c', '#c8e4ff', 'THE FUTURE, NOW'],
  ['VINE MOTORS', '#111', '#ffcd3a', 'DRIVE YOUR DREAM'],
  ['PALM AIR', '#0aa6b7', '#ffffff', 'FLY THE COAST'],
  ['CLUCK SHACK', '#f2a61b', '#3a1608', 'FRIED. FRESH. FAST.'],
  ['BYTES BANK', '#6a2fa8', '#f2e6ff', 'YOUR MONEY, SAFE'],
  ['SUNNY COLA', '#d63a3a', '#ffffff', 'ICE COLD'],
];
export function adTexture(i) {
  const [name, bg, fg, sub] = ADS[i % ADS.length];
  const [c, x] = cv(512, 256);
  x.fillStyle = bg; x.fillRect(0, 0, 512, 256);
  x.fillStyle = 'rgba(255,255,255,0.08)';
  for (let k = 0; k < 8; k++) x.fillRect(k * 70 - 40, 0, 30, 256);
  x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = 'bold 84px Impact, "Arial Black", sans-serif';
  x.fillText(name, 256, 108);
  x.font = 'bold 30px Arial, sans-serif'; x.fillText(sub, 256, 190);
  x.strokeStyle = fg; x.lineWidth = 8; x.strokeRect(8, 8, 496, 240);
  return tex(c, { repeat: false });
}
export const AD_COUNT = ADS.length;

// Sign for special buildings
export function signTexture(text, bg, fg, sub) {
  const [c, x] = cv(512, 128);
  x.fillStyle = bg; x.fillRect(0, 0, 512, 128);
  x.fillStyle = fg; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.font = 'bold 64px Impact, "Arial Black", sans-serif'; x.fillText(text, 256, sub ? 52 : 66);
  if (sub) { x.font = 'bold 26px Arial'; x.fillText(sub, 256, 100); }
  x.strokeStyle = fg; x.lineWidth = 6; x.strokeRect(5, 5, 502, 118);
  return tex(c, { repeat: false });
}
