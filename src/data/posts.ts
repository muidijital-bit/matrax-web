export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string; // ISO (YYYY-AA-GG)
  badgeColor: string;
  keywords: string;
  readTime: string;
  categoryKeys: string[]; // bu yazının rehber olarak gösterileceği ürün kategorileri
  related: { label: string; path: string };
};

export const formatPostDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

export const postForCategory = (list: Post[], categoryKey: string) =>
  list.find(p => p.categoryKeys.includes(categoryKey));

// Kaldırılan yazıların adresleri → yerine geçen yazı
export const movedPosts: Record<string, string> = {
  'trambolin-parki-nasil-kurulur': 'ticari-trambolin',
  'soft-play-malzeme-secimi': 'softplay-ureticisi',
  'kres-oyun-alani-tasarimi': 'cocuk-oyun-alani',
};

// Yazılar panelden (Supabase `posts` tablosu) yönetilir; bu liste Supabase'e ulaşılamadığında kullanılan yedektir.
// Yazı gövdeleri src/data/postBodies.ts içinde (ana sayfa paketine girmesin diye ayrı)
export const posts: Post[] = [
  {
    id: 1,
    slug: 'top-havuzu',
    title: 'Top Havuzu Rehberi: Top Sayısı, Fiyat ve Hijyen',
    excerpt: 'Top havuzu çeşitleri, ölçüye göre top sayısı hesabı, top seçimi, fiyatı etkileyen faktörler ve hijyen: kreş, kafe ve oyun merkezleri için kapsamlı rehber.',
    image: '/images/products/top-havuzlari-3.jpg',
    category: 'Ürün Rehberi',
    date: '2026-10-02',
    badgeColor: 'bg-neon-blue text-white',
    keywords: 'top havuzu, top havuzları, top havuzu fiyatları, top havuzu topu, kreş top havuzu, top havuzu kaç top',
    readTime: '4 dk',
    categoryKeys: ['top-havuzlari', 'havuzlar'],
    related: { label: 'Top Havuzlarını İncele', path: '/katalog?kategori=top-havuzlari' },
  },
  {
    id: 2,
    slug: 'trambolin-ureticisi',
    title: 'Trambolin Üreticisi Seçimi – 2026 Rehberi',
    excerpt: 'Trambolin üreticisi seçerken bakılacak kriterler: iskelet ve yay kalitesi, standartlara uygunluk, kurulum hizmeti ve yedek parça desteği.',
    image: '/images/products/saha-olimpik-8-li-2.jpg',
    category: 'Üretim & Sektör',
    date: '2026-10-02',
    badgeColor: 'bg-neon-pink text-white',
    keywords: 'trambolin üreticisi, trambolin imalatı, trambolin üreticileri, ticari trambolin üreticisi, Ankara trambolin üreticisi',
    readTime: '1 dk',
    categoryKeys: [],
    related: { label: 'Trambolinleri İncele', path: '/katalog?kategori=trambolinler' },
  },
  {
    id: 3,
    slug: 'cocuk-oyun-grubu-ureticisi',
    title: 'Çocuk Oyun Grubu Üreticisi Seçimi – 2026 Rehberi',
    excerpt: 'Çocuk oyun grubu üreticisi seçerken güvenlik standartları, malzeme kalitesi, ölçüye özel üretim ve satış sonrası destek açısından nelere bakmalısınız?',
    image: '/images/products/top-havuzlari-2.jpg',
    category: 'Üretim & Sektör',
    date: '2026-10-02',
    badgeColor: 'bg-neon-pink text-white',
    keywords: 'çocuk oyun grubu üreticisi, oyun grubu üreticisi, çocuk oyun grubu, oyun grubu imalatı, kreş oyun grubu',
    readTime: '1 dk',
    categoryKeys: ['sisme-parklar'],
    related: { label: 'Ürünleri İncele', path: '/katalog' },
  },
  {
    id: 4,
    slug: 'softplay-ureticisi',
    title: 'Softplay Üreticisi Seçimi: Malzeme ve Güvenlik Rehberi',
    excerpt: 'Softplay üreticisi seçerken iskelet, sünger, PVC kaplama, file ve zeminde nelere bakmalı, hangi belgeleri istemelisiniz?',
    image: '/images/galeri-yeni/galeri-16.jpg',
    category: 'Üretim & Sektör',
    date: '2026-10-02',
    badgeColor: 'bg-neon-pink text-white',
    keywords: 'softplay üreticisi, soft play üreticisi, softplay oyun grubu, soft play imalatı, softplay malzeme',
    readTime: '2 dk',
    categoryKeys: ['soft-play-gruplari', 'soft-play'],
    related: { label: 'Soft Play Oyun Gruplarını İncele', path: '/katalog?kategori=soft-play-gruplari' },
  },
  {
    id: 5,
    slug: 'ticari-trambolin',
    title: 'Ticari Trambolin: Modeller, Güvenlik ve Seçim Rehberi',
    excerpt: 'Ticari trambolin nedir, ev tipinden farkı ne? Olimpik, junior ve zemin modelleri, güvenlik kuralları ve kurulum öncesi kontrol listesi.',
    image: '/images/products/saha-olimpik-10-lu-4.jpg',
    category: 'Ürün Rehberi',
    date: '2026-10-02',
    badgeColor: 'bg-neon-blue text-white',
    keywords: 'ticari trambolin, ticari trambolin fiyatları, ticari trambolin modelleri, işletme trambolini, trambolin parkı',
    readTime: '2 dk',
    categoryKeys: ['trambolin-parklari'],
    related: { label: 'Trambolinleri İncele', path: '/katalog?kategori=trambolinler' },
  },
  {
    id: 6,
    slug: 'olimpik-trambolin',
    title: 'Olimpik Trambolin: Modeller ve Teknik Özellikler',
    excerpt: 'Olimpik trambolin modelleri, 1–12 kişilik kapasite seçenekleri, junior ve zemin tipinden farkı, teknik özellikleri ve kullanım alanları.',
    image: '/images/products/saha-olimpik-10-lu-2.jpg',
    category: 'Ürün Rehberi',
    date: '2026-10-02',
    badgeColor: 'bg-neon-blue text-white',
    keywords: 'olimpik trambolin, ticari olimpik trambolin, olimpik trambolin fiyatları, olimpik trambolin ölçüleri, zemin olimpik trambolin',
    readTime: '2 dk',
    categoryKeys: ['trambolinler'],
    related: { label: 'Trambolinleri İncele', path: '/katalog?kategori=trambolinler' },
  },
  {
    id: 7,
    slug: 'trambolin-yedek-parca',
    title: 'Trambolin Yedek Parça: Yaylar, Zıplama Filesi ve Ped',
    excerpt: 'Trambolin yayları, zıplama filesi, ped ve koruma filesi: ölçüler, seçim, değişim zamanı ve doğru sipariş için gereken bilgiler.',
    image: '/images/galeri-yeni/galeri-21.jpg',
    category: 'Yedek Parça',
    date: '2026-10-02',
    badgeColor: 'bg-neon-orange text-white',
    keywords: 'trambolin yedek parça, trambolin yayları, trambolin zıplama filesi, trambolin yay ölçüleri, trambolin pedi, trambolin koruma filesi',
    readTime: '3 dk',
    categoryKeys: [],
    related: { label: 'Yedek Parçaları İncele', path: '/yedek-parcalar' },
  },
  {
    id: 8,
    slug: 'cocuk-oyun-alani',
    title: 'Çocuk Oyun Alanı Kurulumu: Mevzuat ve Tasarım Rehberi',
    excerpt: 'Çocuk oyun alanı kurarken kapasite hesabı, yaş gruplarına göre bölümleme, zemin seçimi ve MEB\'in güncel alan standartları.',
    image: '/images/kres-1.jpg',
    category: 'Tasarım & Mevzuat',
    date: '2026-10-02',
    badgeColor: 'bg-neon-green text-white',
    keywords: 'çocuk oyun alanı, çocuk oyun alanı kurulumu, kapalı çocuk oyun alanı, kreş oyun alanı, kafe oyun alanı',
    readTime: '2 dk',
    categoryKeys: ['kres-kafe'],
    related: { label: 'Kreş & Kafe Serisini İncele', path: '/katalog?kategori=kres-kafe' },
  },
];
