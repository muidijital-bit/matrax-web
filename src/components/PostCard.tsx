import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPostDate, type Post } from '../data/posts';

// Blog listesi ve ana sayfadaki yazı kartı
const PostCard = ({ post, index = 0, titleAs: Title = 'h2' }: { post: Post; index?: number; titleAs?: 'h2' | 'h3' }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
    className="bg-white rounded-[2.5rem] border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group overflow-hidden"
  >
    <Link to={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true" className="block relative aspect-[16/9] overflow-hidden">
      <img loading="lazy" decoding="async"
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span className={`absolute top-4 left-4 text-[10px] font-black px-3 py-1.5 rounded-full ${post.badgeColor}`}>
        {post.category}
      </span>
    </Link>

    <div className="p-6">
      <div className="flex items-center gap-3 text-xs font-black text-slate-400 mb-3">
        <span>{formatPostDate(post.date)}</span>
        <span>·</span>
        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} okuma</span>
      </div>
      <Title className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-neon-pink transition-colors">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </Title>
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
);

export default PostCard;
