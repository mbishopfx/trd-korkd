import { Metadata } from 'next';
import Link from 'next/link';
import { Rocket, Search, Code, Globe, TrendingUp, Users } from 'lucide-react';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import { services } from '@/lib/data';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive digital marketing and technology solutions: business startup, Google optimization, custom software, organic websites, SEO strategy, and entrepreneurial mentoring.',
};

const iconMap: { [key: string]: any } = {
  rocket: Rocket,
  search: Search,
  code: Code,
  globe: Globe,
  'trending-up': TrendingUp,
  users: Users,
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://korkdmedia.com' },
    { name: 'Services', url: 'https://korkdmedia.com/services' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-transparent to-transparent opacity-50" />
        
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Services Built for <span className="text-gradient">Real Growth</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">
                No gimmicks. No fluff. Just problem-solving solutions that drive measurable results.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              
              return (
                <FadeIn key={service.slug} delay={index * 0.1}>
                  <Link href={`/services/${service.slug}`}>
                    <GlassCard glow className="h-full hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-4 bg-accent-gradient rounded-xl">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h2>
                          <p className="text-accent-primary text-sm font-semibold">
                            {service.slug.split('-').join(' ').toUpperCase()}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.problem}
                      </p>

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-gray-400 mb-4">
                          {service.solution}
                        </p>
                        
                        <div className="flex items-center text-accent-primary font-semibold group">
                          Explore This Service 
                          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How We <span className="text-gradient">Work Together</span>
              </h2>
              <p className="text-xl text-gray-400">
                A systematic approach to delivering exceptional results.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'Discovery Call', description: 'Understand your goals, challenges, and vision' },
              { step: '02', title: 'Custom Proposal', description: 'Tailored solution with clear deliverables' },
              { step: '03', title: 'Implementation', description: 'Execute with regular updates and collaboration' },
              { step: '04', title: 'Growth & Support', description: 'Ongoing optimization and strategic guidance' },
            ].map((phase, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <GlassCard hover={false}>
                  <div className="text-4xl font-bold text-accent-primary/30 mb-3">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-400 text-sm">{phase.description}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss your situation and find the right solution together.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-accent-gradient text-white font-semibold text-lg rounded-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

