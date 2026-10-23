/**
 * Languages. English lives at the site root and Arabic under /ar/ with the
 * same paths (/about/ ↔ /ar/about/). Every page is pre-rendered once per
 * language; components read the language of the page being rendered from its
 * URL (see getContent() in data/index.ts).
 */
export const LANGS = ['en', 'ar'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_META: Record<Lang, { dir: 'ltr' | 'rtl'; short: string; name: string; ogLocale: string }> = {
  en: { dir: 'ltr', short: 'EN', name: 'English', ogLocale: 'en_US' },
  ar: { dir: 'rtl', short: 'ع', name: 'العربية', ogLocale: 'ar_SA' },
};

const AR_PREFIX = /^\/ar(?=\/|$)/;

export const getLang = (url: URL): Lang => (AR_PREFIX.test(url.pathname) ? 'ar' : 'en');

/** Prefix an internal path for a language. External, mailto/tel and "#…" links pass through. */
export function localize(path: string, lang: Lang): string {
  if (lang === 'en' || !path.startsWith('/') || path.startsWith('//')) return path;
  return path === '/' ? '/ar/' : `/ar${path}`;
}

/** The current page's path in another language. */
export function switchLang(url: URL, to: Lang): string {
  return localize(url.pathname.replace(AR_PREFIX, '') || '/', to);
}

/** getStaticPaths() for pages in src/pages/[...lang]/: "/" for English, "/ar/" for Arabic. */
export const langPaths = () => LANGS.map((lang) => ({ params: { lang: lang === 'en' ? undefined : lang } }));
