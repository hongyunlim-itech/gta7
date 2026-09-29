/**
 * audio.js - Grand Theft Browser procedural sound engine.
 *
 * Everything is synthesised at runtime with the WebAudio API: no audio assets,
 * no imports, no dependencies. One named export, `audio`, a plain object.
 *
 *   master gain -> gentle compressor -> soft-clip safety net -> destination
 *        ^ sfx bus   ^ engine bus   ^ radio bus   ^ ambience bus
 *
 * Every public method is wrapped so that it can never throw, and is a no-op
 * until `audio.init()` has run. One-shots are capped (MAX_SHOTS), every source
 * is scheduled to stop, and every node is disconnected when its voice ends, so
 * long sessions do not leak graph nodes.
 */

// ============================================================================
// 1. Constants and tiny helpers
// ============================================================================

const MAX_SHOTS = 32;      // simultaneous one-shot voices before new ones are dropped
const LOOKAHEAD = 0.3;     // seconds of radio music scheduled ahead of the audio clock
const TICK_MS = 45;        // radio scheduler timer period
const BUS_LEVELS = { sfx: 0.9, engine: 0.8, radio: 0.35, ambience: 0.5 };

const clamp = (v, lo = 0, hi = 1) => (v < lo ? lo : v > hi ? hi : v);
const num = (v, d) => (typeof v === 'number' && isFinite(v) ? v : d);
const rand = (a, b) => a + Math.random() * (b - a);
const mtof = (n) => 440 * Math.pow(2, (n - 69) / 12);
const noop = () => {};

// ============================================================================
// 2. Module state
// ============================================================================

let ctx = null;            // AudioContext (or an injected OfflineAudioContext)
let isOffline = false;
let paused = false;        // true between suspend() and resume()
let volume = 0.8;          // master volume 0..1
let master = null, noiseBuf = null, brownBuf = null, reverbIn = null;
const bus = {};            // sfx / engine / radio / ambience gain nodes
let active = 0;            // live one-shot voices
let curOwner = null;       // Set collecting Groups created while the radio schedules a step
let updateAcc = 0;         // dt accumulator: audio params are pushed at ~40 Hz

// ============================================================================
// 3. Voice groups and envelope helpers
// ============================================================================

/**
 * A Group owns the nodes of one voice. It counts its running sources and, when
 * the last one ends, disconnects every node it created (and fires onEnd).
 */
class Group {
  constructor() {
    this.nodes = [];
    this.srcs = [];
    this.live = 0;
    this.done = false;
    this.onEnd = null;
    this.owner = curOwner;               // radio voices register with their station
    if (this.owner) this.owner.add(this);
  }
  track(n) { this.nodes.push(n); return n; }
  gain(v = 1) { const n = ctx.createGain(); n.gain.value = v; return this.track(n); }
  filter(type, f, q = 1) {
    const n = ctx.createBiquadFilter();
    n.type = type; n.frequency.value = f; n.Q.value = q;
    return this.track(n);
  }
  shaper(curve, oversample = 'none') {
    const n = ctx.createWaveShaper();
    n.curve = curve; n.oversample = oversample;
    return this.track(n);
  }
  /** Oscillator started at t0 and (optionally) stopped at t1. */
  osc(type, f, t0, t1) {
    const o = ctx.createOscillator();
    o.type = type; o.frequency.value = f;
    return this._start(o, t0, t1);
  }
  /** Looping noise source (shared buffer, random start offset). */
  noise(t0, t1, buf = noiseBuf) {
    const s = ctx.createBufferSource();
    s.buffer = buf; s.loop = true;
    return this._start(s, t0, t1, Math.random() * (buf.duration - 0.05));
  }
  /** Reverb send: routes `from` into the shared convolver. */
  send(from, amt) { const s = this.gain(amt); from.connect(s); s.connect(reverbIn); return s; }
  _start(src, t0, t1, offset) {
    src.onended = () => { if (--this.live <= 0) this.dispose(); };
    if (offset === undefined) src.start(t0); else src.start(t0, offset);
    if (t1 !== undefined) src.stop(t1);
    this.live++;
    this.srcs.push(src);
    this.nodes.push(src);
    return src;
  }
  /** Stop every source at time t (used to end loops and fade out stations). */
  release(t) { for (const s of this.srcs) { try { s.stop(t); } catch (e) { /* already stopped */ } } }
  dispose() {
    if (this.done) return;
    this.done = true;
    for (const n of this.nodes) { try { n.disconnect(); } catch (e) { /* not connected */ } }
    this.nodes = []; this.srcs = [];
    if (this.owner) this.owner.delete(this);
    if (this.onEnd) this.onEnd();
  }
}

/** Connect nodes in series; returns the last one. Targets may be AudioParams. */
function chain(...ns) {
  for (let i = 0; i < ns.length - 1; i++) ns[i].connect(ns[i + 1]);
  return ns[ns.length - 1];
}
/** Percussive envelope: 0 -> peak over `a` seconds, then exponential decay over `d`. */
function env(p, t, peak, a, d) {
  p.setValueAtTime(0.0001, t);
  p.linearRampToValueAtTime(Math.max(peak, 0.0002), t + a);
  p.exponentialRampToValueAtTime(0.0001, t + a + d);
}
/** Exponential parameter sweep. */
function sweep(p, t, from, to, d) { p.setValueAtTime(from, t); p.exponentialRampToValueAtTime(to, t + d); }

/** Filtered noise burst with a percussive envelope (optionally sweeping its filter to f2). */
function burst(g, out, t, dur, type, f, q, vol, atk = 0.001, f2) {
  const n = g.noise(t, t + atk + dur + 0.03);
  const fl = g.filter(type, f, q), a = g.gain(0);
  if (f2) sweep(fl.frequency, t, f, f2, dur);
  env(a.gain, t, vol, atk, dur);
  chain(n, fl, a, out);
}
/** Oscillator blip with pitch sweep f0 -> f1 and a percussive envelope. */
function tone(g, out, t, type, f0, f1, dur, vol, atk = 0.002, sweepDur = dur) {
  const o = g.osc(type, f0, t, t + atk + dur + 0.03), a = g.gain(0);
  if (f1 !== f0) sweep(o.frequency, t, f0, f1, sweepDur);
  env(a.gain, t, vol, atk, dur);
  chain(o, a, out);
  return o;
}
/** Transparent below 0.7, then a smooth knee towards +-1: a last line of defence against digital clipping. */
function softClipCurve() {
  const c = new Float32Array(2049);
  for (let i = 0; i < c.length; i++) {
    const x = i / (c.length - 1) * 2 - 1, a = Math.abs(x);
    c[i] = a <= 0.7 ? x : Math.sign(x) * (0.7 + 0.3 * Math.tanh((a - 0.7) / 0.15));
  }
  return c;
}
function distCurve(k) {
  const c = new Float32Array(1024), norm = Math.tanh(k);
  for (let i = 0; i < c.length; i++) c[i] = Math.tanh(k * (i / (c.length - 1) * 2 - 1)) / norm;
  return c;
}

/** True when sounds may be scheduled: initialised, not paused, and (for real contexts) actually running. */
function live() { return audio.ready && !paused && (isOffline || ctx.state === 'running'); }

/**
 * Run a one-shot voice. `build(g, out, t)` wires its sources into `out`, a gain
 * node (vol * trim) that feeds an optional StereoPanner and then `dest`.
 */
function shot(dest, vol, pan, build, trim = 1) {
  if (!live() || active >= MAX_SHOTS) return;
  vol = clamp(num(vol, 1));
  if (vol < 0.002) return;
  const g = new Group();
  g.onEnd = () => { active--; };
  active++;
  try {
    const t = ctx.currentTime + 0.004;
    const out = g.gain(vol * trim);
    let tail = out;
    pan = clamp(num(pan, 0), -1, 1);
    if (pan !== 0 && ctx.createStereoPanner) {
      const p = g.track(ctx.createStereoPanner());
      p.pan.value = pan;
      out.connect(p); tail = p;
    }
    tail.connect(dest);
    build(g, out, t);
    if (g.live === 0) g.dispose();
  } catch (e) { g.dispose(); throw e; }
}

// ============================================================================
// 4. Graph construction (init)
// ============================================================================

function buildBuffers() {
  const sr = ctx.sampleRate;
  noiseBuf = ctx.createBuffer(1, Math.floor(sr * 2), sr);
  const w = noiseBuf.getChannelData(0);
  for (let i = 0; i < w.length; i++) w[i] = Math.random() * 2 - 1;

  // Brown noise (rumble). The head is cross-faded with an overhang so the loop is seamless.
  const N = Math.floor(sr * 4), F = Math.floor(sr * 0.25);
  const raw = new Float32Array(N + F);
  let last = 0, sum = 0;
  for (let i = 0; i < raw.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; raw[i] = last; sum += last * last; }
  const scale = 0.5 / Math.sqrt(sum / raw.length);
  brownBuf = ctx.createBuffer(1, N, sr);
  const b = brownBuf.getChannelData(0);
  for (let i = 0; i < N; i++) b[i] = raw[i] * scale;
  for (let i = 0; i < F; i++) { const k = i / F; b[i] = (raw[i] * k + raw[N + i] * (1 - k)) * scale; }
}

