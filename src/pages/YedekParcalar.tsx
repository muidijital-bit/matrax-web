import { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench, Phone, X, ChevronLeft, ChevronRight, ChevronDown,
  ShieldCheck, Truck, Clock, Hammer, Search, ArrowUpRight,
} from 'lucide-react';
import { type SparePart } from '../data/spareParts';
import { useSpareCategories } from '../lib/useSupabaseData';
import { usePageMeta } from '../lib/usePageMeta';

const tr = (s: string) => (s ?? '').toLocaleLowerCase('tr');


const guarantees = [
  { icon: ShieldCheck, title: 'Yerli Üretim', desc: 'Yaylar, padler ve fileler kendi atölyemizde üretilir.', color: 'text-brand-green' },
  { icon: Truck,        title: 'Türkiye Geneli', desc: 'Tüm illere kargo ile aynı gün sevk seçeneği.', color: 'text-brand-navy' },
  { icon: Clock,        title: '7/24 Servis', desc: 'Acil parça ihtiyaçlarınızda WhatsApp destek hattı.', color: 'text-brand-orange' },
  { icon: Hammer,       title: 'Birebir Uyum', desc: 'Ürün kodunuzla orijinal ölçülere sadık üretim.', color: 'text-brand-pink' },
];

const PHONE = '+908501234567';
const buildWa = (productTitle: string) => {
  const text = encodeURIComponent(`Merhaba, "${productTitle}" yedek parçası hakkında bilgi almak istiyorum.`);
  return `https://wa.me/908501234567?text=${text}`;
};

