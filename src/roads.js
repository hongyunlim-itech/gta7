// Road-lattice helpers shared by traffic and police AI.
import { GRID, PITCH, ROAD, LANE, roadCenter } from './config.js';
import { clamp, rr } from './util.js';

export const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]];
export const rightOf = (d) => [-d[1], d[0]];
export const leftOf = (d) => [d[1], -d[0]];
export const dirHeading = (d) => Math.atan2(d[0], d[1]);

export const interX = (i) => roadCenter(i);
export function nearestInter(x, z) {
  return [clamp(Math.round(x / PITCH + GRID / 2), 0, GRID), clamp(Math.round(z / PITCH + GRID / 2), 0, GRID)];
}
export const inGrid = (i, j) => i >= 0 && j >= 0 && i <= GRID && j <= GRID;

// Nearest cardinal direction to a heading
export function cardinal(heading) {
  const fx = Math.sin(heading), fz = Math.cos(heading);
  return Math.abs(fx) > Math.abs(fz) ? [Math.sign(fx), 0] : [0, Math.sign(fz)];
}

// BFS over intersections. Returns list of [i,j] after the start ending at the goal.
const key = (i, j) => i * (GRID + 1) + j;
export function route(i0, j0, i1, j1, maxNodes = 400) {
  if (i0 === i1 && j0 === j1) return [];
  const prev = new Map([[key(i0, j0), null]]);
  const q = [[i0, j0]];
  let head = 0, found = false;
  while (head < q.length && head < maxNodes) {
    const [i, j] = q[head++];
    for (const d of DIRS) {
      const ni = i + d[0], nj = j + d[1];
      if (!inGrid(ni, nj) || prev.has(key(ni, nj))) continue;
      prev.set(key(ni, nj), [i, j]);
      if (ni === i1 && nj === j1) { found = true; head = q.length; break; }
      q.push([ni, nj]);
    }
  }
  if (!found) return [];
  const path = [];
  let cur = [i1, j1];
  while (cur && !(cur[0] === i0 && cur[1] === j0)) { path.push(cur); cur = prev.get(key(cur[0], cur[1])); }
  return path.reverse();
}

// Points describing a lane path through intersection (ni,nj) entering along dIn and leaving along dOut.
// First point is the stop line (flag stop = axis of travel).
export function intersectionPath(ni, nj, dIn, dOut, pts) {
  const cx = roadCenter(ni), cz = roadCenter(nj), rin = rightOf(dIn), rout = rightOf(dOut);
  const axis = dIn[0] !== 0 ? 'x' : 'z';
  const sx = cx - dIn[0] * (ROAD / 2 + 5.5) + rin[0] * LANE, sz = cz - dIn[1] * (ROAD / 2 + 5.5) + rin[1] * LANE;
  pts.push({ x: sx, z: sz, stop: axis });
  const ex = cx - dIn[0] * (ROAD / 2) + rin[0] * LANE, ez = cz - dIn[1] * (ROAD / 2) + rin[1] * LANE;
  const xx = cx + dOut[0] * (ROAD / 2) + rout[0] * LANE, xz = cz + dOut[1] * (ROAD / 2) + rout[1] * LANE;
  const straight = dIn[0] === dOut[0] && dIn[1] === dOut[1];
  pts.push({ x: ex, z: ez, turn: !straight });
  if (!straight) {
    const ax = cx + rin[0] * LANE, az = cz + rin[1] * LANE, bx = cx + rout[0] * LANE, bz = cz + rout[1] * LANE;
    const t = (bx - ax) * dIn[0] + (bz - az) * dIn[1];
    const qx = ax + dIn[0] * t, qz = az + dIn[1] * t;
    for (let k = 1; k < 7; k++) {
      const u = k / 7, a = (1 - u) * (1 - u), b = 2 * u * (1 - u), c = u * u;
      pts.push({ x: a * ex + b * qx + c * xx, z: a * ez + b * qz + c * xz, turn: true });
    }
  } else {
    pts.push({ x: (ex + xx) / 2, z: (ez + xz) / 2 });
  }
  pts.push({ x: xx, z: xz, turn: false });
  return pts;
}

// Random position on a lane segment. Returns {x,z,heading,dir,ni,nj} or null
export function randomLane(px, pz, minD, maxD, tries = 40) {
  for (let n = 0; n < tries; n++) {
    const axisX = Math.random() < 0.5, road = (Math.random() * (GRID + 1)) | 0, seg = (Math.random() * GRID) | 0;
    const dir = Math.random() < 0.5 ? 1 : -1, t = rr(0.3, 0.7);
    const along = roadCenter(seg) + t * PITCH;
    let x, z, d, ni, nj;
    if (axisX) { d = [dir, 0]; x = along; z = roadCenter(road) + (dir > 0 ? LANE : -LANE); ni = dir > 0 ? seg + 1 : seg; nj = road; }
    else { d = [0, dir]; z = along; x = roadCenter(road) + (dir > 0 ? -LANE : LANE); ni = road; nj = dir > 0 ? seg + 1 : seg; }
    const dd = Math.hypot(x - px, z - pz);
    if (dd < minD || dd > maxD) continue;
    return { x, z, heading: dirHeading(d), dir: d, ni, nj };
  }
  return null;
}
