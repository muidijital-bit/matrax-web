import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Lock, Mail } from 'lucide-react';

const sections = [
  {
    title: '1. Veri Sorumlusu',
    body: `Matrax Oyun Grupları olarak; 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizin işlenmesine ilişkin usul ve esasları aşağıda bilgilerinize sunarız.`,
  },
  {
    title: '2. İşlenen Kişisel Veriler',
    body: `İletişim formu, telefon görüşmesi, e-posta yazışması ve sözleşme süreçleri kapsamında ad-soyad, telefon, e-posta, firma bilgisi, mesaj içeriği ve teslimat adresi gibi kimlik ve iletişim verileri işlenebilir.`,
  },
  {
    title: '3. Kişisel Verilerin İşlenme Amaçları',
    body: `Talep ve şikâyetlerin değerlendirilmesi, ürün/hizmet teklifi sunulması, sözleşme süreçlerinin yürütülmesi, satış sonrası destek, faturalandırma ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.`,
  },
  {
    title: '4. Kişisel Verilerin Aktarımı',
    body: `Kişisel verileriniz; yasal yükümlülüklerimiz çerçevesinde resmi kurum ve kuruluşlar ile hizmet aldığımız iş ortakları ve tedarikçilere, yalnızca işin gerektirdiği ölçüde ve KVKK md. 8-9 hükümleri uyarınca aktarılabilir.`,
  },
  {
    title: '5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi',
    body: `Veriler; web sitesi formları, telefon, e-posta ve fiziksel kanallar aracılığıyla; sözleşmenin kurulması/ifası, meşru menfaat ve açık rıza hukuki sebeplerine dayanılarak toplanır.`,
  },
  {
    title: '6. KVKK Madde 11 Kapsamındaki Haklarınız',
    body: `Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini talep etme, üçüncü kişilere yapılan aktarımları öğrenme ve zarara uğramanız hâlinde tazminat talep etme haklarına sahipsiniz.`,
  },
  {
    title: '7. Başvuru Yöntemi',
    body: `KVKK kapsamındaki başvurularınızı, kimliğinizi tespit edici belgelerle birlikte info@matraxoyungruplari.com adresine e-posta yoluyla veya İvedik Osb 1372 Sok. No. 33/2 Yenimahalle / Ankara adresine fiziki olarak iletebilirsiniz. Başvurularınız, talebin niteliğine göre en geç 30 gün içinde sonuçlandırılır.`,
  },
];

const Kvkk = () => (
  <div className="bg-slate-50">
    {/* Header */}
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full font-black uppercase tracking-wider text-[10px] border border-white/20 mb-5"
        >
          <ShieldCheck size={12} /> Kurumsal · KVKK
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          Kişisel Verilerin Korunması <span className="text-neon-pink">Aydınlatma Metni</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-white/75 font-bold max-w-2xl text-base md:text-lg leading-relaxed"
        >
          6698 sayılı Kanun kapsamında kişisel verilerinizi nasıl topladığımızı, işlediğimizi ve haklarınızı şeffaf biçimde açıklıyoruz.
        </motion.p>
      </div>
    </section>

    {/* Body */}
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-14">
      <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-sm p-6 md:p-12">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.05 }}
            className="mb-8 last:mb-0"
          >
            <h2 className="flex items-center gap-3 text-lg md:text-xl font-bold text-slate-900 mb-3">
              <span className="w-8 h-8 rounded-lg bg-neon-pink/10 text-neon-pink flex items-center justify-center flex-shrink-0">
                <FileText size={16} />
              </span>
              {s.title}
            </h2>
            <p className="text-slate-600 font-medium leading-relaxed">{s.body}</p>
          </motion.div>
        ))}

        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
          <span className="w-10 h-10 rounded-xl bg-neon-blue/10 text-neon-blue flex items-center justify-center flex-shrink-0">
            <Lock size={18} />
          </span>
          <div>
            <p className="font-black text-slate-900 mb-1">Sorularınız için</p>
            <a href="mailto:info@matraxoyungruplari.com" className="inline-flex items-center gap-2 text-neon-pink font-black hover:opacity-80">
              <Mail size={14} /> info@matraxoyungruplari.com
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Kvkk;
