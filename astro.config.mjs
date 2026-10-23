// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Pages that exist for legal links but carry placeholder copy until the client
// supplies the final text (in both languages). They are `noindex` and kept out
// of the sitemap.
const EXCLUDE_FROM_SITEMAP = ['/privacy-policy/', '/terms-and-conditions/'];

// https://astro.build/config
export default defineConfig({
  // Production origin, used for canonical, Open Graph and sitemap URLs.
  site: 'https://gulfasco.com',
  // Every route is a folder with an index.html, so URLs end in "/" on any
  // static host. Internal links are written with the slash (see
  // src/data/routes.ts) to avoid redirect hops. Arabic pages live under /ar/.
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Links are prefetched on hover/focus for near-instant page changes.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDE_FROM_SITEMAP.some((path) => page.endsWith(path)),
      // English at the root, Arabic under /ar/ — adds hreflang links to the sitemap.
      i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
