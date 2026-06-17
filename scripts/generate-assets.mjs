// One-shot generator for raster icons + the social share (OG) image.
// Run: node scripts/generate-assets.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const assets = join(root, 'src', 'assets');

const favSvg = join(pub, 'favicon.svg');

// ── Favicons / app icons ────────────────────────────────────────────
const pngTargets = [
  { size: 32, out: 'favicon-32.png', flatten: false },
  { size: 192, out: 'favicon-192.png', flatten: false },
  { size: 512, out: 'favicon-512.png', flatten: false },
  { size: 512, out: 'logo.png', flatten: false },
  { size: 180, out: 'apple-touch-icon.png', flatten: '#363E20' },
];

for (const t of pngTargets) {
  let img = sharp(favSvg, { density: 384 }).resize(t.size, t.size);
  if (t.flatten) img = img.flatten({ background: t.flatten });
  await img.png().toFile(join(pub, t.out));
  console.log('icon →', t.out);
}

// ── OG / social share image (1200×630) ──────────────────────────────
const W = 1200;
const H = 630;

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="rgba(28,24,18,0.30)"/>
      <stop offset="0.55" stop-color="rgba(28,24,18,0.55)"/>
      <stop offset="1" stop-color="rgba(28,24,18,0.80)"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="50%" y="40%" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="84" font-weight="600" fill="#ffffff" letter-spacing="1">The Porch Kitchen</text>
  <text x="50%" y="51%" text-anchor="middle" font-family="Georgia, serif" font-style="italic"
        font-size="34" fill="#f3d9a8">Farm-fresh California cooking, French at heart.</text>
  <text x="50%" y="63%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-size="22" letter-spacing="6" fill="#efe9dc">SEBASTOPOL · SONOMA WINE COUNTRY</text>
  <rect x="${W / 2 - 70}" y="69%" width="140" height="2" fill="#b0822f"/>
  <text x="50%" y="77%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif"
        font-size="22" letter-spacing="3" fill="#ffffff">LUNCH · HAPPY HOUR · TUE–SAT</text>
</svg>`);

await sharp(join(assets, 'hero-spread.jpg'))
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(join(pub, 'og-image.jpg'));
console.log('og-image → og-image.jpg');
