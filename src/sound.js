// Positional wrapper around the audio engine: applies distance attenuation and stereo pan relative to the camera.
import { audio } from './audio.js';
import { G } from './state.js';

const MAX = { gun: 110, boom: 260, crash: 80, scream: 45, hit: 40, misc: 40 };

function listen(x, z, maxD) {
  const cam = G.camera;
  if (!cam) return { vol: 1, pan: 0 };
  const dx = x - cam.position.x, dz = z - cam.position.z;
  const d = Math.hypot(dx, dz);
  if (d > maxD) return { vol: 0, pan: 0 };
  const t = 1 - d / maxD;
  // camera right vector on the XZ plane
  const rx = Math.cos(G.camYaw || 0), rz = -Math.sin(G.camYaw || 0);
  const pan = d > 1 ? Math.max(-1, Math.min(1, (dx * -rx + dz * -rz) / d)) : 0;
  return { vol: t * t, pan };
}
function at(fn, x, z, maxD, base, ...args) {
  const l = listen(x, z, maxD);
  if (l.vol < 0.01) return;
  fn(...args, base * l.vol, l.pan);
}

export const snd = {
  gunshot(kind, x, z, base = 1) { const l = listen(x, z, MAX.gun * (kind === 'rpg' ? 2 : 1)); if (l.vol > 0.01) audio.gunshot(kind, base * l.vol, l.pan); },
  explosion(x, z) { const l = listen(x, z, MAX.boom); if (l.vol > 0.005) audio.explosion(Math.max(0.25, l.vol), l.pan); },
  crash(intensity, x, z) { const l = listen(x, z, MAX.crash); if (l.vol > 0.01) audio.crash(intensity, l.vol, l.pan); },
  scream(x, z) { const l = listen(x, z, MAX.scream); if (l.vol > 0.01) audio.scream(l.vol, l.pan); },
  bulletHit(x, z) { const l = listen(x, z, MAX.hit); if (l.vol > 0.01) audio.bulletHit(l.vol, l.pan); },
  punch(x, z) { const l = listen(x, z, MAX.hit); if (l.vol > 0.01) audio.punch(l.vol, l.pan); },
  own: audio, // direct access for non-positional sounds
};
