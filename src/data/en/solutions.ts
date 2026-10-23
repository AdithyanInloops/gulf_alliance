/**
 * The seven solution areas and the Solutions overview page. Copy is word for
 * word from the content document:
 * - `summary`       → Home page, "Our Solutions" list (§1)
 * - `overviewCard`  → Solutions page blocks (§3)
 * - `page`          → each solution's own page (§5–§11)
 * `icon` is a design choice that gives every solution its own identity.
 */
import { SITE } from '../site';
import { routes } from '../routes';
import type { FinalCtaBlock, HeadingBlock, Seo, Solution } from '../types';

const R = routes('en');

export const SOLUTIONS: Solution[] = [
  {
    slug: 'medical',
    name: 'Medical Solutions',
    shortName: 'Medical',
    icon: 'briefcase-medical',
    summary: 'Products and equipment for healthcare-related applications.',
    overviewCard: {
      title: 'Medical Solutions',
      text: 'Explore medical products and equipment for healthcare-related applications. We help customers review relevant options based on their requirements and the available product range.',
      cta: 'Discover Medical Solutions',
    },
    page: {
      seo: {
        title: 'Medical Solutions',
        description:
          'We help customers explore medical products and equipment for different healthcare-related applications. Discover available options with our team.',
      },
      hero: {
        title: 'Medical Solutions for Healthcare Needs',
        text: 'We help customers explore medical products and equipment for different healthcare-related applications. Discover available options and discuss your requirements with our team to identify products relevant to your needs.',
        ctas: [
          { label: 'Explore Medical Solutions', href: '#overview' },
          { label: 'Enquire Now', href: R.enquiry('medical') },
        ],
      },
      overview: {
        eyebrow: 'Overview',
        title: 'Supporting Healthcare Requirements',
        text: 'Healthcare environments depend on suitable products and equipment to support their daily activities. We help customers explore relevant options from our available range based on intended applications and product requirements.',
      },
      items: [
        {
          title: 'Medical Equipment and Products',
          text: 'Explore available medical equipment and healthcare-related products for different applications. Product selection can be considered according to intended use, technical specifications, and the requirements of the facility.',
          icon: 'stethoscope',
        },
        {
          title: 'Finding Suitable Options',
          text: 'Every healthcare environment has different requirements. Our team can discuss your product needs and provide further information about relevant options within the available range.',
          icon: 'search',
        },
      ],
      finalCta: {
        title: 'Looking for Medical Products or Equipment?',
        text: 'Whether you need information about a specific product or want to explore options for a healthcare facility, our team is ready to discuss your requirements. Get in touch to learn more about the available products and identify the options relevant to your needs.',
        cta: { label: 'Enquire About Medical Solutions', href: R.enquiry('medical') },
      },
    },
  },
  {
    slug: 'low-current',
    name: 'Low Current Solutions',
    shortName: 'Low Current',
    icon: 'shield',
    summary: 'Systems supporting security, communication, and connectivity.',
    overviewCard: {
      title: 'Low Current Solutions',
      text: 'Explore low current systems for security, access control, communication, and connectivity across building and business environments. Available options can be considered according to project requirements.',
      cta: 'Discover Low Current Solutions',
    },
    page: {
      seo: {
        title: 'Low Current Solutions',
        description:
          'Explore low current solutions for security, access control, communication, and connectivity across different building and business environments.',
      },
      hero: {
        title: 'Connected Systems for Safer, Smarter Spaces',
        text: 'Explore low current solutions for security, access control, communication, and connectivity across different building and business environments. We help customers review relevant system options based on their project requirements and intended applications.',
        ctas: [{ label: 'Discuss Your Requirements', href: R.enquiry('low-current') }],
      },
      overview: {
        eyebrow: 'Overview',
        title: 'Supporting Building Connectivity and Security',
        text: 'Low current systems support important functions within modern buildings, including monitoring, access management, and communication. Explore the available system categories to understand the options relevant to your building or project.',
      },
      items: [
        {
          title: 'CCTV Surveillance Systems',
          text: 'Explore surveillance products and systems for monitoring and security requirements. Available options can be reviewed based on coverage, installation environment, and project specifications.',
          icon: 'cctv',
        },
        {
          title: 'Access Control Systems',
          text: 'Discover access control options for managing entry to designated areas. The appropriate solution depends on the building layout, security needs, and intended application.',
          icon: 'fingerprint',
        },
        {
          title: 'Networking and Connectivity',
          text: "Explore structured cabling and networking products that support connections between devices and systems. Product selection should reflect the project's infrastructure and technical requirements.",
          icon: 'network',
        },
        {
          title: 'Fire Alarm Systems',
          // NOTE(client): this sentence reads like an internal note — confirm before launch.
          text: "Explore fire alarm products and related systems for building safety applications, subject to the company's confirmed offerings and applicable requirements.",
          icon: 'bell-ring',
        },
      ],
      finalCta: {
        title: 'Planning a Building Systems Project?',
        text: 'From surveillance and access control to networking requirements, choosing suitable systems starts with understanding your project. Contact our team to discuss your needs and explore the available low current options relevant to your building or business.',
        cta: { label: 'Enquire About Low Current Solutions', href: R.enquiry('low-current') },
      },
    },
  },
  {
    slug: 'lighting',
    name: 'Lighting Solutions',
    shortName: 'Lighting',
    icon: 'lightbulb',
    summary: 'Lighting options for residential, commercial, and industrial environments.',
    overviewCard: {
      title: 'Lighting Solutions',
      text: 'Discover lighting options for residential, commercial, and industrial spaces. Explore products and solutions suited to different environments, applications, and lighting requirements.',
      cta: 'Discover Lighting Solutions',
    },
    page: {
      seo: {
        title: 'Lighting Solutions',
        description:
          'Explore lighting options for residential, commercial, and industrial applications, with products suited to different environments and practical requirements.',
      },
      hero: {
        title: 'Lighting Solutions for Different Environments',
        text: 'Lighting contributes to the functionality, comfort, and appearance of a space. Explore lighting options for residential, commercial, and industrial applications, with products suited to different environments and practical requirements.',
        ctas: [{ label: 'Explore Lighting Solutions', href: '#overview' }],
      },
      overview: {
        eyebrow: 'Overview',
        title: 'Lighting Options for Your Application',
        text: 'Different spaces require different lighting arrangements. Our lighting solutions area helps customers explore available options based on the intended application, installation requirements, and product specifications.',
      },
      items: [
        {
          title: 'LED Lighting',
          text: 'Explore LED lighting products for different applications. Compare available options based on brightness, design, energy requirements, and intended use.',
          icon: 'zap',
        },
        {
          title: 'Commercial Lighting',
          text: 'Discover lighting options for offices, retail spaces, and other commercial environments. Selection can be guided by the size, function, and lighting requirements of the space.',
          icon: 'store',
        },
        {
          title: 'Residential Lighting',
          text: 'Explore lighting products for homes and residential spaces, with options for different rooms, layouts, and practical needs.',
          icon: 'house',
        },
        {
          title: 'Industrial Lighting',
          text: 'Review lighting products for industrial applications, considering the working environment, installation requirements, and lighting needs of the space.',
          icon: 'factory',
        },
      ],
      finalCta: {
        title: 'Looking for Lighting Options for Your Project?',
        text: 'The right lighting depends on how a space is used and the requirements of the application. Contact our team to discuss your project, explore the available lighting products, and learn more about the options that may suit your needs.',
        cta: { label: 'Enquire About Lighting Solutions', href: R.enquiry('lighting') },
      },
    },
  },
  {
    slug: 'electric-elevator',
    name: 'Electric Elevator Solutions',
    shortName: 'Elevators',
    icon: 'arrow-up-down',
    summary: 'Solutions for vertical transportation in buildings.',
    overviewCard: {
      title: 'Electric Elevator Solutions',
      text: 'Explore elevator-related offerings for buildings with vertical transportation requirements. Our team can discuss your project needs and the available options relevant to your specifications.',
      cta: 'Discover Elevator Solutions',
    },
    page: {
      seo: {
        title: 'Electric Elevator Solutions',
        description:
          'Explore elevator-related offerings for buildings with vertical transportation requirements, whether you are planning a new project or reviewing an existing building.',
      },
      hero: {
        title: 'Elevator Solutions for Vertical Transportation',
        text: 'Explore elevator-related offerings for buildings with vertical transportation requirements. Whether you are planning a new project or reviewing requirements for an existing building, our team can discuss the available options based on your specifications.',
        ctas: [{ label: 'Discuss Your Project', href: R.enquiry('electric-elevator') }],
      },
      overview: {
        eyebrow: 'Overview',
        title: 'Supporting Building Mobility Needs',
        text: 'Elevator systems are an important part of many residential and commercial buildings. Understanding the building type, usage, and project specifications helps identify which elevator-related options may be relevant.',
      },
      items: [
        {
          title: 'Elevator Products and Systems',
          text: 'Explore available elevator products and system options for different building applications. Project details, capacity requirements, and intended use can help guide your enquiry.',
          icon: 'building-2',
        },
        {
          title: 'Understanding Project Requirements',
          text: 'Every building has different requirements for vertical transportation. Share your project details with our team to discuss the available offerings and identify the information needed to explore suitable options.',
          icon: 'clipboard-list',
        },
      ],
      finalCta: {
        title: 'Planning an Elevator Project?',
        text: 'If you are considering elevator solutions for a new building or exploring options for an existing property, our team is ready to hear about your requirements. Get in touch to discuss your project and learn more about the available elevator-related offerings.',
        cta: { label: 'Enquire About Elevator Solutions', href: R.enquiry('electric-elevator') },
      },
    },
  },
  {
    slug: 'e-commerce',
    name: 'E-Commerce',
    shortName: 'E-Commerce',
    icon: 'shopping-cart',
    summary: 'Offerings related to online business and digital commerce.',
    overviewCard: {
      title: 'E-Commerce',
      text: 'Explore digital commerce offerings that support online business activities and product distribution. Learn more about the options relevant to your business goals and digital requirements.',
      cta: 'Discover E-Commerce Solutions',
    },
    page: {
      seo: {
        title: 'E-Commerce',
        description:
          'Explore e-commerce offerings that support online business activities and digital commerce requirements, and how they may align with your business goals.',
      },
      hero: {
        title: 'Digital Commerce Opportunities for Businesses',
        text: 'Explore e-commerce offerings that support online business activities and digital commerce requirements. Discover the available options and discuss how they may align with your business goals and plans for reaching customers online.',
        ctas: [{ label: 'Explore E-Commerce Solutions', href: '#overview' }],
      },
      overview: {
        eyebrow: 'Overview',
        title: 'Supporting Business in the Digital Space',
        text: 'Digital commerce creates opportunities for businesses to present products, reach customers, and expand their online activities. Our e-commerce area focuses on relevant offerings that support digital business needs, based on the services the company provides.',
      },
      items: [
        {
          title: 'Online Business Offerings',
          text: 'Explore available e-commerce-related offerings for businesses interested in online sales and digital channels. The relevant options depend on your business model, product range, and operational requirements.',
          icon: 'shopping-cart',
        },
        {
          title: 'Digital Marketplaces and Distribution',
          text: 'Discover offerings related to online marketplaces and product distribution, where available. Explore options based on your business objectives and intended customer reach.',
          icon: 'truck',
        },
      ],
      finalCta: {
        title: 'Ready to Explore E-Commerce Opportunities?',
        text: 'Whether you are considering online sales or exploring ways to expand your digital business activities, start by discussing your goals with our team. We can help you understand the relevant e-commerce offerings available within our portfolio.',
        cta: { label: 'Discuss Your Requirements', href: R.enquiry('e-commerce') },
      },
    },
  },
  {
    slug: 'it',
    name: 'IT Solutions',
    shortName: 'IT',
    icon: 'network',
    summary: 'Technology-related offerings for business requirements.',
    overviewCard: {
      title: 'IT Solutions',
      text: "Discover technology-related offerings that support business and IT requirements. Explore the available options and discuss your organisation's needs with our team.",
      cta: 'Discover IT Solutions',
    },
    page: {
      seo: {
        title: 'IT Solutions',
        description:
          'Technology plays an important role in business operations, communication, and information management. Explore our IT-related offerings and the available options.',
      },
      hero: {
        title: 'IT Solutions to Support Business Needs',
        text: 'Technology plays an important role in business operations, communication, and information management. Explore our IT-related offerings to understand the available options and discuss which areas may be relevant to your organisation.',
        ctas: [{ label: 'Explore IT Solutions', href: '#overview' }],
      },
      overview: {
        eyebrow: 'Overview',
        title: 'Technology for Business Requirements',
        text: 'Different organisations have different technology needs depending on their operations, infrastructure, and goals. Our IT solutions area brings together relevant offerings to help customers explore options suited to their business requirements.',
      },
      items: [
        {
          title: 'IT Products and Technologies',
          text: 'Explore available IT products and technology-related offerings for different business applications. Product details and technical specifications can help you understand their suitability for your requirements.',
          icon: 'server',
        },
        {
          title: 'Understanding Your IT Needs',
          text: 'Choosing technology starts with identifying the requirements it needs to address. Share your business needs with our team to discuss relevant offerings and learn more about the available options.',
          icon: 'message-square',
        },
      ],
      finalCta: {
        title: "Let's Discuss Your IT Requirements",
        text: 'Whether you are looking for IT products or exploring technology options for your business, our team is ready to discuss your needs. Contact us to learn more about our available IT offerings and identify the relevant next steps.',
        cta: { label: 'Enquire About IT Solutions', href: R.enquiry('it') },
      },
    },
  },
  {
    slug: 'josoorkom',
    name: 'Josoorkom',
    shortName: 'Josoorkom',
    icon: 'graduation-cap',
    summary: 'An e-learning platform focused on students and digital learning.',
    overviewCard: {
      title: 'Josoorkom – E-Learning Students Platform',
      text: 'Discover Josoorkom, an e-learning platform focused on students and digital learning. Explore the platform to learn about its purpose, available features, and learning opportunities.',
      cta: 'Explore Josoorkom',
    },
    page: {
      seo: {
        title: 'Josoorkom – E-Learning Students Platform',
        description:
          'Josoorkom is an e-learning platform focused on students and digital learning. Explore the platform to understand its purpose, features, and learning opportunities.',
      },
      hero: {
        title: 'A Digital Learning Platform for Students',
        text: 'Josoorkom is an e-learning platform focused on students and digital learning. Explore the platform to understand its purpose, discover its available features, and learn more about the learning opportunities it provides.',
        ctas: [{ label: 'Explore Josoorkom', href: '#overview' }],
      },
      overview: {
        eyebrow: 'Platform Overview',
        title: 'Learning Through Digital Access',
        text: 'Digital platforms offer students another way to access educational content and learning resources. Josoorkom brings a student-focused approach to digital learning, with further details available through the platform.',
      },
      items: [
        {
          title: 'Learning Resources',
          // NOTE(client): the last sentence reads like an internal note — confirm before launch.
          text: "Explore the educational resources available through Josoorkom. Details about subjects, learning materials, and content formats should reflect the platform's actual offerings.",
          icon: 'book-open',
        },
        {
          title: 'Platform Features',
          // NOTE(client): the last sentence reads like an internal note — confirm before launch.
          text: 'Learn about the features available on Josoorkom and how students can use them as part of their learning experience. This section should highlight only confirmed platform capabilities.',
          icon: 'monitor-play',
        },
      ],
      finalCta: {
        title: 'Discover Josoorkom',
        text: 'Explore Josoorkom to learn more about its digital learning environment and the resources available to students. Visit the platform to understand its features and discover how it may support your educational needs.',
        cta: { label: 'Visit Josoorkom', href: SITE.josoorkomUrl, external: true },
      },
    },
  },
];

