/**
 * Renders the raster brand assets in /public from the client's logo files in
 * src/assets/brand:
 *   favicon-32.png, icon-192.png, icon-512.png   (logo mark, transparent)
 *   apple-touch-icon.png (180, mark on white — iOS fills transparency black)
 *   logo.png (stacked logo on white, 600×600 — used in JSON-LD)
 *   og-default.png (1200×630 social share image)
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
