// Auto-generated from MATRAX OYUN GRUPLARI catalog. Edit with care.

export type Product = {
  id: number;
  slug: string;
  name: string;
  code: string | null;
  category: string;
  categoryKey: string;
  badge: string;
  price: string;
  image: string;
  images: string[];
  desc: string;
  longDesc?: string;
  features?: string[];
  specs?: { label: string; value: string }[];
};

export const categories = [
  { key: 'trambolinler',        name: 'Trambolinler',                  color: 'from-brand-pink to-brand-orange',  image: '/images/galeri-yeni/galeri-3.jpg' },
  { key: 'soft-play',           name: 'Soft Play Oyuncakları',         color: 'from-brand-navy to-brand-green',   image: '/images/galeri-yeni/galeri-22.jpg' },
  { key: 'trambolin-parklari',  name: 'Trambolin Parkları',            color: 'from-brand-green to-brand-orange', image: '/images/galeri-yeni/galeri-1.jpg' },
  { key: 'soft-play-gruplari',  name: 'Soft Play Oyun Grupları',       color: 'from-brand-orange to-brand-pink',  image: '/images/galeri-yeni/galeri-12.jpg' },
  { key: 'havuzlar',            name: 'Top, Sünger & Kum Havuzları',   color: 'from-brand-pink to-brand-navy',    image: '/images/galeri-yeni/galeri-7.jpg' },
  { key: 'sisme-parklar',       name: 'Şişme Parklar',                 color: 'from-brand-navy to-brand-pink',    image: '/images/products/sisme-parklar-sisme-park1.jpg' },
  { key: 'kres-kafe',           name: 'Kreş & Kafe Serisi',            color: 'from-brand-orange to-brand-green', image: '/images/galeri-yeni/galeri-29.png' },
];

// Kategori bazlı badge ve renk haritası — ürün rozetleri ve aksanlar için tek kaynak
export const categoryBadge: Record<string, string> = {
  'trambolinler':       'bg-brand-pink text-white',
  'soft-play':          'bg-brand-navy text-white',
  'trambolin-parklari': 'bg-brand-green text-white',
  'soft-play-gruplari': 'bg-brand-orange text-white',
  'havuzlar':           'bg-brand-pink text-white',
  'sisme-parklar':      'bg-brand-navy text-white',
  'kres-kafe':          'bg-brand-green text-white',
};

export const categoryAccent: Record<string, string> = {
  'trambolinler':       'brand-pink',
  'soft-play':          'brand-navy',
  'trambolin-parklari': 'brand-green',
  'soft-play-gruplari': 'brand-orange',
  'havuzlar':           'brand-pink',
  'sisme-parklar':      'brand-navy',
  'kres-kafe':          'brand-green',
};

