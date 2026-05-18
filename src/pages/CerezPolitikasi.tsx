import { motion } from 'framer-motion';
import { Cookie, Settings2, BarChart3, Megaphone, ToggleRight } from 'lucide-react';

const types = [
  {
    icon: <Settings2 size={18} />,
    title: 'Zorunlu Çerezler',
    desc: 'Sitenin çalışması için gerekli olan; oturum, dil tercihi ve güvenlik gibi temel işlevleri sağlayan çerezlerdir. Devre dışı bırakılamazlar.',
    color: 'bg-brand-green/10 text-brand-green',
  },
  {
    icon: <BarChart3 size={18} />,
    title: 'Performans / Analitik Çerezler',
    desc: 'Site trafiğini ve kullanıcı davranışlarını anonim olarak analiz etmek; sayfa hızlarını ve kullanıcı deneyimini iyileştirmek için kullanılır.',
    color: 'bg-brand-navy/10 text-brand-navy',
  },
  {
    icon: <ToggleRight size={18} />,
    title: 'İşlevsel Çerezler',
    desc: 'Tercihlerinizi (dil, görünüm vb.) hatırlayarak kişiselleştirilmiş bir deneyim sunmamızı sağlayan çerezlerdir.',
    color: 'bg-brand-pink/10 text-brand-pink',
  },
  {
    icon: <Megaphone size={18} />,
    title: 'Pazarlama Çerezleri',
    desc: 'Reklam ve yeniden hedefleme amacıyla, ilgi alanlarınıza uygun içerik göstermek için üçüncü taraf iş ortaklarımızca yerleştirilebilir.',
    color: 'bg-brand-orange/10 text-brand-orange',
  },
];

const sections = [
  {
    title: 'Çerez Nedir?',
    body: `Çerezler, ziyaret ettiğiniz web sitelerinin tarayıcınız aracılığıyla cihazınıza kaydettiği küçük metin dosyalarıdır. Site deneyiminizin geliştirilmesi, kullanıcı tercihlerinin hatırlanması ve trafiğin analiz edilmesi gibi amaçlarla kullanılırlar.`,
  },
  {
    title: 'Çerezleri Nasıl Kontrol Edersiniz?',
    body: `Çerez tercihlerinizi her zaman tarayıcı ayarlarınızdan yönetebilir, mevcut çerezleri silebilir veya yeni çerezlerin yerleştirilmesini engelleyebilirsiniz. Ancak zorunlu çerezlerin devre dışı bırakılması durumunda sitemizin bazı bölümleri düzgün çalışmayabilir.`,
  },
  {
    title: 'Üçüncü Taraf Çerezleri',
    body: `Sitemizde Google Analytics, Meta Pixel gibi üçüncü taraf hizmet sağlayıcılarına ait çerezler kullanılabilir. Bu çerezler ilgili sağlayıcının gizlilik politikasına tabidir.`,
  },
  {
    title: 'Politika Güncellemeleri',
    body: `İşbu Çerez Politikası, ihtiyaç hâlinde tarafımızca güncellenebilir. Güncel sürüm her zaman bu sayfada yayınlanır.`,
  },
];

const CerezPolitikasi = () => (
  <div className="bg-slate-50">
    {/* Header */}
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-neon-orange/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full font-black uppercase tracking-wider text-[10px] border border-white/20 mb-5"
        >
          <Cookie size={12} /> Kurumsal · Çerez Politikası
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          Çerez <span className="text-neon-orange">Politikası</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-white/75 font-bold max-w-2xl text-base md:text-lg leading-relaxed"
        >
          Web sitemizde kullandığımız çerez türleri, kullanım amaçları ve tercihlerinizi nasıl yönetebileceğiniz hakkında detaylı bilgilere bu sayfadan ulaşabilirsiniz.
        </motion.p>
      </div>
    </section>

    {/* Çerez Türleri */}
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {types.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-3xl border-2 border-slate-100 p-6 hover:shadow-xl hover:border-slate-200 transition-all"
          >
            <div className={`w-11 h-11 rounded-xl ${t.color} flex items-center justify-center mb-4`}>
              {t.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.title}</h3>
            <p className="text-slate-600 font-medium text-sm leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-sm p-6 md:p-12 max-w-4xl mx-auto">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.05 }}
            className="mb-8 last:mb-0"
          >
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">{s.title}</h2>
            <p className="text-slate-600 font-medium leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default CerezPolitikasi;
