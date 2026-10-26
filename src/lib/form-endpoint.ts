/**
 * Where the site's two forms are sent. Each form has its own Web3Forms access
 * key (src/data/site.ts → SITE.forms), so they can go to different inboxes and
 * be managed separately in the Web3Forms dashboard:
 *   enquiry    Contact page + solution pages enquiry form
 *   josoorkom  Josoorkom sign-up pop-up
 *
 * Overrides (optional, .env or Vercel → Settings → Environment Variables):
 *   PUBLIC_WEB3FORMS_ENQUIRY_KEY / PUBLIC_WEB3FORMS_JOSOORKOM_KEY  replace a key
 *   PUBLIC_FORM_ENDPOINT  send both forms to another FormData endpoint instead
 *                         (Formspree, a serverless function…; no access key sent)
 * With no endpoint at all, the enquiry form falls back to the visitor's email app.
 */
import { SITE } from '@/data/site';

const WEB3FORMS_API = 'https://api.web3forms.com/submit';

const KEYS = {
  enquiry: import.meta.env.PUBLIC_WEB3FORMS_ENQUIRY_KEY || SITE.forms.enquiryKey,
  josoorkom: import.meta.env.PUBLIC_WEB3FORMS_JOSOORKOM_KEY || SITE.forms.josoorkomKey,
};

export type FormKind = keyof typeof KEYS;

/** Endpoint and Web3Forms key ('' when posting to a custom endpoint) for a form. */
export function formTarget(kind: FormKind): { endpoint: string; web3formsKey: string } {
  const custom: string = import.meta.env.PUBLIC_FORM_ENDPOINT ?? '';
  if (custom) return { endpoint: custom, web3formsKey: '' };
  const key = KEYS[kind];
  return { endpoint: key ? WEB3FORMS_API : '', web3formsKey: key };
}