function buildReverb() {
  const sr = ctx.sampleRate, len = Math.floor(sr * 1.2);
  const ir = ctx.createBuffer(2, len, sr);
  for (let c = 0; c < 2; c++) {
    const d = ir.getChannelData(c);
    let lp = 0;
    for (let i = 0; i < len; i++) {
      const x = i / len;
      lp += (Math.random() * 2 - 1 - lp) * (0.6 - 0.45 * x);          // gets darker as it decays
      d[i] = lp * Math.pow(1 - x, 3.5) * (i < 300 ? i / 300 : 1);
    }
  }
  const conv = ctx.createConvolver(), wet = ctx.createGain();
  conv.buffer = ir;
  wet.gain.value = 0.5;
  reverbIn = ctx.createGain();
  chain(reverbIn, conv, wet, bus.sfx);
}

function buildGraph() {
  master = ctx.createGain();
  master.gain.value = volume;
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -10; comp.knee.value = 12; comp.ratio.value = 4;
  comp.attack.value = 0.004; comp.release.value = 0.2;
  const safety = ctx.createWaveShaper();
  safety.curve = softClipCurve();
  chain(master, comp, safety, ctx.destination);
  for (const name of Object.keys(BUS_LEVELS)) {
    bus[name] = ctx.createGain();
    bus[name].gain.value = BUS_LEVELS[name];
    bus[name].connect(master);
  }
  buildBuffers();
  buildReverb();
}

// ============================================================================
// 5. Vocal / horn voices (formant synthesis)
// ============================================================================

/**
 * Sawtooth "vocal cords" with vibrato and a pitch contour, pushed through
 * parallel band-pass formants. o = { dur, f:[start, peak, end], form:[[f0,f1,q,gain]...], breath, atk }
 */
function formantVoice(g, out, t, o) {
  const dur = o.dur, end = t + dur + 0.1;
  const src = g.osc('sawtooth', o.f[0], t, end);
  src.frequency.setValueAtTime(o.f[0], t);
  src.frequency.linearRampToValueAtTime(o.f[1], t + dur * 0.2);
  src.frequency.linearRampToValueAtTime(o.f[2], t + dur);
  const vib = g.osc('sine', rand(5, 7.5), t, end);
  chain(vib, g.gain(o.f[1] * 0.02), src.frequency);
  const amp = g.gain(0);
  amp.gain.setValueAtTime(0.0001, t);
  amp.gain.linearRampToValueAtTime(1, t + (o.atk || 0.03));
  amp.gain.setTargetAtTime(0, t + dur * 0.6, dur * 0.08);
  for (const [f0, f1, q, gn] of o.form) {
    const bp = g.filter('bandpass', f0, q);
    bp.frequency.setValueAtTime(f0, t);
    bp.frequency.linearRampToValueAtTime(f1, t + dur);
    chain(src, bp, g.gain(gn), amp);
  }
  if (o.breath) chain(g.noise(t, end), g.filter('bandpass', 2600, 0.8), g.gain(o.breath), amp);
  chain(amp, out);
}

function screamVoice(g, out, t) {
  const r = Math.random();
  const ahEe = [[800, 900, 3.5, 1.2], [1250, 1900, 4, 1.0], [2800, 2900, 5, 0.6]];
  if (r < 0.5) {                                   // high scream
    const f = rand(520, 820);
    formantVoice(g, out, t, { dur: rand(0.5, 0.9), f: [f * 0.8, f * 1.45, f * 1.15], form: ahEe, breath: 0.1 });
  } else if (r < 0.8) {                            // low yell
    const f = rand(240, 380);
    formantVoice(g, out, t, { dur: rand(0.45, 0.85), f: [f * 0.9, f * 1.4, f], atk: 0.05,
      form: [[650, 800, 3.5, 1.2], [1100, 1300, 4, 1.0], [2500, 2600, 5, 0.5]], breath: 0.1 });
  } else {                                         // short yelp
    const f = rand(600, 900);
    formantVoice(g, out, t, { dur: rand(0.2, 0.32), f: [f * 0.9, f * 1.5, f * 1.2], form: ahEe, breath: 0.06 });
  }
}

const HORNS = [
  { f: [400, 500],        wave: 'square',   cut: 2400, gain: 0.08 },   // sedan: two-tone
  { f: [523, 659, 784],   wave: 'sawtooth', cut: 3200, gain: 0.06 },   // sporty triad
  { f: [175, 220, 262],   wave: 'sawtooth', cut: 1500, gain: 0.09 },   // truck air horn
  { f: [147, 185],        wave: 'square',   cut: 1000, gain: 0.095 },   // bus
];
let hornRun = null;

function hornStart(variant) {
  variant = Math.abs(Math.floor(num(variant, 0))) % HORNS.length;
  if (hornRun && hornRun.variant === variant) return;
  hornStop();
  if (!live()) return;
  const H = HORNS[variant], g = new Group(), t = ctx.currentTime;
  const out = g.gain(0), lp = g.filter('lowpass', H.cut, 0.7);
  out.gain.setValueAtTime(0.0001, t);
  out.gain.linearRampToValueAtTime(H.gain, t + 0.008);
  for (const f of H.f) {
    for (const det of [-4, 4]) { const o = g.osc(H.wave, f, t); o.detune.value = det; o.connect(lp); }
  }
  chain(lp, out, bus.sfx);
  hornRun = { g, out, variant };
}
function hornStop() {
  if (!hornRun) return;
  const { g, out } = hornRun, t = ctx.currentTime;
  hornRun = null;
  out.gain.cancelScheduledValues(t);
  out.gain.setTargetAtTime(0, t, 0.012);
  g.release(t + 0.1);
}

// ============================================================================
// 6. Gunshots and explosions
// ============================================================================

// crack = bright transient, body = mid burst, th = [f0, f1, dur] thump, tail = room decay
const GUNS = {
  pistol:  { f: 1800, cd: 0.03, body: 2800, bd: 0.09, th: [200, 62, 0.11], tail: 0.22, wet: 0.10, trim: 1.8 },
  smg:     { f: 2600, cd: 0.02, body: 3800, bd: 0.05, th: [290, 120, 0.06], tail: 0.12, wet: 0.05, trim: 1.4 },
  shotgun: { f: 700,  cd: 0.08, body: 1800, bd: 0.24, th: [140, 40, 0.34],  tail: 0.80, wet: 0.30, trim: 1.8 },
  rifle:   { f: 3200, cd: 0.05, body: 2300, bd: 0.13, th: [180, 52, 0.2],   tail: 0.65, wet: 0.32, trim: 1.8, snap: true },
  cop:     { f: 1500, cd: 0.04, body: 1500, bd: 0.12, th: [150, 66, 0.13],  tail: 0.50, wet: 0.28, trim: 1.3, bp: true },
};

function gunVoice(g, out, t, P) {
  const k = rand(0.94, 1.06);
  const n = g.noise(t, t + P.tail + 0.12);
  const cf = g.filter(P.bp ? 'bandpass' : 'highpass', P.f * k, P.bp ? 1.1 : 0.7), ca = g.gain(0);
  env(ca.gain, t, 1, 0.0006, P.cd);                                   // crack
  chain(n, cf, ca, out);
  const bf = g.filter('lowpass', P.body * k, 0.8), ba = g.gain(0);
  sweep(bf.frequency, t, P.body * k, P.body * 0.2, P.bd * 2);
  env(ba.gain, t, 0.85, 0.001, P.bd);                                 // body
  chain(n, bf, ba, out);
  const tf = g.filter('lowpass', P.body * 0.55, 0.6), ta = g.gain(0);
  sweep(tf.frequency, t, P.body * 0.55, 200, P.tail);
  env(ta.gain, t, 0.3, 0.004, P.tail);                                // tail
  chain(n, tf, ta, out);
  tone(g, out, t, 'sine', P.th[0] * k, P.th[1], P.th[2], 0.9, 0.002, P.th[2] * 0.5);   // thump
  if (P.snap) burst(g, out, t, 0.015, 'bandpass', 6500, 2, 0.5, 0.0004);              // supersonic snap
  g.send(out, P.wet);
}

function rpgVoice(g, out, t) {
  const n = g.noise(t, t + 1.9), bp = g.filter('bandpass', 350, 1.2), a = g.gain(0);
  sweep(bp.frequency, t, 350, 2400, 0.55);                            // rocket whoosh
  a.gain.setValueAtTime(0.0001, t);
  a.gain.linearRampToValueAtTime(0.9, t + 0.07);
  a.gain.setTargetAtTime(0, t + 0.12, 0.28);
  chain(n, bp, a, out);
  burst(g, out, t, 0.7, 'highpass', 2200, 0.6, 0.25, 0.02);           // motor hiss
  burst(g, out, t, 0.06, 'bandpass', 1400, 1, 0.8, 0.0008);           // ignition crack
  tone(g, out, t, 'sine', 120, 38, 0.3, 0.9, 0.003, 0.15);            // launch thump
  g.send(out, 0.3);
}

