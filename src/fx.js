// Visual effects: pooled GPU point-sprite particles (normal + additive), tracers, decals, skid marks, flash light.
import * as THREE from 'three';
import { G } from './state.js';
import { rr, TAU, clamp } from './util.js';
import { softCircleTexture } from './textures.js';

class Pool {
  constructor(N, additive, scene) {
    this.N = N; this.n = 0; this.additive = additive;
    this.pos = new Float32Array(N * 3); this.col = new Float32Array(N * 4); this.size = new Float32Array(N);
    this.vel = new Float32Array(N * 3); this.age = new Float32Array(N); this.life = new Float32Array(N);
    this.s0 = new Float32Array(N); this.s1 = new Float32Array(N); this.c0 = new Float32Array(N * 4); this.c1 = new Float32Array(N * 4);
    this.drag = new Float32Array(N); this.grav = new Float32Array(N);
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos); g.setAttribute('color', this.aCol); g.setAttribute('size', this.aSize);
    g.setDrawRange(0, 0);
    this.uniforms = { uScale: { value: 500 }, uLight: { value: 1 } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      vertexShader: `attribute float size; attribute vec4 color; uniform float uScale; uniform float uLight; varying vec4 vC;
        void main(){ vC = color; ${additive ? '' : 'vC.rgb *= uLight;'} vec4 mv = modelViewMatrix * vec4(position,1.); gl_Position = projectionMatrix * mv;
          gl_PointSize = min(size * uScale / max(-mv.z, 0.5), 700.); }`,
      fragmentShader: `varying vec4 vC; void main(){ float d = length(gl_PointCoord - 0.5) * 2.; float a = smoothstep(1., 0.25, d);
        gl_FragColor = vec4(vC.rgb, vC.a * a); if (gl_FragColor.a < 0.004) discard; }`,
    });
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false; this.points.renderOrder = additive ? 8 : 7;
    scene.add(this.points);
  }
  add(x, y, z, vx, vy, vz, life, s0, s1, c0, c1, drag, grav) {
    if (this.n >= this.N) return;
    const i = this.n++;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.age[i] = 0; this.life[i] = life; this.s0[i] = s0; this.s1[i] = s1; this.drag[i] = drag; this.grav[i] = grav;
    for (let k = 0; k < 4; k++) { this.c0[i * 4 + k] = c0[k]; this.c1[i * 4 + k] = c1[k]; this.col[i * 4 + k] = c0[k]; }
    this.size[i] = s0;
  }
  update(dt) {
    const { pos, vel, age, life, s0, s1, c0, c1, col, size, drag, grav } = this;
    for (let i = 0; i < this.n;) {
      age[i] += dt;
      if (age[i] >= life[i]) { // swap-remove
        const l = --this.n;
        if (i !== l) {
          for (let k = 0; k < 3; k++) { pos[i * 3 + k] = pos[l * 3 + k]; vel[i * 3 + k] = vel[l * 3 + k]; }
          for (let k = 0; k < 4; k++) { c0[i * 4 + k] = c0[l * 4 + k]; c1[i * 4 + k] = c1[l * 4 + k]; col[i * 4 + k] = col[l * 4 + k]; }
          age[i] = age[l]; life[i] = life[l]; s0[i] = s0[l]; s1[i] = s1[l]; drag[i] = drag[l]; grav[i] = grav[l]; size[i] = size[l];
        }
        continue;
      }
      const t = age[i] / life[i], dr = Math.exp(-drag[i] * dt);
      vel[i * 3] *= dr; vel[i * 3 + 1] = vel[i * 3 + 1] * dr - grav[i] * dt; vel[i * 3 + 2] *= dr;
      pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      if (pos[i * 3 + 1] < 0.05 && grav[i] > 0) { pos[i * 3 + 1] = 0.05; vel[i * 3 + 1] *= -0.3; vel[i * 3] *= 0.6; vel[i * 3 + 2] *= 0.6; }
      size[i] = s0[i] + (s1[i] - s0[i]) * t;
      for (let k = 0; k < 4; k++) col[i * 4 + k] = c0[i * 4 + k] + (c1[i * 4 + k] - c0[i * 4 + k]) * t;
      i++;
    }
    this.aPos.needsUpdate = this.aCol.needsUpdate = this.aSize.needsUpdate = true;
    this.points.geometry.setDrawRange(0, this.n);
  }
}

