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

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    // Update title
    document.title = config.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      let tag = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Update standard meta tags
    updateMetaTag('description', config.description);
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }

    // Add language meta tag
    updateMetaTag('language', config.language || 'English');

    // Add robots meta tag for search engine crawling
    updateMetaTag('robots', config.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Add viewport for mobile optimization
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');

    // Add charset
    let charsetTag = document.querySelector('meta[charset]') as HTMLMetaElement;
    if (!charsetTag) {
      charsetTag = document.createElement('meta');
      charsetTag.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charsetTag, document.head.firstChild);
    }

    // Add author if provided
    if (config.author) {
      updateMetaTag('author', config.author);
    }

    // Add published and modified dates for articles
    if (config.publishedDate) {
      updateMetaTag('article:published_time', config.publishedDate, true);
    }
    if (config.modifiedDate) {
      updateMetaTag('article:modified_time', config.modifiedDate, true);
    }

    // Update OpenGraph tags
    updateMetaTag('og:title', config.title, true);
    updateMetaTag('og:description', config.description, true);
    updateMetaTag('og:type', config.ogType || 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('og:image:type', 'image/png', true);
    }

    // Update Twitter tags
    updateMetaTag('twitter:title', config.title, true);
    updateMetaTag('twitter:description', config.description, true);
    updateMetaTag('twitter:card', config.twitterCard || 'summary_large_image', true);
    if (config.ogImage) {
      updateMetaTag('twitter:image', config.ogImage, true);
    }
    updateMetaTag('twitter:site', '@voipcat', true);
    updateMetaTag('twitter:creator', '@voipcat', true);

    // Update canonical URL
    if (config.canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.rel = 'canonical';
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.href = config.canonical;
    }

    // Add alternate links for international SEO
    let alternateTag = document.querySelector('link[rel="alternate"][hreflang="en"]') as HTMLLinkElement;
    if (!alternateTag) {
      alternateTag = document.createElement('link');
      alternateTag.rel = 'alternate';
      alternateTag.hrefLang = 'en';
      alternateTag.href = config.canonical || window.location.href;
      document.head.appendChild(alternateTag);
    }

    // Add x-default for international SEO
    let xDefaultTag = document.querySelector('link[rel="alternate"][hreflang="x-default"]') as HTMLLinkElement;
    if (!xDefaultTag) {
      xDefaultTag = document.createElement('link');
      xDefaultTag.rel = 'alternate';
      xDefaultTag.hrefLang = 'x-default';
      xDefaultTag.href = config.canonical || window.location.href;
      document.head.appendChild(xDefaultTag);
    }
  }, [config]);
}
