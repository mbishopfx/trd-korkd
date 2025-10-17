'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassCard from '@/components/shared/GlassCard';
import FadeIn from '@/components/shared/FadeIn';
import { testimonials } from '@/lib/data';

export default function TestimonialCarousel() {
  return (
    <section className="py-24 bg-background-secondary overflow-hidden">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-gradient">Entrepreneurs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real results from real clients building real businesses.
            </p>
          </div>
        </FadeIn>

        {/* Scrolling testimonials */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {/* Duplicate testimonials for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px]"
              >
                <GlassCard hover={false} className="h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-primary text-accent-primary" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gradient mb-2">10+</div>
              <div className="text-gray-400">Industries Served</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

