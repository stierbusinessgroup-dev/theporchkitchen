// Face-centered square crops for the About portraits, since the source photos
// place the subjects off to the left. Re-run with adjusted coords as needed.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const A = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'assets');

// Lisa: 1024x683 landscape, she sits left-of-center (empty chair on the right).
await sharp(join(A, 'chef-lisa.jpg'))
  .extract({ left: 70, top: 25, width: 560, height: 560 })
  .jpeg({ quality: 86 })
  .toFile(join(A, 'chef-lisa-sq.jpg'));
console.log('cropped → chef-lisa-sq.jpg');

// Kevin: 683x1024 vertical duo shot, Kevin seated on the left.
await sharp(join(A, 'kevin.jpg'))
  .extract({ left: 0, top: 160, width: 360, height: 360 })
  .jpeg({ quality: 86 })
  .toFile(join(A, 'kevin-sq.jpg'));
console.log('cropped → kevin-sq.jpg');
