import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';
import GlassCard from '@/components/shared/GlassCard';

export default function FounderQuote() {
  return (
    <section className="py-24 bg-background-secondary">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <GlassCard className="flex flex-col md:flex-row gap-8 items-center">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-gradient-radial from-accent-primary/20 to-transparent rounded-full" />
                  <div className="relative w-full h-full bg-accent-gradient rounded-full flex items-center justify-center text-4xl font-bold">
                    JK
                  </div>
                </div>
              </div>

              {/* Quote Content */}
              <div className="flex-1">
                <blockquote className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-relaxed">
                  "Every business deserves to be found by their customers. I help you get more leads, increase visibility, and dominate your local market—without breaking the bank."
                </blockquote>
                <div className="text-gray-400">
                  <div className="font-semibold text-white">Jon Korkowski</div>
                  <div>Founder & Lead Generation Specialist</div>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

