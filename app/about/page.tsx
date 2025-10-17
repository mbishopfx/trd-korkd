import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import Button from '@/components/shared/Button';
import { Target, Lightbulb, Rocket, Shield, CheckCircle } from 'lucide-react';
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Jon Korkowski',
  description: 'Meet Jon Korkowski - digital marketing strategist, technology consultant, and entrepreneur bridging the gap between vision and execution.',
};

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy, every line of code, every decision is measured against tangible business outcomes.',
  },
  {
    icon: Lightbulb,
    title: 'Strategic Innovation',
    description: 'Combining proven methodologies with innovative approaches to solve complex business challenges.',
  },
  {
    icon: Rocket,
    title: 'Growth Focused',
    description: 'Building systems and strategies designed for sustainable, long-term growth—not quick fixes.',
  },
  {
    icon: Shield,
    title: 'Full Transparency',
    description: 'No black boxes. You understand exactly what we\'re building and why it matters.',
  },
];

const expertise = [
  'Digital Marketing Strategy',
  'Custom Software Development',
  'SEO & Organic Growth',
  'Business Formation & Scaling',
  'Google Ecosystem Optimization',
  'Technology Integration',
  'Process Automation',
  'Entrepreneurial Coaching',
];

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://korkdmedia.com' },
    { name: 'About', url: 'https://korkdmedia.com/about' },
  ]);

  const personSchema = getPersonSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-transparent to-transparent opacity-50" />
        
        <div className="container-custom relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Your <span className="text-gradient">Tech Bridge</span> to Success
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">
                I connect business vision with technical execution across multiple industries.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <GlassCard>
                <div className="prose prose-lg prose-invert max-w-none">
                  <h2 className="text-3xl font-bold text-white mb-6">The Journey</h2>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Most entrepreneurs face a critical gap: they have the vision and industry knowledge, 
                    but lack the technical expertise to execute. Traditional agencies either deliver 
                    cookie-cutter solutions or charge enterprise prices for basic work.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    I built Kork'd Media to bridge that gap. With deep experience in digital marketing, 
                    custom software development, and business strategy, I serve as the technical partner 
                    entrepreneurs wish they had from day one.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Whether you're launching a startup, scaling an established business, or building 
                    something entirely new—I bring the technical depth and strategic insight to turn 
                    your vision into reality. No templates. No gimmicks. Just custom solutions built 
                    for your specific needs.
                  </p>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              The principles that guide every project and partnership.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent-gradient rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                        <p className="text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Areas of <span className="text-gradient">Expertise</span>
                </h2>
                <p className="text-xl text-gray-400">
                  Multi-disciplinary skills for comprehensive solutions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expertise.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                The <span className="text-gradient">Approach</span>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Deep understanding of your business, goals, and challenges.',
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Custom solutions designed specifically for your situation.',
                },
                {
                  step: '03',
                  title: 'Execution',
                  description: 'Implementation with regular communication and iteration.',
                },
              ].map((phase, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard>
                    <div className="text-5xl font-bold text-accent-primary/30 mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how I can help bring your vision to life.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

