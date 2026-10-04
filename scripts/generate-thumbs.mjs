#!/usr/bin/env node
/* Küçük görsel üretici:
 * - public/images altındaki her JPG/PNG için en fazla 720px genişlikte WebP kopya üretir
 * - Çıktı: public/images/_thumbs/<aynı yol, uzantı dahil>.webp — ör. products/a.png → _thumbs/products/a.png.webp
 * - Kopyası güncel olan görseller atlanır; yeni görsel ekledikten sonra tekrar çalıştırın
 * Kullanım: npm run thumbs
 */
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../public/images/', import.meta.url));
const OUT = join(ROOT, '_thumbs');
const MAX_WIDTH = 720;
const QUALITY = 74;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
      yield* walk(full);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      yield full;
    }
  }
}

let made = 0, skipped = 0, failed = 0, before = 0, after = 0;

for await (const file of walk(ROOT)) {
  const rel = relative(ROOT, file);
  const target = join(OUT, rel + '.webp');
  const src = await stat(file);
  try {
    const existing = await stat(target);
    if (existing.mtimeMs >= src.mtimeMs) { skipped++; continue; }
  } catch { /* henüz üretilmemiş */ }

  try {
    await mkdir(dirname(target), { recursive: true });
    const info = await sharp(file, { failOn: 'none' })
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, alphaQuality: 80 })
      .toFile(target);
    made++;
    before += src.size;
    after += info.size;
  } catch (e) {
    failed++;
    console.warn(`Atlandı: ${rel} (${e.message})`);
  }
}

const mb = n => (n / 1024 / 1024).toFixed(1);
console.log(`Küçük görseller: ${made} üretildi, ${skipped} güncel, ${failed} hata. Üretilenler ${mb(before)} MB → ${mb(after)} MB`);
