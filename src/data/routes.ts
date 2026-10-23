/** Internal URLs for a language (Arabic pages live under /ar/). */
import { localize, type Lang } from '@/i18n';
import type { SolutionSlug } from './types';

export function routes(lang: Lang) {
  const l = (path: string) => localize(path, lang);
  return {
    home: l('/'),
    about: l('/about/'),
    solutions: l('/solutions/'),
    contact: l('/contact/'),
    privacy: l('/privacy-policy/'),
    terms: l('/terms-and-conditions/'),
    solution: (slug: SolutionSlug) => l(`/solutions/${slug}/`),
    /** Contact page, scrolled to the form, with "Solution of Interest" preselected. */
    enquiry: (slug?: SolutionSlug) => l(slug ? `/contact/?solution=${slug}#enquiry` : '/contact/#enquiry'),
  };
}

export type Routes = ReturnType<typeof routes>;
