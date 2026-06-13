// One-shot importer: pulls the owner-provided Porch Kitchen photos, downsizes the
// 4000px originals to web-friendly source sizes, and sorts them into src/assets.
// Run: node scripts/import-photos.mjs
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = 'C:\\Users\\ander\\Desktop\\porchKitchenPhotos';
const A = join(root, 'src', 'assets');
const G = join(A, 'gallery');
mkdirSync(G, { recursive: true });

// Hero + intro get their own names and a touch more resolution.
const feature = {
  'soupSaladAndSandwich.jpg': 'hero-spread.jpg',
  'turkeySandwichWoodPlate.jpg': 'intro-sandwich.jpg',
};
const skip = new Set(['porchLogo.jpg', ...Object.keys(feature)]);

for (const [src, out] of Object.entries(feature)) {
  await sharp(join(SRC, src))
    .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(A, out));
  console.log('feature →', out);
}

for (const f of readdirSync(SRC)) {
  if (!/\.jpe?g$/i.test(f) || skip.has(f)) continue;
  await sharp(join(SRC, f))
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(G, f));
  console.log('gallery →', f);
}
