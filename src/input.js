// Keyboard / mouse state with per-frame edge detection.
const down = new Set();
const pressedThisFrame = new Set();
const mouseButtons = new Set();
const mousePressed = new Set();
let dx = 0, dy = 0, wheel = 0;

export const Input = {
  locked: false,
  dragLook: false,     // fallback when pointer lock unavailable
  down: (c) => down.has(c),
  pressed: (c) => pressedThisFrame.has(c),
  mouse: (b) => mouseButtons.has(b),
  mousePressed: (b) => mousePressed.has(b),
  takeMouse() { const r = { dx, dy }; dx = 0; dy = 0; return r; },
  takeWheel() { const w = wheel; wheel = 0; return w; },
  endFrame() { pressedThisFrame.clear(); mousePressed.clear(); },
  reset() { down.clear(); mouseButtons.clear(); pressedThisFrame.clear(); mousePressed.clear(); dx = dy = wheel = 0; },
  _keys: down, _pressed: pressedThisFrame, _mouse: mouseButtons, _mousePressed: mousePressed, addLook(x, y) { dx += x; dy += y; },
  onKey: null, // optional callback(code) for cheat detection
};

const BLOCKED = new Set(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab']);

export function initInput(canvas) {
  window.addEventListener('keydown', (e) => {
    if (BLOCKED.has(e.code)) e.preventDefault();
    if (e.repeat) return;
    down.add(e.code);
    pressedThisFrame.add(e.code);
    if (Input.onKey) Input.onKey(e.code, e);
  });
  window.addEventListener('keyup', (e) => { down.delete(e.code); });
  window.addEventListener('blur', () => Input.reset());
  window.addEventListener('mousedown', (e) => {
    if (!Input.locked && !Input.dragLook) return;
    mouseButtons.add(e.button); mousePressed.add(e.button);
  });
  window.addEventListener('mouseup', (e) => { mouseButtons.delete(e.button); });
  window.addEventListener('contextmenu', (e) => e.preventDefault());
  window.addEventListener('mousemove', (e) => {
    if (Input.locked || Input.dragLook) { dx += e.movementX || 0; dy += e.movementY || 0; }
  });
  window.addEventListener('wheel', (e) => { if (Input.locked || Input.dragLook) wheel += Math.sign(e.deltaY); }, { passive: true });
  document.addEventListener('pointerlockchange', () => {
    Input.locked = document.pointerLockElement === canvas;
    if (!Input.locked) { mouseButtons.clear(); }
    if (Input.onLockChange) Input.onLockChange(Input.locked);
  });
}
