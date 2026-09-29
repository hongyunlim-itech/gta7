// Procedural city: blocks, buildings, roads, props, sky, lighting, day/night and traffic signals.
import * as THREE from 'three';
import { GRID, ROAD, BLOCK, PITCH, SIDEWALK, HALF, LAND, CURB, roadCenter, blockCenter, STREETS_X, STREETS_Z, SECONDS_PER_HOUR } from './config.js';
import { makeRng, clamp, lerp, TAU } from './util.js';
import { GeoBuilder } from './geo.js';
import * as T from './textures.js';
import { addBox, addCircle, addRamp } from './collision.js';
import { G } from './state.js';

const INNER = BLOCK - SIDEWALK * 2; // 72 m buildable area
const PED_INSET = 2.4;

const LAMP_COLS = { red: [1, 0.1, 0.08], yellow: [1, 0.75, 0.1], green: [0.1, 1, 0.35] };
const SPECIAL = {
  '5,5': 'plaza', '6,3': 'police', '5,8': 'hospital', '2,6': 'shop', '10,10': 'stunt',
  '3,8': 'park', '8,3': 'park', '1,3': 'park', '9,8': 'park',
  '9,0': 'industrial', '10,0': 'industrial', '11,0': 'industrial', '10,1': 'industrial', '11,1': 'industrial', '0,11': 'industrial', '1,11': 'industrial',
};

const DAY = { top: new THREE.Color(0x2f6fc2), hor: new THREE.Color(0xb9d6f0), sun: new THREE.Color(0xfff1d6), hs: new THREE.Color(0xc4dcff), hg: new THREE.Color(0x76705a), fog: new THREE.Color(0xb9d2e8) };
const DUSK = { top: new THREE.Color(0x34457a), hor: new THREE.Color(0xf29a5e), sun: new THREE.Color(0xff9a52), hs: new THREE.Color(0xa993a8), hg: new THREE.Color(0x54443f), fog: new THREE.Color(0xd8a37e) };
const NIGHT = { top: new THREE.Color(0x040814), hor: new THREE.Color(0x141d36), sun: new THREE.Color(0x8fa8dc), hs: new THREE.Color(0x35487a), hg: new THREE.Color(0x12151f), fog: new THREE.Color(0x0a1122) };

const ss = (x, a, b) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

export const world = {
  blocks: [], pois: {}, buildRects: [], parkRects: [],
  sunDir: new THREE.Vector3(0, 1, 0), moonDir: new THREE.Vector3(0, -1, 0),
  sun: null, hemi: null, sky: null, scene: null,
  lightPhase: 0,
  mapCanvas: null,
  headlightTex: null, glowTex: null,
  animated: [],
};

let S = null; // build-time scratch

// -------------------------------------------------------------------- helpers
export function blockIndex(v) { return Math.floor((v + HALF) / PITCH); }
export function blockAt(x, z) {
  const i = blockIndex(x), j = blockIndex(z);
  if (i < 0 || j < 0 || i >= GRID || j >= GRID) return null;
  return world.blocks[i][j];
}
export function inCity(x, z) { return Math.abs(x) < HALF + ROAD / 2 && Math.abs(z) < HALF + ROAD / 2; }

export function streetAt(x, z) {
  const ix = clamp(Math.round(x / PITCH + GRID / 2), 0, GRID), iz = clamp(Math.round(z / PITCH + GRID / 2), 0, GRID);
  const dx = Math.abs(x - roadCenter(ix)), dz = Math.abs(z - roadCenter(iz));
  return dx < dz ? STREETS_X[ix] : STREETS_Z[iz];
}
const DISTRICTS = { downtown: 'Downtown', N: 'Northgate', S: 'Southshore', E: 'Eastside', W: 'Westwood', beach: 'Palm Beach', harbor: 'Harbor District', outerN: 'Vine Heights', outerS: 'Sunset Flats', outerE: 'Bayview', outerW: 'Canyon Park' };
export function districtAt(x, z) {
  if (Math.abs(x) > HALF + 15 || Math.abs(z) > HALF + 15) return DISTRICTS.beach;
  const i = blockIndex(x), j = blockIndex(z);
  const b = world.blocks[clamp(i, 0, GRID - 1)][clamp(j, 0, GRID - 1)];
  if (b.type === 'industrial') return DISTRICTS.harbor;
  const d = Math.max(Math.abs(i - 5.5), Math.abs(j - 5.5));
  if (d <= 1.5) return DISTRICTS.downtown;
  const dx = i - 5.5, dz = j - 5.5;
  const q = Math.abs(dx) > Math.abs(dz) ? (dx > 0 ? 'E' : 'W') : (dz > 0 ? 'S' : 'N');
  return d <= 3.5 ? DISTRICTS[q] : DISTRICTS['outer' + q];
}

// Sidewalk navigation graph for pedestrians -------------------------------------------------------
const SX = [-1, 1, 1, -1], SZ = [-1, -1, 1, 1];
export const nodeId = (i, j, k) => (i * GRID + j) * 4 + k;
export function nodePos(id, out = {}) {
  const k = id % 4, b = (id - k) / 4, j = b % GRID, i = (b - j) / GRID;
  out.x = blockCenter(i) + SX[k] * (BLOCK / 2 - PED_INSET);
  out.z = blockCenter(j) + SZ[k] * (BLOCK / 2 - PED_INSET);
  return out;
}
export function nodeNeighbors(id) {
  const k = id % 4, b = (id - k) / 4, j = b % GRID, i = (b - j) / GRID;
  const n = [nodeId(i, j, (k + 1) % 4), nodeId(i, j, (k + 3) % 4)];
  const add = (ii, jj, kk) => { if (ii >= 0 && jj >= 0 && ii < GRID && jj < GRID) n.push(nodeId(ii, jj, kk)); };
  if (k === 1 || k === 2) add(i + 1, j, k === 1 ? 0 : 3);
  if (k === 0 || k === 3) add(i - 1, j, k === 0 ? 1 : 2);
  if (k === 2 || k === 3) add(i, j + 1, k === 2 ? 1 : 0);
  if (k === 0 || k === 1) add(i, j - 1, k === 0 ? 3 : 2);
  return n;
}
export const NODE_COUNT = GRID * GRID * 4;

// Traffic signal state for a vehicle travelling along the given axis ('x' or 'z')
export function lightState(axis) {
  const t = world.lightPhase; // 0..30
  if (axis === 'x') return t < 12 ? 'green' : t < 14 ? 'yellow' : 'red';
  return t >= 15 && t < 27 ? 'green' : t >= 27 && t < 29 ? 'yellow' : 'red';
}

