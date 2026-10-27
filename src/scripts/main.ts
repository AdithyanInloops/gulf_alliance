/**
 * Entry point loaded on every page by layouts/BaseLayout.astro.
 * Component-specific behaviour (header menus, contact form, solutions
 * explorer, iso illustration) lives in each component's own <script>.
 */
import './smooth-scroll';
import { initFitText } from './fit-text';
import { initMotion } from './motion';

initFitText();
initMotion();
