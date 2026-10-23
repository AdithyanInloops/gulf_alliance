/**
 * Entry point loaded on every page by layouts/BaseLayout.astro.
 * Component-specific behaviour (header menus, contact form, solutions
 * explorer, iso illustration) lives in each component's own <script>.
 */
import './smooth-scroll';
import { initMotion } from './motion';

initMotion();
