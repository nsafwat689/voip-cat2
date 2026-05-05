/**
 * Structured Data (JSON-LD) for SEO
 * Helps search engines understand the content and context of the website
 */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://voipcat.com/#organization',
  name: 'VOIP CAT',
  alternateName: ['VoIP Cat', 'VoipCat', 'voipcat.com'],
  url: 'https://voipcat.com',
  logo: 'https://voipcat.com/images/logo-fox.jpg',
  image: 'https://voipcat.com/images/og-image.png',
  description:
    'VOIP CAT is a global VoIP and call center provider offering SIP trunking, wholesale A-Z voice termination, Cloud PBX, programmable voice API and white-label reseller programs to businesses worldwide.',
  foundingDate: '2018',
  areaServed: 'Worldwide',
  knowsLanguage: ['en', 'ar', 'es', 'fr', 'de', 'pt', 'ru', 'zh', 'hi'],
  sameAs: [
    'https://www.linkedin.com/company/voipcat',
    'https://twitter.com/voipcat',
    'https://www.facebook.com/people/VoipCat/61583844607938/',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+201557649136',
      email: 'sales.voipcat@gmail.com',
      availableLanguage: ['English', 'Arabic', 'Spanish', 'French'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+201557649136',
      email: 'sales.voipcat@gmail.com',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'Worldwide',
      hoursAvailable: 'Mo-Su 00:00-23:59',
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
};

export const serviceSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SIP Trunking Service',
    description: 'Enterprise-grade SIP trunking with HD voice quality, global coverage to 190+ countries, and 99.9% uptime SLA.',
    provider: {
      '@type': 'Organization',
      name: 'VOIP CAT',
    },
    areaServed: 'Worldwide',
    availableLanguage: 'en',
    url: 'https://voipcat.com/sip-trunk',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Wholesale VoIP Termination',
    description: 'High-quality wholesale voice termination with competitive A-Z rates, CLI routes, and real-time CDR access.',
    provider: {
      '@type': 'Organization',
      name: 'VOIP CAT',
    },
    areaServed: 'Worldwide',
    availableLanguage: 'en',
    url: 'https://voipcat.com/wholesale-voip',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cloud PBX Solutions',
    description: 'Scalable cloud-based phone systems with auto-attendant, call routing, voicemail, and conference calling for businesses of all sizes.',
    provider: {
      '@type': 'Organization',
      name: 'VOIP CAT',
    },
    areaServed: 'Worldwide',
    availableLanguage: 'en',
    url: 'https://voipcat.com/cloud-pbx',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'VoIP API',
    description: 'Programmable voice API for building custom communication applications with call control, SIP trunk management, and real-time analytics.',
    provider: {
      '@type': 'Organization',
      name: 'VOIP CAT',
    },
    areaServed: 'Worldwide',
    availableLanguage: 'en',
    url: 'https://voipcat.com/voip-api',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'VoIP Reseller Program',
    description: 'White-label VoIP reseller program with high margins, full technical support, and no upfront investment required.',
    provider: {
      '@type': 'Organization',
      name: 'VOIP CAT',
    },
    areaServed: 'Worldwide',
    availableLanguage: 'en',
    url: 'https://voipcat.com/voip-reseller',
  },
];

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VOIP CAT',
  url: 'https://voipcat.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://voipcat.com/articles?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

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

export const faqPageSchema = (
  faqs: { question: string; answer: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
});

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://voipcat.com/#service',
  name: 'VOIP CAT - Global VoIP, SIP Trunking & Call Center Provider',
  url: 'https://voipcat.com',
  image: 'https://voipcat.com/images/og-image.png',
  logo: 'https://voipcat.com/images/logo-fox.jpg',
  telephone: '+201557649136',
  email: 'sales.voipcat@gmail.com',
  priceRange: '$$',
  areaServed: 'Worldwide',
  serviceType: [
    'SIP Trunking',
    'Wholesale VoIP Termination',
    'Cloud PBX',
    'Hosted PBX',
    'Call Center VoIP',
    'VoIP API',
    'Programmable Voice',
    'VoIP Reseller Program',
    'DID Numbers',
    'International Voice Termination',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '128',
    bestRating: '5',
    worstRating: '1',
  },
};

export const articleSchema = (article: {
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.image || 'https://voipcat.com/images/og-articles.png',
  author: {
    '@type': 'Organization',
    name: 'VOIP CAT',
  },
  publisher: {
    '@type': 'Organization',
    name: 'VOIP CAT',
    logo: {
      '@type': 'ImageObject',
      url: 'https://voipcat.com/images/logo-fox.jpg',
    },
  },
  datePublished: article.date,
  articleBody: article.content,
});

/**
 * Function to inject JSON-LD script into the document head
 * Includes a cleanup mechanism to prevent duplication
 */
export function injectStructuredData(schema: any) {
  if (typeof document === 'undefined') return;

  const schemaString = JSON.stringify(schema);
  // Create a stable hash/id for this schema to avoid duplicates
  const id = btoa(schemaString).substring(0, 32);
  
  if (document.getElementById(`json-ld-${id}`)) return;

  const script = document.createElement('script');
  script.id = `json-ld-${id}`;
  script.type = 'application/ld+json';
  script.textContent = schemaString;
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
