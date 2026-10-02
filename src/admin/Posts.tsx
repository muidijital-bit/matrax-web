import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { DbPost, DbCategory } from '../lib/types';
import type { PostBlock } from '../data/postBodies';
import ImageUpload from './ImageUpload';
import { Plus, Pencil, Trash2, X, Search, ChevronUp, ChevronDown, ExternalLink, AlertCircle } from 'lucide-react';

// ─── helpers ────────────────────────────────────────────────────────────────

const slugify = (s: string) =>
  s.toLowerCase().trim()
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s')
    .replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c')
    .replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-');

const today = () => new Date().toISOString().slice(0, 10);

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });

// Rozet renkleri — sınıflar burada yazılı olduğu için CSS'e dahil edilir
const BADGE_OPTIONS = [
  { label: 'Lacivert', value: 'bg-neon-pink text-white' },
  { label: 'Turkuaz',  value: 'bg-neon-blue text-white' },
  { label: 'Turuncu',  value: 'bg-neon-orange text-white' },
  { label: 'Yeşil',    value: 'bg-neon-green text-white' },
];

const BLOCK_TYPES: { type: PostBlock['type']; label: string }[] = [
  { type: 'p',    label: 'Paragraf' },
  { type: 'h2',   label: 'Başlık' },
  { type: 'ul',   label: 'Liste' },
  { type: 'img',  label: 'Görsel' },
  { type: 'note', label: 'Not Kutusu' },
];

const emptyBlock = (type: PostBlock['type']): PostBlock => {
  switch (type) {
    case 'p':    return { type, text: '' };
    case 'h2':   return { type, text: '' };
    case 'ul':   return { type, items: [''] };
    case 'img':  return { type, src: '', alt: '', caption: '', contain: false };
    case 'note': return { type, title: '', text: '' };
  }
};

// Sıralama ve silmede alanların karışmaması için her bloğa panel içi kimlik verilir
type FormBlock = { uid: string; block: PostBlock };
const withUid = (block: PostBlock): FormBlock => ({ uid: crypto.randomUUID(), block });

// Boş blokları ve boş liste satırlarını ayıklar
const cleanBlocks = (blocks: PostBlock[]): PostBlock[] =>
  blocks.flatMap((b): PostBlock[] => {
    switch (b.type) {
      case 'p':
      case 'h2':   return b.text.trim() ? [{ ...b, text: b.text.trim() }] : [];
      case 'ul':   { const items = b.items.map(i => i.trim()).filter(Boolean); return items.length ? [{ ...b, items }] : []; }
      case 'img':  return b.src ? [{ type: 'img', src: b.src, alt: b.alt.trim(), ...(b.caption?.trim() ? { caption: b.caption.trim() } : {}), ...(b.contain ? { contain: true } : {}) }] : [];
      case 'note': return b.text.trim() ? [{ ...b, title: b.title.trim(), text: b.text.trim() }] : [];
    }
  });

// Bağlantı adresleri hariç kelime sayısı / 200
const readMinutes = (blocks: PostBlock[]) => {
  const words = blocks
    .map(b => ('text' in b ? b.text : 'items' in b ? b.items.join(' ') : ''))
    .join(' ')
    .replace(/\]\([^)]*\)/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

const EMPTY_POST = {
  title: '', slug: '', excerpt: '', image: '',
  category: 'Rehber', badge_color: BADGE_OPTIONS[0].value, keywords: '',
  published_at: today(), category_keys: [] as string[],
  related_label: '', related_path: '',
  sources: [] as { label: string; url: string }[],
  is_published: true,
};

// ─── Blok düzenleyici ─────────────────────────────────────────────────────────

