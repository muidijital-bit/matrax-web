import type { ImgHTMLAttributes, SyntheticEvent } from 'react';
import { thumbSrc } from '../lib/thumb';

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
