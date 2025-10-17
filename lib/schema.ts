import { Service, BlogPost } from './data';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Kork'd Media",
    description: 'Digital marketing and tech solutions for entrepreneurs and growing businesses',
    url: 'https://korkdmedia.com',
    founder: {
      '@type': 'Person',
      name: 'Jon Korkowski',
      jobTitle: 'Founder & Tech Bridge',
      description: 'Digital marketer and technology bridge connecting businesses with solutions',
    },
    sameAs: [
      // Add social media URLs when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Kork'd Media",
    description: 'Digital marketing, custom technology solutions, and entrepreneurial mentoring',
    url: 'https://korkdmedia.com',
    telephone: '+1-XXX-XXX-XXXX', // Add real phone number
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      // Add full address when available
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
    },
    serviceType: service.title,
    areaServed: {
      '@type': 'Country',
      name: 'United States',
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
    author: {
      '@type': 'Person',
      name: 'Jon Korkowski',
    },
    publisher: {
      '@type': 'Organization',
      name: "Kork'd Media",
    },
  };
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jon Korkowski',
    jobTitle: 'Digital Marketing Strategist & Technology Consultant',
    description: 'Tech bridge to multiple industries, specializing in custom solutions and organic growth strategies',
    knowsAbout: [
      'Digital Marketing',
      'SEO Strategy',
      'Custom Software Development',
      'Business Development',
      'Entrepreneurship',
      'Google Business Optimization',
    ],
  };
}

