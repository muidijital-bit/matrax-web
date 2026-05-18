import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight, Briefcase, X } from 'lucide-react';

const filters = ['Tümü', 'Trambolin Parkı', 'Soft Play', 'Kreş & Kafe', 'Top Havuzu'];

const projects = [
  {
    id: 1,
    name: 'Fun Zone Trambolin Parkı',
    location: 'İstanbul, Kadıköy',
    date: 'Mart 2025',
    category: 'Trambolin Parkı',
    desc: '1.200 m² alanda kurulu, 18 trambolin modülü ve foam pit içeren tam donanımlı park.',
    image: '/images/galeri-yeni/galeri-1.jpg',
    accent: 'bg-neon-pink',
  },
  {
    id: 2,
    name: 'Kidzone Soft Play Merkezi',
    location: 'Ankara, Çankaya',
    date: 'Ocak 2025',
    category: 'Soft Play',
    desc: 'Kreş entegreli, 3 katlı kule sistemi ve top havuzuyla donatılmış soft play alanı.',
    image: '/images/galeri-yeni/galeri-12.jpg',
    accent: 'bg-neon-blue',
  },
  {
    id: 3,
    name: 'Minik Eller Kreş & Kafe',
    location: 'İzmir, Karşıyaka',
    date: 'Aralık 2024',
    category: 'Kreş & Kafe',
    desc: 'Ebeveyn kafe alanı ile entegre, renk psikolojisine uygun kreş oyun parkuru.',
    image: '/images/galeri-yeni/galeri-29.png',
    accent: 'bg-brand-pink',
  },
  {
    id: 4,
    name: 'Ykent AVM Top Havuzu',
    location: 'Kocaeli, İzmit',
    date: 'Kasım 2024',
    category: 'Top Havuzu',
    desc: '80 m² modüler top havuzu, sünger atlama parkuru ve mini trambolin kompleksi.',
    image: '/images/galeri-yeni/galeri-7.jpg',
    accent: 'bg-neon-orange',
  },
  {
    id: 5,
    name: 'Jump World AVM',
    location: 'İstanbul, Bakırköy',
    date: 'Eylül 2024',
    category: 'Trambolin Parkı',
    desc: 'AVM içi 2.000 m²lik mega trambolin parkı, ninja parkuru ve dodgeball alanı.',
    image: '/images/galeri-yeni/galeri-21.jpg',
    accent: 'bg-brand-green',
  },
  {
    id: 6,
    name: 'Happy Kids Oyun Alanı',
    location: 'Antalya, Muratpaşa',
    date: 'Temmuz 2024',
    category: 'Soft Play',
    desc: 'Otel bünyesinde çocuk kulübüne özel soft play ve yaş grubuna göre ayrılmış oyun bölümleri.',
    image: '/images/galeri-yeni/galeri-25.jpg',
    accent: 'bg-brand-navy',
  },
  {
    id: 7,
    name: 'Ykent Tırmanma & Sünger Havuzu',
    location: 'Kocaeli, İzmit',
    date: 'Haziran 2024',
    category: 'Soft Play',
    desc: 'AVM içi profesyonel tırmanma duvarı, çoklu rota ve geniş sünger havuzu kombinasyonu.',
    image: '/images/galeri-yeni/galeri-20.jpg',
    accent: 'bg-brand-pink',
  },
  {
    id: 8,
    name: 'Roller Kaydırak Ykent',
    location: 'Kocaeli, İzmit',
    date: 'Mayıs 2024',
    category: 'Soft Play',
    desc: 'Çift hatlı dev roller kaydırak ve eşlik eden top havuzu kurulumu.',
    image: '/images/galeri-yeni/galeri-22.jpg',
    accent: 'bg-brand-orange',
  },
  {
    id: 9,
    name: 'Cosmo Park Mega Kompleks',
    location: 'Bursa, Nilüfer',
    date: 'Mart 2024',
    category: 'Trambolin Parkı',
    desc: 'Modüler MEGA-2026 hattı ile 1.800 m²\'lik komple trambolin & macera kompleksi.',
    image: '/images/galeri-yeni/galeri-3.jpg',
    accent: 'bg-brand-pink',
  },
];

type Project = typeof projects[number];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <AnimatePresence>
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Görsel */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className={`absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full ${project.accent} text-white shadow`}>
            {project.category}
          </span>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Detaylar */}
        <div className="p-7">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">{project.name}</h2>

          <div className="flex flex-wrap gap-4 mb-5">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
              <MapPin size={14} className="text-neon-pink" /> {project.location}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-500">
              <Calendar size={14} className="text-neon-blue" /> {project.date}
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">{project.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const Projects = () => {
  const [active, setActive] = useState('Tümü');
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = active === 'Tümü' ? projects : projects.filter(p => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-brand-navy to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.18),transparent_60%)]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start justify-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full font-bold uppercase tracking-wider text-xs border border-white/20"
          >
            <Briefcase size={13} /> Referans Projeler
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-2xl md:text-3xl font-bold leading-tight"
          >
            Kurulan Parklar & <span className="text-brand-green">Alanlar</span>
          </motion.h1>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[90px] z-30 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all ${
                active === f
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-500 hover:text-slate-800 border border-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-6 py-12 max-w-7xl mx-auto">
        <p className="text-xs font-black text-slate-400 mb-5">{filtered.length} proje listeleniyor</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 200, damping: 22 }}
                className="bg-white rounded-[2rem] border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group overflow-hidden cursor-pointer"
                onClick={() => setSelected(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img loading="lazy" decoding="async"
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className={`absolute top-3 left-3 text-[10px] font-black px-3 py-1 rounded-full ${project.accent} text-white shadow-md`}>
                    {project.category}
                  </span>
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md">
                    <ArrowUpRight size={16} className="text-slate-700" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm font-bold text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-black text-slate-400 border-t-2 border-slate-100 pt-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-neon-pink" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-neon-blue" /> {project.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Proje detay modalı */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default Projects;
