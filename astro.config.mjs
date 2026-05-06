// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Deployed at https://remy-boop.github.io/remy-exe-zine/. Astro uses
  // these for canonical URL generation and to prefix bundled-asset hrefs
  // (e.g. /_astro/foo.css becomes /remy-exe-zine/_astro/foo.css in
  // production). Internal navigation links in our source use relative
  // paths so they resolve correctly under any base.
  site: 'https://remy-boop.github.io',
  base: '/remy-exe-zine',

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