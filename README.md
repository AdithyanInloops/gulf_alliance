# Gulf Alliance Solutions Company — Website

Marketing site for Gulf Alliance Solutions Company (Gulf ASCO), built with
**Astro 7**, **Tailwind CSS 4** and **GSAP + Lenis** (scroll reveals, smooth
scroll). It is a fully static site in **English and Arabic**: every page is
pre-rendered once per language.

- **English** lives at the root (`/about/`), **Arabic** under `/ar/`
  (`/ar/about/`), right-to-left. The EN / العربية slider in the header switches
  to the same page in the other language.
- **Copy** comes only from the client's content document (`src/data/en/`). The
  Arabic copy in `src/data/ar/` is a translation with exactly the same shape —
  have a native speaker / the client review it before launch.
- **Photos** are the client's (`src/assets/photos/`, mapped in `src/data/media.ts`).

```bash
npm install
npm run dev       # http://localhost:4321  (Arabic: http://localhost:4321/ar/)
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
npm run check     # type-check .astro + .ts
npm run assets    # re-render OG image, favicons and logo.png from public/favicon.svg
```

## Deploying to Vercel

**Recommended — GitHub:** push this repository to GitHub, then in Vercel either
import it (vercel.com/new → Import Git Repository) or connect it to the existing
project (Project → Settings → Git). Vercel detects **Astro** (build `astro build`,
output `dist`), installs the packages itself and redeploys on every push to `main`.
`.gitignore` keeps `node_modules`, `dist`, `.astro`, `.env` and `src/uploads` out of
the repository.

Add `PUBLIC_WEB3FORMS_ACCESS_KEY` under Project → Settings → Environment Variables
if the forms should send email (see "Forms"), then redeploy.

**Without Git:** `npm run deploy:zip` writes `../gulf-asco-website-deploy.zip`
(source only, ~20 MB) for Vercel Drop — never drop the whole folder: `node_modules`
alone is ~20,000 files and leaves the upload stuck on "Preparing files".
`.vercelignore` does the same for CLI deploys (`npx vercel`).

## Where things live

```
src/
  i18n/index.ts         languages, getLang(url), localize(path, lang), langPaths()
  data/                 ← ALL website copy
    en/                 English (word for word from the content document)
      site.ts           brand, address, navigation, footer, interface microcopy (UI)
      home.ts about.ts contact.ts
      solutions.ts      the 7 solutions + the Solutions overview page
    ar/                 Arabic — same files, same shape (typed against en/)
    index.ts            getContent(Astro.url) → copy + routes (R) + lang for the page
    routes.ts           URLs per language (routes('ar').about === '/ar/about/')
    site.ts             language-independent settings: phone, email, WhatsApp,
                        Josoorkom URL, social links
    media.ts            which photo is used where
  pages/
    [...lang]/          one file per page, rendered for "" (English) and "ar"
      index.astro about.astro contact.astro privacy-policy.astro
      terms-and-conditions.astro solutions/index.astro solutions/[slug].astro
    404.astro           bilingual
  components/
    ui/                 primitives: Button, Icon (+ icons.ts), Section, SectionHeading,
                        Eyebrow, IconTile, CheckList, Badge, Photo, Logo,
                        Breadcrumbs, FormField
    layout/             BaseHead (SEO + hreflang), Header (nav, dropdown, language
                        slider, mobile menu), Footer, WhatsAppButton, JosoorkomDialog
    sections/
      shared/           PageHero (light), DarkHero (navy), DarkBackdrop, CtaBand,
                        EnquiryForm, ProductCard, LegalPlaceholder
      home/ about/ solutions/ solution/ contact/   page sections
  layouts/BaseLayout.astro   page shell (fonts, lang/dir, head, header, main, footer)
  scripts/              main.ts (entry), smooth-scroll.ts, motion.ts (reveals),
                        forms.ts (shared form validation)
  lib/schema.ts         page-level JSON-LD (Service, ContactPage, ItemList…)
  styles/global.css     design tokens (navy / gold / amber / light blues), base, buttons
  assets/brand, assets/photos   logo artwork and photos (optimised by Astro)
public/                 favicons, OG image, manifest, robots.txt
```

**Debugging a page:** open `src/pages/[...lang]/<page>.astro` — it lists the
section components in order. Each section lives in
`src/components/sections/<page>/` and reads its copy with
`getContent(Astro.url)`, so the same component renders English or Arabic.
Behaviour sits in the component's own `<script>` (Header, HomeHero orbit,
HomeSolutions flip cards, EnquiryForm, JosoorkomDialog) or in `src/scripts/`.

