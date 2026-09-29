// Shared mutable game state / service registry. Modules read what they need from G at call time,
// which avoids circular-import headaches.
export const G = {
  time: 0,          // total simulated seconds
  hour: 9.0,        // in-game clock (0..24)
  night: 0,         // 0 = full day, 1 = full night
  paused: true,
  started: false,
  vehicles: [], actors: [], helis: [], stats: { kills: 0, cars: 0, carjacks: 0, deaths: 0, missions: 0 }, shake: 0,
  settings: { shadows: true, quality: 1, volume: 0.8, sensitivity: 1 },
};
