// Tiny geometry accumulator: push boxes / prisms / wedges in world space, then bake into one BufferGeometry.
import * as THREE from 'three';

export class GeoBuilder {
  constructor() { this.pos = []; this.nor = []; this.uv = []; this.col = []; this.idx = []; }

  // Winding is corrected automatically so that the geometric normal agrees with n.
  quad(a, b, c, d, n, uvs, col) {
    const base = this.pos.length / 3;
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const gx = uy * vz - uz * vy, gy = uz * vx - ux * vz, gz = ux * vy - uy * vx;
    const flip = gx * n[0] + gy * n[1] + gz * n[2] < 0;
    const pts = flip ? [a, d, c, b] : [a, b, c, d];
    const order = flip ? [0, 3, 2, 1] : [0, 1, 2, 3];
    for (let i = 0; i < 4; i++) {
      const p = pts[i], k = order[i];
      this.pos.push(p[0], p[1], p[2]);
      this.nor.push(n[0], n[1], n[2]);
      this.col.push(col[0], col[1], col[2]);
      this.uv.push(uvs ? uvs[k * 2] : 0, uvs ? uvs[k * 2 + 1] : 0);
    }
    this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }

  tri(a, b, c, n, col) {
    const base = this.pos.length / 3;
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const flip = (uy * vz - uz * vy) * n[0] + (uz * vx - ux * vz) * n[1] + (ux * vy - uy * vx) * n[2] < 0;
    const pts = flip ? [a, c, b] : [a, b, c];
    for (const p of pts) {
      this.pos.push(p[0], p[1], p[2]);
      this.nor.push(n[0], n[1], n[2]);
      this.col.push(col[0], col[1], col[2]);
      this.uv.push(0, 0);
    }
    this.idx.push(base, base + 1, base + 2);
  }

  // Copy another builder's geometry into this one, optionally lifted by dy
  append(o, dy = 0) {
    const base = this.pos.length / 3;
    for (let k = 0; k < o.pos.length; k += 3) this.pos.push(o.pos[k], o.pos[k + 1] + dy, o.pos[k + 2]);
    for (const v of o.nor) this.nor.push(v);
    for (const v of o.col) this.col.push(v);
    for (const v of o.uv) this.uv.push(v);
    for (const v of o.idx) this.idx.push(v + base);
  }

