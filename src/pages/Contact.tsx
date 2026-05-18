import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { usePageMeta } from '../lib/usePageMeta';

const contactInfo = [
  {
    icon: <Phone size={20} />,
    title: 'Telefon',
    lines: ['0850 123 45 67', '0212 000 00 00'],
    color: 'bg-neon-pink text-white',
  },
  {
    icon: <Mail size={20} />,
    title: 'E-posta',
    lines: ['info@matraxoyungruplari.com', 'satis@matraxoyungruplari.com'],
    color: 'bg-neon-blue text-white',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Adres',
    lines: ['Matrax Fabrika & Showroom', 'İstanbul, Türkiye'],
    color: 'bg-brand-green text-white',
  },
  {
    icon: <Clock size={20} />,
    title: 'Çalışma Saatleri',
    lines: ['Pzt – Cmt: 09:00 – 18:00', 'Pazar: Kapalı'],
    color: 'bg-neon-orange text-white',
  },
];

const Contact = () => {
  usePageMeta(
    'İletişim | Matrax Oyun Grupları',
    'Matrax Oyun Grupları ile iletişime geçin. Teklif almak, ürün sormak veya kurulum planlamak için bizi arayın, yazın.',
    'matrax iletişim, oyun grubu teklif, trambolin parkı fiyat teklif'
  );
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-brand-navy to-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.20),transparent_60%)]" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-teal/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start justify-center gap-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full font-bold uppercase tracking-wider text-xs border border-white/20"
          >
            <MessageCircle size={13} /> İletişim
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
            className="text-2xl md:text-3xl font-bold leading-tight"
          >
            Hadi <span className="text-neon-blue">Birlikte</span> Konuşalım
          </motion.h1>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-4 md:px-6 py-12 max-w-7xl mx-auto -mt-12 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i }}
              className="bg-white rounded-3xl p-6 border-2 border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${c.color} shadow-md`}>
                {c.icon}
              </div>
              <h3 className="font-black text-slate-800 mb-2 text-base">{c.title}</h3>
              {c.lines.map(line => (
                <p key={line} className="text-sm font-bold text-slate-500 leading-relaxed">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Form */}
          <div className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Bize Yazın</h2>
            <p className="text-slate-500 font-bold text-sm mb-8">En kısa sürede dönüş yapıyoruz.</p>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <CheckCircle size={36} className="text-neon-green" />
                </div>
                <h3 className="text-xl font-black text-slate-800">Mesajınız İletildi!</h3>
                <p className="text-slate-500 font-bold max-w-xs">En geç 1 iş günü içinde sizi arayacağız.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 text-neon-pink font-black hover:opacity-70 transition-opacity text-sm"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-wide">Ad Soyad *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-3 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-neon-pink border-2 border-transparent focus:border-neon-pink/20 transition-all text-sm"
                      placeholder="Adınız"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black text-slate-600 uppercase tracking-wide">Telefon *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="px-4 py-3 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-neon-pink border-2 border-transparent focus:border-neon-pink/20 transition-all text-sm"
                      placeholder="05xx xxx xx xx"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-wide">E-posta</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="px-4 py-3 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-neon-pink border-2 border-transparent focus:border-neon-pink/20 transition-all text-sm"
                    placeholder="ornek@mail.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-wide">Konu</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="px-4 py-3 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-neon-pink border-2 border-transparent focus:border-neon-pink/20 transition-all text-sm"
                  >
                    <option value="">Konu seçin...</option>
                    <option>Fiyat Teklifi</option>
                    <option>Ürün Bilgisi</option>
                    <option>Teknik Destek</option>
                    <option>Yedek Parça</option>
                    <option>Diğer</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black text-slate-600 uppercase tracking-wide">Mesajınız *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="px-4 py-3 bg-slate-50 rounded-2xl font-bold text-slate-700 outline-none focus:ring-2 focus:ring-neon-pink border-2 border-transparent focus:border-neon-pink/20 transition-all text-sm resize-none"
                    placeholder="Projeniz veya sorunuz hakkında bilgi verin..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={18} /> Mesaj Gönder
                </button>
              </form>
            )}
          </div>

          {/* Harita + telefon */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[2.5rem] overflow-hidden border-2 border-slate-100 shadow-sm flex-1 min-h-[340px]">
              <iframe
                title="Matrax Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.66910923344!2d28.731992!3d41.0082376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zSXN0YW5idWwsIFTDvHJraXll!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-neon-pink rounded-[2.5rem] p-8 text-white shadow-glow-pink relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-[40px] pointer-events-none" />
              <div className="relative z-10">
                <Phone size={28} className="mb-3" />
                <h3 className="text-xl font-bold mb-1">Hemen Arayın</h3>
                <p className="text-white/80 font-bold text-sm mb-4">Uzmanlarımız size en uygun çözümü sunar.</p>
                <a
                  href="tel:+908501234567"
                  className="inline-block bg-white text-neon-pink font-black px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-xl"
                >
                  0850 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
