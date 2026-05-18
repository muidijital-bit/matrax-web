import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const Blog = () => {
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
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-white rounded-[2.5rem] border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img loading="lazy" decoding="async"
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 text-[10px] font-black px-3 py-1.5 rounded-full ${post.badgeColor}`}>
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-black text-slate-400 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} okuma</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-neon-pink transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm font-bold text-slate-400 leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-black text-neon-pink hover:opacity-70 transition-opacity"
                >
                  Devamını Oku <ArrowRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
