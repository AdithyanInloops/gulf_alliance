/**
 * One-line texts marked [data-fit] (white-space: nowrap in their CSS): when
 * the line is wider than its box anyway — a narrow phone, a fallback font,
 * enlarged system text — its font size is lowered until the whole line fits,
 * so it is never cut off. Re-checked when fonts load and on resize.
 */
export function initFitText() {
  const els = [...document.querySelectorAll<HTMLElement>('[data-fit]')];
  if (!els.length) return;

  const fit = () =>
    els.forEach((el) => {
      el.style.fontSize = '';
      if (!el.clientWidth) return;
      const over = el.scrollWidth / el.clientWidth;
      if (over > 1) el.style.fontSize = `${(parseFloat(getComputedStyle(el).fontSize) / over) * 0.97}px`;
    });

  let frame = 0;
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(fit);
  };
  fit();
  document.fonts?.ready.then(schedule);
  window.addEventListener('resize', schedule, { passive: true });
}