export const products: Product[] = [
  {
    "id": 1,
    "slug": "ticari-olimpik-trambolin-1-kisilik",
    "name": "Ticari Olimpik Trambolin — 1 Kişilik",
    "code": "MX-OLP-01",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-1-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-1-kisilik.png",
      "/images/products/ticari-olimpik-1-kisilik-2.png",
      "/images/products/ticari-olimpik-1-kisilik-hq-1.png",
      "/images/products/ticari-olimpik-1-kisilik-hq-2.png"
    ],
    "desc": "1 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-01"
      }
    ]
  },
  {
    "id": 2,
    "slug": "ticari-olimpik-trambolin-10-kisilik",
    "name": "Ticari Olimpik Trambolin — 10 Kişilik",
    "code": "MX-OLP-02",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-10-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-10-kisilik.png",
      "/images/products/ticari-olimpik-10-kisilik-2.png",
      "/images/products/saha-olimpik-10-lu-1.jpg",
      "/images/products/saha-olimpik-10-lu-2.jpg",
      "/images/products/saha-olimpik-10-lu-3.jpg",
      "/images/products/saha-olimpik-10-lu-4.jpg"
    ],
    "desc": "10 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-02"
      }
    ]
  },
  {
    "id": 3,
    "slug": "ticari-olimpik-trambolin-12-kisilik",
    "name": "Ticari Olimpik Trambolin — 12 Kişilik",
    "code": "MX-OLP-03",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-12-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-12-kisilik.png",
      "/images/products/ticari-olimpik-12-kisilik-2.png",
      "/images/products/ticari-olimpik-12-kisilik-3.png",
      "/images/products/ticari-olimpik-12-kisilik-4.png"
    ],
    "desc": "12 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-03"
      }
    ]
  },
  {
    "id": 4,
    "slug": "ticari-olimpik-trambolin-2-kisilik",
    "name": "Ticari Olimpik Trambolin — 2 Kişilik",
    "code": "MX-OLP-04",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-2-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-2-kisilik.png",
      "/images/products/ticari-olimpik-2-kisilik-2.png",
      "/images/products/saha-olimpik-2-li.jpg"
    ],
    "desc": "2 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-04"
      }
    ]
  },
  {
    "id": 5,
    "slug": "ticari-olimpik-trambolin-3-kisilik",
    "name": "Ticari Olimpik Trambolin — 3 Kişilik",
    "code": "MX-OLP-05",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-3-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-3-kisilik.png",
      "/images/products/ticari-olimpik-3-kisilik-2.png",
      "/images/products/ticari-olimpik-3-kisilik-3.png",
      "/images/products/saha-olimpik-3-lu.jpg"
    ],
    "desc": "3 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-05"
      }
    ]
  },
  {
    "id": 6,
    "slug": "ticari-olimpik-trambolin-4-kisilik",
    "name": "Ticari Olimpik Trambolin — 4 Kişilik",
    "code": "MX-OLP-06",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-4-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-4-kisilik.png",
      "/images/products/ticari-olimpik-4-kisilik-2.png",
      "/images/products/ticari-olimpik-4-kisilik-3.png",
      "/images/products/ticari-olimpik-4-kisilik-4.png",
      "/images/products/ticari-olimpik-4-kisilik-arka-2.png",
      "/images/products/ticari-olimpik-4-kisilik-arka-3.png",
      "/images/products/ticari-olimpik-4-kisilik-arka-4.png",
      "/images/products/ticari-olimpik-4-kisilik-arka-5.png",
      "/images/products/saha-olimpik-4-lu.jpg",
      "/images/products/saha-olimpik-4-lu-2.jpg"
    ],
    "desc": "4 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-06"
      }
    ]
  },
  {
    "id": 7,
    "slug": "ticari-olimpik-trambolin-4-kisilik-i-nce-uzun",
    "name": "Ticari Olimpik Trambolin — 4 Kişilik (İnce Uzun)",
    "code": "MX-OLP-07",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-4-kisilik-ince-uzun.png",
    "images": [
      "/images/products/ticari-olimpik-4-kisilik-ince-uzun.png",
      "/images/products/ticari-olimpik-4-kisilik-ince-uzun-2.png",
      "/images/products/ticari-olimpik-4-kisilik-ince-uzun-3.png",
      "/images/products/ticari-olimpik-4-kisilik-ince-uzun-4.png"
    ],
    "desc": "4 kişilik olimpik standart ölçü ticari trambolin. İnce ve uzun gövde tasarımı, dar koridorlar veya sıralı kullanım için idealdir. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-07"
      }
    ]
  },
  {
    "id": 8,
    "slug": "ticari-olimpik-trambolin-5-kisilik",
    "name": "Ticari Olimpik Trambolin — 5 Kişilik",
    "code": "MX-OLP-08",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-5-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-5-kisilik.png",
      "/images/products/ticari-olimpik-5-kisilik-2.png",
      "/images/products/ticari-olimpik-5-kisilik-3.png",
      "/images/products/ticari-olimpik-5-kisilik-4.png",
      "/images/products/ticari-olimpik-5-kisilik-arka-1.png",
      "/images/products/ticari-olimpik-5-kisilik-arka-2.png",
      "/images/products/ticari-olimpik-5-kisilik-arka-3.png"
    ],
    "desc": "5 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-08"
      }
    ]
  },
  {
    "id": 9,
    "slug": "ticari-olimpik-trambolin-6-kisilik",
    "name": "Ticari Olimpik Trambolin — 6 Kişilik",
    "code": "MX-OLP-09",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-6-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-6-kisilik.png",
      "/images/products/ticari-olimpik-6-kisilik-2.png",
      "/images/products/ticari-olimpik-6-kisilik-3.png",
      "/images/products/ticari-olimpik-6-kisilik-4.png",
      "/images/products/ticari-olimpik-6-kisilik-arka-1.png",
      "/images/products/ticari-olimpik-6-kisilik-arka-2.png",
      "/images/products/ticari-olimpik-6-kisilik-arka-3.png",
      "/images/products/saha-olimpik-6-li.jpg"
    ],
    "desc": "6 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-09"
      }
    ]
  },
  {
    "id": 10,
    "slug": "ticari-olimpik-trambolin-6-kisilik-i-nce-uzun",
    "name": "Ticari Olimpik Trambolin — 6 Kişilik (İnce Uzun)",
    "code": "MX-OLP-10",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-6-kisilik-ince-uzun.png",
    "images": [
      "/images/products/ticari-olimpik-6-kisilik-ince-uzun.png",
      "/images/products/ticari-olimpik-6-kisilik-ince-uzun-2.png",
      "/images/products/ticari-olimpik-6-kisilik-ince-uzun-3.png",
      "/images/products/ticari-olimpik-6-kisilik-ince-uzun-arka-1.png",
      "/images/products/ticari-olimpik-6-kisilik-ince-uzun-arka-2.png"
    ],
    "desc": "6 kişilik olimpik standart ölçü ticari trambolin. İnce ve uzun gövde tasarımı, dar koridorlar veya sıralı kullanım için idealdir. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-10"
      }
    ]
  },
  {
    "id": 11,
    "slug": "ticari-olimpik-trambolin-8-kisilik",
    "name": "Ticari Olimpik Trambolin — 8 Kişilik",
    "code": "MX-OLP-11",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-olimpik-8-kisilik.png",
    "images": [
      "/images/products/ticari-olimpik-8-kisilik.png",
      "/images/products/ticari-olimpik-8-kisilik-2.png",
      "/images/products/ticari-olimpik-8-kisilik-3.png",
      "/images/products/ticari-olimpik-8-kisilik-4.png",
      "/images/products/ticari-olimpik-8-kisilik-arka-1.png",
      "/images/products/ticari-olimpik-8-kisilik-arka-2.png",
      "/images/products/saha-olimpik-8-li.png",
      "/images/products/saha-olimpik-8-li-2.jpg"
    ],
    "desc": "8 kişilik olimpik standart ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-OLP-11"
      }
    ]
  },
  {
    "id": 12,
    "slug": "ticari-junior-trambolin-1-kisilik",
    "name": "Ticari Junior Trambolin — 1 Kişilik",
    "code": "MX-JNR-01",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-1-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-1-kisilik.png",
      "/images/products/ticari-junior-trambolin-1-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-1-kisilik-3.png"
    ],
    "desc": "1 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-01"
      }
    ]
  },
  {
    "id": 13,
    "slug": "ticari-junior-trambolin-10-kisilik",
    "name": "Ticari Junior Trambolin — 10 Kişilik",
    "code": "MX-JNR-02",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-10-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-10-kisilik.png",
      "/images/products/ticari-junior-trambolin-10-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-10-kisilik-3.png"
    ],
    "desc": "10 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-02"
      }
    ]
  },
  {
    "id": 14,
    "slug": "ticari-junior-trambolin-12-kisilik",
    "name": "Ticari Junior Trambolin — 12 Kişilik",
    "code": "MX-JNR-03",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-12-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-12-kisilik.png",
      "/images/products/ticari-junior-trambolin-12-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-12-kisilik-3.png"
    ],
    "desc": "12 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-03"
      }
    ]
  },
  {
    "id": 15,
    "slug": "ticari-junior-trambolin-2-kisilik",
    "name": "Ticari Junior Trambolin — 2 Kişilik",
    "code": "MX-JNR-04",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-2-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-2-kisilik.png",
      "/images/products/ticari-junior-trambolin-2-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-2-kisilik-3.png"
    ],
    "desc": "2 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-04"
      }
    ]
  },
  {
    "id": 16,
    "slug": "ticari-junior-trambolin-3-kisilik",
    "name": "Ticari Junior Trambolin — 3 Kişilik",
    "code": "MX-JNR-05",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-3-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-3-kisilik.png",
      "/images/products/ticari-junior-trambolin-3-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-3-kisilik-3.png"
    ],
    "desc": "3 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-05"
      }
    ]
  },
  {
    "id": 17,
    "slug": "ticari-junior-trambolin-4-kisilik",
    "name": "Ticari Junior Trambolin — 4 Kişilik",
    "code": "MX-JNR-06",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-4-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-4-kisilik.png",
      "/images/products/ticari-junior-trambolin-4-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-4-kisilik-3.png"
    ],
    "desc": "4 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-06"
      }
    ]
  },
  {
    "id": 18,
    "slug": "ticari-junior-trambolin-5-kisilik",
    "name": "Ticari Junior Trambolin — 5 Kişilik",
    "code": "MX-JNR-07",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-5-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-5-kisilik.png",
      "/images/products/ticari-junior-trambolin-5-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-5-kisilik-3.png"
    ],
    "desc": "5 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-07"
      }
    ]
  },
  {
    "id": 19,
    "slug": "ticari-junior-trambolin-6-kisilik",
    "name": "Ticari Junior Trambolin — 6 Kişilik",
    "code": "MX-JNR-08",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-6-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-6-kisilik.png",
      "/images/products/ticari-junior-trambolin-6-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-6-kisilik-3.png"
    ],
    "desc": "6 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-08"
      }
    ]
  },
  {
    "id": 20,
    "slug": "ticari-junior-trambolin-8-kisilik",
    "name": "Ticari Junior Trambolin — 8 Kişilik",
    "code": "MX-JNR-09",
    "category": "Trambolinler",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/ticari-junior-trambolin-8-kisilik.png",
    "images": [
      "/images/products/ticari-junior-trambolin-8-kisilik.png",
      "/images/products/ticari-junior-trambolin-8-kisilik-2.png",
      "/images/products/ticari-junior-trambolin-8-kisilik-3.png"
    ],
    "desc": "8 kişilik 4-10 yaş aralığına özel junior ölçü ticari trambolin. Galvanizli çelik iskelet, 6 mm çift kaplamalı yaylar ve A-1 kalite UV dayanımlı PVC pedi ile profesyonel işletmelerde yıllarca dayanır. EN-1176 ve EN-913 sertifikalarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Galvanizli Çelik İskelet (Paslanmaz)",
      "6 mm Çelik Yay — Çift Galvaniz Kaplama",
      "A-1 Kalite UV Dayanımlı PVC Yay Pedi",
      "Mantar Profil Kenar Koruması",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "4+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "İskelet",
        "value": "Galvanizli Çelik"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-JNR-09"
      }
    ]
  },
  {
    "id": 21,
    "slug": "donengec-soft-play-karusel",
    "name": "Dönengeç (Soft Play Karusel)",
    "code": "MX-SPO-01",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/donengec.png",
    "images": [
      "/images/products/donengec.png",
      "/images/products/donengec-2.jpg",
      "/images/products/donengec-3.png",
      "/images/products/donengec-4.jpg"
    ],
    "desc": "Profesyonel işletmeler ve oyun merkezleri için tasarlanmış dönengeç modülü. Yangın geciktirici sünger dolgu, antibakteriyel & yıkanabilir PVC kaplama ve yumuşak köşe yapısıyla 2-12 yaş çocuklara güvenli bir oyun deneyimi sunar. Mevcut soft play gruplarınıza modüler olarak entegre edilebilir.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
      "Antibakteriyel & Yıkanabilir PVC Kaplama",
      "Yumuşak Köşe & Kenar Tasarımı",
      "Renk Garantili UV Stabilizatörlü Malzeme",
      "Modüler — Birleştirilebilir"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Dolgu",
        "value": "Yangın Geciktirici Sünger"
      },
      {
        "label": "Kaplama",
        "value": "Antibakteriyel PVC"
      },
      {
        "label": "Model",
        "value": "MX-SPO-01"
      }
    ]
  },
  {
    "id": 22,
    "slug": "hava-labirenti-soft-play",
    "name": "Hava Labirenti (Soft Play)",
    "code": "MX-SPO-02",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/hava-labirenti-soft-play.jpg",
    "images": [
      "/images/products/hava-labirenti-soft-play.jpg",
      "/images/products/hava-labirenti-soft-play-2.png",
      "/images/products/hava-labirenti-soft-play-3.jpg",
      "/images/products/hava-labirenti-soft-play-4.jpg"
    ],
    "desc": "Profesyonel işletmeler ve oyun merkezleri için tasarlanmış hava labirenti (soft play) modülü. Yangın geciktirici sünger dolgu, antibakteriyel & yıkanabilir PVC kaplama ve yumuşak köşe yapısıyla 2-12 yaş çocuklara güvenli bir oyun deneyimi sunar. Mevcut soft play gruplarınıza modüler olarak entegre edilebilir.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
      "Antibakteriyel & Yıkanabilir PVC Kaplama",
      "Yumuşak Köşe & Kenar Tasarımı",
      "Renk Garantili UV Stabilizatörlü Malzeme",
      "Modüler — Birleştirilebilir"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Dolgu",
        "value": "Yangın Geciktirici Sünger"
      },
      {
        "label": "Kaplama",
        "value": "Antibakteriyel PVC"
      },
      {
        "label": "Model",
        "value": "MX-SPO-02"
      }
    ]
  },
  {
    "id": 23,
    "slug": "palmiye-soft-play",
    "name": "Palmiye (Soft Play)",
    "code": "MX-SPO-03",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/palmiye-soft-play.png",
    "images": [
      "/images/products/palmiye-soft-play.png",
      "/images/products/palmiye-soft-play-2.jpg",
      "/images/products/palmiye-soft-play-3.jpg",
      "/images/products/palmiye-soft-play-4.jpg"
    ],
    "desc": "Profesyonel işletmeler ve oyun merkezleri için tasarlanmış palmiye (soft play) modülü. Yangın geciktirici sünger dolgu, antibakteriyel & yıkanabilir PVC kaplama ve yumuşak köşe yapısıyla 2-12 yaş çocuklara güvenli bir oyun deneyimi sunar. Mevcut soft play gruplarınıza modüler olarak entegre edilebilir.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
      "Antibakteriyel & Yıkanabilir PVC Kaplama",
      "Yumuşak Köşe & Kenar Tasarımı",
      "Renk Garantili UV Stabilizatörlü Malzeme",
      "Modüler — Birleştirilebilir"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Dolgu",
        "value": "Yangın Geciktirici Sünger"
      },
      {
        "label": "Kaplama",
        "value": "Antibakteriyel PVC"
      },
      {
        "label": "Model",
        "value": "MX-SPO-03"
      }
    ]
  },
  {
    "id": 24,
    "slug": "roller-kaydirak-soft-play",
    "name": "Roller Kaydırak (Soft Play)",
    "code": "MX-SPO-04",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/roller-kaydirak-soft-play.jpg",
    "images": [
      "/images/products/roller-kaydirak-soft-play.jpg",
      "/images/products/roller-kaydirak-soft-play-2.png",
      "/images/products/roller-kaydirak-soft-play-3.jpg",
      "/images/products/roller-kaydirak-soft-play-4.jpg",
      "/images/parklar/roller-top-havuzu-trambolin.jpg"
    ],
    "desc": "Profesyonel işletmeler ve oyun merkezleri için tasarlanmış roller kaydırak (soft play) modülü. Yangın geciktirici sünger dolgu, antibakteriyel & yıkanabilir PVC kaplama ve yumuşak köşe yapısıyla 2-12 yaş çocuklara güvenli bir oyun deneyimi sunar. Mevcut soft play gruplarınıza modüler olarak entegre edilebilir.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
      "Antibakteriyel & Yıkanabilir PVC Kaplama",
      "Yumuşak Köşe & Kenar Tasarımı",
      "Renk Garantili UV Stabilizatörlü Malzeme",
      "Modüler — Birleştirilebilir"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Dolgu",
        "value": "Yangın Geciktirici Sünger"
      },
      {
        "label": "Kaplama",
        "value": "Antibakteriyel PVC"
      },
      {
        "label": "Model",
        "value": "MX-SPO-04"
      }
    ]
  },
  {
    "id": 25,
    "slug": "sunger-oyun-gruplari",
    "name": "Sünger Oyun Grupları",
    "code": "MX-SPO-05",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-oyun-gruplari.jpg",
    "images": [
      "/images/products/sunger-oyun-gruplari.jpg",
      "/images/products/sunger-oyun-gruplari-2.jpg",
      "/images/products/sunger-oyun-gruplari-3.jpg",
      "/images/products/sunger-oyun-gruplari-4.jpg"
    ],
    "desc": "Profesyonel işletmeler ve oyun merkezleri için tasarlanmış sünger oyun gruplari modülü. Yangın geciktirici sünger dolgu, antibakteriyel & yıkanabilir PVC kaplama ve yumuşak köşe yapısıyla 2-12 yaş çocuklara güvenli bir oyun deneyimi sunar. Mevcut soft play gruplarınıza modüler olarak entegre edilebilir.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
      "Antibakteriyel & Yıkanabilir PVC Kaplama",
      "Yumuşak Köşe & Kenar Tasarımı",
      "Renk Garantili UV Stabilizatörlü Malzeme",
      "Modüler — Birleştirilebilir"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Dolgu",
        "value": "Yangın Geciktirici Sünger"
      },
      {
        "label": "Kaplama",
        "value": "Antibakteriyel PVC"
      },
      {
        "label": "Model",
        "value": "MX-SPO-05"
      }
    ]
  },
  {
    "id": 26,
    "slug": "sunger-havuzu-tirmanma-duvari-soft-play",
    "name": "Sünger Havuzu & Tırmanma Duvarı (Soft Play)",
    "code": "MX-SPO-06",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-havuzu-tirmanma-duvari-soft-play.jpg",
    "images": [
      "/images/products/sunger-havuzu-tirmanma-duvari-soft-play.jpg",
      "/images/products/sunger-havuzu-tirmanma-duvari-soft-play-2.jpg",
      "/images/products/sunger-havuzu-tirmanma-duvari-soft-play-3.jpg",
      "/images/products/sunger-havuzu-tirmanma-duvari-soft-play-4.jpg"
    ],
    "desc": "Profesyonel işletmeler ve oyun merkezleri için tasarlanmış sünger havuzu & tırmanma duvarı (soft play) modülü. Yangın geciktirici sünger dolgu, antibakteriyel & yıkanabilir PVC kaplama ve yumuşak köşe yapısıyla 2-12 yaş çocuklara güvenli bir oyun deneyimi sunar. Mevcut soft play gruplarınıza modüler olarak entegre edilebilir.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
      "Antibakteriyel & Yıkanabilir PVC Kaplama",
      "Yumuşak Köşe & Kenar Tasarımı",
      "Renk Garantili UV Stabilizatörlü Malzeme",
      "Modüler — Birleştirilebilir"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Dolgu",
        "value": "Yangın Geciktirici Sünger"
      },
      {
        "label": "Kaplama",
        "value": "Antibakteriyel PVC"
      },
      {
        "label": "Model",
        "value": "MX-SPO-06"
      }
    ]
  },
  {
    "id": 27,
    "slug": "standart-top-havuzu",
    "name": "Standart Top Havuzu",
    "code": "MX-HAV-01",
    "category": "Top, Sünger & Kum Havuzları",
    "categoryKey": "havuzlar",
    "badge": "bg-brand-orange text-white",
    "price": "Fiyat İste",
    "image": "/images/products/top-havuzlari.jpg",
    "images": [
      "/images/products/top-havuzlari.jpg",
      "/images/products/top-havuzlari-2.jpg",
      "/images/products/top-havuzlari-3.jpg",
      "/images/products/top-havuzlari-4.jpg"
    ],
    "desc": "Profesyonel işletme yoğunluğu için tasarlanmış top havuzu. 8 cm antibakteriyel TSE onaylı toplar, yıkanabilir UV dayanımlı PVC yüzey ve modüler kenar paneller ile kreş, AVM ve oyun merkezlerinde yıllarca dayanır.",
    "features": [
      "8 cm Yumuşak Top — Antibakteriyel & TSE Onaylı",
      "Yangın Geciktirici Sünger Bloklar (Sünger Havuzu)",
      "Yıkanabilir & UV Dayanımlı PVC Yüzey",
      "Modüler — İstenen Ölçüye Üretim",
      "Yumuşak Düşüş Yüzeyi — Çocuk Güvenliği"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "1+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / TSE"
      },
      {
        "label": "Top Çapı",
        "value": "8 cm"
      },
      {
        "label": "Üretim",
        "value": "Ölçüye Özel"
      },
      {
        "label": "Model",
        "value": "MX-HAV-01"
      }
    ]
  },
  {
    "id": 28,
    "slug": "tirmanma-duvari-soft-play",
    "name": "Tırmanma Duvarı (Soft Play)",
    "code": "MX-SPO-07",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/tirmanma-duvari-soft-play-4.jpg",
    "images": [
      "/images/products/tirmanma-duvari-soft-play-4.jpg",
      "/images/products/tirmanma-duvari-soft-play-3.jpg"
    ],
    "desc": "Profesyonel işletmeler ve oyun merkezleri için tasarlanmış tırmanma duvarı (soft play) modülü. Yangın geciktirici sünger dolgu, antibakteriyel & yıkanabilir PVC kaplama ve yumuşak köşe yapısıyla 2-12 yaş çocuklara güvenli bir oyun deneyimi sunar. Mevcut soft play gruplarınıza modüler olarak entegre edilebilir.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
      "Antibakteriyel & Yıkanabilir PVC Kaplama",
      "Yumuşak Köşe & Kenar Tasarımı",
      "Renk Garantili UV Stabilizatörlü Malzeme",
      "Modüler — Birleştirilebilir"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Dolgu",
        "value": "Yangın Geciktirici Sünger"
      },
      {
        "label": "Kaplama",
        "value": "Antibakteriyel PVC"
      },
      {
        "label": "Model",
        "value": "MX-SPO-07"
      }
    ]
  },
  {
    "id": 29,
    "slug": "zipline-soft-play",
    "name": "Zipline (Soft Play)",
    "code": "MX-SPO-08",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/zipline-soft-play.jpg",
    "images": [
      "/images/products/zipline-soft-play.jpg",
      "/images/products/zipline-soft-play-2.jpg",
      "/images/products/zipline-soft-play-3.jpg",
      "/images/products/zipline-soft-play-4.jpg"
    ],
    "desc": "Profesyonel işletmeler ve oyun merkezleri için tasarlanmış zipline (soft play) modülü. Yangın geciktirici sünger dolgu, antibakteriyel & yıkanabilir PVC kaplama ve yumuşak köşe yapısıyla 2-12 yaş çocuklara güvenli bir oyun deneyimi sunar. Mevcut soft play gruplarınıza modüler olarak entegre edilebilir.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
      "Antibakteriyel & Yıkanabilir PVC Kaplama",
      "Yumuşak Köşe & Kenar Tasarımı",
      "Renk Garantili UV Stabilizatörlü Malzeme",
      "Modüler — Birleştirilebilir"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Dolgu",
        "value": "Yangın Geciktirici Sünger"
      },
      {
        "label": "Kaplama",
        "value": "Antibakteriyel PVC"
      },
      {
        "label": "Model",
        "value": "MX-SPO-08"
      }
    ]
  },
  {
    "id": 30,
    "slug": "dinamik-sehir-mx-dis-9900",
    "name": "Dinamik Şehir",
    "code": "MX-DIS-9900",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/dinamik-sehir-mx-dis-9900.jpg",
    "images": [
      "/images/products/dinamik-sehir-mx-dis-9900.jpg",
      "/images/products/dinamik-sehir-mx-dis-9900-2.jpg",
      "/images/products/dinamik-sehir-mx-dis-9900-3.jpg",
      "/images/parklar/park-top-havuzlu.png",
      "/images/parklar/park-tirmanma-duvarli.png",
      "/images/parklar/park-5.png"
    ],
    "desc": "Mini Metropol Konsepti: Dev kaydırak kuleleri, geniş trambolin sahaları ve merkezi engel parkurlarını tek bir devasa yapıda birleştiren, çocuklara özel tasarlanmış bir \"eğlence şehri\" projesidir.",
    "longDesc": "Matrax Dinamik Şehir\n\nÜrün Adı: Matrax Dinamik Şehir\n\nÜrün Kodu: MX-DIS-9900\n\nMatrax Dinamik Şehir sadece bir trambolin parkı değil, içerisinde tırmanma duvarlarından ninja parkurlarına, devasa kaydıraklardan şişme yataklara (air bag) kadar sayısız aktiviteyi barındıran tam kapsamlı bir Eğlence ve Macera Merkezidir. Büyüklüğü ve eşsiz aktivite çeşitliliğiyle bölgenin en büyük cazibe merkezi olmaya aday bu model, her yaş grubuna hitap ederek işletmenize maksimum kullanıcı sirkülasyonu sağlar.\n\nMini Metropol Konsepti: Dev kaydırak kuleleri, geniş trambolin sahaları ve merkezi engel parkurlarını tek bir devasa yapıda birleştiren, çocuklara özel tasarlanmış bir \"eğlence şehri\" projesidir.\n\nMerkezi Macera Meydanı: Kırmızı kolonlarla desteklenen orta kafes bölümü; denge köprüleri, tırmanma ipleri ve sünger havuzu geçişleri ile çocukların koordinasyon ve strateji becerilerini geliştirir.\n\nYüksek İrtifa ve Adrenalin Hattı: Parkurun arka kısmında yükselen ikili dev kaydırak ünitesi ve tırmanma kulesi, çocuklara dikey eksende heyecan dolu bir keşif imkanı sunar.\n\nProfesyonel Akrobasi Bölgeleri: Farklı zorluk seviyelerine sahip renkli zıplama matları ve basketbol potaları, hem eğlenceyi hem de temel spor disiplinini bir arada sunar.\n\nÜst Düzey Şehir Güvenliği: Tüm istasyonları çevreleyen yüksek dayanımlı siyah koruma ağları ve darbe emici bariyerler, uluslararası güvenlik standartlarında kesintisiz bir oyun deneyimi sağlar.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-DIS-9900"
      }
    ]
  },
  {
    "id": 31,
    "slug": "smac-ve-ziplama-arenasi-mx-sza-8500",
    "name": "Smaç ve Zıplama Arenası",
    "code": "MX-SZA-8500",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/smac-ve-ziplama-arenasi-mx-sza-8500.png",
    "images": [
      "/images/products/smac-ve-ziplama-arenasi-mx-sza-8500.png",
      "/images/products/smac-ve-ziplama-arenasi-mx-sza-8500-2.png",
      "/images/parklar/park-4-basket.png"
    ],
    "desc": "Çoklu Sıçrama Sahası: On adet yatay mat ve arkada yer alan beş adet eğimli trambolin duvarı ile çocuklara geniş bir akrobasi alanı sunar. İkili Basketbol İstasyonu: Arka panelde bulunan çift basketbol potası sayesinde aynı anda iki çocuğun smaç denemeleri yapmasına ve rekabetçi oyunlar oynamasına imkan tanır.",
    "longDesc": "Matrax Smaç ve Zıplama Arenası\n\nÜrün Adı: Matrax Smaç ve Zıplama Arenası\n\nÜrün Kodu: MX-SZA-8500\n\nMatrax Smaç ve Zıplama Arenası, dinamik yapısı ve çok yönlü aktivite imkanlarıyla çocukların ve gençlerin vazgeçilmez oyun alanı olmaya adaydır. Toplamda 15 adet bağımsız zıplama alanı, entegre basketbol potaları ve güvenli sünger havuzu ile sınırlı alanlarda maksimum eğlence sunmak için tasarlanmıştır.\n\nÇoklu Sıçrama Sahası: On adet yatay mat ve arkada yer alan beş adet eğimli trambolin duvarı ile çocuklara geniş bir akrobasi alanı sunar.\n\nİkili Basketbol İstasyonu: Arka panelde bulunan çift basketbol potası sayesinde aynı anda iki çocuğun smaç denemeleri yapmasına ve rekabetçi oyunlar oynamasına imkan tanır.\n\nGüvenli Sünger İniş Bölgesi: Trambolinlerin bir köşesinde yer alan entegre sünger havuzu, yüksek zıplamalardan sonra yumuşak ve emniyetli bir iniş alanı sağlar.\n\nMavi Kafes Emniyet Kuşağı: Parkuru çepeçevre saran yüksek mukavemetli mavi renkli koruma fileleri ve gökkuşağı renkli basamakları ile hem estetik hem de güvenli bir tasarım sunar.\n\nKullanım Alanları: Butik eğlence merkezleri, otellerin çocuk kulüpleri ve okul spor salonları için ideal, yüksek kapasiteli ve modüler bir ünitedir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-SZA-8500"
      }
    ]
  },
  {
    "id": 32,
    "slug": "uzay-cagi-eglence-gezegeni-mx-uceg-9500",
    "name": "Uzay Çağı Eğlence Gezegeni",
    "code": "MX-UCEG-9500",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/uzay-cagi-eglence-gezegeni-mx-uceg-9500.jpg",
    "images": [
      "/images/products/uzay-cagi-eglence-gezegeni-mx-uceg-9500.jpg",
      "/images/products/uzay-cagi-eglence-gezegeni-mx-uceg-9500-2.jpg",
      "/images/products/uzay-cagi-eglence-gezegeni-mx-uceg-9500-3.jpg",
      "/images/products/uzay-cagi-eglence-gezegeni-mx-uceg-9500-4.jpg"
    ],
    "desc": "Sonsuz Hareket Evreni: Genişletilmiş çoklu trambolin sahası, dik eğimli zıplama duvarları ve ikili profesyonel basketbol üniteleriyle çocuklara yerçekimine meydan okuma imkanı sunar.",
    "longDesc": "Matrax Uzay Çağı Eğlence Gezegeni\n\nÜrün Adı: Matrax Uzay Çağı Eğlence Gezegeni\n\nÜrün Kodu: MX-UCEG-9500\n\nMatrax Uzay Çağı Eğlence Gezegeni hem sporcuların performans ihtiyaçlarını hem de çocukların eğlence tutkusunu tek bir devasa yapıda birleştiren modelimizdir. Toplamda 24 farklı zıplama istasyonu, entegre basketbol potaları ve olimpik seviyedeki teknik detaylarıyla işletmenize sınıf atlatacak tam kapsamlı bir macera merkezidir.\n\nSonsuz Hareket Evreni: Genişletilmiş çoklu trambolin sahası, dik eğimli zıplama duvarları ve ikili profesyonel basketbol üniteleriyle çocuklara yerçekimine meydan okuma imkanı sunar.\n\nÇift Yönlü Macera Havuzları: Parkurun iki farklı noktasında bulunan derin sünger havuzları ve tırmanma duvarı entegrasyonu, güvenli inişler ve adrenalin dolu tırmanışlar için tasarlanmıştır.\n\nTematik Atmosfer: Duvarları çevreleyen derin uzay ve gezegen grafikleri, oyun alanını sıradan bir parktan çıkarıp çocukları bir galaksi keşfine davet eden tematik bir merkeze dönüştürür.\n\nTam Kapsamlı Güvenlik Ağı: Yüksek dayanımlı siyah kafes fileler ve tüm sert yüzeyleri örten darbe emici neon koruma bariyerleri ile uluslararası emniyet standartlarında (EN 1176) bir eğlence sunar.\n\nKullanım Alanları: Büyük ölçekli AVM eğlence merkezleri, tematik oyun salonları ve profesyonel çocuk aktivite kampüsleri için anahtar teslim en üst seviye projedir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-UCEG-9500"
      }
    ]
  },
  {
    "id": 33,
    "slug": "akrobasi-yuvasi-mx-ayu-8800",
    "name": "Akrobasi Yuvası",
    "code": "MX-AYU-8800",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/akrobasi-yuvasi-mx-ayu-8800.jpg",
    "images": [
      "/images/products/akrobasi-yuvasi-mx-ayu-8800.jpg",
      "/images/products/akrobasi-yuvasi-mx-ayu-8800-2.jpg"
    ],
    "desc": "360 Derece Hareket Özgürlüğü: Zıplama fileleri ve onları çevreleyen eğimli duvar trambolini ile çocuklara her yöne güvenle hareket etme ve akrobasi yeteneklerini geliştirme imkanı sunar.",
    "longDesc": "Matrax Akrobasi Yuvası\n\nÜrün Adı: Matrax Akrobasi Yuvası\n\nÜrün Kodu: MX-AYU-8800\n\nMatrax Akrobasi Yuvası, ticari eğlence merkezleri, oyun alanları ve trambolin parkları için tasarlanmış; zıplama keyfini, basketbol smaç aktivitesini ve sünger havuzu atlayışını tek bir güvenli şaside birleştiren çok yönlü bir modeldir. Canlı sarı koruma süngerleri ve sağlam yapısıyla alan verimliliğini zirveye taşıyan bu ünite, her yaş grubuna hitap ederek işletmenize maksimum kullanıcı trafiği sağlar.\n\n360 Derece Hareket Özgürlüğü: Zıplama fileleri ve onları çevreleyen eğimli duvar trambolini ile çocuklara her yöne güvenle hareket etme ve akrobasi yeteneklerini geliştirme imkanı sunar.\n\nMerkezi Güvenli İniş Odağı: Ünitenin kalbinde yer alan renkli sünger havuzu, yüksek enerjili atlayışlar ve serbest düşüşler için yumuşak ve emniyetli bir \"yuva\" görevi görür.\n\nEntegre Basketbol İstasyonu: Arka panelde yükselen profesyonel basketbol potası, zıplama aktivitesini sporla birleştirerek çocukların smaç heyecanını ve koordinasyon becerilerini artırır.\n\nYüksek Görüşlü Koruma Çerçevesi: Dayanıklı iskelet ve görüşü engellemeyen yüksek mukavemetli siyah fileler, ebeveynlere kesintisiz gözetim, çocuklara ise izole ve güvenli bir oyun alanı sağlar.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-AYU-8800"
      }
    ]
  },
  {
    "id": 34,
    "slug": "aksiyon-ussu-mx-aku-9050",
    "name": "Aksiyon Üssü",
    "code": "MX-AKU-9050",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/aksiyon-ussu-mx-aku-9050.jpg",
    "images": [
      "/images/products/aksiyon-ussu-mx-aku-9050.jpg",
      "/images/products/aksiyon-ussu-mx-aku-9050-2.jpg",
      "/images/products/aksiyon-ussu-mx-aku-9050-3.jpg"
    ],
    "desc": "Genişletilmiş Zıplama Sahası: Yatay matlar, eğimli trambolin duvarları ve ikili profesyonel basketbol ünitesini kapsayan devasa bir hareket alanı sunar. Entegre Engel Parkuru: Renkli basamaklar ve tırmanma modülleriyle zenginleştirilmiş, çocukların koordinasyon becerilerini test eden bir macera hattına sahiptir.",
    "longDesc": "Matrax Aksiyon Üssü\n\nÜrün Adı: Matrax Aksiyon Üssü\n\nÜrün Kodu: MX-AKU-9050\n\nMatrax Aksiyon Üssü: sadece bir trambolin parkı değil, içerisinde profesyonel basketbol smaç alanlarından interaktif top havuzlarına, macera kaydıraklarından beceri parkurlarına kadar sayısız aktiviteyi barındıran tam kapsamlı bir eğlence merkezidir. Sınırlı alanlarda maksimum aktivite çeşitliliği ve kullanıcı kapasitesi sunmak için tasarlanan bu model, her yaş grubuna hitap ederek işletmenize maksimum kullanıcı sirkülasyonu sağlar.\n\nGenişletilmiş Zıplama Sahası: Yatay matlar, eğimli trambolin duvarları ve ikili profesyonel basketbol ünitesini kapsayan devasa bir hareket alanı sunar.\n\nEntegre Engel Parkuru: Renkli basamaklar ve tırmanma modülleriyle zenginleştirilmiş, çocukların koordinasyon becerilerini test eden bir macera hattına sahiptir.\n\nDerin Sünger Havuzu: Güvenli inişler ve eğlenceli dalışlar için tasarlanmış, geniş hacimli ve yüksek emniyetli sünger havuzu alanı mevcuttur.\n\nAkıllı Tasarım Detayları: Ön kısımdaki entegre ayakkabılık rafları ve kontrollü giriş merdiveni ile alan içerisinde maksimum düzen ve kullanım kolaylığı sağlar.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-AKU-9050"
      }
    ]
  },
  {
    "id": 35,
    "slug": "dort-kose-macera-adasi-mx-dka-8100",
    "name": "Dört Köşe Macera Adası",
    "code": "MX-DKA-8100",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/dort-kose-macera-adasi-mx-dka-8100.png",
    "images": [
      "/images/products/dort-kose-macera-adasi-mx-dka-8100.png",
      "/images/products/dort-kose-macera-adasi-mx-dka-8100-2.jpg",
      "/images/products/dort-kose-macera-adasi-mx-dka-8100-3.png",
      "/images/products/dort-kose-macera-adasi-mx-dka-8100-4.jpg"
    ],
    "desc": "Dörtlü Zıplama İstasyonu: Bağımsız dört adet profesyonel trambolin sayesinde aynı anda birden fazla çocuğun birbirine engel olmadan güvenle eğlenmesini sağlar.",
    "longDesc": "Matrax Dört Köşe Macera Adası\n\nÜrün Adı: Matrax Dört Köşe Macera Adası\n\nÜrün Kodu: MX-DKA-8100\n\nMatrax Dört Köşe Macera Adası dört bağımsız profesyonel trambolin modülü ve merkezine konumlandırılmış dev sünger havuzu ile çocukların sınırlarını güvenle zorlamaları için tasarlanmıştır. Hem serbest zıplama hem de sünger havuzuna güvenli atlayış imkanı sunan bu model, işletmenize yüksek kapasiteli bir eğlence çözümü sunar.\n\nDörtlü Zıplama İstasyonu: Bağımsız dört adet profesyonel trambolin sayesinde aynı anda birden fazla çocuğun birbirine engel olmadan güvenle eğlenmesini sağlar.\n\nMerkezi Sünger Havuzu: Parkurun orta bölümünde yer alan geniş sünger havuzu, trambolinlerden yapılan atlayışlar için yumuşak ve yüksek emniyetli bir iniş alanı sunar.\n\nFonksiyonel Giriş ve Düzen: Sarı renkli güvenli basamakları ve yan paneldeki entegre eşya rafları ile kullanım kolaylığı ve alan düzeni bir arada sağlanır.\n\nYüksek Koruma Filesi: Parkuru çevreleyen mukavemetli kafes fileler ve darbe emici kenar pedleri ile en hareketli anlarda bile tam güvenlik sunar.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-DKA-8100"
      }
    ]
  },
  {
    "id": 36,
    "slug": "klasik-moduler-ziplama-alani-mx-cl-08",
    "name": "KLASİK – MODÜLER ZIPLAMA ALANI",
    "code": "MX-CL-08",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/klasik-moduler-ziplama-alani-mx-cl-08.jpg",
    "images": [
      "/images/products/klasik-moduler-ziplama-alani-mx-cl-08.jpg",
      "/images/products/klasik-moduler-ziplama-alani-mx-cl-08-2.jpg"
    ],
    "desc": "Teknik Özellikler ve Alan Analizi Classic Modüler Alan, kârlılığı maksimize etmek ve kullanıcı deneyimini zenginleştirmek için her metrekaresi özel olarak projelendirilmiş bir ünitedir.",
    "longDesc": "MATRAX CLASSIC – MODÜLER ZIPLAMA ALANI (MX-CL-08)\n\nMatrax Classic (MX-CL-08), ticari trambolin parkları, oyun alanları ve eğlence merkezleri için tasarlanmış, alan verimliliğini zirveye taşıyan modüler bir zıplama çözümüdür. Kompakt yapısı içinde çok sayıda zıplama yüzeyi ve farklı eğimler sunan bu model, hem çocuklar hem de gençler için güvenli, dinamik ve kesintisiz bir eğlence alanı oluşturur.\n\nTeknik Özellikler ve Alan Analizi\n\nClassic Modüler Alan, kârlılığı maksimize etmek ve kullanıcı deneyimini zenginleştirmek için her metrekaresi özel olarak projelendirilmiş bir ünitedir.\n\nModel: (MX-CL-08)\n\nGenişlik: 7.00 Metre\n\nBoy: 5.30 Metre\n\nToplam Alan: ~37.1 m²\n\nKapasite: Aynı anda 8-10 kullanıcı kapasitesi\n\nAna Bileşenler: Yatay Serbest Alanlar, Açılı Performans Alanları.\n\nTrambolin Sayısı Detaylı Analizi\n\nGörseller üzerinden yapılan teknik analiz ve sayıma göre, parkur farklı işlevlere sahip toplam 8 adet bağımsız zıplama yüzeyinden oluşmaktadır:\n\nTrambolin Tipi\n\nSayı\n\nÖzellikler\n\nKare Zemin Modülü (Ana Sahalar)\n\n4 Adet\n\nRenk kodlu (Gri ve Siyah) serbest zıplama ve akrobasi kareleri.\n\nAçılı Duvar Trambolini\n\n4 Adet\n\nYatay sahanın sonunda yer alan, duvara karşı zıplama ve takla atma imkanı sunan eğimli performans panelleri.\n\nTOPLAM ZIPlama ALANI\n\n8 Adet\n\nBağımsız ve entegre tüm zıplama ünitelerinin toplamı.\n\nÖne Çıkan Özellikler\n\nAlan Tasarrufu: 37 metrekare gibi kompakt bir alanda 8 bağımsız zıplama alanı sunarak dar alanlarda bile tam kapsamlı bir park deneyimi sağlar.\n\nDinamik Eğim Çeşitliliği: Yatay sahaların sonunda yer alan açılı trambolinler, kullanıcıların farklı hareketler deneyimlemesine ve akrobasi becerilerini geliştirmesine olanak tanır.\n\nCanlı Tasarım: Parkuru çevreleyen ve yüksek görünürlük sağlayan canlı yeşil, mavi ve sarı renkli darbe sönümleyici koruma süngerleri.\n\nDüzenli İşletme: Parkura entegre edilmiş 9 bölmeli özel ayakkabı rafı ünitesi ve güvenli merdiven yapısı ile alanın her zaman tertipli kalması sağlanır.\n\nAğır Hizmet Tipi Güvenlik: Statik boyalı ağır hizmet tipi çelik konstrüksiyon, yüksek yoğunluklu darbe emici sünger bariyerler ve yırtılmaya dayanıklı profesyonel koruma fileleri ile çevrelenmiştir.\n\nModüler Yapı: Kolay montaj ve demontaj imkanı sunan modüler şasi tasarımı, tesis içi değişikliklere ve sevkiyata uygunluk sağlar.\n\nEğlencenin Klasik Boyutu: Maksimum Güvenlik, Minimum Bakım!\n\nMatrax Classic (MX-CL-08), 8 bağımsız zıplama alanı ve kompakt yapısıyla işletmenizin marka değerini ve kullanıcı trafiğini zirveye taşır.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-CL-08"
      }
    ]
  },
  {
    "id": 37,
    "slug": "karma-beceri-istasyonu-mx-kbi-8300",
    "name": "Karma Beceri İstasyonu",
    "code": "MX-KBI-8300",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/karma-beceri-istasyonu-mx-kbi-8300.jpg",
    "images": [
      "/images/products/karma-beceri-istasyonu-mx-kbi-8300.jpg",
      "/images/products/karma-beceri-istasyonu-mx-kbi-8300-2.jpg",
      "/images/products/karma-beceri-istasyonu-mx-kbi-8300-3.jpg",
      "/images/products/karma-beceri-istasyonu-mx-kbi-8300-4.jpg"
    ],
    "desc": "Üçlü Aktivite Birleşimi: Profesyonel trambolin sahası, entegre basketbol potası, tırmanma duvarı ve geniş sünger havuzunu tek bir güvenli gövdede toplar. Dikey ve Yatay Hareket: Çocukların hem trambolinde zıplayarak kondisyon kazanmasını hem de tırmanma duvarı sayesinde koordinasyon becerilerini geliştirmesini sağlar.",
    "longDesc": "Matrax Karma Beceri İstasyonu\n\nÜrün Adı: Matrax Karma Beceri İstasyonu\n\nÜrün Kodu: MX-KBI-8300\n\nMatrax Karma Beceri İstasyonu çocukların ve gençlerin enerjilerini en verimli şekilde boşaltmaları için tasarlanmış profesyonel bir trambolin parkurudur. Üç farklı trambolin alanı ve güvenli sünger havuzu ile hem eğlenceyi hem de fiziksel gelişimi destekleyen bu model, işletmenize dinamizm katacak.\n\nÜçlü Aktivite Birleşimi: Profesyonel trambolin sahası, entegre basketbol potası, tırmanma duvarı ve geniş sünger havuzunu tek bir güvenli gövdede toplar.\n\nDikey ve Yatay Hareket: Çocukların hem trambolinde zıplayarak kondisyon kazanmasını hem de tırmanma duvarı sayesinde koordinasyon becerilerini geliştirmesini sağlar.\n\nYüksek Emniyetli Sünger Havuzu: Tırmanma duvarının ve trambolinin hemen önünde yer alan renkli sünger küpleri, serbest düşüşler ve oyunlar için darbe emici, güvenli bir iniş alanı oluşturur.\n\nŞık ve Görünür Koruma: Sağlam iskelet yapısı ve yüksek görüş sunan yüksek dayanımlı file ağları, hem modern bir görünüm sağlar hem de ebeveynlere kesintisiz gözetim imkanı verir.\n\nKullanım Alanları: Çocuk kafeleri, otellerin aktivite odaları ve butik oyun salonları gibi kısıtlı alanlarda maksimum eğlence çeşitliliği arayan işletmeler için ideal bir çözümdür.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-KBI-8300"
      }
    ]
  },
  {
    "id": 38,
    "slug": "karma-oyun-platformu-mx-kop-8550",
    "name": "Karma Oyun Platformu",
    "code": "MX-KOP-8550",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/karma-oyun-platformu-mx-kop-8550.jpg",
    "images": [
      "/images/products/karma-oyun-platformu-mx-kop-8550.jpg",
      "/images/products/karma-oyun-platformu-mx-kop-8550-2.jpg"
    ],
    "desc": "Bütünleşik Aktivite İstasyonları: İkili profesyonel zıplama trambolini, geniş tırmanma paneli ve ferah bir top havuzunu tek bir gövdede birleştiren tam kapsamlı bir oyun merkezidir.",
    "longDesc": "Matrax Karma Oyun Platformu\n\nÜrün Adı: Matrax Karma Oyun Platformu\n\nÜrün Kodu: MX-KOP-8550\n\nMatrax Karma Oyun Platformu çocukların tırmanma, zıplama ve serbest düşüş heyecanını tek bir güvenli platformda yaşayabilmeleri için tasarlanmıştır. Özellikle tırmanma duvarı ve trambolin kombinasyonu, çocukların kaba motor becerilerini ve özgüvenlerini geliştiren en etkili eğlence ünitelerimizden biridir.\n\nBütünleşik Aktivite İstasyonları: İkili profesyonel zıplama trambolini, geniş tırmanma paneli ve ferah bir top havuzunu tek bir gövdede birleştiren tam kapsamlı bir oyun merkezidir.\n\nKademeli Hareket Akışı: Yumuşak sünger basamaklar ve farklı seviyelerdeki platformlar arası geçişler sayesinde çocukların alan içerisinde bağımsız, akıcı ve güvenli keşif yapmasına olanak tanır.\n\nÇok Yönlü Gelişim Odağı: Tırmanma duvarı ile fiziksel dayanıklılığı, trambolin ile dengeyi ve top havuzu ile duyusal gelişimi aynı anda destekleyen hibrit bir yapıdır.\n\nYüksek Hijyen ve Güvenlik: Tüm sert yüzeyler kolay temizlenebilir, antibakteriyel ve darbe emici yüksek yoğunluklu sünger ile kaplanarak maksimum emniyet sağlanmıştır.\n\nKullanım Alanları: Çocuk kafeleri, kreşler ve butik eğlence merkezleri için metrekareyi en verimli şekilde kullanan, kurulumu kolay profesyonel bir çözümdür.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-KOP-8550"
      }
    ]
  },
  {
    "id": 39,
    "slug": "kasif-macera-istasyonu-mx-kms-8060",
    "name": "Kaşif Macera İstasyonu",
    "code": "MX-KMS-8060",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/kasif-macera-istasyonu-mx-kms-8060.jpg",
    "images": [
      "/images/products/kasif-macera-istasyonu-mx-kms-8060.jpg",
      "/images/products/kasif-macera-istasyonu-mx-kms-8060-2.jpg"
    ],
    "desc": "Entegre Aktivite Karması: İkili profesyonel trambolin alanı, tırmanma duvarı ve geniş sünger havuzunu tek bir güvenli kafes yapısında birleştirir. İnteraktif Oyun Bölümü: Parkur içerisindeki büyük denge topları ve zıplama matları üzerindeki hedef noktaları ile çocukların fiziksel etkileşimini artırır.",
    "longDesc": "Matrax Kaşif Macera İstasyonu\n\nÜrün Adı: Matrax Kaşif Macera İstasyonu\n\nÜrün Kodu: MX-KMS-8060\n\nMatrax Kaşif Macera İstasyonu sınırlı alanlarda maksimum aktivite çeşitliliği sunmak için tasarlanmış, tırmanma ve zıplama modüllerini birleştiren bir eğlence ünitesidir. Butik işletmeler, kreşler veya otellerin çocuk oyun alanları için ideal olan bu model, dayanıklı şasisi ve interaktif bileşenleri ile güvenli bir macera alanı oluşturur.\n\nEntegre Aktivite Karması: İkili profesyonel trambolin alanı, tırmanma duvarı ve geniş sünger havuzunu tek bir güvenli kafes yapısında birleştirir.\n\nİnteraktif Oyun Bölümü: Parkur içerisindeki büyük denge topları ve zıplama matları üzerindeki hedef noktaları ile çocukların fiziksel etkileşimini artırır.\n\nDüzenleyici Raf Sistemi: Ön kısımda bulunan entegre ayakkabı ve eşya rafları sayesinde kullanım alanında düzen sağlar ve giriş çıkışları kolaylaştırır.\n\nMaksimum Güvenlik Çerçevesi: Parkuru çepeçevre saran yüksek dayanımlı siyah çelik kafes fileler ve tüm sert yüzeyleri örten kalın darbe emici kenar pedleri ile tam koruma sağlar.\n\nKullanım Alanları: Çocuk kafeleri, anaokulları ve butik oyun alanları için kompakt ama çok fonksiyonlu profesyonel bir çözümdür.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-KMS-8060"
      }
    ]
  },
  {
    "id": 40,
    "slug": "mx-mega-2026-mega-eglence-kompleksi-mx-adv-58-unv",
    "name": "MX-MEGA-2026 MEGA EĞLENCE KOMPLEKSİ",
    "code": "MX-MEGA-2026",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/mx-mega-2026-mega-eglence-kompleksi-mx-adv-58-unv.jpg",
    "images": [
      "/images/products/mx-mega-2026-mega-eglence-kompleksi-mx-adv-58-unv.jpg",
      "/images/products/mx-mega-2026-mega-eglence-kompleksi-mx-adv-58-unv-2.jpg",
      "/images/products/mx-mega-2026-mega-eglence-kompleksi-mx-adv-58-unv-3.jpg"
    ],
    "desc": "Tek bir çatı altında ana trambolin parkurunu, profesyonel spor bölümlerini, interaktif oyun alanlarını ve yumuşak oyun (soft play) alanlarını birleştiren bu devasa tesis, her yaş grubuna hitap ederek işletmenize maksimum kullanıcı sirkülasyonu sağlar. Profesyonel Eğlence ve Trambolin Parkı projesidir.",
    "longDesc": "Tek bir çatı altında ana trambolin parkurunu, profesyonel spor bölümlerini, interaktif oyun alanlarını ve yumuşak oyun (soft play) alanlarını birleştiren bu devasa tesis, her yaş grubuna hitap ederek işletmenize maksimum kullanıcı sirkülasyonu sağlar.\n\nProfesyonel Eğlence ve Trambolin Parkı projesidir. İşte bu devasa alan için kısa bilgi:\n\nKapsamlı Aktivite Alanı: Serbest zıplama sahaları, sünger havuzları, tırmanma duvarları, basketbol potaları ve engel parkurlarından oluşan bir merkezdir.\n\nÇok Fonksiyonlu Bölümler: Görselde hem profesyonel sporculara yönelik yüksek zıplama alanları hem de çocuklar için güvenli eğlence bölgeleri bir arada tasarlanmıştır.\n\nKapasite ve Güvenlik: Aynı anda onlarca kişiye hizmet verebilecek genişlikte olup, tüm yüzeyler darbe emici güvenlik standartlarına uygun kaplanmıştır.\n\nKullanım Amacı: Büyük ölçekli AVM'ler, kapalı spor salonları ve tematik eğlence merkezleri için ideal bir anahtar teslim projedir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-MEGA-2026"
      }
    ]
  },
  {
    "id": 41,
    "slug": "matrax-cok-fonksiyonlu-macera-parkuru-mx-cfp-8090",
    "name": "Matrax Çok Fonksiyonlu Macera Parkuru",
    "code": "MX-CFP-8090",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/matrax-cok-fonksiyonlu-macera-parkuru-mx-cfp-8090.jpg",
    "images": [
      "/images/products/matrax-cok-fonksiyonlu-macera-parkuru-mx-cfp-8090.jpg",
      "/images/products/matrax-cok-fonksiyonlu-macera-parkuru-mx-cfp-8090-2.jpg",
      "/images/products/matrax-cok-fonksiyonlu-macera-parkuru-mx-cfp-8090-3.jpg"
    ],
    "desc": "Entegre Eğlence Sistemi: Trambolin alanı, geniş top havuzu, spiral kaydırak ve engel parkurlarını tek bir devasa yapıda birleştiren profesyonel bir projedir.",
    "longDesc": "Matrax Çok Fonksiyonlu Macera Parkuru\n\nÜrün Adı: Matrax Çok Fonksiyonlu Macera Parkuru\n\nÜrün Kodu: MX-CFP-8090\n\nMatrax Çok Fonksiyonlu Macera Parkuru ticari trambolin parkurlarının dinamizmini, çok katlı soft play oyun alanlarının zenginliğiyle birleştiren bir macera kompleksidir. Bu model, tek bir şasi içinde serbest zıplama alanlarından tırmanma kulelerine, top havuzlarından kaydıraklara kadar sayısız aktiviteyi barındırır. Kapsamlı yapısı sayesinde her yaş grubuna aynı anda hitap eder ve sınırlı alanlarda bile ticari kârlılığı maksimize eder.\n\nEntegre Eğlence Sistemi: Trambolin alanı, geniş top havuzu, spiral kaydırak ve engel parkurlarını tek bir devasa yapıda birleştiren profesyonel bir projedir.\n\nÇok Katlı Aktivite Alanı: Merdivenler ve tünellerle birbirine bağlanan farklı yüksekliklerdeki oyun platformları sayesinde çocukların keşfetme ve tırmanma becerilerini geliştirir.\n\nGeniş Kapasite ve Güvenlik: Aynı anda onlarca çocuğun güvenle oynamasına uygun, yüksek mukavemetli güvenlik fileleri ve kalın darbe emici sünger kaplamalarla donatılmış bir alandır.\n\nKullanım Alanları: AVM eğlence merkezleri, büyük ölçekli kreşler ve profesyonel kapalı oyun salonları için tasarlanmış anahtar teslim bir çözümdür.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-CFP-8090"
      }
    ]
  },
  {
    "id": 42,
    "slug": "matrax-dinamik-hareket-parkuru-mx-dhp-8050",
    "name": "Matrax Dinamik Hareket Parkuru",
    "code": "MX-DHP-8050",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/matrax-dinamik-hareket-parkuru-mx-dhp-8050.jpg",
    "images": [
      "/images/products/matrax-dinamik-hareket-parkuru-mx-dhp-8050.jpg",
      "/images/products/matrax-dinamik-hareket-parkuru-mx-dhp-8050-2.jpg"
    ],
    "desc": "Çok Boyutlu Hareket Alanı: Beş adet yatay zıplama alanı ve bir adet eğimli trambolin duvarı ile çocuklara sınırsız hareket özgürlüğü sunar. Entegre Spor İstasyonları: Parkur içerisindeki basketbol potası, tırmanma duvarı ve yumuşak sünger havuzu sayesinde oyun ve sporu birleştirerek motor becerileri geliştirir.",
    "longDesc": "Matrax Dinamik Hareket Parkuru\n\nÜrün Adı: Matrax Dinamik Hareket Parkuru\n\nÜrün Kodu: MX-DHP-8050\n\nMatrax Dinamik Hareket Parkuru, sınırlı alanlarda maksimum aktivite çeşitliliği sunmak için tasarlanmış, tırmanma ve zıplama modüllerini birleştiren bir eğlence ünitesidir. Butik işletmeler, kreşler veya otellerin çocuk oyun alanları için ideal olan bu model, dayanıklı şasisi ve interaktif bileşenleri ile güvenli bir macera alanı oluşturur.\n\nÇok Boyutlu Hareket Alanı: Beş adet yatay zıplama alanı ve bir adet eğimli trambolin duvarı ile çocuklara sınırsız hareket özgürlüğü sunar.\n\nEntegre Spor İstasyonları: Parkur içerisindeki basketbol potası, tırmanma duvarı ve yumuşak sünger havuzu sayesinde oyun ve sporu birleştirerek motor becerileri geliştirir.\n\nMaksimum Güvenlik Sistemi: Yüksek mukavemetli koruma fileleri ve tüm sert yüzeyleri kaplayan darbe emici özel pedler ile güvenli bir eğlence ortamı sağlar.\n\nErgonomik ve Modüler Yapı: Giriş basamakları ile kolay erişim sunan bu kompakt tasarım, eğlence merkezlerinden geniş oyun odalarına kadar her alana uyum sağlar.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-DHP-8050"
      }
    ]
  },
  {
    "id": 43,
    "slug": "matrax-hibrit-aktivite-parki",
    "name": "Matrax Hibrit Aktivite Parkı",
    "code": "MX-TPR-01",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/matrax-hibrit-aktivite-parki.jpg",
    "images": [
      "/images/products/matrax-hibrit-aktivite-parki.jpg",
      "/images/products/matrax-hibrit-aktivite-parki-2.jpg"
    ],
    "desc": "Trambolin parkı projesi: serbest zıplama sahaları, sünger havuzları, profesyonel zıplama bölgeleri ve eğlence modüllerinin entegre olduğu anahtar teslim ticari tesis. Mimari ve teknik çizim hizmetiyle birlikte teslim edilir, EN-1176 ve EN-913 sertifika standartlarına uygun olarak üretilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-TPR-01"
      }
    ]
  },
  {
    "id": 44,
    "slug": "mega-aksiyon-parki-mx-map-9800",
    "name": "Mega Aksiyon Parkı",
    "code": "MX-MAP-9800",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/mega-aksiyon-parki-mx-map-9800.png",
    "images": [
      "/images/products/mega-aksiyon-parki-mx-map-9800.png",
      "/images/products/mega-aksiyon-parki-mx-map-9800-2.png",
      "/images/products/mega-aksiyon-parki-mx-map-9800-3.png",
      "/images/parklar/park-olimpik.png",
      "/images/parklar/park-buyuk.png"
    ],
    "desc": "Çok Katmanlı Keşif Kulesi: Parkurun merkezinde yükselen, güvenlik ağlarıyla çevrili çok seviyeli kule yapısı; çocuklara farklı yüksekliklerde tırmanma ve keşif yapma imkanı sunar.",
    "longDesc": "Matrax Mega Aksiyon Parkı\n\nÜrün Adı: Matrax Mega Aksiyon Parkı\n\nÜrün Kodu: MX-MAP-9800\n\nMatrax Mega Aksiyon Parkı: Ticari trambolin parkurlarının dinamizmini, çok katlı soft play macera kulesinin zenginliği ve profesyonel beceri alanlarıyla birleştiren macera kompleksidir. Bu devasa tesis, tek bir şasi içinde serbest zıplama sahalarından profesyonel smaç parkurlarına, adrenalini yüksek macera kulesinden güvenli sünger havuzu atlayışlarına kadar sayısız aktiviteyi barındırır. Kapsamlı yapısı sayesinde her yaş grubuna aynı anda hitap eder ve sınırlı ticari alanlarda kârlılığı maksimize eder.\n\nÇok Katmanlı Keşif Kulesi: Parkurun merkezinde yükselen, güvenlik ağlarıyla çevrili çok seviyeli kule yapısı; çocuklara farklı yüksekliklerde tırmanma ve keşif yapma imkanı sunar.\n\nGenişletilmiş Sıçrama ve Basketbol Sahası: Aynı anda çok sayıda kullanıcının güvenle hareket edebileceği dev trambolin alanı, ikili profesyonel basketbol potası ile spor ve eğlenceyi birleştirir.\n\nEntegre Macera İstasyonları: Parkur içerisinde yer alan profesyonel tırmanma duvarı ve geniş sünger havuzu, yüksek enerjili hareketler için adrenalin dolu ve emniyetli bir bitiş noktası sağlar.\n\nÜst Düzey Güvenlik ve Mukavemet: Tüm üniteyi çevreleyen yüksek dayanımlı fileler ve darbe emici bariyerler, uluslararası güvenlik standartlarında bir deneyim sunar.\n\nKullanım Alanları: Büyük ölçekli AVM eğlence merkezleri, kapalı tematik parklar ve profesyonel aktivite kampüsleri için tasarlanmış büyük bir projedir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-MAP-9800"
      }
    ]
  },
  {
    "id": 45,
    "slug": "panoramik-macera-parki-mx-pmp-9100",
    "name": "Panoramik Macera Parkı",
    "code": "MX-PMP-9100",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/panoramik-macera-parki-mx-pmp-9100.jpg",
    "images": [
      "/images/products/panoramik-macera-parki-mx-pmp-9100.jpg",
      "/images/products/panoramik-macera-parki-mx-pmp-9100-2.jpg"
    ],
    "desc": "Hepsi Bir Arada Konsepti: Dev kaydırak ünitesi, çoklu trambolin sahası, tırmanma duvarı ve basketbol potalarını tek bir devasa kafes yapısında buluşturur.",
    "longDesc": "Matrax Panoramik Macera Parkı\n\nÜrün Adı: Matrax Panoramik Macera Parkı\n\nÜrün Kodu: MX-PMP-9100\n\nMatrax Panoramik Macera Parkı sadece bir trambolin parkı değil, içerisinde devasa kaydıraklardan sünger havuzlarına, basketbol sahalarından interaktif oyun alanlarına kadar sayısız aktiviteyi barındıran tam kapsamlı bir Eğlence ve Macera Merkezidir. Sınırları zorlayan boyutu ve eşsiz aktivite çeşitliliğiyle bölgenin en büyük cazibe merkezi olmaya aday bu model, her yaş grubuna hitap ederek işletmenize maksimum kullanıcı sirkülasyonu sağlar.\n\nHepsi Bir Arada Konsepti: Dev kaydırak ünitesi, çoklu trambolin sahası, tırmanma duvarı ve basketbol potalarını tek bir devasa kafes yapısında buluşturur.\n\nYüksek İrtifa Kaydırağı: Parkurun en dikkat çeken parçası olan geniş kırmızı kaydırak, güvenli tırmanma basamakları ve yumuşak iniş alanı ile adrenalin dolu bir deneyim sunar.\n\nProfesyonel Zıplama Alanları: Farklı zorluk seviyelerine sahip yatay ve eğimli trambolin matları ile çocukların ve gençlerin koordinasyon becerilerini geliştirir.\n\nMaksimum Çevresel Güvenlik: Tüm parkuru saran yüksek dayanımlı siyah çelik kafes fileler ve darbe emici sünger kaplamalarla donatılmış, uluslararası standartlarda bir oyun alanıdır.\n\nKullanım Alanları: AVM eğlence merkezleri ve büyük ölçekli kapalı tematik parklar için ideal, anahtar teslim bir cazibe merkezidir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-PMP-9100"
      }
    ]
  },
  {
    "id": 46,
    "slug": "uzun-menzil-akrobasi-hatti-mx-uma-9300",
    "name": "Uzun Menzil Akrobasi Hattı",
    "code": "MX-UMA-9300",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/uzun-menzil-akrobasi-hatti-mx-uma-9300.png",
    "images": [
      "/images/products/uzun-menzil-akrobasi-hatti-mx-uma-9300.png",
      "/images/products/uzun-menzil-akrobasi-hatti-mx-uma-9300-2.jpg"
    ],
    "desc": "Kesintisiz Zıplama Hattı: Uzatılmış ana trambolin matı ve dikey zıplama duvarı sayesinde kullanıcılara ardışık akrobasi hareketleri yapma imkanı tanır. Derin Sünger Bitiş Alanı: Parkurun sonunda yer alan geniş sünger havuzu, yüksek enerjili atlayışlar için güvenli ve yumuşak bir iniş bölgesi sağlar.",
    "longDesc": "Matrax Uzun Menzil Akrobasi Hattı\n\nÜrün Adı: Matrax Uzun Menzil Akrobasi Hattı\n\nÜrün Kodu: MX-UMA-9300\n\nMatrax Uzun Menzil Akrobasi Hattı profesyonel akrobasi atlayışları ve eğlenceli sünger havuzu deneyimini tek bir güvenli şaside birleştiren, alan verimliliği odaklı kompakt bir modüler ünitedir. Bu model, trambolin parkları, oyun alanları ve akrobasi eğitim merkezleri için ideal olup, dar alanlarda maksimum aktivite ve kullanıcı trafiği sunar.\n\nKesintisiz Zıplama Hattı: Uzatılmış ana trambolin matı ve dikey zıplama duvarı sayesinde kullanıcılara ardışık akrobasi hareketleri yapma imkanı tanır.\n\nDerin Sünger Bitiş Alanı: Parkurun sonunda yer alan geniş sünger havuzu, yüksek enerjili atlayışlar için güvenli ve yumuşak bir iniş bölgesi sağlar.\n\nKompakt ve Fonksiyonel Form: İnce yapısı sayesinde eğlence merkezlerindeki koridorları veya dar alanları maksimum verimle bir aktivite alanına dönüştürür.\n\nTam Çerçeve Emniyet Sistemi: Yüksek mukavemetli koruma ağları ve tüm metal iskeleti örten darbe emici kalın pedler ile tam güvenli bir deneyim sunar.\n\nKullanım Alanları: Trambolin parkları, spor salonları ve otel aktivite alanları için ideal bir \"hız ve çeviklik\" modülüdür.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-UMA-9300"
      }
    ]
  },
  {
    "id": 47,
    "slug": "yamac-sicrayisi-mx-yas-7950",
    "name": "Yamaç Sıçrayışı",
    "code": "MX-YAS-7950",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/yamac-sicrayisi-mx-yas-7950.jpg",
    "images": [
      "/images/products/yamac-sicrayisi-mx-yas-7950.jpg",
      "/images/products/yamac-sicrayisi-mx-yas-7950-2.png",
      "/images/products/yamac-sicrayisi-mx-yas-7950-3.jpg"
    ],
    "desc": "Eğimli Sıçrama Deneyimi: Yatay trambolinin devamındaki yukarı doğru uzanan yumuşak eğim, çocuklara hem tırmanma hem de açılı geri sekme imkanı sunarak hareket çeşitliliğini artırır.",
    "longDesc": "Matrax Yamaç Sıçrayışı\n\nÜrün Adı: Matrax Yamaç Sıçrayışı\n\nÜrün Kodu: MX-YAS-7950\n\nMatrax Yamaç Sıçrayışı geniş alanlar için özel olarak geliştirilmiş, dört bağımsız profesyonel zıplama modülüne sahip kapsamlı bir trambolin park sistemidir. Bu model, özellikle çocukların ve gençlerin birbirine engel olmadan, yüksek tempoda zıplayabileceği düzenli bir akış sunarak işletmenize modern bir dinamizm katar.\n\nEğimli Sıçrama Deneyimi: Yatay trambolinin devamındaki yukarı doğru uzanan yumuşak eğim, çocuklara hem tırmanma hem de açılı geri sekme imkanı sunarak hareket çeşitliliğini artırır.\n\nDüzenleyici Giriş Modülü: Üniteye entegre edilmiş 9 bölmeli eşya rafı; ayakkabı ve kişisel eşyaların karışmasını önleyerek oyun alanında tam bir düzen sağlar.\n\nYüksek Görüşlü Emniyet Çerçevesi: Dayanıklı koruma fileleri sayesinde ebeveynler çocukları her açıdan izleyebilirken, tüm iskelet darbe emici kalın koruma pedleriyle donatılmıştır.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-YAS-7950"
      }
    ]
  },
  {
    "id": 48,
    "slug": "zipzip-seruven-parki-mx-zse-9200",
    "name": "ZıpZıp Serüven Parkı",
    "code": "MX-ZSE-9200",
    "category": "Trambolin Parkları",
    "categoryKey": "trambolin-parklari",
    "badge": "bg-brand-green text-white",
    "price": "Fiyat İste",
    "image": "/images/products/zipzip-seruven-parki-mx-zse-9200.jpg",
    "images": [
      "/images/products/zipzip-seruven-parki-mx-zse-9200.jpg",
      "/images/products/zipzip-seruven-parki-mx-zse-9200-2.jpg"
    ],
    "desc": "Sınırsız Hareket Alanı: Zemin grafiklerinden tırmanma duvarına kadar her detay, çocukların enerjilerini en üst seviyede boşaltmalarını sağlar. Yetenek Geliştirme Parkuru: Entegre basketbol potası ve engelli zıplama matları ile çocukların hem hız hem de isabet yeteneklerini test eder.",
    "longDesc": "Matrax ZıpZıp Serüven Parkı\n\nÜrün Adı: Matrax ZıpZıp Serüven Parkı\n\nÜrün Kodu: MX-ZSE-9200\n\nMatrax ZıpZıp Serüven Parkı zıplama eğlencesini profesyonel basketbol smaç alanları, tırmanma duvarları, sünger havuzu ve interaktif beceri modülleriyle birleştiren, orta ölçekli ticari alanlar için ideal tam kapsamlı bir eğlence çözümüdür. Alan verimliliğini kârlılığa dönüştürmek için projelendirilen bu model, canlı renkleri ve çok yönlü yapısıyla çocukların ve gençlerin vazgeçilmez oyun merkezi olmaya adaydır.\n\nSınırsız Hareket Alanı: Zemin grafiklerinden tırmanma duvarına kadar her detay, çocukların enerjilerini en üst seviyede boşaltmalarını sağlar.\n\nYetenek Geliştirme Parkuru: Entegre basketbol potası ve engelli zıplama matları ile çocukların hem hız hem de isabet yeteneklerini test eder.\n\nGörsel Şölen Panelleri: Arka plandaki derinlik hissi veren modern tasarımlar, oyun alanını sıradan bir parktan çıkarıp tematik bir merkeze dönüştürür.\n\nEbeveyn Dostu Güvenlik: Yüksek görüş açısı sunan dayanıklı siyah fileler sayesinde çocukların her anı dışarıdan güvenle izlenebilir.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı Anahtar Teslim Park",
      "Yüksek Yoğunluklu Sünger Havuzları",
      "Galvaniz Çelik Konstrüksiyon",
      "Profesyonel İşletme Yoğunluğu için Tasarım",
      "Modüler Genişletilebilir Plan",
      "Mimari & Teknik Çizim Hizmeti Dahil",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      },
      {
        "label": "Model",
        "value": "MX-ZSE-9200"
      }
    ]
  },
  {
    "id": 49,
    "slug": "bilge-kasif-parkuru-mx-bkp-8950",
    "name": "Bilge Kaşif Parkuru",
    "code": "MX-BKP-8950",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/bilge-kasif-parkuru-mx-bkp-8950.jpg",
    "images": [
      "/images/products/bilge-kasif-parkuru-mx-bkp-8950.jpg",
      "/images/products/bilge-kasif-parkuru-mx-bkp-8950-2.jpg",
      "/images/products/bilge-kasif-parkuru-mx-bkp-8950-3.jpg"
    ],
    "desc": "Gökyüzü Kalesi, dikey mimarinin sınırlarını zorlayan 3 katlı yapısıyla çocuklara gerçek bir tırmanma ve keşif deneyimi sunar. Katlar arası karmaşık geçişleri ve yüksek irtifalı kaydırakları ile büyük ölçekli oyun merkezleri için tasarlanmış en prestijli modelimizdir.",
    "longDesc": "Gökyüzü Kalesi, dikey mimarinin sınırlarını zorlayan 3 katlı yapısıyla çocuklara gerçek bir tırmanma ve keşif deneyimi sunar. Katlar arası karmaşık geçişleri ve yüksek irtifalı kaydırakları ile büyük ölçekli oyun merkezleri için tasarlanmış en prestijli modelimizdir.\n\nTeknik Özellikler Tablosu (Yüksekliğe Göre Revize Edilebilir)\n\nÖzellik\n\nDetay\n\nÜrün Adı\n\nMatrax Gökyüzü Kalesi (3 Katlı Macera Dünyası)\n\nÜrün Kodu\n\nMX-GK-3K-1285\n\nUzunluk\n\n12.20 Metre\n\nGenişlik\n\n8.54 Metre\n\nYükseklik Seçeneği A\n\n3.90 Metre (Düşük tavanlı alanlar için kompakt 3 kat)\n\nYükseklik Seçeneği B\n\n4.20 Metre (Standart 3 kat yüksekliği)\n\nYükseklik Seçeneği C\n\n4.50 Metre (Maksimum ferahlık sunan profesyonel yükseklik)\n\nKapasite\n\nAynı anda 70-90 Çocuk\n\n3 Katlı Yapının Öne Çıkan Avantajları\n\nÜç Katlı Keşif Alanı: Alt katta dev top havuzu, orta katta engel parkurları ve en üst katta panoramik gözlem tünelleri ile 3 farklı seviyede oyun keyfi.\n\nYüksek İrtifalı Spiral Kaydırak: 3. kattan başlayan ve güvenli bir helezon çizerek en alt kata inen dev spiral kaydırak ünitesi.\n\nDikey Tırmanma Kuleleri: Çocukların katlar arasında güvenle tırmanmasını sağlayan, özel elastik fileli geçiş sistemleri.\n\nPanoramik Gözlem Pencereleri: Çocukların en üst kattan tüm alanı kuş bakışı izleyebileceği darbelere dayanıklı şeffaf pencereler.\n\nKalite ve Güvenlik Standartları\n\nGüçlendirilmiş İskelet: 3 katın yükünü ve hareketli kapasiteyi taşıyacak şekilde tasarlanmış, ekstra mukavemetli demir konstrüksiyon.\n\nSertifikalı Malzeme: 1100 Denye anti-bakteriyel PVC, yüksek yoğunluklu yanmaz süngerler ve darbe emici zemin kaplaması.\n\nModüler Kurulum: Alanınızın tavan yüksekliğine göre kat yükseklikleri fabrikamızda milimetrik olarak ayarlanabilir.\n\nZirveye Tırman, Eğlenceyi Keşfet!\n\nMatrax Oyun Grupları'nın 3 katlı dev eseri (MX-GK-3K-1285), işletmenizi bölgenin en popüler eğlence merkezine dönüştürür.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-BKP-8950"
      }
    ]
  },
  {
    "id": 50,
    "slug": "dev-yamac-seruveni-mx-dys-9300",
    "name": "Dev Yamaç Serüveni",
    "code": "MX-DYS-9300",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/dev-yamac-seruveni-mx-dys-9300.jpg",
    "images": [
      "/images/products/dev-yamac-seruveni-mx-dys-9300.jpg",
      "/images/products/dev-yamac-seruveni-mx-dys-9300-2.jpg",
      "/images/products/dev-yamac-seruveni-mx-dys-9300-3.jpg",
      "/images/products/dev-yamac-seruveni-mx-dys-9300-4.jpg"
    ],
    "desc": "Dev Yamaç Serüveni Ürün Adı: Matrax Dev Yamaç Serüveni Ürün Kodu: MX-DYS-9300 Dev Yamaç Serüveni; çocukların en sevdiği iki ana aktiviteyi —zıplama ve kayma— mükemmel bir uyumla birleştirir.",
    "longDesc": "Dev Yamaç Serüveni\n\nÜrün Adı: Matrax Dev Yamaç Serüveni\n\nÜrün Kodu: MX-DYS-9300\n\nDev Yamaç Serüveni; çocukların en sevdiği iki ana aktiviteyi —zıplama ve kayma— mükemmel bir uyumla birleştirir. Her türlü iç mekana kolayca uyum sağlayan bu model, kompakt yapısına rağmen sunduğu zengin aktivite çeşitliliği ile fark yaratır.\n\nYüksek İrtifa Kaydırak Hattı: Parkurun en üst katından zemin katına kadar uzanan devasa sarı kaydırak ünitesi, çocuklara \"dev yamaçtan\" adrenalin dolu ve emniyetli bir iniş deneyimi sunar.\n\nKademeli Engel ve Denge Yolları: Orta bölümde yer alan yumuşak silindir basamaklar, asılı boks torbaları ve üst kattaki ağ geçitleri sayesinde çocukların koordinasyon ve çeviklik becerilerini en üst seviyeye çıkarır.\n\nPanoramik Gözlem Kubbeleri: Yapının yan panellerine entegre edilmiş şeffaf pencereler, çocuklara oyun alanı içerisinden dış dünyayı farklı bir açıdan izleme ve keşfetme imkanı tanır.\n\nÇok Katmanlı Keşif Labirenti: İki ana seviyeden oluşan bu devasa iskelet yapısı; tüneller, tırmanma modülleri ve platformlar arası geçişleri tek bir bütünleşik sistemde birleştirir.\n\nTam Çevresel Emniyet Çerçevesi: Çok renkli dayanıklı iskelet yapısını saran yüksek mukavemetli koruma ağları ve tüm metal aksamı örten darbe emici kalın bariyerler ile kesintisiz güvenlik sağlar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-DYS-9300"
      }
    ]
  },
  {
    "id": 51,
    "slug": "dinamik-macera-alani-mx-dma-9650",
    "name": "Dinamik Macera Alanı",
    "code": "MX-DMA-9650",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/dinamik-macera-alani-mx-dma-9650.jpg",
    "images": [
      "/images/products/dinamik-macera-alani-mx-dma-9650.jpg",
      "/images/products/dinamik-macera-alani-mx-dma-9650-2.jpg",
      "/images/products/dinamik-macera-alani-mx-dma-9650-3.jpg",
      "/images/products/dinamik-macera-alani-mx-dma-9650-4.jpg",
      "/images/products/dinamik-macera-alani-mx-dma-9650-kirmizi-1.png",
      "/images/products/dinamik-macera-alani-mx-dma-9650-kirmizi-2.png"
    ],
    "desc": "Dinamik Macera Alanı Ürün Adı: Matrax Dinamik Macera Alanı Ürün Kodu: MX-DMA-9650 Dinamik Macera Alanı dikey mimarisi sayesinde dar alanları yüksek verimli bir eğlence merkezine dönüştürür. İçindeki entegre trambolin ve çiftli kaydırak sistemiyle çocuklara eksiksiz bir oyun deneyimi yaşatır.",
    "longDesc": "Dinamik Macera Alanı\n\nÜrün Adı: Matrax Dinamik Macera Alanı\n\nÜrün Kodu: MX-DMA-9650\n\nDinamik Macera Alanı dikey mimarisi sayesinde dar alanları yüksek verimli bir eğlence merkezine dönüştürür. İçindeki entegre trambolin ve çiftli kaydırak sistemiyle çocuklara eksiksiz bir oyun deneyimi yaşatır.\n\nÇok Katmanlı Keşif Hattı: Spiral kaydırak, geniş top havuzu, silindir tüneller ve karmaşık engel parkurlarını tek bir devasa iskelet sisteminde buluşturan, çocukları fiziksel aksiyona teşvik eden çok katlı bir yapıdır.\n\nEtkileşimli Labirent Mimarisi: Farklı seviyelerdeki tırmanma üniteleri, ağ geçişleri ve denge yolları sayesinde çocukların yön bulma becerilerini ve kaba motor gelişimlerini en üst seviyeye çıkarır.\n\nBağımsız Küçük Çocuk Köşesi: Ana parkurun giriş kısmına entegre edilmiş, içerisinde yumuşak figürlü oyuncakların bulunduğu çitli bölme, en küçük yaş grubu için güvenli ve izole bir oyun ortamı sağlar.\n\nGözetim Odaklı Emniyet Sistemi: Yapıyı çevreleyen yüksek mukavemetli ağlar, ebeveynlerin çocuklarını her noktadan rahatça izlemesine olanak tanırken, tüm metal aksam darbe emici yumuşak bariyerlerle korunmaktadır.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Bağımsız Küçük Çocuk Köşesi (Çitli)",
      "Farklı Renk Seçeneği (Mavi / Kırmızı)",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Renk Seçeneği",
        "value": "Mavi / Kırmızı (Özelleştirilebilir)"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-DMA-9650"
      }
    ]
  },
  {
    "id": 52,
    "slug": "dort-renk-beceri-kupu-mx-drk-8150",
    "name": "Dört Renk Beceri Küpü",
    "code": "MX-DRK-8150",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/dort-renk-beceri-kupu-mx-drk-8150.png",
    "images": [
      "/images/products/dort-renk-beceri-kupu-mx-drk-8150.png",
      "/images/products/dort-renk-beceri-kupu-mx-drk-8150-2.png"
    ],
    "desc": "Dört Renk Beceri Küpü Ürün Adı: Matrax Dört Renk Beceri Küpü Ürün Kodu: MX-DRK-8150 Dört Renk Beceri Küpü, çocukların hem fiziksel koordinasyonunu geliştiren hem de onlara bitmek bilmeyen bir macera sunan çok yönlü bir parkurdur.",
    "longDesc": "Dört Renk Beceri Küpü\n\nÜrün Adı: Matrax Dört Renk Beceri Küpü\n\nÜrün Kodu: MX-DRK-8150\n\nDört Renk Beceri Küpü, çocukların hem fiziksel koordinasyonunu geliştiren hem de onlara bitmek bilmeyen bir macera sunan çok yönlü bir parkurdur. Stratejik olarak yerleştirilmiş engel modülleriyle, çocukların oyun sırasında sürekli yeni bir rota keşfetmesini sağlar.\n\nSıralı Aktivite Hücreleri: Sarı kaydırak ünitesi, renkli tırmanma basamakları ve ikili top havuzu modülünü tek bir doğrusal iskelet yapısında birleştiren çok yönlü bir oyun hattıdır.\n\nKademeli Hareket Akışı: Her biri farklı renkle tanımlanmış (Mavi, Yeşil, Kırmızı) bölmeler, çocukların alan içerisinde dikey ve yatay düzlemde koordinasyon becerilerini geliştirerek ilerlemesine olanak tanır.\n\nİkili Havuz Modülü: Parkurun sağ tarafına entegre edilmiş alt ve üst seviyeli top havuzu bölmeleri, farklı yaş grupları için aynı anda bağımsız duyusal oyun alanları sunar.\n\nYüksek Görünürlüklü Emniyet: Canlı renkli dayanıklı iskelet yapısını saran yüksek mukavemetli koruma ağları ve tüm metal aksamı örten darbe emici yumuşak bariyerler ile tam güvenlik sağlar.\n\nZemin Koruma Sistemi: Parkur tabanına dahil edilen çok renkli EVA köpük matlar, düşme anında darbe emici özellik gösterirken oyun alanının estetik bütünlüğünü tamamlar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-DRK-8150"
      }
    ]
  },
  {
    "id": 53,
    "slug": "galaksi-kesif-rotasi-mx-gkr-9980",
    "name": "Galaksi Keşif Rotası",
    "code": "MX-GKR-9980",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/galaksi-kesif-rotasi-mx-gkr-9980.jpg",
    "images": [
      "/images/products/galaksi-kesif-rotasi-mx-gkr-9980.jpg",
      "/images/products/galaksi-kesif-rotasi-mx-gkr-9980-2.jpg",
      "/images/products/galaksi-kesif-rotasi-mx-gkr-9980-3.jpg"
    ],
    "desc": "Galaksi Keşif Rotası Ürün Adı: Matrax Galaksi Keşif Rotası Ürün Kodu: MX-GKR-9980 Galaksi Keşif Rotası, çocukların hayal güçlerini gökyüzüne taşıyan, keşif ve eğlenceyi bir araya getiren en kapsamlı modüler tasarımlarımızdan biridir.",
    "longDesc": "Galaksi Keşif Rotası\n\nÜrün Adı: Matrax Galaksi Keşif Rotası\n\nÜrün Kodu: MX-GKR-9980\n\nGalaksi Keşif Rotası, çocukların hayal güçlerini gökyüzüne taşıyan, keşif ve eğlenceyi bir araya getiren en kapsamlı modüler tasarımlarımızdan biridir. Uzay roketi ve gezegen görselleriyle zenginleştirilmiş bu parkur, geniş taban alanı ve çok katlı yapısıyla aynı anda onlarca çocuğun güvenle vakit geçirmesine olanak tanır.\n\nTematik Uzay Mimarisi: Arka planlarda yer alan gezegen ve roket grafikleriyle çocuklara bir uzay yolculuğu atmosferi sunan, çok katlı ve bütünleşik bir eğlence sistemidir.\n\nKademeli Engel ve Geçiş Hattı: Renkli silindir tüneller, ağ köprüler ve asma bariyerlerle donatılmış parkur yapısı; çocukların stratejik düşünme ve koordinasyon becerilerini geliştirir.\n\nEntegre Aktivite Havuzları: Parkur içerisine dahil edilmiş geniş top havuzu ve yan taraftaki yumuşak figürlü serbest oyun alanı, farklı yaş grupları için aynı anda güvenli eğlence imkanı sunar.\n\nTam Çevresel Emniyet Çerçevesi: Mavi renkli dayanıklı iskelet yapısını saran yüksek mukavemetli koruma ağları ve darbe emici yumuşak bariyerler sayesinde en hareketli oyun anlarında bile tam güvenlik sağlar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-GKR-9980"
      }
    ]
  },
  {
    "id": 54,
    "slug": "karma-yetenek-sahasi-mx-kys-9900",
    "name": "Karma Yetenek Sahası",
    "code": "MX-KYS-9900",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/karma-yetenek-sahasi-mx-kys-9900.jpg",
    "images": [
      "/images/products/karma-yetenek-sahasi-mx-kys-9900.jpg",
      "/images/products/karma-yetenek-sahasi-mx-kys-9900-2.png"
    ],
    "desc": "Karma Yetenek Sahası Ürün Adı: Matrax Karma Yetenek Sahası Ürün Kodu: MX-KYS-9900 Karma Yetenek Sahası, çocukların sadece oyun oynamasını değil, aynı zamanda spor yapmasını ve sosyal becerilerini geliştirmesini sağlayan en kapsamlı tasarımımızdır.",
    "longDesc": "Karma Yetenek Sahası\n\nÜrün Adı: Matrax Karma Yetenek Sahası\n\nÜrün Kodu: MX-KYS-9900\n\nKarma Yetenek Sahası, çocukların sadece oyun oynamasını değil, aynı zamanda spor yapmasını ve sosyal becerilerini geliştirmesini sağlayan en kapsamlı tasarımımızdır. İçerisinde yer alan mini futbol sahası ve trambolin alanı ile geleneksel softplay anlayışını bir spor kompleksine dönüştürür.\n\nBütünleşik Spor Ekosistemi: Mini futbol sahası, profesyonel zıplama alanı ve tırmanma parkurlarını tek bir iskelet yapısında buluşturan çok fonksiyonlu bir projedir.\n\nMerkezi Denge ve Akrobasi Hattı: Parkurun orta bölümünde yer alan yumuşak silindir köprüler ve asılı ağ tünelleri sayesinde çocukların koordinasyon ve stratejik hareket becerilerini geliştirir.\n\nTematik Branş Modülü: Sağ tarafa entegre edilmiş, çizgileri belirlenmiş suni çim zeminli mini saha ünitesi; çocukların takım oyunları ve temel top becerileri için bağımsız bir alan sunar.\n\nGelişmiş Emniyet Bariyerleri: Her aktivite istasyonunu birbirinden ayıran yüksek mukavemetli koruma ağları ve tüm metal aksamı örten darbe emici yumuşak kaplamalar ile tam güvenlik sağlar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-KYS-9900"
      }
    ]
  },
  {
    "id": 55,
    "slug": "katmanli-beceri-adasi-mx-kba-8900",
    "name": "Katmanlı Beceri Adası",
    "code": "MX-KBA-8900",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/katmanli-beceri-adasi-mx-kba-8900.jpg",
    "images": [
      "/images/products/katmanli-beceri-adasi-mx-kba-8900.jpg",
      "/images/products/katmanli-beceri-adasi-mx-kba-8900-2.jpg",
      "/images/products/katmanli-beceri-adasi-mx-kba-8900-3.jpg",
      "/images/products/katmanli-beceri-adasi-mx-kba-8900-4.jpg"
    ],
    "desc": "Katmanlı Beceri Adası Ürün Adı: Matrax Katmanlı Beceri Adası Ürün Kodu: MX-KBA-8900 Katmanlı Beceri Adası kompakt alanlarda maksimum eğlence ve fiziksel aktivite sunmak için özel olarak tasarlanmıştır.",
    "longDesc": "Katmanlı Beceri Adası\n\nÜrün Adı: Matrax Katmanlı Beceri Adası\n\nÜrün Kodu: MX-KBA-8900\n\nKatmanlı Beceri Adası kompakt alanlarda maksimum eğlence ve fiziksel aktivite sunmak için özel olarak tasarlanmıştır. Canlı renkleri, tırmanma modülleri ve çift katlı yapısıyla bu parkur, çocukların koordinasyon becerilerini geliştirirken güvenli bir macera alanı sunar.\n\nÇift Katlı Aktivite Mimarisi: Alt kattaki geniş top havuzu ve gizli geçitler ile üst kattaki asılı engelleri birleştiren, dikey alanı en verimli şekilde kullanan bütünleşik bir yapıdır.\n\nİnteraktif Engel Parkuru: Üst platformda yer alan boks torbaları, denge kirişleri ve yatay tırmanma modülleri sayesinde çocukların koordinasyon, güç ve çeviklik becerilerini geliştirir.\n\nKademeli Hareket Akışı: Renkli rampa basamakları ve üst katlardaki farklı dokulu platform geçişleri, çocukların alan içerisinde dikey ve yatay düzlemde stratejik keşif yapmasına olanak tanır.\n\nTam Çevresel Emniyet Kuşağı: Canlı yeşil ve mavi renkli dayanıklı iskelet yapısını saran yüksek mukavemetli koruma ağları ve tüm metal aksamı örten darbe emici yumuşak bariyerler ile kesintisiz güvenlik sağlar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-KBA-8900"
      }
    ]
  },
  {
    "id": 56,
    "slug": "katmanli-beceri-labirenti-mx-kbl-8700",
    "name": "Katmanlı Beceri Labirenti",
    "code": "MX-KBL-8700",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/katmanli-beceri-labirenti-mx-kbl-8700.jpg",
    "images": [
      "/images/products/katmanli-beceri-labirenti-mx-kbl-8700.jpg",
      "/images/products/katmanli-beceri-labirenti-mx-kbl-8700-2.jpg"
    ],
    "desc": "Katmanlı Beceri Labirenti Ürün Adı: Matrax Katmanlı Beceri Labirenti Ürün Kodu: MX-KBL-8700 Katmanlı Beceri Labirenti çocukların sadece oynamasını değil, aynı zamanda fiziksel sınırlarını güvenle keşfetmesini sağlar.",
    "longDesc": "Katmanlı Beceri Labirenti\n\nÜrün Adı: Matrax Katmanlı Beceri Labirenti\n\nÜrün Kodu: MX-KBL-8700\n\nKatmanlı Beceri Labirenti çocukların sadece oynamasını değil, aynı zamanda fiziksel sınırlarını güvenle keşfetmesini sağlar. Birbirinden farklı zorluk seviyelerine sahip engel modülleri ve geniş top havuzuyla bu model, enerjisi bitmeyen minikler için tam bir macera adasıdır.\n\nÇift Katlı Aktivite Mimarisi: Zemin kattaki geniş top havuzu ile üst kattaki zıplama ve tırmanma alanlarını birbirine bağlayan, dikey alanı en verimli şekilde kullanan bütünleşik bir yapıdır.\n\nRenkli Rampa ve Geçiş Sistemi: Çocukların üst katlara güvenle ulaşmasını sağlayan çok renkli yumuşak rampa basamakları ve içerideki ağ köprüler, kaba motor becerilerini ve koordinasyonu geliştirir.\n\nEntegre Tırmanma Duvarı: Üst platforma dahil edilmiş tırmanma paneli, çocuklara güvenli bir yükseklikte fiziksel dayanıklılık ve stratejik hareket etme imkanı sunar.\n\n360 Derece İzleme ve Emniyet: Tüm yapıyı saran yüksek mukavemetli ağlar, ebeveynlerin çocuklarını her iki katta da kesintisiz izlemesine olanak tanırken, tüm iskelet darbe emici bariyerlerle korunmaktadır.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-KBL-8700"
      }
    ]
  },
  {
    "id": 57,
    "slug": "labirent-sehri-mx-lse-9950",
    "name": "Labirent Şehri",
    "code": "MX-LSE-9950",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/labirent-sehri-mx-lse-9950.jpg",
    "images": [
      "/images/products/labirent-sehri-mx-lse-9950.jpg",
      "/images/products/labirent-sehri-mx-lse-9950-2.jpg",
      "/images/products/labirent-sehri-mx-lse-9950-3.jpg",
      "/images/products/labirent-sehri-mx-lse-9950-4.jpg"
    ],
    "desc": "Labirent Şehri, orta ölçekli ticari alanlar için optimize edilmiş yüksek kapasiteli bir oyun kompleksidir. Modüler yapısı ve kompakt tasarımıyla metrekare verimliliğini en üst düzeye çıkarırken, çocuklara zengin bir aktivite yelpazesi sunar.",
    "longDesc": "Matrax Labirent Şehri\n\nÜrün Adı: Matrax Labirent Şehri\n\nÜrün Kodu: MX-LSE-9950\n\nLabirent Şehri, orta ölçekli ticari alanlar için optimize edilmiş yüksek kapasiteli bir oyun kompleksidir. Modüler yapısı ve kompakt tasarımıyla metrekare verimliliğini en üst düzeye çıkarırken, çocuklara zengin bir aktivite yelpazesi sunar.\n\nÇok Katlı Macera Mimarisi: İki ana seviyeden oluşan bu devasa iskelet yapısı; spiral kaydıraklar, tünel geçişleri ve engelli parkurları tek bir bütünleşik sistemde birleştirir.\n\nKademeli Hareket Akışı: Renkli rampa basamakları ve üst katlardaki ağ köprüler, çocukların alan içerisinde dikey ve yatay düzlemde koordinasyon becerilerini geliştirerek keşif yapmasına olanak tanır.\n\nEntegre Engel Parkuru: Parkur içerisine dahil edilmiş yumuşak engeller, denge yolları ve dikey tırmanış modülleri sayesinde çocukların fiziksel dayanıklılığını ve stratejik düşünme yeteneğini artırır.\n\nGelişmiş Emniyet Çerçevesi: Canlı sarı ve mavi renkli dayanıklı iskelet yapısını saran yüksek mukavemetli koruma ağları ve tüm metal aksamı örten darbe emici bariyerler ile kesintisiz güvenlik sağlar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-LSE-9950"
      }
    ]
  },
  {
    "id": 58,
    "slug": "minik-gelisim-kampusu-mx-mgk-8850",
    "name": "Minik Gelişim Kampüsü",
    "code": "MX-MGK-8850",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/minik-gelisim-kampusu-mx-mgk-8850.jpg",
    "images": [
      "/images/products/minik-gelisim-kampusu-mx-mgk-8850.jpg",
      "/images/products/minik-gelisim-kampusu-mx-mgk-8850-2.png",
      "/images/products/minik-gelisim-kampusu-mx-mgk-8850-3.png",
      "/images/products/minik-gelisim-kampusu-mx-mgk-8850-4.png"
    ],
    "desc": "Minik Gelişim Kampüsü Ürün Adı: Matrax Minik Gelişim Kampüsü Ürün Kodu: MX-MGK-8850 Bu modelimiz; alan tasarrufunun kritik olduğu anaokulları, kreşler, restoran çocuk alanları ve aile kafeleri için en ideal çözüm ortağıdır.",
    "longDesc": "Minik Gelişim Kampüsü\n\nÜrün Adı: Matrax Minik Gelişim Kampüsü\n\nÜrün Kodu: MX-MGK-8850\n\nBu modelimiz; alan tasarrufunun kritik olduğu anaokulları, kreşler, restoran çocuk alanları ve aile kafeleri için en ideal çözüm ortağıdır. Küçük metrekarelerde çocuklara zengin bir aktivite dünyası sunan bu parkur, işletmenizin prestijini artırırken minik misafirleriniz için\n\nBütünleşik Eğitici Modüller: Üst kata entegre edilmiş büyük silindir tünel, zemin kattaki top havuzu ve yan taraftaki engel parkurlarını tek bir iskelet yapısında buluşturarak çocuklara çok yönlü bir keşif alanı sunar.\n\nKademeli Motor Beceri Akışı: Farklı yüksekliklerdeki platformlar ve yumuşak tırmanma basamakları sayesinde çocukların dikey ve yatay düzlemde koordinasyon ve denge becerilerini doğal bir akışla geliştirir.\n\nİnteraktif Fiziksel Gelişim: Parkur içerisindeki asılı boks torbaları, yumuşak bariyerler ve zemin üzerindeki denge alanları, çocukların fiziksel çevikliğini ve stratejik hareket etme yeteneğini destekler.\n\nTematik ve Güvenli Tasarım: Ünite alt panellerindeki eğitici grafikler ve canlı renkli iskelet yapısı, çocukların hayal güçlerini besleyen neşeli bir atmosfer oluştururken her yaş grubuna hitap eden bir görsel derinlik sağlar.\n\nTam Çevresel Emniyet Kuşağı: Tüm metal aksamı örten yüksek yoğunluklu sünger bariyerler ve mukavemetli koruma ağları, en hareketli aktivite anlarında bile en üst düzey güvenlik standartlarını karşılar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-MGK-8850"
      }
    ]
  },
  {
    "id": 59,
    "slug": "okyanus-kalesi-mx-oka-9900",
    "name": "Okyanus Kalesi",
    "code": "MX-OKA-9900",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/okyanus-kalesi-mx-oka-9900.jpg",
    "images": [
      "/images/products/okyanus-kalesi-mx-oka-9900.jpg",
      "/images/products/okyanus-kalesi-mx-oka-9900-2.jpg",
      "/images/products/okyanus-kalesi-mx-oka-9900-3.jpg",
      "/images/products/okyanus-kalesi-mx-oka-9900-4.jpg"
    ],
    "desc": "Okyanus Kalesi Ürün Adı: Matrax Okyanus Kalesi Ürün Kodu: MX-OKA-9900 Okyanus Kalesi çocukların hayal dünyasını derin maviliklerle buluşturan, her metrekaresi aksiyon ve eğlence için tasarlanmış profesyonel bir oyun kompleksidir.",
    "longDesc": "Okyanus Kalesi\n\nÜrün Adı: Matrax Okyanus Kalesi\n\nÜrün Kodu: MX-OKA-9900\n\nOkyanus Kalesi çocukların hayal dünyasını derin maviliklerle buluşturan, her metrekaresi aksiyon ve eğlence için tasarlanmış profesyonel bir oyun kompleksidir. Uzunluğu ile aynı anda farklı yaş gruplarına hizmet verebilen bu model, işletmenizin en güçlü cazibe merkezi olacaktır.\n\nTematik Su Altı Mimarisi: Dev köpekbalığı ve ahtapot figürleriyle zenginleştirilmiş, çocuklara okyanusun derinliklerinde masalsı bir keşif imkanı sunan çok katlı ve bütünleşik bir oyun ekosistemidir.\n\nKademeli Hareket ve Beceri Ağı: Farklı seviyelerdeki asma ağ köprüler, tırmanma tünelleri ve karmaşık geçiş parkurları sayesinde çocukların dikey koordinasyon ve stratejik ilerleme yeteneklerini en üst seviyeye çıkarır.\n\nGenişletilmiş İnteraktif Havuz: Kalenin sağ kanadına entegre edilmiş, içerisinde deniz canlısı figürlerinin ve denge objelerinin bulunduğu geniş oyun havuzu, sosyal etkileşimi ve duyusal gelişimi destekler.\n\nBütünleşik Emniyet Çerçevesi: Yapıyı çevreleyen yüksek mukavemetli koruma ağları ve tüm metal iskeleti örten darbe emici kalın bariyerler ile en hareketli oyun anlarında bile kesintisiz güvenlik sağlar.\n\nGörsel Şölen ve Grafik Detaylar: Alt panellerdeki deniz temalı baskılar ve canlı mavi iskelet yapısı, çocukların hayal güçlerini besleyen ve alanı bir cazibe merkezine dönüştüren estetik bir derinlik sunar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-OKA-9900"
      }
    ]
  },
  {
    "id": 60,
    "slug": "premium-genis-alan-softplay-macera-parkuru-10-37m-x-3-66m",
    "name": "Premium Geniş Alan Softplay Macera Parkuru (10.37m x 3.66m)",
    "code": "MX-SPG-01",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/premium-genis-alan-softplay-macera-parkuru-10-37m-x-3-66m.jpg",
    "images": [
      "/images/products/premium-genis-alan-softplay-macera-parkuru-10-37m-x-3-66m.jpg",
      "/images/products/premium-genis-alan-softplay-macera-parkuru-10-37m-x-3-66m-2.jpg",
      "/images/products/premium-genis-alan-softplay-macera-parkuru-10-37m-x-3-66m-3.jpg",
      "/images/products/premium-genis-alan-softplay-macera-parkuru-10-37m-x-3-66m-4.jpg"
    ],
    "desc": "Çok bölmeli, kat geçişli profesyonel soft play oyun grubu. Top havuzu, tırmanma duvarı, kaydırak ve interaktif modüller bir arada — mekanınızın ölçüsüne özel anahtar teslim üretim. EN-1176 sertifikalı, yangın geciktirici sünger ve antibakteriyel PVC malzemeyle işletmenizin uzun ömürlü kullanımı için tasarlanmıştır.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-SPG-01"
      }
    ]
  },
  {
    "id": 61,
    "slug": "sakli-gecitler-ussu-mx-sgu-8950",
    "name": "Saklı Geçitler Üssü",
    "code": "MX-SGU-8950",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sakli-gecitler-ussu-mx-sgu-8950.jpg",
    "images": [
      "/images/products/sakli-gecitler-ussu-mx-sgu-8950.jpg",
      "/images/products/sakli-gecitler-ussu-mx-sgu-8950-2.jpg",
      "/images/products/sakli-gecitler-ussu-mx-sgu-8950-3.jpg"
    ],
    "desc": "Saklı Geçitler Üssü Ürün Adı: Matrax Saklı Geçitler Üssü Ürün Kodu: MX-SGU-8950 Saklı Geçitler Üssü; çocukların hayal gücünü tetikleyen ev temalı tasarımı ve fiziksel gelişimi destekleyen karma parkur yapısıyla öne çıkar.Geçiş tünelleri ve entegre trambolin alanı ile bu model, klasik softplay deneyimini bir üst…",
    "longDesc": "Saklı Geçitler Üssü\n\nÜrün Adı: Matrax Saklı Geçitler Üssü\n\nÜrün Kodu: MX-SGU-8950\n\nSaklı Geçitler Üssü; çocukların hayal gücünü tetikleyen ev temalı tasarımı ve fiziksel gelişimi destekleyen karma parkur yapısıyla öne çıkar.Geçiş tünelleri ve entegre trambolin alanı ile bu model, klasik softplay deneyimini bir üst seviyeye taşıyarak çocuklara keşfedilecek devasa bir dünya sunar.\n\nMimari Keşif Hattı: Üst katta yer alan pencereli geniş kıvrımlı tünel sistemi ve yan tarafa eklenen tenteli top havuzu modülü ile çocuklara keşfedilmeyi bekleyen masalsı bir oyun dünyası sunar.\n\nDoğa Temalı Denge Modülü: Parkur zeminindeki kütük figürlü yumuşak adımlar ve üst kattaki ağ geçitleri sayesinde çocukların denge, odaklanma ve stratejik ilerleme becerilerini geliştirir.\n\nKademeli Macera Akışı: Farklı renklerle ayrılmış platformlar arası geçişler, dikey boks torbaları ve yatay silindir engellerle çocukların fiziksel sınırlarını güvenli bir ortamda test etmesini sağlar.\n\nBütünleşik Emniyet Mimarisi: Mavi gövde iskeletini saran yüksek mukavemetli koruma ağları ve tüm sert yüzeyleri örten darbe emici kalın bariyerler ile en hareketli anlarda bile kesintisiz güvenlik sunar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-SGU-8950"
      }
    ]
  },
  {
    "id": 62,
    "slug": "sonsuz-macera-adasi-mx-sma-9850",
    "name": "Sonsuz Macera Adası",
    "code": "MX-SMA-9850",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sonsuz-macera-adasi-mx-sma-9850.jpg",
    "images": [
      "/images/products/sonsuz-macera-adasi-mx-sma-9850.jpg",
      "/images/products/sonsuz-macera-adasi-mx-sma-9850-2.jpg",
      "/images/products/sonsuz-macera-adasi-mx-sma-9850-3.jpg",
      "/images/products/sonsuz-macera-adasi-mx-sma-9850-4.jpg"
    ],
    "desc": "Sonsuz Macera Adası Ürün Adı: Matrax Sonsuz Macera Adası Ürün Kodu: MX-SMA-9850 Sonsuz Macera Adası, klasik softplay anlayışını interaktif Top Atış İstasyonu ile birleştiriyor. Uzunluğu ve geniş oyun hacmiyle bu model, yüksek kapasiteli işletmelerin bir numaralı cazibe merkezi olmak için tasarlandı.",
    "longDesc": "Sonsuz Macera Adası\n\nÜrün Adı: Matrax Sonsuz Macera Adası\n\nÜrün Kodu: MX-SMA-9850\n\nSonsuz Macera Adası, klasik softplay anlayışını interaktif Top Atış İstasyonu ile birleştiriyor. Uzunluğu ve geniş oyun hacmiyle bu model, yüksek kapasiteli işletmelerin bir numaralı cazibe merkezi olmak için tasarlandı.\n\nBütünleşik Engel Ekosistemi: Trambolin sahaları, asılı silindir tüneller, denge köprüleri ve tırmanma filelerini devasa bir iskelet yapısında birleştiren çok yönlü bir parkurdur.\n\nKeşif Odaklı Labirent Kurgusu: Farklı seviyelerdeki geçiş yolları ve yumuşak bariyerler sayesinde çocukların yön bulma, strateji geliştirme ve fiziksel koordinasyon becerilerini en üst seviyeye çıkarır.\n\nYüksek Kapasiteli Aktivite Merkezi: Onlarca farklı oyun istasyonunu tek bir çatı altında toplayarak, aynı anda çok sayıda çocuğun birbirine engel olmadan güvenle hareket etmesine olanak tanır.\n\nGelişmiş Emniyet Kuşağı: Yapıyı çevreleyen yüksek mukavemetli koruma ağları ve tüm metal aksamı örten darbe emici bariyerler, en yüksek enerjili anlarda bile tam güvenlik sağlar.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-SMA-9850"
      }
    ]
  },
  {
    "id": 63,
    "slug": "zirve-yolculugu-mx-zy-9150",
    "name": "Zirve Yolculuğu",
    "code": "MX-ZY-9150",
    "category": "Soft Play Oyun Grupları",
    "categoryKey": "soft-play-gruplari",
    "badge": "bg-brand-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/zirve-yolculugu-mx-zy-9150.jpg",
    "images": [
      "/images/products/zirve-yolculugu-mx-zy-9150.jpg",
      "/images/products/zirve-yolculugu-mx-zy-9150-2.jpg",
      "/images/products/zirve-yolculugu-mx-zy-9150-3.jpg",
      "/images/products/zirve-yolculugu-mx-zy-9150-4.jpg"
    ],
    "desc": "Bütünleşik Dikey Macera Hattı: Orta bölümde yer alan eğimli ağ tırmanma duvarı ve üst kattaki asma geçitleri tek bir iskelet yapısında buluşturan, dikey hareketliliği artıran çok katlı bir sistemdir.",
    "longDesc": "Matrax Zirve Yolculuğu\n\nÜrün Adı: Matrax Zirve Yolculuğu\n\nÜrün Kodu: MX-ZY-9150\n\nMatrax Zirve Yolculuğu; kısıtlı alanlarda maksimum verim almak isteyen işletmeler için ideal, kompakt ve son derece dayanıklı bir modeldir. Çoğu mekanın boyutuna sığabilen bu parkur, içinde barındırdığı temel aktivite modülleriyle çocuklara eksiksiz bir softplay deneyimi sunar.\n\nBütünleşik Dikey Macera Hattı: Orta bölümde yer alan eğimli ağ tırmanma duvarı ve üst kattaki asma geçitleri tek bir iskelet yapısında buluşturan, dikey hareketliliği artıran çok katlı bir sistemdir.\n\nİnteraktif Engel İstasyonu: Parkur içerisindeki dikey boks torbaları, asılı ahtapot figürlü yumuşak sallantılar ve denge yolları sayesinde çocukların koordinasyon ve stratejik düşünme becerilerini geliştirir.\n\nMerkezi Top Havuzu Modülü: Alt kata entegre edilmiş ferah top havuzu alanı, tırmanma duvarından gelen çocuklar için güvenli bir iniş noktası ve duyusal oyun bölgesi sunar.\n\nKademeli Hareket Akışı: Renkli rampa basamakları ve üst katlardaki farklı dokulu platformlar arası bağlantılar, çocukların alan içerisinde dikey ve yatay düzlemde akıcı bir şekilde keşif yapmasına olanak tanır.",
    "features": [
      "EN-1176 Sertifikalı Çocuk Oyun Standartları",
      "Çok Katlı / Çok Bölmeli Modüler Tasarım",
      "Yangın Geciktirici Sünger + Antibakteriyel PVC",
      "Top Havuzu, Tırmanma & Kaydırak Entegrasyonu",
      "Tematik Grafik Panel Seçenekleri",
      "Anahtar Teslim Kurulum & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "2-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Modüler Çelik İskelet"
      },
      {
        "label": "Kurulum",
        "value": "Anahtar Teslim"
      },
      {
        "label": "Model",
        "value": "MX-ZY-9150"
      }
    ]
  },
  {
    "id": 64,
    "slug": "standart-kum-havuzu",
    "name": "Standart Kum Havuzu",
    "code": "MX-HAV-02",
    "category": "Top, Sünger & Kum Havuzları",
    "categoryKey": "havuzlar",
    "badge": "bg-brand-orange text-white",
    "price": "Fiyat İste",
    "image": "/images/products/kum-havuzlari-kum-havuzu.png",
    "images": [
      "/images/products/kum-havuzlari-kum-havuzu.png"
    ],
    "desc": "Çocuklar için güvenli ve eğlenceli kum havuzu. Yumuşak kenar tasarımı, antibakteriyel zemin kaplaması ve drenaj sistemi ile kreş, AVM ve aile eğlence merkezlerinde tercih edilen modüler bir üründür. İstediğiniz ölçüde özel üretim yapılır.",
    "features": [
      "8 cm Yumuşak Top — Antibakteriyel & TSE Onaylı",
      "Yangın Geciktirici Sünger Bloklar (Sünger Havuzu)",
      "Yıkanabilir & UV Dayanımlı PVC Yüzey",
      "Modüler — İstenen Ölçüye Üretim",
      "Yumuşak Düşüş Yüzeyi — Çocuk Güvenliği"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "1+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / TSE"
      },
      {
        "label": "Top Çapı",
        "value": "8 cm"
      },
      {
        "label": "Üretim",
        "value": "Ölçüye Özel"
      },
      {
        "label": "Model",
        "value": "MX-HAV-02"
      }
    ]
  },
  {
    "id": 65,
    "slug": "genis-tip-kum-havuzu",
    "name": "Geniş Tip Kum Havuzu",
    "code": "MX-HAV-03",
    "category": "Top, Sünger & Kum Havuzları",
    "categoryKey": "havuzlar",
    "badge": "bg-brand-orange text-white",
    "price": "Fiyat İste",
    "image": "/images/products/kum-havuzlari-kum-havuzu-2.jpg",
    "images": [
      "/images/products/kum-havuzlari-kum-havuzu-2.jpg"
    ],
    "desc": "Çocuklar için güvenli ve eğlenceli kum havuzu. Yumuşak kenar tasarımı, antibakteriyel zemin kaplaması ve drenaj sistemi ile kreş, AVM ve aile eğlence merkezlerinde tercih edilen modüler bir üründür. İstediğiniz ölçüde özel üretim yapılır.",
    "features": [
      "8 cm Yumuşak Top — Antibakteriyel & TSE Onaylı",
      "Yangın Geciktirici Sünger Bloklar (Sünger Havuzu)",
      "Yıkanabilir & UV Dayanımlı PVC Yüzey",
      "Modüler — İstenen Ölçüye Üretim",
      "Yumuşak Düşüş Yüzeyi — Çocuk Güvenliği"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "1+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / TSE"
      },
      {
        "label": "Top Çapı",
        "value": "8 cm"
      },
      {
        "label": "Üretim",
        "value": "Ölçüye Özel"
      },
      {
        "label": "Model",
        "value": "MX-HAV-03"
      }
    ]
  },
  {
    "id": 66,
    "slug": "genis-alan-sisme-park-model-4",
    "name": "Geniş Alan Şişme Park — Model 4",
    "code": "MX-SP-01",
    "category": "Şişme Parklar",
    "categoryKey": "sisme-parklar",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sisme-parklar-sisme-park-4.png",
    "images": [
      "/images/products/sisme-parklar-sisme-park-4.png"
    ],
    "desc": "Açık alan etkinlikleri, festivaller ve mevsimlik işletmeler için CE / EN-14960 sertifikalı şişme park. 0,55 mm çift kat dikişli yangın geciktirici PVC tarpaulin malzeme, sürekli üflemeli fanı ile birlikte teslim edilir. Hızlı kurulum, taşınabilir ve depolanabilir.",
    "features": [
      "CE / EN-14960 Sertifikalı Şişme Yapı",
      "PVC Tarpaulin 0,55 mm Çift Kat Dikiş",
      "Yangın Geciktirici Malzeme",
      "Sürekli Hava Üflemeli Fan ile Birlikte",
      "Çabuk Kurulum — Seyyar Alan Kullanımı",
      "Kapasite & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "3-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "CE / EN-14960"
      },
      {
        "label": "Malzeme",
        "value": "0.55 mm PVC Tarpaulin"
      },
      {
        "label": "Fan",
        "value": "Sürekli Üflemeli (Dahil)"
      },
      {
        "label": "Model",
        "value": "MX-SP-01"
      }
    ]
  },
  {
    "id": 67,
    "slug": "klasik-sisme-park-model-1",
    "name": "Klasik Şişme Park — Model 1",
    "code": "MX-SP-02",
    "category": "Şişme Parklar",
    "categoryKey": "sisme-parklar",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sisme-parklar-sisme-park1.jpg",
    "images": [
      "/images/products/sisme-parklar-sisme-park1.jpg"
    ],
    "desc": "Açık alan etkinlikleri, festivaller ve mevsimlik işletmeler için CE / EN-14960 sertifikalı şişme park. 0,55 mm çift kat dikişli yangın geciktirici PVC tarpaulin malzeme, sürekli üflemeli fanı ile birlikte teslim edilir. Hızlı kurulum, taşınabilir ve depolanabilir.",
    "features": [
      "CE / EN-14960 Sertifikalı Şişme Yapı",
      "PVC Tarpaulin 0,55 mm Çift Kat Dikiş",
      "Yangın Geciktirici Malzeme",
      "Sürekli Hava Üflemeli Fan ile Birlikte",
      "Çabuk Kurulum — Seyyar Alan Kullanımı",
      "Kapasite & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "3-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "CE / EN-14960"
      },
      {
        "label": "Malzeme",
        "value": "0.55 mm PVC Tarpaulin"
      },
      {
        "label": "Fan",
        "value": "Sürekli Üflemeli (Dahil)"
      },
      {
        "label": "Model",
        "value": "MX-SP-02"
      }
    ]
  },
  {
    "id": 68,
    "slug": "tematik-sisme-park-model-3",
    "name": "Tematik Şişme Park — Model 3",
    "code": "MX-SP-03",
    "category": "Şişme Parklar",
    "categoryKey": "sisme-parklar",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sisme-parklar-sisme-park3.png",
    "images": [
      "/images/products/sisme-parklar-sisme-park3.png"
    ],
    "desc": "Açık alan etkinlikleri, festivaller ve mevsimlik işletmeler için CE / EN-14960 sertifikalı şişme park. 0,55 mm çift kat dikişli yangın geciktirici PVC tarpaulin malzeme, sürekli üflemeli fanı ile birlikte teslim edilir. Hızlı kurulum, taşınabilir ve depolanabilir.",
    "features": [
      "CE / EN-14960 Sertifikalı Şişme Yapı",
      "PVC Tarpaulin 0,55 mm Çift Kat Dikiş",
      "Yangın Geciktirici Malzeme",
      "Sürekli Hava Üflemeli Fan ile Birlikte",
      "Çabuk Kurulum — Seyyar Alan Kullanımı",
      "Kapasite & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "3-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "CE / EN-14960"
      },
      {
        "label": "Malzeme",
        "value": "0.55 mm PVC Tarpaulin"
      },
      {
        "label": "Fan",
        "value": "Sürekli Üflemeli (Dahil)"
      },
      {
        "label": "Model",
        "value": "MX-SP-03"
      }
    ]
  },
  {
    "id": 69,
    "slug": "yuksek-sisme-park",
    "name": "Yüksek Şişme Park",
    "code": "MX-SP-04",
    "category": "Şişme Parklar",
    "categoryKey": "sisme-parklar",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sisme-parklar-sisme-parklar-yuksek.png",
    "images": [
      "/images/products/sisme-parklar-sisme-parklar-yuksek.png"
    ],
    "desc": "Açık alan etkinlikleri, festivaller ve mevsimlik işletmeler için CE / EN-14960 sertifikalı şişme park. 0,55 mm çift kat dikişli yangın geciktirici PVC tarpaulin malzeme, sürekli üflemeli fanı ile birlikte teslim edilir. Hızlı kurulum, taşınabilir ve depolanabilir.",
    "features": [
      "CE / EN-14960 Sertifikalı Şişme Yapı",
      "PVC Tarpaulin 0,55 mm Çift Kat Dikiş",
      "Yangın Geciktirici Malzeme",
      "Sürekli Hava Üflemeli Fan ile Birlikte",
      "Çabuk Kurulum — Seyyar Alan Kullanımı",
      "Kapasite & Ölçüye Özel Üretim"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "3-12 yaş"
      },
      {
        "label": "Sertifika",
        "value": "CE / EN-14960"
      },
      {
        "label": "Malzeme",
        "value": "0.55 mm PVC Tarpaulin"
      },
      {
        "label": "Fan",
        "value": "Sürekli Üflemeli (Dahil)"
      },
      {
        "label": "Model",
        "value": "MX-SP-04"
      }
    ]
  },
  {
    "id": 70,
    "slug": "kompakt-macera-parkuru-kres-kafe-serisi",
    "name": "Kompakt Macera Parkuru — Kreş & Kafe Serisi",
    "code": "MX-KK-4025",
    "category": "Kreş & Kafe Serisi",
    "categoryKey": "kres-kafe",
    "badge": "bg-brand-orange text-white",
    "price": "Fiyat İste",
    "image": "/images/products/kres-kafe-serisi-kompakt-macera-parkuru.png",
    "images": [
      "/images/products/kres-kafe-serisi-kompakt-macera-parkuru.png",
      "/images/products/kres-kafe-serisi-kompakt-macera-parkuru-2.png",
      "/images/products/kres-kafe-serisi-kompakt-macera-parkuru-3.jpg",
      "/images/products/kres-kafe-serisi-kompakt-macera-parkuru-4.png",
      "/images/products/kres-kafe-serisi-kompakt-macera-parkuru-cizim.png"
    ],
    "desc": "Kreş & Kafe Serisi Kompakt Macera Parkuru (MX-KK-4025): 4.00 × 2.50 × 2.20 m boyutlarında, yalnızca 10 m² alana sığan, aynı anda 6-8 çocuğa hitap eden eğitim kurumları ile yeme-içme işletmeleri için ideal kompakt çözüm. Macera tüneli ve eğitici görsel panellerle birlikte ücretsiz nakliye + kurulum.",
    "longDesc": "KREŞ & KAFE SERİSİ: KOMPAKT MACERA PARKURU\n\nÜrün Kodu: MX-KK-4025\nBoyutlar: 4.00 m (Boy) × 2.50 m (En) × 2.20 m (Yükseklik)\nİdeal Kullanım: Eğitim Kurumları & Yeme-İçme İşletmeleri\nKapasite: Aynı anda 6 - 8 Çocuk\nLojistik & Montaj: Nakliye ve Kurulum Matrax tarafından ücretsiz olarak gerçekleştirilir.\n\nMekan Dostu: Yalnızca 10 m² alana kurulan kompakt yapısıyla küçük mekanlara büyük bir oyun dünyası kazandırır.\n\nKişiselleştirilebilir Renk Seçenekleri: İşletmenizin kurumsal kimliğine ya da kreşinizin temasına uygun renk kombinasyonlarıyla üretilir.\n\nEğitici Görsel Paneller: Çocukların oyun sırasında öğrenme deneyimi yaşamasını destekleyen renkli ve eğitici görsel paneller standart olarak yer alır.\n\nMacera Tüneli: Parkura entegre edilen tünel geçişiyle çocuklara hayal güçlerini kullanabilecekleri keşif odaklı bir oyun deneyimi sunar.\n\nMatrax Oyun Grupları kalitesiyle üretilen MX-KK-4025; yumuşak köşeleri, antibakteriyel yüzey kaplaması ve modüler yapısı sayesinde kreşler, anaokulları ve çocuklu kafe işletmeleri için anahtar teslim, güvenli ve estetik bir çözümdür.",
    "features": [
      "Kreş & Anaokulu Standartlarına Uygun",
      "Yumuşak Köşe & Çocuk Dostu Tasarım",
      "Anti-Bakteriyel Yüzey Kaplaması",
      "Sadece 10 m² Alana Sığan Kompakt Yapı",
      "Entegre Macera Tüneli",
      "Eğitici Görsel Paneller",
      "Kişiselleştirilebilir Renk Seçenekleri",
      "Ücretsiz Nakliye + Anahtar Teslim Kurulum"
    ],
    "specs": [
      {
        "label": "Ürün Kodu",
        "value": "MX-KK-4025"
      },
      {
        "label": "Boyutlar (B×E×Y)",
        "value": "4.00 × 2.50 × 2.20 m"
      },
      {
        "label": "Kapladığı Alan",
        "value": "10 m²"
      },
      {
        "label": "Kapasite",
        "value": "Aynı anda 6 - 8 Çocuk"
      },
      {
        "label": "İdeal Kullanım",
        "value": "Eğitim Kurumları & Kafe / Restoran"
      },
      {
        "label": "Yaş Aralığı",
        "value": "1-6 yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Renk",
        "value": "Kişiselleştirilebilir"
      },
      {
        "label": "Lojistik & Montaj",
        "value": "Ücretsiz Nakliye + Kurulum"
      },
      {
        "label": "Garanti",
        "value": "2 Yıl"
      }
    ]
  },
  {
    "id": 71,
    "slug": "tekli-koruma-fileli-trambolin",
    "name": "Tekli Koruma Fileli Trambolin",
    "code": "MX-TEK-01",
    "category": "Tekli Trambolin",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/tekli-koruma-fileli-trambolin.jpg",
    "images": [
      "/images/products/tekli-koruma-fileli-trambolin.jpg",
      "/images/products/tekli-koruma-fileli-trambolin-2.jpg",
      "/images/products/tekli-koruma-fileli-trambolin-3.jpg",
      "/images/products/saha-tekli-junior.jpg",
      "/images/products/saha-tekli-restoran.jpg",
      "/images/products/saha-tekli-softplay.jpg"
    ],
    "desc": "1 kişilik tekli ev/site tipi trambolin — 360° koruma fileli model. Galvanizli çelik iskelet, çift kaplamalı yaylar ve kapalı fermuarlı emniyet filesi ile çocukların güvenli sıçramasını sağlar. Bahçe, teras ve site oyun alanları için ideal çözüm.",
    "features": [
      "EN-71 / EN-913 Sertifikalı",
      "360° Kapalı Emniyet Filesi (UV Dayanımlı)",
      "Galvanizli Çelik İskelet — Pas Tutmaz",
      "Çift Kaplamalı Yay Sistemi",
      "Kalın PVC Yay Pedi (Mantar Profil)",
      "Kolay Montaj — Standart Set",
      "1 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "3+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-71 / EN-913"
      },
      {
        "label": "Çap Seçenekleri",
        "value": "183 / 244 / 305 / 366 cm"
      },
      {
        "label": "Maks. Yük",
        "value": "100 kg"
      },
      {
        "label": "Model",
        "value": "MX-TEK-01"
      }
    ]
  },
  {
    "id": 72,
    "slug": "tekli-top-havuzlu-trambolin",
    "name": "Tekli Top Havuzlu Trambolin",
    "code": "MX-TEK-02",
    "category": "Tekli Trambolin",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/tekli-trambolin-yuvarlak.jpg",
    "images": [
      "/images/products/tekli-trambolin-yuvarlak.jpg",
      "/images/products/tekli-trambolin-yuvarlak-2.jpg",
      "/images/products/tekli-trambolin-yuvarlak-3.jpg",
      "/images/products/saha-tekli-soft1.jpg"
    ],
    "desc": "Top havuzu ile entegre tekli trambolin modülü. Yüksek korumalı kafes yapısı ve kaymaz basamağıyla soft play alanları, oyun merkezleri ve eğlence parkları için tasarlandı. Tek kişilik zıplama yüzeyi ve renkli toplarla dolu havuz bölümü çocuklara güvenli, eğlenceli bir aktivite sunar.",
    "features": [
      "EN-1176 Sertifikalı Tasarım",
      "Galvanizli Çelik Kafes İskelet",
      "Top Havuzu + Zıplama Bölmesi Entegre",
      "UV Dayanımlı Yay Pedi",
      "Kaymaz Basamak ve Korkuluk",
      "Anahtar Teslim Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "3+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Yapı",
        "value": "Top Havuzu + Trambolin"
      },
      {
        "label": "Maks. Yük",
        "value": "80 kg"
      },
      {
        "label": "Model",
        "value": "MX-TEK-02"
      }
    ]
  },
  {
    "id": 73,
    "slug": "zemin-trambolini-standart",
    "name": "Zemin (Yer) Trambolini — Standart",
    "code": "MX-ZEM-01",
    "category": "Zemin Trambolin",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/zemin-trambolin.jpg",
    "images": [
      "/images/products/zemin-trambolin.jpg",
      "/images/products/zemin-trambolin-2.jpg",
      "/images/products/zemin-trambolin-3.jpg"
    ],
    "desc": "Zemine gömülü olarak monte edilen standart ölçü yer trambolini. Park, oyun alanı ve okul bahçeleri için EN-1176 sertifikalı güvenli çözüm. Düşme yüksekliği sıfıra indirildiği için ekstra emniyet filesi gerektirmez ve mekanın görsel bütünlüğünü bozmaz.",
    "features": [
      "EN-1176 Park Standardı",
      "Sıfır Düşme Yüksekliği — Ekstra Filesiz Güvenli",
      "Galvanizli Çelik Çerçeve & Yay Sistemi",
      "Hava Sirkülasyonlu Drenaj Tasarımı",
      "UV & Don Dayanımlı PVC Pad",
      "Anahtar Teslim Zemin Hazırlığı + Kurulum",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "3+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176"
      },
      {
        "label": "Standart Ölçü",
        "value": "200 × 300 cm"
      },
      {
        "label": "Montaj",
        "value": "Zemine Gömülü"
      },
      {
        "label": "Model",
        "value": "MX-ZEM-01"
      }
    ]
  },
  {
    "id": 74,
    "slug": "zemin-olimpik-trambolin",
    "name": "Zemin Olimpik Trambolin",
    "code": "MX-ZEM-02",
    "category": "Zemin Trambolin",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/zemin-olimpik-trambolin.jpg",
    "images": [
      "/images/products/zemin-olimpik-trambolin.jpg",
      "/images/products/zemin-olimpik-trambolin-2.jpg",
      "/images/products/zemin-olimpik-trambolin-3.jpg",
      "/images/products/saha-zemin-olimpik.jpg"
    ],
    "desc": "Olimpik standart ölçülerde (3 × 5 m) zemine entegre profesyonel trambolin. Belediye parkları, spor tesisleri ve büyük ölçekli oyun alanları için ideal. Yüksek kapasiteli yay sistemi ve EN-1176 sertifikası ile yoğun ticari kullanıma uygundur.",
    "features": [
      "EN-1176 / EN-913 Sertifikalı",
      "Olimpik Standart Ölçü (3 × 5 m)",
      "Çift Sıralı 6 mm Galvaniz Yay",
      "Sıfır Düşme Yüksekliği — Park Güvenliği",
      "Drenajlı Beton Çukur Tasarımı",
      "A-1 Kalite UV/Don Dayanımlı PVC Ped",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "5+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / EN-913"
      },
      {
        "label": "Ölçü",
        "value": "300 × 500 cm (Olimpik)"
      },
      {
        "label": "Montaj",
        "value": "Zemine Gömülü (Beton Çukur)"
      },
      {
        "label": "Model",
        "value": "MX-ZEM-02"
      }
    ]
  },
  {
    "id": 75,
    "slug": "fitness-trambolin",
    "name": "Fitness Trambolin",
    "code": "MX-FIT-01",
    "category": "Fitness Trambolin",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/fitness-trambolin.jpg",
    "images": [
      "/images/products/fitness-trambolin.jpg",
      "/images/products/fitness-trambolin-2.jpg",
      "/images/products/fitness-trambolin-3.jpg",
      "/images/products/fitness-trambolin-4.jpg"
    ],
    "desc": "Spor salonları, jumping fitness stüdyoları ve bireysel kullanım için profesyonel fitness trambolini. Tutamaçlı / tutamaçsız seçenekleri, sessiz lastik bungee yay sistemi ve kaydırmaz silikon ayaklar ile yüksek tempolu kardiyo antrenmanları için tasarlanmıştır.",
    "features": [
      "Sessiz Bungee Lastik Yay Sistemi",
      "Ayarlanabilir Tutamaç (Opsiyonel)",
      "Galvaniz Çelik Gövde — 120 kg Yük Taşıma",
      "Kaydırmaz Silikon Tabanlık",
      "Jumping Fitness Stüdyosu Uyumlu",
      "Katlanabilir Bacak — Kolay Depolama",
      "1 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Kullanım",
        "value": "Yetişkin Fitness / Kardiyo"
      },
      {
        "label": "Sertifika",
        "value": "TSE / CE"
      },
      {
        "label": "Çap",
        "value": "100 / 110 / 125 cm"
      },
      {
        "label": "Maks. Yük",
        "value": "120 kg"
      },
      {
        "label": "Model",
        "value": "MX-FIT-01"
      }
    ]
  },
  {
    "id": 76,
    "slug": "salto-bungee-trambolin-sistemi",
    "name": "Salto Bungee Trambolin Sistemi",
    "code": "MX-SLT-01",
    "category": "Salto Trambolin",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/salto-trambolin-2.png",
    "images": [
      "/images/products/salto-trambolin-2.png",
      "/images/products/salto-trambolin-3.png",
      "/images/products/salto-trambolin-4.png",
      "/images/products/salto-trambolin.jpg",
      "/images/products/salto-trambolin-3.jpg",
      "/images/products/salto-trambolin-4.jpg"
    ],
    "desc": "AVM, lunapark ve etkinlik alanları için 1, 2 veya 4 kişilik salto (bungee jumping) trambolin sistemi. Vinçli çelik kule, çift emniyet karabinası, profesyonel paraşüt kemeri ve bungee elastik halat sistemi ile çocukların 4 metreye kadar yüksek atlayışlar yapabildiği vitrin atraksiyonu.",
    "features": [
      "EN-1176 / CE Sertifikalı Komple Sistem",
      "1 / 2 / 4 Kişilik Modüler Kule Seçenekleri",
      "Çift Emniyet Karabinası + Yedek Halat",
      "Profesyonel Paraşüt Kemeri (XS-XL)",
      "Galvanizli Çelik Kule + Vinç Mekanizması",
      "Anahtar Teslim Kurulum + Operatör Eğitimi",
      "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Kullanıcı",
        "value": "1 / 2 / 4 Kişilik"
      },
      {
        "label": "Sertifika",
        "value": "EN-1176 / CE"
      },
      {
        "label": "Atlayış Yüksekliği",
        "value": "4 m'ye kadar"
      },
      {
        "label": "Kullanıcı Ağırlığı",
        "value": "20-80 kg"
      },
      {
        "label": "Model",
        "value": "MX-SLT-01"
      }
    ]
  },
  {
    "id": 77,
    "slug": "portatif-katlanir-trambolin",
    "name": "Portatif Katlanır Trambolin",
    "code": "MX-PRT-01",
    "category": "Portatif Trambolin",
    "categoryKey": "trambolinler",
    "badge": "bg-neon-pink text-white",
    "price": "Fiyat İste",
    "image": "/images/products/portatif-trambolin.jpg",
    "images": [
      "/images/products/portatif-trambolin.jpg",
      "/images/products/portatif-trambolin-2.jpg",
      "/images/products/portatif-trambolin-3.jpg",
      "/images/products/portatif-trambolin-4.jpg"
    ],
    "desc": "Kiralama firmaları, etkinlik organizasyonları ve mobil oyun alanları için katlanır portatif trambolin. Hızlı kurulum-sökülüm tasarımı, taşıma çantası ve hafif çelik konstrüksiyonu ile bir aracın bagajına sığar. Festival, doğum günü ve fuar uygulamaları için ideal.",
    "features": [
      "5 Dakikada Kurulum / Sökülüm",
      "Katlanabilir Çelik Bacak Sistemi",
      "Taşıma Çantası Standart",
      "Galvanizli Hafif Konstrüksiyon",
      "Bungee Yay — Sessiz Çalışma",
      "Etkinlik & Kiralama Uyumlu",
      "1 Yıl Üretici Garantisi"
    ],
    "specs": [
      {
        "label": "Yaş Aralığı",
        "value": "3+ yaş"
      },
      {
        "label": "Sertifika",
        "value": "EN-71 / CE"
      },
      {
        "label": "Çap Seçenekleri",
        "value": "100 / 122 / 140 cm"
      },
      {
        "label": "Maks. Yük",
        "value": "100 kg"
      },
      {
        "label": "Model",
        "value": "MX-PRT-01"
      }
    ]
  },
  {
    "id": 78,
    "slug": "sunger-boks-torbasi",
    "name": "Sünger Boks Torbası",
    "code": "MX-SPO-06",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-boks-torbasi.jpg",
    "images": [
          "/images/products/sunger-boks-torbasi.jpg",
          "/images/products/sunger-boks-torbasi-2.jpg",
          "/images/products/sunger-boks-torbasi-3.jpeg"
    ],
    "desc": "Soft play alanları için renkli sünger boks torbası modülü. Çocukların enerjilerini güvenli şekilde atması için tasarlanmış, askılı tavan veya zemin sabit modeller mevcuttur. Yangın geciktirici sünger dolgu ve A-1 kalite PVC kaplama ile uzun ömürlü kullanım sunar.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Boy", "value": "60 / 80 / 100 cm" },
      { "label": "Model", "value": "MX-SPO-06" }
    ]
  },
  {
    "id": 79,
    "slug": "sunger-basamak-merdiveni",
    "name": "Sünger Basamak Merdiveni",
    "code": "MX-SPO-07",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-basamak-merdiveni.jpeg",
    "images": [
          "/images/products/sunger-basamak-merdiveni.jpeg",
          "/images/products/sunger-basamak-merdiveni-2.jpeg"
    ],
    "desc": "Çocukların tırmanma ve denge becerilerini geliştiren basamak merdiveni soft play modülü. Geniş basamak yapısı ve kaymaz yüzeyi ile 2-8 yaş grubu için güvenli aktivite sağlar. Tek başına veya soft play setlerinin parçası olarak kullanılabilir.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Basamak Sayısı", "value": "3 / 4 / 5" },
      { "label": "Model", "value": "MX-SPO-07" }
    ]
  },
  {
    "id": 80,
    "slug": "sunger-donen-engel",
    "name": "Sünger Dönen Engel",
    "code": "MX-SPO-08",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-donen-engel.jpeg",
    "images": [
          "/images/products/sunger-donen-engel.jpeg",
          "/images/products/sunger-donen-engel-2.jpeg"
    ],
    "desc": "Hareketli rulman sistemi ile dönen sünger engel modülü. Çocukların engelin altından ya da üstünden geçerek koordinasyon ve refleks geliştirmesini sağlar. Soft play parkurlarının vazgeçilmez aktivite öğelerinden biridir.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Mekanizma", "value": "Sessiz Rulman" },
      { "label": "Model", "value": "MX-SPO-08" }
    ]
  },
  {
    "id": 81,
    "slug": "sunger-gokkusagi-merdiveni",
    "name": "Sünger Gökkuşağı Merdiveni",
    "code": "MX-SPO-09",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-gokkusagi-merdiveni.jpeg",
    "images": [
          "/images/products/sunger-gokkusagi-merdiveni.jpeg",
          "/images/products/sunger-gokkusagi-merdiveni-2.jpeg",
          "/images/products/sunger-gokkusagi-merdiveni-3.jpeg"
    ],
    "desc": "Renkli gökkuşağı temalı sünger merdiven. Standart ve uzun model seçenekleri ile farklı alanlara uyum sağlar. Çocukların görsel algı ve motor becerilerini geliştirirken parkurun renkli atmosferine katkı sunar.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Uzunluk", "value": "Standart / Uzun" },
      { "label": "Model", "value": "MX-SPO-09" }
    ]
  },
  {
    "id": 82,
    "slug": "sunger-guvenlik-platformu",
    "name": "Sünger Güvenlik Platformu",
    "code": "MX-SPO-10",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-guvenlik-platformu.jpeg",
    "images": [
          "/images/products/sunger-guvenlik-platformu.jpeg"
    ],
    "desc": "Soft play parkurlarında geçiş bölgelerinde kullanılan sünger güvenlik platformu. Çocukların yüksek noktalardan inişlerini yumuşatan ve düşme riskini minimize eden tampon işlevi görür. EN-1176 standartlarında üretilir.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Yükseklik", "value": "20 / 30 / 40 cm" },
      { "label": "Model", "value": "MX-SPO-10" }
    ]
  },
  {
    "id": 83,
    "slug": "sunger-orman-hazinesi",
    "name": "Sünger Orman Hazinesi (Tematik Modül)",
    "code": "MX-SPO-11",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-orman-hazinesi.jpeg",
    "images": [
          "/images/products/sunger-orman-hazinesi.jpeg",
          "/images/products/sunger-orman-hazinesi-2.jpg",
          "/images/products/sunger-orman-hazinesi-3.jpg"
    ],
    "desc": "Orman temalı çok bölmeli soft play keşif modülü. Tırmanma, sürünme ve gizlenme alanları ile çocukların hayal gücünü besler. Tematik baskılı PVC ve yangın geciktirici sünger dolgu ile profesyonel işletmeler için tasarlanmıştır.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Tema", "value": "Orman / Hayvanlar" },
      { "label": "Model", "value": "MX-SPO-11" }
    ]
  },
  {
    "id": 84,
    "slug": "sunger-piramit-tirmanisi",
    "name": "Sünger Piramit Tırmanışı",
    "code": "MX-SPO-12",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-piramit-tirmanisi.jpeg",
    "images": [
          "/images/products/sunger-piramit-tirmanisi.jpeg"
    ],
    "desc": "Üçgen piramit yapılı sünger tırmanma modülü. Çocukların tırmanma becerilerini geliştirirken yumuşak yüzeyi sayesinde güvenle iniş yapmalarını sağlar. Soft play parkurlarının görsel olarak da öne çıkan aktivite ünitesidir.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Yükseklik", "value": "80 / 100 / 120 cm" },
      { "label": "Model", "value": "MX-SPO-12" }
    ]
  },
  {
    "id": 85,
    "slug": "sunger-silindir-cark",
    "name": "Sünger Silindir Çark",
    "code": "MX-SPO-13",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-silindir-cark.jpeg",
    "images": [
          "/images/products/sunger-silindir-cark.jpeg"
    ],
    "desc": "Yatay eksende dönen silindirik sünger çark modülü. Çocukların üzerinden atlayarak veya tutarak denge geliştirmesini sağlar. Rulmanlı dönüş mekanizması sessiz çalışır, soft play parkurlarına dinamik aksiyon katar.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Çap", "value": "40 / 50 cm" },
      { "label": "Model", "value": "MX-SPO-13" }
    ]
  },
  {
    "id": 86,
    "slug": "sunger-engel-modulu",
    "name": "Sünger Engel Modülü",
    "code": "MX-SPO-14",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-engel.jpg",
    "images": [
          "/images/products/sunger-engel.jpg",
          "/images/products/sunger-engel-2.jpg",
          "/images/products/sunger-engel-3.jpg"
    ],
    "desc": "Soft play parkurlarında kullanılan klasik sünger engel modülü. Çocukların altından geçme, üstünden atlama veya kenarından dolanma seçenekleri ile farklı motor becerileri geliştirir. Birden fazla modül yan yana getirilerek özel parkurlar oluşturulabilir.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Yükseklik", "value": "40 / 60 / 80 cm" },
      { "label": "Model", "value": "MX-SPO-14" }
    ]
  },
  {
    "id": 87,
    "slug": "sunger-ucgen-engel",
    "name": "Sünger Üçgen Engel",
    "code": "MX-SPO-15",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-ucgen-engel.jpeg",
    "images": [
          "/images/products/sunger-ucgen-engel.jpeg",
          "/images/products/sunger-ucgen-engel-2.jpg"
    ],
    "desc": "Üçgen formunda tasarlanmış sünger engel modülü. Her iki yüzeyinden de tırmanılabilen yapısı sayesinde parkurlarda hem geçiş hem aktivite öğesi olarak kullanılır. Yumuşak köşeli üretim ile çocuk güvenliği önceliklendirilmiştir.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Taban", "value": "60 / 80 cm" },
      { "label": "Model", "value": "MX-SPO-15" }
    ]
  },
  {
    "id": 88,
    "slug": "sunger-x-engel",
    "name": "Sünger X Engel",
    "code": "MX-SPO-16",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-x-engel.jpeg",
    "images": [
          "/images/products/sunger-x-engel.jpeg",
          "/images/products/sunger-x-engel-2.jpg"
    ],
    "desc": "X formunda çapraz sünger engel modülü. Çocukların engel arasından zigzag yaparak geçmesini sağlayan dinamik aktivite ünitesi. Soft play parkurlarına çeviklik ve koordinasyon zorluğu ekler.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Yükseklik", "value": "60 cm" },
      { "label": "Model", "value": "MX-SPO-16" }
    ]
  },
  {
    "id": 89,
    "slug": "sunger-yan-engel",
    "name": "Sünger Yan Engel",
    "code": "MX-SPO-17",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-yan-engel.jpeg",
    "images": [
          "/images/products/sunger-yan-engel.jpeg",
          "/images/products/sunger-yan-engel-2.jpg"
    ],
    "desc": "Yatay konumlandırılmış geniş sünger engel modülü. Soft play alanlarında bölücü, kenar tamponu veya üstünden geçilen aktivite öğesi olarak çok amaçlı kullanım sunar. Modüler birleşim noktaları sayesinde özel parkurlar oluşturulabilir.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Uzunluk", "value": "100 / 150 / 200 cm" },
      { "label": "Model", "value": "MX-SPO-17" }
    ]
  },
  {
    "id": 90,
    "slug": "sunger-yumusak-basamaklar",
    "name": "Sünger Yumuşak Basamaklar",
    "code": "MX-SPO-18",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-yumusak-basamaklar.jpeg",
    "images": [
          "/images/products/sunger-yumusak-basamaklar.jpeg",
          "/images/products/sunger-yumusak-basamaklar-2.jpeg"
    ],
    "desc": "Bebek ve okul öncesi yaş grubu için yumuşak sünger basamak seti. Tırmanma, oturma ve denge çalışmaları için ideal. Kreş ve anaokulları ile çocuklu kafelerde sıkça tercih edilen başlangıç seviyesi soft play modülüdür.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Yaş", "value": "1-4" },
      { "label": "Model", "value": "MX-SPO-18" }
    ]
  },
  {
    "id": 91,
    "slug": "sunger-dikenler-yolu",
    "name": "Sünger Dikenler Yolu",
    "code": "MX-SPO-19",
    "category": "Soft Play Oyuncakları",
    "categoryKey": "soft-play",
    "badge": "bg-brand-navy text-white",
    "price": "Fiyat İste",
    "image": "/images/products/sunger-dikenler-yolu.jpeg",
    "images": [
          "/images/products/sunger-dikenler-yolu.jpeg"
    ],
    "desc": "Yumuşak sünger çıkıntılarla kaplı tematik yürüyüş yolu modülü. Çocukların ayaklarına farklı yüzey deneyimi yaşatarak duyusal gelişimi destekler. Soft play parkurlarına macera teması katan dikkat çekici bir öğedir.",
    "features": [
          "EN-1176 Sertifikalı Tasarım",
          "Yangın Geciktirici (B-s1, d0) Sünger Dolgu",
          "Antibakteriyel & Yıkanabilir A-1 Kalite PVC Kaplama",
          "Yumuşak Köşe & Çocuk Dostu Tasarım",
          "Renk Garantili UV Stabilizatörlü Malzeme",
          "Modüler — Soft Play Setlerine Entegre Olur",
          "2 Yıl Üretici Garantisi"
    ],
    "specs": [
      { "label": "Yaş Aralığı", "value": "2-10 yaş" },
      { "label": "Sertifika", "value": "EN-1176" },
      { "label": "Dolgu", "value": "Yangın Geciktirici Sünger" },
      { "label": "Kaplama", "value": "Antibakteriyel PVC" },
      { "label": "Uzunluk", "value": "150 / 200 cm" },
      { "label": "Model", "value": "MX-SPO-19" }
    ]
  }
];
