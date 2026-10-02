import { useEffect, useState } from 'react';
import { supabase } from './supabase';
import { posts as localPosts, type Post } from '../data/posts';
import { postBodies, type PostBody } from '../data/postBodies';
import { mapPost } from './usePosts';
import type { DbPost } from './types';

type Loaded = { slug: string; post: Post | null; body: PostBody | null };

const localPost = (slug: string): Loaded => {
  const post = localPosts.find(p => p.slug === slug) ?? null;
  return { slug, post, body: post ? postBodies[slug] ?? null : null };
};

// Tek yazı. Yerel kopyası olan yazı hemen gösterilir, Supabase yanıtı gelince güncellenir.
// Supabase'e ulaşılamazsa yerel kopya kalır; ulaşılır ama yazı yoksa/yayında değilse "bulunamadı" olur.
export const usePost = (slug: string) => {
  const [remote, setRemote] = useState<Loaded | null>(null);

  useEffect(() => {
    let cancelled = false;
    supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) { setRemote(localPost(slug)); return; }
        const row = data as DbPost | null;
        setRemote(row
          ? { slug, post: mapPost(row), body: { content: row.content ?? [], sources: row.sources ?? [] } }
          : { slug, post: null, body: null });
      });
    return () => { cancelled = true; };
  }, [slug]);

  const settled = remote?.slug === slug;
  const current = settled ? remote : localPost(slug);
  return { post: current.post, body: current.body, loading: !settled && !current.post };
};
