// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Preview op GitHub Pages (eigen repo). Bij oplevering: site op het eigen domein en base weg.
export default defineConfig({
  site: 'https://michaelbeset-ops.github.io',
  base: '/joris-uurwerkreparatie',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (p) => !p.includes('/hero/') })],
  vite: { plugins: [tailwindcss()] },
});
