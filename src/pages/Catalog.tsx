import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronRight, Filter } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { categoryBadge, type Product } from '../data/products';
import { useProducts, useCategories } from '../lib/useSupabaseData';
import { usePageMeta } from '../lib/usePageMeta';

// Catalog bileşeni içinde hook ile yüklenir; bu satır kaldırıldı

// Alt-kategori tanımları — her ana kategori için, MATRAX OYUN GRUPLARI klasör yapısına göre
type Sub = { key: string; label: string; match: (slug: string) => boolean };

const SUBCATS: Record<string, Sub[]> = {
  trambolinler: [
    { key: 'tekli',    label: 'Tekli Trambolinler',           match: s => s.startsWith('tekli-') },
    { key: 'olimpik',  label: 'Ticari Olimpik Trambolinler',  match: s => s.includes('ticari-olimpik') },
    { key: 'junior',   label: 'Ticari Junior Trambolinler',   match: s => s.includes('ticari-junior') },
    { key: 'zemin',    label: 'Zemin Trambolinler',           match: s => s.includes('zemin') },
    { key: 'fitness',  label: 'Fitness Trambolin',            match: s => s.includes('fitness') },
    { key: 'salto',    label: 'Salto Trambolin',              match: s => s.includes('salto') },
    { key: 'portatif', label: 'Portatif (Katlanır) Trambolin', match: s => s.includes('portatif') },
  ],
  'soft-play': [
    { key: 'roller',       label: 'Roller Kaydırak',                    match: s => s.includes('roller-kaydirak') },
    { key: 'donengec',     label: 'Dönengeç (Karusel)',                match: s => s.includes('donengec') },
    { key: 'palmiye',      label: 'Palmiye',                            match: s => s.includes('palmiye') },
    { key: 'tirmanma',     label: 'Tırmanma Duvarı',                    match: s => s === 'tirmanma-duvari-soft-play' },
    { key: 'zipline',      label: 'Zipline',                            match: s => s.includes('zipline') },
    { key: 'sunger-havuz', label: 'Sünger Havuzu & Tırmanma Duvarı',    match: s => s.startsWith('sunger-havuzu') },
    { key: 'hava-lab',     label: 'Hava Labirenti',                    match: s => s.includes('hava-labirenti') },
    { key: 'top-havuzu',   label: 'Top Havuzu',                         match: s => s.includes('top-havuzu') },
    { key: 'sunger-grup',  label: 'Sünger Oyun Grupları & Modülleri',   match: s => s.startsWith('sunger-') && !s.startsWith('sunger-havuzu') },
  ],
  'trambolin-parklari': [
    { key: 'premium',  label: 'Premium & Mega Parklar', match: s => /\b(mx-mega|map|dis-9900|sza-8500|uceg-9500|adv-58)\b/.test(s) },
    { key: 'klasik',   label: 'Klasik & Modüler Parklar', match: () => true /* her şey eşleşir, sıralı çalışıyor */ },
  ],
  'soft-play-gruplari': [
    { key: 'premium', label: 'Premium / Geniş Alan Parkurları', match: s => s.includes('premium') || s.includes('mega') || s.includes('genis') },
    { key: 'standart', label: 'Standart Soft Play Oyun Grupları', match: () => true },
  ],
  havuzlar: [
    { key: 'top',     label: 'Top Havuzları',     match: s => s.includes('top-havuzu') },
    { key: 'sunger',  label: 'Sünger Havuzları',  match: s => s.startsWith('sunger-havuzu') },
    { key: 'kum',     label: 'Kum Havuzları',     match: s => s.includes('kum-havuzu') },
  ],
  'sisme-parklar': [
    { key: 'klasik',  label: 'Klasik & Tematik Şişme Parklar', match: s => s.includes('klasik') || s.includes('tematik') },
    { key: 'genis',   label: 'Geniş Alan & Yüksek Şişme Parklar', match: () => true },
  ],
};