function explosionVoice(g, out, t) {
  const n = g.noise(t, t + 3.4);
  const cf = g.filter('highpass', 500, 0.6), ca = g.gain(0);
  env(ca.gain, t, 0.8, 0.001, 0.22);                                  // initial blast crack
  chain(n, cf, ca, out);
  const rf = g.filter('lowpass', 3000, 0.7), ra = g.gain(0);
  sweep(rf.frequency, t, 3000, 130, 2.2);
  env(ra.gain, t, 1, 0.004, 2.6);                                     // roar, filter closing
  chain(n, rf, ra, out);
  const rl = g.filter('lowpass', 180, 0.7), rg = g.gain(0);
  env(rg.gain, t + 0.05, 1.4, 0.08, 3.1);                             // low rumble
  chain(g.noise(t, t + 3.4, brownBuf), rl, rg, out);
  tone(g, out, t, 'sine', 95, 26, 1.7, 1.0, 0.004, 1.3);              // sub boom
  tone(g, out, t, 'triangle', 190, 50, 0.5, 0.5, 0.002, 0.3);         // punch
  for (let i = 0; i < 5; i++) {                                       // debris
    burst(g, out, t + 0.12 + Math.random() * 1.1, rand(0.03, 0.08), 'bandpass', rand(1200, 4200), rand(2, 5), rand(0.1, 0.25));
  }
  g.send(out, 0.4);
}

function crashVoice(g, out, t, i) {
  tone(g, out, t, 'sine', 130 + 40 * i, 42, 0.14 + 0.22 * i, 0.55 + 0.45 * i, 0.002, 0.12);   // thud
  burst(g, out, t, 0.06 + 0.1 * i, 'lowpass', 500 + 900 * i, 0.8, 0.5 + 0.4 * i);            // body slap
  if (i > 0.25) {                                                     // metal crunch
    const hits = 2 + Math.round(i * 5);
    for (let k = 0; k < hits; k++) {
      burst(g, out, t + Math.random() * (0.05 + i * 0.22), rand(0.03, 0.09), 'bandpass', rand(700, 3800), rand(3, 9), 0.3 + 0.4 * i, 0.0008);
    }
    const base = rand(220, 520);
    for (const r of [1, 1.5, 2.32, 3.7]) {                            // ringing panel
      tone(g, out, t + rand(0, 0.03), 'square', base * r, base * r * rand(0.98, 1.02), 0.25 + 0.3 * i, 0.03 * i * i, 0.002);
    }
  }
  if (i > 0.7) {                                                      // glass
    for (let k = 0; k < 5; k++) tone(g, out, t + rand(0, 0.35), 'sine', rand(3000, 6500), rand(2800, 6000), rand(0.08, 0.2), 0.05);
  }
}

// ============================================================================
// 7. Continuous loops: vehicle engine, skid, siren, helicopter, ambience
// ============================================================================

const ENGINES = {
  car:    { f0: 44, f1: 150, wave: 'sawtooth', cut0: 380, cut1: 2600, q: 1.2, level: 0.20, sub: 0.7, up: 0.5,  noise: 0.05, lope: 9,   lopeDepth: 0.12 },
  sports: { f0: 60, f1: 250, wave: 'sawtooth', cut0: 600, cut1: 5200, q: 1.5, level: 0.20, sub: 0.35, up: 0.8, noise: 0.10, lope: 14,  lopeDepth: 0.05 },
  truck:  { f0: 30, f1: 92,  wave: 'square',   cut0: 260, cut1: 1500, q: 1.0, level: 0.20, sub: 0.9, up: 0.3,  noise: 0.06, lope: 6,   lopeDepth: 0.30 },
  bus:    { f0: 28, f1: 84,  wave: 'sawtooth', cut0: 240, cut1: 1300, q: 1.0, level: 0.21, sub: 0.9, up: 0.25, noise: 0.06, lope: 5.5, lopeDepth: 0.28 },
};
const eng = { kind: null, rpm: 0, thr: 0, run: null };

/** Two saws + a square sub through a resonant low-pass, plus a lumpy idle LFO and intake hiss. */
function buildEngine(P) {
  const g = new Group(), t = ctx.currentTime;
  const out = g.gain(0), lp = g.filter('lowpass', P.cut0, P.q), mix = g.gain(1);
  chain(mix, lp, out, bus.engine);
  const o1 = g.osc(P.wave, P.f0, t), o2 = g.osc('square', P.f0 * 0.5, t), o3 = g.osc('sawtooth', P.f0 * 2.01, t);
  const g3 = g.gain(0);
  chain(o1, g.gain(0.6), mix); chain(o2, g.gain(0.3 * P.sub), mix); chain(o3, g3, mix);
  const lfo = g.osc('sine', P.lope, t), lfoG = g.gain(P.lopeDepth);
  chain(lfo, lfoG, mix.gain);                                       // amplitude "lope" of the cylinders
  const ng = g.gain(0);
  chain(g.noise(t), g.filter('bandpass', 1500, 1.2), ng, out);       // intake hiss
  return { g, out, lp, o1, o2, o3, g3, lfo, lfoG, ng, P };
}

function applyEngine(tc) {
  const r = eng.run, P = r.P, now = ctx.currentTime;
  const rpm = clamp(eng.rpm), thr = clamp(eng.thr);
  const f = P.f0 * Math.pow(P.f1 / P.f0, rpm);
  const bright = clamp(0.22 + 0.4 * rpm + 0.5 * thr);
  r.o1.frequency.setTargetAtTime(f, now, tc);
  r.o2.frequency.setTargetAtTime(f * 0.5, now, tc);
  r.o3.frequency.setTargetAtTime(f * 2.01, now, tc);
  r.lp.frequency.setTargetAtTime(P.cut0 * Math.pow(P.cut1 / P.cut0, bright), now, tc * 1.5);
  r.g3.gain.setTargetAtTime(P.up * thr, now, tc * 2);
  r.ng.gain.setTargetAtTime(P.noise * (0.2 + rpm) * thr, now, tc * 2);
  r.lfo.frequency.setTargetAtTime(P.lope * (0.6 + 1.6 * rpm), now, tc * 2);
  r.lfoG.gain.setTargetAtTime(P.lopeDepth * (1 - 0.8 * rpm), now, tc * 2);
  r.out.gain.setTargetAtTime(P.level * (0.55 + 0.3 * thr + 0.15 * rpm), now, tc * 2);
}

function engineStart(kind) {
  kind = kind === 'heli-none' || ENGINES[kind] ? kind : 'car';
  if (eng.kind === kind && (eng.run || kind === 'heli-none')) return;
  engineStop();
  eng.kind = kind;
  if (!audio.ready || kind === 'heli-none') return;
  eng.run = buildEngine(ENGINES[kind]);
  applyEngine(0.01);
}
function engineStop() {
  const r = eng.run;
  eng.run = null; eng.kind = null;
  if (!r || !ctx) return;
  const now = ctx.currentTime;
  r.out.gain.cancelScheduledValues(now);
  r.out.gain.setTargetAtTime(0, now, 0.05);
  r.g.release(now + 0.5);
}

function buildSkid() {
  const g = new Group(), t = ctx.currentTime;
  const level = g.gain(0), bp = g.filter('bandpass', 1500, 4), sg = g.gain(0.35);
  chain(level, bus.sfx);
  const o1 = g.osc('sawtooth', 780, t), o2 = g.osc('square', 1180, t);
  const wob = g.osc('sine', 23, t), wg = g.gain(60);
  chain(wob, wg, o1.frequency); wg.connect(o2.frequency);            // squeal wobble
  chain(o1, sg, bp); chain(o2, sg); chain(bp, level);
  chain(g.noise(t), g.filter('bandpass', 2600, 1.4), g.gain(0.7), level);   // rubber scrub
  return { g, level, bp };
}
function buildSiren() {
  const g = new Group(), t = ctx.currentTime;
  const level = g.gain(0), bp = g.filter('bandpass', 1050, 0.6);
  chain(level, bus.sfx);
  const a = g.osc('sawtooth', 950, t), b = g.osc('square', 950, t);
  b.detune.value = 5;
  const lfo = g.osc('triangle', 0.42, t), lg = g.gain(340);          // wail: 610..1290 Hz
  chain(lfo, lg, a.frequency); lg.connect(b.frequency);
  chain(a, g.gain(0.5), bp); chain(b, g.gain(0.25), bp); chain(bp, level);
  return { g, level };
}
function buildHeli() {
  const g = new Group(), t = ctx.currentTime;
  const level = g.gain(0), am = g.gain(0);
  chain(am, level, bus.sfx);
  const pulse = new Float32Array(512);                                // sharp, peaky blade pulse
  for (let i = 0; i < pulse.length; i++) pulse[i] = 0.05 + 0.95 * Math.pow(i / (pulse.length - 1), 5);
  const lfo = g.osc('sine', 9, t);
  chain(lfo, g.shaper(pulse), am.gain);
  chain(g.noise(t, undefined, brownBuf), g.filter('lowpass', 240, 0.8), g.gain(1.6), am);   // rotor chop
  chain(g.osc('sine', 58, t), g.gain(0.7), am);                                              // body thump
  chain(g.noise(t), g.filter('bandpass', 1900, 0.7), g.gain(0.22), am);                      // blade slap
  chain(g.osc('sine', 1350, t), g.gain(0.008), level);                                       // turbine whine
  return { g, level, lfo };
}
function buildAmbience() {
  const g = new Group(), t = ctx.currentTime;
  const level = g.gain(0);
  chain(level, bus.ambience);
  const rl = g.filter('lowpass', 260, 0.5), rg = g.gain(1.4);
  chain(g.noise(t, undefined, brownBuf), rl, rg, level);            // distant traffic
  chain(g.osc('sine', 0.05, t), g.gain(90), rl.frequency);
  chain(g.osc('sine', 0.09, t), g.gain(0.3), rg.gain);
  const wf = g.filter('bandpass', 620, 0.35), wg = g.gain(0.05);
  chain(g.noise(t), wf, wg, level);                                  // wind
  chain(g.osc('sine', 0.13, t), g.gain(0.03), wg.gain);
  chain(g.osc('sine', 0.031, t), g.gain(250), wf.frequency);
  chain(g.osc('sine', 55, t), g.gain(0.05), level);                  // city hum
  return { g, level };
}

