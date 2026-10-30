/**
 * Site-wide English copy: brand, navigation, footer (content doc §13) and the
 * interface microcopy (labels, form messages, dialogs).
 */
import { SITE } from '../site';
import { routes } from '../routes';
import type { Cta, NavItem } from '../types';

const R = routes('en');

export const BRAND = {
  name: 'Gulf Alliance Solutions Company',
  shortName: 'Gulf ASCO',
  tagline: 'Integrated Solutions. Infinite Possibilities.',
  /** Footer description (content doc §13). */
  description:
    'We provide solutions across medical, low current, lighting, electric elevator, e-commerce, and IT, alongside Josoorkom, an e-learning platform focused on students.',
  address: 'Saudi Arabia- Al Khobar, Olaya Dist., Al Fadhl Ibn Ismail P.O. Box 34448 - 6816',
  /** Short location line (hero, map caption). */
  city: 'Al Khobar, Saudi Arabia',
};

export const NAV: NavItem[] = [
  { label: 'Home', href: R.home },
  { label: 'About Us', href: R.about },
  { label: 'Solutions', href: R.solutions, megaMenu: true },
  { label: 'Contact Us', href: R.contact },
];

export const HEADER_CTA: Cta = { label: 'Discuss Your Requirements', href: R.enquiry() };

export const FOOTER = {
  quickLinksTitle: 'Quick Links',
  solutionsTitle: 'Our Solutions',
  contactTitle: 'Contact',
  legal: [
    { label: 'Privacy Policy', href: R.privacy },
    { label: 'Terms and Conditions', href: R.terms },
  ] as Cta[],
  copyright: `© ${new Date().getFullYear()} Gulf Alliance Solutions Company. All rights reserved.`,
};

/** Interface text that is not part of the content document. */
export const UI = {
  skipLink: 'Skip to content',
  logoHome: 'Home',
  mainNav: 'Main',
  mobileNav: 'Mobile',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  close: 'Close',
  solutionsMenu: 'Show the Solutions menu',
  language: 'Language',
  breadcrumb: 'Breadcrumb',
  breadcrumbHome: 'Home',
  newTab: '(opens in a new tab)',
  openMaps: 'Open Maps',
  contactUs: 'Contact Us',
  followUs: 'Follow Us',
  whatsapp: {
    label: 'Chat with us on WhatsApp',
    message: 'Hello Gulf Alliance Solutions Company, I would like to discuss my requirements.',
  },
  hero: {
    orbitLabel: 'Our solution areas',
    pause: 'Pause animation',
    play: 'Play animation',
  },
  flip: {
    show: 'View offerings',
    hide: 'Back',
  },
  form: {
    mandatory: '*Mandatory',
    required: 'Please fill in this field.',
    email: 'Please enter a valid email address.',
    phone: 'Please enter a valid phone number.',
    countryCode: 'Country code',
    checkFields: 'Please check the highlighted fields.',
    sending: 'Sending…',
    success: 'Thank you — your enquiry has been sent. Our team will be in touch.',
    /** {email} is replaced with the company email. */
    error: 'Sorry, something went wrong. Please try again or email us at {email}.',
    mailto: 'Your email app should open with the enquiry ready to send to {email}.',
    subject: 'Website enquiry',
  },
  josoorkom: {
    title: 'Continue to Josoorkom',
    text: 'Share a few details and we will take you straight to the Josoorkom platform.',
    firstName: 'Name',
    lastName: 'Surname',
    mobile: 'Mobile',
    email: 'Email',
    submit: 'Continue to Josoorkom',
    close: 'Close',
    redirecting: 'Taking you to Josoorkom…',
    note: `You will be redirected to ${new URL(SITE.josoorkomUrl).hostname.replace(/^www\./, '')}`,
  },
  notFound: {
    seoTitle: 'Page not found',
    seoDescription: 'The page you are looking for could not be found on the Gulf Alliance Solutions Company website.',
    title: 'Page not found',
    text: 'The page you are looking for may have moved.',
    home: 'Home',
  },
  legal: {
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    /** {title} is replaced with the page title. */
    seoDescription: '{title} of Gulf Alliance Solutions Company.',
    pending: 'The {title} for Gulf Alliance Solutions Company is being prepared. For any questions in the meantime, please contact',
  },
};
