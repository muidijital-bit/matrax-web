import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Phone, ChevronRight, ZoomIn, X } from 'lucide-react';
import { categoryBadge } from '../data/products';
import { useProduct, useProducts } from '../lib/useSupabaseData';
import { usePageMeta } from '../lib/usePageMeta';

const SUBCATS: { key: string; catKey: string; label: string; match: (s: string) => boolean }[] = [
  { key: 'tekli',    catKey: 'trambolinler', label: 'Tekli Trambolinler',             match: s => s.startsWith('tekli-') },
  { key: 'olimpik',  catKey: 'trambolinler', label: 'Ticari Olimpik Trambolinler',    match: s => s.includes('ticari-olimpik') },
  { key: 'junior',   catKey: 'trambolinler', label: 'Ticari Junior Trambolinler',     match: s => s.includes('ticari-junior') },
  { key: 'zemin',    catKey: 'trambolinler', label: 'Zemin Trambolinler',             match: s => s.includes('zemin') },
  { key: 'fitness',  catKey: 'trambolinler', label: 'Fitness Trambolin',              match: s => s.includes('fitness') },
  { key: 'salto',    catKey: 'trambolinler', label: 'Salto Trambolin',                match: s => s.includes('salto') },
  { key: 'portatif', catKey: 'trambolinler', label: 'Portatif (Katlanır) Trambolin',  match: s => s.includes('portatif') },
];

