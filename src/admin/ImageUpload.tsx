import { useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Upload, X } from 'lucide-react';

// Tek görsel yükleme — Supabase `images` deposuna yükler, genel adresi döndürür
const ImageUpload = ({ value, onChange, folder }: {
  value: string; onChange: (url: string) => void; folder: string;
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    setUploadError('');
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${file.name.split('.').pop()}`;
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
            <img src={value} alt="" className="w-24 h-16 object-cover rounded-xl border border-slate-200 bg-white" />
            <button type="button" onClick={() => onChange('')} className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full hidden group-hover:flex items-center justify-center"><X size={10}/></button>
          </div>
        )}
        <label className={`cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${uploading ? 'bg-slate-100 text-slate-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
          <Upload size={14}/>{uploading ? 'Yükleniyor...' : value ? 'Görseli Değiştir' : 'Görsel Yükle'}
          <input ref={ref} type="file" accept="image/*" onChange={upload} className="hidden" disabled={uploading}/>
        </label>
      </div>
      {uploadError && <p className="text-xs text-red-500 font-semibold">{uploadError}</p>}
    </div>
  );
};

export default ImageUpload;
