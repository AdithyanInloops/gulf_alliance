/**
 * Site-wide motion layer. Components opt in with data attributes:
 *
 *   data-reveal="up|fade|scale|tilt|left|right"   scroll reveal (+ data-reveal-delay="0.2")
 *   data-reveal-group="tilt|up|scale"             direct children reveal in a stagger
 *   data-split                                    heading words rise from a mask
 *   data-parallax="0.15"                          drifts while scrolling (speed, ±)
 *   data-tilt                                     pointer 3D tilt (uses --rx/--ry/--gx/--gy CSS variables)
 *   data-magnetic                                 button follows the pointer slightly
 *   data-scrub-var="--name" data-from="0" data-to="1"   CSS variable scrubbed by scroll
 *
 * Hidden states are applied from JS only and never to elements already on
 * screen at load, so content is always visible without JS / reduced motion.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isFinePointer, prefersReducedMotion } from './env';

gsap.registerPlugin(ScrollTrigger);

type RevealType = 'up' | 'fade' | 'scale' | 'tilt' | 'left' | 'right';

const FROM: Record<RevealType, gsap.TweenVars> = {
  up: { y: 44, opacity: 0 },
  fade: { opacity: 0 },
  scale: { scale: 0.92, opacity: 0 },
  tilt: { y: 70, rotateX: -16, opacity: 0, transformPerspective: 1000, transformOrigin: '50% 100%' },
  left: { x: -48, opacity: 0 },
  right: { x: 48, opacity: 0 },
};

const inInitialViewport = (el: Element) => el.getBoundingClientRect().top < window.innerHeight * 0.92;

/* -------------------------------------------------------------------------- */

function initReveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (inInitialViewport(el)) return;
    const type = (el.dataset.reveal as RevealType) || 'up';
    gsap.from(el, {
      ...FROM[type],
      duration: 1.1,
      ease: 'power3.out',
      delay: Number(el.dataset.revealDelay) || 0,
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
    if (inInitialViewport(group)) return;
    const type = (group.dataset.revealGroup as RevealType) || 'tilt';
    const children = Array.from(group.children) as HTMLElement[];
    gsap.from(children, {
      ...FROM[type],
      duration: 1.15,
      ease: 'power3.out',
      stagger: 0.09,
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: group, start: 'top 86%', once: true },
    });
  });
}

/** Wrap each word of a plain-text heading so it can rise from a mask. */
function splitWords(el: HTMLElement): HTMLElement[] {
  if ([...el.childNodes].some((n) => n.nodeType !== Node.TEXT_NODE)) return [];
  const words = (el.textContent ?? '').trim().split(/\s+/);
  el.textContent = '';
  return words.map((word, i) => {
    const outer = document.createElement('span');
    const inner = document.createElement('span');
    outer.className = 'split-word';
    inner.textContent = word;
    outer.append(inner);
    el.append(outer);
    if (i < words.length - 1) el.append(' ');
    return inner;
  });
}

function initSplitHeadings() {
  gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
    if (inInitialViewport(el)) return;
    const words = splitWords(el);
    if (!words.length) return;
    gsap.from(words, {
      yPercent: 110,
      rotate: 4,
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.045,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}

function initParallax() {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = Number(el.dataset.parallax) || 0.15;
    const trigger = el.closest('section') ?? el;
    gsap.fromTo(
      el,
      { y: () => -speed * 160 },
      {
        y: () => speed * 160,
        ease: 'none',
        scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
      },
    );
  });
}

function initScrubVars() {
  gsap.utils.toArray<HTMLElement>('[data-scrub-var]').forEach((el) => {
    const prop = el.dataset.scrubVar!;
    gsap.fromTo(
      el,
      { [prop]: Number(el.dataset.from ?? 0) },
      {
        [prop]: Number(el.dataset.to ?? 1),
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      },
    );
  });
}

/* -------------------------------------------------------------------------- */

function initTilt() {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt) || 9;
    let frame = 0;

    el.addEventListener('pointerenter', () => el.classList.add('is-tilting'));
    el.addEventListener('pointermove', (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        el.style.setProperty('--rx', `${((0.5 - py) * max).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${((px - 0.5) * max).toFixed(2)}deg`);
        el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
        el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
      });
    });
    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}

function initMagnetic() {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      xTo((event.clientX - rect.left - rect.width / 2) * 0.22);
      yTo((event.clientY - rect.top - rect.height / 2) * 0.32);
    });
    el.addEventListener('pointerleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/**
 * Adds `.is-inview` once an element with [data-inview] enters the viewport,
 * for CSS-driven entrances (BrandRing, BlueprintDrawing…). Their hidden
 * starting state is scoped to `html.js`, so nothing hides without JS.
 */
function initInView() {
  const els = document.querySelectorAll<HTMLElement>('[data-inview]');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-inview'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-inview');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  els.forEach((el) => io.observe(el));
}

/* -------------------------------------------------------------------------- */

export function initMotion() {
  initScrollProgress();
  initInView();
  if (prefersReducedMotion) return;

  initSplitHeadings();
  initReveals();
  initParallax();
  initScrubVars();
  if (isFinePointer) {
    initTilt();
    initMagnetic();
  }

  // Layout can shift once web fonts and images arrive.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}
