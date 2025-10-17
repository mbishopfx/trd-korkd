'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function LoadingSplash() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide splash after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Safety fallback - hide splash after 5 seconds no matter what
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          {/* Animated background rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1], opacity: [0, 0.3, 0] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-96 h-96 border-2 border-accent-primary rounded-full"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.8, 1], opacity: [0, 0.2, 0] }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute w-96 h-96 border-2 border-accent-primary rounded-full"
          />

          {/* Logo with splat animation */}
          <motion.div
            initial={{ scale: 0, rotate: -360 }}
            animate={{ 
              scale: [0, 1.2, 0.9, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              times: [0, 0.5, 0.8, 1]
            }}
            className="relative w-48 h-48 z-10"
          >
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 0px rgba(0, 212, 255, 0))',
                  'drop-shadow(0 0 40px rgba(0, 212, 255, 0.8))',
                  'drop-shadow(0 0 20px rgba(0, 212, 255, 0.4))',
                ],
              }}
              transition={{
                duration: 1.5,
                times: [0, 0.5, 1],
              }}
            >
              <Image
                src="/korklogo.png"
                alt="Kork'd Media"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Splat particles */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const distance = 120;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            return (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: [0, x, x * 1.5],
                  y: [0, y, y * 1.5],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + (i * 0.05),
                  ease: "easeOut"
                }}
                className="absolute w-2 h-2 bg-accent-primary rounded-full"
              />
            );
          })}

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: 0 }}
            transition={{
              duration: 2,
              times: [0, 0.3, 0.8, 1],
            }}
            className="absolute bottom-32 text-accent-primary font-semibold tracking-wider"
          >
            LOADING...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

