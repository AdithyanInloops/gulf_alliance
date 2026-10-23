import type { IconName } from '@/components/ui/icons';

export interface Cta {
  label: string;
  href: string;
  /** Opens in a new tab with rel="noopener" (auto-detected for http URLs). */
  external?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  /** Renders the solutions dropdown under this item. */
  megaMenu?: boolean;
}

export interface Seo {
  /** Page name; " | <company name>" is appended automatically. */
  title: string;
  /** 120–160 characters, taken from the page copy. */
  description: string;
}

export interface HeadingBlock {
  eyebrow?: string;
  title: string;
  text?: string | string[];
}

export interface FeatureItem {
  title: string;
  text: string;
  icon: IconName;
}

export interface FinalCtaBlock {
  title: string;
  text: string;
  cta: Cta;
}

export type SolutionSlug =
  | 'medical'
  | 'low-current'
  | 'lighting'
  | 'electric-elevator'
  | 'e-commerce'
  | 'it'
  | 'josoorkom';

export interface Solution {
  slug: SolutionSlug;
  /** Name used in headings, cards, nav and footer. */
  name: string;
  /** Short label for tight spaces (badges, hero orbit). */
  shortName: string;
  icon: IconName;
  /** One-liner from Home > Our Solutions. */
  summary: string;
  /** Block on the Solutions overview page. */
  overviewCard: {
    title: string;
    text: string;
    cta: string;
  };
  /** The solution's own page. */
  page: {
    seo: Seo;
    hero: {
      title: string;
      text: string;
      ctas: Cta[];
    };
    overview: HeadingBlock;
    items: FeatureItem[];
    finalCta: FinalCtaBlock;
  };
}

export interface ContactItem {
  key: 'phone' | 'email' | 'address';
  label: string;
  value: string;
  href: string;
  icon: IconName;
}