const ProductDetail = () => {
  const { slug } = useParams();
  const { product, loading } = useProduct(slug ?? '');
  const { products: allProducts } = useProducts();
  const [activeImg, setActiveImg] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomIdx, setZoomIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  usePageMeta(
    product ? `${product.name} | Matrax Oyun Grupları` : 'Ürün | Matrax Oyun Grupları',
    product?.desc ?? 'Matrax Oyun Grupları — EN-1176 sertifikalı trambolin parkı ve oyun grubu üreticisi.',
    product ? `${product.name}, ${product.category}, matrax` : undefined
  );

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
  }, [slug]);

  // ESC + ok tuşları lightbox kontrolü
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(false);
      if (!product) return;
      if (e.key === 'ArrowRight') setZoomIdx(i => (i + 1) % displayImages.length);
      if (e.key === 'ArrowLeft') setZoomIdx(i => (i - 1 + displayImages.length) % displayImages.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [zoomed, product]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 flex justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-brand-pink rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-slate-400 font-bold mb-4">Ürün bulunamadı.</p>
        <Link to="/katalog" className="text-neon-pink font-black hover:opacity-70">← Ürünlere Dön</Link>
      </div>
    );
  }

  const related = allProducts
    .filter(p => p.categoryKey === product.categoryKey && p.slug !== product.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const subcat = SUBCATS.find(s => s.catKey === product.categoryKey && s.match(product.slug));

  // images boşsa image'ı fallback olarak kullan
  const displayImages = product.images?.length
    ? product.images
    : product.image ? [product.image] : [];

  const features = product.features ?? [
    'EN-1176 Uluslararası Sertifika',
    'A-1 Kalite UV Dayanımlı Branda',
    'Galvaniz Çelik İskelet',
    'Çift Dikişli Kenar Koruma',
    'Anahtar Teslim Kurulum',
    '2 Yıl Üretici Garantisi',
  ];
  const specs = product.specs ?? [
    { label: 'Üretici', value: 'Matrax Oyun Grupları' },
    { label: 'Sertifika', value: 'EN-1176 / EN-1177' },
    { label: 'Kurulum', value: 'Anahtar Teslim' },
    { label: 'Garanti', value: '2 Yıl' },
  ];

  // Mobil swipe — minimum 50px kaydırma
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < 40) return;
    if (diff > 0) setActiveImg(i => (i + 1) % displayImages.length);
    else setActiveImg(i => (i - 1 + displayImages.length) % displayImages.length);
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const openZoom = (idx?: number) => {
    setZoomIdx(idx ?? activeImg);
    setZoomed(true);
  };

  const waMessage = encodeURIComponent(`Merhaba, "${product.name}" ürünü hakkında bilgi almak istiyorum.`);
  const waLink = `https://wa.me/908501234567?text=${waMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 pb-28 lg:pb-10 overflow-x-hidden">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-[11px] text-slate-400 mb-6 md:mb-8 flex-wrap">
        <Link to="/" className="hover:text-neon-pink transition-colors">Ana Sayfa</Link>
        <ChevronRight size={11} className="flex-shrink-0" />
        <Link to="/katalog" className="hover:text-neon-pink transition-colors">Ürünler</Link>
        <ChevronRight size={11} className="flex-shrink-0" />
        {subcat ? (
          <Link to={`/katalog?kategori=${product.categoryKey}&alt=${subcat.key}`} className="hover:text-neon-pink transition-colors">
            {subcat.label}
          </Link>
        ) : (
          <Link to={`/katalog?kategori=${product.categoryKey}`} className="hover:text-neon-pink transition-colors">
            {product.category}
          </Link>
        )}
        <ChevronRight size={11} className="flex-shrink-0" />
        <span className="text-slate-900 font-bold line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mb-8 lg:mb-16">

        {/* Görseller */}
        <div className="flex flex-col gap-4 min-w-0">
          <div
            className="relative aspect-[4/3] rounded-2xl lg:rounded-[2.5rem] overflow-hidden bg-slate-50 shadow-xl group cursor-zoom-in select-none"
            onClick={() => openZoom()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                initial={{ opacity: 0.6, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                loading="lazy"
                decoding="async"
                src={displayImages[activeImg]}
                alt={product.name}
                className="w-full h-full object-contain p-4 pointer-events-none"
              />
            </AnimatePresence>

            {/* Zoom ipucu */}
            <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
              <ZoomIn size={18} className="text-slate-700" />
            </div>

            {/* Mobile arrows */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImg(i => (i - 1 + displayImages.length) % displayImages.length); }}
                  className="lg:hidden absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
                  aria-label="Önceki"
                >
                  <ChevronLeft size={20} className="text-slate-700" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImg(i => (i + 1) % displayImages.length); }}
                  className="lg:hidden absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
                  aria-label="Sonraki"
                >
                  <ChevronRight size={20} className="text-slate-700" />
                </button>
                {/* Sayaç */}
                <div className="lg:hidden absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/55 backdrop-blur-sm text-white text-[11px] font-black rounded-full">
                  {activeImg + 1} / {displayImages.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {displayImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory scrollbar-hide">
              {displayImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-14 lg:flex-1 lg:w-auto lg:h-auto lg:aspect-[4/3] rounded-xl overflow-hidden border-2 snap-start transition-all bg-slate-50 ${
                    activeImg === i ? 'border-neon-pink' : 'border-slate-100 hover:border-slate-300'
                  }`}
                >
                  <img loading="lazy" decoding="async" src={img} alt="" className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bilgiler */}
        <div className="flex flex-col min-w-0">
          <span className={`self-start text-xs font-black px-4 py-1.5 rounded-full mb-4 shadow-md ${categoryBadge[product.categoryKey] ?? product.badge}`}>
            {product.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800 mb-2 leading-tight">
            {product.name}
          </h1>
          {product.code && (
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Model: {product.code}</p>
          )}
          <p className="text-slate-500 font-bold leading-relaxed mb-6 text-base">
            {product.desc}
          </p>

          {product.longDesc && (
            <div className="mb-6 space-y-3">
              {product.longDesc.split(/\n\n+/).slice(1).map((para, i) => (
                <p key={i} className="text-slate-500 font-bold leading-relaxed text-sm">
                  {para}
                </p>
              ))}
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Özellikler</h3>
            <ul className="flex flex-col gap-2">
              {features.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="text-neon-pink flex-shrink-0 font-black">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 mb-8">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">Teknik Bilgiler</h3>
            <div className="grid grid-cols-2 gap-3">
              {specs.map(s => (
                <div key={s.label}>
                  <p className="text-xs font-black text-slate-400 mb-0.5">{s.label}</p>
                  <p className="text-sm font-black text-slate-700">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Masaüstü CTA */}
          <div className="hidden lg:flex flex-row gap-3 mt-auto">
            <a
              href="tel:+908501234567"
              className="flex-1 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={18} /> Fiyat Al
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-green text-white font-black py-4 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16 pt-10 border-t border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
              {product.category} — <span className="text-neon-pink">Diğer Ürünler</span>
            </h2>
            <Link
              to={`/katalog?kategori=${product.categoryKey}`}
              className="text-xs font-black text-slate-400 hover:text-neon-pink transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              Tümünü gör <ChevronRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {related.map(p => (
              <Link
                key={p.id}
                to={`/katalog/${p.slug}`}
                className="bg-white rounded-[2rem] border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all group overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                  <img
                    loading="lazy" decoding="async"
                    src={p.image} alt={p.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full mb-2 inline-block ${categoryBadge[p.categoryKey] ?? 'bg-slate-100 text-slate-600'}`}>
                    {p.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-700 line-clamp-2 leading-tight group-hover:text-neon-pink transition-colors">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox / Zoom */}
      <AnimatePresence>
        {zoomed && (
          <ZoomLightbox
            images={displayImages}
            index={zoomIdx}
            onClose={() => setZoomed(false)}
            setIndex={setZoomIdx}
            title={product.name}
          />
        )}
      </AnimatePresence>

      {/* Mobil sabit CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-2xl px-4 py-3 flex gap-3">
        <a
          href="tel:+908501234567"
          className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white font-black py-3.5 rounded-2xl text-sm"
        >
          <Phone size={16} /> Fiyat Al
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-green text-white font-black py-3.5 rounded-2xl text-sm"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.058 23.486a.5.5 0 0 0 .609.61l5.71-1.496A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.378l-.36-.214-3.733.978.998-3.645-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/></svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
};

type LBProps = {
  images: string[];
  index: number;
  setIndex: (i: number | ((p: number) => number)) => void;
  onClose: () => void;
  title: string;
};

const ZoomLightbox = ({ images, index, setIndex, onClose, title }: LBProps) => {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const startRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const lastTapRef = useRef<number>(0);
  const pinchStartRef = useRef<{ dist: number; scale: number } | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const reset = () => { setScale(1); setPos({ x: 0, y: 0 }); };

  useEffect(() => { reset(); }, [index]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const next = Math.min(4, Math.max(1, scale + (e.deltaY > 0 ? -0.25 : 0.25)));
    setScale(next);
    if (next === 1) setPos({ x: 0, y: 0 });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    setDragging(true);
    startRef.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !startRef.current) return;
    setPos({ x: startRef.current.px + (e.clientX - startRef.current.x), y: startRef.current.py + (e.clientY - startRef.current.y) });
  };
  const onMouseUp = () => { setDragging(false); startRef.current = null; };

  const onDoubleClick = () => {
    if (scale === 1) setScale(2);
    else reset();
  };

  // Touch — pinch zoom + pan + swipe (yalnızca scale=1 iken swipe)
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStartRef.current = { dist: Math.hypot(dx, dy), scale };
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      // Çift dokunuş — zoom toggle
      const now = Date.now();
      if (now - lastTapRef.current < 280) {
        if (scale === 1) setScale(2.2);
        else reset();
      }
      lastTapRef.current = now;

      if (scale === 1) {
        touchStartXRef.current = t.clientX;
      } else {
        startRef.current = { x: t.clientX, y: t.clientY, px: pos.x, py: pos.y };
        setDragging(true);
      }
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStartRef.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const next = Math.min(4, Math.max(1, pinchStartRef.current.scale * (dist / pinchStartRef.current.dist)));
      setScale(next);
      if (next === 1) setPos({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && dragging && startRef.current) {
      const t = e.touches[0];
      setPos({ x: startRef.current.px + (t.clientX - startRef.current.x), y: startRef.current.py + (t.clientY - startRef.current.y) });
    }
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    pinchStartRef.current = null;
    if (dragging) { setDragging(false); startRef.current = null; }
    // Swipe sadece zoom yokken aktif
    if (scale === 1 && touchStartXRef.current !== null && e.changedTouches[0]) {
      const diff = touchStartXRef.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) setIndex(i => (i + 1) % images.length);
        else setIndex(i => (i - 1 + images.length) % images.length);
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      onClick={onClose}
      onWheel={onWheel}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors z-10"
        aria-label="Kapat"
      >
        <X size={22} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setIndex(i => (i - 1 + images.length) % images.length); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors z-10"
            aria-label="Önceki"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIndex(i => (i + 1) % images.length); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors z-10"
            aria-label="Sonraki"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}

      <button
        onClick={(e) => { e.stopPropagation(); if (scale === 1) setScale(2); else reset(); }}
        className="absolute bottom-20 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors z-10"
        aria-label="Yakınlaştır"
      >
        <ZoomIn size={20} />
      </button>

      <div
        className="w-full h-full flex items-center justify-center overflow-hidden touch-none"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onDoubleClick={onDoubleClick}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          src={images[index]}
          alt={title}
          draggable={false}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            cursor: scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
            transition: dragging ? 'none' : 'transform 0.2s ease',
          }}
          className="max-w-[92vw] max-h-[88vh] object-contain rounded-xl select-none"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-black text-xs md:text-sm z-10">
        {title} · {index + 1} / {images.length}
      </div>
    </motion.div>
  );
};

export default ProductDetail;
