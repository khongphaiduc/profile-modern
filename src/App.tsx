import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';
import { AppleHelloIntro } from './components/ui/AppleHelloIntro';

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

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0B0F] text-[#F3EFE8] selection:bg-[#F6A86C]/30 selection:text-[#F3EFE8] overflow-x-hidden">
      {/* Subtle Noise Texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Apple Hello Writing Intro Curtain */}
      <AnimatePresence>
        {curtainActive && (
          <AppleHelloIntro
            onComplete={() => setCurtainActive(false)}
          />
        )}
      </AnimatePresence>

      {/* Minimal Top Navigation */}
      <Navbar onReplayIntro={() => setCurtainActive(true)} />

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