// Smoothed one-level loops. build() is only called while the level is audible.
const LOOPS = {
  skid:  { up: 0.03, down: 0.10, scale: 0.5,  build: buildSkid,
           tune: (r, lv, now, tc) => r.bp.frequency.setTargetAtTime(1100 + 1100 * lv, now, tc) },
  siren: { up: 0.20, down: 0.15, scale: 0.35, build: buildSiren },
  heli:  { up: 0.25, down: 0.20, scale: 0.22,  build: buildHeli,
           tune: (r, lv, now, tc) => r.lfo.frequency.setTargetAtTime(8.5 + 4 * lv, now, tc * 2) },
  amb:   { up: 0.60, down: 0.50, scale: 0.12,  build: buildAmbience },
};
for (const L of Object.values(LOOPS)) Object.assign(L, { tgt: 0, cur: 0, run: null, sent: NaN });

function updateLoop(L, dt) {
  const tc = L.tgt > L.cur ? L.up : L.down;
  L.cur += (L.tgt - L.cur) * (1 - Math.exp(-dt / tc));               // JS mirror of the audible level
  if (!L.run) {
    if (L.tgt < 0.004) return;
    L.run = L.build(); L.sent = NaN;
  }
  const now = ctx.currentTime;
  if (L.sent !== L.tgt) {
    L.run.level.gain.setTargetAtTime(L.tgt * L.scale, now, tc);
    if (L.tune) L.tune(L.run, L.tgt, now, tc);
    L.sent = L.tgt;
  }
  if (L.tgt < 0.004 && L.cur < 0.004) {                              // faded out: tear the loop down
    L.run.level.gain.setTargetAtTime(0, now, 0.01);
    L.run.g.release(now + 0.1);
    L.run = null;
  }
}

// ============================================================================
// 8. Radio: drum kit and instrument voices
// ============================================================================

const drum = {
  kick(d, t, v = 1, f0 = 150, f1 = 46, dec = 0.17) {
    const g = new Group();
    tone(g, d, t, 'sine', f0, f1, dec, v, 0.002, dec * 0.4);
    burst(g, d, t, 0.012, 'highpass', 2500, 0.7, v * 0.25, 0.0005);
  },
  snare(d, t, v = 1, pitch = 185, dec = 0.15) {
    const g = new Group();
    burst(g, d, t, dec, 'highpass', 1400, 0.6, v * 0.75);
    tone(g, d, t, 'triangle', pitch * 1.5, pitch, 0.09, v * 0.55, 0.001, 0.04);
  },
  clap(d, t, v = 1) {
    const g = new Group(), n = g.noise(t, t + 0.35), bp = g.filter('bandpass', 1400, 1.2), a = g.gain(0);
    [0, 0.011, 0.023].forEach((dt, i) => {                          // three flams, then a short room tail
      const last = i === 2;
      a.gain.setValueAtTime(0.0001, t + dt);
      a.gain.linearRampToValueAtTime(v * 0.6, t + dt + 0.001);
      a.gain.exponentialRampToValueAtTime(last ? 0.0001 : v * 0.05, t + dt + (last ? 0.17 : 0.009));
    });
    chain(n, bp, a, d);
  },
  hat(d, t, v = 1, open = false) { burst(new Group(), d, t, open ? 0.2 : 0.035, 'highpass', 7200, 0.7, v * 0.3); },
  cymbal(d, t, v = 1) { burst(new Group(), d, t, 1.3, 'highpass', 5200, 0.6, v * 0.28, 0.002); },
  brush(d, t, v = 1, dur = 0.15) { burst(new Group(), d, t, dur, 'bandpass', 6000, 0.5, v * 0.2, dur * 0.4); },
};

/** Subtractive note: detuned oscillators -> low-pass (with envelope) -> ADSR-ish amp -> dest. */
function synth(dest, t, dur, freq, o, g = new Group()) {
  const { wave = 'sawtooth', voices = 1, spread = 8, vol = 0.2, a = 0.005, dec = 0, sus = 1, r = 0.08,
          cut = 4000, fenv = 0, fdec = 0.1, q = 0.7 } = o;
  dur = Math.max(dur, a + 0.01);
  const end = t + dur + r * 1.3;
  const amp = g.gain(0), lp = g.filter('lowpass', cut, q);
  amp.gain.setValueAtTime(0.0001, t);
  amp.gain.linearRampToValueAtTime(vol, t + a);
  if (dec) amp.gain.setTargetAtTime(Math.max(vol * sus, 0.0002), t + a, dec / 3);
  amp.gain.setTargetAtTime(0, t + dur, r / 5);
  if (fenv) { lp.frequency.setValueAtTime(cut * (1 + fenv), t); lp.frequency.setTargetAtTime(cut, t, fdec); }
  for (let i = 0; i < voices; i++) {
    const osc = g.osc(wave, freq, t, end);
    osc.detune.value = voices > 1 ? (i / (voices - 1) - 0.5) * 2 * spread : 0;
    osc.connect(lp);
  }
  chain(lp, amp, dest);
  return g;
}

/** Electric piano: 1:1 FM (the "bark"), decaying index, plus a short tine partial. */
function epiano(dest, t, dur, freq, vol = 0.2, bright = 1, g = new Group()) {
  dur = Math.max(dur, 0.03);
  const end = t + dur + 0.5;
  const car = g.osc('sine', freq, t, end), mod = g.osc('sine', freq, t, end), mg = g.gain(0);
  mg.gain.setValueAtTime(freq * 1.4 * bright, t);
  mg.gain.setTargetAtTime(freq * 0.12, t, 0.18);
  chain(mod, mg, car.frequency);
  const amp = g.gain(0);
  amp.gain.setValueAtTime(0.0001, t);
  amp.gain.linearRampToValueAtTime(vol, t + 0.006);
  amp.gain.setTargetAtTime(vol * 0.3, t + 0.006, 0.3);
  amp.gain.setTargetAtTime(0, t + dur, 0.07);
  chain(car, amp, dest);
  const tine = g.osc('sine', freq * 7, t, t + 0.12), tg = g.gain(0);
  env(tg.gain, t, vol * 0.08 * bright, 0.001, 0.08);
  chain(tine, tg, amp);
  return g;
}

/** FM bell / mallet: inharmonic 1:3.5 modulator with a fast-dying index. */
function bell(dest, t, freq, vol = 0.2, dec = 1.0, g = new Group()) {
  const end = t + dec + 0.1;
  const car = g.osc('sine', freq, t, end), mod = g.osc('sine', freq * 3.5, t, end), mg = g.gain(0);
  mg.gain.setValueAtTime(freq * 2.2, t);
  mg.gain.setTargetAtTime(0, t, dec * 0.12);
  chain(mod, mg, car.frequency);
  const amp = g.gain(0);
  env(amp.gain, t, vol, 0.002, dec);
  chain(car, amp, dest);
  return g;
}

/** 808 kick-bass: sine with a fast pitch drop and a long decay (saturate downstream). */
function sub808(dest, t, dur, freq, vol) {
  const g = new Group(), end = t + dur + 0.3;
  const o = g.osc('sine', freq * 2.2, t, end), a = g.gain(0);
  sweep(o.frequency, t, freq * 2.2, freq, 0.04);
  a.gain.setValueAtTime(0.0001, t);
  a.gain.linearRampToValueAtTime(vol, t + 0.004);
  a.gain.setTargetAtTime(vol * 0.55, t + 0.004, 0.25);
  a.gain.setTargetAtTime(0, t + dur, 0.05);
  chain(o, a, dest);
}

