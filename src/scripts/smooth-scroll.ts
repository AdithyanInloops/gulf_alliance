/**
 * Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in
 * sync. Disabled for reduced-motion users (native scrolling instead).
 * Import `lockScroll` / `unlockScroll` wherever the page must not scroll.
 */
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './env';

gsap.registerPlugin(ScrollTrigger);

const HEADER_OFFSET = 92;

export const lenis: Lenis | null = prefersReducedMotion
  ? null
  : new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      // Same-page "#id" links glide instead of jumping.
      anchors: { offset: -HEADER_OFFSET },
    });

if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export function lockScroll() {
  lenis?.stop();
  document.documentElement.classList.add('is-locked');
}

export function unlockScroll() {
  document.documentElement.classList.remove('is-locked');
  lenis?.start();
}

/** Scroll to an element (smoothly when Lenis is active). */
export function scrollToElement(target: HTMLElement) {
  if (lenis) lenis.scrollTo(target, { offset: -HEADER_OFFSET });
  else target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
}
