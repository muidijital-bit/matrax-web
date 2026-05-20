import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import type { DbSparePart, DbSpareCategory } from '../lib/types';
import { Plus, Pencil, Trash2, X, Upload, ChevronDown, ImagePlus, FolderOpen, Search } from 'lucide-react';
import { spareCategories as localSpareCategories } from '../data/spareParts';

const getLocalImage = (key: string): string => {
  for (const cat of localSpareCategories) {
    const item = cat.items.find(i => i.key === key);
    if (item?.image) return item.image;
  }
  return '';
};

// ─── ImageUpload ──────────────────────────────────────────────────────────────

const ImageUpload = ({ value, onChange, folder = 'spare-parts' }: {
  value: string; onChange: (url: string) => void; folder?: string;
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    setUploadError('');
    const path = `${folder}/${Date.now()}.${file.name.split('.').pop()}`;
    const { error } = await supabase.storage.from('images').upload(path, file, { upsert: true });
    if (error) {
      setUploadError('Yükleme başarısız: ' + error.message);
    } else {
      onChange(supabase.storage.from('images').getPublicUrl(path).data.publicUrl);
    }
    setUploading(false);
    if (ref.current) ref.current.value = '';
  };
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-3">
        {value && (
          <div className="relative group">
            <img src={value} alt="" className="w-14 h-14 object-contain rounded-xl border border-slate-200 bg-white p-1"/>
            <button type="button" onClick={() => onChange('')} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full hidden group-hover:flex items-center justify-center"><X size={10}/></button>
          </div>
        )}
        <label className={`cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${uploading ? 'bg-slate-100 text-slate-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
          <Upload size={14}/>{uploading ? 'Yükleniyor...' : 'Görsel'}
          <input ref={ref} type="file" accept="image/*" onChange={upload} className="hidden" disabled={uploading}/>
        </label>
      </div>
      {uploadError && <p className="text-xs text-red-500 font-semibold">{uploadError}</p>}
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
      const path = `spare-parts/${Date.now()}-${Math.random().toString(36).slice(2)}.${file.name.split('.').pop()}`;
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
          <img src={url} alt="" className="w-14 h-14 object-cover rounded-xl border border-slate-200"/>
          <button type="button" onClick={() => onChange(values.filter((_,idx)=>idx!==i))} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full hidden group-hover:flex items-center justify-center"><X size={10}/></button>
        </div>
      ))}
      <label className={`cursor-pointer w-14 h-14 flex flex-col items-center justify-center rounded-xl border-2 border-dashed text-xs font-semibold transition-colors ${uploading ? 'border-slate-200 text-slate-300' : 'border-slate-300 text-slate-400 hover:border-brand-pink hover:text-brand-pink'}`}>
        <ImagePlus size={16}/>
        <input ref={ref} type="file" accept="image/*" multiple onChange={upload} className="hidden" disabled={uploading}/>
      </label>
    </div>
  );
};

// ─── empty forms ──────────────────────────────────────────────────────────────

const EMPTY_CAT  = { key:'', title:'', short:'', cover:'', badge:'bg-brand-pink text-white', accent:'text-brand-pink', sort_order:0 };
const EMPTY_PART = { key:'', category_key:'', title:'', description:'', image:'', gallery:[] as string[], sort_order:0 };

// ─── Main component ───────────────────────────────────────────────────────────

const SpareParts = () => {
  const [cats, setCats] = useState<DbSpareCategory[]>([]);
  const [parts, setParts] = useState<DbSparePart[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState<string>('');
  const [search, setSearch] = useState('');

  // Kategori paneli
  const [catPanel, setCatPanel] = useState(false);
  const [editCatId, setEditCatId] = useState<string|null>(null);
  const [catForm, setCatForm] = useState({...EMPTY_CAT});
  const [savingCat, setSavingCat] = useState(false);
  const [deleteCatId, setDeleteCatId] = useState<string|null>(null);

  // Parça paneli
  const [partPanel, setPartPanel] = useState(false);
  const [editPartId, setEditPartId] = useState<string|null>(null);
  const [partForm, setPartForm] = useState({...EMPTY_PART});
  const [savingPart, setSavingPart] = useState(false);
  const [deletePartId, setDeletePartId] = useState<string|null>(null);
  const [catPanelError, setCatPanelError] = useState<string|null>(null);
  const [partPanelError, setPartPanelError] = useState<string|null>(null);
  const [deleteError, setDeleteError] = useState<string|null>(null);

  const fetchAll = async () => {
    setLoading(true);
    const [{ data: c }, { data: p }] = await Promise.all([
      supabase.from('spare_categories').select('*').order('sort_order'),
      supabase.from('spare_parts').select('*').order('sort_order'),
    ]);
    const newCats = (c as DbSpareCategory[]) ?? [];
    setCats(newCats);
    setParts((p as DbSparePart[]) ?? []);
    setSelectedCat(prev => {
      if (!prev) return newCats[0]?.key ?? '';
      return newCats.some(c => c.key === prev) ? prev : (newCats[0]?.key ?? '');
    });
    setLoading(false);
  };

  useEffect(() => { fetchAll(); }, []);

  // ── Kategori CRUD ──
  const scf = <K extends keyof typeof EMPTY_CAT>(k:K,v:typeof EMPTY_CAT[K]) => setCatForm(f=>({...f,[k]:v}));
  const openAddCat = () => { setEditCatId(null); setCatForm({...EMPTY_CAT}); setCatPanelError(null); setCatPanel(true); };
  const openEditCat = (c:DbSpareCategory) => {
    setEditCatId(c.id);
    setCatForm({key:c.key,title:c.title,short:c.short??'',cover:c.cover??'',badge:c.badge??'',accent:c.accent??'',sort_order:c.sort_order});
    setCatPanelError(null);
    setCatPanel(true);
  };
  const saveCat = async () => {
    if(!catForm.title||!catForm.key) return;
    setSavingCat(true);
    setCatPanelError(null);
    const payload = {key:catForm.key,title:catForm.title,short:catForm.short||null,cover:catForm.cover||null,badge:catForm.badge||null,accent:catForm.accent||null,sort_order:catForm.sort_order};
    const { error } = editCatId
      ? await supabase.from('spare_categories').update(payload).eq('id',editCatId)
      : await supabase.from('spare_categories').insert(payload);
    if(error) { setCatPanelError(error.message); setSavingCat(false); return; }
    setSavingCat(false); setCatPanel(false); fetchAll();
  };
  const confirmDeleteCat = async () => {
    if(!deleteCatId) return;
    const { error } = await supabase.from('spare_categories').delete().eq('id',deleteCatId);
    if(error) { setDeleteError(error.message); setDeleteCatId(null); return; }
    setDeleteCatId(null); fetchAll();
  };

  // ── Parça CRUD ──
  const spf = <K extends keyof typeof EMPTY_PART>(k:K,v:typeof EMPTY_PART[K]) => setPartForm(f=>({...f,[k]:v}));
  const openAddPart = () => { setEditPartId(null); setPartForm({...EMPTY_PART, category_key:selectedCat}); setPartPanelError(null); setPartPanel(true); };
  const openEditPart = (p:DbSparePart) => {
    setEditPartId(p.id);
    setPartForm({key:p.key,category_key:p.category_key,title:p.title,description:p.description??'',image:p.image||getLocalImage(p.key),gallery:p.gallery??[],sort_order:p.sort_order});
    setPartPanelError(null);
    setPartPanel(true);
  };
  const savePart = async () => {
    if(!partForm.title||!partForm.key||!partForm.category_key) return;
    setSavingPart(true);
    setPartPanelError(null);
    const payload = {key:partForm.key,category_key:partForm.category_key,title:partForm.title,description:partForm.description||null,image:partForm.image||null,gallery:partForm.gallery,sort_order:partForm.sort_order};
    const { error } = editPartId
      ? await supabase.from('spare_parts').update(payload).eq('id',editPartId)
      : await supabase.from('spare_parts').insert(payload);
    if(error) { setPartPanelError(error.message); setSavingPart(false); return; }
    setSavingPart(false); setPartPanel(false); fetchAll();
  };
  const confirmDeletePart = async () => {
    if(!deletePartId) return;
    const { error } = await supabase.from('spare_parts').delete().eq('id',deletePartId);
    if(error) { setDeleteError(error.message); setDeletePartId(null); return; }
    setDeletePartId(null); fetchAll();
  };

  const visibleParts = parts.filter(p => {
    const inCat = !search && (!selectedCat || p.category_key === selectedCat);
    const inSearch = !!search && (p.title.toLowerCase().includes(search.toLowerCase()) || p.key.toLowerCase().includes(search.toLowerCase()));
    return inCat || inSearch;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-900">Yedek Parçalar</h1>
        <p className="text-slate-500 text-sm font-medium mt-0.5">{cats.length} kategori · {parts.length} parça</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="w-8 h-8 border-4 border-slate-200 border-t-brand-pink rounded-full animate-spin"/>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5">

          {/* Sol — Kategoriler */}
          <div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <span className="font-black text-slate-900 text-sm">Kategoriler</span>
                <button onClick={openAddCat} className="w-7 h-7 flex items-center justify-center text-white rounded-lg transition-colors" style={{background:'#f83567'}}>
                  <Plus size={15}/>
                </button>
              </div>
              <nav className="p-2 space-y-0.5">
                {cats.length === 0 ? (
                  <p className="px-3 py-4 text-xs text-slate-400 text-center font-medium">Kategori yok</p>
                ) : cats.map(cat => (
                  <div key={cat.key}
                    onClick={() => setSelectedCat(cat.key)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer group transition-all ${selectedCat === cat.key ? 'text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                    style={selectedCat === cat.key ? {background:'#2c3876'} : undefined}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {cat.cover
                        ? <img src={cat.cover} alt="" className="w-8 h-8 object-cover rounded-lg flex-shrink-0"/>
                        : <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0"><FolderOpen size={14} className="text-slate-400"/></div>
                      }
                      <span className="text-sm font-semibold truncate">{cat.title}</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={e => e.stopPropagation()}>
                      <button onClick={() => openEditCat(cat)} className={`p-1 rounded-lg transition-colors ${selectedCat===cat.key ? 'hover:bg-white/20 text-white/80' : 'hover:bg-slate-100 text-slate-400'}`}>
                        <Pencil size={13}/>
                      </button>
                      <button onClick={() => setDeleteCatId(cat.id)} className={`p-1 rounded-lg transition-colors ${selectedCat===cat.key ? 'hover:bg-white/20 text-white/80' : 'hover:bg-red-50 text-slate-400 hover:text-red-500'}`}>
                        <Trash2 size={13}/>
                      </button>
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Sağ — Seçili kategorinin parçaları */}
          <div>
            {selectedCat ? (
              <>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="relative flex-1 min-w-48">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                    <input
                      type="text"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      placeholder="Tüm parçalarda ara..."
                      className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand-pink transition-colors"
                    />
                  </div>
                  <button onClick={openAddPart} className="flex items-center gap-2 px-3 py-2 text-white rounded-xl font-bold text-sm transition-colors" style={{background:'#f83567'}}>
                    <Plus size={14}/> Yeni Parça
                  </button>
                </div>
                <p className="text-xs font-medium text-slate-400 mb-2">{visibleParts.length} parça{search && ' bulundu'}</p>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  {visibleParts.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 font-medium">Bu kategoride henüz parça yok.</div>
                  ) : (
                    <table className="w-full">
                      <thead><tr className="border-b border-slate-100">
                        <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3">Parça</th>
                        <th className="text-left text-xs font-black text-slate-400 uppercase tracking-wider px-4 py-3 hidden md:table-cell">Key</th>
                        <th className="px-4 py-3 w-20"></th>
                      </tr></thead>
                      <tbody className="divide-y divide-slate-50">
                        {visibleParts.map(p => (
                          <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                {(() => { const src = p.image || getLocalImage(p.key); return src
                                  ? <img src={src} alt="" className="w-10 h-10 object-contain rounded-lg border border-slate-100 flex-shrink-0 bg-white p-0.5"/>
                                  : <div className="w-10 h-10 rounded-lg bg-slate-100 flex-shrink-0"/>;
                                })()}
                                <div className="min-w-0">
                                  <p className="text-sm font-bold text-slate-900 truncate">{p.title}</p>
                                  {p.description && <p className="text-xs text-slate-400 truncate max-w-xs">{p.description}</p>}
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 hidden md:table-cell">
                              <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">{p.key}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-1.5 justify-end">
                                <button onClick={() => openEditPart(p)} className="p-1.5 text-slate-400 hover:text-brand-pink hover:bg-pink-50 rounded-lg transition-colors"><Pencil size={15}/></button>
                                <button onClick={() => setDeletePartId(p.id)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={15}/></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center text-slate-400 font-medium">
                Sol taraftan bir kategori seçin.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Kategori paneli */}
      {catPanel && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={() => setCatPanel(false)}/>
          <div className="w-full max-w-md bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0">
              <h2 className="font-black text-slate-900 text-lg">{editCatId ? 'Kategori Düzenle' : 'Yeni Kategori'}</h2>
              <button onClick={() => setCatPanel(false)} className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg"><X size={18}/></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              <div><label className="label">Başlık *</label><input className="input" value={catForm.title} onChange={e => scf('title',e.target.value)} placeholder="Trambolin Yayları"/></div>
              <div>
                <label className="label">Key *</label>
                <input className="input font-mono text-sm" value={catForm.key} onChange={e => scf('key',e.target.value)} placeholder="trambolin-yaylari"/>
              </div>
              <div><label className="label">Kısa Açıklama</label><textarea className="input resize-none" rows={2} value={catForm.short} onChange={e => scf('short',e.target.value)}/></div>
              <div><label className="label">Kapak Görseli</label><ImageUpload value={catForm.cover} onChange={v => scf('cover',v)} folder="spare-categories"/></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="label">Badge CSS</label><input className="input text-xs font-mono" value={catForm.badge} onChange={e => scf('badge',e.target.value)}/></div>
                <div><label className="label">Accent CSS</label><input className="input text-xs font-mono" value={catForm.accent} onChange={e => scf('accent',e.target.value)}/></div>
              </div>
              <div><label className="label">Sıra</label><input type="number" className="input w-24" value={catForm.sort_order} onChange={e => scf('sort_order',Number(e.target.value))}/></div>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex-shrink-0">
              {catPanelError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{catPanelError}</p>}
              <div className="flex gap-3">
                <button onClick={() => setCatPanel(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm text-slate-600 hover:bg-slate-50">İptal</button>
                <button onClick={saveCat} disabled={savingCat||!catForm.title||!catForm.key} className="flex-1 py-2.5 rounded-xl text-white font-bold text-sm disabled:opacity-50" style={{background:'#f83567'}}>
                  {savingCat ? 'Kaydediliyor...' : editCatId ? 'Güncelle' : 'Kaydet'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Parça paneli */}
      {partPanel && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={() => setPartPanel(false)}/>
          <div className="w-full max-w-md bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0">
              <h2 className="font-black text-slate-900 text-lg">{editPartId ? 'Parça Düzenle' : 'Yeni Parça'}</h2>
              <button onClick={() => setPartPanel(false)} className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg"><X size={18}/></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              <div>
                <label className="label">Kategori *</label>
                <div className="relative">
                  <select className="input appearance-none pr-8" value={partForm.category_key} onChange={e => spf('category_key',e.target.value)}>
                    <option value="">Seçin</option>
                    {cats.map(c => <option key={c.key} value={c.key}>{c.title}</option>)}
                  </select>
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"/>
                </div>
              </div>
              <div><label className="label">Parça Adı *</label><input className="input" value={partForm.title} onChange={e => spf('title',e.target.value)} placeholder="8,5 cm Kare Kesit Yay"/></div>
              <div><label className="label">Key *</label><input className="input font-mono text-sm" value={partForm.key} onChange={e => spf('key',e.target.value)} placeholder="yay-85-kare"/></div>
              <div><label className="label">Açıklama</label><textarea className="input resize-none" rows={3} value={partForm.description} onChange={e => spf('description',e.target.value)}/></div>
              <div>
                <label className="label">Ana Görsel</label>
                <ImageUpload value={partForm.image} onChange={v => spf('image',v)}/>
                <input
                  className="input mt-2 text-xs font-mono"
                  placeholder="/images/yedek-parca/dosya.png"
                  value={partForm.image}
                  onChange={e => spf('image', e.target.value)}
                />
              </div>
              <div><label className="label">Galeri Görselleri</label><MultiImageUpload values={partForm.gallery} onChange={v => spf('gallery',v)}/></div>
              <div><label className="label">Sıra</label><input type="number" className="input w-24" value={partForm.sort_order} onChange={e => spf('sort_order',Number(e.target.value))}/></div>
            </div>
            <div className="px-6 py-4 border-t border-slate-100 flex-shrink-0">
              {partPanelError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{partPanelError}</p>}
              <div className="flex gap-3">
                <button onClick={() => setPartPanel(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm text-slate-600 hover:bg-slate-50">İptal</button>
                <button onClick={savePart} disabled={savingPart||!partForm.title||!partForm.key||!partForm.category_key} className="flex-1 py-2.5 rounded-xl text-white font-bold text-sm disabled:opacity-50" style={{background:'#f83567'}}>
                  {savingPart ? 'Kaydediliyor...' : editPartId ? 'Güncelle' : 'Kaydet'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sil onayı — Kategori */}
      {deleteCatId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDeleteCatId(null)}/>
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm">
            <h3 className="font-black text-slate-900 text-lg mb-2">Kategoriyi sil</h3>
            <p className="text-slate-500 text-sm mb-5">Bu işlem geri alınamaz. Bağlı parçalar etkilenebilir.</p>
            {deleteError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{deleteError}</p>}
            <div className="flex gap-3">
              <button onClick={() => { setDeleteCatId(null); setDeleteError(null); }} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm hover:bg-slate-50">İptal</button>
              <button onClick={confirmDeleteCat} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm">Sil</button>
            </div>
          </div>
        </div>
      )}

      {/* Sil onayı — Parça */}
      {deletePartId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDeletePartId(null)}/>
          <div className="relative bg-white rounded-2xl p-6 shadow-2xl w-full max-w-sm">
            <h3 className="font-black text-slate-900 text-lg mb-2">Parçayı sil</h3>
            <p className="text-slate-500 text-sm mb-5">Bu işlem geri alınamaz.</p>
            {deleteError && <p className="text-red-600 text-xs font-semibold mb-3 bg-red-50 px-3 py-2 rounded-xl">{deleteError}</p>}
            <div className="flex gap-3">
              <button onClick={() => { setDeletePartId(null); setDeleteError(null); }} className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-sm hover:bg-slate-50">İptal</button>
              <button onClick={confirmDeletePart} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold text-sm">Sil</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpareParts;