const BlockEditor = ({ block, onChange }: { block: PostBlock; onChange: (b: PostBlock) => void }) => {
  switch (block.type) {
    case 'p':
      return <textarea className="input resize-y" rows={4} value={block.text} onChange={e => onChange({ ...block, text: e.target.value })} placeholder="Paragraf metni..."/>;
    case 'h2':
      return <input className="input font-bold" value={block.text} onChange={e => onChange({ ...block, text: e.target.value })} placeholder="Ara başlık"/>;
    case 'ul':
      return (
        <div>
          <textarea className="input resize-y" rows={4} value={block.items.join('\n')} onChange={e => onChange({ ...block, items: e.target.value.split('\n') })} placeholder="Her satıra bir madde yazın"/>
          <p className="text-xs text-slate-400 mt-1">Her satır bir madde olur.</p>
        </div>
      );
    case 'note':
      return (
        <div className="space-y-2">
          <input className="input font-bold" value={block.title} onChange={e => onChange({ ...block, title: e.target.value })} placeholder="Not başlığı"/>
          <textarea className="input resize-y" rows={3} value={block.text} onChange={e => onChange({ ...block, text: e.target.value })} placeholder="Not metni..."/>
        </div>
      );
    case 'img':
      return (
        <div className="space-y-2">
          <ImageUpload value={block.src} onChange={src => onChange({ ...block, src })} folder="blog"/>
          <input className="input text-sm" value={block.alt} onChange={e => onChange({ ...block, alt: e.target.value })} placeholder="Görsel açıklaması (arama motorları ve ekran okuyucular için)"/>
          <input className="input text-sm" value={block.caption ?? ''} onChange={e => onChange({ ...block, caption: e.target.value })} placeholder="Görsel altı yazısı (isteğe bağlı)"/>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={!!block.contain} onChange={e => onChange({ ...block, contain: e.target.checked })} className="rounded"/>
            <span className="text-xs font-semibold text-slate-600">Kırpmadan göster (çizim ve beyaz zeminli görseller için)</span>
          </label>
        </div>
      );
  }
};

// ─── Ana bileşen ──────────────────────────────────────────────────────────────

