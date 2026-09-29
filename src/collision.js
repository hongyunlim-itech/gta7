// Static collision world (buildings, trees, poles) on a spatial hash, plus SAT helpers for oriented vehicle boxes,
// ray casts, and the ground height function (sidewalk curbs + stunt ramps).
import { HALF, PITCH, ROAD, CURB } from './config.js';
import { clamp, mod } from './util.js';

const CELL = 25;
const cells = new Map();
let stampCounter = 1;
export const colliders = [];
const tmp = [];

const key = (cx, cz) => (cx + 2000) * 5000 + (cz + 2000);

function insert(c, minX, minZ, maxX, maxZ) {
  const x0 = Math.floor(minX / CELL), x1 = Math.floor(maxX / CELL);
  const z0 = Math.floor(minZ / CELL), z1 = Math.floor(maxZ / CELL);
  for (let cx = x0; cx <= x1; cx++) for (let cz = z0; cz <= z1; cz++) {
    const k = key(cx, cz);
    let arr = cells.get(k);
    if (!arr) { arr = []; cells.set(k, arr); }
    arr.push(c);
  }
  colliders.push(c);
}

export function addBox(minX, minZ, maxX, maxZ, h, tag) {
  const c = { t: 0, minX, maxX, minZ, maxZ, h, tag, stamp: 0 };
  insert(c, minX, minZ, maxX, maxZ);
  return c;
}
export function addCircle(x, z, r, h, tag) {
  const c = { t: 1, x, z, r, h, tag, stamp: 0 };
  insert(c, x - r, z - r, x + r, z + r);
  return c;
}

// Fill tmp with unique colliders overlapping the AABB
function collect(minX, minZ, maxX, maxZ) {
  tmp.length = 0;
  const st = ++stampCounter;
  const x0 = Math.floor(minX / CELL), x1 = Math.floor(maxX / CELL);
  const z0 = Math.floor(minZ / CELL), z1 = Math.floor(maxZ / CELL);
  for (let cx = x0; cx <= x1; cx++) for (let cz = z0; cz <= z1; cz++) {
    const arr = cells.get(key(cx, cz));
    if (!arr) continue;
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i];
      if (c.stamp !== st) { c.stamp = st; tmp.push(c); }
    }
  }
  return tmp;
}

// ---------------------------------------------------------------- ground height
const ramps = [];
export function addRamp(minX, minZ, maxX, maxZ, axis, sign, h) {
  ramps.push({ minX, minZ, maxX, maxZ, axis, sign, h });
}
export function onBlock(x, z) {
  if (Math.abs(x) >= HALF || Math.abs(z) >= HALF) return false;
  const lx = mod(x + HALF, PITCH), lz = mod(z + HALF, PITCH);
  return lx > ROAD / 2 && lx < PITCH - ROAD / 2 && lz > ROAD / 2 && lz < PITCH - ROAD / 2;
}
export function groundHeight(x, z) {
  let h = onBlock(x, z) ? CURB : 0;
  for (let i = 0; i < ramps.length; i++) {
    const r = ramps[i];
    if (x < r.minX || x > r.maxX || z < r.minZ || z > r.maxZ) continue;
    let t;
    if (r.axis === 'x') t = r.sign > 0 ? (x - r.minX) / (r.maxX - r.minX) : (r.maxX - x) / (r.maxX - r.minX);
    else t = r.sign > 0 ? (z - r.minZ) / (r.maxZ - r.minZ) : (r.maxZ - z) / (r.maxZ - r.minZ);
    h = Math.max(h, CURB + r.h * t);
  }
  return h;
}

