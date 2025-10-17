import { Service, BlogPost } from './data';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Kork'd Media",
    alternateName: "Korkd Media",
    description: 'Digital marketing and tech solutions for entrepreneurs and growing businesses. Lead generation, SEO, and custom business technology starting at $499.',
    url: 'https://korkdmedia.com',
    logo: 'https://korkdmedia.com/korklogo.png',
    image: 'https://korkdmedia.com/og-image.png',
    founder: {
      '@type': 'Person',
      name: 'Jon Korkowski',
      jobTitle: 'Founder & Lead Generation Specialist',
      description: 'Digital marketer and technology bridge connecting businesses with growth solutions',
      telephone: '+1-732-215-6319',
    },
    telephone: '+1-732-215-6319',
    priceRange: '$499-$$$',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-732-215-6319',
      contactType: 'Sales',
      availableLanguage: ['English'],
      areaServed: 'US',
      contactOption: 'TollFree',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    },
    sameAs: [],
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: "Kork'd Media",
    alternateName: "Korkd Media",
    description: 'Lead generation, digital marketing, and custom technology solutions for businesses. We help companies get found online and dominate their local market.',
    url: 'https://korkdmedia.com',
    telephone: '+1-732-215-6319',
    priceRange: '$499-$$$',
    image: 'https://korkdmedia.com/og-image.png',
    logo: 'https://korkdmedia.com/korklogo.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'NJ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };
}

export function getServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'Organization',
      name: "Kork'd Media",
      telephone: '+1-732-215-6319',
      url: 'https://korkdmedia.com',
    },
    serviceType: service.title,
    category: 'Digital Marketing',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '499.00',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '499.00',
        priceCurrency: 'USD',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://korkdmedia.com/services/${service.slug}`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+1-732-215-6319',
        contactType: 'Sales',
      },
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getBlogPostSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Jon Korkowski',
      url: 'https://korkdmedia.com/about',
      jobTitle: 'Digital Marketing Strategist',
    },
    publisher: {
      '@type': 'Organization',
      name: "Kork'd Media",
      logo: {
        '@type': 'ImageObject',
        url: 'https://korkdmedia.com/korklogo.png',
      },
      url: 'https://korkdmedia.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://korkdmedia.com/blog/${post.slug}`,
    },
    image: 'https://korkdmedia.com/og-image.png',
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jon Korkowski',
    givenName: 'Jon',
    familyName: 'Korkowski',
    jobTitle: 'Digital Marketing Strategist & Lead Generation Specialist',
    description: 'Tech bridge to multiple industries, specializing in lead generation, local SEO, and organic growth strategies for businesses',
    telephone: '+1-732-215-6319',
    url: 'https://korkdmedia.com',
    worksFor: {
      '@type': 'Organization',
      name: "Kork'd Media",
    },
    knowsAbout: [
      'Lead Generation',
      'Digital Marketing',
      'Local SEO',
      'SEO Strategy',
      'Custom Software Development',
      'Business Development',
      'Entrepreneurship',
      'Google Business Profile Optimization',
      'Website Development',
      'Business Consulting',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-732-215-6319',
      contactType: 'Work',
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Kork'd Media",
    alternateName: "Korkd Media",
    url: 'https://korkdmedia.com',
    description: 'Get more leads and grow your business with proven digital marketing strategies. Starting at $499.',
    publisher: {
      '@type': 'Organization',
      name: "Kork'd Media",
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://korkdmedia.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getOfferSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Lead Generation & Digital Marketing Services',
    description: 'Get more leads, website traffic, and business visibility starting at just $499',
    price: '499.00',
    priceCurrency: 'USD',
    seller: {
      '@type': 'Organization',
      name: "Kork'd Media",
      telephone: '+1-732-215-6319',
    },
    itemOffered: {
      '@type': 'Service',
      name: 'Digital Marketing & Lead Generation',
      description: 'Complete lead generation services including SEO, Google Business optimization, and custom website solutions',
    },
    availability: 'https://schema.org/InStock',
    url: 'https://korkdmedia.com/contact',
    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
  };
}