const YedekParcalar = () => {
  usePageMeta(
    'Yedek Parça | Matrax Oyun Grupları',
    'Trambolin yayları, koruma padleri, koruma filesi, salto ekipmanları ve tüm yedek parçalar. Orijinal ölçülerde yerli üretim, Türkiye geneli kargo.',
    'trambolin yedek parça, trambolin yayı, koruma padi, salto kemeri, yedek parça sipariş'
  );
  const { spareCategories: categories } = useSpareCategories();
  const location = useLocation();
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState('');
  const [focusedIdx, setFocusedIdx] = useState(0);
  const [zoom, setZoom] = useState<{ images: string[]; idx: number; title: string } | null>(null);
  const resultsRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const hitRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [inputRect, setInputRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const update = () => {
      if (inputRef.current) setInputRect(inputRef.current.getBoundingClientRect());
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => { window.removeEventListener('resize', update); window.removeEventListener('scroll', update, true); };
  }, [query]);

  const toggle = (key: string) =>
    setOpenKeys(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  // Hash ile gelen kategoriyi otomatik aç + kaydır (search panel'den tıklama)
  useEffect(() => {
    if (categories.length === 0) return;
    const hash = location.hash.slice(1);
    if (!hash) return;

    const [catKey, partKey] = hash.split('--');
    if (!categories.find(c => c.key === catKey)) return;

    setOpenKeys(prev => new Set([...prev, catKey]));

    // Retry: element DOM'a render olana kadar dene (yeni eklenen parçalar için)
    const targetId = partKey ? `spare-${catKey}--${partKey}` : catKey;
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (attempts < 8) {
        attempts++;
        setTimeout(tryScroll, 200);
      }
    };
    const t = setTimeout(tryScroll, 400);
    return () => clearTimeout(t);
  }, [categories, location.hash]);

  // Dropdown hits
  const hits = useMemo(() => {
    const q = tr(query.trim());
    if (q.length < 2) return [];
    const results: { key: string; title: string; subtitle: string; image?: string; to: string }[] = [];
    for (const cat of categories) {
      if (tr(cat.title).includes(q)) {
        results.push({ key: `c-${cat.key}`, title: cat.title, subtitle: 'Yedek Parça Kategorisi', image: cat.cover || undefined, to: `/yedek-parcalar#${cat.key}` });
      }
      for (const item of cat.items) {
        if (tr(item.title).includes(q) || tr(item.desc).includes(q)) {
          results.push({ key: `i-${cat.key}-${item.key}`, title: item.title, subtitle: `Yedek Parça · ${cat.title}`, image: item.image ?? cat.cover ?? undefined, to: `/yedek-parcalar#${cat.key}--${item.key}` });
        }
      }
    }
    return results.slice(0, 4);
  }, [query, categories]);

  const showDropdown = query.trim().length >= 2;

  useEffect(() => { setFocusedIdx(0); }, [query]);

  // Dropdown klavye navigasyonu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!showDropdown) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setFocusedIdx(i => Math.min(i + 1, hits.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setFocusedIdx(i => Math.max(i - 1, 0)); }
      if (e.key === 'Enter' && hits[focusedIdx]) { navigate(hits[focusedIdx].to); setQuery(''); }
      if (e.key === 'Escape') setQuery('');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showDropdown, hits, focusedIdx, navigate]);

  // Dışarı tıklayınca dropdown kapat
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
          inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setQuery('');
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const visible = categories;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(40,181,200,0.18),transparent_60%)]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neon-blue/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start justify-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full font-bold uppercase tracking-wider text-xs border border-white/25"
          >
            <Wrench size={13} /> Yedek Parça Servisi
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-2xl md:text-3xl font-bold leading-tight"
          >
            Orijinal Parça, <span className="text-brand-teal">Hızlı Servis</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}
            className="text-white/75 font-bold max-w-2xl leading-relaxed text-sm md:text-base mt-2"
          >
            Trambolin yaylarından roller makarasına, sünger havuzu küplerine kadar 50+ kalem
            yedek parça stoklu. Her ürünün yanında WhatsApp butonu — fiyat ve sevkiyat süresi tek tuşla.
          </motion.p>

          {/* Arama */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}
            className="mt-5 w-full max-w-xl relative z-30"
          >
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Yay, file, sünger, makara…"
                className="w-full pl-11 pr-12 py-3.5 rounded-2xl bg-white text-slate-700 font-bold text-base placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-teal shadow-xl"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 z-10"
                  aria-label="Aramayı temizle"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Dropdown — portal ile body'e mount edilir, overflow:hidden'dan etkilenmez */}
            {showDropdown && inputRect && createPortal(
              <AnimatePresence>
                <motion.div
                  ref={dropdownRef}
                  key="spare-search-dropdown"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18 }}
                  style={{ position: 'fixed', top: inputRect.bottom + 6, left: inputRect.left, width: inputRect.width, zIndex: 9999 }}
                  className=""
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                    {hits.length === 0 ? (
                      <p className="px-4 py-5 text-sm font-bold text-slate-400 text-center">"{query}" için sonuç bulunamadı</p>
                    ) : (
                      <div className="p-2 flex flex-col gap-0.5">
                        {hits.map((hit, i) => (
                          <button
                            key={hit.key}
                            ref={el => { hitRefs.current[i] = el; }}
                            onClick={() => { navigate(hit.to); setQuery(''); }}
                            onMouseEnter={() => setFocusedIdx(i)}
                            className={`w-full flex items-center gap-4 p-3 rounded-2xl text-left transition-all ${focusedIdx === i ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
                          >
                            <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
                              {hit.image ? (
                                <img src={hit.image} alt={hit.title} loading="lazy" className="w-full h-full object-contain p-1.5" />
                              ) : (
                                <Wrench size={22} className="text-slate-400" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-base font-black text-slate-800 truncate">{hit.title}</p>
                              <p className="text-xs font-bold text-slate-400 truncate mt-0.5">{hit.subtitle}</p>
                            </div>
                            <ArrowUpRight size={18} className="text-slate-300 flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>,
              document.body
            )}
          </motion.div>
        </div>
      </section>

      {/* Garanti şeridi */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 bg-white rounded-3xl shadow-xl border border-slate-100 p-5 md:p-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3 p-3"
            >
              <span className={`w-11 h-11 flex-shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center ${g.color}`}>
                <g.icon size={20} strokeWidth={2.5} />
              </span>
              <div>
                <h3 className="font-black text-sm text-slate-800 mb-0.5">{g.title}</h3>
                <p className="text-xs font-bold text-slate-500 leading-snug">{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Kategoriler — accordion */}
      <section ref={resultsRef} className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 scroll-mt-24">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Yedek Parça Kategorilerimiz</h2>
          <p className="text-slate-500 font-bold leading-relaxed text-sm md:text-base">
            Kategori başlığına tıklayarak alt parçaları açın. Her parçanın yanındaki WhatsApp
            butonu ile direkt sorabilirsiniz.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {visible.length === 0 && (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center">
              <p className="text-slate-700 font-bold mb-2">"{query}" için sonuç bulunamadı.</p>
              <p className="text-slate-400 font-bold text-sm">Aradığınız parça listede yoksa WhatsApp'tan görsel ile sorabilirsiniz.</p>
            </div>
          )}

          {visible.map((cat, ci) => {
            const isOpen = openKeys.has(cat.key);
            return (
              <motion.div
                key={cat.key}
                id={cat.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: (ci % 4) * 0.05 }}
                className="bg-white rounded-[1.5rem] md:rounded-[2rem] border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
              >
                <button
                  onClick={() => toggle(cat.key)}
                  className="w-full flex items-center gap-4 md:gap-5 p-3 md:p-4 text-left hover:bg-slate-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl bg-slate-50 overflow-hidden">
                    <img
                      src={cat.cover}
                      alt={cat.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight">{cat.title}</h3>
                      <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${cat.badge}`}>
                        {cat.items.length} parça
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-slate-500 line-clamp-2 leading-snug">{cat.short}</p>
                  </div>
                  <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    isOpen ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-3 md:p-5 pt-0 md:pt-0 border-t border-slate-100">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-4">
                          {cat.items.map(item => (
                            <SparePartCard
                              key={item.key}
                              id={`spare-${cat.key}--${item.key}`}
                              item={item}
                              accent={cat.accent}
                              onZoom={(images, idx) =>
                                setZoom({ images, idx, title: item.title })
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative bg-gradient-to-br from-neon-pink via-brand-pink to-brand-orange rounded-[2.5rem] p-8 md:p-14 overflow-hidden text-white">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                Aradığınız parça listede yok mu?
              </h2>
              <p className="text-white/90 font-bold leading-relaxed mb-6">
                Sahip olduğunuz ürünün kodunu veya görselini bize iletin — birebir uyumlu yedek parçayı
                stoktan veya özel üretim olarak temin edelim. Yedek parça desteğimiz tüm satışlarımızda
                yıl sınırı olmadan devam eder.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-black px-6 py-4 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <Phone size={18} /> Hemen Ara
                </a>
                <a
                  href="https://wa.me/908501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-6 py-4 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
                >
                  WhatsApp ile Yaz
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                <img decoding="async" src="/images/yedek-parca/yay-25cm.png" alt="" className="aspect-square object-contain bg-white/15 backdrop-blur-md rounded-2xl p-3" />
                <img decoding="async" src="/images/yedek-parca/pad-real-1.jpg" alt="" className="aspect-square object-cover bg-white/15 backdrop-blur-md rounded-2xl" />
                <img decoding="async" src="/images/yedek-parca/sunger-10cm.png" alt="" className="aspect-square object-contain bg-white/15 backdrop-blur-md rounded-2xl p-3" />
                <img decoding="async" src="/images/yedek-parca/file-real-1.jpg" alt="" className="aspect-square object-cover bg-white/15 backdrop-blur-md rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox + swipe */}
      <AnimatePresence>
        {zoom && (
          <PartLightbox
            images={zoom.images}
            startIdx={zoom.idx}
            title={zoom.title}
            onClose={() => setZoom(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const SparePartCard = ({
  id, item, accent, onZoom,
}: {
  id?: string;
  item: SparePart;
  accent: string;
  onZoom: (images: string[], idx: number) => void;
}) => {
  const images = item.gallery && item.gallery.length ? item.gallery : (item.image ? [item.image] : []);
  return (
    <div id={id} className="bg-slate-50 hover:bg-white border-2 border-slate-100 hover:border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all hover:shadow-md">
      <button
        onClick={() => images.length && onZoom(images, 0)}
        className="relative aspect-[4/3] bg-white overflow-hidden cursor-zoom-in group"
      >
        {images[0] ? (
          <img
            src={images[0]}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <Wrench size={32} />
          </div>
        )}
        {images.length > 1 && (
          <span className="absolute top-2 right-2 text-[10px] font-black bg-slate-900/80 text-white px-2 py-0.5 rounded-full backdrop-blur">
            +{images.length - 1}
          </span>
        )}
      </button>
      <div className="p-3 md:p-4 flex flex-col gap-2 flex-grow">
        <h4 className={`text-sm md:text-[15px] font-black leading-tight ${accent}`}>{item.title}</h4>
        <p className="text-xs font-bold text-slate-500 leading-snug flex-grow">{item.desc}</p>
        <a
          href={buildWa(item.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-black text-xs px-3 py-3 rounded-xl transition-all shadow-sm hover:shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.058 23.486a.5.5 0 0 0 .609.61l5.71-1.496A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.378l-.36-.214-3.733.978.998-3.645-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
          </svg>
          WhatsApp ile Sor
        </a>
      </div>
    </div>
  );
};

const PartLightbox = ({
  images, startIdx, title, onClose,
}: {
  images: string[]; startIdx: number; title: string; onClose: () => void;
}) => {
  const [idx, setIdx] = useState(startIdx);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose]);

  const onTS = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTE = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setIdx(i => (i + 1) % images.length);
      else setIdx(i => (i - 1 + images.length) % images.length);
    }
    touchStart.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4"
      onClick={onClose}
      onTouchStart={onTS}
      onTouchEnd={onTE}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
        aria-label="Kapat"
      >
        <X size={22} />
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Sonraki"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}
      <motion.img
        key={idx}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        src={images[idx]}
        alt={title}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain rounded-xl bg-white/5 backdrop-blur-sm"
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-black text-sm">
        {title} {images.length > 1 && <>· {idx + 1} / {images.length}</>}
      </div>
    </motion.div>
  );
};

export default YedekParcalar;