/** Solutions overview page — content doc §3. The blocks come from `overviewCard` above. */
export const SOLUTIONS_PAGE = {
  seo: {
    title: 'Solutions',
    description:
      'Discover a diverse range of solutions across healthcare, building systems, lighting, digital commerce, and information technology from Gulf Alliance Solutions Company.',
  } satisfies Seo,

  hero: {
    eyebrow: 'Solutions',
    title: 'Solutions for Your Business Needs',
    /** Trailing words of the title shown in gold. */
    highlight: 'Business Needs',
    text: 'Discover a diverse range of solutions from Gulf Alliance Solutions Company across healthcare, building systems, lighting, digital commerce, and information technology. Explore each area to understand the offerings available for different applications and business requirements.',
    cta: { label: 'Explore Our Solutions', href: '#areas' },
  },

  intro: {
    title: 'Explore Our Areas of Expertise',
    text: 'Our portfolio brings together solutions for different industries and applications. Whether your requirements relate to healthcare, building infrastructure, business technology, or digital learning, explore our solution areas to find the information relevant to your needs.',
  } satisfies HeadingBlock,

  finalCta: {
    title: 'Tell Us What You Need',
    text: 'Every project comes with its own requirements. Share your goals with our team so we can discuss the relevant solution areas and help you explore the available options.',
    cta: { label: 'Discuss Your Requirements', href: R.contact },
  } satisfies FinalCtaBlock,
};