// Bir ürünün alt kategori keyini bul — match sırasına göre ilk eşleşen
const subKeyFor = (p: Product): string | null => {
  const subs = SUBCATS[p.categoryKey];
  if (!subs) return null;
  for (const s of subs) if (s.match(p.slug)) return s.key;
  return null;
};

// Trambolinde kapasite, soft-play'de id, diğerlerinde id ile sırala
const capacityFor = (p: Product): number => {
  const m = p.slug.match(/(\d+)-kisilik/);
  if (m) return Number(m[1]);
  return 1;
};

// Tüm ürünler için akıllı sıralama — sort_order zaten DB'den geliyor; bu fonksiyon ek sıralama için
const smartSort = (a: Product, b: Product) => {
  const catOrder = ['trambolinler','soft-play','trambolin-parklari','soft-play-gruplari','havuzlar','sisme-parklar','kres-kafe'];
  const ca = catOrder.indexOf(a.categoryKey);
  const cb = catOrder.indexOf(b.categoryKey);
  if (ca !== cb) return (ca === -1 ? 99 : ca) - (cb === -1 ? 99 : cb);

  const subs = SUBCATS[a.categoryKey];
  if (subs) {
    const sa = subKeyFor(a) ?? 'zzz';
    const sb = subKeyFor(b) ?? 'zzz';
    const oa = subs.findIndex(s => s.key === sa);
    const ob = subs.findIndex(s => s.key === sb);
    if (oa !== ob) return (oa === -1 ? 99 : oa) - (ob === -1 ? 99 : ob);
  }

  const capA = capacityFor(a);
  const capB = capacityFor(b);
  if (capA !== capB) return capA - capB;

  return a.id - b.id;
};

