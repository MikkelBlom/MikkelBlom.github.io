import { projects } from '../data/content'

export function GET() {
  const base = 'https://mikkelblom.github.io'
  const paths = ['/', '/about', '/contact', ...projects.map((p) => `/work/${p.slug}`)]
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${base}${p}</loc></url>`)
    .join('\n')}\n</urlset>\n`
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}