const TRACERS = 40, DECALS = 48, SKIDS = 400;
let normal, add, scene, camera, tracerGeo, tracerLines, flash, decalMesh, skidMesh;
const tracers = [];
let decalIdx = 0, skidIdx = 0, flashT = 0;
const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
const cached = { c: [0, 0, 0, 0], d: [0, 0, 0, 0] };
const v4 = (r, g, b, a) => [r, g, b, a];

export const fx = {
  init(sc, cam, renderer) {
    scene = sc; camera = cam;
    normal = new Pool(2600, false, sc); add = new Pool(2000, true, sc);
    this.resize(renderer);
    // tracers
    tracerGeo = new THREE.BufferGeometry();
    tracerGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(TRACERS * 6), 3).setUsage(THREE.DynamicDrawUsage));
    tracerGeo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(TRACERS * 6), 3).setUsage(THREE.DynamicDrawUsage));
    tracerLines = new THREE.LineSegments(tracerGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    tracerLines.frustumCulled = false; tracerLines.renderOrder = 9; sc.add(tracerLines);
    for (let i = 0; i < TRACERS; i++) tracers.push({ on: false, sx: 0, sy: 0, sz: 0, dx: 0, dy: 0, dz: 0, dist: 0, t: 0, len: 5, speed: 260, r: 1, g: 0.85, b: 0.4 });
    // light flash
    flash = new THREE.PointLight(0xffaa55, 0, 60, 1.6); flash.position.set(0, 5, 0); sc.add(flash);
    // decals (blood, scorch)
    const tex = softCircleTexture();
    decalMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, vertexColors: false, opacity: 0.85 }), DECALS);
    decalMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(DECALS * 3), 3);
    decalMesh.frustumCulled = false; decalMesh.renderOrder = 4;
    m4.makeScale(0, 0, 0); for (let i = 0; i < DECALS; i++) decalMesh.setMatrixAt(i, m4);
    sc.add(decalMesh);
    // skid marks
    skidMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.45, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }), SKIDS);
    for (let i = 0; i < SKIDS; i++) skidMesh.setMatrixAt(i, m4);
    skidMesh.frustumCulled = false; skidMesh.renderOrder = 4;
    sc.add(skidMesh);
  },
  resize(renderer) {
    if (!normal) return;
    const h = renderer.domElement.height, fov = camera.fov * Math.PI / 180;
    const s = h / (2 * Math.tan(fov / 2));
    normal.uniforms.uScale.value = s; add.uniforms.uScale.value = s;
  },
  setLight(l) { normal.uniforms.uLight.value = l; },

  update(dt) {
    normal.update(dt); add.update(dt);
    // tracers
    const p = tracerGeo.attributes.position.array, c = tracerGeo.attributes.color.array;
    for (let i = 0; i < TRACERS; i++) {
      const t = tracers[i];
      if (t.on) {
        t.t += dt;
        const head = Math.min(t.t * t.speed, t.dist), tail = Math.max(head - t.len, 0);
        if (tail >= t.dist) t.on = false;
        p[i * 6] = t.sx + t.dx * tail; p[i * 6 + 1] = t.sy + t.dy * tail; p[i * 6 + 2] = t.sz + t.dz * tail;
        p[i * 6 + 3] = t.sx + t.dx * head; p[i * 6 + 4] = t.sy + t.dy * head; p[i * 6 + 5] = t.sz + t.dz * head;
        c[i * 6] = t.r * 0.3; c[i * 6 + 1] = t.g * 0.3; c[i * 6 + 2] = t.b * 0.3; c[i * 6 + 3] = t.r; c[i * 6 + 4] = t.g; c[i * 6 + 5] = t.b;
      } else { for (let k = 0; k < 6; k++) { p[i * 6 + k] = 0; c[i * 6 + k] = 0; } }
    }
    tracerGeo.attributes.position.needsUpdate = true; tracerGeo.attributes.color.needsUpdate = true;
    if (flashT > 0) { flashT -= dt; flash.intensity = Math.max(0, flashT) * flash.userData.k; if (flashT <= 0) flash.intensity = 0; }
    const shake = G.shake || 0; G.shake = Math.max(0, shake - dt * 2.2);
  },

  // ---- particle helpers -------------------------------------------------------------
  smoke(x, y, z, s = 1, dark = 0.4) {
    const g = dark;
    normal.add(x + rr(-0.15, 0.15), y, z + rr(-0.15, 0.15), rr(-0.4, 0.4), rr(1.2, 2.6), rr(-0.4, 0.4), rr(1.6, 3), 0.5 * s, 2.8 * s, v4(g, g, g, 0.5), v4(g * 0.8, g * 0.8, g * 0.8, 0), 0.6, -0.05);
  },
  blackSmoke(x, y, z, s = 1) {
    normal.add(x + rr(-0.3, 0.3), y, z + rr(-0.3, 0.3), rr(-0.6, 0.6), rr(2.5, 4.5), rr(-0.6, 0.6), rr(2.2, 4), 0.7 * s, 4 * s, v4(0.08, 0.08, 0.09, 0.7), v4(0.15, 0.15, 0.16, 0), 0.5, -0.1);
  },
  fire(x, y, z, s = 1) {
    add.add(x + rr(-0.3, 0.3) * s, y, z + rr(-0.3, 0.3) * s, rr(-0.5, 0.5), rr(2, 4.5), rr(-0.5, 0.5), rr(0.35, 0.8), 1.1 * s, 0.25 * s, v4(1, 0.6, 0.15, 0.9), v4(0.9, 0.1, 0.0, 0), 0.4, -0.5);
  },
  spark(x, y, z, nx, ny, nz, n = 6, sp = 5) {
    for (let i = 0; i < n; i++) add.add(x, y, z, nx * sp + rr(-3, 3), ny * sp + rr(0, 4), nz * sp + rr(-3, 3), rr(0.15, 0.4), 0.14, 0.03, v4(1, 0.85, 0.4, 1), v4(1, 0.4, 0.1, 0), 1, 14);
  },
  blood(x, y, z, dx, dz, n = 8) {
    for (let i = 0; i < n; i++) normal.add(x, y, z, dx * rr(1, 4) + rr(-1.5, 1.5), rr(0.5, 3.5), dz * rr(1, 4) + rr(-1.5, 1.5), rr(0.4, 0.9), 0.14, 0.2, v4(0.55, 0.02, 0.02, 0.95), v4(0.3, 0.0, 0.0, 0), 0.6, 12);
  },
  dust(x, y, z, n = 6, sp = 2, s = 1) {
    for (let i = 0; i < n; i++) normal.add(x + rr(-0.4, 0.4), y, z + rr(-0.4, 0.4), rr(-sp, sp), rr(0.2, 1.2), rr(-sp, sp), rr(0.5, 1.2), 0.5 * s, 2.2 * s, v4(0.62, 0.58, 0.5, 0.4), v4(0.62, 0.58, 0.5, 0), 1.5, -0.2);
  },
  debris(x, y, z, n = 10, sp = 8, col = [0.2, 0.2, 0.2]) {
    for (let i = 0; i < n; i++) normal.add(x, y, z, rr(-sp, sp), rr(sp * 0.4, sp * 1.2), rr(-sp, sp), rr(0.8, 1.8), 0.22, 0.18, v4(col[0], col[1], col[2], 1), v4(col[0], col[1], col[2], 0.0), 0.2, 16);
  },
  muzzle(x, y, z, dx, dy, dz, s = 1) {
    add.add(x, y, z, dx * 3, dy * 3, dz * 3, 0.06, 0.55 * s, 0.15 * s, v4(1, 0.85, 0.5, 1), v4(1, 0.5, 0.1, 0), 0, 0);
    add.add(x + dx * 0.2, y + dy * 0.2, z + dz * 0.2, 0, 0, 0, 0.05, 0.35 * s, 0.1 * s, v4(1, 1, 0.8, 1), v4(1, 0.6, 0.2, 0), 0, 0);
    this.flashLight(x, y, z, 1.6 * s, 0.07, 0xffb060);
  },
  flashLight(x, y, z, k, t, color = 0xffaa55) {
    flash.position.set(x, y, z); flash.color.setHex(color);
    flash.userData.k = k * 300; flashT = t; flash.intensity = t * flash.userData.k;
  },
  explosion(x, y, z, r = 8) {
    for (let i = 0; i < 22 * (r / 8); i++) {
      const a = rr(0, TAU), e = rr(-0.2, 1), sp = rr(2, 9) * (r / 8);
      add.add(x, y + 0.5, z, Math.cos(a) * sp, e * sp + 2, Math.sin(a) * sp, rr(0.5, 1.1), 2.6 * r / 8, 5 * r / 8, v4(1, 0.72, 0.25, 1), v4(0.9, 0.15, 0.02, 0), 2.2, -1);
    }
    for (let i = 0; i < 14; i++) add.add(x, y + 0.8, z, rr(-2, 2), rr(3, 8), rr(-2, 2), rr(0.8, 1.6), 2.2 * r / 8, 7 * r / 8, v4(1, 0.95, 0.7, 1), v4(1, 0.5, 0.1, 0), 1.5, -2);
    for (let i = 0; i < 26 * (r / 8); i++) {
      const a = rr(0, TAU), sp = rr(1, 6);
      normal.add(x, y + 1, z, Math.cos(a) * sp, rr(2, 9), Math.sin(a) * sp, rr(2, 4.2), 2.5 * r / 8, 9 * r / 8, v4(0.1, 0.1, 0.11, 0.85), v4(0.2, 0.2, 0.22, 0), 1.0, -0.5);
    }
    this.spark(x, y + 0.5, z, 0, 1, 0, 30, 10);
    this.debris(x, y + 0.5, z, 14, 12);
    this.dust(x, 0.3, z, 10, 8, 3);
    this.flashLight(x, y + 4, z, 6, 0.55, 0xff9a40);
    this.decal(x, z, r * 0.9, [0.02, 0.02, 0.02], 0.85);
  },
  tracer(sx, sy, sz, tx, ty, tz, color) {
    let t = tracers.find((k) => !k.on) || tracers[0];
    const dx = tx - sx, dy = ty - sy, dz = tz - sz, d = Math.hypot(dx, dy, dz) || 1;
    t.on = true; t.sx = sx; t.sy = sy; t.sz = sz; t.dx = dx / d; t.dy = dy / d; t.dz = dz / d; t.dist = d; t.t = 0;
    const c = color || [1, 0.85, 0.45]; t.r = c[0]; t.g = c[1]; t.b = c[2];
  },
  decal(x, z, size, col = [0.35, 0.02, 0.02], alpha = 1) {
    const i = decalIdx++ % DECALS;
    q.setFromAxisAngle(up, rr(0, TAU)); pv.set(x, 0.05 + (i % 7) * 0.003, z); sv.set(size, 1, size * rr(0.7, 1));
    m4.compose(pv, q, sv); decalMesh.setMatrixAt(i, m4); decalMesh.instanceMatrix.needsUpdate = true;
    decalMesh.instanceColor.setXYZ(i, col[0] * alpha, col[1] * alpha, col[2] * alpha); decalMesh.instanceColor.needsUpdate = true;
  },
  skid(x, z, heading, len, width) {
    const i = skidIdx++ % SKIDS;
    q.setFromAxisAngle(up, heading); pv.set(x, 0.045, z); sv.set(width, 1, len);
    m4.compose(pv, q, sv); skidMesh.setMatrixAt(i, m4); skidMesh.instanceMatrix.needsUpdate = true;
  },
};
