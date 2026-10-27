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
    /**
     * Where the "open in maps" links and the embedded map point. A Google place
     * ID, not an address search: the Google Maps app on phones re-runs a text
     * search near the phone's own location and can land somewhere else, while a
     * place ID opens the same named place on every device. `geo` is that place's
     * centre, used for the embedded map's pin.
     * Currently the Olaya district of Al Khobar (the office street is not on
     * Google as a searchable address). TODO(client): once the company has a
     * Google Business Profile, put its name and place ID here so the link opens
     * the company itself.
     */
    map: {
      name: 'Olaya, Al Khobar, Saudi Arabia',
      placeId: 'ChIJf80b79PnST4RPJEovT-1ngw',
      geo: { lat: 26.298007, lng: 50.178626 },
    },
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
   * Social profiles (from the client), shown as icons in the footer ("Follow
   * Us") and listed for search engines (Organization `sameAs`). An entry with
   * an empty `href` shows its icon without a link; delete an entry to hide it.
   * Available icons also include 'x-social' and 'youtube'.
   */
  social: [
    { label: 'TikTok', href: 'https://www.tiktok.com/@gulfasco', icon: 'tiktok' },
    { label: 'Instagram', href: 'https://www.instagram.com/gulfasco.sa/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595180615184', icon: 'facebook' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gulf-alliance-solutions-co-9a57a0446', icon: 'linkedin' },
  ] as { label: string; href: string; icon: 'linkedin' | 'instagram' | 'x-social' | 'facebook' | 'youtube' | 'tiktok' }[],
} as const;

const { map } = SITE.contact;
/** Opens the place in the Google Maps app (phones) or google.com/maps (desktop). */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(map.name)}&query_place_id=${map.placeId}`;
/** A pin on the same place for the embedded map on the Contact page. */
export const mapEmbedUrl = (lang: string) => `https://www.google.com/maps?q=${map.geo.lat},${map.geo.lng}&z=15&hl=${lang}&output=embed`;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(message)}`;
