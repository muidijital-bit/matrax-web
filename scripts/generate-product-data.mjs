#!/usr/bin/env node
/* Ürün verisi kopyası (build öncesi otomatik çalışır):
 * - Aktif ürünleri Supabase'den okur, her biri için public/data/products/<slug>.json yazar
 * - Ürün sayfası bilgiyi önce bu dosyadan (sitenin kendi sunucusundan, hızlı) alır,
 *   ardından veritabanından teyit eder; panelde yapılan değişiklikler yine görünür
 * - Supabase'e ulaşılamazsa build durmaz; sayfa doğrudan veritabanını kullanır
 * Kullanım: npm run build (prebuild) ya da node scripts/generate-product-data.mjs
 */
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const OUT = join(root, 'public/data/products');

async function loadEnv() {
  const env = { ...process.env };
  try {
    for (const line of (await readFile(join(root, '.env'), 'utf8')).split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m && !(m[1] in env)) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  } catch { /* .env yoksa yalnızca ortam değişkenleri */ }
  return env;
}

try {
  const env = await loadEnv();
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Supabase ayarı yok');

  const res = await fetch(`${url}/rest/v1/products?select=*&is_active=eq.true`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const rows = await res.json();
  if (!Array.isArray(rows) || rows.length === 0) throw new Error('ürün bulunamadı');

  // Kaldırılan ürünlerin eski dosyaları kalmasın
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  for (const row of rows) {
    if (!/^[a-z0-9-]+$/.test(row.slug)) continue;
    await writeFile(join(OUT, `${row.slug}.json`), JSON.stringify(row));
  }
  console.log(`Ürün verisi kopyası: ${rows.length} ürün → public/data/products`);
} catch (e) {
  console.warn(`Ürün verisi kopyası atlandı (${e.message}); ürün sayfaları doğrudan veritabanını kullanır.`);
}