/** Feedback echo bus: st.lead feeds st.mel dry plus a delayed, darkened copy. */
function addEcho(st, steps16, send, fb, cutoff, wet) {
  const g = st.g;
  st.lead = g.gain(1);
  const dl = g.track(ctx.createDelay(2)), f = g.gain(fb), lp = g.filter('lowpass', cutoff, 0.5);
  dl.delayTime.value = st.sd * steps16;
  chain(st.lead, st.mel);
  chain(st.lead, g.gain(send), dl, lp, g.gain(wet), st.mel);
  chain(lp, f, dl);
}
/** Sidechain-style duck on the melodic bus. */
function pump(st, t, dur) {
  const p = st.mel.gain;
  p.setValueAtTime(1, t);
  p.linearRampToValueAtTime(0.3, t + 0.006);
  p.linearRampToValueAtTime(1, t + dur);
}

// ============================================================================
// 9. Radio: the four stations (each an 8-bar, 16-steps-per-bar loop)
//     step(st, s, bar, t, sd): schedule everything that happens on 16th `s`.
// ============================================================================

// ---- Costa Rock 101: 128 bpm E-minor power-chord rock --------------------
const ROCK = {
  bpm: 128, bars: 8, gain: 0.5,
  prog: [40, 40, 36, 38, 40, 40, 36, [38, 35]],                   // E E C D | E E C D->B  (bass root, midi)
  kickA: 'x.....x.x.x.....', kickB: 'x.....x.x.x.x.x.',
  gtrA: 'X.x.x.xxX.x.x.x.', gtrB: 'X..xX.x.X..xX.xx',            // X = held chord, x = palm mute
  bassOct: [0, 0, 0, 12, 0, 0, 7, 0],
  lead: [                                                          // [step, midi, steps]
    [[0, 76, 6], [8, 79, 4], [12, 81, 4]],
    [[0, 83, 8], [8, 81, 4], [12, 79, 4]],
    [[0, 79, 6], [8, 76, 4], [12, 79, 4]],
    [[0, 81, 4], [4, 86, 4], [8, 83, 4], [12, 81, 4]],
    [[0, 88, 6], [6, 86, 2], [8, 83, 4], [12, 86, 4]],
    [[0, 83, 4], [4, 86, 4], [8, 88, 8]],
    [[0, 84, 4], [4, 79, 4], [8, 76, 4], [12, 79, 4]],
    [[0, 81, 4], [4, 86, 4], [8, 83, 4], [12, 78, 4]],
  ],
  setup(st) {
    const g = st.g;
    st.gtr = g.gain(1);                                            // shared distortion + cab for guitars and lead
    chain(st.gtr, g.shaper(distCurve(6), '2x'), g.filter('highpass', 100, 0.7), g.filter('lowpass', 3400, 0.7), st.mel);
    st.mel.gain.value = 0.75;
  },
  step(st, s, bar, t, sd) {
    const e = this.prog[bar], root = Array.isArray(e) ? e[s < 8 ? 0 : 1] : e;
    const b4 = bar & 3, fill = b4 === 3, d = st.dry;
    if (s === 0 && b4 === 0) drum.cymbal(d, t, 0.8);
    if ((fill ? this.kickB : this.kickA)[s] === 'x') drum.kick(d, t, 1, 150, 48, 0.16);
    if (s === 4 || s === 12) drum.snare(d, t, 1, 190);
    else if (fill && s > 12) drum.snare(d, t, 0.35 + (s - 12) * 0.15, 220 - (s - 12) * 10, 0.1);
    if (s % 2 === 0) drum.hat(d, t, s % 4 === 0 ? 0.85 : 0.55, s === 14 && !fill);
    if (s % 2 === 0) {                                             // driving eighth-note bass
      synth(st.mel, t, sd * 1.7, mtof(root + this.bassOct[s >> 1]),
        { voices: 2, spread: 4, vol: 0.3, a: 0.004, r: 0.05, cut: 650, fenv: 1.2, fdec: 0.06 });
    }
    const c = (bar < 4 ? this.gtrA : this.gtrB)[s];
    if (c !== '.') {                                               // power chord: root, fifth, octave
      const len = c === 'X' ? sd * 2.9 : sd * 0.8;
      for (const iv of [12, 19, 24]) {
        synth(st.gtr, t, len, mtof(root + iv), { voices: 2, spread: 9, vol: 0.09, a: 0.003, r: 0.04, cut: 3000, q: 0.5 });
      }
    }
    for (const [ls, n, len] of this.lead[bar]) {
      if (ls === s) synth(st.gtr, t, len * sd * 0.95, mtof(n), { voices: 2, spread: 12, vol: 0.05, a: 0.01, r: 0.1, cut: 3800 });
    }
  },
};

// ---- Wave FM: 100 bpm 80s synthwave, A minor -------------------------------
const ch = (b, ...p) => ({ b, p });                                // bass root + pad voicing
const WAVE = {
  bpm: 100, bars: 8, gain: 0.95,
  prog: [ch(45, 57, 60, 64, 67), ch(41, 53, 57, 60, 64), ch(48, 52, 55, 60, 64), ch(43, 55, 59, 62, 67),
         ch(45, 57, 60, 64, 67), ch(41, 53, 57, 60, 64), ch(43, 55, 59, 62, 67), ch(40, 52, 56, 59, 64)],
  arpSeq: [0, 1, 2, 3, 2, 1, 2, 3, 0, 1, 2, 3, 2, 1, 2, 1],
  gate: [1, 0.3, 1, 1, 0.3, 1, 1, 0.3, 1, 0.3, 1, 1, 0.3, 1, 1, 0.3],   // 3-3-2 gated pad
  lead: [
    [[0, 76, 12]], [[0, 77, 12]], [[0, 79, 8], [8, 76, 8]], [[0, 79, 4], [4, 83, 4], [8, 86, 8]],
    [[0, 81, 6], [8, 84, 4], [12, 83, 4]], [[0, 81, 6], [8, 77, 4], [12, 81, 4]],
    [[0, 83, 8], [8, 86, 8]], [[0, 80, 6], [8, 83, 4], [12, 88, 4]],
  ],
  setup(st) { addEcho(st, 3, 0.35, 0.38, 2600, 0.7); },            // dotted-eighth echo on arp + lead
  step(st, s, bar, t, sd) {
    const c = this.prog[bar], d = st.dry;
    if (s % 4 === 0) { drum.kick(d, t, 1, 135, 44, 0.19); pump(st, t, sd * 3.4); }
    if (s === 4 || s === 12) { drum.clap(d, t, 0.75); drum.snare(d, t, 0.45, 175, 0.24); }
    if (s % 4 === 2) drum.hat(d, t, 0.6, true); else if (s & 1) drum.hat(d, t, 0.2);
    synth(st.mel, t, sd * 0.8, mtof(c.b + ((s & 3) === 3 ? 12 : 0)),          // pulsing octave bass
      { voices: 2, spread: 7, vol: 0.2, a: 0.003, r: 0.03, cut: 500, fenv: 3.5, fdec: 0.07, q: 2.5 });
    if (s === 0) this.pad(st, c, t, sd);
    synth(st.lead, t, sd * 0.85, mtof(c.p[this.arpSeq[s]] + 12),
      { wave: 'square', vol: 0.055, a: 0.002, dec: 0.06, sus: 0.25, r: 0.04, cut: 2400, fenv: 2, fdec: 0.12 });
    for (const [ls, n, len] of this.lead[bar]) {
      if (ls === s) synth(st.lead, t, len * sd * 0.95, mtof(n), { voices: 3, spread: 10, vol: 0.06, a: 0.02, r: 0.15, cut: 3200 });
    }
  },
  pad(st, c, t, sd) {                                              // one bar of gated, slowly filtered saws
    const g = new Group(), dur = sd * 16, end = t + dur + 0.6;
    const lp = g.filter('lowpass', 700, 0.7), gate = g.gain(1), amp = g.gain(0);
    lp.frequency.setValueAtTime(600, t);
    lp.frequency.linearRampToValueAtTime(2400, t + dur * 0.55);
    lp.frequency.linearRampToValueAtTime(1000, t + dur);
    this.gate.forEach((v, i) => gate.gain.setTargetAtTime(v, t + i * sd, 0.012));
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(0.09, t + 0.25);
    amp.gain.setTargetAtTime(0, t + dur - 0.05, 0.15);
    for (const n of c.p) for (const det of [-9, 9]) { const o = g.osc('sawtooth', mtof(n), t, end); o.detune.value = det; o.connect(lp); }
    chain(lp, gate, amp, st.mel);
  },
};

