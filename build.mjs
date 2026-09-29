import * as esbuild from 'esbuild';
const min = process.argv.includes('--min');
const entry = process.argv.find((a) => a.startsWith('--entry='))?.slice(8) || 'src/main.js';
const out = process.argv.find((a) => a.startsWith('--out='))?.slice(6) || 'dist/game.js';
await esbuild.build({ entryPoints: [entry], bundle: true, outfile: out, format: 'iife', minify: min, sourcemap: !min, target: 'es2020', logLevel: 'info' });
