/**
 * Shared client-side validation for the enquiry form and the Josoorkom
 * dialog. Messages come from the form's data attributes (data-msg-required,
 * data-msg-email, data-msg-phone) so they follow the page language. Errors are
 * written to `#<control id>-error` (see ui/FormField.astro).
 */
export type Control = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[\d\s()-]{7,20}$/;

export function setupValidation(form: HTMLFormElement) {
  const msg = {
    required: form.dataset.msgRequired ?? '',
    email: form.dataset.msgEmail ?? '',
    phone: form.dataset.msgPhone ?? '',
  };
  const controls = [...form.querySelectorAll<Control>('.field__control')];

  const setError = (control: Control, message: string) => {
    const error = form.querySelector<HTMLElement>(`#${control.id}-error`);
    if (error) error.textContent = message;
    if (message) control.setAttribute('aria-invalid', 'true');
    else control.removeAttribute('aria-invalid');
  };

  const validate = (control: Control) => {
    const value = control.value.trim();
    let message = '';
    if (control.required && !value) message = msg.required;
    else if (control.type === 'email' && value && !EMAIL.test(value)) message = msg.email;
    else if (control.type === 'tel' && value && !PHONE.test(value)) message = msg.phone;
    setError(control, message);
    return !message;
  };

  controls.forEach((control) => {
    control.addEventListener('blur', () => control.value && validate(control));
    control.addEventListener('input', () => control.hasAttribute('aria-invalid') && validate(control));
  });

  return {
    /** Validates every field; returns the invalid ones (first one focused). */
    validateAll() {
      const invalid = controls.filter((c) => !validate(c));
      invalid[0]?.focus();
      return invalid;
    },
    reset() {
      controls.forEach((c) => setError(c, ''));
    },
  };
}

/**
 * Country-code menus in phone fields (ui/FormField.astro `countryCode`): keep
 * the visible "+966" in step with the chosen country, also after a reset.
 */
export function setupCountryCodes(form: HTMLFormElement) {
  const selects = [...form.querySelectorAll<HTMLSelectElement>('select[data-cc]')];
  const sync = () =>
    selects.forEach((select) => {
      const code = select.parentElement?.querySelector('[data-cc-code]');
      if (code) code.textContent = `+${select.selectedOptions[0]?.dataset.dial ?? ''}`;
    });
  selects.forEach((select) => select.addEventListener('change', sync));
  form.addEventListener('reset', () => window.setTimeout(sync));
  sync(); // the browser may restore an earlier choice (back / forward)
}

/**
 * The full number of a phone field: the chosen country's code + the number
 * typed. A number typed with "+" or "00" is kept as entered; a leading trunk 0
 * is dropped (05… → +966 5…), except for Italy (+39), where it is part of the
 * number.
 */
export function fullPhone(form: HTMLFormElement, name: string) {
  const input = form.elements.namedItem(name) as HTMLInputElement | null;
  const phone = (input?.value ?? '').trim().replace(/\s+/g, ' ');
  if (!phone || phone.startsWith('+')) return phone;
  if (phone.startsWith('00')) return `+${phone.slice(2).trimStart()}`;
  const select = input?.closest('[data-field]')?.querySelector<HTMLSelectElement>('select[data-cc]');
  const dial = select?.selectedOptions[0]?.dataset.dial ?? '966';
  return `+${dial} ${dial === '39' ? phone : phone.replace(/^0/, '')}`;
}
