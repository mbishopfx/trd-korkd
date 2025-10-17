import { Metadata } from 'next';
import { Mail, MessageSquare, Calendar } from 'lucide-react';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';
import ContactForm from '@/components/shared/ContactForm';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your project, ask questions, or schedule a consultation with Jon Korkowski.',
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me a message anytime',
    detail: 'jon@korkdmedia.com',
    action: 'mailto:jon@korkdmedia.com',
  },
  {
    icon: MessageSquare,
    title: 'Quick Questions',
    description: 'Use the form for quick inquiries',
    detail: 'Response within 24 hours',
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Book a consultation',
    detail: 'Free 30-minute discovery call',
  },
];

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://korkdmedia.com' },
    { name: 'Contact', url: 'https://korkdmedia.com/contact' },
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
                Let's Build Something <span className="text-gradient">Amazing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400">
                Whether you have a detailed plan or just an idea, I'm here to help make it happen.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard className="text-center h-full">
                    <div className="w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                    {method.action ? (
                      <a
                        href={method.action}
                        className="text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
                      >
                        {method.detail}
                      </a>
                    ) : (
                      <p className="text-accent-primary font-semibold">{method.detail}</p>
                    )}
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Send Me a <span className="text-gradient">Message</span>
                </h2>
                <p className="text-xl text-gray-400">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-12">
                Common <span className="text-gradient">Questions</span>
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {[
                {
                  question: 'What information should I include in my message?',
                  answer: 'Tell me about your project goals, timeline, and any specific challenges you\'re facing. The more context you provide, the better I can help.',
                },
                {
                  question: 'How quickly will I hear back?',
                  answer: 'I typically respond within 24 hours during business days. Urgent inquiries will receive priority attention.',
                },
                {
                  question: 'Do you offer free consultations?',
                  answer: 'Yes! I offer a free 30-minute discovery call to discuss your project and see if we\'re a good fit to work together.',
                },
                {
                  question: 'What if I\'m not sure which service I need?',
                  answer: 'No problem! Describe your situation and goals, and I\'ll recommend the best approach based on your specific needs.',
                },
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <GlassCard>
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prefer to Email Directly?
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                Send me an email at:
              </p>
              <a
                href="mailto:jon@korkdmedia.com"
                className="text-3xl font-bold text-gradient hover:opacity-80 transition-opacity"
              >
                jon@korkdmedia.com
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

