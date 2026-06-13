// Prep the brand logo for web use: trim surrounding white, size down.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const A = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');
const SRC = 'C:\\Users\\ander\\Desktop\\porchKitchenPhotos\\porchLogo.jpg';

await sharp(SRC)
  .trim({ threshold: 12 })
  .resize({ width: 720, withoutEnlargement: true })
  .jpeg({ quality: 90 })
  .toFile(join(A, 'logo.jpg'));

const meta = await sharp(join(A, 'logo.jpg')).metadata();
console.log('logo →', meta.width + 'x' + meta.height);
