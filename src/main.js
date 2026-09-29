// Entry point: renderer, loop, menu/pause flow, cheats.
import * as THREE from 'three';
import { G } from './state.js';
import { Input, initInput } from './input.js';
import { buildWorld, world } from './world.js';
import { fx } from './fx.js';
import { audio } from './audio.js';
import { M } from './models.js';
import { Player, updateCamera } from './player.js';
import { updateVehicles, syncVehicles, Vehicle } from './vehicle.js';
import { traffic } from './traffic.js';
import { peds } from './peds.js';
import { police } from './police.js';
import { pickups } from './pickups.js';
import { missions } from './missions.js';
import { hud } from './hud.js';
import { updateProjectiles } from './combat.js';
import { roadCenter, PARK_OFFSET } from './config.js';
import { clamp } from './util.js';

const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.8, 4000);
G.scene = scene; G.camera = camera; G.renderer = renderer; G.world = world;
G.interactables = []; G.playerPos = () => (G.player ? { x: G.player.cx, z: G.player.cz } : { x: 0, z: 0 });
window.__G = G;

const params = new URLSearchParams(location.search);

// -------------------------------------------------------------- environment map for car paint / glass
function buildEnv() {
  const s = new THREE.Scene();
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
    fragmentShader: `varying vec3 vP; void main(){ float h = normalize(vP).y;
      vec3 sky = mix(vec3(0.72,0.82,0.95), vec3(0.16,0.36,0.75), pow(clamp(h,0.,1.),0.6));
      vec3 gnd = mix(vec3(0.32,0.31,0.3), vec3(0.12,0.12,0.12), clamp(-h*2.,0.,1.));
      vec3 c = h > 0. ? sky : gnd; c += vec3(1.,.95,.85) * pow(max(dot(normalize(vP), normalize(vec3(.4,.8,.3))),0.),40.) * 2.5; gl_FragColor = vec4(c,1.); }`,
  });
  s.add(new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), mat));
  const pm = new THREE.PMREMGenerator(renderer);
  const rt = pm.fromScene(s, 0.02);
  G.envMap = rt.texture;
  M.detail.envMap = G.envMap; M.glass.envMap = G.envMap;
  pm.dispose();
}

// -------------------------------------------------------------- game setup
let ready = false;
function setup() {
  initInput(canvas);
  buildEnv();
  buildWorld(scene, renderer);
  fx.init(scene, camera, renderer);
  const start = { x: roadCenter(6) + 11.5, z: roadCenter(6) + 11.5 };
  const player = new Player();
  G.player = player;
  player.place(start.x, start.z, 1.7); player.yaw = 1.73; player.pitch = 0.22;
  hud.init(); G.hud = hud;
  // a car parked nearby to get started
  const car = new Vehicle('sedan', roadCenter(6) + 30, roadCenter(6) + PARK_OFFSET + 0.4, Math.PI / 2, 0xc0392b);
  car.parked = true;
  traffic.init(); peds.init(); G.peds = peds; G.traffic = traffic; pickups.init(); G.pickups = pickups; missions.init();
  updateCamera(0.016, true);
  camera.updateMatrixWorld();
  world.update(0.001, camera, { x: player.x, y: 0, z: player.z });
  renderer.compile(scene, camera);
  ready = true;
  const btn = document.getElementById('play'); btn.disabled = false;
  document.getElementById('loading').textContent = 'Ready.';
  btn.addEventListener('click', () => startGame());
  if (params.has('noshadow')) { document.getElementById('opt-shadows').checked = false; document.getElementById('opt-quality').value = '0'; }
  if (params.has('autostart')) startGame(true);
}

function startGame(noLock) {
  G.settings.shadows = document.getElementById('opt-shadows').checked;
  G.settings.quality = +document.getElementById('opt-quality').value;
  G.settings.sensitivity = +document.getElementById('opt-sens').value;
  G.settings.volume = +document.getElementById('opt-vol').value;
  applySettings();
  audio.init(); audio.setVolume(G.settings.volume); audio.resume(); audio.ambience(0.55);
  document.getElementById('menu').classList.add('hidden');
  hud.show(true);
  G.started = true; G.paused = false; last = performance.now();
  Input.reset();
  if (noLock) { Input.dragLook = true; return; }
  try {
    const r = canvas.requestPointerLock();
    if (r && r.catch) r.catch(() => { Input.dragLook = true; });
  } catch (e) { Input.dragLook = true; }
}

function applySettings() {
  renderer.shadowMap.enabled = G.settings.shadows;
  world.sun.castShadow = G.settings.shadows;
  const q = G.settings.quality;
  renderer.setPixelRatio(q >= 1 ? Math.min(window.devicePixelRatio || 1, 1.5) : 1);
  const size = q >= 1 ? 2048 : 1024;
  if (world.sun.shadow.mapSize.x !== size) { world.sun.shadow.mapSize.set(size, size); if (world.sun.shadow.map) { world.sun.shadow.map.dispose(); world.sun.shadow.map = null; } }
  renderer.setSize(window.innerWidth, window.innerHeight);
  fx.resize(renderer);
}

