/**
 * Entry point for copy. Components call getContent(Astro.url) to get the
 * copy, routes and direction for the language of the page being rendered:
 *
 *   const { home, R, lang } = getContent(Astro.url);
 */
import { getLang, LANG_META, type Lang } from '@/i18n';
import { AR } from './ar';
import { EN, type Content } from './en';
import { routes } from './routes';
import type { Solution, SolutionSlug } from './types';

const CONTENT: Record<Lang, Content> = { en: EN, ar: AR };

export function contentFor(lang: Lang) {
  return { ...CONTENT[lang], lang, dir: LANG_META[lang].dir, R: routes(lang) };
}

export const getContent = (url: URL) => contentFor(getLang(url));

export function findSolution(solutions: Solution[], slug: SolutionSlug): Solution {
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) throw new Error(`Unknown solution "${slug}"`);
  return solution;
}

/** Replace {name} placeholders in UI strings. */
export const fill = (text: string, values: Record<string, string>) =>
  text.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? `{${key}}`);

export type { Content };
