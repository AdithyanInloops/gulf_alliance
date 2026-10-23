/**
 * Page-specific JSON-LD builders. The Organization and WebSite nodes are
 * added on every page by components/layout/BaseHead.astro; these reference
 * the organization by @id.
 */
import { getContent } from '@/data';
import { SITE } from '@/data/site';
import type { Seo, Solution } from '@/data/types';

type Page = { url: URL; site: URL | undefined };

const originOf = (site: URL | undefined) => site ?? new URL(SITE.url);
const orgRef = (origin: URL) => ({ '@id': `${new URL('/', origin).href}#organization` });

export function webPageSchema(
  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage',
  { title, description }: Seo,
  { url: pageUrl, site }: Page,
) {
  const origin = originOf(site);
  const { lang, R } = getContent(pageUrl);
  const url = new URL(pageUrl.pathname, origin).href;
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { '@id': `${new URL(R.home, origin).href}#website` },
    about: orgRef(origin),
  };
}

export function serviceSchema(solution: Solution, { url: pageUrl, site }: Page) {
  const origin = originOf(site);
  const url = new URL(pageUrl.pathname, origin).href;
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: solution.name,
    serviceType: solution.name,
    description: solution.page.seo.description,
    url,
    inLanguage: getContent(pageUrl).lang,
    provider: orgRef(origin),
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
  };
}

export function solutionsListSchema({ url: pageUrl, site }: Page) {
  const origin = originOf(site);
  const { solutions, solutionsPage, R } = getContent(pageUrl);
  return {
    '@type': 'ItemList',
    name: solutionsPage.seo.title,
    itemListElement: solutions.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: new URL(R.solution(s.slug), origin).href,
    })),
  };
}
