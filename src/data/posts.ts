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

export const postForCategory = (categoryKey: string) =>
  posts.find(p => p.categoryKeys.includes(categoryKey));

// Yazı gövdeleri src/data/postBodies.ts içinde (ana sayfa paketine girmesin diye ayrı)
export const posts: Post[] = [
  {
    id: 1,
    slug: 'trambolin-parki-nasil-kurulur',
    title: 'Trambolin Parkı Kurulum Sürecinde Bilmeniz Gerekenler',
    excerpt: 'Alan seçiminden yerleşim planına, EN ISO 23659 güvenlik standardından ruhsat ve işletme prosedürlerine: trambolin parkı açmadan önce netleştirmeniz gereken adımlar.',
    image: '/images/galeri-yeni/galeri-21.jpg',
    category: 'Rehber',
    date: '2026-10-02',
    badgeColor: 'bg-neon-pink text-white',
    keywords: 'trambolin parkı nasıl kurulur, trambolin parkı açmak, EN ISO 23659, trambolin parkı ruhsat, trambolin parkı güvenlik standardı',
    readTime: '4 dk',
    categoryKeys: ['trambolin-parklari', 'trambolinler'],
    related: { label: 'Trambolin Parklarını İncele', path: '/katalog?kategori=trambolin-parklari' },
  },
  {
    id: 2,
    slug: 'soft-play-malzeme-secimi',
    title: 'Soft Play Alanları İçin Doğru Malzeme Nasıl Seçilir?',
    excerpt: 'Çelik iskelet, sünger, PVC kaplama, file ve zemin: bir soft play oyun grubunu oluşturan beş katmanda nelere bakmalı, üreticiden hangi belgeleri istemelisiniz?',
    image: '/images/galeri-yeni/galeri-16.jpg',
    category: 'Ürün & Kalite',
    date: '2026-10-02',
    badgeColor: 'bg-neon-blue text-white',
    keywords: 'soft play malzeme, soft play sünger, PVC branda, EN 1176-10, EN 1177, kritik düşme yüksekliği, top havuzu hijyen',
    readTime: '3 dk',
    categoryKeys: ['soft-play-gruplari', 'soft-play', 'havuzlar'],
    related: { label: 'Soft Play Oyun Gruplarını İncele', path: '/katalog?kategori=soft-play-gruplari' },
  },
  {
    id: 3,
    slug: 'kres-oyun-alani-tasarimi',
    title: 'Kreş ve Çocuk Kafelerinde Oyun Alanı Tasarımı',
    excerpt: 'Küçük metrekarede güvenli ve verimli bir oyun alanı için kapasite hesabı, yaş gruplarına göre bölümleme, zemin seçimi ve MEB\'in güncel alan standartları.',
    image: '/images/kres-1.jpg',
    category: 'Tasarım',
    date: '2026-10-02',
    badgeColor: 'bg-neon-orange text-white',
    keywords: 'kreş oyun alanı, anaokulu oyun grubu, çocuk kafe oyun alanı, çocuk etkinlik ve oyun evi, MEB standartlar yönergesi, modüler oyun grubu',
    readTime: '3 dk',
    categoryKeys: ['kres-kafe'],
    related: { label: 'Kreş & Kafe Serisini İncele', path: '/katalog?kategori=kres-kafe' },
  },
];
