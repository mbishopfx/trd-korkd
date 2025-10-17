export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  deliverables: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: 'business-startup',
    title: 'Business Startup Solutions',
    shortDescription: 'From idea to incorporation—we handle the complexities so you can focus on building.',
    icon: 'rocket',
    problem: 'Navigating incorporation, permits, and market validation paralyzes most entrepreneurs. The bureaucracy is overwhelming, compliance requirements are confusing, and costly mistakes happen when you don\'t know what you don\'t know.',
    solution: 'We handle the bureaucracy so you focus on building. Our comprehensive startup service takes you from initial concept to operational business with all legal structures in place, compliance handled, and market validation complete.',
    benefits: [
      'Complete business entity formation (LLC, S-Corp, C-Corp)',
      'Federal and state compliance setup',
      'Market validation and competitor analysis',
      'Business model development and refinement',
      'Financial projections and funding strategy',
      'Operational systems and process documentation'
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Strategy',
        description: 'Deep dive into your business idea, target market, and competitive landscape. We identify your unique value proposition and growth opportunities.'
      },
      {
        step: 2,
        title: 'Legal Foundation',
        description: 'Entity formation, EIN registration, business licenses, and compliance documentation. Everything filed correctly the first time.'
      },
      {
        step: 3,
        title: 'Market Validation',
        description: 'Test your concept with real potential customers. Refine your offering based on actual market feedback before heavy investment.'
      },
      {
        step: 4,
        title: 'Systems & Launch',
        description: 'Implement operational systems, financial tracking, and core business processes. You launch with confidence and clarity.'
      }
    ],
    deliverables: [
      'Fully registered business entity',
      'Complete compliance documentation',
      'Market validation report',
      'Business operations manual',
      'Financial tracking systems',
      'Growth roadmap (12-month plan)'
    ]
  },
  {
    slug: 'google-foundation',
    title: 'Google Business Foundation',
    shortDescription: 'Establish your complete Google ecosystem—from Business Profile to Analytics.',
    icon: 'search',
    problem: 'Invisible to Google means invisible to customers. Most businesses have incomplete or misconfigured Google properties, missing critical ranking factors and losing thousands in potential revenue to competitors who show up first.',
    solution: 'We establish your foundational presence across Google\'s entire ecosystem. Every property optimized, every connection in place, every ranking signal maximized for maximum visibility.',
    benefits: [
      'Fully optimized Google Business Profile',
      'Google Search Console setup and optimization',
      'Google Analytics 4 implementation',
      'Google Tag Manager configuration',
      'Review generation system',
      'Local SEO optimization',
      'Competitor visibility analysis'
    ],
    process: [
      {
        step: 1,
        title: 'Audit & Analysis',
        description: 'Comprehensive audit of your current Google presence. Identify gaps, errors, and missed opportunities across all properties.'
      },
      {
        step: 2,
        title: 'Profile Optimization',
        description: 'Complete Google Business Profile optimization with strategic categories, service areas, attributes, and conversion-focused content.'
      },
      {
        step: 3,
        title: 'Technical Setup',
        description: 'Install and configure Search Console, Analytics 4, and Tag Manager. Set up conversion tracking, goals, and custom reports.'
      },
      {
        step: 4,
        title: 'Ongoing Monitoring',
        description: 'Training on using your Google ecosystem, interpreting data, and continuous optimization strategies.'
      }
    ],
    deliverables: [
      'Verified Google Business Profile',
      'Search Console with indexed pages',
      'GA4 with conversion tracking',
      'Tag Manager container',
      'Review generation system',
      'Monthly monitoring checklist',
      'Training documentation'
    ]
  },
  {
    slug: 'custom-tech',
    title: 'Custom Tech Solutions',
    shortDescription: 'Bespoke software that fits your business like a glove—no compromises.',
    icon: 'code',
    problem: 'Off-the-shelf software forces your business to adapt to its limitations. You pay monthly fees for features you don\'t need while the critical functions you do need require workarounds, spreadsheets, and manual processes.',
    solution: 'We build exactly what your business needs. Custom software, automation, and integrations designed around your specific workflow, not a generic template.',
    benefits: [
      'Software built for your exact needs',
      'Full ownership—no monthly SaaS fees',
      'Seamless integrations with existing tools',
      'Automation of repetitive tasks',
      'Scalable architecture for growth',
      'Complete data ownership and control',
      'Ongoing support and updates'
    ],
    process: [
      {
        step: 1,
        title: 'Requirements Discovery',
        description: 'Deep analysis of your current processes, pain points, and desired outcomes. We document every requirement and edge case.'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'Design the technical architecture, user interface, and data structure. You review and approve before development begins.'
      },
      {
        step: 3,
        title: 'Development & Testing',
        description: 'Agile development with regular demos. You see progress and provide feedback throughout the build process.'
      },
      {
        step: 4,
        title: 'Deployment & Training',
        description: 'Launch your custom solution with full documentation, team training, and post-launch support.'
      }
    ],
    deliverables: [
      'Custom software solution',
      'Complete source code ownership',
      'Technical documentation',
      'User training materials',
      'API documentation (if applicable)',
      '30-day post-launch support',
      'Future enhancement roadmap'
    ]
  },
  {
    slug: 'organic-websites',
    title: 'Organic Website Development',
    shortDescription: 'Websites that grow your traffic month after month without paid ads.',
    icon: 'globe',
    problem: 'Paid ads stop working when the budget runs out. Most websites are built for aesthetics, not organic growth, leaving you dependent on expensive advertising to generate traffic.',
    solution: 'Organic traffic compounds monthly. We build SEO-first websites engineered for sustainable growth, ranking, and conversion without ongoing ad spend.',
    benefits: [
      'SEO-optimized site architecture',
      'High-performance loading (90+ Lighthouse score)',
      'Conversion-focused user experience',
      'Mobile-first responsive design',
      'Rich schema markup implementation',
      'Content strategy for ranking',
      'Analytics and tracking setup',
      'Ongoing growth potential'
    ],
    process: [
      {
        step: 1,
        title: 'SEO Research & Planning',
        description: 'Keyword research, competitor analysis, and site architecture planning. Every page designed to rank for specific search terms.'
      },
      {
        step: 2,
        title: 'Design & Development',
        description: 'Build your site with modern frameworks, optimized code, and SEO best practices baked into every element.'
      },
      {
        step: 3,
        title: 'Content Creation',
        description: 'Strategic content creation targeting your ideal customer searches. Every word optimized for both users and search engines.'
      },
      {
        step: 4,
        title: 'Launch & Optimization',
        description: 'Deploy with complete technical SEO setup, submit to search engines, and begin the organic growth process.'
      }
    ],
    deliverables: [
      'High-performance website',
      'Mobile-responsive design',
      'SEO-optimized content',
      'Schema markup implementation',
      'Google Search Console setup',
      'Analytics implementation',
      'Content management training',
      '90-day optimization support'
    ]
  },
  {
    slug: 'seo-strategy',
    title: 'Advanced SEO Strategy',
    shortDescription: 'Engineered rankings that put you above the competition.',
    icon: 'trending-up',
    problem: 'Rankings aren\'t luck—they\'re engineered. Your competitors aren\'t smarter; they\'re just following a system. Without the right strategy, you\'re invisible where it matters most.',
    solution: 'We reverse-engineer what Google rewards. Technical optimization, strategic content, and authority building combine to dominate your target keywords.',
    benefits: [
      'Comprehensive technical SEO audit',
      'Keyword strategy and content roadmap',
      'On-page optimization implementation',
      'Technical issue resolution',
      'Link building strategy',
      'Competitor gap analysis',
      'Monthly performance tracking',
      'Ongoing strategy refinement'
    ],
    process: [
      {
        step: 1,
        title: 'Deep SEO Audit',
        description: 'Comprehensive analysis of your site\'s technical health, content quality, and ranking factors. Identify every issue holding you back.'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Build your custom SEO roadmap prioritizing quick wins and long-term growth opportunities based on your market and competition.'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Execute technical fixes, optimize existing content, and create new ranking assets. Every action tracked and measured.'
      },
      {
        step: 4,
        title: 'Authority Building',
        description: 'Strategic link acquisition and authority signals that boost your domain strength and ranking potential.'
      }
    ],
    deliverables: [
      'Complete SEO audit report',
      'Keyword strategy document',
      'Technical optimization checklist',
      'Content optimization roadmap',
      'Link building strategy',
      'Monthly performance reports',
      'Ongoing strategy calls',
      'Competitor tracking dashboard'
    ]
  },
  {
    slug: 'entrepreneurial-mentoring',
    title: 'Entrepreneurial Mentoring',
    shortDescription: 'Strategic partnership for entrepreneurs building something meaningful.',
    icon: 'users',
    problem: 'Entrepreneurship is lonely. You make critical decisions in isolation, waste time on the wrong priorities, and lack the perspective that comes from experience building and scaling multiple businesses.',
    solution: 'Get a strategic partner who\'s built multiple businesses. Bi-weekly calls, unlimited email access, and accountability that keeps you moving forward fast.',
    benefits: [
      'Bi-weekly 1-on-1 strategy calls',
      'Unlimited email support',
      'Strategic planning and prioritization',
      'Accountability and progress tracking',
      'Network introductions',
      'Decision-making framework',
      'Resource recommendations',
      'Mindset and motivation coaching'
    ],
    process: [
      {
        step: 1,
        title: 'Foundation Session',
        description: 'Deep dive into your business, goals, challenges, and vision. Establish clear success metrics and priority areas.'
      },
      {
        step: 2,
        title: 'Strategic Planning',
        description: 'Build your 90-day action plan with specific milestones, priorities, and accountability measures.'
      },
      {
        step: 3,
        title: 'Execution & Support',
        description: 'Regular calls to track progress, overcome obstacles, and refine strategy. Email support for urgent decisions between calls.'
      },
      {
        step: 4,
        title: 'Scaling & Growth',
        description: 'As your business grows, evolve the strategy to match your new reality and opportunities.'
      }
    ],
    deliverables: [
      'Bi-weekly 1-hour strategy calls',
      'Unlimited email support',
      '90-day strategic roadmap',
      'Monthly progress tracking',
      'Resource library access',
      'Network introductions',
      'Decision-making frameworks',
      'Ongoing strategic guidance'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder',
    company: 'Mitchell & Associates',
    content: 'Jon transformed our business from concept to reality in 90 days. His systematic approach to startup formation and market validation saved us from costly mistakes we would have made on our own.',
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'The custom CRM Jon built for us replaced three different SaaS tools we were paying for. We now have complete control and the system actually works the way we need it to.',
    rating: 5
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Owner',
    company: 'Elevation Fitness',
    content: 'Our organic traffic grew 312% in six months after Jon rebuilt our website with SEO at the core. We finally stopped depending on expensive Facebook ads.',
    rating: 5
  },
  {
    name: 'Michael Thompson',
    role: 'Entrepreneur',
    company: 'Multiple Ventures',
    content: 'The mentoring program gave me clarity I desperately needed. Jon\'s experience building multiple businesses helped me avoid countless mistakes and accelerate past competitors.',
    rating: 5
  },
  {
    name: 'Amanda Foster',
    role: 'Managing Partner',
    company: 'Foster Legal Group',
    content: 'Jon\'s Google Business Foundation service put us at the top of local searches. We went from invisible to the first result clients see. Our consultation requests tripled.',
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-organic-traffic-beats-paid-ads',
    title: 'Why Organic Traffic Beats Paid Ads Every Time',
    excerpt: 'Paid advertising delivers instant results, but organic traffic compounds. Here\'s why building organic channels should be your priority.',
    content: 'Full blog content here...',
    category: 'SEO',
    date: '2024-10-10',
    readTime: '8 min read',
    featured: true
  },
  {
    slug: 'technical-seo-mistakes-killing-your-rankings',
    title: '7 Technical SEO Mistakes Killing Your Rankings',
    excerpt: 'These common technical issues prevent even great content from ranking. Here\'s how to identify and fix them.',
    content: 'Full blog content here...',
    category: 'SEO',
    date: '2024-10-08',
    readTime: '10 min read',
    featured: false
  },
  {
    slug: 'from-idea-to-revenue-in-90-days',
    title: 'From Idea to Revenue in 90 Days: A Framework',
    excerpt: 'Most entrepreneurs overcomplicate the path from concept to first customer. This framework simplifies everything.',
    content: 'Full blog content here...',
    category: 'Business',
    date: '2024-10-05',
    readTime: '12 min read',
    featured: false
  },
  {
    slug: 'when-to-build-custom-vs-buy-saas',
    title: 'When to Build Custom Software vs. Buy SaaS',
    excerpt: 'The decision between custom development and SaaS isn\'t always obvious. Here\'s a framework for making the right choice.',
    content: 'Full blog content here...',
    category: 'Technology',
    date: '2024-10-03',
    readTime: '7 min read',
    featured: false
  },
  {
    slug: 'google-business-profile-optimization-checklist',
    title: 'Complete Google Business Profile Optimization Checklist',
    excerpt: 'A step-by-step guide to maximizing your GBP for local search visibility and customer acquisition.',
    content: 'Full blog content here...',
    category: 'Marketing',
    date: '2024-10-01',
    readTime: '15 min read',
    featured: false
  }
];