const Catalog = () => {
  usePageMeta(
    'Ürünler | Matrax Oyun Grupları',
    'Trambolinler, soft play oyuncakları, trambolin parkları, top havuzları ve şişme parklar. EN-1176 sertifikalı tüm ürünlerimizi inceleyin.',
    'trambolin kataloğu, soft play katalog, oyun grubu fiyat, trambolin parkı satın al'
  );
  const { products: mockProducts } = useProducts();
  const { categories: catList } = useCategories();
  const categories = catList.map(c => ({ label: c.name, value: c.key }));
  const firstCat = categories[0]?.value ?? 'trambolinler';
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get('kategori') || firstCat;
  const initialSub = searchParams.get('alt') || 'all';
  const queryParam = searchParams.get('q') || '';
  const [activeTab, setActiveTab] = useState(initial);
  const [activeSub, setActiveSub] = useState(initialSub);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobilePending, setMobilePending] = useState<string>('');

  useEffect(() => {
    const katParam = searchParams.get('kategori');
    const next = katParam || firstCat;
    if (next !== activeTab) setActiveTab(next);
    const nextSub = searchParams.get('alt') || 'all';
    if (nextSub !== activeSub) setActiveSub(nextSub);
  // firstCat kasıtlı olarak bağımlılık dışında — Supabase yüklenince activeTab'ı bozmasın
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const setCategory = (key: string) => {
    setActiveTab(key);
    setActiveSub('all');
    const params: Record<string, string> = {};
    if (key !== 'tumu') params.kategori = key;
    if (queryParam) params.q = queryParam;
    setSearchParams(params);
  };

  const setSub = (key: string) => {
    setActiveSub(key);
    const params: Record<string, string> = { kategori: activeTab };
    if (key !== 'all') params.alt = key;
    if (queryParam) params.q = queryParam;
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearSearch = () => {
    const params: Record<string, string> = { kategori: activeTab };
    if (activeSub !== 'all') params.alt = activeSub;
    setSearchParams(params);
  };

  const isAll = false;
  const byCategory = mockProducts.filter(p => p.categoryKey === activeTab);

  const subs = SUBCATS[activeTab] ?? [];
  const showSubs = !isAll && subs.length > 0;
  const bySub = showSubs && activeSub !== 'all'
    ? byCategory.filter(p => subKeyFor(p) === activeSub)
    : byCategory;

  const q = queryParam.trim().toLocaleLowerCase('tr');
  const filteredRaw = q
    ? bySub.filter(p =>
        p.name.toLocaleLowerCase('tr').includes(q) ||
        (p.code || '').toLocaleLowerCase('tr').includes(q) ||
        (p.desc || '').toLocaleLowerCase('tr').includes(q)
      )
    : bySub;

  const filtered = [...filteredRaw].sort(smartSort);

  const showGroupedSingle = showSubs && activeSub === 'all' && !q;
  const showAllGrouped = false;

  // Bir kategorideki ürünleri grupla — tek ürünlü alt kategorileri "Diğer" altında topla
  const buildGroups = (catKey: string, items: Product[]) => {
    const cs = SUBCATS[catKey];
    if (!cs || cs.length === 0) return [{ key: catKey, label: '', items }];

    const all = cs
      .map(sub => ({ key: sub.key, label: sub.label, items: items.filter(p => subKeyFor(p) === sub.key) }))
      .filter(g => g.items.length > 0);
    const multi = all.filter(g => g.items.length >= 2);
    const singles = all.filter(g => g.items.length === 1).flatMap(g => g.items);
    // Alt kategoriye giremeyen ürünler (slug eşleşmeyenler)
    const unmatched = items.filter(p => subKeyFor(p) === null);

    const extraItems = [...singles, ...unmatched].sort(smartSort);
    const result: { key: string; label: string; items: Product[] }[] = [];
    // Eşleşmeyenler en üste
    if (extraItems.length > 0) {
      result.push({ key: '__other__', label: multi.length === 0 ? '' : 'Diğer Modeller', items: extraItems });
    }
    result.push(...multi);
    return result;
  };

  // Tek kategori için gruplar (trambolinler, soft-play vs.)
  const groupedSingle = showGroupedSingle ? buildGroups(activeTab, filtered) : [];

  // "Tüm Ürünler" için: ana kategori → alt kategori → ürünler
  const allGrouped = showAllGrouped
    ? catList
        .map(cat => {
          const items = filtered.filter(p => p.categoryKey === cat.key);
          if (items.length === 0) return null;
          return { cat, groups: buildGroups(cat.key, items) };
        })
        .filter(Boolean) as { cat: typeof catList[number]; groups: { key: string; label: string; items: Product[] }[] }[]
    : [];

  const SidebarContent = () => (
    <>
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-2">Kategoriler</p>

{categories.map(cat => {
        const isActive = activeTab === cat.value;
        const count = mockProducts.filter(p => p.categoryKey === cat.value).length;
        const catSubs = SUBCATS[cat.value] ?? [];
        const hasSubs = catSubs.length > 0;

        // Masaüstü: aktif kategori açık | Mobil: pending kategori açık
        const subsVisible = sidebarOpen
          ? mobilePending === cat.value
          : isActive && hasSubs;

        // Ürün sayısı: mobilde pending'e göre, masaüstünde activeTab'a göre
        const pendingProducts = mockProducts.filter(p => p.categoryKey === cat.value);

        return (
          <div key={cat.value}>
            <button
              onClick={() => {
                if (sidebarOpen && hasSubs) {
                  // Mobil: alt kategorileri göster, henüz filtrele
                  setMobilePending(cat.value);
                } else {
                  // Masaüstü veya alt kategorisiz: direkt seç
                  setCategory(cat.value);
                  setSidebarOpen(false);
                }
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-black text-sm transition-all text-left ${
                isActive || (sidebarOpen && mobilePending === cat.value)
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-slate-900'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-black ${
                isActive || (sidebarOpen && mobilePending === cat.value)
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-400'
              }`}>{count}</span>
            </button>

            {/* Alt kategoriler */}
            {subsVisible && (
              <div className="ml-3 mt-1 mb-2 pl-3 border-l-2 border-slate-200 flex flex-col gap-0.5">
                {catSubs.map(sub => {
                  const subCount = pendingProducts.filter(p => subKeyFor(p) === sub.key).length;
                  if (subCount === 0) return null;
                  const isActiveSub = !sidebarOpen && activeSub === sub.key;
                  return (
                    <button
                      key={sub.key}
                      onClick={() => {
                        if (sidebarOpen) {
                          // Mobil: ikisini tek seferde set et (stale activeTab sorununu önler)
                          const catKey = mobilePending || cat.value;
                          setActiveTab(catKey);
                          setActiveSub(sub.key);
                          const params: Record<string, string> = { kategori: catKey, alt: sub.key };
                          if (queryParam) params.q = queryParam;
                          setSearchParams(params);
                          setSidebarOpen(false);
                          setMobilePending('');
                        } else {
                          setSub(sub.key);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                        isActiveSub
                          ? 'bg-neon-pink text-white shadow-sm'
                          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <span className="truncate">{sub.label}</span>
                      <span className={`flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full ml-1 ${
                        isActiveSub ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>{subCount}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            {queryParam ? (
              <>"<span className="text-neon-pink">{queryParam}</span>" için sonuçlar</>
            ) : (
              <span className="text-neon-pink">Ürünler</span>
            )}
          </h1>
          {queryParam && (
            <button
              onClick={clearSearch}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-black text-slate-500 hover:text-neon-pink transition-colors"
            >
              <X size={12} /> Aramayı temizle
            </button>
          )}
        </div>
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden flex items-center gap-2 bg-brand-green text-white font-black text-sm px-4 py-2.5 rounded-full shadow-sm flex-shrink-0"
        >
          <Filter size={16} /> Filtrele
        </button>
      </div>

      <div className="flex gap-8 items-start">

        <aside className="hidden md:flex flex-col gap-1 w-56 flex-shrink-0 sticky top-[106px]">
          <SidebarContent />
        </aside>

        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                onClick={() => { setSidebarOpen(false); setMobilePending(''); }}
              />
              <motion.div
                initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed left-0 top-0 bottom-0 w-[85vw] max-w-xs bg-white z-50 p-6 shadow-2xl md:hidden flex flex-col gap-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Kategoriler</p>
                  <button onClick={() => { setSidebarOpen(false); setMobilePending(''); }} className="p-1 text-slate-400 hover:text-slate-700">
                    <X size={20} />
                  </button>
                </div>
                <SidebarContent />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="flex-1 min-w-0">

          <nav className="flex items-center gap-1 text-[11px] text-slate-400 mb-3 flex-wrap">
            <Link to="/" className="hover:text-neon-pink transition-colors">Ana Sayfa</Link>
            <ChevronRight size={11} className="flex-shrink-0" />
            {activeTab && activeTab !== 'tumu' && catList.find(c => c.key === activeTab) ? (
              <>
                <Link to="/katalog" className="hover:text-neon-pink transition-colors">Ürünler</Link>
                <ChevronRight size={11} className="flex-shrink-0" />
                {activeSub !== 'all' && subs.find(s => s.key === activeSub) ? (
                  <>
                    <Link to={`/katalog?kategori=${activeTab}`} className="hover:text-neon-pink transition-colors">
                      {catList.find(c => c.key === activeTab)!.name}
                    </Link>
                    <ChevronRight size={11} className="flex-shrink-0" />
                    <span className="text-slate-900 font-bold">{subs.find(s => s.key === activeSub)!.label}</span>
                  </>
                ) : (
                  <span className="text-slate-900 font-bold">{catList.find(c => c.key === activeTab)!.name}</span>
                )}
              </>
            ) : (
              <span className="text-slate-900 font-bold">Ürünler</span>
            )}
          </nav>

          <p className="text-xs font-black text-slate-400 mb-5">
            {activeSub !== 'all' && subs.find(s => s.key === activeSub)
              ? `${subs.find(s => s.key === activeSub)!.label} — `
              : ''}
            {filtered.length} ürün listeleniyor
          </p>

          {filtered.length === 0 && (
            <div className="bg-white rounded-[2rem] border-2 border-dashed border-slate-200 p-10 text-center">
              <p className="text-lg font-bold text-slate-700 mb-2">Sonuç bulunamadı</p>
              <p className="text-sm font-bold text-slate-400 mb-5">
                {queryParam ? `"${queryParam}" araması için ürün bulunamadı.` : 'Bu kategoride ürün yok.'}
              </p>
              {queryParam && (
                <button
                  onClick={clearSearch}
                  className="inline-flex items-center gap-2 bg-slate-900 text-white font-black text-sm px-5 py-2.5 rounded-full hover:bg-slate-700 transition-colors"
                >
                  <X size={14} /> Aramayı temizle
                </button>
              )}
            </div>
          )}

          {/* Tek kategori — alt kategori başlıklı gruplu görünüm */}
          {showGroupedSingle && groupedSingle.length > 0 && (
            <div className="flex flex-col gap-12">
              {groupedSingle.map(group => (
                <section key={group.key} id={group.key} className="scroll-mt-28">
                  {group.label && (
                    <div className="flex items-end justify-between gap-3 mb-5 pb-3 border-b-2 border-slate-100">
                      <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight min-w-0">
                        {group.label}
                      </h2>
                      <span className="flex-shrink-0 text-xs font-black bg-neon-pink/10 text-neon-pink px-3 py-1 rounded-full">
                        {group.items.length} ürün
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {group.items.map((product, i) => (
                      <ProductCard key={product.id} product={product} delay={i * 0.04} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Tüm Ürünler — ana kategori başlıkları + alt grup başlıkları */}
          {showAllGrouped && allGrouped.length > 0 && (
            <div className="flex flex-col gap-14">
              {allGrouped.map(({ cat, groups }) => (
                <section key={cat.key} className="scroll-mt-28">
                  <div className="flex items-end justify-between gap-3 mb-6 pb-4 border-b-4 border-slate-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight min-w-0">
                      {cat.name}
                    </h2>
                    <span className={`flex-shrink-0 text-xs font-black px-3 py-1 rounded-full ${categoryBadge[cat.key] ?? 'bg-slate-100 text-slate-700'}`}>
                      {groups.reduce((a, g) => a + g.items.length, 0)} ürün
                    </span>
                  </div>

                  <div className="flex flex-col gap-8">
                    {groups.map(group => (
                      <div key={group.key}>
                        {/* Alt grup başlığı sadece etiket varsa */}
                        {group.label && (
                          <h3 className="text-sm md:text-base font-black text-slate-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                            <span className="w-6 h-0.5 bg-neon-pink rounded-full" />
                            {group.label}
                            <span className="text-[10px] font-black text-slate-400 normal-case">
                              ({group.items.length})
                            </span>
                          </h3>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                          {group.items.map((product, i) => (
                            <ProductCard key={product.id} product={product} delay={(i % 3) * 0.04} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Düz grid — alt sekme seçili veya arama varsa */}
          {!showGroupedSingle && !showAllGrouped && filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} delay={i * 0.04} animatePresence />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({
  product, delay, animatePresence = false,
}: {
  product: Product; delay: number; animatePresence?: boolean;
}) => {
  const card = (
    <Link
      to={`/katalog/${product.slug}`}
      className="block bg-white rounded-[2rem] border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all group cursor-pointer overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <img loading="lazy" decoding="async"
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className={`absolute top-3 left-3 text-[10px] font-black px-3 py-1 rounded-full ${categoryBadge[product.categoryKey] ?? product.badge}`}>
          {product.category}
        </span>
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md">
          <ArrowUpRight size={14} className="text-slate-700" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-slate-800 leading-snug line-clamp-2">
          {product.name}
        </h3>
      </div>
    </Link>
  );

  if (animatePresence) {
    return (
      <motion.div
        key={product.id}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ delay, type: 'spring', stiffness: 200, damping: 20 }}
      >
        {card}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 22 }}
    >
      {card}
    </motion.div>
  );
};

export default Catalog;
