import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search } from 'lucide-react';
import SearchPanel from './SearchPanel';

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconYoutube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const FlagTR = () => (
  <svg viewBox="0 0 60 40" className="w-[18px] h-[12px] rounded-sm shadow-sm flex-shrink-0">
    <rect width="60" height="40" fill="#E30A17"/>
    <circle cx="22" cy="20" r="8" fill="#fff"/>
    <circle cx="24.5" cy="20" r="6.4" fill="#E30A17"/>
    <polygon fill="#fff" points="32.5,20 28.2,21.4 30.86,17.74 30.86,22.26 28.2,18.6"/>
  </svg>
);
const FlagEN = () => (
  <svg viewBox="0 0 60 30" className="w-[18px] h-[12px] rounded-sm shadow-sm flex-shrink-0 overflow-hidden">
    <clipPath id="uk-s">
      <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z" />
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-s)" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const langs = [
  { code: 'TR', flag: <FlagTR />, label: 'Türkçe' },
  { code: 'EN', flag: <FlagEN />, label: 'English' },
];

// LangSwitcher geçici olarak devre dışı

type NavItem = {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
};

const navLinks: NavItem[] = [
  { name: 'Ana Sayfa', path: '/' },
  {
    name: 'Kurumsal',
    path: '/hakkimizda',
    children: [
      { name: 'Hakkımızda', path: '/hakkimizda' },
      { name: 'KVKK', path: '/kvkk' },
      { name: 'Çerez Politikası', path: '/cerez-politikasi' },
    ],
  },
  { name: 'Ürünler', path: '/katalog' },
  { name: 'Projelerimiz', path: '/projeler' },
  { name: 'İmalat', path: '/imalat' },
  { name: 'Yedek Parça', path: '/yedek-parcalar' },
  { name: 'Galeri', path: '/galeri' },
];

