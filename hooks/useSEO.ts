import { useEffect } from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  robots?: string;
  language?: string;
}

/**
 * Hreflang locales we want Google to consider for the site.
 * VoIP Cat targets a global audience, so we advertise the major
 * English-speaking and high-VoIP-traffic locales plus x-default.
 * All locales currently point at the same URL — Google still uses
 * this signal to surface the page in country-specific SERPs.
 */
const GLOBAL_HREFLANGS = [
  'en',
  'en-US',
  'en-GB',
  'en-CA',
  'en-AU',
  'en-IN',
  'en-NG',
  'en-ZA',
  'en-AE',
  'en-SG',
  'en-PH',
  'es',
  'es-ES',
  'es-MX',
  'pt',
  'pt-BR',
  'fr',
  'fr-FR',
  'de',
  'de-DE',
  'it',
  'nl',
  'ru',
  'ar',
  'ar-SA',
  'ar-EG',
  'tr',
  'pl',
  'id',
  'th',
  'vi',
  'hi',
  'ja',
  'ko',
  'zh',
  'zh-CN',
  'zh-TW',
  'x-default',
];

const OG_ALTERNATE_LOCALES = [
  'en_GB',
  'en_CA',
  'en_AU',
  'es_ES',
  'es_MX',
  'pt_BR',
  'fr_FR',
  'de_DE',
  'it_IT',
  'nl_NL',
  'ru_RU',
  'ar_AR',
  'tr_TR',
  'hi_IN',
  'ja_JP',
  'ko_KR',
  'zh_CN',
];

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    document.title = config.title;

    const updateMetaTag = (name: string, content: string, isProperty?: boolean) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag('description', config.description);
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }

    updateMetaTag('language', config.language || 'English');

    updateMetaTag(
      'robots',
      config.robots ||
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    );
    updateMetaTag(
      'googlebot',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    );
    updateMetaTag('bingbot', 'index, follow');
    updateMetaTag('yandex', 'index, follow');

    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');

    let charsetTag = document.querySelector('meta[charset]') as HTMLMetaElement;
    if (!charsetTag) {
      charsetTag = document.createElement('meta');
      charsetTag.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charsetTag, document.head.firstChild);
    }

    updateMetaTag('author', config.author || 'VOIP CAT');
    updateMetaTag('publisher', 'VOIP CAT');
    updateMetaTag('copyright', `© ${new Date().getFullYear()} VOIP CAT. All rights reserved.`);
    updateMetaTag('rating', 'General');
    updateMetaTag('distribution', 'Global');
    updateMetaTag('coverage', 'Worldwide');
    updateMetaTag('target', 'all');
    updateMetaTag('audience', 'all');
    updateMetaTag('HandheldFriendly', 'True');
    updateMetaTag('MobileOptimized', '320');
    updateMetaTag('referrer', 'no-referrer-when-downgrade');
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('geo.region', 'XX');
    updateMetaTag('geo.placename', 'Worldwide');
    updateMetaTag('ICBM', '0.0, 0.0');

    if (config.publishedDate) {
      updateMetaTag('article:published_time', config.publishedDate, true);
    }
    if (config.modifiedDate) {
      updateMetaTag('article:modified_time', config.modifiedDate, true);
    }

    updateMetaTag('og:title', config.title, true);
    updateMetaTag('og:description', config.description, true);
    updateMetaTag('og:type', config.ogType || 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'VOIP CAT', true);
    updateMetaTag('og:locale', 'en_US', true);

    document
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((node) => node.parentNode?.removeChild(node));
    OG_ALTERNATE_LOCALES.forEach((alt) => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:locale:alternate');
      tag.content = alt;
      document.head.appendChild(tag);
    });

    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true);
      updateMetaTag('og:image:secure_url', config.ogImage, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('og:image:type', 'image/png', true);
      updateMetaTag('og:image:alt', config.title, true);
    }

    updateMetaTag('twitter:title', config.title);
    updateMetaTag('twitter:description', config.description);
    updateMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
    if (config.ogImage) {
      updateMetaTag('twitter:image', config.ogImage);
      updateMetaTag('twitter:image:alt', config.title);
    }
    updateMetaTag('twitter:site', '@voipcat');
    updateMetaTag('twitter:creator', '@voipcat');
    updateMetaTag('twitter:domain', 'voipcat.com');

    const currentCanonical = config.canonical || window.location.href;
    if (currentCanonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.rel = 'canonical';
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.href = currentCanonical;
    }

    document.documentElement.lang = config.language === 'Arabic' ? 'ar' : 'en';

    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((node) => node.parentNode?.removeChild(node));

    GLOBAL_HREFLANGS.forEach((hreflang) => {
      const tag = document.createElement('link');
      tag.rel = 'alternate';
      tag.hreflang = hreflang;
      tag.href = currentCanonical;
      document.head.appendChild(tag);
    });
  }, [config]);
}