// ---- Sunset Lounge: 84 bpm jazzy ii-V-I turnarounds in C ---------------------
const LOUNGE = {
  bpm: 84, bars: 8, gain: 1.1,
  swing: (s) => (s % 4 === 2 ? 0.667 : 0),                         // triplet-swung eighths
  prog: [                                                          // r = bass root, t = third, v = rootless voicing
    { r: 36, t: 4, v: [64, 67, 71, 74] },                           // Cmaj9
    { r: 33, t: 3, v: [60, 64, 67, 71] },                           // Am9
    { r: 38, t: 3, v: [65, 69, 72, 76] },                           // Dm9
    { r: 43, t: 4, v: [59, 65, 69, 76] },                           // G13
    { r: 40, t: 3, v: [55, 59, 62, 67] },                           // Em7
    { r: 45, t: 4, v: [55, 61, 64, 70] },                           // A7b9
    [{ r: 38, t: 3, v: [65, 69, 72, 76] }, { r: 43, t: 4, v: [59, 65, 69, 76] }],   // Dm9 | G13
    { r: 36, t: 4, v: [64, 67, 71, 74] },                           // Cmaj9
  ],
  comp: [[[0, 5, 0.9], [6, 2, 0.7], [10, 4, 0.8]], [[0, 8, 0.85], [10, 2, 0.6], [14, 2, 0.7]]],
  ride: [1, 0, 0, 0, 0.7, 0, 0.5, 0, 0.8, 0, 0, 0, 0.7, 0, 0.5, 0],
  mel: [
    [[2, 79, 4], [8, 83, 4], [12, 81, 3]], [[0, 84, 6], [8, 83, 3], [12, 79, 4]],
    [[2, 77, 4], [8, 81, 4], [12, 84, 4]], [[0, 83, 6], [8, 81, 3], [12, 76, 4]],
    [[2, 79, 4], [8, 83, 6], [14, 86, 2]], [[0, 85, 6], [8, 82, 4], [12, 81, 4]],
    [[0, 77, 4], [4, 81, 4], [8, 83, 4], [12, 79, 4]], [[0, 79, 12]],
  ],
  halves(bar) { const e = this.prog[bar]; return Array.isArray(e) ? e : [e, e]; },
  setup(st) { addEcho(st, 3, 0.25, 0.3, 2000, 0.5); },
  step(st, s, bar, t, sd) {
    const d = st.dry, [A, B] = this.halves(bar);
    if (s % 4 === 0) {                                             // walking bass: root, 3rd/5th, root/5th, chromatic approach
      const beat = s >> 2, nx = this.halves((bar + 1) % 8)[0];
      let n;
      if (beat === 0) n = A.r;
      else if (beat === 1) n = A === B ? A.r + A.t : A.r + 7;
      else if (beat === 2) n = B.r + (A === B ? 7 : 0);
      else n = nx.r + (nx.r >= B.r ? -1 : 1);
      synth(st.mel, t, sd * 3.6, mtof(n),
        { wave: 'triangle', vol: 0.5, a: 0.008, dec: 0.3, sus: 0.3, r: 0.07, cut: 520, fenv: 1.5, fdec: 0.1 });
    }
    for (const [cs, len, vel] of this.comp[bar & 1]) {             // strummed electric-piano comping
      if (cs !== s) continue;
      const late = Math.random() * 0.012;
      (s < 8 ? A : B).v.forEach((n, i) => epiano(st.lead, t + late + i * 0.011, len * sd, mtof(n), 0.085 * vel * rand(0.85, 1.1)));
    }
    for (const [ms, n, len] of this.mel[bar]) {
      if (ms === s) synth(st.lead, t, len * sd, mtof(n),
        { wave: 'triangle', vol: 0.11, a: 0.012, dec: 0.35, sus: 0.4, r: 0.25, cut: 2400 });
    }
    if (s === 0) drum.kick(d, t, 0.4, 120, 52, 0.16);
    if (s === 10 && (bar & 1)) drum.kick(d, t, 0.22, 110, 52, 0.14);
    if (this.ride[s]) drum.brush(d, t, this.ride[s], 0.12);
    if (s === 4 || s === 12) { drum.hat(d, t, 0.22); drum.brush(d, t, 0.55, 0.2); }
  },
};

// ---- Street Beats: 90 bpm boom-bap in D minor ------------------------------
const STREET = {
  bpm: 90, bars: 8, gain: 0.43,
  swing: (s) => (s & 1 ? 0.3 : 0),                                 // swung sixteenths
  roots: [38, 38, 34, 33, 38, 38, 31, 33],                         // Dm Dm Bb A | Dm Dm Gm A (808 root, midi)
  stab: [[62, 65, 69, 72], [62, 65, 69, 72], [58, 62, 65, 69], [55, 61, 64, 69],
         [62, 65, 69, 72], [62, 65, 69, 72], [58, 62, 65, 67], [55, 61, 64, 69]],
  kick: ['x.....x...x.....', 'x..x....x.....x.'],
  b808: [[[0, 0, 5], [6, 0, 2], [10, 0, 3]], [[0, 0, 6], [8, 0, 2], [11, 7, 3]]],   // [step, semitones, steps]
  hats: [1, 0, 0.5, 0, 0.9, 0, 0.5, 0.35, 1, 0, 0.5, 0, 0.9, 0, 0.5, 0.45],
  bells: [
    [[2, 81, 2], [6, 77, 2], [10, 74, 3]], [[0, 74, 2], [4, 77, 2], [8, 81, 4]],
    [[2, 77, 2], [6, 74, 2], [10, 70, 4]], [[0, 73, 2], [4, 76, 2], [8, 81, 4]],
    [[2, 81, 2], [6, 84, 2], [8, 81, 2], [12, 77, 4]], [[4, 77, 2], [10, 74, 2], [14, 72, 2]],
    [[2, 79, 2], [6, 74, 2], [10, 70, 4]], [[0, 73, 2], [4, 76, 2], [8, 79, 2], [12, 81, 4]],
  ],
  setup(st) {
    const g = st.g;
    st.sat = g.gain(1);                                            // 808 saturation bus
    chain(st.sat, g.shaper(distCurve(2.2)), g.filter('lowpass', 900, 0.7), st.dry);
    st.stab = g.gain(1);                                           // dusty low-passed chord stabs
    chain(st.stab, g.filter('lowpass', 1300, 0.6), st.mel);
    addEcho(st, 3, 0.3, 0.32, 2200, 0.6);
  },
  step(st, s, bar, t, sd) {
    const d = st.dry, odd = bar & 1;
    if (this.kick[odd][s] === 'x') drum.kick(d, t, 0.8, 120, 44, 0.2);
    if (s === 4 || s === 12) drum.snare(d, t, 1, 200, 0.16);
    else if (s === 15 && odd) drum.snare(d, t, 0.25, 210, 0.06);   // ghost note
    if (this.hats[s]) drum.hat(d, t, this.hats[s] * 0.85, s === 14 && odd === 1);
    for (const [bs, semi, len] of this.b808[odd]) {
      if (bs === s) sub808(st.sat, t, len * sd, mtof(this.roots[bar] + semi), 0.9);
    }
    if (s === 0 || (s === 7 && !odd)) {
      const len = s === 0 ? 6 : 2, vel = s === 0 ? 1 : 0.6;
      this.stab[bar].forEach((n, i) => epiano(st.stab, t + i * 0.008, len * sd, mtof(n), 0.09 * vel, 0.8));
    }
    for (const [bs, n, len] of this.bells[bar]) if (bs === s) bell(st.lead, t, mtof(n), 0.07, 0.5 + len * sd);
  },
};

const SONGS = [ROCK, WAVE, LOUNGE, STREET];      // index-aligned with radio.stations

// ============================================================================
// 10. Radio: lookahead scheduler, station switching, public radio object
// ============================================================================

let station = null;        // running station state, or null
let radioTimer = null;

function makeStation(def) {
  const g = new Group();   // persistent nodes (curOwner is null here)
  const out = g.gain(0.0001), dry = g.gain(1), mel = g.gain(1);
  chain(dry, out); chain(mel, out); chain(out, bus.radio);
  const st = { def, g, out, dry, mel, groups: new Set(), step: 0, nextTime: 0, sd: 60 / def.bpm / 4 };
  if (def.setup) def.setup(st);
  return st;
}

/** Brief tuning-static burst with a heterodyne whistle, sent to the radio bus. */
function staticBurst() {
  shot(bus.radio, 1, 0, (g, out, t) => {
    const n = g.noise(t, t + 0.3), bp = g.filter('bandpass', 2400, 0.7), a = g.gain(0);
    for (let i = 0; i < 6; i++) bp.frequency.setValueAtTime(rand(500, 5000), t + i * 0.03);
    a.gain.setValueAtTime(0.0001, t);
    a.gain.linearRampToValueAtTime(0.7, t + 0.015);
    a.gain.setValueAtTime(0.7, t + 0.11);
    a.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
    chain(n, bp, a, out);
    tone(g, out, t, 'sine', 700, 2400, 0.18, 0.15, 0.01);
  }, 0.5);
}

function startStation(i, withStatic) {
  stopStation();
  const def = SONGS[i];
  if (!def || !audio.ready) return;
  const st = makeStation(def), now = ctx.currentTime;
  st.out.gain.setValueAtTime(0.0001, now);
  st.out.gain.setTargetAtTime(def.gain, now, 0.04);                // ~150 ms crossfade in
  st.nextTime = now + 0.05;
  station = st;
  if (withStatic) staticBurst();
  if (!isOffline && radioTimer === null) radioTimer = setInterval(radioTick, TICK_MS);
  radioTick();
}

