/**
 * Structured Data (JSON-LD) for SEO
 * Helps search engines understand the content and context of the website
 * Implements comprehensive schema.org markup for global visibility
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://voipcat.com',
  name: 'VOIP CAT',
  url: 'https://voipcat.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://voipcat.com/logo-fox.jpg',
    width: 250,
    height: 250,
  },
  image: 'https://voipcat.com/logo-fox.jpg',
  description: 'Enterprise-grade VoIP, business communication solutions, and global networking services for businesses worldwide. Crystal-clear voice quality with 99.9% uptime guarantee.',
  sameAs: [
    'https://www.linkedin.com/company/voipcat',
    'https://twitter.com/voipcat',
    'https://www.facebook.com/voipcat',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+201557649136',
      email: 'sales.voipcat@gmail.com',
      areaServed: 'Worldwide',
      availableLanguage: 'en',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+201557649136',
      email: 'sales.voipcat@gmail.com',
      areaServed: 'Worldwide',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '251 Mercer St',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10012',
    addressCountry: 'US',
  },
  founder: {
    '@type': 'Person',
    name: 'VOIP CAT Team',
  },
  foundingDate: '2015',
  areaServed: [
    {
      '@type': 'Country',
      name: 'Worldwide',
    },
  ],
  knowsAbout: [
    'VoIP Solutions',
    'Business Communication',
    'Cloud PBX',
    'Enterprise Telephony',
    'Unified Communications',
    'Global Networking',
  ],
};

export const serviceSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://voipcat.com/services/voip',
    name: 'Enterprise VoIP Solutions',
    description: 'Crystal-clear, enterprise-grade VoIP services with 99.9% uptime guarantee. Global coverage to 190+ countries with advanced security features.',
    provider: {
      '@type': 'Organization',
      name: 'VOIP CAT',
      url: 'https://voipcat.com',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Worldwide',
      },
    ],
    availableLanguage: 'en',
    serviceType: 'Telecommunications',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '75',
      highPrice: '199',
      offerCount: '3',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://voipcat.com/services/cloud-pbx',
    name: 'Cloud PBX Solutions',
    description: 'Scalable neural phone systems for every size organization. From SOHO to enterprise-level call volumes with up to 80 concurrent calls.',
    provider: {
      '@type': 'Organization',
      name: 'VOIP CAT',
      url: 'https://voipcat.com',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Worldwide',
      },
    ],
    availableLanguage: 'en',
    serviceType: 'Business Services',
    offers: [
      {
        '@type': 'Offer',
        name: 'Golden Node',
        description: 'Up to 8 concurrent calls',
        price: '75',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        name: 'Diamond Core',
        description: 'Up to 40 concurrent calls',
        price: '119',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        name: 'Platinum Link',
        description: 'Up to 80 concurrent calls',
        price: '199',
        priceCurrency: 'USD',
        priceValidUntil: '2026-12-31',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://voipcat.com/services/business-communication',
    name: 'Business Communication Services',
    description: 'Unified communications platform with HD voice quality, advanced security, and 24/7 neural support for global enterprises.',
    provider: {
      '@type': 'Organization',
      name: 'VOIP CAT',
      url: 'https://voipcat.com',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Worldwide',
      },
    ],
    availableLanguage: 'en',
    serviceType: 'Telecommunications',
  },
];

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://voipcat.com',
  name: 'VOIP CAT',
  url: 'https://voipcat.com',
  description: 'Enterprise VoIP & Business Communication Solutions - Global VoIP provider with 190+ nodes and 99.9% uptime.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://voipcat.com/articles?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en',
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const articleSchema = (article: {
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  modifiedDate?: string;
  image?: string;
  category?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `https://voipcat.com/articles/${article.title.toLowerCase().replace(/\s+/g, '-')}`,
  headline: article.title,
  description: article.description,
  image: article.image || 'https://voipcat.com/images/og-articles.png',
  author: {
    '@type': 'Organization',
    name: article.author,
    url: 'https://voipcat.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'VOIP CAT',
    logo: {
      '@type': 'ImageObject',
      url: 'https://voipcat.com/logo-fox.jpg',
      width: 250,
      height: 250,
    },
  },
  datePublished: article.date,
  dateModified: article.modifiedDate || article.date,
  articleBody: article.content,
  keywords: article.category || 'VoIP, Business Communication',
  inLanguage: 'en',
});

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://voipcat.com',
  name: 'VOIP CAT',
  image: 'https://voipcat.com/logo-fox.jpg',
  description: 'Enterprise VoIP & Business Communication Solutions',
  url: 'https://voipcat.com',
  telephone: '+201557649136',
  email: 'sales.voipcat@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '251 Mercer St',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10012',
    addressCountry: 'US',
  },
  priceRange: '$75-$199',
  areaServed: 'Worldwide',
  sameAs: [
    'https://www.linkedin.com/company/voipcat',
    'https://twitter.com/voipcat',
    'https://www.facebook.com/voipcat',
  ],
};

export const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  ratingValue: '4.8',
  bestRating: '5',
  worstRating: '1',
  ratingCount: '150',
    itemReviewed: {
    '@type': 'Organization',
    name: 'VOIP CAT',
    url: 'https://voipcat.com'
  },

};


/**
 * Function to inject JSON-LD script into the document head
 */
export function injectStructuredData(schema: any) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Hook to inject multiple structured data schemas
 */
export function useStructuredData(schemas: any[]) {
  schemas.forEach(schema => {
    injectStructuredData(schema);
  });
}
