import { useEffect } from 'react';

export const SITE_URL = 'https://matraxoyungruplari.com';

// Sayfaya JSON-LD ekler; sayfadan çıkılınca kaldırır. data null ise hiçbir şey eklenmez.
export const useJsonLd = (id: string, data: object | null) => {
  const json = data ? JSON.stringify(data) : null;
  useEffect(() => {
    if (!json) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = json;
    document.head.appendChild(script);
    return () => script.remove();
  }, [id, json]);
};

// "Ana Sayfa > ... > sayfa" yolunu arama motorlarına bildirir
export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

// Bulunamayan sayfalar arama sonuçlarına girmesin. Panel ayarları robots etiketini sonradan
// değiştirse bile googlebot etiketi noindex kalır (Google en kısıtlayıcı olanı uygular).
export const useNoIndex = (active = true) => {
  useEffect(() => {
    if (!active) return;
    const undo = ['robots', 'googlebot'].map(name => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      const prev = el?.content ?? null;
      if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = 'noindex';
      const meta = el;
      return () => { if (prev === null) meta.remove(); else meta.content = prev; };
    });
    return () => undo.forEach(fn => fn());
  }, [active]);
};

// Arama sonuçlarında kesilmesin diye açıklamayı kelime sınırından kısaltır
export const toMetaDescription = (text: string, max = 155) => {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,.;:—–-]+$/, '')}…`;
};
