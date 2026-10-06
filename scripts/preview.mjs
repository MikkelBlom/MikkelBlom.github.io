// Makes a copy of dist/ where every asset path is relative, so the site can be opened from
// a sub-folder (for review) and not only from the root of mikkelblom.github.io.
// Usage: npm run build && node scripts/preview.mjs <out-dir>
import { cpSync, readdirSync, readFileSync, writeFileSync, rmSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const out = process.argv[2] ?? 'preview'
rmSync(out, { recursive: true, force: true })
cpSync('dist', out, { recursive: true })

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]))
// The review host reserves names starting with "_" (e.g. _slug_.css), so strip leading underscores.
const renames = []
for (const file of walk(join(out, 'assets'))) {
  const name = file.split(sep).pop()
  if (name.startsWith('_')) { const clean = name.replace(/^_+/, ''); cpSync(file, file.replace(name, clean)); rmSync(file); renames.push([name, clean]) }
}

for (const file of walk(out)) {
  const depth = relative(out, file).split(sep).length - 1
  const up = '../'.repeat(depth) || './'
  if (file.endsWith('.html')) {
    let html = readFileSync(file, 'utf8').replaceAll('"/assets/', `"${up}assets/`)
    for (const [from, to] of renames) html = html.replaceAll(from, to)
    writeFileSync(file, html)
  }
  if (file.endsWith('.css')) writeFileSync(file, readFileSync(file, 'utf8').replaceAll('url(/assets/', 'url(./'))
}
console.log(`Relative copy written to ${out}/`)
