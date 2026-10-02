import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import PostCard from '../components/PostCard';
import { usePageMeta } from '../lib/usePageMeta';

const Blog = () => {
  usePageMeta(
    'Blog | Matrax Oyun Grupları',
    'Trambolin parkı kurulumu, soft play malzeme seçimi, kreş ve çocuk kafesi oyun alanı tasarımı ve güvenlik standartları üzerine rehber yazılar.',
    'trambolin parkı rehberi, soft play malzeme, oyun alanı tasarımı, EN 1176, oyun grubu blog'
  );
  return (
    <>
      {/* Hero */}
      <section className="px-4 md:px-6 py-6 md:py-10 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-orange/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neon-pink/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-block px-5 py-2 bg-white/10 rounded-full font-black mb-6 border border-white/20 uppercase tracking-wide text-xs text-white"
            >
              Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
            >
              Sektör Rehberi &{' '}
              <span className="text-neon-orange">İpuçları</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-slate-400 font-bold leading-relaxed"
            >
              Trambolin parkı kurmaktan soft play malzeme seçimine, oyun alanı tasarımından
              güvenlik standartlarına kadar faydalı içerikler.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => <PostCard key={post.id} post={post} index={i} />)}
        </div>
      </section>
    </>
  );
};

export default Blog;
