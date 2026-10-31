// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://portalbebedouro.com.br',
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.includes('/design-system') }),
  ],
  server: { port: 4321, host: true },
  devToolbar: { enabled: false },
})
