/**
 * Builds a small, clean zip of the site's source for Vercel Drop
 * (vercel.com → your project → drop the zip), next to this project folder:
 *   ../gulf-asco-website-deploy.zip
 *
 * Leaves out what Vercel doesn't need (it installs packages and builds the
 * site itself): node_modules, dist, .astro, .vercel, .env files and the raw
 * client photos in src/uploads.
 *
 * Usage: npm run deploy:zip
 */
import { execFileSync } from 'node:child_process';
import { existsSync, rmSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const out = path.resolve(root, '..', 'gulf-asco-website-deploy.zip');

const include = [
  'astro.config.mjs',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
  'README.md',
  '.env.example',
  '.gitignore',
  '.vercelignore',
  'public',
  'scripts',
  'src',
  'docs',
].filter((entry) => existsSync(path.join(root, entry)));

if (existsSync(out)) rmSync(out);

// Windows 10+ and macOS ship bsdtar, which writes .zip with -a. (On Windows, use
// the built-in one explicitly: Git Bash's GNU tar can't write zip files.)
const tar = process.platform === 'win32' ? path.join(process.env.SystemRoot ?? 'C:\\Windows', 'System32', 'tar.exe') : 'tar';
execFileSync(tar, ['-a', '-c', '-f', out, '--exclude=src/uploads', '--exclude=*.log', ...include], {
  cwd: root,
  stdio: 'inherit',
});

const mb = (statSync(out).size / 1024 / 1024).toFixed(1);
console.log(`\nCreated ${out} (${mb} MB)`);
console.log('Drop it on your Vercel project (Project → Deployments), or on vercel.com/drop for a new project.');
