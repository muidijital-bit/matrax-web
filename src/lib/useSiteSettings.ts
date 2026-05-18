import { useEffect } from 'react';
import { supabase } from './supabase';

const applyMeta = (name: string, content: string) => {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.content = content;
};

const applyOg = (prop: string, content: string) => {
  if (!content) return;
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${prop}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
  el.content = content;
};

const applyFavicon = (url: string) => {
  if (!url) return;
  let link = document.querySelector<HTMLLinkElement>('link[rel~="icon"]');
  if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
  link.href = url;
};

const injectScript = (id: string, src: string) => {
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id; s.src = src; s.async = true;
  document.head.appendChild(s);
};

const injectInlineScript = (id: string, code: string) => {
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id; s.innerHTML = code;
  document.head.appendChild(s);
};

const updateSchemaOrg = (settings: Record<string, string>) => {
  const existingScript = document.getElementById('schema-org-org');
  if (existingScript) existingScript.remove();

  const name  = settings['business_name']  || 'Matrax Oyun Grupları';
  const url   = settings['site_url']        || 'https://matraxoyungruplari.com';
  const phone = settings['business_phone']  || '';
  const email = settings['business_email']  || '';
  const city  = settings['business_city']   || 'İstanbul';
  const addr  = settings['business_address']|| '';
  const year  = settings['business_founding_year'] || '2005';
  const ig    = settings['instagram_url']   || '';
  const yt    = settings['youtube_url']     || '';
  const logo  = settings['logo_url']        || `${url}/images/logo.png`;
  const image = settings['og_image']        || `${url}/images/hero.jpg`;
  const desc  = settings['meta_description']|| '';

  const sameAs = [ig, yt].filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}/#organization`,
    name, url, logo, image, description: desc,
    ...(phone && { telephone: phone }),
    ...(email && { email }),
    ...(year  && { foundingDate: year }),
    ...(sameAs.length && { sameAs }),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      ...(city && { addressLocality: city }),
      ...(addr && { streetAddress: addr }),
    },
    areaServed: { '@type': 'Country', name: 'Türkiye' },
    ...(phone && {
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: phone,
        contactType: 'sales',
        areaServed: 'TR',
        availableLanguage: ['Turkish', 'English'],
      }],
    }),
  };

  const s = document.createElement('script');
  s.id = 'schema-org-org';
  s.type = 'application/ld+json';
  s.innerHTML = JSON.stringify(schema, null, 2);
  document.head.appendChild(s);
};

export const useSiteSettings = () => {
  useEffect(() => {
    supabase.from('site_settings').select('*').then(({ data }) => {
      if (!data || data.length === 0) return;

      const s: Record<string, string> = {};
      data.forEach((row: { key: string; value: string | null }) => {
        s[row.key] = row.value ?? '';
      });

      // Başlık
      if (s['site_title']) document.title = s['site_title'];

      // Temel meta
      applyMeta('description',  s['meta_description'] || '');
      applyMeta('keywords',     s['keywords'] || '');
      applyMeta('robots',       s['robots'] || 'index, follow');

      // Open Graph
      applyOg('og:title',       s['og_title'] || s['site_title'] || '');
      applyOg('og:description', s['og_description'] || s['meta_description'] || '');
      applyOg('og:image',       s['og_image'] || '');
      if (s['site_url']) applyOg('og:url', s['site_url']);

      // Twitter
      applyMeta('twitter:card',        s['twitter_card'] || 'summary_large_image');
      applyMeta('twitter:title',        s['og_title'] || s['site_title'] || '');
      applyMeta('twitter:description',  s['og_description'] || s['meta_description'] || '');
      applyMeta('twitter:image',        s['og_image'] || '');

      // GSC doğrulama
      if (s['gsc_verification']) applyMeta('google-site-verification', s['gsc_verification']);

      // Favicon
      applyFavicon(s['favicon_url'] || '');

      // Google Analytics 4
      if (s['ga_id']) {
        injectScript('ga4-script', `https://www.googletagmanager.com/gtag/js?id=${s['ga_id']}`);
        injectInlineScript('ga4-init', `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${s['ga_id']}');`);
      }

      // Google Tag Manager
      if (s['gtm_id']) {
        injectInlineScript('gtm-head', `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${s['gtm_id']}');`);
      }

      // Facebook Pixel
      if (s['facebook_pixel_id']) {
        injectInlineScript('fb-pixel', `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${s['facebook_pixel_id']}');fbq('track','PageView');`);
      }

      // Schema.org JSON-LD
      updateSchemaOrg(s);
    });
  }, []);
};
