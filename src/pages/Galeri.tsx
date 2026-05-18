import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const allImages = [
  ...Array.from({ length: 28 }, (_, i) => `/images/galeri-yeni/galeri-${i + 1}.jpg`),
  '/images/galeri-yeni/galeri-29.png',
  '/images/galeri-yeni/galeri-30.jpg',
  '/images/parklar/park-olimpik.png',
  '/images/parklar/park-buyuk.png',
  '/images/parklar/park-top-havuzlu.png',
  '/images/parklar/park-tirmanma-duvarli.png',
  '/images/parklar/park-4-basket.png',
  '/images/parklar/park-5.png',
  '/images/parklar/roller-top-havuzu-trambolin.jpg',
];

const filters = [
  { key: 'tumu', label: 'Tümü', range: [0, 37] },
  { key: 'sahaya-kurulum', label: 'Saha Kurulumları', range: [0, 14] },
  { key: 'top-havuzu', label: 'Top Havuzları', range: [14, 21] },
  { key: 'tirmanma', label: 'Tırmanma Duvarları', range: [21, 28] },
  { key: 'projeler', label: 'Saha Projeleri', range: [28, 30] },
  { key: 'park-render', label: 'Park Tasarımları', range: [30, 37] },
] as const;

const Galeri = () => {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<typeof filters[number]['key']>('tumu');

  const visible = useMemo(() => {
    const f = filters.find(f => f.key === filter)!;
    return allImages.slice(f.range[0], f.range[1]);
  }, [filter]);

  const close = () => setActive(null);
  const next = () => setActive(a => (a === null ? 0 : (a + 1) % visible.length));
  const prev = () => setActive(a => (a === null ? 0 : (a - 1 + visible.length) % visible.length));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-pink/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start justify-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full font-bold uppercase tracking-wider text-xs border border-white/25"
          >
            <Camera size={13} /> Foto Albümü
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-2xl md:text-3xl font-bold leading-tight"
          >
            Sahadan <span className="text-brand-orange">Anılar</span> & Kurulumlar
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[90px] z-30 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all ${
                filter === f.key
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-500 hover:text-slate-800 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid — eşit kareler, hizalı */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {visible.map((src, i) => (
            <motion.button
              key={src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i % 8) * 0.04 }}
              onClick={() => setActive(i)}
              className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 group cursor-zoom-in shadow-sm hover:shadow-xl transition-shadow"
            >
              <img
                src={src}
                alt={`Galeri ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs font-black">Galeri #{i + 1}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-slate-400 font-bold py-20">Bu kategoride henüz görsel bulunmuyor.</p>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              aria-label="Kapat"
            >
              <X size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight size={26} />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={visible[active]}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-black text-sm">
              {active + 1} / {visible.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Galeri;
