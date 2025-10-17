'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from '@/components/shared/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes, I provide comprehensive ongoing support and maintenance services. Every project includes post-launch support, and I offer tailored maintenance plans to suit your schedule and budget. Whether you need minor updates or major enhancements, I\'m here to help your business grow.',
  },
  {
    question: 'How do you approach custom solutions?',
    answer: 'I start with a deep discovery phase to understand your business, goals, and challenges. Then I design a custom solution specifically for your needs—no templates or cookie-cutter approaches. You\'ll have full ownership of the code and complete transparency throughout the development process.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'I serve as a tech bridge across multiple industries including automotive, healthcare, professional services, e-commerce, real estate, and more. My multi-industry experience allows me to bring proven strategies from one sector to innovate in another.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timeline varies based on scope and complexity. Business startup services typically take 4-8 weeks, custom software projects range from 6-16 weeks, and website builds usually complete in 4-8 weeks. I provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you work with startups or only established businesses?',
    answer: 'I work with both! Whether you\'re launching a brand new venture or scaling an established business, I have the expertise to help. Many of my clients start as startups and grow into successful enterprises with ongoing support.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Video/Image Placeholder */}
            <FadeIn className="lg:col-span-2">
              <div className="aspect-[3/4] glass rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-radial from-accent-primary/20 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-accent-gradient rounded-full flex items-center justify-center">
                      <span className="text-3xl">?</span>
                    </div>
                    <p className="text-gray-400">Common Questions</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right - FAQs */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="glass rounded-xl overflow-hidden border border-white/10">
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-glass-medium transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-accent-primary flex-shrink-0 transition-transform duration-300 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

