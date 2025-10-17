import FadeIn from '@/components/shared/FadeIn';
import { Rocket, Target } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Main Statement */}
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We help local businesses <span className="text-gradient">dominate their market</span> online
            </h2>
          </FadeIn>

          {/* Right - Description & Benefits */}
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-400 mb-8">
              From startups to established businesses, we provide the tools and strategies 
              to generate more leads, increase visibility, and grow your customer base.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-gradient rounded-lg flex-shrink-0">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    More Leads Every Month
                  </h3>
                  <p className="text-gray-400">
                    Get found by customers actively searching for your services in your local area.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-gradient rounded-lg flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Business Visibility That Works
                  </h3>
                  <p className="text-gray-400">
                    Show up first on Google, get more calls, and convert visitors into paying customers.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