// ---------------------------------------------------------------- circle (characters)
// Pushes point p={x,z} out of static colliders. Returns true if anything was hit.
export function resolveCircle(p, r) {
  let hit = false;
  for (let it = 0; it < 2; it++) {
    const list = collect(p.x - r, p.z - r, p.x + r, p.z + r);
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (c.t === 0) {
        const cx = clamp(p.x, c.minX, c.maxX), cz = clamp(p.z, c.minZ, c.maxZ);
        const dx = p.x - cx, dz = p.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 < r * r) {
          if (d2 > 1e-8) { const d = Math.sqrt(d2), k = (r - d) / d; p.x += dx * k; p.z += dz * k; }
          else {
            const l = p.x - c.minX, rt = c.maxX - p.x, t = p.z - c.minZ, b = c.maxZ - p.z;
            const m = Math.min(l, rt, t, b);
            if (m === l) p.x = c.minX - r; else if (m === rt) p.x = c.maxX + r;
            else if (m === t) p.z = c.minZ - r; else p.z = c.maxZ + r;
          }
          hit = true;
        }
      } else {
        const dx = p.x - c.x, dz = p.z - c.z, rr = r + c.r;
        const d2 = dx * dx + dz * dz;
        if (d2 < rr * rr) {
          const d = Math.sqrt(d2) || 0.0001, k = (rr - d) / d;
          p.x += dx * k; p.z += dz * k; hit = true;
        }
      }
    }
  }
  return hit;
}

// ---------------------------------------------------------------- oriented box (vehicles)
// o: {x,z,hl,hw,fx,fz} where f=(fx,fz) is forward and right = (-fz, fx)
export function obbCorners(o, out) {
  const rx = -o.fz, rz = o.fx;
  out[0] = o.x + o.fx * o.hl + rx * o.hw; out[1] = o.z + o.fz * o.hl + rz * o.hw;
  out[2] = o.x + o.fx * o.hl - rx * o.hw; out[3] = o.z + o.fz * o.hl - rz * o.hw;
  out[4] = o.x - o.fx * o.hl - rx * o.hw; out[5] = o.z - o.fz * o.hl - rz * o.hw;
  out[6] = o.x - o.fx * o.hl + rx * o.hw; out[7] = o.z - o.fz * o.hl + rz * o.hw;
  return out;
}
const _c = new Float32Array(8);
function deepestCorner(o, nx, nz, res) {
  obbCorners(o, _c);
  let best = Infinity, bi = 0;
  for (let i = 0; i < 4; i++) {
    const d = _c[i * 2] * nx + _c[i * 2 + 1] * nz;
    if (d < best) { best = d; bi = i; }
  }
  res.px = _c[bi * 2]; res.pz = _c[bi * 2 + 1];
}

// Result object reused by callers: {nx,nz,depth,px,pz}; normal points from the obstacle towards the box `o`.
export function obbVsAABB(o, b, res) {
  const rx = -o.fz, rz = o.fx;
  const bcx = (b.minX + b.maxX) / 2, bcz = (b.minZ + b.maxZ) / 2;
  const bhx = (b.maxX - b.minX) / 2, bhz = (b.maxZ - b.minZ) / 2;
  const dx = o.x - bcx, dz = o.z - bcz;
  let best = Infinity, nx = 0, nz = 0;
  // world X
  let ext = Math.abs(o.fx) * o.hl + Math.abs(rx) * o.hw;
  let ov = ext + bhx - Math.abs(dx); if (ov <= 0) return false;
  if (ov < best) { best = ov; nx = dx >= 0 ? 1 : -1; nz = 0; }
  // world Z
  ext = Math.abs(o.fz) * o.hl + Math.abs(rz) * o.hw;
  ov = ext + bhz - Math.abs(dz); if (ov <= 0) return false;
  if (ov < best) { best = ov; nx = 0; nz = dz >= 0 ? 1 : -1; }
  // forward axis
  let sep = dx * o.fx + dz * o.fz;
  ext = bhx * Math.abs(o.fx) + bhz * Math.abs(o.fz);
  ov = o.hl + ext - Math.abs(sep); if (ov <= 0) return false;
  if (ov < best) { best = ov; const s = sep >= 0 ? 1 : -1; nx = o.fx * s; nz = o.fz * s; }
  // right axis
  sep = dx * rx + dz * rz;
  ext = bhx * Math.abs(rx) + bhz * Math.abs(rz);
  ov = o.hw + ext - Math.abs(sep); if (ov <= 0) return false;
  if (ov < best) { best = ov; const s = sep >= 0 ? 1 : -1; nx = rx * s; nz = rz * s; }
  res.nx = nx; res.nz = nz; res.depth = best;
  deepestCorner(o, nx, nz, res);
  return true;
}