function pause(on) {
  if (!G.started || on === G.paused) return;
  G.paused = on;
  const menu = document.getElementById('menu');
  if (on) {
    menu.classList.remove('hidden'); document.getElementById('play').textContent = 'RESUME'; audio.suspend(); Input.reset();
    document.getElementById('loading').textContent = 'Paused';
  } else { menu.classList.add('hidden'); audio.resume(); last = performance.now(); }
}
Input.onLockChange = (locked) => { if (!locked && G.started && !G.paused) pause(true); };
document.getElementById('play').addEventListener('click', () => {
  if (G.started && G.paused) {
    G.settings.sensitivity = +document.getElementById('opt-sens').value; G.settings.volume = +document.getElementById('opt-vol').value;
    G.settings.shadows = document.getElementById('opt-shadows').checked; G.settings.quality = +document.getElementById('opt-quality').value;
    applySettings(); audio.setVolume(G.settings.volume);
    pause(false);
    if (!Input.dragLook) { try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => { Input.dragLook = true; }); } catch (e) { Input.dragLook = true; } }
  }
});
document.addEventListener('pointerlockerror', () => { Input.dragLook = true; });
window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && Input.dragLook && G.started) pause(!G.paused);
  if (G.paused) return;
  if (e.code === 'KeyM' && !e.repeat) hud.toggleMap();
  if (e.code === 'F3') { e.preventDefault(); G.showStats = !G.showStats; }
});
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); fx.resize(renderer);
});
document.addEventListener('visibilitychange', () => { if (document.hidden && G.started && !G.paused && !Input.dragLook) { /* pointer lock exit handles pausing */ } });

// -------------------------------------------------------------- cheats
let cheatBuf = '';
const CHEATS = {
  ARSENAL: () => { G.player.giveAll(1); G.hud.toast('Cheat: arsenal'); },
  CASHOUT: () => { G.player.addMoney(50000); G.hud.toast('Cheat: cash'); },
  HEALME: () => { const p = G.player; p.hp = p.maxHp; p.armor = 100; if (p.inVehicle) { p.inVehicle.hp = p.inVehicle.maxHp; p.inVehicle.burning = false; p.inVehicle.updatePaint(); } G.hud.toast('Cheat: healed'); },
  LAYLOW: () => { police.clear(false); },
  HEATUP: () => { police.addHeat(police.wanted >= 5 ? 5 : [1.2, 4.5, 10, 18, 30][police.wanted] - police.heat + 0.01); },
  SPEEDY: () => spawnCheatCar('sports'),
  BUSRIDE: () => spawnCheatCar('bus'),
  MIDNIGHT: () => { G.hour = 0.5; G.hud.toast('Cheat: midnight'); },
  HIGHNOON: () => { G.hour = 12; G.hud.toast('Cheat: noon'); },
};
function spawnCheatCar(key) {
  const p = G.player, yaw = p.yaw;
  const fx_ = Math.sin(yaw), fz_ = Math.cos(yaw);
  const x = p.cx + fx_ * 9, z = p.cz + fz_ * 9;
  const v = new Vehicle(key, x, z, yaw, [0xff2d55, 0x00b4ff, 0xffd400][(Math.random() * 3) | 0]);
  v.parked = true; v.tag = 'left'; G.hud.toast('Cheat: vehicle');
}
Input.onKey = (code) => {
  if (!G.started || G.paused || !code.startsWith('Key')) return;
  cheatBuf = (cheatBuf + code.slice(3)).slice(-12);
  for (const k in CHEATS) if (cheatBuf.endsWith(k)) { CHEATS[k](); cheatBuf = ''; audio.click(); break; }
};

// -------------------------------------------------------------- loop
let last = performance.now(), acc = 0;
const STEP = 1 / 60;

// One simulation tick (everything except drawing)
function simulate(dt) {
  G.time += dt;
  const p = G.player;
  p.update(dt);
  acc += dt; let n = 0;
  while (acc >= STEP && n < 4) { updateVehicles(STEP); acc -= STEP; n++; }
  if (n >= 4) acc = 0;
  peds.update(dt); police.update(dt); traffic.update(dt); pickups.update(dt); missions.update(dt);
  updateProjectiles(dt);
  updateCamera(dt);
  camera.updateMatrixWorld();
  world.update(dt, camera, { x: camera.position.x + Math.sin(p.yaw) * 30, y: 0, z: camera.position.z + Math.cos(p.yaw) * 30 });
  fx.setLight(0.3 + 0.7 * (1 - G.night));
  fx.update(dt);
  syncVehicles(dt);
  const envI = 0.12 + 0.6 * (1 - G.night);
  M.detail.envMapIntensity = envI; M.glass.envMapIntensity = envI; G.envI = envI;
  audio.update(dt);
  hud.update(dt, renderer);
}

function frame(now) {
  requestAnimationFrame(frame);
  if (!ready) return;
  let dt = Math.min(0.05, Math.max(0.0001, (now - last) / 1000)); last = now;
  if (G.paused) { renderer.render(scene, camera); Input.endFrame(); return; }
  simulate(dt);
  renderer.render(scene, camera);
  Input.endFrame();
}

document.getElementById('loading').textContent = 'Building the city…';
setTimeout(() => { try { setup(); } catch (e) { console.error(e); document.getElementById('loading').textContent = 'Failed to start: ' + e.message; } requestAnimationFrame(frame); }, 40);
window.__game = { Vehicle, Ped: peds, police, pickups, missions, G, renderer, scene, camera, startGame, pause, Input, simulate: (n, dt = 1 / 30) => { for (let i = 0; i < n; i++) { simulate(dt); Input.endFrame(); } }, render: () => renderer.render(scene, camera), stopLoop: () => { ready = false; }, startLoop: () => { ready = true; last = performance.now(); } };
