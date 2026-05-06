// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Output `.html`-suffixed files (issue-01/wavelength.html, not
  // issue-01/wavelength/index.html). Matches the legacy cover's TOC hrefs
  // verbatim so the cover-as-static-passthrough in public/index.html links
  // correctly to Astro-rendered chapter pages.
  build: {
    format: 'file'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});