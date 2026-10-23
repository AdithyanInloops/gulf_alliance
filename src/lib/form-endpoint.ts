/**
 * Where the site's forms (Contact enquiry form, Josoorkom dialog) are sent.
 * Set one of these in .env (see .env.example):
 * - PUBLIC_WEB3FORMS_ACCESS_KEY  Web3Forms access key — posts to the Web3Forms API
 *                                with the key, a subject and a sender name.
 * - PUBLIC_FORM_ENDPOINT         any other URL that accepts a FormData POST
 *                                (Formspree, a serverless function…). Wins if both are set.
 * With neither, the enquiry form falls back to the visitor's email app.
 */
const WEB3FORMS_API = 'https://api.web3forms.com/submit';

/** Web3Forms keys are public by design (they only allow sending to the key's inbox). */
export const WEB3FORMS_KEY: string = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';

export const FORM_ENDPOINT: string = import.meta.env.PUBLIC_FORM_ENDPOINT || (WEB3FORMS_KEY ? WEB3FORMS_API : '');
