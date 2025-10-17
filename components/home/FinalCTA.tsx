import Link from 'next/link';
import FadeIn from '@/components/shared/FadeIn';
import Button from '@/components/shared/Button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-primary/20 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to <span className="text-gradient">Get More Leads?</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-10">
              Increase website traffic, generate more leads, and grow your business starting at $499
            </p>

            <Link href="/contact">
              <Button size="lg" className="text-lg px-10 py-5 group">
                Get Kork'd Today!
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