## Editing content

Change text in `src/data/en/` **and** the matching entry in `src/data/ar/`;
components never hard-code copy. TypeScript fails the build if the two
languages drift apart in shape. Adding a page: create it in
`src/pages/[...lang]/` with `export const getStaticPaths = langPaths;`.

## Notable features

- **Home hero** — full-screen photo of the Riyadh skyline with the connected
  solution icons, slowly zooming in and out, under a navy gradient that keeps
  the headline readable, plus a scrolling ticker of all solutions. The earlier
  "logo orbit" hero is archived, with screenshots, full source and restore steps,
  in `docs/design-archive/home-hero-logo-orbit.md`.
- **Home › Our Solutions** — flip boxes modelled on technoorbits.com.sa: the
  white front flips up (around the horizontal axis, 750 ms) to a navy back with
  the offerings and the link. Hover (mouse) or tap / "View offerings" flips it.
- **Josoorkom gate** — every link to the Josoorkom platform
  (`SITE.josoorkomUrl`, https://www.josoorcom.com/) opens a dialog asking for
  name, surname, mobile and email; on submit the visitor continues to the
  platform.
- **WhatsApp** — floating button (bottom right) that opens a chat with
  +966 54 511 1301 with a greeting prefilled in the page language.

## Motion

Sections fade up as they scroll into view (`data-reveal`, or
`data-reveal-group` for staggered children — see `src/scripts/motion.ts`).
Heroes animate in with CSS. Everything respects `prefers-reduced-motion` (the
orbit and ticker stand still), and nothing is hidden without JavaScript.

## SEO

Per-page title, description and canonical; `hreflang` alternates between the
English and Arabic pages (also in the sitemap); Open Graph and Twitter cards
(`public/og-default.png`); JSON-LD for Organization and WebSite, plus
BreadcrumbList, Service, AboutPage, ContactPage and ItemList where relevant;
`sitemap-index.xml` (via @astrojs/sitemap); `robots.txt`; web manifest; semantic
landmarks and a single `h1` per page. The production domain is set in
`astro.config.mjs` (`site`) and `src/data/site.ts`.

## Forms

The Contact enquiry form and the Josoorkom dialog are sent wherever
`src/lib/form-endpoint.ts` points, set by environment variables (see
`.env.example`; on Vercel add them under Project → Settings → Environment
Variables and redeploy):

- `PUBLIC_WEB3FORMS_ACCESS_KEY` — a Web3Forms access key. The forms post to the
  Web3Forms API with the key, a subject and a sender name; Web3Forms emails each
  submission to the address the key was created for (the Josoorkom dialog
  arrives with the subject "Josoorkom visit").
- `PUBLIC_FORM_ENDPOINT` — any other URL that accepts a FormData POST
  (Formspree, a serverless function…). Takes priority if both are set.

With neither, the enquiry form opens the visitor's email app addressed to
info@gulfasco.com, and the Josoorkom dialog continues to the platform without
storing the details. Links like `/contact/?solution=lighting#enquiry` preselect
"Solution of Interest".

**info@gulfasco.com is on Microsoft 365.** If the Web3Forms access-key email or
submissions don't arrive, check Junk and the Microsoft 365 quarantine
(security.microsoft.com/quarantine), and add `web3forms.com` as a safe sender
(or an allow rule in the Exchange admin centre).

## Waiting on the client

- **Arabic review** — `src/data/ar/` should be proofread by the client.
- **Social profiles** — the footer shows LinkedIn, X, Instagram, Facebook and
  YouTube icons; paste each profile URL into `href` in `SITE.social`
  (`src/data/site.ts`) to make it a link, or delete platforms that are not used.
- **Privacy Policy / Terms and Conditions** — the pages are placeholders. They are
  `noindex` and left out of the sitemap.
- **Copy to confirm** — three sentences read like internal notes and are flagged
  with `NOTE(client)` in `src/data/en/solutions.ts` (Fire Alarm Systems, Josoorkom
  Learning Resources, Josoorkom Platform Features).
- **Sections in the structure doc with no copy yet** — About "Our Story", plus
  the extra sub-sections listed for each solution. (Products — the page and the
  Home "Supporting Products" section — were removed at the client's request.) These can be added as new data entries once the text is
  supplied.
