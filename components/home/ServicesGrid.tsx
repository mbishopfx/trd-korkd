import Link from 'next/link';
import { Rocket, Search, Code, Globe, TrendingUp, Users } from 'lucide-react';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import { services } from '@/lib/data';

const iconMap: { [key: string]: any } = {
  rocket: Rocket,
  search: Search,
  code: Code,
  globe: Globe,
  'trending-up': TrendingUp,
  users: Users,
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Services Built for <span className="text-gradient">Real Growth</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              No gimmicks. No fluff. Just problem-solving services that drive measurable results.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            
            return (
              <FadeIn key={service.slug} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <GlassCard glow className="h-full hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent-gradient rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white flex-1 pt-2">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-accent-primary text-sm font-semibold group">
                      Learn More 
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </GlassCard>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

