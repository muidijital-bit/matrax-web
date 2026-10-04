import type { ImgHTMLAttributes, SyntheticEvent } from 'react';

// Yerel /images görselleri için önceden üretilmiş küçük WebP kopyası (npm run thumbs → public/images/_thumbs/<yol>.webp).
// Panelden yüklenen (tam adresli) görseller olduğu gibi kullanılır.
const thumbSrc = (src: string) =>
  /^\/images\/(?!_thumbs\/)[^?#]+\.(jpe?g|png)$/i.test(src)
    ? `/images/_thumbs/${src.slice('/images/'.length)}.webp`
    : src;

// Kart ve küçük önizlemelerde kullanılır; kopya bulunamazsa orijinal görsele döner
const Thumb = ({ src, onError, loading = 'lazy', decoding = 'async', ...rest }: ImgHTMLAttributes<HTMLImageElement> & { src: string }) => {
  const small = thumbSrc(src);
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (small !== src && img.getAttribute('src') === small) img.src = src;
    else onError?.(e);
  };
  return <img {...rest} src={small} loading={loading} decoding={decoding} onError={handleError} />;
};

export default Thumb;