// -------------------------------------------------------------------- build
export function buildWorld(scene, renderer) {
  world.scene = scene;
  T.setAnisotropy(Math.min(8, renderer.capabilities.getMaxAnisotropy()));
  S = {
    rng: makeRng(20240229),
    facade: {}, facadeMat: {},
    roof: new GeoBuilder(), concrete: new GeoBuilder(), grass: new GeoBuilder(), asphalt: new GeoBuilder(),
    props: new GeoBuilder(), lampPole: new GeoBuilder(), lampBulb: new GeoBuilder(),
    tlPole: new GeoBuilder(), tlLamp: {}, water: new GeoBuilder(),
    trees: [], lamps: [], meshes: [],
  };
  for (const kind of ['glass', 'office', 'brick', 'apartment', 'dark', 'house']) {
    S.facade[kind] = new GeoBuilder();
    const t = T.facadeTexture(kind, kind.length + 3);
    S.facadeMat[kind] = new THREE.MeshStandardMaterial({ map: t.map, emissiveMap: t.emissive, emissive: 0xffffff, emissiveIntensity: 0, vertexColors: true, roughness: kind === 'glass' ? 0.35 : 0.88, metalness: kind === 'glass' ? 0.4 : 0.04 });
  }
  world.glowTex = T.softCircleTexture();
  world.headlightTex = T.headlightTexture();

  setupLights(scene);
  setupSky(scene);
  setupTerrain(scene);
  buildRoads(scene);
  generateBlocks();
  buildProps(scene);
  flushMeshes(scene);
  buildLandmarks(scene);
  buildMinimapBase();
  world.update(0, null, null);
}

function tint(rng, lo = 0.82, hi = 1.0) { const v = lo + rng() * (hi - lo); return [v, v, v * (0.97 + rng() * 0.05)]; }

