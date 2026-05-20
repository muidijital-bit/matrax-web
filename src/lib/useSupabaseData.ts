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

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(localProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('sort_order')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data && data.length > 0) {
          setProducts((data as DbProduct[]).map(mapProduct));
        }
        setLoading(false);
      });
  }, []);

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

export const useProduct = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single()
      .then(({ data }) => {
        if (data) {
          setProduct(mapProduct(data as DbProduct));
        } else {
          // Fallback: local data
          const local = localProducts.find(p => p.slug === slug) ?? null;
          setProduct(local);
        }
        setLoading(false);
      });
  }, [slug]);

  return { product, loading };
};
