# Grand Theft Browser

An open-world crime sandbox that runs entirely in your browser — a love letter to the GTA formula, built from scratch with
[Three.js](https://threejs.org). No assets are downloaded: the city, cars, characters, textures, sound effects and radio
music are all generated procedurally at load time.

## Play

Open `index.html` (double-click works — the game ships as a single bundled script), or serve the folder:

```bash
npm install     # only needed to rebuild
npm start       # serves http://localhost:8080
```

Click **CLICK TO PLAY** (the mouse is captured; press `Esc` to pause). Desktop keyboard + mouse; a discrete GPU is recommended.
On slower machines use the **Quality: Low** / **Shadows** options on the start screen.

## What's in it

**Costa Vista** — a 1.3 km island city: glass-tower downtown with a 300 m landmark, mid-rise districts with billboards,
suburbs with palm-lined streets, a harbour with container yards, parks, a beach with a ferris wheel and a stunt park with ramps.
Day/night cycle (windows, street lamps, headlights and stars come on at night), traffic signals, crosswalks.

- **Driving** — arcade car physics with 9 vehicle types (sedan, sports, muscle, SUV, pickup, van, taxi, bus, police), drifting
  with the handbrake, ramps and jumps, skid marks, body damage, fire and explosions. Steal parked cars or **carjack** moving ones.
- **Traffic & pedestrians** — lane-following traffic that obeys signals and brakes for obstacles; pedestrians that walk the
  sidewalk network, cross at crosswalks, panic at gunfire, put their hands up when you aim at them, and sometimes fight back.
- **Combat** — fists, pistol, micro SMG, pump shotgun, assault rifle, grenades and an RPG, with headshots, aim assist,
  tracers, recoil, reloads and a gun shop.
- **Wanted system** — crimes witnessed by cops or civilians raise your stars. Police cars pursue you along the road network,
  foot cops arrest (or shoot), and helicopters join at 3★+. Break line of sight and lie low to lose them. Get *Busted* or *Wasted*
  and you respawn at the police station / hospital.
- **Jobs** (yellow markers on the map): a checkpoint **Street Race**, **Grab & Go** (steal a car and deliver it before the
  owner's cops find you) and **Take Him Out** (hunt a target and his armed bodyguards).
- **Audio** — fully procedural WebAudio: engines, guns, explosions, sirens, helicopters, ambience and four radio stations
  (rock, synthwave, lounge, hip-hop) in cars.
- **HUD** — rotating minimap with blips, full map (`M`), wanted stars, health/armour, ammo, speedometer, street/district names.

## Controls

| On foot | | In a vehicle | |
|---|---|---|---|
| `W A S D` | move | `W` / `S` | accelerate / brake & reverse |
| `Shift` | sprint | `A` / `D` | steer |
| `Space` | jump | `Space` | handbrake (drift) |
| Mouse | look | `H` | horn |
| Left / right click | shoot / aim | `R` / `Q` | next / previous radio |
| `R` | reload | `C` | look behind |
| `1`–`7` or wheel | switch weapon | `F` | get out |
| `F` | enter vehicle / carjack | | |
| `E` | interact (gun shop, hospital) | `M` | map · `Esc` pause · `F3` debug stats |

Cheats (just type them while playing): `ARSENAL`, `CASHOUT`, `HEALME`, `LAYLOW` (clear wanted), `HEATUP` (+1 star),
`SPEEDY` (sports car), `BUSRIDE`, `MIDNIGHT`, `HIGHNOON`.

## Development

```
src/
  main.js        renderer, game loop, menu/pause flow, cheats
  world.js       procedural city, roads, props, sky, day/night, traffic signals, minimap base
  vehicle.js     vehicle physics, damage, fire, collisions        traffic.js   lane AI + spawning
  actor.js       humanoid base class                             peds.js      civilians
  player.js      controller, weapons, camera rig                  police.js    wanted system, cops, helicopter
  combat.js      weapons, hitscan, projectiles, explosions        missions.js  jobs, shop, hospital
  models.js      procedural humanoids / vehicles / weapons        pickups.js   health, armour, cash, guns
  collision.js   spatial hash, SAT, ray casts, ground height      fx.js        particles, tracers, decals
  audio.js       procedural WebAudio engine + radio               hud.js       HUD, minimap, full map
```

```bash
npm run dev     # unminified bundle with source map -> dist/game.js
npm run build   # minified bundle
```

Tips: `?autostart` skips the menu, `?noshadow` starts in low quality (both are handy for automated testing);
`window.__G` exposes the game state in the console.
