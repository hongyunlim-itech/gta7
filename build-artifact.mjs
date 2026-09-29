// Bundles the game into ONE self-contained HTML page (inline CSS + JS) for publishing as a Claude Artifact.
// Usage: node build-artifact.mjs [outfile]      (run `npm run build` first)
import fs from 'node:fs';
import path from 'node:path';
const out = process.argv[2] || 'dist/artifact.html';
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('dist/game.js', 'utf8').replace(/<\/script/gi, '<\\/script');
const body = html.match(/<body>([\s\S]*?)<script src="dist\/game\.js"><\/script>/)[1];
const fonts = html.match(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/)[0];
// The Artifact host wraps this fragment in its own <html>/<head>/<body>, so no document tags here.
const page = `<title>Grand Theft Browser</title>\n${fonts}\n<style>\n${css}\n</style>\n${body}<script>\n${js}\n</script>\n`;
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, page);
console.log(`${out}: ${(page.length / 1024).toFixed(0)} KB`);
