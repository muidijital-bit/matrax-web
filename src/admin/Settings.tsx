import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import type { SiteSetting } from '../lib/types';
import { Upload, Save, RefreshCw, X, Globe, Image, Building2, BarChart3, CheckCircle } from 'lucide-react';

// ─── Tüm ayar anahtarları ─────────────────────────────────────────────────────

const ALL_KEYS = [
  // Temel SEO
  'site_title', 'meta_description', 'keywords', 'site_url', 'robots',
  // Görsel
  'favicon_url', 'logo_url', 'og_image',
  // Open Graph & Twitter
  'og_title', 'og_description', 'twitter_card',
  // İşletme
  'business_name', 'business_phone', 'business_whatsapp', 'business_email',
  'business_address', 'business_city', 'business_founding_year',
  'instagram_url', 'youtube_url',
  // Analitik
  'ga_id', 'gtm_id', 'gsc_verification', 'facebook_pixel_id',
];

type SettingsMap = Record<string, string>;
type Tab = 'seo' | 'gorseller' | 'isletme' | 'analitik';

// ─── FileUpload ───────────────────────────────────────────────────────────────

const FileUpload = ({ value, onChange, accept = 'image/*', label, folder = 'site-assets' }: {
  value: string; onChange: (url: string) => void; accept?: string; label: string; folder?: string;
}) => {
  const [uploading, setUploading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    const path = `${folder}/${Date.now()}.${file.name.split('.').pop()}`;
    const { error } = await supabase.storage.from('site-assets').upload(path, file, { upsert: true });
    if (!error) onChange(supabase.storage.from('site-assets').getPublicUrl(path).data.publicUrl);
    setUploading(false);
    if (ref.current) ref.current.value = '';
  };

  return (
    <div className="space-y-2">
      {value && (
        <div className="relative inline-block group">
          <img src={value} alt="" className="h-14 w-auto object-contain rounded-xl border border-slate-200 bg-slate-50 p-1"
            onError={e => (e.currentTarget.style.display = 'none')} />
          <button type="button" onClick={() => onChange('')}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full hidden group-hover:flex items-center justify-center">
            <X size={10} />
          </button>
        </div>
      )}
      <label className={`cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${uploading ? 'bg-slate-100 text-slate-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
        <Upload size={14} />{uploading ? 'Yükleniyor...' : label}
        <input ref={ref} type="file" accept={accept} onChange={upload} className="hidden" disabled={uploading} />
      </label>
    </div>
  );
};

// ─── Karakter sayacı girdi ────────────────────────────────────────────────────

const CountedInput = ({ value, onChange, max, rows, placeholder }: {
  value: string; onChange: (v: string) => void; max: number; rows?: number; placeholder?: string;
}) => {
  const len = value.length;
  const color = len > max ? 'text-red-500' : len > max * 0.85 ? 'text-amber-500' : 'text-slate-400';
  return (
    <div>
      {rows ? (
        <textarea className="input resize-none" rows={rows} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
      ) : (
        <input className="input" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
      )}
      <div className={`text-right text-xs font-semibold mt-1 ${color}`}>{len}/{max}</div>
    </div>
  );
};

// ─── Bölüm başlığı ───────────────────────────────────────────────────────────

const Section = ({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
    <div className="mb-4">
      <h3 className="font-black text-slate-900">{title}</h3>
      {desc && <p className="text-slate-500 text-xs font-medium mt-0.5">{desc}</p>}
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

// ─── Ana bileşen ──────────────────────────────────────────────────────────────

const Settings = () => {
  const [settings, setSettings] = useState<SettingsMap>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState<string|null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('seo');

  const set = (key: string, val: string) => setSettings(s => ({ ...s, [key]: val }));
  const get = (key: string) => settings[key] ?? '';

  const fetchSettings = async () => {
    setLoading(true);
    const { data } = await supabase.from('site_settings').select('*');
    if (data) {
      const map: SettingsMap = {};
      (data as SiteSetting[]).forEach(s => { map[s.key] = s.value ?? ''; });
      ALL_KEYS.forEach(k => { if (!(k in map)) map[k] = ''; });
      setSettings(map);
    }
    setLoading(false);
  };

  useEffect(() => { fetchSettings(); }, []);

  const save = async () => {
    setSaving(true);
    setSaveError(null);
    const now = new Date().toISOString();
    const { error } = await supabase.from('site_settings').upsert(
      ALL_KEYS.map(key => ({ key, value: settings[key] || null, updated_at: now })),
      { onConflict: 'key' }
    );
    if (error) { setSaveError(error.message); setSaving(false); return; }
    // Favicon'u anında uygula
    const fav = get('favicon_url');
    if (fav) {
      let link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
      if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
      link.href = fav;
    }
    if (get('site_title')) document.title = get('site_title');
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'seo',      label: 'Temel SEO',     icon: <Globe size={15} /> },
    { key: 'gorseller', label: 'Görsel Kimlik', icon: <Image size={15} /> },
    { key: 'isletme',  label: 'İşletme',       icon: <Building2 size={15} /> },
    { key: 'analitik', label: 'Analitik',       icon: <BarChart3 size={15} /> },
  ];

  if (loading) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-slate-200 border-t-brand-pink rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="max-w-2xl">
      {/* Başlık */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Site Ayarları & SEO</h1>
          <p className="text-slate-500 text-sm font-medium mt-0.5">Tüm meta etiketler, görsel kimlik ve analitik</p>
        </div>
        <button onClick={fetchSettings} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors" title="Yenile">
          <RefreshCw size={16} />
        </button>
      </div>

      {/* Sekmeler */}
      <div className="flex gap-1 p-1 bg-white rounded-2xl border border-slate-100 shadow-sm mb-5 flex-wrap">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setActiveTab(t.key)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-bold transition-all flex-1 justify-center ${activeTab === t.key ? 'text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            style={activeTab === t.key ? { background: '#2c3876' } : undefined}>
            {t.icon}{t.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">

        {/* ── TEMEL SEO ── */}
        {activeTab === 'seo' && (
          <>
            <Section title="Sayfa Başlığı & Açıklama" desc="Google arama sonuçlarında görünen en kritik alanlar.">
              <div>
                <label className="label">Site Başlığı (title)</label>
                <CountedInput value={get('site_title')} onChange={v => set('site_title', v)} max={60}
                  placeholder="Matrax Oyun Grupları — Trambolin Parkları & Soft Play Üreticisi" />
                <p className="text-xs text-slate-400 mt-1">Önerilen: 50–60 karakter</p>
              </div>
              <div>
                <label className="label">Meta Açıklaması</label>
                <CountedInput value={get('meta_description')} onChange={v => set('meta_description', v)} max={160} rows={3}
                  placeholder="EN-1176 sertifikalı trambolin parkı, soft play ve top havuzu üretimi..." />
                <p className="text-xs text-slate-400 mt-1">Önerilen: 120–160 karakter</p>
              </div>
              <div>
                <label className="label">Anahtar Kelimeler</label>
                <input className="input" value={get('keywords')} onChange={e => set('keywords', e.target.value)}
                  placeholder="trambolin parkı, soft play, top havuzu, oyun grubu..." />
                <p className="text-xs text-slate-400 mt-1">Virgülle ayırın. Google arama sıralamasında doğrudan etkisi azdır ama yardımcıdır.</p>
              </div>
            </Section>

            <Section title="Canonical URL & Robots" desc="Çift içerik sorununu önler, tarayıcı yönlendirmesi.">
              <div>
                <label className="label">Site URL (Canonical)</label>
                <input className="input" value={get('site_url')} onChange={e => set('site_url', e.target.value)}
                  placeholder="https://matraxoyungruplari.com" />
                <p className="text-xs text-slate-400 mt-1">Başında https://, sonunda / olmadan.</p>
              </div>
              <div>
                <label className="label">Robots</label>
                <div className="flex gap-3">
                  {['index, follow', 'noindex, nofollow', 'index, nofollow'].map(r => (
                    <label key={r} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="robots" value={r} checked={get('robots') === r} onChange={() => set('robots', r)} />
                      <span className="text-sm font-semibold text-slate-700">{r}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-1">"index, follow" seçilmeli — arama motorlarına sitenin indekslenmesine izin verir.</p>
              </div>
            </Section>

          </>
        )}

        {/* ── GÖRSEL KİMLİK ── */}
        {activeTab === 'gorseller' && (
          <>
            <Section title="Favicon" desc="Tarayıcı sekmesinde görünen ikon. .ico, .png veya .svg yükleyin.">
              <FileUpload value={get('favicon_url')} onChange={v => set('favicon_url', v)} accept=".ico,.png,.svg,image/*" label="Favicon Yükle" />
              <div>
                <label className="label text-xs">veya doğrudan URL</label>
                <input className="input text-sm" value={get('favicon_url')} onChange={e => set('favicon_url', e.target.value)} placeholder="https://..." />
              </div>
              {get('favicon_url') && (
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-2 rounded-xl">
                  <CheckCircle size={14} /> Mevcut favicon ayarlı
                </div>
              )}
            </Section>

            <Section title="Site Logosu" desc="Header ve footer'daki logo. PNG veya SVG, şeffaf arka plan önerilir.">
              <FileUpload value={get('logo_url')} onChange={v => set('logo_url', v)} label="Logo Yükle" />
              <div>
                <label className="label text-xs">veya doğrudan URL</label>
                <input className="input text-sm" value={get('logo_url')} onChange={e => set('logo_url', e.target.value)} placeholder="https://..." />
              </div>
              {get('logo_url') && (
                <img src={get('logo_url')} alt="" className="h-16 w-auto object-contain mt-1 border border-slate-100 rounded-xl p-2 bg-slate-50"
                  onError={e => (e.currentTarget.style.display = 'none')} />
              )}
            </Section>

            <Section title="OG / Sosyal Medya Görseli" desc="WhatsApp, Facebook, Twitter paylaşımlarında çıkan görsel. 1200×630 px PNG/JPG önerilir.">
              <FileUpload value={get('og_image')} onChange={v => set('og_image', v)} label="OG Görseli Yükle" />
              <div>
                <label className="label text-xs">veya doğrudan URL</label>
                <input className="input text-sm" value={get('og_image')} onChange={e => set('og_image', e.target.value)} placeholder="https://..." />
              </div>
              {get('og_image') && (
                <img src={get('og_image')} alt="" className="w-full max-w-sm h-28 object-cover rounded-xl border border-slate-200 mt-1"
                  onError={e => (e.currentTarget.style.display = 'none')} />
              )}
            </Section>
          </>
        )}

        {/* ── İŞLETME ── */}
        {activeTab === 'isletme' && (
          <>
            <Section title="İşletme Bilgileri" desc="Schema.org JSON-LD ve site genelinde kullanılan iletişim verileri.">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="label">İşletme Adı</label>
                  <input className="input" value={get('business_name')} onChange={e => set('business_name', e.target.value)} placeholder="Matrax Oyun Grupları" />
                </div>
                <div>
                  <label className="label">Telefon</label>
                  <input className="input" value={get('business_phone')} onChange={e => set('business_phone', e.target.value)} placeholder="+90 850 123 45 67" />
                </div>
                <div>
                  <label className="label">WhatsApp Numarası</label>
                  <input className="input" value={get('business_whatsapp')} onChange={e => set('business_whatsapp', e.target.value)} placeholder="908501234567" />
                  <p className="text-xs text-slate-400 mt-1">Başında + olmadan, ülke koduyla.</p>
                </div>
                <div>
                  <label className="label">E-posta</label>
                  <input className="input" type="email" value={get('business_email')} onChange={e => set('business_email', e.target.value)} placeholder="info@matraxoyungruplari.com" />
                </div>
                <div>
                  <label className="label">Kuruluş Yılı</label>
                  <input className="input" value={get('business_founding_year')} onChange={e => set('business_founding_year', e.target.value)} placeholder="2005" />
                </div>
                <div className="col-span-2">
                  <label className="label">Adres</label>
                  <input className="input" value={get('business_address')} onChange={e => set('business_address', e.target.value)} placeholder="Fabrika / Ofis adresi" />
                </div>
                <div>
                  <label className="label">Şehir</label>
                  <input className="input" value={get('business_city')} onChange={e => set('business_city', e.target.value)} placeholder="İstanbul" />
                </div>
              </div>
            </Section>

            <Section title="Sosyal Medya Linkleri" desc="Schema.org sameAs alanı ve footer sosyal medya butonları için.">
              <div>
                <label className="label">Instagram URL</label>
                <input className="input" value={get('instagram_url')} onChange={e => set('instagram_url', e.target.value)} placeholder="https://instagram.com/matrax" />
              </div>
              <div>
                <label className="label">YouTube URL</label>
                <input className="input" value={get('youtube_url')} onChange={e => set('youtube_url', e.target.value)} placeholder="https://youtube.com/@matrax" />
              </div>
            </Section>
          </>
        )}

        {/* ── ANALİTİK ── */}
        {activeTab === 'analitik' && (
          <>
            <Section title="Google Analytics 4" desc="Ziyaretçi takibi. GA4 mülkünüzden alınan ölçüm ID'si.">
              <div>
                <label className="label">GA4 Ölçüm ID</label>
                <input className="input font-mono" value={get('ga_id')} onChange={e => set('ga_id', e.target.value)} placeholder="G-XXXXXXXXXX" />
                <p className="text-xs text-slate-400 mt-1">Google Analytics → Yönetici → Veri Akışları → Ölçüm ID</p>
              </div>
              {get('ga_id') && (
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-2 rounded-xl">
                  <CheckCircle size={14} /> GA4 aktif — kaydettiğinizde uygulanır
                </div>
              )}
            </Section>

            <Section title="Google Tag Manager" desc="Tüm etiketleri tek yerden yönetmek için. GA4 yerine GTM kullanıyorsanız doldurun.">
              <div>
                <label className="label">GTM Container ID</label>
                <input className="input font-mono" value={get('gtm_id')} onChange={e => set('gtm_id', e.target.value)} placeholder="GTM-XXXXXXX" />
                <p className="text-xs text-slate-400 mt-1">GTM kullanıyorsanız GA4 ID'yi boş bırakın, çakışmayı önler.</p>
              </div>
            </Section>

            <Section title="Google Search Console" desc="Site doğrulaması için HTML meta etiketi doğrulama kodu.">
              <div>
                <label className="label">Doğrulama Kodu</label>
                <input className="input font-mono text-sm" value={get('gsc_verification')} onChange={e => set('gsc_verification', e.target.value)}
                  placeholder="verification_token_buraya" />
                <p className="text-xs text-slate-400 mt-1">
                  Search Console → Mülk ekle → "HTML etiketi" yöntemi → content="" değeri içindeki kod.
                </p>
              </div>
            </Section>

            <Section title="Facebook Pixel" desc="Meta (Facebook/Instagram) reklam takibi.">
              <div>
                <label className="label">Pixel ID</label>
                <input className="input font-mono" value={get('facebook_pixel_id')} onChange={e => set('facebook_pixel_id', e.target.value)} placeholder="1234567890123456" />
              </div>
            </Section>
          </>
        )}

        {/* Kaydet */}
        {saveError && <p className="text-red-600 text-xs font-semibold bg-red-50 px-4 py-3 rounded-xl border border-red-100">{saveError}</p>}
        <button onClick={save} disabled={saving}
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg ${saved ? 'bg-emerald-500 text-white' : 'text-white'} disabled:opacity-60`}
          style={!saved ? { background: '#f83567' } : undefined}>
          {saving
            ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            : saved ? <CheckCircle size={16} /> : <Save size={16} />}
          {saving ? 'Kaydediliyor...' : saved ? 'Kaydedildi!' : 'Değişiklikleri Kaydet'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
