#!/usr/bin/env node
/* Image optimizer:
 * - Resize to max 1920px width
 * - JPG: mozjpeg quality 82
 * - PNG: adaptive palette + level 9
 * - Overwrites in place (preserves all references)
 * - Originals backed up in public/_images_backup_*
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const ROOT = new URL('../public/images/', import.meta.url).pathname;
const MAX_WIDTH = 1920;
const JPG_QUALITY = 82;
const PNG_QUALITY = 82; // sharp uses adaptive

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;
let errors = 0;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      // skip backup dirs
      if (entry.name.startsWith('_')) continue;
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function optimize(file) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

  const before = (await stat(file)).size;
  totalBefore += before;

  try {
    const img = sharp(file, { failOn: 'none' });
    const meta = await img.metadata();
    const needsResize = meta.width && meta.width > MAX_WIDTH;

    let pipeline = img;
    if (needsResize) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    let out;
    if (ext === '.png') {
      // sharp's adaptive palette — büyük PNG'leri ciddi küçültür
      out = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toBuffer();
    } else if (ext === '.webp') {
      out = await pipeline.webp({ quality: JPG_QUALITY }).toBuffer();
    } else {
      out = await pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true }).toBuffer();
    }

    // Sadece küçülttüyse yaz (bazen küçük görseller zaten optimize)
    if (out.length < before * 0.95) {
      const { writeFile } = await import('node:fs/promises');
      await writeFile(file, out);
      totalAfter += out.length;
      processed++;
      const saved = (((before - out.length) / before) * 100).toFixed(0);
      console.log(`✓ ${file.replace(ROOT, '')} ${(before / 1024).toFixed(0)}KB → ${(out.length / 1024).toFixed(0)}KB (-${saved}%)`);
    } else {
      totalAfter += before;
      skipped++;
    }
  } catch (e) {
    errors++;
    totalAfter += before;
    console.error(`✗ ${file}: ${e.message}`);
  }
}

console.log('🖼  Görsel optimizasyonu başlıyor...\n');
for await (const file of walk(ROOT)) {
  await optimize(file);
}

console.log(`\n📊 Sonuç:`);
console.log(`   İşlenen: ${processed}`);
console.log(`   Atlanan (zaten optimize): ${skipped}`);
console.log(`   Hata: ${errors}`);
console.log(`   Önce: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
console.log(`   Sonra: ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
console.log(`   Kazanç: ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)} MB (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`);
