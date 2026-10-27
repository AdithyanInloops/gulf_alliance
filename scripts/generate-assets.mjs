/**
 * Renders the raster brand assets in /public from the client's logo files in
 * src/assets/brand:
 *   favicon-32.png, icon-192.png, icon-512.png   (logo mark, transparent)
 *   apple-touch-icon.png (180, mark on white — iOS fills transparency black)
 *   logo.png (stacked logo on white, 600×600 — used in JSON-LD)
 *   og-default.png (1200×630 social share image)
 * and, next to the client's files:
 *   logo-header.png  the horizontal logo recomposed with the name enlarged
 *                    (in the original it is a third of the mark's height,
 *                    too small to read in the header)
 * plus light versions for navy backgrounds — name in white, the mark's blues
 * brightened, gold untouched:
 *   logo-header-light.png   (header while the mobile menu is open)
 *   logo-stacked-light.png  (footer)
 *
 * Run with `npm run assets` after replacing the logo files.
 */
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const brand = `${root}src/assets/brand/`;
const out = `${root}public/`;
const mark = `${brand}logo-mark.png`;
const stacked = `${brand}logo-stacked.png`;
const horizontal = `${brand}logo-horizontal.png`;

const onCanvas = async (src, size, inner, background) => {
  const img = await sharp(src).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: img, gravity: 'center' }])
    .png();
};

const clear = { r: 0, g: 0, b: 0, alpha: 0 };
const white = { r: 255, g: 255, b: 255, alpha: 1 };

for (const [file, size] of [['favicon-32.png', 32], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await (await onCanvas(mark, size, Math.round(size * 0.96), clear)).toFile(out + file);
  console.log('✓', file);
}
await (await onCanvas(mark, 180, 150, white)).toFile(`${out}apple-touch-icon.png`);
console.log('✓ apple-touch-icon.png');
await (await onCanvas(stacked, 600, 520, white)).toFile(`${out}logo.png`);
console.log('✓ logo.png');

// Social share image (navy hero style from the UI designs) -----------------------
const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="l" cx="10%" cy="60%" r="55%"><stop offset="0" stop-color="#0e2e54"/><stop offset="1" stop-color="#07162b" stop-opacity="0"/></radialGradient>
    <radialGradient id="r" cx="95%" cy="15%" r="50%"><stop offset="0" stop-color="#374862" stop-opacity=".7"/><stop offset="1" stop-color="#07162b" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#07162b"/>
  <rect width="1200" height="630" fill="url(#l)"/>
  <rect width="1200" height="630" fill="url(#r)"/>
  <line x1="0" y1="420" x2="1200" y2="60" stroke="rgba(255,255,255,0.14)"/>
  <line x1="260" y1="0" x2="1200" y2="520" stroke="rgba(248,184,77,0.35)" stroke-dasharray="10 8"/>
  <rect x="72" y="62" width="300" height="104" rx="12" fill="#ffffff"/>
  <text x="76" y="318" font-family="Times New Roman, Tinos, serif" font-size="76" font-weight="700" fill="#ffffff" letter-spacing="-2">Integrated Solutions.</text>
  <text x="76" y="404" font-family="Times New Roman, Tinos, serif" font-size="76" font-weight="700" fill="#f8b84d" letter-spacing="-2">Infinite Possibilities.</text>
  <text x="78" y="470" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#d3e4fd">Healthcare · Building systems · Lighting · Technology · Digital services</text>
  <rect x="78" y="512" width="300" height="52" rx="6" fill="#f8b84d"/>
  <text x="228" y="546" text-anchor="middle" font-family="Times New Roman, Tinos, serif" font-size="22" font-weight="700" fill="#000f26">gulfasco.com</text>
</svg>`;

const logo = await sharp(horizontal).resize({ height: 80 }).toBuffer();
const logoMeta = await sharp(logo).metadata();
await sharp(Buffer.from(bg))
  .composite([{ input: logo, left: 72 + Math.round((300 - logoMeta.width) / 2), top: 74 }])
  .png()
  .toFile(`${out}og-default.png`);
console.log('✓ og-default.png');

// Header logo: the same mark, the name at 60% of its height --------------------------
// In logo-horizontal.png (1641×493) the mark spans x 0–536 and the two-line name
// x 579–1638, y 175–350.
const MARK_BOX = { left: 0, top: 0, width: 540, height: 493 };
const NAME_BOX = { left: 576, top: 172, width: 1065, height: 182 };
const NAME_GAP = 46;
const nameHeight = Math.round(MARK_BOX.height * 0.6);
const markArt = await sharp(horizontal).extract(MARK_BOX).toBuffer();
const nameArt = await sharp(horizontal).extract(NAME_BOX).resize({ height: nameHeight, kernel: 'lanczos3' }).toBuffer();
const nameWidth = (await sharp(nameArt).metadata()).width;
const headerArt = await sharp({ create: { width: MARK_BOX.width + NAME_GAP + nameWidth, height: MARK_BOX.height, channels: 4, background: clear } })
  .composite([
    { input: markArt, left: 0, top: 0 },
    { input: nameArt, left: MARK_BOX.width + NAME_GAP, top: Math.round((MARK_BOX.height - nameHeight) / 2) },
  ])
  .png({ compressionLevel: 9 })
  .toBuffer();
await sharp(headerArt).toFile(`${brand}logo-header.png`);
console.log('✓ src/assets/brand/logo-header.png');

// Light logos for navy backgrounds --------------------------------------------------
/** `isWordmark({ x, y, width, height })` tells the name text apart from the mark (spheres + swoosh). */
const lightLogo = async (src, file, isWordmark) => {
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    if (r > b + 30) continue; // gold: keep
    const p = i / 4;
    if (isWordmark({ x: p % info.width, y: Math.floor(p / info.width), width: info.width, height: info.height })) {
      data[i] = data[i + 1] = data[i + 2] = 255; // navy wordmark → white (edges keep their alpha)
    } else {
      // Blue spheres and swoosh: same hue, brighter, so they hold up on navy.
      data[i] = Math.min(255, Math.round(r * 1.6 + 16));
      data[i + 1] = Math.min(255, Math.round(g * 1.6 + 20));
      data[i + 2] = Math.min(255, Math.round(b * 1.6 + 28));
    }
  }
  await sharp(data, { raw: info }).png({ compressionLevel: 9 }).toFile(`${brand}${file}`);
  console.log(`✓ src/assets/brand/${file}`);
};
// Header: the name starts after the mark and the gap.
await lightLogo(headerArt, 'logo-header-light.png', ({ x }) => x >= MARK_BOX.width + NAME_GAP / 2);
// Stacked: the mark ends by row 496 of 737 and the name starts at 540.
await lightLogo(stacked, 'logo-stacked-light.png', ({ y, height }) => y >= height * (518 / 737));
