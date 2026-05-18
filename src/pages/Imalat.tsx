import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Hammer, Cog, Layers, Shield, Sparkles, Truck } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';

const images = Array.from({ length: 15 }, (_, i) => `/images/imalat/imalat-${i + 1}.jpg`);

const stages = [
  { icon: <Layers size={22} />, title: 'Tasarım & Mühendislik', desc: 'Müşteri ihtiyaçlarına göre 3D tasarım, statik hesap ve EN-1176 / EN-1177 uyumluluk kontrolü.', color: 'bg-neon-pink' },
  { icon: <Hammer size={22} />, title: 'Çelik Konstrüksiyon', desc: 'Galvaniz boru kesim, büküm, robotik kaynak ve elektrostatik fırın boya işlemleri.', color: 'bg-neon-blue' },
  { icon: <Cog size={22} />, title: 'Sünger & Branda Üretimi', desc: 'A-1 kalite branda kesim, çift dikiş ve yüksek yoğunluklu sünger sarımı.', color: 'bg-neon-orange' },
  { icon: <Shield size={22} />, title: 'Kalite Kontrol', desc: 'Her parça için yük, dikiş, sertifika ve renk uygunluk testleri yapılır.', color: 'bg-brand-green' },
  { icon: <Sparkles size={22} />, title: 'Montaj & Paketleme', desc: 'Numaralı parça etiketleme, koruyucu naylon ve özel ambalaj uygulanır.', color: 'bg-brand-pink' },
  { icon: <Truck size={22} />, title: 'Sevkiyat & Anahtar Teslim Kurulum', desc: 'Türkiye geneli sevkiyat ve uzman ekibimizle yerinde profesyonel kurulum.', color: 'bg-brand-orange' },
];

const Imalat = () => {
  usePageMeta(
    'İmalat Sürecimiz | Matrax Oyun Grupları',
    'Matrax fabrikasında 6 aşamalı üretim süreci: tasarım, çelik konstrüksiyon, sünger üretimi, kalite kontrol, montaj ve sevkiyat. EN-1176 standartlarında üretim.',
    'oyun grubu imalat, trambolin üretim süreci, soft play üretimi, matrax fabrika'
  );
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive(a => (a === null ? 0 : (a + 1) % images.length));
  const prev = () => setActive(a => (a === null ? 0 : (a - 1 + images.length) % images.length));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,200,0,0.15),transparent_60%)]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-orange/20 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start justify-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full font-bold uppercase tracking-wider text-xs border border-white/20"
          >
            <Hammer size={13} /> Üretim Süreci
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-2xl md:text-3xl font-bold leading-tight"
          >
            Her Detay <span className="text-neon-orange">Fabrikamızda</span> Hayat Buluyor
          </motion.h1>
        </div>
      </section>

      {/* Stages */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">6 Aşamalı Süreç</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Sıfırdan Sahaya <span className="text-neon-pink">Üretim Yolculuğu</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-white rounded-3xl p-7 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <span className="absolute -top-4 -right-4 text-7xl font-black text-slate-100 select-none">
                0{i + 1}
              </span>
              <div className={`relative w-12 h-12 rounded-2xl ${s.color} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="relative text-xl font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="relative text-sm font-bold text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Fabrika Albümü</p>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
                Atölyeden <span className="text-neon-blue">Anlar</span>
              </h2>
            </div>
            <p className="text-sm font-bold text-slate-500 max-w-md">
              Üretim hattımızdan birebir kareler. Her parça insan eliyle, titizlikle üretilir.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((src, i) => (
              <motion.button
                key={src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.04, duration: 0.3 }}
                onClick={() => setActive(i)}
                className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 group cursor-zoom-in shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  src={src}
                  alt={`İmalat aşaması ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs font-black">İmalat #{i + 1}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
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
              src={images[active]}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-black text-sm">
              {active + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Imalat;
