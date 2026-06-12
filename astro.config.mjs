// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production origin. Drives sitemap, canonical URLs, and absolute OG URLs.
export default defineConfig({
  site: 'https://theporchkitchen.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Allow remote optimization from the Cook & The Drummer source during the one-time asset pull.
    domains: ['thecookandthedrummer.com'],
  },
});
