/** All English copy. data/ar/index.ts mirrors this shape exactly. */
import { ABOUT } from './about';
import { CONTACT } from './contact';
import { HOME } from './home';
import { BRAND, FOOTER, HEADER_CTA, NAV, UI } from './site';
import { SOLUTIONS, SOLUTIONS_PAGE } from './solutions';

export const EN = {
  brand: BRAND,
  nav: NAV,
  headerCta: HEADER_CTA,
  footer: FOOTER,
  ui: UI,
  home: HOME,
  about: ABOUT,
  solutions: SOLUTIONS,
  solutionsPage: SOLUTIONS_PAGE,
  contact: CONTACT,
};

export type Content = typeof EN;
