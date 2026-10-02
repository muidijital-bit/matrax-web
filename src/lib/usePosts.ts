import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { posts as localPosts, type Post } from '../data/posts';
import type { DbPost } from './types';

// Liste için gövde (content/sources) çekilmez
const POST_META = 'id,slug,title,excerpt,image,category,badge_color,keywords,published_at,read_minutes,category_keys,related_label,related_path';

export const mapPost = (p: Omit<DbPost, 'content' | 'sources' | 'is_published' | 'created_at' | 'updated_at'>): Post => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt ?? '',
  image: p.image ?? '',
  category: p.category,
  date: p.published_at,
  badgeColor: p.badge_color ?? 'bg-neon-pink text-white',
  keywords: p.keywords ?? '',
  readTime: `${p.read_minutes} dk`,
  categoryKeys: p.category_keys ?? [],
  related: { label: p.related_label || 'Ürünleri İncele', path: p.related_path || '/katalog' },
});

// Yayındaki yazılar; Supabase'e ulaşılamazsa (ya da tablo yoksa) yerel posts.ts kullanılır
export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>(localPosts);

  useEffect(() => {
    supabase
      .from('posts')
      .select(POST_META)
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .order('id', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setPosts((data as DbPost[]).map(mapPost));
      });
  }, []);

  return posts;
};
