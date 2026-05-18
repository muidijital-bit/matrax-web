import { motion } from 'framer-motion';
import { ChevronRight, Shield, Layers, Wrench, Building, CheckCircle, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/usePageMeta';

const values = [
  {
    icon: <Layers size={24} />,
    title: 'Üstün Mimari ve Fonksiyonel Tasarım',
    desc: 'Kompakt "Kule" serisinden devasa "Cosmos", "Premium" ve "Arena" parkurlarına kadar her projeyi alanınızın ölçülerine ve tavan yüksekliğine göre milimetrik olarak revize ediyoruz.',
    color: 'bg-neon-pink',
  },
  {
    icon: <Shield size={24} />,
    title: 'Güvenlikten Taviz Vermeyen Kalite',
    desc: 'Ağır hizmet tipi elektrostatik toz boyalı çelik konstrüksiyon, 1100 Denye antibakteriyel PVC branda ve yüksek yoğunluklu darbe emici süngerler.',
    color: 'bg-brand-green',
  },
  {
    icon: <Wrench size={24} />,
    title: 'Kesintisiz Yedek Parça ve Servis',
    desc: 'Süngerlerden trambolin yaylarına, yedek filelerden top havuzu toplarına kadar geniş bir yedek parça stoğu her zaman hazırdır.',
    color: 'bg-neon-blue',
  },
  {
    icon: <Building size={24} />,
    title: 'İşletme Dostu Yaklaşım',
    desc: 'Modüler yapı sistemiyle hızlı kurulum, kapasite raporlaması ve alan tasarrufu sağlayan akıllı çözümler — küçük metrekarelerde bile devasa eğlence.',
    color: 'bg-neon-orange',
  },
];

const milestones = [
  { year: '2009', text: 'Matrax Oyun Grupları kuruldu, ilk trambolin parkı İstanbul\'da açıldı.', color: 'bg-neon-pink' },
  { year: '2013', text: 'Üretim kapasitesi genişletildi, Türkiye genelinde 100+ proje tamamlandı.', color: 'bg-neon-blue' },
  { year: '2017', text: 'Soft play, kreş ve top havuzu serileri ürün gamına eklendi.', color: 'bg-brand-green' },
  { year: '2021', text: 'Modüler MEGA parkur sistemi geliştirilerek piyasaya sunuldu.', color: 'bg-brand-pink' },
  { year: '2024', text: '500+ teslim edilen proje ve Türkiye\'nin 81 iline ulaşım sağlandı.', color: 'bg-neon-orange' },
  { year: '2026', text: 'MX-MEGA-2026 hattı ile sektörde en kapsamlı macera kompleksleri serisi.', color: 'bg-brand-orange' },
];

const About = () => {
  usePageMeta(
    'Hakkımızda | Matrax Oyun Grupları',
    '20 yılı aşkın tecrübesiyle Türkiye\'nin lider oyun grubu üreticisi Matrax hakkında bilgi edinin. EN-1176 sertifikalı üretim, anahtar teslim kurulum.',
    'matrax hakkında, oyun grubu üreticisi, trambolin parkı firması, EN-1176 sertifika'
  );
  return (
    <>
      {/* Hero — KVKK ile aynı yerleşim, marka yeşili tonu */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,169,36,0.18),transparent_60%)]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full font-black uppercase tracking-wider text-[10px] border border-white/20 mb-5"
          >
            <Building2 size={12} /> Kurumsal · Hakkımızda
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
          >
            20 Yıllık Deneyim, <span className="text-brand-green">Güvenilir Üretim</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-white/75 font-bold max-w-2xl text-base md:text-lg leading-relaxed"
          >
            Türkiye'nin dört bir yanında güvenli, sertifikalı ve uzun ömürlü oyun alanları tasarlıyor,
            üretiyor ve kuruyoruz. Modern atölye altyapımız ve EN-1176 sertifikalı üretim hattımızla
            sektörün güvenilir adresiyiz.
          </motion.p>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Yol Haritamız</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Vizyon &amp; <span className="text-neon-pink">Misyon</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Vizyon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-neon-pink/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <p className="text-xs font-black text-neon-pink uppercase tracking-widest mb-4">Vizyonumuz</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">Sektörün En Güvenilir Çözüm Ortağı</h3>
              <p className="text-white/80 font-bold leading-relaxed">
                Türkiye'nin her köşesinde, çocukların fiziksel ve sosyal gelişimini destekleyen,
                uluslararası güvenlik standartlarında, eğlence dolu ve uzun ömürlü oyun alanları
                yaratarak sektörün en güvenilir çözüm ortağı olmak.
              </p>
            </div>
          </motion.div>

          {/* Misyon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-brand-green via-emerald-600 to-emerald-700 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-brand-orange/15 rounded-full blur-3xl" />
            <div className="relative z-10">
              <p className="text-xs font-black text-white/80 uppercase tracking-widest mb-4">Misyonumuz</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">"Güvenle Zıpla, Eğlen!"</h3>
              <p className="text-white/85 font-bold leading-relaxed">
                Müşterilerimize yüksek verimlilik sunan bir işletme modeli kazandırmak;
                çocuklarımıza ise her anında "Güvenle Zıpla, Eğlen!" diyebilecekleri en mutlu
                anıları armağan etmek.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Avantaj listesi */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Neden Matrax?</p>
              <h3 className="text-2xl font-bold text-slate-800 leading-tight">İşletmenize Profesyonel Bir Macera Dünyası Kazandırıyoruz</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 flex-1">
              {[
                '%100 yerli üretim, kendi fabrikamızda',
                'EN-1176 / EN-1177 uluslararası güvenlik sertifikası',
                '2 yıl üretici garantisi + ömür boyu yedek parça',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-bold text-slate-700 text-sm leading-snug">
                  <CheckCircle size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <Link to="/katalog" className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3 rounded-full font-black hover:bg-slate-700 transition-colors shadow-md text-sm">
              Ürünleri İncele <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Değerlerimiz</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Bizi <span className="text-neon-blue">Farklı</span> Kılan Detaylar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                className="bg-slate-50 rounded-3xl p-7 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${v.color} text-white flex items-center justify-center mb-5 shadow-lg`}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{v.title}</h3>
                <p className="text-sm font-bold text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Tarihçemiz</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">15 Yıllık <span className="text-neon-orange">Yolculuğumuz</span></h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 -translate-x-1/2" />
          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative flex items-center gap-6 md:gap-10 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${m.color} ring-4 ring-white shadow-md -translate-x-1/2 z-10`} />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className={`inline-block ${m.color} text-white text-sm font-black px-4 py-1 rounded-full mb-3`}>
                      {m.year}
                    </span>
                    <p className="text-slate-700 font-bold leading-relaxed">{m.text}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Referanslarımız</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Birlikte Çalıştığımız <span className="text-neon-pink">İşletmeler</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Fun Park', 'Kidzone', 'Jump World', 'PlayCity',
            'Happy Kids', 'Cosmo Park', 'Mini Club', 'Wonder Land',
            'Sky Jump', 'Splash Zone', 'BabyWorld', 'Mega Fun',
          ].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white border-2 border-slate-100 rounded-2xl h-20 flex items-center justify-center px-4 shadow-sm hover:border-slate-200 hover:shadow-md transition-all"
            >
              <span className="text-sm font-black text-slate-400 text-center leading-tight">{name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
