import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Wrench, ArrowUpRight } from 'lucide-react';
import { products as localProducts } from '../data/products';
import { spareCategories as localSpareCategories } from '../data/spareParts';
import { supabase } from '../lib/supabase';
import type { DbProduct, DbSpareCategory, DbSparePart } from '../lib/types';

type Hit = {
  type: 'product' | 'spare';
  key: string;
  title: string;
  subtitle: string;
  image?: string;
  to: string;
  score: number;
};

// Türkçe küçük harf + normalize
const tr = (s: string) => (s ?? '').toLocaleLowerCase('tr');
const words = (s: string) => tr(s).split(/[\s,.()\-\/]+/).filter(Boolean);

// Tek kelime skoru
const scoreWord = (text: string, q: string): number => {
  const t = tr(text);
  if (!t || !q) return 0;
  if (t === q) return 100;
  const ws = words(text);
  if (ws.some(w => w === q)) return 90;
  if (ws.some(w => w.startsWith(q))) return 65;
  if (t.startsWith(q)) return 55;
  // Tam kelime sınırı içinde geçiyor mu?
  if (ws.some(w => w.includes(q) && q.length >= 3)) return 25;
  return 0;
};

// Multi-kelime: tüm kelimelerin eşleşmesi gerekir
const scoreText = (text: string, q: string): number => {
  const qs = words(q);
  if (qs.length === 0) return 0;
  if (qs.length === 1) return scoreWord(text, qs[0]);
  // Tüm kelimeler eşleşmeli
  const scores = qs.map(w => scoreWord(text, w));
  if (scores.some(s => s === 0)) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / qs.length);
};

const relevance = (title: string, code: string, category: string, desc: string, q: string): number => {
  const qs = words(q);
  const titleScore = scoreText(title, q) * 6;
  const codeScore = scoreText(code, q) * 4;
  // Kısa sorgularda (< 3 char) açıklama ve kategoriyi sayma
  const qLen = tr(q).length;
  const catScore  = qLen >= 3 ? scoreText(category, q) * 2 : 0;
  const descScore = qLen >= 4 ? scoreText(desc, q) * 1 : 0;
  // En az başlık veya kod eşleşmesi yoksa sıfır döndür
  if (titleScore === 0 && codeScore === 0 && qs.every(w => scoreWord(title, w) === 0 && scoreWord(code, w) === 0)) {
    // Sadece kategori/açıklamada geçiyorsa çok düşük tutarız
    return Math.round((catScore + descScore) * 0.3);
  }
  return titleScore + codeScore + catScore + descScore;
};

