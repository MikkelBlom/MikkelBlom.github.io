import { defineConfig } from 'astro/config'

// User site: deployed at the root of https://mikkelblom.github.io
// `format: 'file'` builds about.html and work/<slug>.html, so relative links work everywhere.
export default defineConfig({
  site: 'https://mikkelblom.github.io',
  build: { format: 'file', assets: 'assets' },
  devToolbar: { enabled: false }
})