export function obbVsCircle(o, c, res) {
  const rx = -o.fz, rz = o.fx;
  const dx = c.x - o.x, dz = c.z - o.z;
  const lf = clamp(dx * o.fx + dz * o.fz, -o.hl, o.hl);
  const lr = clamp(dx * rx + dz * rz, -o.hw, o.hw);
  const px = o.x + o.fx * lf + rx * lr, pz = o.z + o.fz * lf + rz * lr;
  let vx = px - c.x, vz = pz - c.z;
  const d2 = vx * vx + vz * vz;
  if (d2 >= c.r * c.r) return false;
  let d = Math.sqrt(d2);
  if (d < 1e-5) { vx = o.x - c.x; vz = o.z - c.z; d = Math.hypot(vx, vz) || 1; }
  res.nx = vx / d; res.nz = vz / d; res.depth = c.r - d; res.px = px; res.pz = pz;
  return true;
}

// OBB vs OBB (both dynamic). Normal points from b towards a.
export function obbVsOBB(a, b, res) {
  const ax = [a.fx, a.fz, -a.fz, a.fx]; // a.f, a.r
  const bx = [b.fx, b.fz, -b.fz, b.fx];
  const dx = a.x - b.x, dz = a.z - b.z;
  let best = Infinity, nx = 0, nz = 0;
  for (let k = 0; k < 4; k++) {
    const src = k < 2 ? ax : bx;
    const ux = src[(k % 2) * 2], uz = src[(k % 2) * 2 + 1];
    const ra = a.hl * Math.abs(ux * a.fx + uz * a.fz) + a.hw * Math.abs(ux * -a.fz + uz * a.fx);
    const rb = b.hl * Math.abs(ux * b.fx + uz * b.fz) + b.hw * Math.abs(ux * -b.fz + uz * b.fx);
    const sep = dx * ux + dz * uz;
    const ov = ra + rb - Math.abs(sep);
    if (ov <= 0) return false;
    if (ov < best) { best = ov; const s = sep >= 0 ? 1 : -1; nx = ux * s; nz = uz * s; }
  }
  res.nx = nx; res.nz = nz; res.depth = best;
  deepestCorner(a, nx, nz, res);
  return true;
}

// Test an OBB against every static near it. Calls cb(res, collider) for each contact.
const _res = { nx: 0, nz: 0, depth: 0, px: 0, pz: 0 };
export function obbStatics(o, cb) {
  const R = o.hl + o.hw;
  const list = collect(o.x - R, o.z - R, o.x + R, o.z + R);
  for (let i = 0; i < list.length; i++) {
    const c = list[i];
    const ok = c.t === 0 ? obbVsAABB(o, c, _res) : obbVsCircle(o, c, _res);
    if (ok) cb(_res, c);
  }
}

// ---------------------------------------------------------------- ray casting
// 3D ray vs box (y in [0,h]); returns t or -1, writes normal into out
export function rayBox(ox, oy, oz, dx, dy, dz, b, maxT, out) {
  let tmin = 0, tmax = maxT, nx = 0, ny = 0, nz = 0;
  const bounds = [[b.minX, b.maxX, ox, dx, 0], [0, b.h, oy, dy, 1], [b.minZ, b.maxZ, oz, dz, 2]];
  for (let i = 0; i < 3; i++) {
    const [lo, hi, o, d, ax] = bounds[i];
    if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) return -1; continue; }
    let t1 = (lo - o) / d, t2 = (hi - o) / d, s = -1;
    if (t1 > t2) { const t = t1; t1 = t2; t2 = t; s = 1; }
    if (t1 > tmin) { tmin = t1; nx = ny = nz = 0; if (ax === 0) nx = s; else if (ax === 1) ny = s; else nz = s; }
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return -1;
  }
  if (out) { out.nx = nx; out.ny = ny; out.nz = nz; }
  return tmin;
}
export function rayCyl(ox, oy, oz, dx, dy, dz, cx, cz, r, h, maxT, out) {
  const fx = ox - cx, fz = oz - cz;
  const a = dx * dx + dz * dz;
  if (a < 1e-9) return -1;
  const b = 2 * (fx * dx + fz * dz), c = fx * fx + fz * fz - r * r;
  const disc = b * b - 4 * a * c;
  if (disc < 0) return -1;
  const t = (-b - Math.sqrt(disc)) / (2 * a);
  if (t < 0 || t > maxT) return c < 0 ? 0 : -1;
  const y = oy + dy * t;
  if (y < 0 || y > h) return -1;
  if (out) { const px = ox + dx * t - cx, pz = oz + dz * t - cz, l = Math.hypot(px, pz) || 1; out.nx = px / l; out.ny = 0; out.nz = pz / l; }
  return t;
}

