/**
 * Language-independent site settings: contact details, links and SEO data.
 * Translated copy (company name, address, navigation…) lives in data/en and
 * data/ar.
 */
export const SITE = {
  /** Production origin. Keep in sync with `site` in astro.config.mjs. */
  url: 'https://gulfasco.com',
  themeColor: '#10305c',
  contact: {
    /** Same number, grouped for display (as in the UI design). */
    phoneDisplay: '+966 54 511 1301',
    phoneHref: 'tel:+966545111301',
    /** International number without "+", for wa.me links. */
    whatsapp: '966545111301',
    email: 'info@gulfasco.com',
    emailHref: 'mailto:info@gulfasco.com',
    /** Used for the embedded map and the "open in maps" link. */
    mapQuery: 'Al Fadhl Ibn Ismail, Olaya, Al Khobar, Saudi Arabia',
    /** Structured address for search engines (JSON-LD). */
    postal: {
      streetAddress: 'Al Fadhl Ibn Ismail, Olaya Dist.',
      addressLocality: 'Al Khobar',
      addressRegion: 'Eastern Province',
      postalCode: '34448',
      addressCountry: 'SA',
    },
  },
  /**
   * Josoorkom platform. Every link to it opens the short sign-up dialog first
   * (components/layout/JosoorkomDialog.astro), then continues to this URL.
   */
  josoorkomUrl: 'https://www.josoorcom.com/',
  /**
   * Web3Forms access keys (web3forms.com dashboard), one per form. Access keys
   * are public by design — they appear in the page HTML and can only deliver
   * to the inbox they were created for. Wiring: src/lib/form-endpoint.ts.
   */
  forms: {
    /** Contact page + solution pages enquiry form. */
    enquiryKey: 'fe2d6a5d-4acc-4418-9ee8-5eff029a9b60',
    /** Josoorkom sign-up pop-up. */
    josoorkomKey: 'e764c457-b3ba-446f-a0c7-c62fc97925c4',
  },
  /**
   * Social profiles, shown as icons in the footer ("Follow Us").
   * TODO(client): paste each profile URL into `href`, e.g.
   *   'https://www.linkedin.com/company/…', 'https://x.com/…', 'https://www.instagram.com/…'
   * Until an `href` is set, its icon shows but is not a link. Delete an entry
   * to hide a platform the company doesn't use.
   */
  social: [
    { label: 'LinkedIn', href: '', icon: 'linkedin' },
    { label: 'X', href: '', icon: 'x-social' },
    { label: 'Instagram', href: '', icon: 'instagram' },
    { label: 'Facebook', href: '', icon: 'facebook' },
    { label: 'YouTube', href: '', icon: 'youtube' },
  ] as { label: string; href: string; icon: 'linkedin' | 'instagram' | 'x-social' | 'facebook' | 'youtube' }[],
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.contact.mapQuery)}`;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(message)}`;
