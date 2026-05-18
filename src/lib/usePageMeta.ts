import { useEffect } from 'react';

const setMeta = (name: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.content = content;
};

const setOg = (prop: string, content: string) => {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${prop}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
  el.content = content;
};

export const usePageMeta = (title: string, description: string, keywords?: string) => {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setOg('og:title', title);
    setOg('og:description', description);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    if (keywords) setMeta('keywords', keywords);
  }, [title, description, keywords]);
};
