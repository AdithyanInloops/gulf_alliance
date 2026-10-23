/** About Us page copy — content doc §2, word for word. */
import type { IconName } from '@/components/ui/icons';
import { routes } from '../routes';
import type { FeatureItem, FinalCtaBlock, HeadingBlock, Seo } from '../types';

const R = routes('en');

export const ABOUT = {
  seo: {
    title: 'About Us',
    description:
      'Gulf Alliance Solutions Company focuses on providing solutions across healthcare, building systems, lighting, e-commerce, and information technology.',
  } satisfies Seo,

  hero: {
    eyebrow: 'About Us',
    title: 'About Gulf Alliance Solutions Company',
    text: 'Gulf Alliance Solutions Company focuses on providing solutions across multiple business sectors, including healthcare, building systems, lighting, e-commerce, and information technology. We aim to connect customers with relevant offerings that address their requirements and support their business needs.',
  },

  overview: {
    eyebrow: 'Company Overview',
    title: 'A Diverse Portfolio of Solutions',
    text: 'Our business spans several solution areas, each serving different applications and customer requirements. From medical and building-related systems to IT and digital learning, we bring together a varied portfolio to help customers explore options across different industries.',
  } satisfies HeadingBlock,

  approach: {
    eyebrow: 'Our Approach',
    /** Shown on two lines. */
    titleLines: ['Understanding Needs.', 'Exploring Solutions.'],
    text: "We believe that identifying the right solution begins with understanding the customer's requirements. Our approach focuses on clear communication, relevant offerings, and developing business relationships that support long-term opportunities.",
    /** Visual cards: the three things the paragraph names. */
    pillars: [
      { title: 'Clear Communication', icon: 'message-square' },
      { title: 'Relevant Offerings', icon: 'sliders-horizontal' },
      { title: 'Business Relationships', icon: 'handshake' },
    ] as { title: string; icon: IconName }[],
  },

  /** Heading above the Mission and Vision cards. */
  missionVisionTitle: 'Our Mission & Vision',

  mission: {
    title: 'Our Mission',
    text: 'To connect customers with relevant solutions across different industries through a customer-focused approach, clear communication, and dependable business relationships.',
  },

  vision: {
    title: 'Our Vision',
    text: 'To grow as a trusted solution provider by responding to changing business needs, expanding our areas of expertise, and building lasting relationships with customers and partners.',
  },

  values: {
    title: 'Our Core Values',
    items: [
      {
        title: 'Integrity & Trust',
        text: 'We build lasting relationships through transparency, honesty, ethical practices, and accountability.',
        icon: 'badge-check',
      },
      {
        title: 'Innovation',
        text: 'We embrace emerging technologies and creative thinking to develop practical, forward-looking solutions.',
        icon: 'lightbulb',
      },
      {
        title: 'Quality & Excellence',
        text: 'We pursue high standards in our products, services, and customer experience.',
        icon: 'award',
      },
      {
        title: 'Customer Focus',
        text: 'We listen, understand, and deliver solutions aligned with our customers’ objectives and expectations.',
        icon: 'headset',
      },
      {
        title: 'Collaboration & Partnership',
        text: 'We foster strong relationships with customers, suppliers, and strategic partners to achieve shared success.',
        icon: 'users',
      },
      {
        title: 'Sustainability & Responsibility',
        text: 'We promote efficient resource utilization, responsible business practices, and long-term positive impact.',
        icon: 'leaf',
      },
      {
        title: 'Continuous Growth',
        text: 'We invest in learning, development, and continuous improvement to remain adaptable in a changing marketplace.',
        icon: 'trending-up',
      },
    ] as FeatureItem[],
  },

  commitment: {
    eyebrow: 'Our Commitment',
    title: 'Focused on Your Requirements',
    text: 'We are committed to understanding customer needs and providing clear information about our available solutions. Through professional communication and a practical approach, we aim to make it easier for customers to explore relevant offerings for their projects and businesses.',
  } satisfies HeadingBlock,

  finalCta: {
    title: "Let's Explore the Right Solution Together",
    text: 'Whether you have a specific project requirement or want to explore opportunities within one of our business areas, we welcome the conversation. Contact our team to discuss your needs and learn more about our solutions.',
    cta: { label: 'Contact Us', href: R.contact },
  } as FinalCtaBlock,
};
