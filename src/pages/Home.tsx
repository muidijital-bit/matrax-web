import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, ArrowUpRight, Phone, Mail, MapPin, Hammer, Camera, Calendar, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories as catList, products as allProducts } from '../data/products';
import { usePageMeta } from '../lib/usePageMeta';

const HERO_IMAGE = '/images/galeri-yeni/galeri-1.jpg';
const HERO_VIDEO = '/videos/hero.mp4';
// Video dosyası /public/videos/hero.mp4 konunca HERO_HAS_VIDEO = true yapın (1920x1080 önerilir)
const HERO_HAS_VIDEO = true;

const HeroSlider = () => {
  return (
    <section className="relative w-full h-screen min-h-[520px] sm:min-h-[600px] md:min-h-[640px] overflow-hidden bg-black">

      {/* Arka plan — video veya görsel */}
      {HERO_HAS_VIDEO ? (
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_IMAGE}
          alt="Matrax Oyun Grupları — Trambolin Parkı"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
      )}

      {/* Üstten aşağıya overlay — üstte koyu (nav okunurluk), altta siyah (yazı okunurluk) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 15%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.60) 65%, rgba(0,0,0,0.82) 80%, rgba(0,0,0,0.92) 100%)',
        }}
      />

      {/* Soft doku */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient glow — marka renklerinde arka plan ışıkları */}
      <div className="absolute top-1/4 left-0 w-[260px] h-[260px] md:w-[500px] md:h-[500px] bg-brand-pink/25 blur-[100px] md:blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-brand-green/20 blur-[80px] md:blur-[120px] pointer-events-none rounded-full" />

      {/* Alt bölümüne soft geçiş fade */}
      <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent pointer-events-none" />

      {/* İçerik — nav yüksekliği için pt-[90px]; cam kart yok, doğrudan video üzerinde */}
      <div className="relative z-10 h-full w-full px-5 sm:px-10 md:px-14 lg:px-20 xl:px-28 flex items-center pt-[90px]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          {/* Başlık — marka renkleriyle vurgulu */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white mb-5 drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]"
          >
            <span className="text-white">Modern oyun alanları</span>
            <br className="hidden sm:block" />{' '}
            <span className="text-white">için</span>{' '}
            <span className="text-brand-orange">güçlü</span>{' '}
            <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-green bg-clip-text text-transparent">
              üretim yaklaşımı.
            </span>
          </motion.h1>

          {/* Açıklama */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-white/85 text-sm md:text-[15px] leading-relaxed mb-8 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          >
            <span className="text-brand-pink font-bold">MatraX;</span> soft play alanları, trambolin sistemleri ve modern oyun grupları için
            <span className="text-brand-green font-semibold"> güvenli</span>,
            <span className="text-brand-orange font-semibold"> estetik</span> ve
            <span className="text-white font-semibold"> yüksek kalite</span> standartlarında üretim çözümleri sunar.
          </motion.p>

          {/* CTA Butonları */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* Primary — pembe→yeşil marka gradient */}
            <Link
              to="/projeler"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-pink to-brand-green text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:scale-[1.04] hover:shadow-xl hover:shadow-brand-pink/35 transition-all duration-300"
            >
              Projeleri İncele <ChevronRight size={16} strokeWidth={2.5} />
            </Link>

            {/* Secondary — ince outline */}
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 border border-white/30 text-white bg-white/[0.07] backdrop-blur-sm px-7 py-3.5 rounded-full font-semibold text-sm hover:border-white/55 hover:bg-white/[0.14] hover:scale-[1.04] transition-all duration-300"
            >
              Teklif Al <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const pickFeatured = (codes: string[]) =>
  codes
    .map(code => allProducts.find(p => p.code === code) || allProducts.find(p => p.slug.includes(code.toLowerCase())))
    .filter(Boolean) as typeof allProducts;

const featured = pickFeatured(['MX-MEGA-2026', 'MX-OKA-9900', 'MX-DIS-9900']).slice(0, 3);

// Anasayfada Kreş & Kafe gizli — 6 kategori gösterilir
const categories = catList
  .filter(c => c.key !== 'kres-kafe')
  .map((c, i) => {
    const sample = allProducts.find(p => p.categoryKey === c.key);
    return { id: i + 1, ...c, image: sample?.image || c.image };
  });




const homeProjects = [
  {
    name: 'Fun Zone Trambolin Parkı',
    location: 'İstanbul, Kadıköy',
    date: 'Mart 2025',
    category: 'Trambolin Parkı',
    image: '/images/galeri-yeni/galeri-1.jpg',
    accent: 'bg-neon-pink',
  },
  {
    name: 'Ykent Roller Slide Macera Hattı',
    location: 'Kocaeli, İzmit',
    date: 'Ocak 2025',
    category: 'Soft Play',
    image: '/images/galeri-yeni/galeri-22.jpg',
    accent: 'bg-neon-blue',
  },
  {
    name: 'Ykent AVM Top Havuzu',
    location: 'Kocaeli, İzmit',
    date: 'Kasım 2024',
    category: 'Top Havuzu',
    image: '/images/galeri-yeni/galeri-7.jpg',
    accent: 'bg-brand-green',
  },
  {
    name: 'Cosmo Park Mega Kompleks',
    location: 'Bursa, Nilüfer',
    date: 'Mart 2024',
    category: 'Soft Play Grubu',
    image: '/images/galeri-yeni/galeri-12.jpg',
    accent: 'bg-neon-orange',
  },
  {
    name: 'Rainbow Tırmanma & Sünger Havuzu',
    location: 'İstanbul, Bakırköy',
    date: 'Eylül 2024',
    category: 'Sünger Havuzu',
    image: '/images/galeri-yeni/galeri-26.jpg',
    accent: 'bg-brand-pink',
  },
  {
    name: 'Happy Kids Oyun Alanı',
    location: 'Antalya, Muratpaşa',
    date: 'Temmuz 2024',
    category: 'Trambolin Parkı',
    image: '/images/galeri-yeni/galeri-21.jpg',
    accent: 'bg-brand-navy',
  },
];

const ProjectsSection = () => (
  <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
    <div className="flex items-end justify-between mb-8">
      <div>
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Referans Projeler</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Teslim Ettiğimiz <span className="text-neon-pink">İşler</span></h2>
      </div>
      <Link to="/projeler" className="hidden md:flex items-center gap-2 text-neon-pink font-black hover:opacity-70 transition-opacity text-sm">
        Tümünü Gör <ArrowRight size={16} />
      </Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {homeProjects.slice(0, 3).map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 3) * 0.08, type: 'spring', stiffness: 200, damping: 22 }}
        >
          <Link
            to="/projeler"
            className="block bg-white rounded-[2.5rem] p-4 border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-5">
              <img decoding="async"
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className={`absolute top-3 left-3 ${p.accent} text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md`}>
                {p.category}
              </span>
            </div>
            <div className="px-2 pb-2">
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">{p.name}</h3>
              <div className="flex items-center justify-between text-xs font-black text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-neon-pink" /> {p.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-neon-blue" /> {p.date}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-6 md:hidden">
      <Link to="/projeler" className="inline-flex items-center gap-2 text-neon-pink font-black text-sm">
        Tüm Projeler <ArrowRight size={16} />
      </Link>
    </div>
  </section>
);

const Home = () => {
  usePageMeta(
    'Matrax Oyun Grupları — Trambolin Parkları, Soft Play & Top Havuzu Üreticisi',
    'EN-1176 sertifikalı trambolin parkı, soft play oyun grubu ve top havuzu üretimi. 20 yılı aşkın tecrübe, anahtar teslim Türkiye geneli kurulum.',
    'trambolin parkı, soft play, top havuzu, oyun grubu, matrax'
  );
  return (
    <>
      <HeroSlider />

      {/* Kategoriler — popüler ürünler tarzı kartlar */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Kategoriler</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ürün <span className="text-neon-pink">Kategorileri</span></h2>
          </div>
          <Link to="/katalog" className="hidden md:flex items-center gap-2 text-neon-pink font-black hover:opacity-70 transition-opacity text-sm">
            Tümünü Gör <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const count = allProducts.filter(p => p.categoryKey === cat.key).length;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 22 }}
              >
                <Link
                  to={`/katalog?kategori=${cat.key}`}
                  className="block bg-white rounded-[2.5rem] p-4 border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-5">
                    <img decoding="async"
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-black px-3 py-1 rounded-full">
                      {count} ürün
                    </span>
                  </div>
                  <div className="px-2 pb-2 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{cat.name}</h3>
                    <span className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-neon-pink group-hover:text-white transition-colors flex-shrink-0">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-6 md:hidden">
          <Link to="/katalog" className="inline-flex items-center gap-2 text-neon-pink font-black text-sm">
            Tüm Kategoriler <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Yedek Parça kategorileri — 3'lü kart */}
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Yedek Parça</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Yedek <span className="text-neon-pink">Parçalar</span>
            </h2>
          </div>
          <Link to="/yedek-parcalar" className="hidden md:flex items-center gap-2 text-neon-pink font-black hover:opacity-70 transition-opacity text-sm">
            Tümünü Gör <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Trambolin Yayları',
              desc: '8.5 — 28 cm galvaniz çelik yaylar',
              image: '/images/yedek-parca/yay-25cm.png',
              count: '8+ model',
            },
            {
              name: 'Koruma Padleri & Fileler',
              desc: 'Yay üstü pad, koruma filesi, örme zıplama ağı',
              image: '/images/yedek-parca/pad-real-1.jpg',
              count: '12+ model',
            },
            {
              name: 'Yedek Süngerler & Aksesuar',
              desc: 'Sünger küpler, salto halatı, makaralar, tutacaklar',
              image: '/images/yedek-parca/sunger-10cm.png',
              count: '30+ kalem',
            },
          ].map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200, damping: 22 }}
            >
              <Link
                to="/yedek-parcalar"
                className="block bg-white rounded-[2.5rem] p-4 border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-5 bg-slate-50">
                  <img decoding="async"
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-black px-3 py-1 rounded-full">
                    {cat.count}
                  </span>
                </div>
                <div className="px-2 pb-2 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-slate-800 leading-tight mb-1">{cat.name}</h3>
                    <p className="text-xs font-bold text-slate-400 leading-snug line-clamp-1">{cat.desc}</p>
                  </div>
                  <span className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-neon-pink group-hover:text-white transition-colors flex-shrink-0">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 md:hidden">
          <Link to="/yedek-parcalar" className="inline-flex items-center gap-2 text-neon-pink font-black text-sm">
            Tüm Yedek Parçalar <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Öne Çıkanlar</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Popüler <span className="text-neon-pink">Ürünler</span></h2>
          </div>
          <Link to="/katalog" className="hidden md:flex items-center gap-2 text-neon-pink font-black hover:opacity-70 transition-opacity text-sm">
            Tümünü Gör <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              className="h-full"
            >
              <Link
                to={`/katalog/${product.slug}`}
                className="h-full flex flex-col bg-white rounded-[2.5rem] p-4 border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-5 bg-slate-50">
                  <img decoding="async"
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-black px-3 py-1 rounded-full ${product.badge}`}>
                    {product.category}
                  </span>
                </div>
                <div className="px-2 pb-2 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight line-clamp-2">{product.name}</h3>
                  <p className="text-sm font-bold text-slate-400 leading-relaxed mb-5 line-clamp-2">{product.desc}</p>
                  <span className="mt-auto flex items-center gap-2 text-sm font-black text-slate-700 group-hover:text-neon-pink transition-colors">
                    Detayları Gör <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6 md:hidden">
          <Link to="/katalog" className="inline-flex items-center gap-2 text-neon-pink font-black text-sm">
            Tüm Ürünleri Gör <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* References slider */}
      <section className="py-12 overflow-hidden">
        <div className="text-center mb-6">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Referanslarımız</p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee gap-6 w-max">
            {[
              'Fun Park', 'Kidzone', 'Jump World', 'PlayCity', 'Happy Kids',
              'Cosmo Park', 'Mini Club', 'Wonder Land', 'Sky Jump', 'Splash Zone',
              'BabyWorld', 'Mega Fun',
              /* kopya — sonsuz döngü için */
              'Fun Park', 'Kidzone', 'Jump World', 'PlayCity', 'Happy Kids',
              'Cosmo Park', 'Mini Club', 'Wonder Land', 'Sky Jump', 'Splash Zone',
              'BabyWorld', 'Mega Fun',
            ].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white border-2 border-slate-100 rounded-2xl w-36 h-20 flex items-center justify-center px-4 shadow-sm"
              >
                <span className="text-sm font-black text-slate-400 text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>
          {/* kenar soluklaştırma */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        </div>
      </section>

      <ProjectsSection />

      {/* Yedek Parça — büyük öne çıkan banner */}
      <section className="px-4 md:px-6 pb-6 max-w-7xl mx-auto">
        <Link
          to="/yedek-parcalar"
          className="group relative block rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-navy to-slate-900" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-neon-pink/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-teal/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-6 md:gap-10 p-6 md:p-12 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full font-black uppercase tracking-wider text-[10px] border border-white/25 mb-5">
                <Wrench size={12} /> Yedek Parça Servisi
              </span>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                Yedek <span className="text-brand-teal">Parça</span> mı arıyorsunuz?
              </h3>
              <p className="text-white/85 font-bold text-sm md:text-base mb-6 max-w-xl leading-relaxed">
                Trambolin yayları, koruma padleri, sünger küpleri, roller makaraları, salto halatı,
                tırmanma tutacakları ve daha fazlası — 50+ kalem stoklu ve aynı gün sevk.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 bg-white text-slate-900 font-black px-6 py-3 rounded-full text-sm shadow-md group-hover:scale-105 transition-transform">
                  Yedek Parçaları İncele <ArrowRight size={16} />
                </span>
                <a
                  href="https://wa.me/908501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-black px-6 py-3 rounded-full text-sm shadow-md"
                >
                  WhatsApp ile Sor
                </a>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wrench size={220} strokeWidth={1.2} className="text-white/10" />
                </div>
                <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
                  <img loading="lazy" decoding="async" src="/images/yedek-parca/yay-25cm.png" alt="Trambolin yayı" className="rounded-2xl bg-white/15 backdrop-blur-md p-3 object-contain" />
                  <img loading="lazy" decoding="async" src="/images/yedek-parca/pad-real-1.jpg" alt="Trambolin padi" className="rounded-2xl bg-white/15 backdrop-blur-md object-cover" />
                  <img loading="lazy" decoding="async" src="/images/yedek-parca/sunger-10cm.png" alt="Yedek sünger" className="rounded-2xl bg-white/15 backdrop-blur-md p-3 object-contain" />
                  <img loading="lazy" decoding="async" src="/images/yedek-parca/file-real-1.jpg" alt="Koruma filesi" className="rounded-2xl bg-white/15 backdrop-blur-md object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* İmalat & Galeri promo */}
      <section className="px-4 md:px-6 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* İmalat */}
          <Link
            to="/imalat"
            className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[340px] flex shadow-xl hover:shadow-2xl transition-all"
          >
            <img decoding="async" src="/images/imalat/imalat-1.jpg" alt="İmalat" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/95 via-slate-900/70 to-brand-pink/40" />
            <div className="relative z-10 p-6 md:p-10 flex flex-col justify-end text-white w-full">
              <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full font-black uppercase tracking-wider text-[10px] border border-white/20 mb-4">
                <Hammer size={12} /> Üretim
              </span>
              <h3 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">Sürecimizi <span className="text-neon-orange">Fabrikada</span> Keşfedin</h3>
              <p className="text-white/80 font-bold text-sm md:text-base mb-5 max-w-md">
                Tasarımdan kuruluma 6 aşamalı üretim hattımız ve atölye fotoğraflarımız.
              </p>
              <span className="inline-flex items-center gap-2 font-black text-sm group-hover:text-neon-orange transition-colors">
                İmalat Aşamalarına Git <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          {/* Galeri */}
          <Link
            to="/galeri"
            className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[260px] sm:min-h-[300px] md:min-h-[340px] flex shadow-xl hover:shadow-2xl transition-all"
          >
            <img decoding="async" src="/images/galeri-yeni/galeri-15.jpg" alt="Galeri" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/95 via-brand-navy/70 to-brand-pink/40" />
            <div className="relative z-10 p-6 md:p-10 flex flex-col justify-end text-white w-full">
              <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full font-black uppercase tracking-wider text-[10px] border border-white/20 mb-4">
                <Camera size={12} /> Foto Albümü
              </span>
              <h3 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">Sahadan <span className="text-brand-orange">Anılar</span> & Kurulumlar</h3>
              <p className="text-white/80 font-bold text-sm md:text-base mb-5 max-w-md">
                Türkiye genelinde tamamladığımız onlarca projemizden seçkiler.
              </p>
              <span className="inline-flex items-center gap-2 font-black text-sm group-hover:text-brand-orange transition-colors">
                Galeriye Git <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA — Hakkımızda + 3 kart birleşik */}
      <section className="py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Turuncu kart — alt kısımda kartlar için boşluk */}
          <div className="bg-neon-orange rounded-[2rem] md:rounded-[3rem] pt-10 sm:pt-14 md:pt-24 px-6 sm:px-12 md:px-24 pb-10 sm:pb-14 md:pb-36 text-center text-white relative overflow-hidden shadow-glow-orange">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-xs font-black uppercase tracking-widest text-white/70 mb-4"
              >
                Hakkımızda
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Sadece Oyun Alanı Değil,<br />Yaşayan Bir Dünya
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="text-lg font-bold text-white/80 max-w-xl mx-auto mb-10"
              >
                Tematik görsel panellerimiz ve interaktif modüllerimizle çocukların içine girmekten
                keyif alacağı, milimetrik hassasiyetle tasarlanmış maceralar üretiyoruz.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              >
                <Link
                  to="/hakkimizda"
                  className="inline-flex items-center gap-2 bg-white text-neon-orange font-black px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl text-sm"
                >
                  Bizi Tanıyın <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* 3 kart — turuncu kartın altından taşıyor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:-mt-20 relative z-10 px-4 md:px-8">
          {[
            {
              icon: <Phone size={22} />,
              title: 'BİZİ ARAYIN',
              desc: 'Mesai saatlerimiz içerisinde bize telefon numaramızdan ulaşabilir, uzman ekibimizden bilgi alabilirsiniz.',
              href: 'tel:+908501234567',
              color: 'bg-neon-pink',
            },
            {
              icon: <Mail size={22} />,
              title: 'MAİL GÖNDERİN',
              desc: 'Mesai saatlerimiz içerisinde ve dışında bize mail gönderebilir, en kısa sürede dönüş alabilirsiniz.',
              href: 'mailto:info@matraxoyungruplari.com',
              color: 'bg-neon-blue',
            },
            {
              icon: <MapPin size={22} />,
              title: 'BİZE ULAŞIN',
              desc: 'Showroom ve fabrikamıza gelerek ürünlerimizi yerinde inceleyebilir, proje danışmanlığı alabilirsiniz.',
              href: '/iletisim',
              color: 'bg-neon-orange',
            },
          ].map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="relative pt-10 bg-white border border-slate-100 rounded-2xl px-8 pb-8 text-center hover:shadow-2xl transition-all group shadow-xl"
            >
              {/* İkon — üstten taşan */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${card.color} flex items-center justify-center text-white shadow-lg`}>
                {card.icon}
              </div>

              <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">{card.title}</h3>
              <p className="text-sm font-bold text-slate-400 leading-relaxed">{card.desc}</p>
            </motion.a>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
