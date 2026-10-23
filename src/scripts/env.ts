/** Browser capability flags shared by the client scripts. */
export const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
export const isMobileViewport = () => window.innerWidth < 768;
