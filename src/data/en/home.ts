/** Home page copy — content doc §1, word for word. */
import type { IconName } from '@/components/ui/icons';
import { routes } from '../routes';
import type { Cta, FeatureItem, FinalCtaBlock, HeadingBlock, Seo } from '../types';

const R = routes('en');

export const HOME = {
  seo: {
    title: 'Gulf Alliance Solutions Company | Al Khobar, Saudi Arabia',
    description:
      'Gulf Alliance Solutions Company provides solutions across healthcare, building systems, lighting, technology, and digital services in Saudi Arabia.',
  } satisfies Seo,

  hero: {
    titleLines: ['Integrated Solutions.', 'Infinite Possibilities.'],
    text: 'Gulf Alliance Solutions Company provides solutions across healthcare, building systems, lighting, technology, and digital services. We connect businesses with relevant solutions for their specific requirements, supported by suitable products and offerings across our areas of expertise.',
    ctas: [
      { label: 'Explore Our Solutions', href: R.solutions },
      { label: 'Contact Us', href: R.contact },
    ] as Cta[],
  },

  overview: {
    eyebrow: 'Company Overview',
    title: 'Connecting Businesses with the Right Solutions',
    text: [
      'Gulf Alliance Solutions Company brings together multiple solution areas to address different business and industry requirements. Our portfolio includes medical, low current, lighting, electric elevator, e-commerce, and IT solutions, along with Josoorkom, an e-learning platform for students.',
      'We focus on understanding customer needs and helping them explore relevant options across these areas.',
    ],
    cta: { label: 'About Our Company', href: R.about } as Cta,
  } satisfies HeadingBlock & { cta: Cta },

  solutions: {
    eyebrow: 'Our Solutions',
    title: 'Solutions for Different Industries and Needs',
    text: 'Explore our range of solutions for healthcare, buildings, business technology, and digital learning.',
    cta: { label: 'Discover Our Solutions', href: R.solutions } as Cta,
  },

  why: {
    eyebrow: 'Why Choose Us',
    title: 'A Solution-Focused Approach',
    items: [
      {
        title: 'Multiple Solution Areas',
        text: 'Explore offerings across healthcare, building systems, technology, and digital services.',
        icon: 'network',
      },
      {
        title: 'Customer-Focused Approach',
        text: 'We consider your requirements when discussing relevant solutions.',
        icon: 'sliders-horizontal',
      },
      {
        title: 'Industry-Relevant Offerings',
        text: 'Our solution areas address different applications across various sectors.',
        icon: 'shield-check',
      },
      {
        title: 'Business Relationships',
        text: 'We value clear communication, dependable service, and long-term partnerships.',
        icon: 'handshake',
      },
    ] as FeatureItem[],
  },

  industries: {
    eyebrow: 'Industries We Serve',
    title: 'Supporting a Range of Applications',
    text: 'Our solution areas cover applications across healthcare, commercial and residential buildings, industrial environments, education, and digital business. We aim to help customers explore suitable options based on their industry and project requirements.',
    // Visual tiles: the sectors named in the paragraph above.
    sectors: [
      { label: 'Healthcare', icon: 'hospital' },
      { label: 'Commercial and Residential Buildings', icon: 'building-2' },
      { label: 'Industrial Environments', icon: 'factory' },
      { label: 'Education', icon: 'graduation-cap' },
      { label: 'Digital Business', icon: 'globe' },
    ] as { label: string; icon: IconName }[],
  },

  finalCta: {
    title: "Let's Find the Right Solution for Your Needs",
    text: 'Every business has different requirements. Whether you are exploring healthcare products, building systems, technology, or digital services, our team is ready to discuss your needs and help you explore relevant offerings.',
    cta: { label: 'Discuss Your Requirements', href: R.contact },
  } as FinalCtaBlock,
};
