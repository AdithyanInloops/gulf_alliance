/**
 * Icon registry. Lucide icons (ISC licence) are imported as raw SVG at build
 * time, so only the icons listed here end up in the HTML — no icon font or
 * runtime JS. To add an icon: import it below and add it to ICONS.
 * Browse names at https://lucide.dev/icons
 */
import arrowDownIcon from 'lucide-static/icons/arrow-down.svg?raw';
import arrowLeftIcon from 'lucide-static/icons/arrow-left.svg?raw';
import arrowRightIcon from 'lucide-static/icons/arrow-right.svg?raw';
import arrowUpDownIcon from 'lucide-static/icons/arrow-up-down.svg?raw';
import arrowUpRightIcon from 'lucide-static/icons/arrow-up-right.svg?raw';
import atSignIcon from 'lucide-static/icons/at-sign.svg?raw';
import awardIcon from 'lucide-static/icons/award.svg?raw';
import badgeCheckIcon from 'lucide-static/icons/badge-check.svg?raw';
import bellRingIcon from 'lucide-static/icons/bell-ring.svg?raw';
import bookOpenIcon from 'lucide-static/icons/book-open.svg?raw';
import briefcaseMedicalIcon from 'lucide-static/icons/briefcase-medical.svg?raw';
import building2Icon from 'lucide-static/icons/building-2.svg?raw';
import cctvIcon from 'lucide-static/icons/cctv.svg?raw';
import checkIcon from 'lucide-static/icons/check.svg?raw';
import chevronDownIcon from 'lucide-static/icons/chevron-down.svg?raw';
import chevronRightIcon from 'lucide-static/icons/chevron-right.svg?raw';
import circleAlertIcon from 'lucide-static/icons/circle-alert.svg?raw';
import circleCheckIcon from 'lucide-static/icons/circle-check.svg?raw';
import clipboardListIcon from 'lucide-static/icons/clipboard-list.svg?raw';
import eyeIcon from 'lucide-static/icons/eye.svg?raw';
import factoryIcon from 'lucide-static/icons/factory.svg?raw';
import fingerprintIcon from 'lucide-static/icons/fingerprint.svg?raw';
import flagIcon from 'lucide-static/icons/flag.svg?raw';
import globeIcon from 'lucide-static/icons/globe.svg?raw';
import graduationCapIcon from 'lucide-static/icons/graduation-cap.svg?raw';
import handshakeIcon from 'lucide-static/icons/handshake.svg?raw';
import headsetIcon from 'lucide-static/icons/headset.svg?raw';
import heartHandshakeIcon from 'lucide-static/icons/heart-handshake.svg?raw';
import hospitalIcon from 'lucide-static/icons/hospital.svg?raw';
import houseIcon from 'lucide-static/icons/house.svg?raw';
import layersIcon from 'lucide-static/icons/layers.svg?raw';
import leafIcon from 'lucide-static/icons/leaf.svg?raw';
import lightbulbIcon from 'lucide-static/icons/lightbulb.svg?raw';
import loaderCircleIcon from 'lucide-static/icons/loader-circle.svg?raw';
import mailIcon from 'lucide-static/icons/mail.svg?raw';
import mapPinIcon from 'lucide-static/icons/map-pin.svg?raw';
import menuIcon from 'lucide-static/icons/menu.svg?raw';
import messageSquareIcon from 'lucide-static/icons/message-square.svg?raw';
import messageSquareTextIcon from 'lucide-static/icons/message-square-text.svg?raw';
import monitorPlayIcon from 'lucide-static/icons/monitor-play.svg?raw';
import networkIcon from 'lucide-static/icons/network.svg?raw';
import packageIcon from 'lucide-static/icons/package.svg?raw';
import phoneIcon from 'lucide-static/icons/phone.svg?raw';
import phoneCallIcon from 'lucide-static/icons/phone-call.svg?raw';
import searchIcon from 'lucide-static/icons/search.svg?raw';
import sendIcon from 'lucide-static/icons/send.svg?raw';
import serverIcon from 'lucide-static/icons/server.svg?raw';
import shieldIcon from 'lucide-static/icons/shield.svg?raw';
import shieldCheckIcon from 'lucide-static/icons/shield-check.svg?raw';
import shoppingCartIcon from 'lucide-static/icons/shopping-cart.svg?raw';
import slidersHorizontalIcon from 'lucide-static/icons/sliders-horizontal.svg?raw';
import sparklesIcon from 'lucide-static/icons/sparkles.svg?raw';
import squareArrowOutUpRightIcon from 'lucide-static/icons/square-arrow-out-up-right.svg?raw';
import stethoscopeIcon from 'lucide-static/icons/stethoscope.svg?raw';
import storeIcon from 'lucide-static/icons/store.svg?raw';
import targetIcon from 'lucide-static/icons/target.svg?raw';
import trendingUpIcon from 'lucide-static/icons/trending-up.svg?raw';
import truckIcon from 'lucide-static/icons/truck.svg?raw';
import userIcon from 'lucide-static/icons/user.svg?raw';
import usersIcon from 'lucide-static/icons/users.svg?raw';
import listChecksIcon from 'lucide-static/icons/list-checks.svg?raw';
import pauseIcon from 'lucide-static/icons/pause.svg?raw';
import playIcon from 'lucide-static/icons/play.svg?raw';
import rotateCwIcon from 'lucide-static/icons/rotate-cw.svg?raw';
import xIcon from 'lucide-static/icons/x.svg?raw';
import zapIcon from 'lucide-static/icons/zap.svg?raw';