const DesktopNavItem = ({ item, currentPath, dark = false }: { item: NavItem; currentPath: string; dark?: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isActive = item.children
    ? item.children.some(c => c.path === currentPath)
    : currentPath === item.path;

  const baseText = dark
    ? `text-white/95 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] ${isActive ? 'text-white font-bold' : ''}`
    : `text-slate-700 hover:text-neon-pink ${isActive ? 'text-neon-pink' : ''}`;

  if (!item.children) {
    return (
      <Link to={item.path} className={`transition-all duration-200 whitespace-nowrap text-sm font-semibold ${baseText}`}>
        {item.name}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`flex items-center gap-1 transition-all duration-200 whitespace-nowrap text-sm font-semibold ${baseText}`}>
        {item.name}
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden min-w-[200px] py-2">
              {item.children.map(c => (
                <Link
                  key={c.path}
                  to={c.path}
                  className={`block px-5 py-2.5 text-sm font-semibold transition-colors ${
                    currentPath === c.path
                      ? 'text-neon-pink bg-brand-pink/60'
                      : 'text-slate-600 hover:text-neon-pink hover:bg-slate-50'
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FloatingActions = () => {
  const [show, setShow] = useState(true);
  const location = useLocation();
  // Ürün detay sayfasında mobilde sticky CTA bar var — butonu üstüne çık
  const isProductPage = location.pathname.startsWith('/katalog/');

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const bottom = doc.scrollHeight - doc.scrollTop - window.innerHeight;
      setShow(bottom > 220);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed right-3 md:right-6 z-[60] flex flex-col gap-3 transition-all duration-300 ${
        isProductPage ? 'bottom-24 lg:bottom-6' : 'bottom-3 md:bottom-6'
      } ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <a
        href="https://wa.me/908501234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yaz"
        className="group relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-2xl shadow-emerald-600/40 flex items-center justify-center hover:scale-110 transition-all"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative w-6 h-6 md:w-8 md:h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.058 23.486a.5.5 0 0 0 .609.61l5.71-1.496A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.378l-.36-.214-3.733.978.998-3.645-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
        </svg>
        <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-black rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp ile yaz
        </span>
      </a>
      <a
        href="tel:+908501234567"
        aria-label="Telefonla ara"
        className="group relative hidden md:flex w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/30 items-center justify-center hover:scale-110 transition-all"
      >
        <Phone size={20} />
        <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-black rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Hemen ara
        </span>
      </a>
    </div>
  );
};

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileKurumsal, setMobileKurumsal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Sadece home'da, hero'nun üzerindeyken (scroll edilmemişken) koyu zemin var sayılır.
  const isDark = isHome && !scrolled;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setSearchOpen(false);
    setScrolled(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-brand-navy selection:text-white overflow-x-hidden w-full">
      {/* Navbar — en üstte şeffaf, scroll edildiğinde beyaz cam zemin */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome && !scrolled
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[90px] flex items-center justify-between gap-4">

          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <img
              decoding="async"
              fetchPriority="high"
              src="/images/logo.png?v=4"
              alt="Matrax Oyun Grupları Logo"
              className={`h-16 md:h-[88px] w-auto object-contain transition-all duration-500 ${
                isDark ? 'drop-shadow-[0_2px_16px_rgba(255,255,255,0.6)]' : ''
              }`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map(item => (
              <DesktopNavItem key={item.name} item={item} currentPath={location.pathname} dark={isDark} />
            ))}
            <Link
              to="/iletisim"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 ${
                isDark
                  ? 'bg-green-500/30 border border-green-400/40 text-white hover:bg-green-500/50 backdrop-blur-sm'
                  : 'bg-neon-green text-white hover:shadow-lg hover:shadow-brand-green/30'
              }`}
            >
              <Phone size={13} /> İletişim
            </Link>
            {/* <LangSwitcher dark={isDark} /> */}
            <button
              onClick={() => setSearchOpen(o => !o)}
              aria-label="Ara"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-white/15 border border-white/25 text-white hover:bg-white/25 backdrop-blur-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-neon-pink hover:text-white'
              } ${searchOpen ? '!bg-neon-pink !text-white' : ''}`}
            >
              <Search size={16} strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(o => !o)}
              aria-label="Ara"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isDark ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-700'
              } ${searchOpen ? '!bg-neon-pink !text-white' : ''}`}
            >
              <Search size={18} strokeWidth={2.5} />
            </button>
            <button
              className={`p-2 transition-colors ${isDark ? 'text-white' : 'text-slate-800'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menü"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden absolute w-full max-h-[calc(100vh-90px)] overflow-y-auto p-4 flex flex-col gap-1 font-semibold ${
                isDark
                  ? 'bg-black/40 backdrop-blur-xl'
                  : 'bg-white border-b border-slate-100 shadow-lg'
              }`}
            >
              {navLinks.map(item =>
                item.children ? (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => setMobileKurumsal(o => !o)}
                      className={`flex items-center justify-between p-3 text-left text-sm ${
                        isDark ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-neon-pink'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={15} className={`transition-transform ${mobileKurumsal ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileKurumsal && (
                      <div className={`flex flex-col pl-4 border-l-2 ml-3 ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                        {item.children.map(c => (
                          <Link
                            key={c.path}
                            to={c.path}
                            className={`p-2 text-sm ${isDark ? 'text-white/60 hover:text-white' : 'text-slate-600 hover:text-neon-pink'}`}
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`p-3 text-sm ${isDark ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-neon-pink'}`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <Link
                to="/iletisim"
                className="mt-3 inline-flex items-center justify-center gap-2 bg-neon-green text-white px-5 py-3 rounded-full font-bold text-sm shadow-md"
              >
                <Phone size={13} /> İletişim
              </Link>

              {/* <div className="mt-3 flex justify-start">
                <LangSwitcher dark={isDark} />
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className={`flex-grow ${isHome ? '' : 'pt-[90px]'}`}>
        <Outlet />
      </main>

      {/* Global Arama Paneli — bayrakların yanındaki search butonu açar */}
      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Floating WhatsApp + Telefon — sayfa scroll edilirken sürekli erişilebilir */}
      <FloatingActions />


      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white mt-10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 h-48 md:w-96 md:h-96 bg-neon-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

            {/* Logo & açıklama */}
            <div className="lg:col-span-4">
              <img loading="lazy" decoding="async" src="/images/logo.png?v=4" alt="Matrax Oyun Grupları" className="h-20 md:h-24 w-auto object-contain mb-5" />
              <p className="text-slate-300 font-bold text-sm leading-relaxed mb-6 max-w-sm">
                Türkiye'nin dört bir yanında güvenli, sertifikalı ve uzun ömürlü oyun alanları tasarlıyor, üretiyor ve kuruyoruz. 20 yılı aşkın tecrübemizle her yaşa hitap eden çözümler sunuyoruz.
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-slate-800/80 hover:bg-gradient-to-br hover:from-brand-pink hover:to-brand-orange hover:scale-110 flex items-center justify-center transition-all shadow-md">
                  <IconInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  className="w-11 h-11 rounded-xl bg-slate-800/80 hover:bg-brand-pink hover:scale-110 flex items-center justify-center transition-all shadow-md">
                  <IconYoutube />
                </a>
                <a href="https://wa.me/908501234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  className="w-11 h-11 rounded-xl bg-slate-800/80 hover:bg-brand-green hover:scale-110 flex items-center justify-center transition-all shadow-md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.058 23.486a.5.5 0 0 0 .609.61l5.71-1.496A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.378l-.36-.214-3.733.978.998-3.645-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/></svg>
                </a>
                <a href="tel:+908501234567" aria-label="Telefon"
                  className="w-11 h-11 rounded-xl bg-slate-800/80 hover:bg-neon-blue hover:scale-110 flex items-center justify-center transition-all shadow-md">
                  <Phone size={16} />
                </a>
              </div>
            </div>

            {/* Hızlı linkler */}
            <div className="lg:col-span-2">
              <h4 className="font-black text-white text-sm uppercase tracking-widest mb-5 relative inline-block">
                Sayfalar
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-neon-pink rounded-full" />
              </h4>
              <ul className="flex flex-col gap-3 mt-4">
                {[
                  { name: 'Ana Sayfa', path: '/' },
                  { name: 'Hakkımızda', path: '/hakkimizda' },
                  { name: 'Ürünler', path: '/katalog' },
                  { name: 'Projelerimiz', path: '/projeler' },
                  { name: 'İmalat', path: '/imalat' },
                  { name: 'Galeri', path: '/galeri' },
                  { name: 'Yedek Parça', path: '/yedek-parcalar' },
                  { name: 'KVKK', path: '/kvkk' },
                  { name: 'Çerez Politikası', path: '/cerez-politikasi' },
                  { name: 'İletişim', path: '/iletisim' },
                ].map(l => (
                  <li key={l.path}>
                    <Link to={l.path} className="text-slate-300 hover:text-neon-pink font-bold text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-neon-pink transition-colors" />
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kategoriler */}
            <div className="lg:col-span-3">
              <h4 className="font-black text-white text-sm uppercase tracking-widest mb-5 relative inline-block">
                Kategoriler
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-neon-blue rounded-full" />
              </h4>
              <ul className="flex flex-col gap-3 mt-4">
                {[
                  { name: 'Trambolinler', path: '/katalog?kategori=trambolinler' },
                  { name: 'Soft Play Oyuncakları', path: '/katalog?kategori=soft-play' },
                  { name: 'Trambolin Parkları', path: '/katalog?kategori=trambolin-parklari' },
                  { name: 'Soft Play Oyun Grupları', path: '/katalog?kategori=soft-play-gruplari' },
                  { name: 'Top, Sünger & Kum Havuzları', path: '/katalog?kategori=havuzlar' },
                  { name: 'Yedek Parçalar', path: '/yedek-parcalar' },
                  { name: 'Kreş & Kafe Serisi', path: '/katalog?kategori=kres-kafe' },
                ].map(c => (
                  <li key={c.name}>
                    <Link to={c.path} className="text-slate-300 hover:text-neon-blue font-bold text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-neon-blue transition-colors" />
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* İletişim */}
            <div className="lg:col-span-3">
              <h4 className="font-black text-white text-sm uppercase tracking-widest mb-5 relative inline-block">
                İletişim
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-neon-orange rounded-full" />
              </h4>
              <ul className="flex flex-col gap-4 mt-4">
                <li>
                  <a href="tel:+908501234567" className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group">
                    <span className="w-9 h-9 rounded-lg bg-neon-pink/20 group-hover:bg-neon-pink flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone size={15} className="text-neon-pink group-hover:text-white" />
                    </span>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Telefon</p>
                      <span className="font-black text-sm">0850 123 45 67</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@matraxoyungruplari.com" className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group">
                    <span className="w-9 h-9 rounded-lg bg-neon-blue/20 group-hover:bg-neon-blue flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail size={15} className="text-neon-blue group-hover:text-white" />
                    </span>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider">E-Posta</p>
                      <span className="font-black text-sm">info@matraxoyungruplari.com</span>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="w-9 h-9 rounded-lg bg-neon-orange/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-neon-orange" />
                  </span>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider">Hizmet</p>
                    <span className="font-bold text-sm leading-relaxed">Türkiye geneli üretim & anahtar teslim kurulum</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sertifika rozetleri */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 py-6 border-y border-slate-800/60">
            {[
              { label: 'EN-1176 Sertifikalı', color: 'text-brand-green' },
              { label: 'EN-1177 Sertifikalı', color: 'text-brand-navy' },
              { label: 'TSE Onaylı', color: 'text-brand-orange' },
              { label: 'ISO 9001', color: 'text-brand-pink' },
              { label: '2 Yıl Garanti', color: 'text-brand-orange' },
            ].map(b => (
              <span key={b.label} className={`flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 ${b.color} font-black text-xs uppercase tracking-wider`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {b.label}
              </span>
            ))}
          </div>

          {/* Alt çizgi */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-slate-400 font-bold text-xs">© {new Date().getFullYear()} Matrax Oyun Grupları. Tüm hakları saklıdır.</p>
            <p className="text-slate-500 font-bold text-xs">Anahtar teslim üretim · Türkiye geneli kurulum</p>
            <p className="text-slate-600 text-xs">Created by <a href="https://muimedya.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">muimedya.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