// -------------------------------------------------------------------- lights / sky
function setupLights(scene) {
  world.hemi = new THREE.HemisphereLight(0xbcd8ff, 0x6b6350, 0.9);
  scene.add(world.hemi);
  const sun = new THREE.DirectionalLight(0xfff2d8, 3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const c = sun.shadow.camera; c.left = -85; c.right = 85; c.top = 85; c.bottom = -85; c.near = 10; c.far = 700;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.35;
  scene.add(sun); scene.add(sun.target);
  world.sun = sun;
}

function setupSky(scene) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      top: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, bottom: { value: new THREE.Color() },
      sunDir: { value: new THREE.Vector3() }, sunColor: { value: new THREE.Color() }, moonDir: { value: new THREE.Vector3() }, starVis: { value: 0 },
    },
    vertexShader: `varying vec3 vDir;
      void main(){ vDir = normalize(position); mat4 v = viewMatrix; v[3] = vec4(0.,0.,0.,1.);
        vec4 p = projectionMatrix * v * vec4(position, 1.); gl_Position = p.xyww; }`,
    fragmentShader: `uniform vec3 top, horizon, bottom, sunDir, sunColor, moonDir; uniform float starVis; varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir); float h = d.y;
        vec3 col = mix(horizon, top, pow(clamp(h, 0., 1.), 0.5));
        col = mix(col, bottom, smoothstep(0.0, -0.25, h));
        float sd = max(dot(d, sunDir), 0.);
        col += sunColor * (pow(sd, 6.) * 0.22 + pow(sd, 96.) * 0.5);
        col += sunColor * smoothstep(0.99935, 0.99975, sd) * 3.0;
        float md = max(dot(d, moonDir), 0.);
        col += vec3(0.82, 0.88, 1.0) * smoothstep(0.99955, 0.9998, md) * 1.6 * starVis;
        col += vec3(0.4, 0.5, 0.9) * pow(md, 48.) * 0.12 * starVis;
        gl_FragColor = vec4(col, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), mat);
  sky.frustumCulled = false; sky.renderOrder = -10;
  scene.add(sky);
  world.sky = sky;

  // stars
  const sp = [], rng = makeRng(5);
  for (let i = 0; i < 1400; i++) {
    const u = rng() * 2 - 1, a = rng() * TAU, r = Math.sqrt(1 - u * u);
    if (u < -0.05) { i--; continue; }
    sp.push(Math.cos(a) * r * 1800, u * 1800, Math.sin(a) * r * 1800);
  }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false }));
  stars.frustumCulled = false; stars.renderOrder = -9;
  scene.add(stars); world.stars = stars;

  // clouds
  world.clouds = [];
  const ctex = [T.cloudTexture(1), T.cloudTexture(2), T.cloudTexture(3)];
  for (let i = 0; i < 26; i++) {
    const m = new THREE.SpriteMaterial({ map: ctex[i % 3], transparent: true, depthWrite: false, fog: false, opacity: 0.8 });
    const s = new THREE.Sprite(m);
    const sc = 260 + rng() * 340;
    s.scale.set(sc * 2, sc, 1);
    s.position.set((rng() - 0.5) * 3600, 260 + rng() * 240, (rng() - 0.5) * 3600);
    s.renderOrder = -8;
    scene.add(s); world.clouds.push(s);
  }
}

function setupTerrain(scene) {
  // water
  const wt = T.waterTexture(); wt.repeat.set(300, 300);
  const water = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshStandardMaterial({ map: wt, roughness: 0.22, metalness: 0.25 }));
  water.rotation.x = -Math.PI / 2; water.position.y = -0.45; water.receiveShadow = true;
  scene.add(water); world.water = water; world.waterTex = wt;
  // land + sloped shore
  const sandT = T.sandTexture(); sandT.repeat.set(LAND / 6, LAND / 6);
  const sandMat = new THREE.MeshStandardMaterial({ map: sandT, roughness: 1 });
  const land = new THREE.Mesh(new THREE.PlaneGeometry(LAND * 2, LAND * 2), sandMat);
  land.rotation.x = -Math.PI / 2; land.position.y = -0.06; land.receiveShadow = true;
  scene.add(land);
  const g = new GeoBuilder();
  const L = LAND, W = 30, yb = -0.06, yl = -3;
  const c = [1, 1, 1], u = [0, 0, 8, 0, 8, 1, 0, 1];
  g.quad([-L, yb, L], [L, yb, L], [L + W, yl, L + W], [-L - W, yl, L + W], [0, 1, 0.4], u, c);
  g.quad([L, yb, -L], [-L, yb, -L], [-L - W, yl, -L - W], [L + W, yl, -L - W], [0, 1, -0.4], u, c);
  g.quad([L, yb, L], [L, yb, -L], [L + W, yl, -L - W], [L + W, yl, L + W], [0.4, 1, 0], u, c);
  g.quad([-L, yb, -L], [-L, yb, L], [-L - W, yl, L + W], [-L - W, yl, -L - W], [-0.4, 1, 0], u, c);
  const shore = g.mesh(new THREE.MeshStandardMaterial({ map: sandT, roughness: 1, vertexColors: true }), { cast: false });
  scene.add(shore);

  // distant hills
  const rng = makeRng(99), hg = new GeoBuilder();
  for (let i = 0; i < 34; i++) {
    const a = (i / 34) * TAU + rng() * 0.2, r = 1500 + rng() * 900;
    const h = 90 + rng() * 300, rad = 160 + rng() * 260;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const seg = 7, col = [0.30 + rng() * 0.08, 0.38 + rng() * 0.08, 0.36 + rng() * 0.06];
    hg.cylinder(x, -4, z, rad, h, seg, col, true, rad * 0.06);
  }
  const hills = hg.mesh(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true }), { cast: false, receive: false });
  scene.add(hills);
}

// -------------------------------------------------------------------- roads
function buildRoads(scene) {
  const roadTex = T.roadTexture();
  const roadMat = new THREE.MeshStandardMaterial({ map: roadTex, roughness: 0.92, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  const g = new GeoBuilder();
  const len = GRID * PITCH + ROAD, y = 0.0, col = [1, 1, 1];
  for (let i = 0; i <= GRID; i++) {
    const c = roadCenter(i), x0 = -len / 2, x1 = len / 2, half = ROAD / 2, L = len / 10;
    // road along x at z=c
    g.quad([x0, y, c + half], [x1, y, c + half], [x1, y, c - half], [x0, y, c - half], [0, 1, 0], [1, 0, 1, L, 0, L, 0, 0], col);
    // road along z at x=c
    g.quad([c - half, y, x0], [c + half, y, x0], [c + half, y, x1], [c - half, y, x1], [0, 1, 0], [0, 0, 1, 0, 1, L, 0, L], col);
  }
  const roads = g.mesh(roadMat, { cast: false }); roads.renderOrder = 1;
  scene.add(roads);

  // intersection patches (plain asphalt, hides the centre lines)
  const asphaltTex = T.asphaltTexture(); asphaltTex.repeat.set(3, 3);
  const iMat = new THREE.MeshStandardMaterial({ map: asphaltTex, roughness: 0.92, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  const ig = new GeoBuilder();
  for (let i = 0; i <= GRID; i++) for (let j = 0; j <= GRID; j++) {
    const cx = roadCenter(i), cz = roadCenter(j), h = ROAD / 2;
    ig.quad([cx - h, 0.01, cz + h], [cx + h, 0.01, cz + h], [cx + h, 0.01, cz - h], [cx - h, 0.01, cz - h], [0, 1, 0], [0, 0, 1, 0, 1, 1, 0, 1], col);
  }
  const inter = ig.mesh(iMat, { cast: false }); inter.renderOrder = 2;
  scene.add(inter);

  // crosswalks
  const cwTex = T.crosswalkTexture();
  const cwMat = new THREE.MeshStandardMaterial({ map: cwTex, transparent: true, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3, depthWrite: false });
  const cg = new GeoBuilder();
  const d0 = ROAD / 2 + 0.4, d1 = d0 + 3.6, hw = ROAD / 2;
  for (let i = 0; i <= GRID; i++) for (let j = 0; j <= GRID; j++) {
    const cx = roadCenter(i), cz = roadCenter(j);
    for (const s of [-1, 1]) {
      // crossing the road along z (stripes across x width), located at z = cz + s*(d0..d1)
      if ((s < 0 ? j > 0 : j < GRID)) {
        const za = cz + s * d0, zb = cz + s * d1;
        cg.quad([cx - hw, 0.02, Math.max(za, zb)], [cx + hw, 0.02, Math.max(za, zb)], [cx + hw, 0.02, Math.min(za, zb)], [cx - hw, 0.02, Math.min(za, zb)], [0, 1, 0], [0, 1, 1, 1, 1, 0, 0, 0], col);
      }
      if ((s < 0 ? i > 0 : i < GRID)) {
        const xa = cx + s * d0, xb = cx + s * d1;
        cg.quad([Math.min(xa, xb), 0.02, cz + hw], [Math.min(xa, xb), 0.02, cz - hw], [Math.max(xa, xb), 0.02, cz - hw], [Math.max(xa, xb), 0.02, cz + hw], [0, 1, 0], [0, 1, 1, 1, 1, 0, 0, 0], col);
      }
    }
  }
  const cw = cg.mesh(cwMat, { cast: false }); cw.renderOrder = 3;
  scene.add(cw);
}

// -------------------------------------------------------------------- block generation
function blockKind(i, j, rng) {
  const s = SPECIAL[i + ',' + j];
  if (s) return s;
  const d = Math.max(Math.abs(i - 5.5), Math.abs(j - 5.5));
  if (d <= 1.5) return 'downtown';
  if (d <= 3.5) return 'mid';
  return rng() < 0.55 ? 'residential' : 'lowrise';
}

function addBuilding(cx, cz, w, d, h, kind, col, o = {}) {
  S.facade[kind].box(cx, 0, cz, w, h, d, col, { tile: 7, tileV: 11, top: false });
  S.roof.box(cx, h, cz, w, 0, d, [1, 1, 1], { sides: false, tile: 8 });
  if (h > 10 && !o.noParapet) {
    const t = 0.5, ph = 0.9;
    S.roof.box(cx, h, cz - d / 2 + t / 2, w, ph, t, [0.85, 0.85, 0.85], { tile: 4, top: true });
    S.roof.box(cx, h, cz + d / 2 - t / 2, w, ph, t, [0.85, 0.85, 0.85], { tile: 4, top: true });
    S.roof.box(cx - w / 2 + t / 2, h, cz, t, ph, d - 2 * t, [0.85, 0.85, 0.85], { tile: 4, top: true });
    S.roof.box(cx + w / 2 - t / 2, h, cz, t, ph, d - 2 * t, [0.85, 0.85, 0.85], { tile: 4, top: true });
  }
  addBox(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, h, 'building');
  world.buildRects.push([cx, cz, w, d, h]);
  if (!o.noClutter && w > 12 && d > 12) roofClutter(cx, cz, w, d, h);
}

function roofClutter(cx, cz, w, d, h) {
  const rng = S.rng, n = h > 40 ? 2 : (rng() * 3) | 0;
  for (let k = 0; k < n; k++) {
    const px = cx + (rng() - 0.5) * (w - 8), pz = cz + (rng() - 0.5) * (d - 8);
    const g = 0.5 + rng() * 0.25;
    if (rng() < 0.3) S.props.cylinder(px, h, pz, 1.6, 3, 8, [0.5, 0.42, 0.34]);
    else S.props.box(px, h, pz, 2 + rng() * 3, 1.2 + rng() * 1.2, 2 + rng() * 2, [g, g, g * 1.05], { tile: 4 });
  }
  if (h > 55 && rng() < 0.7) S.props.box(cx, h, cz, 0.4, 14 + rng() * 10, 0.4, [0.6, 0.6, 0.6]);
}

function addTree(x, z, s = 1, kind = 'oak') { S.trees.push({ x, z, s, kind }); addCircle(x, z, kind === 'palm' ? 0.4 : 0.5, 7, 'tree'); }
function addLamp(x, z, ang) { S.lamps.push({ x, z, ang }); addCircle(x, z, 0.28, 7, 'lamp'); }

function generateBlocks() {
  const rng = S.rng;
  for (let i = 0; i < GRID; i++) {
    world.blocks[i] = [];
    for (let j = 0; j < GRID; j++) {
      const cx = blockCenter(i), cz = blockCenter(j);
      const type = blockKind(i, j, rng);
      world.blocks[i][j] = { i, j, cx, cz, type };
      const isPark = type === 'park';
      const isAsphalt = type === 'industrial' || type === 'stunt';
      // block slab (sidewalk); parks/asphalt lots get their own top texture
      S.concrete.box(cx, 0, cz, BLOCK, CURB, BLOCK, [1, 1, 1], { tile: 4 });
      if (isPark) S.grass.box(cx, CURB, cz, BLOCK - 0.4, 0, BLOCK - 0.4, [1, 1, 1], { sides: false, tile: 6 });
      if (isAsphalt) S.asphalt.box(cx, CURB, cz, BLOCK - SIDEWALK, 0, BLOCK - SIDEWALK, [1, 1, 1], { sides: false, tile: 8 });
      fillBlock(type, cx, cz, i, j, rng);
      // street furniture along the edges
      const off = BLOCK / 2 - 0.8;
      for (let side = 0; side < 4; side++) {
        const ang = side * Math.PI / 2, ax = Math.cos(ang), az = Math.sin(ang); // outward normal
        const tx = -az, tz = ax;
        for (const t of [-22, 0, 22]) addLamp(cx + ax * off + tx * t, cz + az * off + tz * t, ang);
        if (type !== 'industrial' && type !== 'stunt') {
          const palmy = (i === 0 && side === 2) || (i === GRID - 1 && side === 0) || (j === 0 && side === 3) || (j === GRID - 1 && side === 1);
          for (const t of [-11, 11, -33, 33]) {
            if (!palmy && Math.abs(t) > 20) continue;
            addTree(cx + ax * off + tx * t, cz + az * off + tz * t, 0.85 + rng() * 0.4, palmy ? 'palm' : 'oak');
          }
        }
      }
    }
  }
  world.pois.police = { x: blockCenter(6), z: blockCenter(3) - 33 };
  world.pois.hospital = { x: blockCenter(5), z: blockCenter(8) - 33 };
  world.pois.shop = { x: blockCenter(2), z: blockCenter(6) - 30 };
  world.pois.stunt = { x: blockCenter(10), z: blockCenter(10) };
}

function fillBlock(type, cx, cz, i, j, rng) {
  const H = INNER / 2;
  if (type === 'downtown') {
    const kinds = ['glass', 'glass', 'dark', 'office'];
    if (rng() < 0.6) {
      const ph = 6 + rng() * 6, pk = rng() < 0.5 ? 'office' : 'brick';
      addBuilding(cx, cz, INNER - 2, INNER - 2, ph, pk, tint(rng), { noClutter: true });
      const tw = 34 + rng() * 16, td = 34 + rng() * 16, th = 70 + rng() * 80;
      const tx = cx + (rng() - 0.5) * (INNER - tw - 6), tz = cz + (rng() - 0.5) * (INNER - td - 6);
      const k = kinds[(rng() * kinds.length) | 0];
      addBuilding(tx, tz, tw, td, th, k, tint(rng, 0.85, 1));
      if (rng() < 0.5) addBuilding(tx, tz, tw * 0.6, td * 0.6, th + 25 + rng() * 20, k, tint(rng, 0.85, 1));
    } else {
      const split = rng() < 0.5;
      for (const s of [-1, 1]) {
        const w = split ? INNER / 2 - 2 : INNER, d = split ? INNER : INNER / 2 - 2;
        const x = split ? cx + s * (INNER / 4 + 0.5) : cx, z = split ? cz : cz + s * (INNER / 4 + 0.5);
        const th = 45 + rng() * 75;
        addBuilding(x, z, w, d, th, kinds[(rng() * kinds.length) | 0], tint(rng, 0.85, 1));
      }
    }
  } else if (type === 'mid' || type === 'lowrise') {
    const mid = type === 'mid';
    const kinds = mid ? ['office', 'brick', 'apartment', 'glass', 'apartment'] : ['brick', 'apartment', 'office', 'apartment'];
    const q = INNER / 2 - 2;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      if (rng() < 0.08) { S.asphalt.box(cx + sx * (INNER / 4 + 0.5), CURB + 0.005, cz + sz * (INNER / 4 + 0.5), q, 0, q, [1, 1, 1], { sides: false, tile: 8 }); continue; }
      const h = mid ? 16 + rng() * 40 : 8 + rng() * 14;
      const w = q - rng() * 4, d = q - rng() * 4;
      addBuilding(cx + sx * (INNER / 4 + 0.5), cz + sz * (INNER / 4 + 0.5), w, d, h, kinds[(rng() * kinds.length) | 0], tint(rng));
      if (rng() < 0.25) addBillboard(cx + sx * (INNER / 4 + 0.5), cz + sz * (INNER / 4 + 0.5), w, d, h, sx, sz);
    }
  } else if (type === 'residential') {
    const lot = INNER / 3, roofCols = [[0.62, 0.3, 0.22], [0.36, 0.34, 0.34], [0.45, 0.28, 0.2], [0.28, 0.3, 0.36], [0.55, 0.42, 0.3]];
    for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) {
      const x = cx - INNER / 2 + lot * (a + 0.5), z = cz - INNER / 2 + lot * (b + 0.5);
      S.grass.box(x, CURB + 0.005, z, lot - 1, 0, lot - 1, [1, 1, 1], { sides: false, tile: 6 });
      if (rng() < 0.1) { addTree(x, z, 1.1); continue; }
      const w = 11 + rng() * 5, d = 9 + rng() * 5, h = rng() < 0.5 ? 4.6 : 7.4;
      const hx = x + (rng() - 0.5) * 3, hz = z + (rng() - 0.5) * 3;
      const t = tint(rng, 0.9, 1.0);
      addBuilding(hx, hz, w, d, h, 'house', [t[0] * (0.92 + rng() * 0.1), t[1] * (0.9 + rng() * 0.12), t[2] * (0.9 + rng() * 0.12)], { noParapet: true, noClutter: true });
      S.roof.gable(hx, h, hz, w, d, 2.2 + rng() * 1.2, w > d ? 'x' : 'z', roofCols[(rng() * roofCols.length) | 0]);
      if (rng() < 0.6) addTree(hx + (rng() < 0.5 ? -1 : 1) * (w / 2 + 2.5), hz + (rng() - 0.5) * 6, 0.9 + rng() * 0.5);
    }
  } else if (type === 'park') {
    // paths
    S.concrete.box(cx, CURB + 0.03, cz, 4, 0, INNER, [1, 1, 1], { sides: false, tile: 4 });
    S.concrete.box(cx, CURB + 0.03, cz, INNER, 0, 4, [1, 1, 1], { sides: false, tile: 4 });
    S.concrete.box(cx, CURB + 0.03, cz, 16, 0, 16, [1, 1, 1], { sides: false, tile: 4 });
    // fountain / pond
    S.water.box(cx, CURB + 0.06, cz, 11, 0, 11, [0.6, 0.85, 1], { sides: false, tile: 6 });
    S.props.cylinder(cx, CURB, cz, 1.2, 1.4, 8, [0.7, 0.7, 0.72]);
    addCircle(cx, cz, 6, 1.0, 'pond');
    for (let n = 0; n < 34; n++) {
      const x = cx + (rng() - 0.5) * (INNER - 4), z = cz + (rng() - 0.5) * (INNER - 4);
      if (Math.abs(x - cx) < 4 || Math.abs(z - cz) < 4) continue;
      addTree(x, z, 0.9 + rng() * 0.7);
    }
    for (const [dx, dz, r] of [[10, 3, 0], [-10, -3, 0], [3, -10, 1], [-3, 10, 1]]) S.props.boxRot(cx + dx, CURB, cz + dz, r ? 0.6 : 2.4, 0.8, r ? 2.4 : 0.6, 0, [0.45, 0.32, 0.2]);
  } else if (type === 'industrial') {
    for (const s of [-1, 1]) addBuilding(cx + s * 20, cz - 20, 32, 40, 11 + rng() * 3, 'dark', [0.75, 0.75, 0.78], { noClutter: false });
    const colors = [[0.75, 0.2, 0.15], [0.15, 0.35, 0.65], [0.85, 0.65, 0.15], [0.2, 0.5, 0.3], [0.8, 0.8, 0.8], [0.5, 0.25, 0.1]];
    for (let a = 0; a < 5; a++) for (let b = 0; b < 2; b++) {
      const x = cx - 28 + a * 14, z = cz + 14 + b * 12;
      if (rng() < 0.2) continue;
      const stack = 1 + ((rng() * 3) | 0);
      for (let k = 0; k < stack; k++) S.props.box(x, CURB + k * 2.6, z, 12, 2.6, 2.6, colors[(rng() * colors.length) | 0], { tile: 3 });
      addBox(x - 6, z - 1.3, x + 6, z + 1.3, stack * 2.6, 'container');
    }
  } else if (type === 'plaza') {
    S.concrete.box(cx, CURB + 0.03, cz, INNER, 0, INNER, [1.1, 1.1, 1.1], { sides: false, tile: 4 });
    addBuilding(cx, cz, 28, 28, 245, 'dark', [0.9, 0.95, 1.0], { noClutter: true });
    addBuilding(cx, cz, 18, 18, 275, 'glass', [1, 1, 1], { noClutter: true, noParapet: true });
    S.props.box(cx, 275, cz, 0.6, 32, 0.6, [0.8, 0.8, 0.8]);
    world.beacon = { x: cx, y: 306, z: cz };
    for (const [dx, dz] of [[-28, -28], [28, -28], [-28, 28], [28, 28], [0, 30], [0, -30], [30, 0], [-30, 0]]) addTree(cx + dx, cz + dz, 1.2);
  } else if (type === 'police') {
    S.concrete.box(cx, CURB + 0.03, cz, INNER, 0, INNER, [0.9, 0.9, 1.0], { sides: false, tile: 4 });
    addBuilding(cx, cz + 12, 56, 30, 15, 'office', [0.72, 0.8, 1.0]);
    S.props.box(cx, 0, cz + 12 - 15.2, 56, 3, 0.4, [0.15, 0.25, 0.7]); // blue stripe
    addSign(cx, 11, cz + 12 - 15.3, 22, 5.5, T.signTexture('POLICE', '#12245f', '#ffffff', 'COSTA VISTA PD'), 0);
    addTree(cx - 32, cz - 25, 1.2); addTree(cx + 32, cz - 25, 1.2);
  } else if (type === 'hospital') {
    S.concrete.box(cx, CURB + 0.03, cz, INNER, 0, INNER, [1.05, 1.05, 1.05], { sides: false, tile: 4 });
    addBuilding(cx, cz + 10, 60, 36, 24, 'office', [1.0, 1.0, 1.02]);
    addSign(cx, 20, cz + 10 - 18.1, 26, 6.5, T.signTexture('HOSPITAL', '#f4f4f4', '#d21f2b', 'EMERGENCY  24H'), 0);
    S.props.box(cx, 24, cz + 10, 12, 0.3, 12, [1, 1, 1]); S.props.box(cx, 24.3, cz + 10, 2, 0.05, 8, [0.85, 0.1, 0.1]); S.props.box(cx, 24.3, cz + 10, 8, 0.05, 2, [0.85, 0.1, 0.1]);
    addTree(cx - 32, cz - 25, 1.2); addTree(cx + 32, cz - 25, 1.2);
  } else if (type === 'shop') {
    S.concrete.box(cx, CURB + 0.03, cz, INNER, 0, INNER, [0.95, 0.95, 0.95], { sides: false, tile: 4 });
    addBuilding(cx, cz + 8, 34, 26, 9, 'brick', [0.9, 0.85, 0.85]);
    addSign(cx, 6.5, cz + 8 - 13.1, 20, 4.5, T.signTexture('GUN CLUB', '#1b1b1b', '#ffd23a', 'AMMO & ARMOR'), 0);
    for (const [dx, dz] of [[-28, -20], [28, -20], [-28, 30], [28, 30]]) addTree(cx + dx, cz + dz, 1);
  } else if (type === 'stunt') {
    S.props.box(cx, CURB, cz, 1, 0, 1, [1, 1, 1]);
    const col = [0.95, 0.55, 0.1];
    const ramps = [
      [cx - 34, cz - 30, cx - 18, cz - 20, 'x', 1, 3.6], [cx + 18, cz - 30, cx + 34, cz - 20, 'x', -1, 3.6],
      [cx - 8, cz + 6, cx + 8, cz + 22, 'z', 1, 4.2], [cx + 14, cz + 8, cx + 24, cz + 24, 'z', -1, 3.2],
    ];
    for (const [x0, z0, x1, z1, ax, sg, h] of ramps) {
      const w = new GeoBuilder(); w.wedge(x0, z0, x1, z1, ax, sg, h, col); S.props.append(w, CURB);
      addRamp(x0, z0, x1, z1, ax, sg, h);
      // block the vertical back wall for approaches from behind; collider is lower than the lip so jumpers clear it
      const t = 0.6;
      if (ax === 'x') { if (sg > 0) addBox(x1, z0, x1 + t, z1, h - 0.6, 'rampback'); else addBox(x0 - t, z0, x0, z1, h - 0.6, 'rampback'); }
      else { if (sg > 0) addBox(x0, z1, x1, z1 + t, h - 0.6, 'rampback'); else addBox(x0, z0 - t, x1, z0, h - 0.6, 'rampback'); }
    }
    for (let k = 0; k < 6; k++) { const x = cx - 30 + k * 12, z = cz + 32; S.props.box(x, CURB, z, 3, 1.1, 1.2, [0.85, 0.85, 0.2], { tile: 2 }); addBox(x - 1.5, z - 0.6, x + 1.5, z + 0.6, 1.1, 'barrier'); }
  }
}

function addBillboard(cx, cz, w, d, h, sx, sz) {
  const idx = (S.rng() * T.AD_COUNT) | 0;
  const mat = new THREE.MeshStandardMaterial({ map: T.adTexture(idx), emissiveMap: T.adTexture(idx), emissive: 0xffffff, emissiveIntensity: 0.15, roughness: 0.6, side: THREE.DoubleSide });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(14, 7), mat);
  const facingZ = S.rng() < 0.5;
  m.position.set(cx + (facingZ ? 0 : sx * (w / 2 + 0.3)), h + 5.5, cz + (facingZ ? sz * (d / 2 + 0.3) : 0));
  m.rotation.y = facingZ ? (sz > 0 ? 0 : Math.PI) : (sx > 0 ? Math.PI / 2 : -Math.PI / 2);
  m.castShadow = true;
  S.props.box(m.position.x, h, m.position.z, 0.5, 3, 0.5, [0.4, 0.4, 0.4]);
  world.scene.add(m);
  (world.billboards || (world.billboards = [])).push(mat);
}

function addSign(x, y, z, w, h, tex, rotY) {
  const mat = new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.5 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  m.position.set(x, y, z); m.rotation.y = rotY + Math.PI; // faces -z
  world.scene.add(m);
  (world.billboards || (world.billboards = [])).push(mat);
}

// -------------------------------------------------------------------- props: trees, lamps, signals
function buildProps(scene) {
  // trees (instanced)
  const oaks = S.trees.filter((t) => t.kind === 'oak'), palms = S.trees.filter((t) => t.kind === 'palm');
  const trunkGeo = new THREE.CylinderGeometry(0.2, 0.32, 3.4, 6); trunkGeo.translate(0, 1.7, 0);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5b4330, roughness: 1 });
  const leafGeo = new THREE.IcosahedronGeometry(2.3, 0); leafGeo.scale(1, 0.9, 1); leafGeo.translate(0, 4.6, 0);
  const leafMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true });
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, oaks.length);
  const leaves = new THREE.InstancedMesh(leafGeo, leafMat, oaks.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pv = new THREE.Vector3(), col = new THREE.Color();
  const rng = makeRng(31);
  oaks.forEach((t, k) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * TAU);
    sc.set(t.s, t.s * (0.9 + rng() * 0.3), t.s);
    pv.set(t.x, 0.1, t.z);
    m4.compose(pv, q, sc); trunks.setMatrixAt(k, m4); leaves.setMatrixAt(k, m4);
    col.setHSL(0.24 + rng() * 0.07, 0.42 + rng() * 0.2, 0.26 + rng() * 0.1); leaves.setColorAt(k, col);
  });
  for (const m of [trunks, leaves]) { m.castShadow = true; m.receiveShadow = false; m.instanceMatrix.needsUpdate = true; scene.add(m); }
  if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
  world.trees = leaves;

  // palms
  const pg = new GeoBuilder();
  const ptrunk = new THREE.CylinderGeometry(0.16, 0.3, 9, 6); ptrunk.translate(0, 4.5, 0);
  const palmTrunks = new THREE.InstancedMesh(ptrunk, new THREE.MeshStandardMaterial({ color: 0x8a6d4b, roughness: 1 }), palms.length);
  for (let k = 0; k < 7; k++) {
    const a = (k / 7) * TAU, ca = Math.cos(a), sa = Math.sin(a);
    const L = 4.2, droop = 1.8, wd = 0.7;
    const bx = ca * 0.2, bz = sa * 0.2, tx = ca * L, tz = sa * L;
    const px = -sa * wd, pz = ca * wd;
    pg.quad([bx - px, 9.0, bz - pz], [bx + px, 9.0, bz + pz], [tx * 0.55 + px * 1.4, 9.7, tz * 0.55 + pz * 1.4], [tx * 0.55 - px * 1.4, 9.7, tz * 0.55 - pz * 1.4], [0, 1, 0], null, [0.2, 0.5, 0.18]);
    pg.quad([tx * 0.55 - px * 1.4, 9.7, tz * 0.55 - pz * 1.4], [tx * 0.55 + px * 1.4, 9.7, tz * 0.55 + pz * 1.4], [tx + px * 0.2, 9.7 - droop, tz + pz * 0.2], [tx - px * 0.2, 9.7 - droop, tz - pz * 0.2], [0, 1, 0], null, [0.16, 0.42, 0.14]);
  }
  const palmLeafMat = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9 });
  const palmLeaves = new THREE.InstancedMesh(pg.build(), palmLeafMat, palms.length);
  palms.forEach((t, k) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng() * TAU); sc.set(t.s, t.s, t.s); pv.set(t.x, 0.1, t.z);
    m4.compose(pv, q, sc); palmTrunks.setMatrixAt(k, m4); palmLeaves.setMatrixAt(k, m4);
  });
  for (const m of [palmTrunks, palmLeaves]) { m.castShadow = true; scene.add(m); }

  // lamp posts
  for (const l of S.lamps) {
    const nx = Math.cos(l.ang), nz = Math.sin(l.ang); // outward (towards road)
    S.lampPole.box(l.x, CURB, l.z, 0.22, 6.6, 0.22, [0.26, 0.28, 0.3], { tile: 2 });
    // arm reaches toward the road
    S.lampPole.boxRot(l.x + nx * 0.8, CURB + 6.5, l.z + nz * 0.8, Math.abs(nx) > 0.5 ? 1.8 : 0.16, 0.16, Math.abs(nz) > 0.5 ? 1.8 : 0.16, 0, [0.26, 0.28, 0.3]);
    S.lampBulb.box(l.x + nx * 1.5, CURB + 6.36, l.z + nz * 1.5, Math.abs(nx) > 0.5 ? 0.9 : 0.4, 0.16, Math.abs(nz) > 0.5 ? 0.9 : 0.4, [1, 0.85, 0.55]);
  }

  // traffic signals: two heads per corner pole
  const lampCols = LAMP_COLS;
  for (const axis of ['x', 'z']) for (const c of Object.keys(lampCols)) S.tlLamp[axis + c] = new GeoBuilder();
  const hh = ROAD / 2 + 1.2;
  for (let i = 0; i <= GRID; i++) for (let j = 0; j <= GRID; j++) {
    const cx = roadCenter(i), cz = roadCenter(j);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const px = cx + sx * hh, pz = cz + sz * hh;
      S.tlPole.box(px, CURB, pz, 0.24, 5.2, 0.24, [0.2, 0.22, 0.24], { tile: 2 });
      addCircle(px, pz, 0.3, 5, 'signal');
      // head facing +sx along x (seen by traffic moving along x from that side)
      const heads = [['x', sx, 0], ['z', 0, sz]];
      for (const [axis, hx, hz] of heads) {
        const bx = px + hx * 0.3, bz = pz + hz * 0.3;
        const w = hx ? 0.32 : 0.5, d = hz ? 0.32 : 0.5;
        S.tlPole.box(bx, CURB + 4.1, bz, w, 1.15, d, [0.08, 0.08, 0.09], { tile: 2 });
        let y = 5.0;
        for (const c of ['red', 'yellow', 'green']) {
          S.tlLamp[axis + c].box(px + hx * 0.47, CURB + y - 0.5, pz + hz * 0.47, hx ? 0.06 : 0.26, 0.26, hz ? 0.06 : 0.26, lampCols[c]);
          y -= 0.36;
        }
      }
    }
  }
}

function flushMeshes(scene) {
  const add = (b, mat, o) => { if (!b.empty) { const m = b.mesh(mat, o); scene.add(m); return m; } };
  for (const k of Object.keys(S.facade)) add(S.facade[k], S.facadeMat[k]);
  const roofT = T.roofTexture(); roofT.repeat.set(1, 1);
  add(S.roof, new THREE.MeshStandardMaterial({ map: roofT, vertexColors: true, roughness: 0.95 }));
  add(S.concrete, new THREE.MeshStandardMaterial({ map: T.concreteTexture(), vertexColors: true, roughness: 0.95 }), { cast: false });
  add(S.grass, new THREE.MeshStandardMaterial({ map: T.grassTexture(), vertexColors: true, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }), { cast: false });
  add(S.asphalt, new THREE.MeshStandardMaterial({ map: T.asphaltTexture(), vertexColors: true, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }), { cast: false });
  add(S.props, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, metalness: 0.15 }));
  add(S.water, new THREE.MeshStandardMaterial({ vertexColors: true, color: 0x3a9ad4, roughness: 0.1, metalness: 0.3, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }), { cast: false });
  add(S.tlPole, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.4 }));
  add(S.lampPole, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.5 }));
  world.lampMat = new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xffd9a0, emissiveIntensity: 0.1, roughness: 0.5 });
  add(S.lampBulb, world.lampMat, { cast: false });
  world.tlMats = {};
  for (const key of Object.keys(S.tlLamp)) {
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, emissive: new THREE.Color().setRGB(...LAMP_COLS[key.slice(1)]), emissiveIntensity: 0.05, roughness: 0.4 });
    world.tlMats[key] = mat;
    add(S.tlLamp[key], mat, { cast: false });
  }
  // lamp light pools (night)
  const pool = new THREE.InstancedMesh(new THREE.PlaneGeometry(16, 16).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: world.glowTex, color: 0xffcf8a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: true }), S.lamps.length);
  const m4 = new THREE.Matrix4();
  S.lamps.forEach((l, k) => { m4.makeTranslation(l.x + Math.cos(l.ang) * 3.2, 0.2, l.z + Math.sin(l.ang) * 3.2); pool.setMatrixAt(k, m4); });
  pool.frustumCulled = false; pool.renderOrder = 5; pool.visible = false;
  scene.add(pool); world.lampPools = pool;
  S = Object.assign(S, { done: true });
}

function buildLandmarks(scene) {
  // Ferris wheel on the beach
  const g = new THREE.Group();
  const steel = new THREE.MeshStandardMaterial({ color: 0xe8e8ee, roughness: 0.5, metalness: 0.4 });
  const R = 17, hubY = 20;
  const wheel = new THREE.Group(); wheel.position.y = hubY;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(R, 0.28, 6, 40), steel); wheel.add(ring);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(R * 0.55, 0.18, 6, 32), steel); wheel.add(ring2);
  const cols = [0xe63946, 0xf4a261, 0x2a9d8f, 0x457b9d, 0xf1c453, 0x9b5de5];
  const cabins = [];
  for (let k = 0; k < 16; k++) {
    const a = (k / 16) * TAU;
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(R, 0.14, 0.14), steel);
    spoke.position.set(Math.cos(a) * R / 2, Math.sin(a) * R / 2, 0); spoke.rotation.z = a; wheel.add(spoke);
    const cab = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.7, 2.2), new THREE.MeshStandardMaterial({ color: cols[k % cols.length], roughness: 0.5 }));
    body.position.y = -1.1; cab.add(body);
    cab.position.set(Math.cos(a) * R, Math.sin(a) * R, 0); wheel.add(cab); cabins.push(cab);
  }
  g.add(wheel);
  for (const s of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.6, hubY + 2, 0.6), steel);
    leg.position.set(0, (hubY) / 2 - 0.5, s * 4.2); leg.rotation.x = s * -0.22; g.add(leg);
  }
  g.position.set(HALF + 40, 0, -170); g.rotation.y = 0;
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  scene.add(g);
  addCircle(HALF + 40, -170 + 4.4, 1, 20, 'wheel'); addCircle(HALF + 40, -170 - 4.4, 1, 20, 'wheel');
  world.animated.push((dt) => { wheel.rotation.z -= dt * 0.12; for (const c of cabins) c.rotation.z = -wheel.rotation.z; });
  world.pois.ferris = { x: HALF + 40, z: -170 };
  if (world.beacon) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(1.6, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff2a1a, fog: false }));
    b.position.set(world.beacon.x, world.beacon.y, world.beacon.z); scene.add(b);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: world.glowTex, color: 0xff3020, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    glow.scale.set(30, 30, 1); glow.position.copy(b.position); scene.add(glow);
    world.animated.push(() => { const on = (G.time % 1.6) < 0.7; b.visible = on; glow.visible = on; });
  }
}

// -------------------------------------------------------------------- minimap base image
function buildMinimapBase() {
  const size = LAND * 2, c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  const O = size / 2;
  x.fillStyle = '#1c3d5a'; x.fillRect(0, 0, size, size);
  x.fillStyle = '#5a6069'; x.fillRect(O - LAND, O - LAND, LAND * 2, LAND * 2);
  x.fillStyle = '#c9b98f'; x.fillRect(O - LAND, O - LAND, LAND * 2, LAND * 2);
  // roads
  x.fillStyle = '#7c838d';
  for (let i = 0; i <= GRID; i++) {
    const r = roadCenter(i);
    x.fillRect(O - HALF - ROAD / 2, O + r - ROAD / 2, HALF * 2 + ROAD, ROAD);
    x.fillRect(O + r - ROAD / 2, O - HALF - ROAD / 2, ROAD, HALF * 2 + ROAD);
  }
  // blocks
  for (let i = 0; i < GRID; i++) for (let j = 0; j < GRID; j++) {
    const b = world.blocks[i][j];
    x.fillStyle = b.type === 'park' ? '#3f7048' : b.type === 'industrial' ? '#5c5a55' : b.type === 'stunt' ? '#6d5a3a' : '#3c4652';
    x.fillRect(O + b.cx - BLOCK / 2, O + b.cz - BLOCK / 2, BLOCK, BLOCK);
  }
  for (const [bx, bz, w, d, h] of world.buildRects) {
    const v = clamp(70 + h * 0.5, 70, 130);
    x.fillStyle = `rgb(${v},${v + 8},${v + 20})`;
    x.fillRect(O + bx - w / 2, O + bz - d / 2, w, d);
  }
  world.mapCanvas = c; world.mapOrigin = O;
}

// -------------------------------------------------------------------- per-frame
const _c1 = new THREE.Color(), _c2 = new THREE.Color();
function mixPal(k, wD, wU, wN, out) {
  out.setRGB(0, 0, 0);
  out.r = DAY[k].r * wD + DUSK[k].r * wU + NIGHT[k].r * wN;
  out.g = DAY[k].g * wD + DUSK[k].g * wU + NIGHT[k].g * wN;
  out.b = DAY[k].b * wD + DUSK[k].b * wU + NIGHT[k].b * wN;
  return out;
}
const _top = new THREE.Color(), _hor = new THREE.Color(), _sunC = new THREE.Color(), _hs = new THREE.Color(), _hg = new THREE.Color(), _fog = new THREE.Color();

world.update = function (dt, camera, focus) {
  G.hour = (G.hour + dt / SECONDS_PER_HOUR) % 24;
  world.lightPhase = (G.time % 30);
  const a = ((G.hour - 6) / 24) * TAU, e = Math.sin(a);
  world.sunDir.set(Math.cos(a) * 0.9, e, 0.42).normalize();
  world.moonDir.copy(world.sunDir).negate();
  const wD = ss(e, 0.02, 0.4), wN = ss(e, 0.0, -0.22), wU = Math.max(0, 1 - wD - wN);
  const norm = wD + wU + wN || 1;
  const d = wD / norm, u = wU / norm, n = wN / norm;
  mixPal('top', d, u, n, _top); mixPal('hor', d, u, n, _hor); mixPal('sun', d, u, n, _sunC);
  mixPal('hs', d, u, n, _hs); mixPal('hg', d, u, n, _hg); mixPal('fog', d, u, n, _fog);
  G.night = ss(e, 0.16, -0.08);
  const su = world.sky.material.uniforms;
  su.top.value.copy(_top); su.horizon.value.copy(_hor); su.bottom.value.copy(_fog);
  su.sunDir.value.copy(world.sunDir); su.moonDir.value.copy(world.moonDir);
  su.sunColor.value.copy(_sunC).multiplyScalar(1 - n); su.starVis.value = G.night;
  if (world.scene.fog) world.scene.fog.color.copy(_fog);
  world.scene.background = null;
  world.stars.material.opacity = clamp(G.night * 1.1, 0, 1);
  world.hemi.color.copy(_hs); world.hemi.groundColor.copy(_hg);
  world.hemi.intensity = lerp(0.6, 1.75, d) + u * 0.3;
  const sunI = 3.4 * ss(e, 0.0, 0.3), moonI = 0.75 * ss(-e, 0.0, 0.25);
  const useSun = e >= -0.01;
  world.sun.intensity = useSun ? sunI : moonI;
  world.sun.color.copy(useSun ? _sunC : NIGHT.sun);
  const fpos = focus || { x: 0, y: 0, z: 0 };
  const dir = useSun ? world.sunDir : world.moonDir;
  const snap = 1;
  const tx = Math.round(fpos.x / snap) * snap, tz = Math.round(fpos.z / snap) * snap;
  world.sun.target.position.set(tx, 0, tz);
  world.sun.position.set(tx + dir.x * 300, dir.y * 300 + 20, tz + dir.z * 300);
  world.sun.target.updateMatrixWorld();

  // window / lamp emissives
  const N = G.night;
  for (const k of Object.keys(S ? S.facadeMat : {})) S.facadeMat[k].emissiveIntensity = N * 1.15;
  if (world.lampMat) world.lampMat.emissiveIntensity = 0.15 + N * 3.2;
  if (world.lampPools) { world.lampPools.visible = N > 0.05; world.lampPools.material.opacity = N * 0.55; }
  if (world.billboards) for (const m of world.billboards) m.emissiveIntensity = 0.1 + N * 0.9;

  // traffic lights
  if (world.tlMats) {
    for (const axis of ['x', 'z']) {
      const st = lightState(axis);
      world.tlMats[axis + 'red'].emissiveIntensity = st === 'red' ? 3 : 0.04;
      world.tlMats[axis + 'yellow'].emissiveIntensity = st === 'yellow' ? 3 : 0.04;
      world.tlMats[axis + 'green'].emissiveIntensity = st === 'green' ? 3 : 0.04;
    }
  }
  if (camera) {
    world.sky.position.copy(camera.position);
    world.stars.position.copy(camera.position);
    const cloudCol = _c1.copy(_hor).lerp(_c2.set(0xffffff), 0.6 * (1 - n)).multiplyScalar(0.35 + 0.65 * (1 - n));
    for (const c of world.clouds) {
      c.position.x += dt * 3.5;
      const dx = c.position.x - camera.position.x, dz = c.position.z - camera.position.z;
      if (dx > 1800) c.position.x -= 3600; if (dx < -1800) c.position.x += 3600;
      if (dz > 1800) c.position.z -= 3600; if (dz < -1800) c.position.z += 3600;
      c.material.color.copy(cloudCol);
    }
    if (world.waterTex) { world.waterTex.offset.x += dt * 0.0012; world.waterTex.offset.y += dt * 0.0007; }
    world.water.position.x = Math.round(camera.position.x / 30) * 30; world.water.position.z = Math.round(camera.position.z / 30) * 30;
  }
  for (const f of world.animated) f(dt);
};
