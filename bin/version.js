import { fileURLToPath } from 'url';
import { dirname, join as joinPath } from 'path';
import { patchPackageFileSync } from './package.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const VERSION_REGEXP = /^\d+\.\d+\.\d+(?:-beta\.\d+)?$/;
const version = process.argv[2];

if (!version) {
  console.log(`Usage: npm run version [version]`);
  process.exit();
}
if (!VERSION_REGEXP.test(version)) {
  console.error(`Illegal version: ${version}`);
  process.exit(1);
}

const rootDir = joinPath(__dirname, '..');
patchPackageFileSync(rootDir, { version });