function stopStation() {
  const st = station;
  station = null;
  if (!st || !ctx) return;
  const now = ctx.currentTime;
  st.out.gain.cancelScheduledValues(now);
  st.out.gain.setTargetAtTime(0, now, 0.04);                       // ~150 ms crossfade out
  st.g.release(now + 0.35);
  for (const g of st.groups) g.release(now + 0.35);
  setTimeout(() => { for (const g of [...st.groups]) g.dispose(); st.g.dispose(); }, 900);
}

/** Schedule every 16th note that falls inside the lookahead window. */
function radioTick() {
  const st = station;
  if (!st || !audio.ready || paused) return;
  const now = ctx.currentTime;
  if (st.nextTime < now - 0.05) {                                  // fell behind (throttled tab): skip ahead, keep the grid
    const skip = Math.ceil((now - st.nextTime) / st.sd);
    st.step += skip; st.nextTime += skip * st.sd;
  }
  const horizon = now + LOOKAHEAD, def = st.def;
  curOwner = st.groups;
  try {
    for (let guard = 0; st.nextTime < horizon && guard < 64; guard++) {
      const s = st.step & 15, bar = (st.step >> 4) % def.bars;
      def.step(st, s, bar, st.nextTime + (def.swing ? def.swing(s) * st.sd : 0), st.sd);
      st.step++; st.nextTime += st.sd;
    }
  } finally { curOwner = null; }
}

function setStation(i) {
  radio.index = i;
  if (i < 0) {
    stopStation();
    if (radioTimer !== null) { clearInterval(radioTimer); radioTimer = null; }
  } else startStation(i, true);
  if (typeof radio.onChange === 'function') { try { radio.onChange(i, radio.name); } catch (e) { /* user callback */ } }
}

const radio = {
  stations: [
    { name: 'Costa Rock 101', genre: 'rock' },
    { name: 'Wave FM', genre: 'synthwave' },
    { name: 'Sunset Lounge', genre: 'chill' },
    { name: 'Street Beats', genre: 'hiphop' },
  ],
  index: -1,
  on() { if (radio.index < 0) setStation(0); else if (!station) startStation(radio.index, false); },
  off() { if (radio.index !== -1) setStation(-1); },
  next() { let i = radio.index + 1; if (i >= radio.stations.length) i = -1; setStation(i); },
  prev() { let i = radio.index - 1; if (i < -1) i = radio.stations.length - 1; setStation(i); },
  get name() { return radio.index < 0 ? 'Radio Off' : radio.stations[radio.index].name; },
  onChange: null,
};

// ============================================================================
// 11. Public API
// ============================================================================

