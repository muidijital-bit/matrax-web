import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { categories as localCategories, products as localProducts } from '../data/products';
import { spareCategories as localSpareCategories } from '../data/spareParts';
import { Package, Wrench, ArrowRight, Download, CheckCircle, AlertCircle } from 'lucide-react';

type Stats = {
  products: number;
  categories: number;
  spareParts: number;
  spareCategories: number;
};

type SeedStatus = 'idle' | 'loading' | 'success' | 'error';

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({ products: 0, categories: 0, spareParts: 0, spareCategories: 0 });
  const [loading, setLoading] = useState(true);
  const [seedStatus, setSeedStatus] = useState<SeedStatus>('idle');
  const [seedLog, setSeedLog] = useState<string[]>([]);

  const fetchStats = async () => {
    const [p, c, sp, sc] = await Promise.all([
      supabase.from('products').select('id', { count: 'exact', head: true }),
      supabase.from('categories').select('id', { count: 'exact', head: true }),
      supabase.from('spare_parts').select('id', { count: 'exact', head: true }),
      supabase.from('spare_categories').select('id', { count: 'exact', head: true }),
    ]);
    setStats({
      products: p.count ?? 0,
      categories: c.count ?? 0,
      spareParts: sp.count ?? 0,
      spareCategories: sc.count ?? 0,
    });
    setLoading(false);
  };

  useEffect(() => { fetchStats(); }, []);

  const runSeed = async () => {
    setSeedStatus('loading');
    setSeedLog([]);
    const log = (msg: string) => setSeedLog(prev => [...prev, msg]);

    try {
      // 1. Kategoriler
      log('Kategoriler aktarılıyor...');
      const catPayload = localCategories.map((c, i) => ({
        key: c.key,
        name: c.name,
        color: c.color,
        image: c.image ?? null,
        sort_order: i,
      }));
      const { error: catErr } = await supabase.from('categories').upsert(catPayload, { onConflict: 'key' });
      if (catErr) throw new Error(`Kategoriler: ${catErr.message}`);
      log(`✓ ${catPayload.length} kategori aktarıldı`);

      // 2. Ürünler
      log('Ürünler aktarılıyor...');
      const prodPayload = localProducts.map((p, i) => ({
        slug: p.slug,
        name: p.name,
        code: p.code ?? null,
        category: p.category,
        category_key: p.categoryKey,
        badge: p.badge ?? null,
        price: p.price,
        image: p.image ?? null,
        images: p.images ?? [],
        description: p.desc ?? null,
        long_desc: p.longDesc ?? null,
        features: p.features ?? [],
        specs: p.specs ?? [],
        is_active: true,
        sort_order: i,
        updated_at: new Date().toISOString(),
      }));
      const { error: prodErr } = await supabase.from('products').upsert(prodPayload, { onConflict: 'slug' });
      if (prodErr) throw new Error(`Ürünler: ${prodErr.message}`);
      log(`✓ ${prodPayload.length} ürün aktarıldı`);

      // 3. Yedek Parça Kategorileri
      log('Yedek parça kategorileri aktarılıyor...');
      const spareCatPayload = localSpareCategories.map((c, i) => ({
        key: c.key,
        title: c.title,
        short: c.short ?? null,
        cover: c.cover ?? null,
        badge: c.badge ?? null,
        accent: c.accent ?? null,
        sort_order: i,
      }));
      const { error: scErr } = await supabase.from('spare_categories').upsert(spareCatPayload, { onConflict: 'key' });
      if (scErr) throw new Error(`Yedek kategoriler: ${scErr.message}`);
      log(`✓ ${spareCatPayload.length} yedek kategori aktarıldı`);

      // 4. Yedek Parçalar
      log('Yedek parçalar aktarılıyor...');
      const sparePartsPayload = localSpareCategories.flatMap((cat, ci) =>
        cat.items.map((item, ii) => ({
          key: item.key,
          category_key: cat.key,
          title: item.title,
          description: item.desc ?? null,
          image: item.image ?? null,
          gallery: item.gallery ?? [],
          sort_order: ci * 100 + ii,
        }))
      );
      const { error: spErr } = await supabase.from('spare_parts').upsert(sparePartsPayload, { onConflict: 'key' });
      if (spErr) throw new Error(`Yedek parçalar: ${spErr.message}`);
      log(`✓ ${sparePartsPayload.length} yedek parça aktarıldı`);

      log('🎉 Tüm veriler başarıyla aktarıldı!');
      setSeedStatus('success');
      await fetchStats();
    } catch (err) {
      log(`❌ Hata: ${(err as Error).message}`);
      setSeedStatus('error');
    }
  };

  const cards = [
    { label: 'Ürünler', value: stats.products, icon: Package, color: 'bg-indigo-500', path: '/admin/urunler' },
    { label: 'Yedek Parçalar', value: stats.spareParts, icon: Wrench, color: 'bg-amber-500', path: '/admin/yedek-parcalar' },
  ];

  const isEmpty = !loading && stats.products === 0 && stats.categories === 0 && stats.spareParts === 0 && stats.spareCategories === 0;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1 font-medium">Matrax yönetim paneline hoş geldiniz.</p>
      </div>

      {/* İçe aktarma uyarısı */}
      {isEmpty && seedStatus === 'idle' && (
        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-amber-900">Veritabanı boş</p>
              <p className="text-amber-700 text-sm mt-0.5 font-medium">
                Mevcut ürün ve kategori verilerini Supabase'e aktarmak için aşağıdaki butonu kullanın.
              </p>
              <button
                onClick={runSeed}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-bold transition-colors"
              >
                <Download size={15} />
                Mevcut Veriyi Supabase'e Aktar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seed çalışıyor / bitti */}
      {seedStatus !== 'idle' && (
        <div className={`mb-6 rounded-2xl p-5 border ${
          seedStatus === 'success' ? 'bg-emerald-50 border-emerald-200' :
          seedStatus === 'error' ? 'bg-red-50 border-red-200' :
          'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2 mb-3">
            {seedStatus === 'loading' && <div className="w-4 h-4 border-2 border-slate-400 border-t-indigo-600 rounded-full animate-spin" />}
            {seedStatus === 'success' && <CheckCircle size={18} className="text-emerald-600" />}
            {seedStatus === 'error' && <AlertCircle size={18} className="text-red-600" />}
            <span className="font-bold text-sm text-slate-800">
              {seedStatus === 'loading' ? 'Aktarılıyor...' : seedStatus === 'success' ? 'Aktarım tamamlandı' : 'Aktarım hatası'}
            </span>
          </div>
          <div className="space-y-1">
            {seedLog.map((line, i) => (
              <p key={i} className="text-sm text-slate-600 font-medium">{line}</p>
            ))}
          </div>
          {seedStatus !== 'loading' && (
            <button onClick={() => { setSeedStatus('idle'); setSeedLog([]); }} className="mt-3 text-xs text-slate-500 hover:text-slate-700 font-semibold underline">
              Kapat
            </button>
          )}
        </div>
      )}

      {/* Stats */}
      {loading ? (
        <div className="grid grid-cols-2 gap-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 h-28 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {cards.map(card => {
            const Icon = card.icon;
            return (
              <Link
                key={card.path}
                to={card.path}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group"
              >
                <div className={`w-10 h-10 ${card.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-3xl font-black text-slate-900">{card.value}</p>
                <p className="text-slate-500 text-sm font-semibold mt-0.5 flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                  {card.label}
                  <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </Link>
            );
          })}
        </div>
      )}

      {/* Hızlı İşlemler */}
      <div className="mt-8 bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <h2 className="font-black text-slate-900 mb-4">Hızlı İşlemler</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/admin/urunler" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-semibold hover:bg-indigo-100 transition-colors">
            <Package size={15} /> Ürünleri Yönet
          </Link>
          <Link to="/admin/yedek-parcalar" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-sm font-semibold hover:bg-amber-100 transition-colors">
            <Wrench size={15} /> Yedek Parçalar
          </Link>
          <Link to="/admin/ayarlar" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors">
            Favicon & SEO Ayarları
          </Link>
          {!isEmpty && (
            <button
              onClick={runSeed}
              disabled={seedStatus === 'loading'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors disabled:opacity-50"
            >
              <Download size={15} /> Veriyi Yeniden Aktar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