const Posts = () => {
  const [posts, setPosts] = useState<DbPost[]>([]);
  const [categories, setCategories] = useState<DbCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [tableMissing, setTableMissing] = useState(false);
  const [listError, setListError] = useState<string|null>(null);
  const [search, setSearch] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [editId, setEditId] = useState<number|null>(null);
  const [form, setForm] = useState({...EMPTY_POST});
  const [blocks, setBlocks] = useState<FormBlock[]>([]);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<number|null>(null);
  const [newSourceLabel, setNewSourceLabel] = useState('');
  const [newSourceUrl, setNewSourceUrl] = useState('');
  const [panelError, setPanelError] = useState<string|null>(null);
  const [deleteError, setDeleteError] = useState<string|null>(null);

  const queryPosts = () => supabase.from('posts').select('*').order('published_at',{ascending:false}).order('id',{ascending:false});
  const applyPosts = ({ data, error }: Awaited<ReturnType<typeof queryPosts>>) => {
    // PGRST205: tablo henüz oluşturulmamış
    setTableMissing(error?.code === 'PGRST205');
    setListError(error && error.code !== 'PGRST205' ? error.message : null);
    setPosts((data as DbPost[]) ?? []);
    setLoading(false);
  };
  const fetchPosts = () => queryPosts().then(applyPosts);

  useEffect(()=>{
    queryPosts().then(applyPosts);
    supabase.from('categories').select('*').order('sort_order').then(({ data }) => setCategories((data as DbCategory[]) ?? []));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const sf = <K extends keyof typeof EMPTY_POST>(k:K,v:typeof EMPTY_POST[K]) => setForm(f=>({...f,[k]:v}));

  const openAdd = () => {
    setEditId(null); setForm({...EMPTY_POST, published_at: today()});
    setBlocks([withUid(emptyBlock('p'))]);
    setPanelError(null); setPanelOpen(true);
  };
  const openEdit = (p:DbPost) => {
    setEditId(p.id);
    setForm({ title:p.title??'', slug:p.slug??'', excerpt:p.excerpt??'', image:p.image??'',
      category:p.category??'Rehber', badge_color:p.badge_color??BADGE_OPTIONS[0].value, keywords:p.keywords??'',
      published_at:p.published_at??today(), category_keys:p.category_keys??[],
      related_label:p.related_label??'', related_path:p.related_path??'',
      sources:p.sources??[], is_published:p.is_published??true });
    setBlocks((p.content??[]).map(withUid));
    setPanelError(null); setPanelOpen(true);
  };

  const handleTitleChange = (title:string) => setForm(f=>({...f, title, slug: editId ? f.slug : slugify(title)}));

  // İlk seçilen kategori, yazı sonundaki buton boşsa onu doldurur
  const toggleCategory = (key:string) => setForm(f => {
    const on = f.category_keys.includes(key);
    const category_keys = on ? f.category_keys.filter(k=>k!==key) : [...f.category_keys, key];
    const cat = categories.find(c=>c.key===key);
    const fill = !on && !f.related_path && cat;
    return { ...f, category_keys,
      related_label: fill ? `${cat.name} Kategorisini İncele` : f.related_label,
      related_path:  fill ? `/katalog?kategori=${key}` : f.related_path };
  });

  const updateBlock = (uid:string, block:PostBlock) => setBlocks(bs => bs.map(b => b.uid===uid ? { uid, block } : b));
  const removeBlock = (uid:string) => setBlocks(bs => bs.filter(b => b.uid!==uid));
  const moveBlock = (i:number, dir:-1|1) => setBlocks(bs => {
    const j = i + dir; if (j < 0 || j >= bs.length) return bs;
    const next = [...bs]; [next[i], next[j]] = [next[j], next[i]]; return next;
  });
  // afterUid verilirse o bloğun altına, verilmezse sona ekler
  const addBlock = (type:PostBlock['type'], afterUid?:string) => setBlocks(bs => {
    const i = afterUid ? bs.findIndex(b => b.uid===afterUid) : -1;
    const nb = withUid(emptyBlock(type));
    return i < 0 ? [...bs, nb] : [...bs.slice(0, i+1), nb, ...bs.slice(i+1)];
  });

  const addSource = () => {
    if(!newSourceLabel.trim()||!newSourceUrl.trim()) return;
    sf('sources',[...form.sources,{label:newSourceLabel.trim(),url:newSourceUrl.trim()}]);
    setNewSourceLabel(''); setNewSourceUrl('');
  };

  const canSave = !!form.title && !!form.slug;

  const save = async () => {
    if(!canSave) return;
    setSaving(true);
    setPanelError(null);
    const content = cleanBlocks(blocks.map(b=>b.block));
    const payload = {
      slug: form.slug.trim(), title: form.title.trim(), excerpt: form.excerpt.trim(),
      image: form.image||null, category: form.category.trim()||'Rehber', badge_color: form.badge_color,
      keywords: form.keywords.trim()||null, published_at: form.published_at||today(),
      read_minutes: readMinutes(content), category_keys: form.category_keys,
      related_label: form.related_label.trim()||null, related_path: form.related_path.trim()||null,
      content, sources: form.sources.filter(s=>s.label.trim()&&s.url.trim()),
      is_published: form.is_published, updated_at: new Date().toISOString(),
    };
    const { error } = editId
      ? await supabase.from('posts').update(payload).eq('id',editId)
      : await supabase.from('posts').insert(payload);
    if(error) {
      setPanelError(error.code==='23505' ? 'Bu slug başka bir yazıda kullanılıyor.' : error.message);
      setSaving(false); return;
    }
    setSaving(false); setPanelOpen(false); fetchPosts();
  };

  const confirmDelete = async () => {
    if(!deleteId) return;
    const { error } = await supabase.from('posts').delete().eq('id',deleteId);
    if(error) { setDeleteError(error.message); setDeleteId(null); return; }
    setDeleteId(null); fetchPosts();
  };

  const filtered = posts.filter(p => !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.slug.includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-black text-slate-900">Blog Yazıları</h1>
      </div>

      {tableMissing ? (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900">Blog tablosu henüz oluşturulmamış</p>
              <p className="text-amber-700 text-sm mt-1 font-medium">
                Supabase panelinde SQL Editor'ı açıp projedeki <span className="font-mono">supabase/migrations/20261002120000_blog_posts.sql</span> dosyasının içeriğini bir kez çalıştırın. Tablo oluşunca mevcut 3 yazı da burada görünür.
              </p>
              <p className="text-amber-700 text-sm mt-1 font-medium">O zamana kadar sitede koddaki yazılar gösterilmeye devam eder.</p>
            </div>
          </div>
        </div>
      ) : (
      <>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-48">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
          <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Başlık veya slug..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand-pink transition-colors"/>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 text-white rounded-xl font-bold text-sm transition-colors shadow-lg" style={{background:'#f83567'}}>
          <Plus size={16}/> Yeni Yazı
        </button>
      </div>

      {listError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{listError}</p>}

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {loading ? <div className="p-8 text-center text-slate-400">Yükleniyor...</div>
        : filtered.length===0 ? <div className="p-8 text-center text-slate-400">{posts.length===0 ? 'Henüz yazı eklenmemiş.' : 'Sonuç bulunamadı.'}</div>
        : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="border-b border-slate-100">
                <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3">Yazı</th>
                <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden sm:table-cell">Etiket</th>
                <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden md:table-cell">Tarih</th>
                <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden lg:table-cell">Durum</th>
                <th className="px-4 py-3 w-28"></th>
              </tr></thead>
              <tbody className="divide-y divide-slate-50">
                {filtered.map(p=>(
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {p.image ? <img src={p.image} alt="" className="w-14 h-10 object-cover rounded-lg border border-slate-100 flex-shrink-0"/>
                          : <div className="w-14 h-10 rounded-lg bg-slate-100 flex-shrink-0"/>}
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 truncate">{p.title}</p>
                          <p className="text-xs text-slate-400 truncate">/blog/{p.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell"><span className="text-xs font-semibold text-slate-600">{p.category}</span></td>
                    <td className="px-4 py-3 hidden md:table-cell"><span className="text-xs font-semibold text-slate-500 whitespace-nowrap">{formatDate(p.published_at)}</span></td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-bold ${p.is_published?'bg-emerald-50 text-emerald-700':'bg-slate-100 text-slate-500'}`}>{p.is_published?'Yayında':'Taslak'}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 justify-end">
                        {p.is_published && (
                          <a href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer" title="Sitede görüntüle" className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"><ExternalLink size={15}/></a>
                        )}
                        <button onClick={()=>openEdit(p)} className="p-1.5 text-slate-400 hover:text-brand-pink hover:bg-pink-50 rounded-lg transition-colors"><Pencil size={15}/></button>
                        <button onClick={()=>setDeleteId(p.id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={15}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </>
      )}

      {/* Yazı paneli */}
      {panelOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={()=>setPanelOpen(false)}/>
          <div className="w-full max-w-3xl bg-white flex flex-col shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0">
              <h2 className="font-black text-slate-900 text-lg">{editId?'Yazıyı Düzenle':'Yeni Yazı'}</h2>
              <button onClick={()=>setPanelOpen(false)} className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg"><X size={18}/></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="label">Başlık *</label>
                  <input className="input" value={form.title} onChange={e=>handleTitleChange(e.target.value)} placeholder="Trambolin Parkı Kurulum Sürecinde Bilmeniz Gerekenler"/>
                </div>
                <div className="col-span-2">
                  <label className="label">Slug (URL) * <span className="text-slate-400 font-normal normal-case">— başlıktan otomatik</span></label>
                  <input className="input font-mono text-sm" value={form.slug} onChange={e=>sf('slug',e.target.value)} placeholder="otomatik-dolar"/>
                  {editId && <p className="text-xs text-slate-400 mt-1">Yayındaki bir yazının adresini değiştirirseniz eski bağlantılar çalışmaz.</p>}
                </div>
                <div className="col-span-2">
                  <label className="label">Özet</label>
                  <textarea className="input resize-none" rows={3} value={form.excerpt} onChange={e=>sf('excerpt',e.target.value)} placeholder="Liste kartında ve arama sonuçlarında görünen 1-2 cümle..."/>
                </div>
                <div>
                  <label className="label">Etiket</label>
                  <input className="input" value={form.category} onChange={e=>sf('category',e.target.value)} placeholder="Rehber, Tasarım..."/>
                </div>
                <div>
                  <label className="label">Etiket Rengi</label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <select className="input appearance-none pr-8" value={form.badge_color} onChange={e=>sf('badge_color',e.target.value)}>
                        {BADGE_OPTIONS.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                      <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"/>
                    </div>
                    <span className={`text-[10px] font-black px-3 py-1.5 rounded-full whitespace-nowrap ${form.badge_color}`}>{form.category||'Etiket'}</span>
                  </div>
                </div>
                <div>
                  <label className="label">Yayın Tarihi</label>
                  <input type="date" className="input" value={form.published_at} onChange={e=>sf('published_at',e.target.value)}/>
                </div>
                <div>
                  <label className="label">Anahtar Kelimeler</label>
                  <input className="input" value={form.keywords} onChange={e=>sf('keywords',e.target.value)} placeholder="virgülle ayırın"/>
                </div>
              </div>

              <div>
                <label className="label">Kapak Görseli</label>
                <ImageUpload value={form.image} onChange={v=>sf('image',v)} folder="blog"/>
                <p className="text-xs text-slate-400 mt-1">Yatay görsel önerilir; kartlarda 16:9, yazı sayfasında 2:1 oranında kırpılır.</p>
              </div>

              {/* İçerik blokları */}
              <div>
                <label className="label">İçerik</label>
                <p className="text-xs text-slate-400 mb-3">
                  Metin içinde bağlantı vermek için <span className="font-mono bg-slate-100 px-1 rounded">[görünen yazı](/katalog)</span> biçimini kullanın. Site içi adresler / ile başlar.
                </p>
                <div className="space-y-3">
                  {blocks.map((b,i)=>(
                    <div key={b.uid} className="border border-slate-200 rounded-2xl p-3 bg-slate-50/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{BLOCK_TYPES.find(t=>t.type===b.block.type)?.label}</span>
                        <div className="flex items-center gap-0.5">
                          <select value="" onChange={e=>{ if(e.target.value) addBlock(e.target.value as PostBlock['type'], b.uid); }} title="Bu bloğun altına yeni blok ekle"
                            className="text-xs font-semibold text-slate-500 bg-transparent hover:bg-slate-100 rounded-lg px-1.5 py-1 mr-1 focus:outline-none cursor-pointer">
                            <option value="">+ Altına ekle</option>
                            {BLOCK_TYPES.map(t=><option key={t.type} value={t.type}>{t.label}</option>)}
                          </select>
                          <button type="button" onClick={()=>moveBlock(i,-1)} disabled={i===0} title="Yukarı taşı" className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30"><ChevronUp size={14}/></button>
                          <button type="button" onClick={()=>moveBlock(i,1)} disabled={i===blocks.length-1} title="Aşağı taşı" className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30"><ChevronDown size={14}/></button>
                          <button type="button" onClick={()=>removeBlock(b.uid)} title="Bloğu sil" className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg"><X size={14}/></button>
                        </div>
                      </div>
                      <BlockEditor block={b.block} onChange={nb=>updateBlock(b.uid,nb)}/>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {BLOCK_TYPES.map(t=>(
                    <button key={t.type} type="button" onClick={()=>addBlock(t.type)} className="inline-flex items-center gap-1.5 px-3 py-2 bg-pink-50 text-brand-pink rounded-xl font-semibold text-sm hover:bg-pink-100 transition-colors">
                      <Plus size={14}/> {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Kaynaklar */}
              <div>
                <label className="label">Kaynaklar <span className="text-slate-400 font-normal normal-case">— yazı sonunda listelenir</span></label>
                <div className="space-y-2 mb-2">
                  {form.sources.map((s,i)=>(
                    <div key={i} className="flex gap-2 items-center">
                      <input className="input flex-1 text-sm" value={s.label} onChange={e=>sf('sources',form.sources.map((x,idx)=>idx===i?{...x,label:e.target.value}:x))} placeholder="Kaynak adı"/>
                      <input className="input flex-1 text-sm" value={s.url} onChange={e=>sf('sources',form.sources.map((x,idx)=>idx===i?{...x,url:e.target.value}:x))} placeholder="https://..."/>
                      <button type="button" onClick={()=>sf('sources',form.sources.filter((_,idx)=>idx!==i))} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><X size={14}/></button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input className="input flex-1 text-sm" value={newSourceLabel} onChange={e=>setNewSourceLabel(e.target.value)} placeholder="Kaynak adı"/>
                  <input className="input flex-1 text-sm" value={newSourceUrl} onChange={e=>setNewSourceUrl(e.target.value)} onKeyDown={e=>e.key==='Enter'&&(e.preventDefault(),addSource())} placeholder="https://..."/>
                  <button type="button" onClick={addSource} className="px-3 py-2 bg-pink-50 text-brand-pink rounded-xl font-semibold text-sm hover:bg-pink-100 transition-colors">Ekle</button>
                </div>
              </div>

              {/* İlgili kategoriler */}
              <div>
                <label className="label">İlgili Ürün Kategorileri</label>
                <p className="text-xs text-slate-400 mb-2">Seçilen kategorilerdeki ürün sayfalarında bu yazı "Rehber Yazı" olarak gösterilir.</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(c=>{
                    const on = form.category_keys.includes(c.key);
                    return (
                      <button key={c.key} type="button" onClick={()=>toggleCategory(c.key)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${on ? 'text-white border-transparent' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                        style={on ? { background: '#2c3876' } : undefined}>
                        {c.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Yazı Sonu Butonu — Yazı</label>
                  <input className="input" value={form.related_label} onChange={e=>sf('related_label',e.target.value)} placeholder="Ürünleri İncele"/>
                </div>
                <div>
                  <label className="label">Yazı Sonu Butonu — Bağlantı</label>
                  <input className="input font-mono text-sm" value={form.related_path} onChange={e=>sf('related_path',e.target.value)} placeholder="/katalog"/>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.is_published} onChange={e=>sf('is_published',e.target.checked)} className="rounded"/>
                <span className="text-sm font-semibold text-slate-700">Yayında</span>
                <span className="text-xs text-slate-400">— işaretli değilse yazı taslak kalır, sitede görünmez</span>
              </label>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex-shrink-0">
              {panelError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{panelError}</p>}
              {!canSave && (
                <p className="text-amber-600 text-xs font-semibold mb-3 bg-amber-50 px-3 py-2 rounded-xl">
                  Zorunlu alanlar eksik: {[!form.title&&'Başlık',!form.slug&&'Slug'].filter(Boolean).join(', ')}
                </p>
              )}
              <div className="flex gap-3">
                <button onClick={()=>setPanelOpen(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm text-slate-600 hover:bg-slate-50">İptal</button>
                <button onClick={save} disabled={saving||!canSave} className="flex-1 py-2.5 rounded-xl text-white font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed" style={{background:'#f83567'}}>
                  {saving?'Kaydediliyor...':editId?'Güncelle':'Kaydet'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={()=>setDeleteId(null)}/>
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm">
            <h3 className="font-black text-slate-900 text-lg mb-2">Yazıyı sil</h3>
            <p className="text-slate-500 text-sm mb-5">Bu işlem geri alınamaz. Yazıyı sitede gizlemek için silmek yerine "Yayında" işaretini kaldırabilirsiniz.</p>
            <div className="flex gap-3">
              <button onClick={()=>setDeleteId(null)} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm hover:bg-slate-50">İptal</button>
              <button onClick={confirmDelete} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm">Sil</button>
            </div>
          </div>
        </div>
      )}

      {deleteError && (
        <p className="fixed bottom-4 right-4 z-50 text-red-600 text-xs font-semibold bg-red-50 border border-red-200 px-4 py-3 rounded-xl shadow-lg">
          Silinemedi: {deleteError}
          <button onClick={()=>setDeleteError(null)} className="ml-3 underline">Kapat</button>
        </p>
      )}
    </div>
  );
};

export default Posts;
