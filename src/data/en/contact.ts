/** Contact Us page copy — content doc §12, word for word. */
import { SITE, mapsUrl } from '../site';
import type { ContactItem, FinalCtaBlock, Seo } from '../types';
import { BRAND } from './site';

export const CONTACT = {
  seo: {
    title: 'Contact Us',
    description:
      'Contact Gulf Alliance Solutions Company to discuss your requirements, explore relevant solution areas, and learn more about the available offerings.',
  } satisfies Seo,

  hero: {
    eyebrow: 'Contact Us',
    title: "Let's Discuss Your Requirements",
    text: 'Looking for a solution for your business, building, healthcare facility, or technology needs? Contact Gulf Alliance Solutions Company to discuss your requirements, explore relevant solution areas, and learn more about the available offerings.',
  },

  info: {
    eyebrow: 'Contact Information',
    title: 'Connect with Our Team',
    text: 'Whether you have a project enquiry, need further information about a solution, or want to discuss a potential business opportunity, our team welcomes your enquiry.',
    items: [
      { key: 'phone', label: 'Phone', value: SITE.contact.phoneDisplay, href: SITE.contact.phoneHref, icon: 'phone' },
      { key: 'email', label: 'Email', value: SITE.contact.email, href: SITE.contact.emailHref, icon: 'mail' },
      { key: 'address', label: 'Address', value: BRAND.address, href: mapsUrl, icon: 'map-pin' },
    ] as ContactItem[],
  },

  form: {
    eyebrow: 'Enquiry Form',
    title: 'Tell Us About Your Requirements',
    text: 'Share some details about your needs so we can better understand your enquiry and direct it to the relevant business area.',
    fields: {
      fullName: 'Full Name',
      company: 'Company Name',
      email: 'Email Address',
      phone: 'Phone Number',
      solution: 'Solution of Interest',
      message: 'Message',
    },
    submit: 'Submit Enquiry',
  },

  map: {
    eyebrow: 'Office Location',
  },

  finalCta: {
    title: 'Start a Conversation with Us',
    text: 'Every project begins with understanding the requirement. Tell us what you are looking for, and our team will help you explore the relevant solution areas and available offerings.',
    cta: { label: 'Get in Touch', href: SITE.contact.emailHref },
  } as FinalCtaBlock,
};
