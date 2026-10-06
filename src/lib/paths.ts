// Links are relative (about.html, ../img/x.jpg) so the built site works both at the
// root of mikkelblom.github.io and when opened from a sub-folder for review.
// `depth` is how many folders deep the current page is: 0 for index.html, 1 for work/<slug>.html.

export const up = (depth: number) => '../'.repeat(depth) || './'

export function to(depth: number, path: string) {
  if (/^(https?:|mailto:|#)/.test(path)) return path
  const clean = path.replace(/^\//, '')
  return up(depth) + clean
}

export const pageFor = {
  home: 'index.html',
  about: 'about.html',
  contact: 'contact.html',
  project: (slug: string) => `work/${slug}.html`
}