const _n = { nx: 0, ny: 0, nz: 0 };
// Nearest static hit along the ray. Returns {t,nx,ny,nz,c} or null. Direction must be normalised.
export function raycastStatics(ox, oy, oz, dx, dy, dz, maxT, boxesOnly = false) {
  const hl = Math.hypot(dx, dz);
  const steps = Math.max(1, Math.ceil((hl * maxT) / (CELL * 0.8)));
  const st = ++stampCounter;
  let bestT = maxT, bestC = null, bn = null;
  let seen = 0;
  for (let s = 0; s <= steps; s++) {
    const t = (s / steps) * maxT;
    const px = ox + dx * t, pz = oz + dz * t;
    const cx = Math.floor(px / CELL), cz = Math.floor(pz / CELL);
    for (let ix = cx - 0; ix <= cx; ix++) {
      const arr = cells.get(key(ix, cz));
      if (!arr) continue;
      for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (c.stamp === st) continue;
        c.stamp = st; seen++;
        if (boxesOnly && c.t === 1) continue;
        const tt = c.t === 0 ? rayBox(ox, oy, oz, dx, dy, dz, c, bestT, _n) : rayCyl(ox, oy, oz, dx, dy, dz, c.x, c.z, c.r, c.h, bestT, _n);
        if (tt >= 0 && tt < bestT) { bestT = tt; bestC = c; bn = { nx: _n.nx, ny: _n.ny, nz: _n.nz }; }
      }
    }
    // also sample neighbouring cells so rays grazing cell borders aren't missed
    const ex = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let e = 0; e < 4; e++) {
      const arr = cells.get(key(cx + ex[e][0], cz + ex[e][1]));
      if (!arr) continue;
      for (let i = 0; i < arr.length; i++) {
        const c = arr[i];
        if (c.stamp === st) continue;
        c.stamp = st;
        if (boxesOnly && c.t === 1) continue;
        const tt = c.t === 0 ? rayBox(ox, oy, oz, dx, dy, dz, c, bestT, _n) : rayCyl(ox, oy, oz, dx, dy, dz, c.x, c.z, c.r, c.h, bestT, _n);
        if (tt >= 0 && tt < bestT) { bestT = tt; bestC = c; bn = { nx: _n.nx, ny: _n.ny, nz: _n.nz }; }
      }
    }
  }
  // ground plane
  if (dy < -1e-6) {
    const tg = (0 - oy) / dy;
    if (tg > 0 && tg < bestT) { return { t: tg, nx: 0, ny: 1, nz: 0, c: null, ground: true }; }
  }
  return bestC ? { t: bestT, nx: bn.nx, ny: bn.ny, nz: bn.nz, c: bestC } : null;
}

export function lineOfSight(ax, ay, az, bx, by, bz) {
  const dx = bx - ax, dy = by - ay, dz = bz - az;
  const len = Math.hypot(dx, dy, dz);
  if (len < 0.01) return true;
  const hit = raycastStatics(ax, ay, az, dx / len, dy / len, dz / len, len - 0.2);
  return !hit || hit.ground;
}

// Ray against an oriented vehicle box. Returns t or -1.
export function rayOBB(ox, oy, oz, dx, dy, dz, o, y0, y1, maxT) {
  const rx = -o.fz, rz = o.fx;
  const lx = (ox - o.x) * rx + (oz - o.z) * rz, lz = (ox - o.x) * o.fx + (oz - o.z) * o.fz;
  const ldx = dx * rx + dz * rz, ldz = dx * o.fx + dz * o.fz;
  return rayBox(lx, oy, lz, ldx, dy, ldz, { minX: -o.hw, maxX: o.hw, minZ: -o.hl, maxZ: o.hl, h: y1 }, maxT, null);
}
