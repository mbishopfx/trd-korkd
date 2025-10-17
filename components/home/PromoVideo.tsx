'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/components/shared/FadeIn';

export default function PromoVideo() {
  const [videoOpacity, setVideoOpacity] = useState(0);

  useEffect(() => {
    const video = document.getElementById('promo-video') as HTMLVideoElement;
    
    if (video) {
      // Fade in when video starts playing
      video.addEventListener('play', () => {
        setVideoOpacity(1);
      });

      // Fade out near the end, then loop
      video.addEventListener('timeupdate', () => {
        const timeLeft = video.duration - video.currentTime;
        
        // Start fading out 0.5 seconds before end
        if (timeLeft <= 0.5 && timeLeft > 0) {
          setVideoOpacity(0);
        }
        // Fade back in after loop restart
        else if (video.currentTime < 0.5) {
          setVideoOpacity(1);
        }
      });

      // Attempt autoplay
      video.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('play', () => {});
        video.removeEventListener('timeupdate', () => {});
      }
    };
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary opacity-50" />
      
      <div className="container-custom relative z-10">
        <FadeIn>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-5xl mx-auto relative"
          >
            {/* Floating Container */}
            <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,212,255,0.15)] hover:shadow-[0_20px_100px_rgba(0,212,255,0.25)] transition-all duration-300">
              {/* Video Container */}
              <div className="relative aspect-video bg-background-tertiary">
                <motion.video
                  id="promo-video"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{
                    opacity: videoOpacity,
                  }}
                  animate={{
                    opacity: videoOpacity,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <source src="/korkdpromo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              </div>

              {/* Video Info Bar */}
              <div className="px-6 py-4 bg-glass-dark backdrop-blur-md border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Kork'd Media - Get Results</h3>
                    <p className="text-sm text-gray-400">See how we drive leads and grow businesses</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="px-4 py-2 bg-accent-gradient rounded-lg text-white font-semibold text-sm">
                      Starting at $499
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </FadeIn>

        {/* CTA Below Video */}
        <FadeIn delay={0.2}>
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/contact"
                className="inline-block px-10 py-5 bg-accent-gradient text-white text-2xl font-bold rounded-xl shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all"
              >
                Get Kork'd Today!
              </a>
            </motion.div>
            <p className="mt-4 text-lg text-gray-400">
              Increase leads & website traffic • Packages starting at <span className="text-accent-primary font-bold">$499</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

