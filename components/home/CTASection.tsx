import FadeIn from '@/components/shared/FadeIn';
import ContactForm from '@/components/shared/ContactForm';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Build <span className="text-gradient">Your Vision?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Whether you're starting from scratch or scaling an existing business, let's discuss 
                how we can work together to achieve your goals.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ContactForm compact />
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm mb-4">
                Prefer to schedule a call directly?
              </p>
              <a
                href="mailto:jon@korkdmedia.com"
                className="text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
              >
                jon@korkdmedia.com
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

