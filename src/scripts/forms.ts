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

/** Phone numbers typed without a country code are Saudi (+966). */
export const withCountryCode = (phone: string) => (phone && !phone.startsWith('+') ? `+966 ${phone}` : phone);
