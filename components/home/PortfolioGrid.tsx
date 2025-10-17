import FadeIn from '@/components/shared/FadeIn';
import { Briefcase, Code, Globe, LineChart, Rocket, Users } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Custom Development',
    icon: Code,
  },
  {
    title: 'Automotive Dealer Site',
    category: 'Organic Growth',
    icon: Globe,
  },
  {
    title: 'SaaS Startup Launch',
    category: 'Business Formation',
    icon: Rocket,
  },
  {
    title: 'Healthcare Portal',
    category: 'Custom Tech',
    icon: Briefcase,
  },
  {
    title: 'SEO Transformation',
    category: 'Strategy & Rankings',
    icon: LineChart,
  },
  {
    title: 'Coaching Platform',
    category: 'Mentoring Business',
    icon: Users,
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I take a personalized approach to every project, ensuring each solution is a reflection of the client's unique vision and business goals.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl aspect-square glass hover:bg-glass-medium transition-all duration-300 border border-white/10 hover:border-accent-primary/50 hover:scale-[1.02]">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="absolute top-6 right-6 p-3 bg-accent-gradient rounded-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="mb-2">
                      <span className="text-sm text-accent-primary font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

