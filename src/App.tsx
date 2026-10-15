import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';

import { Hero } from './sections/Hero';
import { MiddleSection } from './sections/MiddleSection';
import { BottomSection } from './sections/BottomSection';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [curtainActive, setCurtainActive] = useState(true);

  // Initialize Lenis Smooth Scroll and sync with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Initial cinematic curtain
    const curtainTimer = setTimeout(() => {
      setCurtainActive(false);
    }, 1100);

    return () => {
      clearTimeout(curtainTimer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0B0F] text-[#F3EFE8] selection:bg-[#F6A86C]/30 selection:text-[#F3EFE8] overflow-x-hidden">
      {/* Subtle Noise Texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Initial Black Cinematic Curtain Reveal */}
      <AnimatePresence>
        {curtainActive && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#0A0B0F] flex flex-col items-center justify-center p-8 pointer-events-none"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="font-borel text-5xl sm:text-7xl text-[#F3EFE8] tracking-normal drop-shadow-[0_4px_30px_rgba(246,168,108,0.35)] select-none">
                Hello
              </span>
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#F6A86C]" />
                <span className="text-xs font-mono-tech tracking-[0.25em] uppercase text-[#F3EFE8]/70">
                  PHAM TRUNG DUC &bull; .NET PORTFOLIO
                </span>
                <span className="w-6 h-[1px] bg-[#F6A86C]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Top Navigation */}
      <Navbar />

      {/* Main Exhibition Layout Matching Reference Design */}
      <main>
        {/* Top: Cinematic Hero Section */}
        <Hero />

        {/* Middle Band: 01. About Me (Left) + 02. Featured Projects (Right) */}
        <MiddleSection />

        {/* Bottom Band: 03. Tech Stack + 04. Experience & Education + 05. Let's Work Together */}
        <BottomSection />
      </main>
    </div>
  );
}