export const audio = {
  ready: false,
  _errors: [],            // exceptions swallowed by the public-method guard (for tests / debugging)

  // ---- lifecycle ----------------------------------------------------------
  init(c) {
    if (audio.ready) return;
    const AC = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext);
    if (!c && !AC) return;
    ctx = c || new AC();
    isOffline = typeof OfflineAudioContext !== 'undefined' && ctx instanceof OfflineAudioContext;
    try { buildGraph(); } catch (e) { ctx = null; throw e; }
    paused = false;
    audio.ready = true;
    if (!isOffline && ctx.state === 'suspended') { const p = ctx.resume(); if (p && p.catch) p.catch(noop); }
    if (eng.kind && eng.kind !== 'heli-none' && !eng.run) { const k = eng.kind; eng.kind = null; engineStart(k); }
    if (radio.index >= 0) startStation(radio.index, false);
  },
  suspend() {
    if (!ctx) return;
    paused = true;
    try { const p = ctx.suspend(); if (p && p.catch) p.catch(noop); } catch (e) { /* offline contexts need a time */ }
  },
  resume() {
    if (!ctx) return;
    paused = false;
    if (isOffline) return;
    const p = ctx.resume(); if (p && p.catch) p.catch(noop);
  },
  setVolume(v) {
    volume = clamp(num(v, volume));
    if (master) master.gain.setTargetAtTime(volume, ctx.currentTime, 0.02);
  },
  /** Per-frame tick: radio scheduler, smoothing of engine and loop levels. */
  update(dt) {
    if (!audio.ready) return;
    radioTick();
    if (paused) return;
    updateAcc += clamp(num(dt, 0.016), 0, 0.25);
    if (updateAcc < 0.025) return;
    const d = updateAcc;
    updateAcc = 0;
    if (eng.run) applyEngine(0.06);
    for (const L of Object.values(LOOPS)) updateLoop(L, d);
  },

  // ---- weapons ------------------------------------------------------------
  gunshot(kind, vol = 1, pan = 0) {
    if (kind === 'rpg') return shot(bus.sfx, vol, pan, rpgVoice, 1.8);
    const P = GUNS[kind] || GUNS.pistol;
    shot(bus.sfx, vol, pan, (g, out, t) => gunVoice(g, out, t, P), P.trim);
  },
  reload(vol = 1) {
    shot(bus.sfx, vol, 0, (g, out, t) => {
      const click = (dt, f, v) => burst(g, out, t + dt, 0.025, 'bandpass', f, 5, v, 0.0005);
      click(0.00, 1600, 0.6); click(0.05, 800, 0.4);                                   // magazine out
      click(0.42, 1200, 0.7); click(0.46, 2600, 0.5);                                  // magazine in
      tone(g, out, t + 0.42, 'square', 300, 200, 0.03, 0.15);
      burst(g, out, t + 0.78, 0.09, 'bandpass', 1800, 2, 0.5, 0.01, 900);              // slide rack
      click(0.86, 2000, 0.7); click(0.90, 1000, 0.5);
    }, 1.6);
  },
  dryFire(vol = 1) {
    shot(bus.sfx, vol, 0, (g, out, t) => {
      burst(g, out, t, 0.02, 'bandpass', 2400, 5, 0.8, 0.0005);
      tone(g, out, t, 'sine', 900, 500, 0.02, 0.3);
    }, 2.5);
  },
  punch(vol = 1, pan = 0) {
    shot(bus.sfx, vol, pan, (g, out, t) => {
      tone(g, out, t, 'sine', 160, 50, 0.13, 0.9, 0.002, 0.1);
      burst(g, out, t, 0.07, 'lowpass', 900, 0.8, 0.7);
      burst(g, out, t, 0.03, 'bandpass', 1500, 1, 0.5);
    }, 1.6);
  },
  explosion(vol = 1, pan = 0) { shot(bus.sfx, vol, pan, explosionVoice, 0.5); },
  bulletHit(vol = 1, pan = 0) {
    shot(bus.sfx, vol, pan, (g, out, t) => {
      burst(g, out, t, 0.02, 'bandpass', rand(2800, 4200), 2, 0.8, 0.0005);
      if (Math.random() < 0.6) {                                                        // ricochet whine
        const f = rand(2200, 4200);
        tone(g, out, t + 0.005, 'sine', f, f / 2.3, 0.18, 0.2, 0.002);
        tone(g, out, t + 0.005, 'sine', f * 2.76, f * 1.3, 0.1, 0.05, 0.002);
      }
    }, 2.2);
  },
  crash(intensity = 1, vol = 1, pan = 0) {
    const i = clamp(num(intensity, 1));
    shot(bus.sfx, vol, pan, (g, out, t) => crashVoice(g, out, t, i), 2.0);
  },

  // ---- voices ---------------------------------------------------------------
  scream(vol = 1, pan = 0) { shot(bus.sfx, vol, pan, screamVoice, 0.4); },
  pain(vol = 1) {
    shot(bus.sfx, vol, 0, (g, out, t) => formantVoice(g, out, t, {
      dur: 0.3, f: [135, 150, 88], atk: 0.02, breath: 0.12,
      form: [[520, 460, 3, 1.2], [1050, 900, 4, 1.0]],
    }), 0.42);
  },
  horn(on, variant = 0) { if (on) hornStart(variant); else hornStop(); },

  // ---- foley / UI -----------------------------------------------------------
  doorOpen() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      burst(g, out, t, 0.02, 'bandpass', 2600, 6, 0.5, 0.0005);                        // latch
      tone(g, out, t + 0.02, 'sine', 110, 70, 0.09, 0.4);                              // thunk
      const o = g.osc('sawtooth', 170, t + 0.05, t + 0.5), bp = g.filter('bandpass', 600, 3), a = g.gain(0);
      sweep(o.frequency, t + 0.05, 170, 260, 0.3);                                     // hinge creak
      env(a.gain, t + 0.05, 0.1, 0.05, 0.3);
      chain(o, bp, a, out);
    }, 1.5);
  },
  doorClose() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      tone(g, out, t, 'sine', 150, 55, 0.14, 0.8, 0.002, 0.1);                         // heavy thunk
      burst(g, out, t, 0.08, 'lowpass', 800, 0.8, 0.5);
      burst(g, out, t + 0.07, 0.02, 'bandpass', 2200, 6, 0.5, 0.0005);                 // latch
    }, 1.6);
  },
  pickup() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      tone(g, out, t, 'triangle', 988, 988, 0.16, 0.5, 0.002);
      tone(g, out, t + 0.07, 'triangle', 1319, 1319, 0.26, 0.5, 0.002);
      tone(g, out, t + 0.07, 'sine', 2638, 2638, 0.15, 0.12, 0.002);
    }, 1.0);
  },
  cash() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      burst(g, out, t, 0.02, 'bandpass', 1800, 5, 0.4, 0.0005);                        // register "ka"
      [[0, 2093], [0.07, 3136]].forEach(([dt, f]) => {                                 // "ching": bell partials
        tone(g, out, t + dt, 'sine', f, f, 0.4, 0.35, 0.001);
        tone(g, out, t + dt, 'sine', f * 2.76, f * 2.76, 0.18, 0.12, 0.001);
      });
      burst(g, out, t + 0.06, 0.12, 'highpass', 7000, 0.7, 0.2, 0.002);                // coin shimmer
    }, 1.0);
  },
  click() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      tone(g, out, t, 'sine', 1800, 1200, 0.03, 0.4, 0.001);
      burst(g, out, t, 0.01, 'highpass', 3000, 0.7, 0.2, 0.0005);
    }, 1.4);
  },
  footstep(vol = 1) {
    shot(bus.sfx, vol, 0, (g, out, t) => {
      burst(g, out, t, 0.07, 'lowpass', rand(400, 900), 0.8, 0.5);
      tone(g, out, t, 'sine', rand(85, 105), 55, 0.06, 0.5, 0.002);
    }, 0.9);
  },

  // ---- stingers -------------------------------------------------------------
  wasted() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      const T = t + 0.5;
      const n = g.noise(t, T + 0.05), bp = g.filter('bandpass', 300, 1), a = g.gain(0);
      sweep(bp.frequency, t, 300, 3000, 0.5);                                          // reverse-cymbal swell
      a.gain.setValueAtTime(0.0001, t);
      a.gain.linearRampToValueAtTime(0.5, T);
      a.gain.setValueAtTime(0.0001, T + 0.01);
      chain(n, bp, a, out);
      tone(g, out, T, 'sine', 110, 28, 1.2, 1.0, 0.003, 0.8);                          // impact
      burst(g, out, T, 0.5, 'lowpass', 1500, 0.7, 0.6, 0.001, 120);
      for (const f of [110, 130.8, 155.6]) {                                           // sinking diminished drone
        synth(out, T, 1.6, f, { vol: 0.08, a: 0.05, dec: 1.4, sus: 0.2, r: 0.6, cut: 700, voices: 2, spread: 8 }, g)
          .srcs.slice(-2).forEach((o) => sweep(o.frequency, T, f, f * 0.89, 1.8));
      }
      tone(g, out, T + 0.9, 'sine', 80, 40, 0.35, 0.6, 0.003);                         // heartbeat
      tone(g, out, T + 1.15, 'sine', 75, 38, 0.35, 0.45, 0.003);
      g.send(out, 0.35);
    }, 0.6);
  },
  busted() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      tone(g, out, t, 'sine', 130, 42, 0.35, 0.9, 0.003, 0.2);                         // slam
      burst(g, out, t, 0.14, 'lowpass', 1400, 0.8, 0.6);
      const o = g.osc('sawtooth', 700, t + 0.04, t + 1.0), bp = g.filter('bandpass', 1100, 0.8), a = g.gain(0);
      o.frequency.setValueAtTime(700, t + 0.04);
      for (let i = 0; i < 8; i++) o.frequency.linearRampToValueAtTime(i % 2 ? 700 : 1350, t + 0.04 + (i + 1) * 0.1);   // police yelp
      a.gain.setValueAtTime(0.0001, t + 0.04);
      a.gain.linearRampToValueAtTime(0.4, t + 0.06);
      a.gain.setTargetAtTime(0, t + 0.75, 0.05);
      chain(o, bp, a, out);
      for (const n of [52, 55, 59]) synth(out, t + 0.02, 0.5, mtof(n), { voices: 2, vol: 0.08, r: 0.15, cut: 1400 }, g);   // minor stab
      for (const dt of [0.62, 0.74]) {                                                 // handcuffs
        burst(g, out, t + dt, 0.02, 'bandpass', 3200, 8, 0.7, 0.0005);
        tone(g, out, t + dt, 'triangle', 2400, 1800, 0.03, 0.18);
      }
    }, 1.2);
  },
  missionPass() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      const lead = { wave: 'square', voices: 2, spread: 6, vol: 0.09, a: 0.004, r: 0.12, cut: 3500 };
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => synth(out, t + i * 0.1, 0.16, f, lead, g));   // rising C arpeggio
      for (const f of [523.25, 659.25, 783.99, 1046.5]) {                                                // held C major chord
        synth(out, t + 0.45, 1.0, f, { voices: 2, spread: 8, vol: 0.07, a: 0.01, r: 0.4, cut: 3000 }, g);
      }
      burst(g, out, t + 0.45, 1.1, 'highpass', 6000, 0.7, 0.25, 0.002);                // cymbal
      tone(g, out, t, 'sine', 120, 50, 0.2, 0.6, 0.002, 0.12);
      g.send(out, 0.3);
    }, 1.2);
  },
  missionFail() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      const wah = { voices: 2, spread: 10, vol: 0.12, a: 0.03, dec: 0.25, sus: 0.6, r: 0.15, cut: 900, fenv: 1.5, fdec: 0.2 };
      [[329.6, 0, 0.3], [293.7, 0.32, 0.3], [261.6, 0.64, 0.3], [220, 0.96, 1.0]]
        .forEach(([f, dt, dur]) => synth(out, t + dt, dur, f, wah, g));                // sad descending line
      for (const f of [110, 130.8, 164.8]) synth(out, t + 0.96, 1.0, f, { voices: 2, vol: 0.06, a: 0.05, r: 0.5, cut: 600 }, g);
      tone(g, out, t + 0.96, 'sine', 55, 45, 1.2, 0.5, 0.01);
      g.send(out, 0.3);
    }, 0.95);
  },
  wantedUp() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      const o = g.osc('sawtooth', 620, t, t + 0.45), bp = g.filter('bandpass', 1000, 0.8), a = g.gain(0);
      o.frequency.setValueAtTime(620, t);
      o.frequency.linearRampToValueAtTime(1240, t + 0.18);
      o.frequency.linearRampToValueAtTime(620, t + 0.36);
      a.gain.setValueAtTime(0.0001, t);
      a.gain.linearRampToValueAtTime(0.45, t + 0.02);
      a.gain.setTargetAtTime(0, t + 0.3, 0.03);
      chain(o, bp, a, out);
      tone(g, out, t + 0.36, 'sine', 1568, 1568, 0.5, 0.35, 0.002);                     // star ping
      tone(g, out, t, 'sine', 90, 55, 0.2, 0.5, 0.003);
    }, 1.4);
  },
  wantedClear() {
    shot(bus.sfx, 1, 0, (g, out, t) => {
      [[659.25, 0], [880, 0.14], [1318.5, 0.28]].forEach(([f, dt]) => {                 // relieved rising chime
        tone(g, out, t + dt, 'triangle', f, f, 0.7, 0.35, 0.004);
        tone(g, out, t + dt, 'sine', f * 2, f * 2, 0.35, 0.08, 0.004);
      });
      g.send(out, 0.4);
    }, 1.05);
  },

  // ---- continuous loops (setters just store the target; update() smooths) ----
  engine: {
    start(kind) { engineStart(kind); },
    set(rpm01, throttle01) { eng.rpm = clamp(num(rpm01, 0)); eng.thr = clamp(num(throttle01, 0)); },
    stop() { engineStop(); },
  },
  skid(level) { LOOPS.skid.tgt = clamp(num(level, 0)); },
  siren(level) { LOOPS.siren.tgt = clamp(num(level, 0)); },
  heli(level) { LOOPS.heli.tgt = clamp(num(level, 0)); },
  ambience(level) { LOOPS.amb.tgt = clamp(num(level, 0)); },

  radio,
};

// ============================================================================
// 12. Guard: no public method may ever throw
// ============================================================================

function guardAll(obj) {
  for (const key of Object.keys(obj)) {
    const desc = Object.getOwnPropertyDescriptor(obj, key);
    if (!desc || desc.get || desc.set) continue;
    const v = desc.value;
    if (typeof v === 'function') {
      obj[key] = function guarded(...args) {
        try { return v.apply(obj, args); } catch (e) {
          if (audio._errors.length < 20) audio._errors.push(e);
          if (audio._errors.length <= 3 && typeof console !== 'undefined') console.warn('[audio]', key, e);
          return undefined;
        }
      };
    } else if (v && typeof v === 'object' && !Array.isArray(v) && key !== '_errors') guardAll(v);
  }
}
guardAll(audio);
