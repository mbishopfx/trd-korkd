import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Rocket, Search, Code, Globe, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import Button from '@/components/shared/Button';
import ContactForm from '@/components/shared/ContactForm';
import { services } from '@/lib/data';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

const iconMap: { [key: string]: any } = {
  rocket: Rocket,
  search: Search,
  code: Code,
  globe: Globe,
  'trending-up': TrendingUp,
  users: Users,
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];

  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://korkdmedia.com' },
    { name: 'Services', url: 'https://korkdmedia.com/services' },
    { name: service.title, url: `https://korkdmedia.com/services/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-transparent to-transparent opacity-50" />
        
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Link href="/services" className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors mb-6">
                ← Back to All Services
              </Link>
              
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-accent-gradient rounded-xl">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {service.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-400">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <GlassCard>
                <h2 className="text-3xl font-bold mb-4 text-gradient">The Problem</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.problem}
                </p>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <GlassCard>
                <h2 className="text-3xl font-bold mb-4 text-gradient">The Solution</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {service.solution}
                </p>

                <h3 className="text-xl font-bold text-white mb-4">What You Get:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-12">
                The <span className="text-gradient">Process</span>
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {service.process.map((step, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <GlassCard>
                <h2 className="text-3xl font-bold mb-6 text-gradient">Deliverables</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-400">
                  Let's discuss how {service.title.toLowerCase()} can transform your business.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16">
        <div className="container-custom">
          <FadeIn>
            <h3 className="text-3xl font-bold text-center mb-12">
              Explore Other <span className="text-gradient">Services</span>
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((otherService, index) => {
                const OtherIcon = iconMap[otherService.icon];
                return (
                  <FadeIn key={otherService.slug} delay={index * 0.1}>
                    <Link href={`/services/${otherService.slug}`}>
                      <GlassCard glow className="h-full hover:scale-[1.02] transition-transform">
                        <div className="p-3 bg-accent-gradient rounded-lg inline-block mb-4">
                          <OtherIcon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{otherService.title}</h4>
                        <p className="text-gray-400 text-sm mb-3">{otherService.shortDescription}</p>
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
    </>
  );
}

