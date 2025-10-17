'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

export default function HeroWithForm() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 via-transparent to-transparent opacity-50" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Rating Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                <Star className="w-5 h-5 fill-accent-primary text-accent-primary" />
                <Star className="w-5 h-5 fill-accent-primary text-accent-primary" />
                <Star className="w-5 h-5 fill-accent-primary text-accent-primary" />
              </div>
              <span className="text-sm text-gray-400">From 50+ successful projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get More Leads. <span className="text-gradient">Grow Your Business.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-400 mb-8">
              We help businesses get found online, generate more leads, and dominate their local market—all starting at $499.
            </p>

            {/* Location/Availability Badge */}
            <div className="inline-flex items-center gap-3 glass px-6 py-4 rounded-xl hover:bg-glass-medium transition-all cursor-pointer">
              <div className="w-3 h-3 bg-accent-primary rounded-full animate-pulse" />
              <div>
                <div className="font-semibold text-white">Available for New Projects</div>
                <div className="text-sm text-gray-400">Remote & On-site Consulting</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Book a Call with Jon</h3>
              <p className="text-gray-400 mb-6">Let's discuss how I can help bring your vision to life.</p>
              
              {/* Call Now Button */}
              <a 
                href="tel:17322156319"
                className="block w-full mb-4"
              >
                <Button size="lg" variant="primary" className="w-full text-lg">
                  📞 Call Now: (732) 215-6319
                </Button>
              </a>

              {/* Simple Contact Form */}
              <ContactForm compact />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

