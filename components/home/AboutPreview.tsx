import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';
import Button from '@/components/shared/Button';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Multi-industry technology bridge',
  'Organic growth specialist',
  'Custom solution architect',
  'Proven entrepreneurial track record',
];

export default function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-square glass rounded-2xl overflow-hidden relative">
                {/* Placeholder - client will add their photo */}
                <div className="absolute inset-0 bg-gradient-radial from-accent-primary/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-accent-gradient rounded-full flex items-center justify-center text-4xl font-bold">
                      JK
                    </div>
                    <p className="text-gray-400 text-sm">Photo Coming Soon</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </FadeIn>

          {/* Content Side */}
          <FadeIn direction="right">
            <div>
              <div className="inline-block px-4 py-2 glass rounded-full mb-4">
                <span className="text-sm text-accent-primary font-semibold">Tech Bridge to Multiple Industries</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-gradient">Jon Korkowski</span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-6">
                Digital marketer, technology strategist, and entrepreneur who bridges the gap between 
                business vision and technical execution.
              </p>
              
              <p className="text-gray-400 mb-8">
                With expertise spanning multiple industries, I help entrepreneurs and growing businesses 
                build scalable solutions that drive organic growth. Whether you're starting from scratch 
                or scaling an established operation, I bring the technical depth and strategic insight 
                to make it happen.
              </p>

              <div className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="primary">
                  Learn More About Jon
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

