import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';
import { Phone, Calendar } from 'lucide-react';

export default function AvailabilitySection() {
  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-background-secondary via-transparent to-background-secondary z-10" />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              I'm available <span className="text-gradient">Monday through Friday</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a 
              href="tel:17322156319"
              className="group inline-block"
            >
              <div className="glass hover:bg-glass-medium transition-all duration-300 px-8 py-6 rounded-2xl inline-flex items-center gap-4 border border-white/10 hover:border-accent-primary/50">
                <Phone className="w-8 h-8 text-accent-primary" />
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent-primary transition-colors">
                    (732) 215-6319
                  </div>
                  <div className="text-gray-400 mt-1">
                    Call or text anytime
                  </div>
                </div>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>Schedule consultations Monday - Friday, 9am - 5pm EST</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

