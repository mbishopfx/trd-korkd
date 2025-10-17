import Link from 'next/link';
import { Rocket, Search, Code, Globe, TrendingUp, Users } from 'lucide-react';
import FadeIn from '@/components/shared/FadeIn';

const services = [
  {
    slug: 'google-foundation',
    title: 'Google Business Setup',
    icon: Search,
  },
  {
    slug: 'seo-strategy',
    title: 'Local SEO & Rankings',
    icon: TrendingUp,
  },
  {
    slug: 'organic-websites',
    title: 'Lead-Gen Websites',
    icon: Globe,
  },
  {
    slug: 'business-startup',
    title: 'Startup Assistance',
    icon: Rocket,
  },
  {
    slug: 'custom-tech',
    title: 'Business Tools',
    icon: Code,
  },
  {
    slug: 'entrepreneurial-mentoring',
    title: 'Growth Consulting',
    icon: Users,
  },
];

export default function ServicesImageGrid() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We <span className="text-gradient">Get You Results</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proven strategies to increase your leads, visibility, and revenue—starting at just $499.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <FadeIn key={service.slug} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] glass hover:bg-glass-medium transition-all duration-300 border border-white/10 hover:border-accent-primary/50 hover:scale-[1.02]">
                    {/* Icon Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                      <Icon className="w-48 h-48 text-accent-primary" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                      <div className="p-4 bg-accent-gradient rounded-xl mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

