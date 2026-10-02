#!/usr/bin/env node
/* Sitemap generator:
 * - Sabit sayfalar + ürün kategorileri + blog yazıları + ürünler
 * - Ürünler (aktif) ve yazılar (yayında) Supabase'den okunur; erişilemezse src/data altındaki yerel listeler kullanılır
 * - public/sitemap.xml dosyasını yeniden yazar
 * Kullanım: npm run sitemap
 */
import { readFile, writeFile } from 'node:fs/promises';

const SITE = 'https://matraxoyungruplari.com';
const root = new URL('../', import.meta.url);
const read = (p) => readFile(new URL(p, root), 'utf8');
const today = new Date().toISOString().slice(0, 10);

const staticPages = [
  { path: '/',               changefreq: 'weekly', priority: '1.0' },
  { path: '/katalog',        changefreq: 'weekly', priority: '0.8' },
  { path: '/projeler',       changefreq: 'weekly', priority: '0.8' },
  { path: '/imalat',         changefreq: 'weekly', priority: '0.8' },
  { path: '/galeri',         changefreq: 'weekly', priority: '0.8' },
  { path: '/yedek-parcalar', changefreq: 'weekly', priority: '0.8' },
  { path: '/blog',           changefreq: 'weekly', priority: '0.8' },
  { path: '/hakkimizda',     changefreq: 'monthly', priority: '0.7' },
  { path: '/iletisim',       changefreq: 'monthly', priority: '0.7' },
];

async function loadEnv() {
  const env = { ...process.env };
  try {
    for (const line of (await read('.env')).split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m && !(m[1] in env)) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  } catch { /* .env yoksa yalnızca process.env kullanılır */ }
  return env;
}

const env = await loadEnv();

// Supabase REST sorgusu; yapılandırma yoksa ya da istek başarısızsa hata fırlatır
async function supabaseRows(query) {
  const url = env.VITE_SUPABASE_URL;
  const key = env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Supabase ayarı yok');
  const res = await fetch(`${url}/rest/v1/${query}`, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function loadProducts() {
  try {
    const rows = await supabaseRows('products?select=slug,updated_at&is_active=eq.true&order=sort_order');
    if (rows.length > 0) {
      console.log(`Ürünler: Supabase (${rows.length})`);
      return rows.map(r => ({ slug: r.slug, lastmod: (r.updated_at ?? today).slice(0, 10) }));
    }
  } catch (e) {
    console.warn(`Ürünler Supabase'den okunamadı (${e.message}), yerel liste kullanılıyor.`);
  }
  const slugs = [...(await read('src/data/products.ts')).matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
  console.log(`Ürünler: src/data/products.ts (${slugs.length})`);
  return slugs.map(slug => ({ slug, lastmod: today }));
}

// Panel kategorileri ile yerel liste birleştirilir (panelde henüz oluşturulmamış kategori de girer)
async function loadCategories() {
  const local = [...(await read('src/data/products.ts')).matchAll(/^\s*\{ key: '([^']+)',\s+name:/gm)].map(m => m[1]);
  let remote = [];
  try {
    remote = (await supabaseRows('categories?select=key&order=sort_order')).map(r => r.key);
  } catch (e) {
    console.warn(`Kategoriler Supabase'den okunamadı (${e.message}), yerel liste kullanılıyor.`);
  }
  const keys = [...new Set([...remote, ...local])];
  console.log(`Kategoriler: ${keys.length}`);
  return keys;
}

async function loadPosts() {
  try {
    const rows = await supabaseRows('posts?select=slug,published_at,updated_at&is_published=eq.true&order=published_at.desc,id.desc');
    console.log(`Yazılar: Supabase (${rows.length})`);
    return rows.map(r => ({ slug: r.slug, lastmod: (r.updated_at ?? r.published_at ?? today).slice(0, 10) }));
  } catch (e) {
    console.warn(`Yazılar Supabase'den okunamadı (${e.message}), yerel liste kullanılıyor.`);
  }
  const src = await read('src/data/posts.ts');
  const slugs = [...src.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map(m => m[1]);
  const dates = [...src.matchAll(/^\s*date:\s*'(\d{4}-\d{2}-\d{2})'/gm)].map(m => m[1]);
  return slugs.map((slug, i) => ({ slug, lastmod: dates[i] ?? today }));
}

const entry = ({ path, lastmod, changefreq, priority }) => `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const [products, posts, categoryKeys] = await Promise.all([loadProducts(), loadPosts(), loadCategories()]);

const urls = [
  ...staticPages.map(p => ({ ...p, lastmod: today })),
  ...categoryKeys.map(key => ({ path: `/katalog?kategori=${key}`, lastmod: today, changefreq: 'weekly', priority: '0.8' })),
  ...posts.map(p => ({ path: `/blog/${p.slug}`, lastmod: p.lastmod, changefreq: 'monthly', priority: '0.7' })),
  ...products.map(p => ({ path: `/katalog/${p.slug}`, lastmod: p.lastmod, changefreq: 'monthly', priority: '0.6' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(entry).join('\n')}
</urlset>
`;

await writeFile(new URL('public/sitemap.xml', root), xml);
console.log(`public/sitemap.xml yazıldı: ${urls.length} adres (${staticPages.length} sayfa, ${categoryKeys.length} kategori, ${posts.length} yazı, ${products.length} ürün)`);
