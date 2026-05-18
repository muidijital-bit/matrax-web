import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import type { DbProduct, DbCategory } from '../lib/types';
import { Plus, Pencil, Trash2, X, Upload, Search, ChevronDown, ImagePlus } from 'lucide-react';

// ─── helpers ────────────────────────────────────────────────────────────────

const slugify = (s: string) =>
  s.toLowerCase().trim()
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s')
    .replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c')
    .replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-');

const COLOR_OPTIONS = [
  { label: 'Pembe → Turuncu',  value: 'from-brand-pink to-brand-orange' },
  { label: 'Lacivert → Yeşil', value: 'from-brand-navy to-brand-green' },
  { label: 'Yeşil → Turuncu',  value: 'from-brand-green to-brand-orange' },
  { label: 'Turuncu → Pembe',  value: 'from-brand-orange to-brand-pink' },
  { label: 'Pembe → Lacivert', value: 'from-brand-pink to-brand-navy' },
  { label: 'Lacivert → Pembe', value: 'from-brand-navy to-brand-pink' },
  { label: 'Turuncu → Yeşil',  value: 'from-brand-orange to-brand-green' },
];

// ─── ImageUpload ─────────────────────────────────────────────────────────────

const ImageUpload = ({ value, onChange, folder = 'products' }: {
  value: string; onChange: (url: string) => void; folder?: string;
}) => {
  const [uploading, setUploading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    const path = `${folder}/${Date.now()}.${file.name.split('.').pop()}`;
    const { error } = await supabase.storage.from('images').upload(path, file, { upsert: true });
    if (!error) onChange(supabase.storage.from('images').getPublicUrl(path).data.publicUrl);
    setUploading(false);
    if (ref.current) ref.current.value = '';
  };
  return (
    <div className="flex items-center gap-3">
      {value && (
        <div className="relative group">
          <img src={value} alt="" className="w-16 h-16 object-cover rounded-xl border border-slate-200" />
          <button type="button" onClick={() => onChange('')} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full hidden group-hover:flex items-center justify-center"><X size={10}/></button>
        </div>
      )}
      <label className={`cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${uploading ? 'bg-slate-100 text-slate-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
        <Upload size={14}/>{uploading ? 'Yükleniyor...' : 'Görsel Yükle'}
        <input ref={ref} type="file" accept="image/*" onChange={upload} className="hidden" disabled={uploading}/>
      </label>
    </div>
  );
};

const MultiImageUpload = ({ values, onChange }: { values: string[]; onChange: (u: string[]) => void }) => {
  const [uploading, setUploading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []); if (!files.length) return;
    setUploading(true);
    const urls: string[] = [];
    for (const file of files) {
      const path = `products/${Date.now()}-${Math.random().toString(36).slice(2)}.${file.name.split('.').pop()}`;
      const { error } = await supabase.storage.from('images').upload(path, file, { upsert: true });
      if (!error) urls.push(supabase.storage.from('images').getPublicUrl(path).data.publicUrl);
    }
    onChange([...values, ...urls]);
    setUploading(false);
    if (ref.current) ref.current.value = '';
  };
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((url, i) => (
        <div key={i} className="relative group">
          <img src={url} alt="" className="w-16 h-16 object-cover rounded-xl border border-slate-200"/>
          <button type="button" onClick={() => onChange(values.filter((_,idx)=>idx!==i))} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full hidden group-hover:flex items-center justify-center"><X size={10}/></button>
        </div>
      ))}
      <label className={`cursor-pointer w-16 h-16 flex flex-col items-center justify-center rounded-xl border-2 border-dashed text-xs font-semibold transition-colors ${uploading ? 'border-slate-200 text-slate-300' : 'border-slate-300 text-slate-400 hover:border-brand-pink hover:text-brand-pink'}`}>
        <ImagePlus size={18}/>{uploading ? '...' : 'Ekle'}
        <input ref={ref} type="file" accept="image/*" multiple onChange={upload} className="hidden" disabled={uploading}/>
      </label>
    </div>
  );
};

// ─── empty forms ─────────────────────────────────────────────────────────────

const EMPTY_PRODUCT = {
  name:'', slug:'', code:'', category:'', category_key:'',
  badge:'', price:'Fiyat İste', image:'', images:[] as string[],
  description:'', long_desc:'', features:[] as string[],
  specs:[] as {label:string;value:string}[], is_active:true, sort_order:0,
};
const EMPTY_CAT = { key:'', name:'', color:'from-brand-pink to-brand-orange', image:'', sort_order:0 };

// ─── PRODUCTS tab ─────────────────────────────────────────────────────────────

const ProductsTab = ({ categories }: { categories: DbCategory[] }) => {
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [editId, setEditId] = useState<number|null>(null);
  const [form, setForm] = useState({...EMPTY_PRODUCT});
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<number|null>(null);
  const [newFeature, setNewFeature] = useState('');
  const [newSpecLabel, setNewSpecLabel] = useState('');
  const [newSpecValue, setNewSpecValue] = useState('');
  const [panelError, setPanelError] = useState<string|null>(null);
  const [deleteError, setDeleteError] = useState<string|null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await supabase.from('products').select('*').order('sort_order').order('created_at',{ascending:false});
    setProducts((data as DbProduct[]) ?? []);
    setLoading(false);
  };
  useEffect(()=>{fetchProducts();},[]);

  const sf = <K extends keyof typeof EMPTY_PRODUCT>(k:K,v:typeof EMPTY_PRODUCT[K]) => setForm(f=>({...f,[k]:v}));

  const openAdd = () => { setEditId(null); setForm({...EMPTY_PRODUCT}); setPanelError(null); setPanelOpen(true); };
  const openEdit = (p:DbProduct) => {
    setEditId(p.id);
    setForm({ name:p.name, slug:p.slug, code:p.code??'', category:p.category, category_key:p.category_key,
      badge:p.badge??'', price:p.price, image:p.image??'', images:p.images??[], description:p.description??'',
      long_desc:p.long_desc??'', features:p.features??[], specs:p.specs??[], is_active:p.is_active, sort_order:p.sort_order });
    setPanelError(null);
    setPanelOpen(true);
  };

  const handleNameChange = (name:string) => setForm(f=>({...f, name, slug: editId ? f.slug : slugify(name)}));
  const handleCat = (key:string) => { const c=categories.find(c=>c.key===key); setForm(f=>({...f,category_key:key,category:c?.name??''})); };

  const addFeature = () => { if(!newFeature.trim()) return; sf('features',[...form.features,newFeature.trim()]); setNewFeature(''); };
  const addSpec = () => { if(!newSpecLabel.trim()) return; sf('specs',[...form.specs,{label:newSpecLabel.trim(),value:newSpecValue.trim()}]); setNewSpecLabel(''); setNewSpecValue(''); };

  const save = async () => {
    if(!form.name||!form.slug||!form.category_key) return;
    setSaving(true);
    setPanelError(null);
    const payload = { ...form, code:form.code||null, badge:form.badge||null, image:form.image||null,
      description:form.description||null, long_desc:form.long_desc||null, updated_at:new Date().toISOString() };
    const { error } = editId
      ? await supabase.from('products').update(payload).eq('id',editId)
      : await supabase.from('products').insert(payload);
    if(error) { setPanelError(error.message); setSaving(false); return; }
    setSaving(false); setPanelOpen(false); fetchProducts();
  };

  const confirmDelete = async () => {
    if(!deleteId) return;
    const { error } = await supabase.from('products').delete().eq('id',deleteId);
    if(error) { setDeleteError(error.message); setDeleteId(null); return; }
    setDeleteId(null); fetchProducts();
  };

  const filtered = products.filter(p => {
    const ms = !search || p.name.toLowerCase().includes(search.toLowerCase()) || (p.code??'').toLowerCase().includes(search.toLowerCase());
    const mc = !catFilter || p.category_key===catFilter;
    return ms&&mc;
  });

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-48">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
          <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder="İsim veya kod..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand-pink transition-colors"/>
        </div>
        <div className="relative">
          <select value={catFilter} onChange={e=>setCatFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:border-brand-pink transition-colors">
            <option value="">Tüm Kategoriler</option>
            {categories.map(c=><option key={c.key} value={c.key}>{c.name}</option>)}
          </select>
          <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"/>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 text-white rounded-xl font-bold text-sm transition-colors shadow-lg" style={{background:'#f83567'}}>
          <Plus size={16}/> Yeni Ürün
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {loading ? <div className="p-8 text-center text-slate-400">Yükleniyor...</div>
        : filtered.length===0 ? <div className="p-8 text-center text-slate-400">{products.length===0 ? 'Henüz ürün eklenmemiş.' : 'Sonuç bulunamadı.'}</div>
        : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="border-b border-slate-100">
                <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3">Ürün</th>
                <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden md:table-cell">Kod</th>
                <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden sm:table-cell">Kategori</th>
                <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden lg:table-cell">Durum</th>
                <th className="px-4 py-3 w-20"></th>
              </tr></thead>
              <tbody className="divide-y divide-slate-50">
                {filtered.map(p=>(
                  <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {p.image ? <img src={p.image} alt="" className="w-10 h-10 object-cover rounded-lg border border-slate-100 flex-shrink-0"/>
                          : <div className="w-10 h-10 rounded-lg bg-slate-100 flex-shrink-0"/>}
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 truncate">{p.name}</p>
                          <p className="text-xs text-slate-400 truncate">{p.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell"><span className="text-xs font-mono text-slate-500">{p.code??'—'}</span></td>
                    <td className="px-4 py-3 hidden sm:table-cell"><span className="text-xs font-semibold text-slate-600">{p.category}</span></td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-bold ${p.is_active?'bg-emerald-50 text-emerald-700':'bg-slate-100 text-slate-500'}`}>{p.is_active?'Aktif':'Pasif'}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 justify-end">
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

      {/* Ürün paneli */}
      {panelOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={()=>setPanelOpen(false)}/>
          <div className="w-full max-w-2xl bg-white flex flex-col shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0">
              <h2 className="font-black text-slate-900 text-lg">{editId?'Ürün Düzenle':'Yeni Ürün'}</h2>
              <button onClick={()=>setPanelOpen(false)} className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg"><X size={18}/></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="label">Ürün Adı *</label>
                  <input className="input" value={form.name} onChange={e=>handleNameChange(e.target.value)} placeholder="Ticari Olimpik Trambolin"/>
                </div>
                <div>
                  <label className="label">Slug (URL) *</label>
                  <input className="input font-mono text-sm" value={form.slug} onChange={e=>sf('slug',e.target.value)}/>
                </div>
                <div>
                  <label className="label">Ürün Kodu</label>
                  <input className="input" value={form.code} onChange={e=>sf('code',e.target.value)} placeholder="MX-OLP-01"/>
                </div>
                <div>
                  <label className="label">Kategori *</label>
                  <div className="relative">
                    <select className="input appearance-none pr-8" value={form.category_key} onChange={e=>handleCat(e.target.value)}>
                      <option value="">Kategori seçin</option>
                      {categories.map(c=><option key={c.key} value={c.key}>{c.name}</option>)}
                    </select>
                    <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"/>
                  </div>
                </div>
                <div>
                  <label className="label">Fiyat</label>
                  <input className="input" value={form.price} onChange={e=>sf('price',e.target.value)} placeholder="Fiyat İste"/>
                </div>
                <div>
                  <label className="label">Rozet (Badge)</label>
                  <input className="input" value={form.badge} onChange={e=>sf('badge',e.target.value)} placeholder="Yeni, Popüler..."/>
                </div>
              </div>
              <div>
                <label className="label">Ana Görsel</label>
                <ImageUpload value={form.image} onChange={v=>sf('image',v)}/>
              </div>
              <div>
                <label className="label">Ürün Görselleri (galeri)</label>
                <MultiImageUpload values={form.images} onChange={v=>sf('images',v)}/>
              </div>
              <div>
                <label className="label">Kısa Açıklama</label>
                <textarea className="input resize-none" rows={3} value={form.description} onChange={e=>sf('description',e.target.value)} placeholder="Ürün hakkında kısa açıklama..."/>
              </div>
              <div>
                <label className="label">Uzun Açıklama</label>
                <textarea className="input resize-none" rows={4} value={form.long_desc} onChange={e=>sf('long_desc',e.target.value)} placeholder="Detaylı açıklama..."/>
              </div>
              {/* Özellikler */}
              <div>
                <label className="label">Özellikler</label>
                <div className="space-y-2 mb-2">
                  {form.features.map((f,i)=>(
                    <div key={i} className="flex gap-2 items-center">
                      <input className="input flex-1 text-sm" value={f} onChange={e=>sf('features',form.features.map((x,idx)=>idx===i?e.target.value:x))}/>
                      <button type="button" onClick={()=>sf('features',form.features.filter((_,idx)=>idx!==i))} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><X size={14}/></button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input className="input flex-1 text-sm" value={newFeature} onChange={e=>setNewFeature(e.target.value)} onKeyDown={e=>e.key==='Enter'&&(e.preventDefault(),addFeature())} placeholder="Yeni özellik ekle..."/>
                  <button type="button" onClick={addFeature} className="px-3 py-2 bg-pink-50 text-brand-pink rounded-xl font-semibold text-sm hover:bg-pink-100 transition-colors">Ekle</button>
                </div>
              </div>
              {/* Teknik özellikler */}
              <div>
                <label className="label">Teknik Özellikler</label>
                <div className="space-y-2 mb-2">
                  {form.specs.map((s,i)=>(
                    <div key={i} className="flex gap-2 items-center">
                      <input className="input text-sm w-32" value={s.label} onChange={e=>sf('specs',form.specs.map((x,idx)=>idx===i?{...x,label:e.target.value}:x))} placeholder="Etiket"/>
                      <input className="input flex-1 text-sm" value={s.value} onChange={e=>sf('specs',form.specs.map((x,idx)=>idx===i?{...x,value:e.target.value}:x))} placeholder="Değer"/>
                      <button type="button" onClick={()=>sf('specs',form.specs.filter((_,idx)=>idx!==i))} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><X size={14}/></button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input className="input text-sm w-32" value={newSpecLabel} onChange={e=>setNewSpecLabel(e.target.value)} placeholder="Etiket"/>
                  <input className="input flex-1 text-sm" value={newSpecValue} onChange={e=>setNewSpecValue(e.target.value)} onKeyDown={e=>e.key==='Enter'&&(e.preventDefault(),addSpec())} placeholder="Değer"/>
                  <button type="button" onClick={addSpec} className="px-3 py-2 bg-pink-50 text-brand-pink rounded-xl font-semibold text-sm hover:bg-pink-100 transition-colors">Ekle</button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.is_active} onChange={e=>sf('is_active',e.target.checked)} className="rounded"/>
                  <span className="text-sm font-semibold text-slate-700">Aktif</span>
                </label>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-semibold text-slate-700">Sıra</label>
                  <input type="number" className="input w-20 text-sm" value={form.sort_order} onChange={e=>sf('sort_order',Number(e.target.value))}/>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex-shrink-0">
              {panelError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{panelError}</p>}
              <div className="flex gap-3">
                <button onClick={()=>setPanelOpen(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm text-slate-600 hover:bg-slate-50">İptal</button>
                <button onClick={save} disabled={saving||!form.name||!form.slug||!form.category_key} className="flex-1 py-2.5 rounded-xl text-white font-bold text-sm disabled:opacity-50" style={{background:'#f83567'}}>
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
            <h3 className="font-black text-slate-900 text-lg mb-2">Ürünü sil</h3>
            <p className="text-slate-500 text-sm mb-5">Bu işlem geri alınamaz.</p>
            {deleteError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{deleteError}</p>}
            <div className="flex gap-3">
              <button onClick={()=>{ setDeleteId(null); setDeleteError(null); }} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm hover:bg-slate-50">İptal</button>
              <button onClick={confirmDelete} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm">Sil</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ─── CATEGORIES tab ───────────────────────────────────────────────────────────

const CategoriesTab = ({ categories, reload }: { categories: DbCategory[]; reload: () => void }) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [editId, setEditId] = useState<string|null>(null);
  const [form, setForm] = useState({...EMPTY_CAT});
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string|null>(null);
  const [panelError, setPanelError] = useState<string|null>(null);
  const [deleteError, setDeleteError] = useState<string|null>(null);

  const sf = <K extends keyof typeof EMPTY_CAT>(k:K,v:typeof EMPTY_CAT[K]) => setForm(f=>({...f,[k]:v}));
  const openAdd = () => { setEditId(null); setForm({...EMPTY_CAT}); setPanelError(null); setPanelOpen(true); };
  const openEdit = (c:DbCategory) => { setEditId(c.id); setForm({key:c.key,name:c.name,color:c.color,image:c.image??'',sort_order:c.sort_order}); setPanelError(null); setPanelOpen(true); };

  const save = async () => {
    if(!form.name||!form.key) return;
    setSaving(true);
    setPanelError(null);
    const payload = {key:form.key,name:form.name,color:form.color,image:form.image||null,sort_order:form.sort_order};
    const { error } = editId
      ? await supabase.from('categories').update(payload).eq('id',editId)
      : await supabase.from('categories').insert(payload);
    if(error) { setPanelError(error.message); setSaving(false); return; }
    setSaving(false); setPanelOpen(false); reload();
  };

  const confirmDelete = async () => {
    if(!deleteId) return;
    const { error } = await supabase.from('categories').delete().eq('id',deleteId);
    if(error) { setDeleteError(error.message); setDeleteId(null); return; }
    setDeleteId(null); reload();
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <button onClick={openAdd} className="flex items-center gap-2 px-4 py-2 text-white rounded-xl font-bold text-sm transition-colors shadow-lg" style={{background:'#f83567'}}>
          <Plus size={16}/> Yeni Kategori
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {categories.length===0 ? <div className="p-8 text-center text-slate-400">Henüz kategori eklenmemiş.</div> : (
          <table className="w-full">
            <thead><tr className="border-b border-slate-100">
              <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3">Kategori</th>
              <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden sm:table-cell">Key</th>
              <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden md:table-cell">Sıra</th>
              <th className="px-4 py-3 w-20"></th>
            </tr></thead>
            <tbody className="divide-y divide-slate-50">
              {categories.map(cat=>(
                <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {cat.image ? <img src={cat.image} alt="" className="w-10 h-10 object-cover rounded-lg border border-slate-100"/>
                        : <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color}`}/>}
                      <span className="text-sm font-bold text-slate-900">{cat.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell"><span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">{cat.key}</span></td>
                  <td className="px-4 py-3 hidden md:table-cell"><span className="text-sm text-slate-500">{cat.sort_order}</span></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5 justify-end">
                      <button onClick={()=>openEdit(cat)} className="p-1.5 text-slate-400 hover:text-brand-pink hover:bg-pink-50 rounded-lg transition-colors"><Pencil size={15}/></button>
                      <button onClick={()=>setDeleteId(cat.id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={15}/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {panelOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={()=>setPanelOpen(false)}/>
          <div className="w-full max-w-md bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0">
              <h2 className="font-black text-slate-900 text-lg">{editId?'Kategori Düzenle':'Yeni Kategori'}</h2>
              <button onClick={()=>setPanelOpen(false)} className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg"><X size={18}/></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              <div><label className="label">Kategori Adı *</label><input className="input" value={form.name} onChange={e=>sf('name',e.target.value)} placeholder="Trambolinler"/></div>
              <div>
                <label className="label">Key (URL slug) *</label>
                <input className="input font-mono text-sm" value={form.key} onChange={e=>sf('key',e.target.value)} placeholder="trambolinler"/>
                <p className="text-xs text-slate-400 mt-1">Küçük harf, tire ile ayrım. Sonradan değiştirilmemeli.</p>
              </div>
              <div>
                <label className="label">Renk Gradyanı</label>
                <div className="relative">
                  <select className="input appearance-none pr-8" value={form.color} onChange={e=>sf('color',e.target.value)}>
                    {COLOR_OPTIONS.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"/>
                </div>
                <div className={`mt-2 h-6 rounded-lg bg-gradient-to-r ${form.color}`}/>
              </div>
              <div><label className="label">Kapak Görseli</label><ImageUpload value={form.image} onChange={v=>sf('image',v)} folder="categories"/></div>
              <div><label className="label">Sıra</label><input type="number" className="input w-24" value={form.sort_order} onChange={e=>sf('sort_order',Number(e.target.value))}/></div>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex-shrink-0">
              {panelError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{panelError}</p>}
              <div className="flex gap-3">
                <button onClick={()=>setPanelOpen(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm text-slate-600 hover:bg-slate-50">İptal</button>
                <button onClick={save} disabled={saving||!form.name||!form.key} className="flex-1 py-2.5 rounded-xl text-white font-bold text-sm disabled:opacity-50" style={{background:'#f83567'}}>
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
            <h3 className="font-black text-slate-900 text-lg mb-2">Kategoriyi sil</h3>
            <p className="text-slate-500 text-sm mb-5">Bu işlem geri alınamaz. Bağlı ürünler etkilenebilir.</p>
            {deleteError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{deleteError}</p>}
            <div className="flex gap-3">
              <button onClick={()=>{ setDeleteId(null); setDeleteError(null); }} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm hover:bg-slate-50">İptal</button>
              <button onClick={confirmDelete} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm">Sil</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ─── Ana bileşen ──────────────────────────────────────────────────────────────

type Tab = 'urunler' | 'kategoriler';

const Products = () => {
  const [tab, setTab] = useState<Tab>('urunler');
  const [categories, setCategories] = useState<DbCategory[]>([]);

  const loadCategories = async () => {
    const { data } = await supabase.from('categories').select('*').order('sort_order');
    setCategories((data as DbCategory[]) ?? []);
  };

  useEffect(() => { loadCategories(); }, []);

  return (
    <div>
      {/* Başlık + Sekme */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-black text-slate-900">
          {tab === 'urunler' ? 'Ürünler' : 'Kategoriler'}
        </h1>
        <div className="flex gap-1 p-1 bg-white rounded-2xl border border-slate-100 shadow-sm">
          {(['urunler','kategoriler'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                tab === t ? 'text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
              }`}
              style={tab === t ? { background: '#2c3876' } : undefined}
            >
              {t === 'urunler' ? 'Ürünler' : 'Kategoriler'}
            </button>
          ))}
        </div>
      </div>

      {tab === 'urunler'
        ? <ProductsTab categories={categories} />
        : <CategoriesTab categories={categories} reload={loadCategories} />
      }
    </div>
  );
};

export default Products;