const SearchPanel = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [focusedIdx, setFocusedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navigate = useNavigate();

  // Supabase'den veri
  const [dbProducts, setDbProducts] = useState<DbProduct[]>([]);
  const [dbSpareCats, setDbSpareCats] = useState<DbSpareCategory[]>([]);
  const [dbSpareParts, setDbSpareParts] = useState<DbSparePart[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (dataLoaded) return;
    Promise.all([
      supabase.from('products').select('*').eq('is_active', true),
      supabase.from('spare_categories').select('*').order('sort_order'),
      supabase.from('spare_parts').select('*').order('sort_order'),
    ]).then(([{ data: p }, { data: sc }, { data: sp }]) => {
      if (p && p.length > 0) setDbProducts(p as DbProduct[]);
      if (sc && sc.length > 0) setDbSpareCats(sc as DbSpareCategory[]);
      if (sp && sp.length > 0) setDbSpareParts(sp as DbSparePart[]);
      setDataLoaded(true);
    });
  }, [dataLoaded]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIdx(i => Math.min(i + 1, (itemRefs.current.length || 1) - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIdx(i => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter') {
        const el = itemRefs.current[focusedIdx];
        if (el) { navigate(el.getAttribute('href') ?? ''); onClose(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey); };
  }, [open, onClose, focusedIdx, navigate]);

  useEffect(() => { if (!open) setQuery(''); }, [open]);
  useEffect(() => { setFocusedIdx(0); }, [query]);

  // Mobil: panel açıkken body scroll'u kilitle, kapanınca geri al
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [open]);

  const hits = useMemo<Hit[]>(() => {
    const q = tr(query.trim());
    if (q.length < 2) return [];

    const productHits: Hit[] = [];

    // Ürünler — Supabase varsa oradan, yoksa local
    const useDbProducts = dbProducts.length > 0;
    if (useDbProducts) {
      for (const p of dbProducts) {
        const sc = relevance(p.name, p.code ?? '', p.category, p.description ?? '', q);
        if (sc > 0) productHits.push({
          type: 'product', key: `p-${p.id}`,
          title: p.name, subtitle: p.category,
          image: p.image ?? undefined,
          to: `/katalog/${p.slug}`, score: sc,
        });
      }
    } else {
      for (const p of localProducts) {
        const sc = relevance(p.name, p.code ?? '', p.category, p.desc, q);
        if (sc > 0) productHits.push({
          type: 'product', key: `p-${p.id}`,
          title: p.name, subtitle: p.category,
          image: p.image,
          to: `/katalog/${p.slug}`, score: sc,
        });
      }
    }

    // Yedek parçalar — Supabase varsa oradan, yoksa local
    const spareHits: Hit[] = [];
    const useDbSpare = dbSpareCats.length > 0;

    if (useDbSpare) {
      for (const cat of dbSpareCats) {
        const catScore = relevance(cat.title, '', '', cat.short ?? '', q);
        if (catScore > 0) spareHits.push({
          type: 'spare', key: `c-${cat.key}`,
          title: cat.title, subtitle: 'Yedek Parça Kategorisi',
          image: cat.cover ?? undefined,
          to: `/yedek-parcalar#${encodeURIComponent(cat.key)}`, score: catScore,
        });
        for (const part of dbSpareParts.filter(p => p.category_key === cat.key)) {
          const sc = relevance(part.title, part.key, cat.title, part.description ?? '', q);
          if (sc > 0) spareHits.push({
            type: 'spare', key: `i-${cat.key}-${part.key}`,
            title: part.title, subtitle: `Yedek Parça · ${cat.title}`,
            image: part.image ?? cat.cover ?? undefined,
            to: `/yedek-parcalar#${encodeURIComponent(cat.key)}--${encodeURIComponent(part.key)}`, score: sc,
          });
        }
      }
    } else {
      for (const cat of localSpareCategories) {
        const catScore = relevance(cat.title, '', '', cat.short, q);
        if (catScore > 0) spareHits.push({
          type: 'spare', key: `c-${cat.key}`,
          title: cat.title, subtitle: 'Yedek Parça Kategorisi',
          image: cat.cover,
          to: `/yedek-parcalar#${cat.key}`, score: catScore,
        });
        for (const item of cat.items) {
          const sc = relevance(item.title, item.key, cat.title, item.desc, q);
          if (sc > 0) spareHits.push({
            type: 'spare', key: `i-${cat.key}-${item.key}`,
            title: item.title, subtitle: `Yedek Parça · ${cat.title}`,
            image: item.image ?? cat.cover,
            to: `/yedek-parcalar#${cat.key}--${item.key}`, score: sc,
          });
        }
      }
    }

    // Minimum eşik: düşük puanlı alakasız sonuçları ele
    const MIN_SCORE = tr(query.trim()).length <= 2 ? 60 : 20;
    return [...productHits, ...spareHits]
      .filter(h => h.score >= MIN_SCORE)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [query, dbProducts, dbSpareCats, dbSpareParts]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 top-[90px] z-[55] bg-slate-900/40 backdrop-blur-sm"
          />

          <motion.div
            key="panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-[90px] left-0 right-0 z-[56] bg-white shadow-2xl border-b border-slate-100 max-h-[calc(100dvh-90px)] overflow-y-auto"
          >
            <div className="max-w-3xl mx-auto px-4 md:px-6 py-4 md:py-6">
              {/* Input */}
              <div className="relative mb-5">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Ara… (olimpik, yay, sünger)"
                  className="w-full pl-11 pr-12 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-800 font-bold text-base placeholder:text-slate-400 outline-none focus:border-neon-pink focus:bg-white transition-colors"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700"
                    aria-label="Aramayı temizle"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Boş durum */}
              {query.trim().length === 0 && (
                <div className="py-10 text-center">
                  <p className="text-sm font-bold text-slate-400">
                    Trambolin, soft play, salto, yay, sünger… aramak için yazın.
                  </p>
                </div>
              )}

              {query.trim().length === 1 && (
                <div className="py-6 text-center">
                  <p className="text-xs font-bold text-slate-400">Aramak için en az 2 karakter girin.</p>
                </div>
              )}

              {query.trim().length >= 2 && hits.length === 0 && (
                <div className="py-10 text-center">
                  <p className="text-sm font-bold text-slate-700 mb-1">"{query}" için sonuç bulunamadı</p>
                  <p className="text-xs font-bold text-slate-400">
                    Aradığınız ürün listede yoksa WhatsApp'tan görsel ile sorabilirsiniz.
                  </p>
                </div>
              )}

              {/* Sonuçlar */}
              {hits.length > 0 && (
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 px-2">
                    {hits.length} sonuç
                  </p>
                  {hits.map((hit, i) => (
                    <Link
                      key={hit.key}
                      to={hit.to}
                      ref={el => { itemRefs.current[i] = el; }}
                      onClick={onClose}
                      onMouseEnter={() => setFocusedIdx(i)}
                      className={`flex items-center gap-3 p-2.5 rounded-2xl border-2 transition-all group ${
                        focusedIdx === i
                          ? 'bg-slate-50 border-slate-200'
                          : 'border-transparent hover:bg-slate-50 hover:border-slate-100'
                      }`}
                    >
                      <div className="w-11 h-11 md:w-16 md:h-16 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
                        {hit.image ? (
                          <img src={hit.image} alt={hit.title} loading="lazy" className="w-full h-full object-contain p-1" />
                        ) : (
                          <Wrench size={22} className="text-slate-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm md:text-[15px] font-black text-slate-800 truncate group-hover:text-neon-pink transition-colors">
                          {hit.title}
                        </p>
                        <p className="text-[11px] font-bold text-slate-400 truncate flex items-center gap-1.5 mt-0.5">
                          <span className={`inline-block w-1.5 h-1.5 rounded-full ${hit.type === 'product' ? 'bg-neon-pink' : 'bg-brand-green'}`} />
                          {hit.subtitle}
                        </p>
                      </div>
                      <ArrowUpRight size={16} className="text-slate-300 group-hover:text-neon-pink transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchPanel;
