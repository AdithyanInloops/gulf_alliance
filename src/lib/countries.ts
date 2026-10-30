/**
 * Country list for the phone fields' dialling-code menu (ui/FormField.astro),
 * built at build time in the page language: the Gulf countries first (Saudi
 * Arabia is the default), then every country A–Z.
 */
import { DIAL_CODES } from '@/data/phone-codes';

export interface CountryCode {
  /** ISO 3166 code, e.g. "SA". */
  iso: string;
  /** Dialling code without "+", e.g. "966". */
  dial: string;
  /** Menu text, e.g. "Saudi Arabia (+966)". */
  label: string;
}

export const DEFAULT_COUNTRY = 'SA';
const FIRST = ['SA', 'AE', 'KW', 'QA', 'BH', 'OM'];

export function countryCodes(lang: string): { first: CountryCode[]; all: CountryCode[] } {
  const names = new Intl.DisplayNames([lang], { type: 'region' });
  // Keep "+966" left-to-right inside Arabic text.
  const code = (dial: string) => (lang === 'ar' ? `⁦+${dial}⁩` : `+${dial}`);
  const all = Object.entries(DIAL_CODES)
    .map(([iso, dial]) => ({ iso, dial, label: `${names.of(iso) ?? iso} (${code(dial)})` }))
    .sort((a, b) => a.label.localeCompare(b.label, lang));
  const first = FIRST.map((iso) => all.find((c) => c.iso === iso)!).filter(Boolean);
  return { first, all };
}
