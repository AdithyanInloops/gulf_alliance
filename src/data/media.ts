/**
 * Photos used across the site (all client photos, optimised by Astro to
 * responsive WebP). Every solution has two photos — the client's "inside" and
 * "outside" images:
 *   hero  ("inside")   → the solution's own page
 *   block ("outside")  → its block on the Solutions page
 *
 * Spare client photos not currently placed: saudi-skyline.png (backdrop of the
 * archived logo-orbit hero, docs/design-archive), low-current-smart-security.png,
 * e-commerce-warehouse.jpg, lighting-building.jpg, low-current-cctv-access.jpg.
 */
import type { ImageMetadata } from 'astro';
import type { SolutionSlug } from './types';

// Home / About
import heroSkyline from '@/assets/photos/home-hero-riyadh.jpg';
import overviewTeam from '@/assets/photos/home-overview-team.jpg';
import headquarters from '@/assets/photos/company-headquarters.jpg';
import commitmentTeam from '@/assets/photos/about-commitment-team.jpg';

// Solutions — hero
import medicalTheatre from '@/assets/photos/medical-operating-theatre.png';
import lowCurrentMeetingRoom from '@/assets/photos/low-current-smart-meeting-room.jpg';
import lightingEntrance from '@/assets/photos/lighting-solutions.png';
import elevatorLobby from '@/assets/photos/electric-elevator-lobby.png';
import ecommerceSeller from '@/assets/photos/e-commerce-seller.jpg';
import itDataCentre from '@/assets/photos/it-data-centre.jpg';
import josoorkomClassroom from '@/assets/photos/josoorkom-classroom.jpg';

// Solutions — block
import medicalPatientCare from '@/assets/photos/medical-patient-care.jpg';
import lowCurrentNetwork from '@/assets/photos/low-current-network-security.jpg';
import lightingInterior from '@/assets/photos/lighting-interior.jpg';
import elevatorMaintenance from '@/assets/photos/elevator-maintenance.jpg';
import ecommerceFulfilment from '@/assets/photos/e-commerce-fulfilment.jpg';
import itWorkspace from '@/assets/photos/it-workspace.jpg';
import josoorkomOnline from '@/assets/photos/josoorkom-online-learning.jpg';

export const PHOTOS = {
  /** Home hero — full-bleed, slowly zooming: the skyline with the connected solution icons. */
  homeHero: heroSkyline,
  /** Home › Company Overview — the team in front of the GULFASCO sign. */
  homeOverview: overviewTeam,
  aboutHero: headquarters,
  aboutCommitment: commitmentTeam,
};

/** Hero photo on each solution page; also cycles in the Home hero orbit. */
export const SOLUTION_HERO_PHOTOS: Record<SolutionSlug, ImageMetadata> = {
  medical: medicalTheatre,
  'low-current': lowCurrentMeetingRoom,
  lighting: lightingEntrance,
  'electric-elevator': elevatorLobby,
  'e-commerce': ecommerceSeller,
  it: itDataCentre,
  josoorkom: josoorkomClassroom,
};

/**
 * Horizontal focal point for each hero photo inside the round frame of the
 * Home hero orbit (a square crop of a wide photo), so the subject — signage,
 * people, equipment — sits in the middle of the circle.
 */
export const ORBIT_FOCUS: Record<SolutionSlug, string> = {
  medical: '57% 50%',
  'low-current': '44% 50%',
  lighting: '24% 50%',
  'electric-elevator': '36% 50%',
  'e-commerce': '40% 50%',
  it: '52% 50%',
  josoorkom: '50% 50%',
};

/** Photo beside each solution on the Solutions page. */
export const SOLUTION_BLOCK_PHOTOS: Record<SolutionSlug, ImageMetadata> = {
  medical: medicalPatientCare,
  'low-current': lowCurrentNetwork,
  lighting: lightingInterior,
  'electric-elevator': elevatorMaintenance,
  'e-commerce': ecommerceFulfilment,
  it: itWorkspace,
  josoorkom: josoorkomOnline,
};

/**
 * Focal point (CSS object-position) for photos whose subject is off-centre,
 * so it stays in frame when a card crops the image. Used by ui/Photo.astro.
 */
const FOCUS = new Map<ImageMetadata, string>([
  [heroSkyline, '60% 45%'],
  [overviewTeam, '52% 50%'],
  [headquarters, '62% 55%'],
  [commitmentTeam, '52% 45%'],
  [medicalTheatre, '62% 55%'],
  [lowCurrentMeetingRoom, '50% 55%'],
  [lightingEntrance, '30% 50%'],
  [elevatorLobby, '42% 45%'],
  [ecommerceFulfilment, '20% 50%'],
  [itDataCentre, '45% 50%'],
  [josoorkomClassroom, '50% 40%'],
  [medicalPatientCare, '28% 50%'],
  [lowCurrentNetwork, '38% 40%'],
  [lightingInterior, '40% 50%'],
  [elevatorMaintenance, '42% 50%'],
  [ecommerceSeller, '40% 45%'],
  [itWorkspace, '42% 60%'],
  [josoorkomOnline, '55% 50%'],
]);

export const focusOf = (src: ImageMetadata) => FOCUS.get(src);
