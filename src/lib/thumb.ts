// Yerel /images görselleri için önceden üretilmiş WebP kopyalar (npm run thumbs).
// Panelden yüklenen (tam adresli) görsellerin kopyası yoktur; olduğu gibi kullanılır.
const LOCAL_IMAGE = /^\/images\/(?!_thumbs\/|_large\/)[^?#]+\.(jpe?g|png)$/i;

// 720px kopya: kartlar ve küçük önizlemeler
export const thumbSrc = (src: string) =>
  LOCAL_IMAGE.test(src) ? `/images/_thumbs/${src.slice('/images/'.length)}.webp` : src;

// 1200px kopya: yalnızca ürün görselleri (ürün sayfasındaki ana görsel); yoksa null
export const largeSrc = (src: string) =>
  LOCAL_IMAGE.test(src) && src.startsWith('/images/products/') ? `/images/_large/${src.slice('/images/'.length)}.webp` : null;
