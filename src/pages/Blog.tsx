import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPostDate } from '../data/posts';
import { usePosts } from '../lib/usePosts';
import PostCard from '../components/PostCard';
import { usePageMeta } from '../lib/usePageMeta';

const Blog = () => {
  const posts = usePosts();
  const [featured, ...rest] = posts;

  usePageMeta(
    'Trambolin, Soft Play ve Oyun Alanı Rehberleri | Matrax Blog',
    'Trambolin üreticisi seçimi, ticari ve olimpik trambolin, softplay, top havuzu, çocuk oyun alanı ve trambolin yedek parça rehberleri Matrax blogunda.',
    'trambolin üreticisi, çocuk oyun grubu üreticisi, softplay üreticisi, ticari trambolin, olimpik trambolin, trambolin yedek parça, top havuzu, çocuk oyun alanı, trambolin yayları, trambolin zıplama filesi'
  );

  return (
    <>
      {/* Hero */}
      <section className="px-4 md:px-6 py-6 md:py-10 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-orange/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neon-pink/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-block px-5 py-2 bg-white/10 rounded-full font-black mb-6 border border-white/20 uppercase tracking-wide text-xs text-white"
            >
              Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight"
            >
              Trambolin ve Oyun Alanı{' '}
              <span className="text-neon-orange">Rehberleri</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-slate-400 font-bold leading-relaxed"
            >
              Trambolin, soft play, top havuzu ve çocuk oyun alanı yatırımı için üretici seçimi,
              ürün karşılaştırması, yedek parça ve güvenlik standartları üzerine rehber yazılar.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-6 max-w-7xl mx-auto">
        {posts.length === 0 && <p className="text-center text-slate-400 font-bold py-10">Henüz blog yazısı yok.</p>}

        {/* Öne çıkan yazı */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group overflow-hidden mb-8"
          >
            <Link to={`/blog/${featured.slug}`} tabIndex={-1} aria-hidden="true" className="block relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-gradient-to-br from-slate-800 to-brand-navy">
              {featured.image && (
                <img decoding="async"
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </Link>
            <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-[10px] font-black px-3 py-1.5 rounded-full ${featured.badgeColor}`}>{featured.category}</span>
                <span className="flex items-center gap-1 text-xs font-black text-slate-400"><Clock size={11} /> {featured.readTime} okuma</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-neon-pink transition-colors">
                <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className="text-sm md:text-base font-bold text-slate-400 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-black text-slate-400">{formatPostDate(featured.date)}</span>
                <Link to={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-neon-pink hover:opacity-70 transition-opacity">
                  Devamını Oku <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.article>
        )}

        {/* Diğer yazılar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, i) => <PostCard key={post.id} post={post} index={i} />)}
        </div>
      </section>
    </>
  );
};

export default Blog;
