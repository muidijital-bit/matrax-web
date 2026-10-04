import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import {
  products as localProducts,
  categories as localCategories,
  type Product,
} from '../data/products';
import { spareCategories as localSpareCategories, type PartCategory } from '../data/spareParts';
import type { DbProduct, DbCategory, DbSpareCategory, DbSparePart } from './types';

// DbProduct → local Product formatına dönüştür
const mapProduct = (p: DbProduct): Product => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  code: p.code,
  category: p.category,
  categoryKey: p.category_key,
  badge: p.badge ?? 'bg-brand-pink text-white',
  price: p.price,
  image: p.image ?? '',
  images: p.images ?? [],
  desc: p.description ?? '',
  longDesc: p.long_desc ?? undefined,
  features: p.features ?? [],
  specs: p.specs ?? [],
});

// DbSpareCategory + DbSparePart → local PartCategory formatına dönüştür
// Supabase'de görsel yoksa yerel spareParts.ts'deki görseli kullan
const mapSpareCategories = (cats: DbSpareCategory[], parts: DbSparePart[]): PartCategory[] =>
  cats.map(cat => {
    const localCat = localSpareCategories.find(c => c.key === cat.key);
    return {
      key: cat.key,
      title: cat.title,
      short: cat.short ?? '',
      cover: cat.cover || localCat?.cover || '',
      badge: cat.badge ?? 'bg-brand-pink text-white',
      accent: cat.accent ?? 'text-brand-pink',
      items: parts
        .filter(p => p.category_key === cat.key)
        .map(p => {
          const localItem = localCat?.items.find(i => i.key === p.key);
          return {
            key: p.key,
            title: p.title,
            desc: p.description ?? '',
            image: p.image || localItem?.image || undefined,
            gallery: p.gallery?.length ? p.gallery : (localItem?.gallery ?? undefined),
          };
        }),
    };
  });

// Sayfalar arasında gezinirken aynı veri tekrar indirilmesin; panelde yapılan değişiklikler en geç 1 dakikada görünür
const CACHE_MS = 60_000;

let productsRequest: { at: number; promise: Promise<Product[] | null> } | null = null;

const loadProducts = () => {
  if (!productsRequest || Date.now() - productsRequest.at > CACHE_MS) {
    productsRequest = {
      at: Date.now(),
      promise: Promise.resolve(
        supabase
          .from('products')
          .select('*')
          .eq('is_active', true)
          .order('sort_order')
          .order('created_at', { ascending: false })
      ).then(({ data }) => (data && data.length > 0 ? (data as DbProduct[]).map(mapProduct) : null)),
    };
  }
  return productsRequest.promise;
};

// enabled=false iken istek atılmaz (ör. ürün sayfasında benzer ürünler, ana ürün gelene kadar beklesin)
export const useProducts = ({ enabled = true }: { enabled?: boolean } = {}) => {
  const [products, setProducts] = useState<Product[]>(localProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    loadProducts().then(list => {
      if (cancelled) return;
      if (list) setProducts(list);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, [enabled]);

  return { products, loading };
};

export const useCategories = () => {
  const [categories, setCategories] = useState(localCategories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('categories')
      .select('*')
      .order('sort_order')
      .then(({ data }) => {
        if (data && data.length > 0) {
          setCategories(
            (data as DbCategory[]).map(c => ({
              key: c.key,
              name: c.name,
              color: c.color,
              image: c.image ?? '',
            }))
          );
        }
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};

export const useSpareCategories = () => {
  const [spareCategories, setSpareCategories] = useState<PartCategory[]>(localSpareCategories);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      supabase.from('spare_categories').select('*').order('sort_order'),
      supabase.from('spare_parts').select('*').order('sort_order'),
    ]).then(([{ data: cats }, { data: parts }]) => {
      if (cats && cats.length > 0 && parts) {
        setSpareCategories(mapSpareCategories(cats as DbSpareCategory[], parts as DbSparePart[]));
      }
      setLoading(false);
    });
  }, []);

  return { spareCategories, loading };
};

// Tek ürün. Bilgi önce sitenin kendi sunucusundaki kopyadan (build'de üretilir, scripts/generate-product-data.mjs)
// alınır, ardından veritabanından teyit edilir; panelde yapılan değişiklikler böylece yine görünür.
// Ürün sayfasına doğrudan gelindiğinde App.tsx bunu sayfa kodu inerken başlatır.
type ProductEntry = {
  at: number;
  first: Promise<Product | null>;  // kopya ya da veritabanı, hangisi önce gelirse
  final: Promise<Product | null>;  // veritabanı (yoksa yerel veri)
  result?: Product | null;
};
const productRequests = new Map<string, ProductEntry>();

const fetchProductSnapshot = (slug: string): Promise<Product | null> =>
  fetch(`/data/products/${encodeURIComponent(slug)}.json`)
    .then(r => (r.ok && (r.headers.get('content-type') ?? '').includes('json') ? r.json() : null))
    .then(row => (row ? mapProduct(row as DbProduct) : null))
    .catch(() => null);

export const prefetchProduct = (slug: string) => {
  const cached = productRequests.get(slug);
  if (cached && Date.now() - cached.at <= CACHE_MS) return cached;

  const localFallback = () => localProducts.find(p => p.slug === slug) ?? null;
  const final = Promise.resolve(supabase.from('products').select('*').eq('slug', slug).maybeSingle())
    .then(({ data }) => (data ? mapProduct(data as DbProduct) : localFallback()), localFallback);
  const snapshot = fetchProductSnapshot(slug);
  const first = new Promise<Product | null>(resolve => {
    snapshot.then(p => { if (p) resolve(p); });
    final.then(resolve);
  });

  const entry: ProductEntry = { at: Date.now(), first, final };
  final.then(result => { entry.result = result; });
  productRequests.set(slug, entry);
  return entry;
};

export const useProduct = (slug: string) => {
  // Veri önceden geldiyse (ör. geri dönüşte) yükleniyor durumu hiç gösterilmez
  const [state, setState] = useState<{ slug: string; product: Product | null } | null>(() => {
    const cached = productRequests.get(slug);
    return cached && cached.result !== undefined ? { slug, product: cached.result } : null;
  });

  useEffect(() => {
    let cancelled = false;
    let finalArrived = false;
    const { first, final } = prefetchProduct(slug);
    first.then(product => { if (!cancelled && !finalArrived) setState({ slug, product }); });
    final.then(product => { finalArrived = true; if (!cancelled) setState({ slug, product }); });
    return () => { cancelled = true; };
  }, [slug]);

  const settled = state?.slug === slug;
  return { product: settled ? state.product : null, loading: !settled };
};
