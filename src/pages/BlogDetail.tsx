import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Calendar, Lightbulb, Phone, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { posts, formatPostDate, postReadTime, type PostBlock } from '../data/posts';
import { usePageMeta } from '../lib/usePageMeta';

const Block = ({ block }: { block: PostBlock }) => {
  switch (block.type) {
    case 'h2':
      return <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mt-12 mb-4 first:mt-0">{block.text}</h2>;
    case 'p':
      return <p className="text-slate-600 font-medium leading-relaxed md:text-lg md:leading-relaxed mb-5">{block.text}</p>;
    case 'ul':
      return (
        <ul className="flex flex-col gap-3 mb-6">
          {block.items.map(item => (
            <li key={item} className="flex items-start gap-3 text-slate-600 font-medium leading-relaxed md:text-lg md:leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-orange flex-shrink-0 mt-2.5 md:mt-3" />
              {item}
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
            <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{block.text}</p>
          </div>
        </div>
      );
    case 'img':
      return (
        <figure className="my-8 max-w-3xl mx-auto">
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
  const post = posts.find(p => p.slug === slug);

  usePageMeta(
    post ? `${post.title} | Matrax Blog` : 'Blog | Matrax Oyun Grupları',
    post?.excerpt ?? 'Matrax Oyun Grupları blogu: trambolin parkı, soft play ve oyun alanı rehberleri.',
    post?.keywords
  );

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-slate-400 font-bold mb-4">Yazı bulunamadı.</p>
        <Link to="/blog" className="text-neon-pink font-black hover:opacity-70">← Bloga Dön</Link>
      </div>
    );
  }

  const others = posts.filter(p => p.slug !== post.slug);

  return (
    <>
      {/* Hero */}
      <section className="px-4 md:px-6 py-6 md:py-10 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-neon-orange/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neon-pink/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-black text-slate-400 hover:text-white transition-colors mb-6">
              <ArrowLeft size={14} /> Tüm Yazılar
            </Link>
            <div>
              <span className={`inline-block text-[10px] font-black px-3 py-1.5 rounded-full mb-5 ${post.badgeColor}`}>
                {post.category}
              </span>
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
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-black text-slate-400">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {formatPostDate(post.date)}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {postReadTime(post)} okuma</span>
            </div>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <article className="max-w-7xl mx-auto px-4 md:px-6 pb-6">
        <div className="rounded-[2.5rem] overflow-hidden border-2 border-slate-100 aspect-[16/9] md:aspect-[2/1] bg-slate-100 mb-8">
          <img decoding="async" src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-sm p-6 md:p-12 lg:p-16">
          {post.content.map((block, i) => <Block key={i} block={block} />)}

          {/* Kaynaklar */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Kaynaklar</p>
            <ul className="flex flex-col gap-2.5">
              {post.sources.map(s => (
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
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-neon-orange/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-black text-neon-orange uppercase tracking-widest mb-2">Projenizi Konuşalım</p>
              <h3 className="text-2xl font-bold leading-tight">Alanınızın ölçüsüne göre yerleşim önerisi alın</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to={post.related.path} className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-black hover:bg-slate-100 transition-colors text-sm">
                {post.related.label} <ArrowRight size={15} />
              </Link>
              <Link to="/iletisim" className="inline-flex items-center gap-2 bg-neon-green text-white px-6 py-3 rounded-full font-black hover:opacity-90 transition-opacity text-sm">
                <Phone size={14} /> İletişim
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Diğer yazılar */}
      <section className="py-10 px-4 md:px-6 max-w-7xl mx-auto">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-5">Diğer Yazılar</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map(o => (
            <Link
              key={o.id}
              to={`/blog/${o.slug}`}
              className="bg-white rounded-3xl border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all group overflow-hidden flex"
            >
              <div className="w-28 md:w-36 flex-shrink-0 overflow-hidden">
                <img loading="lazy" decoding="async" src={o.image} alt={o.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">{o.category}</p>
                <h3 className="font-bold text-slate-800 leading-snug group-hover:text-neon-pink transition-colors">{o.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