/** Keep only the shapes inside <svg>…</svg>; Icon.astro supplies the wrapper. */
const inner = (svg: string) =>
  svg
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();

/** Brand marks (not in Lucide), drawn on the same 24×24 stroke grid. */
const BRAND = {
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  instagram:
    '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  'x-social': '<path d="M4 4l11.7 16H20L8.3 4z"/><path d="M4 20l6.8-6.8M13.2 10.8 20 4"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  youtube:
    '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
  // TikTok note, from Tabler Icons "brand-tiktok" (MIT).
  tiktok: '<path d="M21 7.917v4.034a9.948 9.948 0 0 1-5-1.951v4.5a6.5 6.5 0 1 1-8-6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"/>',
};

export const ICONS = {
  'arrow-down': inner(arrowDownIcon),
  'arrow-left': inner(arrowLeftIcon),
  'arrow-right': inner(arrowRightIcon),
  'arrow-up-down': inner(arrowUpDownIcon),
  'arrow-up-right': inner(arrowUpRightIcon),
  'at-sign': inner(atSignIcon),
  award: inner(awardIcon),
  'badge-check': inner(badgeCheckIcon),
  'bell-ring': inner(bellRingIcon),
  'book-open': inner(bookOpenIcon),
  'briefcase-medical': inner(briefcaseMedicalIcon),
  'building-2': inner(building2Icon),
  cctv: inner(cctvIcon),
  check: inner(checkIcon),
  'chevron-down': inner(chevronDownIcon),
  'chevron-right': inner(chevronRightIcon),
  'circle-alert': inner(circleAlertIcon),
  'circle-check': inner(circleCheckIcon),
  'clipboard-list': inner(clipboardListIcon),
  eye: inner(eyeIcon),
  factory: inner(factoryIcon),
  fingerprint: inner(fingerprintIcon),
  flag: inner(flagIcon),
  globe: inner(globeIcon),
  'graduation-cap': inner(graduationCapIcon),
  handshake: inner(handshakeIcon),
  headset: inner(headsetIcon),
  'heart-handshake': inner(heartHandshakeIcon),
  hospital: inner(hospitalIcon),
  house: inner(houseIcon),
  layers: inner(layersIcon),
  'list-checks': inner(listChecksIcon),
  leaf: inner(leafIcon),
  lightbulb: inner(lightbulbIcon),
  'loader-circle': inner(loaderCircleIcon),
  mail: inner(mailIcon),
  'map-pin': inner(mapPinIcon),
  menu: inner(menuIcon),
  'message-square': inner(messageSquareIcon),
  'message-square-text': inner(messageSquareTextIcon),
  'monitor-play': inner(monitorPlayIcon),
  network: inner(networkIcon),
  package: inner(packageIcon),
  pause: inner(pauseIcon),
  phone: inner(phoneIcon),
  'phone-call': inner(phoneCallIcon),
  play: inner(playIcon),
  'rotate-cw': inner(rotateCwIcon),
  search: inner(searchIcon),
  send: inner(sendIcon),
  server: inner(serverIcon),
  shield: inner(shieldIcon),
  'shield-check': inner(shieldCheckIcon),
  'shopping-cart': inner(shoppingCartIcon),
  'sliders-horizontal': inner(slidersHorizontalIcon),
  sparkles: inner(sparklesIcon),
  'square-arrow-out-up-right': inner(squareArrowOutUpRightIcon),
  stethoscope: inner(stethoscopeIcon),
  store: inner(storeIcon),
  target: inner(targetIcon),
  'trending-up': inner(trendingUpIcon),
  truck: inner(truckIcon),
  user: inner(userIcon),
  users: inner(usersIcon),
  x: inner(xIcon),
  zap: inner(zapIcon),
  ...BRAND,
};

export type IconName = keyof typeof ICONS;
