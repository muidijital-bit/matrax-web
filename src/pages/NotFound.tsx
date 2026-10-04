import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';
import { useNoIndex } from '../lib/seo';

const links = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Ürünler', path: '/katalog' },
  { label: 'Top Havuzları', path: '/katalog?kategori=top-havuzlari' },
  { label: 'Blog', path: '/blog' },
  { label: 'İletişim', path: '/iletisim' },
];

const NotFound = () => {
  usePageMeta('Sayfa Bulunamadı | Matrax Oyun Grupları', 'Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.');
  useNoIndex();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">404</p>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Sayfa bulunamadı</h1>
      <p className="text-slate-500 font-bold mb-10">Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.</p>
      <div className="flex flex-wrap justify-center gap-3">
        {links.map(l => (
          <Link key={l.path} to={l.path}
            className="inline-flex items-center gap-2 bg-white border-2 border-slate-100 hover:border-slate-200 hover:shadow-md text-slate-700 hover:text-neon-pink px-5 py-2.5 rounded-full font-black text-sm transition-all">
            {l.label} <ArrowRight size={14} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
