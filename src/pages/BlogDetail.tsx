import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Calendar, Lightbulb, Phone, ExternalLink, ChevronRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { formatPostDate, movedPosts } from '../data/posts';
import type { PostBlock } from '../data/postBodies';
import { usePosts } from '../lib/usePosts';
import { usePost } from '../lib/usePost';
import { usePageMeta } from '../lib/usePageMeta';
import { SITE_URL, breadcrumbJsonLd, useJsonLd, useNoIndex } from '../lib/seo';
import Thumb from '../components/Thumb';

const absoluteUrl = (path: string) => (path.startsWith('/') ? `${SITE_URL}${path}` : path);

// [metin](/yol) biçimindeki bağlantıları çözer; site içi yollar Link, diğerleri yeni sekmede açılır
const renderInline = (text: string) =>
  text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    const cls = 'text-neon-pink font-bold underline decoration-neon-pink/30 underline-offset-4 hover:decoration-neon-pink transition-colors';
    return m[2].startsWith('/')
      ? <Link key={i} to={m[2]} className={cls}>{m[1]}</Link>
      : <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer" className={cls}>{m[1]}</a>;
  });

const Block = ({ block }: { block: PostBlock }) => {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mt-10 mb-4 first:mt-0">{block.text}</h2>;
    case 'p':
      return <p className="text-slate-600 font-medium leading-relaxed md:text-[17px] md:leading-relaxed mb-5">{renderInline(block.text)}</p>;
    case 'ul':
      return (
        <ul className="flex flex-col gap-3 mb-6">
          {block.items.map(item => (
            <li key={item} className="flex items-start gap-3 text-slate-600 font-medium leading-relaxed md:text-[17px] md:leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-orange flex-shrink-0 mt-2.5 md:mt-3" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case 'note':
      return (
        <div className="my-8 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
          <span className="w-10 h-10 rounded-xl bg-neon-blue/10 text-neon-blue flex items-center justify-center flex-shrink-0">
            <Lightbulb size={18} />
          </span>
          <div>
            <p className="font-black text-slate-900 mb-1">{block.title}</p>
            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{renderInline(block.text)}</p>
          </div>
        </div>
      );
    case 'img':
      return (
        <figure className="my-8">
          <div className={`rounded-3xl overflow-hidden border-2 border-slate-100 aspect-[16/10] ${block.contain ? 'bg-white' : 'bg-slate-100'}`}>
            <img loading="lazy" decoding="async"
              src={block.src}
              alt={block.alt}
              className={`w-full h-full ${block.contain ? 'object-contain' : 'object-cover'}`}
            />
          </div>
          {block.caption && (
            <figcaption className="text-xs font-bold text-slate-400 mt-3 text-center">{block.caption}</figcaption>
          )}
        </figure>
      );
  }
};

const BlogDetail = () => {
  const { slug } = useParams();
  const { post, body, loading } = usePost(slug ?? '');
  const posts = usePosts();

  usePageMeta(
    post ? `${post.title} | Matrax` : 'Blog | Matrax Oyun Grupları',
    post?.excerpt ?? 'Matrax Oyun Grupları blogu: trambolin, soft play ve çocuk oyun alanı rehberleri.',
    post?.keywords
  );

  // Arama motorları için yapılandırılmış veri (yazı + sayfa yolu)
  useJsonLd('post-jsonld', post ? [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      ...(post.image && { image: [absoluteUrl(post.image)] }),
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      ...(post.keywords && { keywords: post.keywords }),
      author: { '@type': 'Organization', name: 'Matrax Oyun Grupları', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'Matrax Oyun Grupları',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    },
    breadcrumbJsonLd([
      { name: 'Ana Sayfa', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ] : null);
  useNoIndex(!loading && !post && !(slug && movedPosts[slug]));

  // Kaldırılan yazıların eski adresleri yerine geçen yazıya yönlenir
  if (slug && movedPosts[slug]) return <Navigate to={`/blog/${movedPosts[slug]}`} replace />;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-brand-pink rounded-full animate-spin" />
      </div>
    );
  }

  if (!post || !body) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-slate-400 font-bold mb-4">Yazı bulunamadı.</p>
        <Link to="/blog" className="text-neon-pink font-black hover:opacity-70">← Bloga Dön</Link>
      </div>
    );
  }

  // Önce aynı etiketteki yazılar, sonra diğerleri
  const others = posts.filter(p => p.slug !== post.slug);
  const related = [
    ...others.filter(p => p.category === post.category),
    ...others.filter(p => p.category !== post.category),
  ].slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="px-4 md:px-6 py-6 md:py-10 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-orange/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neon-pink/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <nav aria-label="Sayfa yolu" className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-slate-400 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={12} className="text-slate-600" />
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight size={12} className="text-slate-600" />
              <span className="text-slate-200">{post.title}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
              <span className={`inline-block text-[10px] font-black px-3 py-1.5 rounded-full ${post.badgeColor}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-black text-slate-400"><Clock size={13} /> {post.readTime} okuma</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
            >
              {post.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-400 font-bold leading-relaxed mb-6"
            >
              {post.excerpt}
            </motion.p>
            <span className="flex items-center gap-1.5 text-xs font-black text-slate-400"><Calendar size={13} /> {formatPostDate(post.date)}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10 items-start">
        {/* Yazı */}
        <article className="min-w-0">
          {post.image && (
            <div className="rounded-[2.5rem] overflow-hidden border-2 border-slate-100 aspect-[16/9] md:aspect-[2/1] bg-slate-100 mb-8">
              <img decoding="async" src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-sm p-6 md:p-10">
            {body.content.map((block, i) => <Block key={i} block={block} />)}

            {/* Kaynaklar */}
            {body.sources.length > 0 && (
              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Kaynaklar</p>
                <ul className="flex flex-col gap-2.5">
                  {body.sources.map(s => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 text-sm font-bold text-slate-500 hover:text-neon-pink transition-colors">
                        <ExternalLink size={14} className="flex-shrink-0 mt-0.5" />
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-medium text-slate-400 leading-relaxed mt-5">
                  Bu yazı genel bilgilendirme amaçlıdır. Standart ve mevzuat hükümleri güncellenebilir; projenize başlamadan önce güncel metinleri ve yetkili kurumları esas alın.
                </p>
              </div>
            )}
          </div>

          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-black text-slate-500 hover:text-neon-pink transition-colors mt-6">
            <ArrowLeft size={15} /> Bloga Dön
          </Link>
        </article>

        {/* Yan sütun */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-[110px]">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] p-7 text-white relative overflow-hidden shadow-xl">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-neon-orange/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p className="text-[10px] font-black text-neon-orange uppercase tracking-widest mb-2">Teklif Alın</p>
              <h2 className="text-xl font-bold leading-tight mb-2">Projenizi Birlikte Planlayalım</h2>
              <p className="text-sm font-bold text-slate-400 leading-relaxed mb-5">
                Alanınızın ölçüsüne göre yerleşim önerisi ve fiyat teklifi hazırlıyoruz.
              </p>
              <div className="flex flex-col gap-2.5">
                <Link to="/iletisim" className="flex items-center justify-center gap-2 bg-neon-green text-white px-5 py-3 rounded-full font-black hover:opacity-90 transition-opacity text-sm">
                  Teklif Al <ArrowRight size={15} />
                </Link>
                <a href="tel:+905521065579" className="flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white px-5 py-3 rounded-full font-black hover:bg-white/20 transition-colors text-sm">
                  <Phone size={14} /> 0552 106 55 79
                </a>
                <Link to={post.related.path} className="flex items-center justify-center gap-2 text-slate-300 hover:text-white px-5 py-2 font-black transition-colors text-sm">
                  {post.related.label} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">İlgili Yazılar</p>
              <div className="flex flex-col gap-3">
                {related.map(r => (
                  <Link
                    key={r.id}
                    to={`/blog/${r.slug}`}
                    className="bg-white rounded-2xl border-2 border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all group overflow-hidden flex"
                  >
                    {r.image && (
                      <div className="w-24 flex-shrink-0 overflow-hidden bg-slate-100">
                        <Thumb src={r.image} alt={r.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-3.5 min-w-0">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1">{r.category}</p>
                      <h3 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-neon-pink transition-colors line-clamp-3">{r.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  );
};

export default BlogDetail;