  // Axis-aligned box. (cx,cz) footprint centre, y0 bottom. tile = metres per texture repeat.
  box(cx, y0, cz, w, h, d, col = [1, 1, 1], o = {}) {
    const tile = o.tile || 12, top = o.top !== false, bottom = !!o.bottom, sides = o.sides !== false;
    const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2, y1 = y0 + h;
    const vMax = h / (o.tileV || tile), uw = w / tile, ud = d / tile;
    const vo = o.vOffset || 0;
    if (sides) {
      this.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], [0, vo, ud, vo, ud, vo + vMax, 0, vo + vMax], col);
      this.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], [0, vo, ud, vo, ud, vo + vMax, 0, vo + vMax], col);
      this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], [0, vo, uw, vo, uw, vo + vMax, 0, vo + vMax], col);
      this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], [0, vo, uw, vo, uw, vo + vMax, 0, vo + vMax], col);
    }
    if (top) {
      const tt = o.topTile || tile;
      this.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0], [0, 0, w / tt, 0, w / tt, d / tt, 0, d / tt], o.topCol || col);
    }
    if (bottom) this.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0], [0, 0, 1, 0, 1, 1, 0, 1], col);
  }

  // Box rotated about Y by angle a
  boxRot(cx, y0, cz, w, h, d, a, col = [1, 1, 1], o = {}) {
    const start = this.pos.length / 3;
    this.box(0, y0, 0, w, h, d, col, o);
    const s = Math.sin(a), c = Math.cos(a);
    for (let i = start; i < this.pos.length / 3; i++) {
      const x = this.pos[i * 3], z = this.pos[i * 3 + 2];
      this.pos[i * 3] = cx + x * c + z * s; this.pos[i * 3 + 2] = cz - x * s + z * c;
      const nx = this.nor[i * 3], nz = this.nor[i * 3 + 2];
      this.nor[i * 3] = nx * c + nz * s; this.nor[i * 3 + 2] = -nx * s + nz * c;
    }
  }

  // Gable roof whose ridge runs along `axis` ('x' or 'z'). Footprint w (x) by d (z).
  gable(cx, y, cz, w, d, rh, axis, col, over = 0.35) {
    const x0 = cx - w / 2 - over, x1 = cx + w / 2 + over, z0 = cz - d / 2 - over, z1 = cz + d / 2 + over, yr = y + rh;
    if (axis === 'x') {
      const nz = [0, d / 2, rh], l = Math.hypot(nz[1], nz[2]);
      this.quad([x0, y, z1], [x1, y, z1], [x1, yr, cz], [x0, yr, cz], [0, nz[1] / l, nz[2] / l], null, col);
      this.quad([x1, y, z0], [x0, y, z0], [x0, yr, cz], [x1, yr, cz], [0, nz[1] / l, -nz[2] / l], null, col);
      this.tri([x1 - over, y, z1 - over], [x1 - over, y, z0 + over], [x1 - over, yr, cz], [1, 0, 0], col);
      this.tri([x0 + over, y, z0 + over], [x0 + over, y, z1 - over], [x0 + over, yr, cz], [-1, 0, 0], col);
    } else {
      const nx = [w / 2, rh], l = Math.hypot(nx[0], nx[1]);
      this.quad([x1, y, z1], [x1, y, z0], [cx, yr, z0], [cx, yr, z1], [nx[1] / l, nx[0] / l, 0], null, col);
      this.quad([x0, y, z0], [x0, y, z1], [cx, yr, z1], [cx, yr, z0], [-nx[1] / l, nx[0] / l, 0], null, col);
      this.tri([x0 + over, y, z1 - over], [x1 - over, y, z1 - over], [cx, yr, z1 - over], [0, 0, 1], col);
      this.tri([x1 - over, y, z0 + over], [x0 + over, y, z0 + over], [cx, yr, z0 + over], [0, 0, -1], col);
    }
  }

  // Ramp wedge rising along axis in direction sign
  wedge(minX, minZ, maxX, maxZ, axis, sign, h, col) {
    const y0 = 0;
    const A = (x, y, z) => [x, y, z];
    if (axis === 'x') {
      const xa = sign > 0 ? minX : maxX, xb = sign > 0 ? maxX : minX;
      const l = Math.hypot(h, maxX - minX), nx = -sign * h / l, ny = (maxX - minX) / l;
      this.quad(A(xa, y0, maxZ), A(xb, h, maxZ), A(xb, h, minZ), A(xa, y0, minZ), [nx, ny, 0], [0, 0, 1, 0, 1, 1, 0, 1], col);
      this.tri(A(xa, y0, maxZ), A(xb, y0, maxZ), A(xb, h, maxZ), [0, 0, 1], col);
      this.tri(A(xb, y0, minZ), A(xa, y0, minZ), A(xb, h, minZ), [0, 0, -1], col);
      this.quad(A(xb, y0, maxZ), A(xb, y0, minZ), A(xb, h, minZ), A(xb, h, maxZ), [sign, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], col);
    } else {
      const za = sign > 0 ? minZ : maxZ, zb = sign > 0 ? maxZ : minZ;
      const l = Math.hypot(h, maxZ - minZ), nz = -sign * h / l, ny = (maxZ - minZ) / l;
      this.quad(A(minX, y0, za), A(maxX, y0, za), A(maxX, h, zb), A(minX, h, zb), [0, ny, nz], [0, 0, 1, 0, 1, 1, 0, 1], col);
      this.tri(A(maxX, y0, za), A(maxX, y0, zb), A(maxX, h, zb), [1, 0, 0], col);
      this.tri(A(minX, y0, zb), A(minX, y0, za), A(minX, h, zb), [-1, 0, 0], col);
      this.quad(A(maxX, y0, zb), A(minX, y0, zb), A(minX, h, zb), A(maxX, h, zb), [0, 0, sign], [0, 0, 1, 0, 1, 1, 0, 1], col);
    }
  }

  // Vertical cylinder (sides + optional cap)
  cylinder(cx, y0, cz, r, h, seg, col, cap = true, r2 = r) {
    const y1 = y0 + h;
    for (let i = 0; i < seg; i++) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      const am = (a0 + a1) / 2;
      const n = [Math.cos(am), 0, Math.sin(am)];
      this.quad([cx + Math.cos(a0) * r, y0, cz + Math.sin(a0) * r], [cx + Math.cos(a1) * r, y0, cz + Math.sin(a1) * r],
        [cx + Math.cos(a1) * r2, y1, cz + Math.sin(a1) * r2], [cx + Math.cos(a0) * r2, y1, cz + Math.sin(a0) * r2], n, null, col);
      if (cap) this.tri([cx, y1, cz], [cx + Math.cos(a0) * r2, y1, cz + Math.sin(a0) * r2], [cx + Math.cos(a1) * r2, y1, cz + Math.sin(a1) * r2], [0, 1, 0], col);
    }
  }

  get empty() { return this.pos.length === 0; }

  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.pos.length / 3 > 65535 ? new THREE.Uint32BufferAttribute(this.idx, 1) : new THREE.Uint16BufferAttribute(this.idx, 1));
    g.computeBoundingSphere();
    return g;
  }

  mesh(material, opts = {}) {
    const m = new THREE.Mesh(this.build(), material);
    m.castShadow = opts.cast !== false;
    m.receiveShadow = opts.receive !== false;
    m.matrixAutoUpdate = false;
    m.updateMatrix();
    return m;
  }
}
