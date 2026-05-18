// Yedek parça kategorileri — YedekParcalar sayfası ve global arama tarafından kullanılır

export type SparePart = {
  key: string;
  title: string;
  desc: string;
  image?: string;
  gallery?: string[];
};

export type PartCategory = {
  key: string;
  title: string;
  short: string;
  cover: string;
  badge: string;
  accent: string;
  items: SparePart[];
};

export const spareCategories: PartCategory[] = [
  {
    key: 'trambolin-yaylari',
    title: 'Trambolin Yayları',
    short: '8,5 cm — 28 cm arası galvaniz çelik yaylar. Yuvarlak ve kare kesit seçenekleri.',
    cover: '/images/yedek-parca/yay-25cm.png',
    badge: 'bg-neon-pink text-white',
    accent: 'text-neon-pink',
    items: [
      { key: 'yay-85-kare',  title: '8,5 cm Kare Kesit Yay',     desc: 'Çocuk parkları ve junior trambolinler için kısa, sert yay. Galvaniz çelik, paslanmaz.', image: '/images/yedek-parca/yay-85cm-kare.png' },
      { key: 'yay-15',        title: '15 cm Yuvarlak Yay',       desc: 'Junior ve mid-size trambolinler için orta sertlikte standart yay.',                       image: '/images/yedek-parca/yay-15cm.png' },
      { key: 'yay-15-kare',  title: '15 cm Kare Kesit Yay',     desc: 'Yüksek esneklik dayanımlı kare kesit, pro işletmeler için tercih edilir.',              image: '/images/yedek-parca/yay-15cm-kare.png' },
      { key: 'yay-18',        title: '18 cm Yuvarlak Yay',       desc: 'Olimpik trambolinler için orta-uzun seri standart yay.',                                  image: '/images/yedek-parca/yay-18cm.png' },
      { key: 'yay-20-kare',  title: '20 cm Kare Kesit Yay',     desc: 'Olimpik ticari trambolinler için kare kesit yüksek dayanımlı yay.',                      image: '/images/yedek-parca/yay-20cm-kare.png' },
      { key: 'yay-25',        title: '25 cm Yuvarlak Yay',       desc: 'Profesyonel olimpik trambolinler için uzun seri esnek yay.',                              image: '/images/yedek-parca/yay-25cm.png' },
      { key: 'yay-28-kare',  title: '28 cm Kare Kesit Yay',     desc: 'En uzun seri kare kesit yay — ağır kullanım olimpik sahalar için.',                       image: '/images/yedek-parca/yay-28cm-kare.png' },
      { key: 'yay-cekme',     title: 'Trambolin Yayı Çekme Aparatı', desc: 'Yay takıp çıkartmak için kaymaz kavramalı pratik T-aparat. Kurulum ve servis seti.' },
    ],
  },
  {
    key: 'koruma-padi',
    title: 'Trambolin Koruma Padleri',
    short: 'Yay ve çerçeve bölgesi PVC kaplı yüksek yoğunluk sünger pedler. Tüm ölçülere özel.',
    cover: '/images/yedek-parca/pad-real-1.jpg',
    badge: 'bg-brand-green text-white',
    accent: 'text-brand-green',
    items: [
      { key: 'pad-yuvarlak', title: 'Yuvarlak Trambolin Padi',     desc: 'Yuvarlak tip ev / junior trambolinler için A1 PVC kaplı UV dayanımlı pad.',                         image: '/images/yedek-parca/pad-real-1.jpg', gallery: ['/images/yedek-parca/pad-real-1.jpg', '/images/yedek-parca/pad-1.jpg'] },
      { key: 'pad-olimpik',  title: 'Olimpik Trambolin Padi',      desc: 'Olimpik (kare/dikdörtgen) ticari trambolinlere özel kesim, çift dikiş kenar koruma.',              image: '/images/yedek-parca/pad-real-2.jpg', gallery: ['/images/yedek-parca/pad-real-2.jpg', '/images/yedek-parca/pad-2.jpg'] },
      { key: 'pad-zemin',    title: 'Zemin Trambolin Padi',        desc: 'Zemin tip trambolinler için ince kesit kalın sünger dolgu tek modül pad.',                          image: '/images/yedek-parca/pad-real-3.jpg', gallery: ['/images/yedek-parca/pad-real-3.jpg', '/images/yedek-parca/pad-3.jpg'] },
      { key: 'pad-mantar',   title: 'Mantar Profil Kenar Koruma',  desc: 'Tepe çubuğu / direk kapak süngeri — siyah PVC kaplı, kayar geçmeli.',                              image: '/images/yedek-parca/aksesuar-2.jpg' },
    ],
  },
  {
    key: 'koruma-filesi',
    title: 'Koruma Filesi, Ağ & Örme Zıplama Ağı',
    short: 'UV stabilizatörlü polietilen koruma fileleri ve örme zıplama ağı.',
    cover: '/images/yedek-parca/file-real-1.jpg',
    badge: 'bg-slate-900 text-white',
    accent: 'text-slate-900',
    items: [
      { key: 'file-4cm',      title: 'Koruma Filesi (4 cm Göz)',  desc: 'Trambolin etrafı için siyah örme polietilen, 4 cm göz aralıklı çocuk güvenli file.',  image: '/images/yedek-parca/file-detail-4cm.png' },
      { key: 'file-duz',      title: 'Düz Alan Koruma Filesi',     desc: 'Park alanları, sahalar ve etrafı çevirmek için düz dokuma file.',                       image: '/images/yedek-parca/file-detail-duz.png' },
      { key: 'orme-ag',       title: 'Örme Zıplama Ağı',           desc: 'Trambolin sıçrama yüzeyi — yüksek mukavemet polipropilen örme, çift dikişli kenar.', image: '/images/yedek-parca/orme-ag.jpg' },
      { key: 'tirmanma-net',  title: 'Tırmanma & Park Filesi',     desc: 'Tırmanma kuleleri, oyun parkları ve macera parkurları için kalın örme file.',          image: '/images/yedek-parca/file-3.jpg' },
    ],
  },
  {
    key: 'salto-emniyet',
    title: 'Salto Trambolin Yedekleri',
    short: 'Salto bungee sistemleri için lastik, kemer, toka, harness ve salto halatı.',
    cover: '/images/yedek-parca/salto-matrax.png',
    badge: 'bg-brand-navy text-white',
    accent: 'text-brand-navy',
    items: [
      { key: 'salto-lastik',  title: 'Salto Lastik Takımı',        desc: 'Bungee salto sistemi için yüksek esneklik dayanımlı renkli lastik takımı.',           image: '/images/yedek-parca/salto-lastik.jpg' },
      { key: 'salto-halat',   title: 'Salto Halatı',                desc: 'Bungee salto için merkez halat + güvenlik klipsi. Çelik takviyeli dayanım.', image: '/images/yedek-parca/salto-halat-set.png' },
      { key: 'salto-kemer',   title: 'Salto Emniyet Kemeri',       desc: 'CE belgeli profesyonel emniyet kemeri — ayarlanabilir takım.',                          image: '/images/yedek-parca/kemer-1.png', gallery: ['/images/yedek-parca/kemer-1.png', '/images/yedek-parca/kemer-2.png'] },
      { key: 'salto-toka',    title: 'Salto Toka & Karabiner',     desc: 'Yük dayanımlı çelik toka ve karabin grubu. Yedek parça olarak temin edilir.',         image: '/images/yedek-parca/toka-1.png', gallery: ['/images/yedek-parca/toka-1.png', '/images/yedek-parca/toka-2.png'] },
    ],
  },
  {
    key: 'step-yedek',
    title: 'Trambolin Merdivenleri & Step Parçaları',
    short: 'Trambolin merdivenleri, step basamakları ve metal aksesuarlar.',
    cover: '/images/yedek-parca/step-real-1.jpg',
    badge: 'bg-brand-orange text-white',
    accent: 'text-brand-orange',
    items: [
      { key: 'merdiven',      title: 'Trambolin Merdiveni',        desc: 'Galvaniz çelik gövde + kaymaz basamak. Junior ve olimpik trambolinler için yedek.', image: '/images/yedek-parca/merdiven-ayak.png' },
      { key: 'step-basamak',  title: 'Step Basamak',                desc: 'Çift kaplama metal step basamak. Kauçuk yüzey, kaymaz tasarım.',                       image: '/images/yedek-parca/step-1.jpg' },
      { key: 'step-kaucuk',   title: 'Kauçuk Profil Yedek',         desc: 'Step kenar koruma kauçuk profili — UV dayanımlı siyah seri.',                          image: '/images/yedek-parca/step-2.jpg' },
      { key: 'step-aksesuar', title: 'Step Bağlantı Aksesuarları',  desc: 'Vidalar, somunlar, dirsekler — step montaj kit yedeği.',                                image: '/images/yedek-parca/step-3.jpg' },
    ],
  },
  {
    key: 'yedek-sungerler',
    title: 'Yedek Süngerler',
    short: 'Sünger havuzları için B-s1 sınıfı yanmaz dolgu ve küp süngerler.',
    cover: '/images/yedek-parca/sunger-10cm.png',
    badge: 'bg-brand-orange text-white',
    accent: 'text-brand-orange',
    items: [
      { key: 'sunger-8',     title: '8 cm Yedek Sünger',           desc: 'Standart sünger havuzu yedek dolgu — 8 cm kalınlık, antibakteriyel kaplı.',          image: '/images/yedek-parca/sunger-8cm.png' },
      { key: 'sunger-10',    title: '10 cm Yedek Sünger',          desc: 'Büyük havuzlar için 10 cm kalınlık dolgu sünger — yangın geciktirici sınıf.',       image: '/images/yedek-parca/sunger-10cm.png' },
      { key: 'sunger-kup',   title: 'Sünger Havuzu Küp Süngerleri', desc: 'Kübik kesim 20×20×20 cm sünger küpler — sünger havuzu malzemesi.', image: '/images/yedek-parca/sunger-kup-grup.png' },
    ],
  },
  {
    key: 'trambolin-aksesuar',
    title: 'Trambolin Aksesuarları',
    short: 'Branda kılıfı, boru köpükleri, çift kelepçe, ayak stoperi ve plastik aparatlar.',
    cover: '/images/yedek-parca/aksesuar-2.jpg',
    badge: 'bg-brand-pink text-white',
    accent: 'text-brand-pink',
    items: [
      { key: 'branda-kilif', title: 'Trambolin Branda Kılıfı',      desc: 'Tüm ölçü trambolin için A1 PVC dış mekan koruma kılıfı — UV ve yağmur dayanımlı.', image: '/images/yedek-parca/branda-kilif.jpg' },
      { key: 'boru-kopuk',   title: 'Trambolin Boru Köpükleri',    desc: 'Direk koruma siyah eva köpük — kayar geçmeli, çift kat dolgu.', image: '/images/yedek-parca/boru-kopuk.png' },
      { key: 'cift-kelepce', title: 'Çift Kelepçe',                 desc: 'Trambolin çerçeve birleşim çift kelepçesi — galvaniz çelik, vidalı.' },
      { key: 'ayak-stoperi', title: 'Yuvarlak Trambolin Ayak Stoperi', desc: 'Yuvarlak trambolin ayak ucu kauçuk stoperi — kaymaz, taban koruyucu.', image: '/images/yedek-parca/ayak-stoperi.png' },
      { key: 'plastik-apar', title: 'Plastik Aparatlar',            desc: 'Çeşitli plastik bağlantı, kapak ve montaj aparatları — orijinal yedek parçalar.', image: '/images/yedek-parca/plastik-apar-grup.png' },
    ],
  },
  {
    key: 'roller-makara',
    title: 'Roller Kaydırak Makaraları',
    short: 'Roller kaydırak ve macera parkuru için yedek silindir makaralar.',
    cover: '/images/products/roller-kaydirak-soft-play.jpg',
    badge: 'bg-neon-blue text-white',
    accent: 'text-neon-blue',
    items: [
      { key: 'makara-pe',    title: 'Polietilen Roller Makara',     desc: 'Standart roller kaydırak için yüksek dayanımlı PE silindir makara.', image: '/images/yedek-parca/makara-pe-grup.png' },
      { key: 'makara-bilye', title: 'Bilyeli Roller Makara',        desc: 'Sessiz çalışan bilyeli sistem makara — premium kaydıraklar için.', image: '/images/yedek-parca/makara-bilye.png' },
      { key: 'makara-aks',   title: 'Roller Aks & Yatak',           desc: 'Çelik aks mili + bilyeli yatak takımı — roller komple yedek.', image: '/images/yedek-parca/makara-aks.png' },
    ],
  },
  {
    key: 'akrobasi-park',
    title: 'Akrobasi & Park Parçaları',
    short: 'Salto havuzları, jimnastik ve macera parkurları için tay, halka, fırdöndü, halat.',
    cover: '/images/products/sunger-orman-hazinesi.jpeg',
    badge: 'bg-neon-pink text-white',
    accent: 'text-neon-pink',
    items: [
      { key: 'taylar',       title: 'Akrobasi Tayları',             desc: 'Salto ve akrobasi antrenmanı için yedek tay — sünger dolgu, kaymaz dış kaplama.' },
      { key: 'halkalar',     title: 'Akrobasi Halkaları',           desc: 'Asılı jimnastik halkası — paslanmaz çelik bağlantılı, kayışlı yedek seti.' },
      { key: 'firdondu',     title: 'Fırdöndü',                      desc: 'Salto bungee ve macera parkur halatları için yüksek mukavemet fırdöndü.', image: '/images/yedek-parca/firdondu.png' },
      { key: 'halat',        title: 'Park Halatı',                   desc: 'Macera parkurları, tırmanma duvarları ve tarzan halatları için 26 mm halat.' },
    ],
  },
  {
    key: 'tirmanma-tatami',
    title: 'Tırmanma Duvarı Tutacakları & Tatami',
    short: 'Tırmanma duvarı renkli tutacakları ve tatami kaplama malzemesi.',
    cover: '/images/products/tirmanma-duvari-soft-play-4.jpg',
    badge: 'bg-brand-green text-white',
    accent: 'text-brand-green',
    items: [
      { key: 'tutacaklar',   title: 'Tırmanma Duvarı Tutacakları', desc: 'Renkli plastik tırmanma tutacakları — vida + gömme bağlantılı, çocuk güvenli kenar.', image: '/images/yedek-parca/tutacak-grup.png' },
      { key: 'tatami',       title: 'Tatami Kaplama Malzemesi',     desc: 'Spor salonu / dojo / soft play için EVA tatami kaplama — 2 cm ve 4 cm seçenek.', image: '/images/yedek-parca/tatami-grup.png' },
    ],
  },
  {
    key: 'zemin-parca',
    title: 'Zemin Trambolin Parçaları',
    short: 'Zemin trambolinleri için kasa, çerçeve, file ve özel kesim parçalar.',
    cover: '/images/products/zemin-trambolin.jpg',
    badge: 'bg-brand-navy text-white',
    accent: 'text-brand-navy',
    items: [
      { key: 'zemin-kasa',   title: 'Zemin Kasa & Çerçeve',         desc: 'Yere gömme zemin trambolin için galvaniz çelik kasa modülleri.', image: '/images/yedek-parca/zemin-kasa.png' },
      { key: 'zemin-zip',    title: 'Zemin Zıplama Ağı',            desc: 'Zemin trambolin için özel kesim örme zıplama yüzeyi — yan yana modüler.', image: '/images/yedek-parca/zemin-zip.jpg' },
      { key: 'zemin-pad',    title: 'Zemin Pad Kesim',              desc: 'Zemin trambolin yay üstü pad kesim seti.', image: '/images/yedek-parca/zemin-pad.png' },
    ],
  },
];
