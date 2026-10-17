import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Globe, ArrowRight } from 'lucide-react';

interface AppleHelloIntroProps {
  onComplete: () => void;
}

export const AppleHelloIntro: React.FC<AppleHelloIntroProps> = ({ onComplete }) => {
  const [lang, setLang] = useState<'en' | 'vi'>('en');
  const [isWritten, setIsWritten] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const autoDismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Speed factor: 0.85 gives an energetic yet elegant, authentic handwriting pace
  const durationScale = 0.85;
  const calc = (s: number) => s * durationScale;

  // Handle complete / dismiss
  const handleDismiss = useCallback(() => {
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
    }
    onComplete();
  }, [onComplete]);

  // Keyboard shortcut: ESC or Space to skip/enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDismiss]);

  // When animation finishes
  const handleStrokeComplete = useCallback(() => {
    setIsWritten(true);
    // Auto proceed to website after a pleasant pause (1.4s) to let user admire the completed cursive
    autoDismissTimerRef.current = setTimeout(() => {
      handleDismiss();
    }, 1500);
  }, [handleDismiss]);

  // Reset when lang changes
  const switchLang = (newLang: 'en' | 'vi') => {
    if (newLang === lang) return;
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
    }
    setIsWritten(false);
    setLang(newLang);
    setAnimKey((k) => k + 1);
  };

  const initialPath = {
    pathLength: 0,
    opacity: 0,
  };

  const animatePath = {
    pathLength: 1,
    opacity: 1,
  };

  return (
    <motion.div
      key="apple-curtain"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ 
        opacity: 0, 
        y: '-100%', 
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[999999] bg-[#07080B] text-[#F3EFE8] flex flex-col justify-between overflow-hidden select-none"
      onClick={handleDismiss}
    >
        {/* Ambient Studio Backlight */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[350px] sm:w-[900px] sm:h-[450px] rounded-full bg-gradient-to-tr from-[#F6A86C]/10 via-[#F3EFE8]/5 to-[#8ea3fa]/10 blur-[130px] opacity-75" />
          <div className="absolute w-[300px] h-[200px] rounded-full bg-[#F6A86C]/15 blur-[90px]" />
        </div>

        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Top Header Controls */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 pt-8 flex items-center justify-between">
          {/* Brand Mark */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#F6A86C] shadow-[0_0_10px_#F6A86C]" />
            <span className="text-xs font-mono-tech tracking-[0.25em] uppercase text-[#F3EFE8]/70">
              PHAM TRUNG DUC
            </span>
          </div>

          {/* Controls: Language toggle + Skip button */}
          <div 
            className="flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Language Switcher */}
            <div className="inline-flex items-center p-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => switchLang('en')}
                className={`px-3 py-1 rounded-full text-[11px] font-sans-ui transition-all ${
                  lang === 'en'
                    ? 'bg-[#F6A86C] text-[#0A0B0F] font-semibold shadow-md'
                    : 'text-[#F3EFE8]/70 hover:text-[#F3EFE8]'
                }`}
              >
                Hello
              </button>
              <button
                type="button"
                onClick={() => switchLang('vi')}
                className={`px-3 py-1 rounded-full text-[11px] font-sans-ui transition-all ${
                  lang === 'vi'
                    ? 'bg-[#F6A86C] text-[#0A0B0F] font-semibold shadow-md'
                    : 'text-[#F3EFE8]/70 hover:text-[#F3EFE8]'
                }`}
              >
                Xin chào
              </button>
            </div>

            {/* Skip Button */}
            <button
              type="button"
              onClick={handleDismiss}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/15 text-xs font-sans-ui text-[#F3EFE8]/80 hover:text-[#F3EFE8] transition-all cursor-pointer group"
            >
              <span>Skip</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] bg-white/10 border border-white/15 font-mono text-[#F3EFE8]/60">
                ESC
              </kbd>
              <ArrowRight className="w-3 h-3 text-[#F3EFE8]/60 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Center Writing Canvas */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-12">
          {/* SVG Container with Apple Glowing Effects */}
          <div className="relative w-full max-w-[620px] sm:max-w-[740px] flex items-center justify-center">
            
            {lang === 'en' ? (
              /* ENGLISH: "hello" SVG handwriting */
              <svg
                key={`hello-en-${animKey}`}
                viewBox="0 0 638 200"
                className="w-full h-auto max-h-[170px] sm:max-h-[210px] overflow-visible drop-shadow-[0_0_35px_rgba(246,168,108,0.32)]"
                fill="none"
              >
                <defs>
                  {/* Subtle warm stroke gradient */}
                  <linearGradient id="appleStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFF8F0" />
                    <stop offset="50%" stopColor="#F3EFE8" />
                    <stop offset="100%" stopColor="#F6A86C" />
                  </linearGradient>
                  
                  {/* Glowing background gradient */}
                  <linearGradient id="appleGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F6A86C" />
                    <stop offset="100%" stopColor="#D7B38C" />
                  </linearGradient>
                </defs>

                {/* Layer 1: Ambient soft blur glow behind */}
                <g opacity="0.45" filter="blur(6px)">
                  <motion.path
                    d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
                    stroke="url(#appleGlow)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={initialPath}
                    animate={animatePath}
                    transition={{
                      duration: calc(0.85),
                      ease: [0.45, 0, 0.25, 1],
                      opacity: { duration: 0.3 },
                    }}
                  />
                  <motion.path
                    d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
                    stroke="url(#appleGlow)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={initialPath}
                    animate={animatePath}
                    transition={{
                      duration: calc(2.6),
                      ease: [0.45, 0, 0.25, 1],
                      delay: calc(0.75),
                      opacity: { duration: 0.5, delay: calc(0.75) },
                    }}
                  />
                </g>

                {/* Layer 2: Main crisp handwriting stroke */}
                <g>
                  {/* Stroke 1: Left loop of 'h' */}
                  <motion.path
                    d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
                    stroke="url(#appleStroke)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={initialPath}
                    animate={animatePath}
                    transition={{
                      duration: calc(0.85),
                      ease: [0.45, 0, 0.25, 1],
                      opacity: { duration: 0.25 },
                    }}
                  />

                  {/* Stroke 2: Right hump of 'h' connected to 'ello' */}
                  <motion.path
                    d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
                    stroke="url(#appleStroke)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={initialPath}
                    animate={animatePath}
                    transition={{
                      duration: calc(2.6),
                      ease: [0.45, 0, 0.25, 1],
                      delay: calc(0.75),
                      opacity: { duration: 0.3, delay: calc(0.75) },
                    }}
                    onAnimationComplete={handleStrokeComplete}
                  />
                </g>
              </svg>
            ) : (
              /* VIETNAMESE: "xin chào" SVG handwriting */
              <svg
                key={`hello-vi-${animKey}`}
                viewBox="0 0 1009 200"
                className="w-full h-auto max-h-[170px] sm:max-h-[210px] overflow-visible drop-shadow-[0_0_35px_rgba(246,168,108,0.32)]"
                fill="none"
              >
                <defs>
                  <linearGradient id="appleStrokeVi" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFF8F0" />
                    <stop offset="50%" stopColor="#F3EFE8" />
                    <stop offset="100%" stopColor="#F6A86C" />
                  </linearGradient>
                </defs>

                {/* x1 */}
                <motion.path
                  d="M102.233 96.2277C75.6823 127.245 45.1612 158.759 11.4143 190.521"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.35), ease: 'easeInOut' }}
                />

                {/* x2 */}
                <motion.path
                  d="M7.69214 116.575C9.67725 105.16 16.8733 95.7311 28.5358 95.7311C40.4465 95.7311 46.8981 105.408 53.3497 124.019C56.7409 133.283 60.1322 142.547 63.5234 151.81C73.689 179.58 81.1988 191.513 100.855 191.513C128.722 191.513 154.043 159.148 161.595 118.502C162.929 111.321 164.774 103.736 166.043 96.2273"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.7), ease: 'easeInOut', delay: calc(0.35) }}
                />

                {/* i */}
                <motion.path
                  d="M166.043 96.2273C163.191 113.101 160.565 126.997 158.92 139.404C157.989 147.592 157.544 154.54 157.596 161.488C157.729 179.354 164.764 191.513 182.695 191.513C209.39 191.513 236.181 159.123 243.73 118.5C245.064 111.321 247.012 103.759 248.139 96.2273"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.5), ease: 'easeOut', delay: calc(0.95) }}
                />

                {/* n1 */}
                <motion.path
                  d="M248.139 96.2278C243.424 127.741 239.454 158.759 234.491 190.272"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.3), ease: 'easeOut', delay: calc(1.4) }}
                />

                {/* n2 */}
                <motion.path
                  d="M237.873 167.951C244.704 121.32 265.508 94.2422 290.322 94.2422C307.692 94.2422 316.625 106.153 315.136 123.026C313.896 135.681 309.677 150.322 308.685 162.729C307.444 179.85 316.499 191.513 330.769 191.513C348.722 191.513 359.309 179.314 364.143 165.965"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.7), ease: 'easeOut', delay: calc(1.65) }}
                />

                {/* c, h1 */}
                <motion.path
                  d="M535.91 109.876C531.265 100.446 520.943 93.4984 505.459 93.4984C476.516 93.4984 462.044 117.816 462.044 143.374C462.044 171.503 482.265 192.506 511.307 192.506C559.762 192.506 592.902 136.708 621.581 97.8807C640.764 71.9101 649.874 49.2359 650.372 31.1674C650.62 17.7684 644.168 7.60362 632.01 7.60362C618.61 7.60362 610.173 17.7684 604.963 41.1011C599.255 66.7441 595.037 96.1684 584.367 190.521"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.9), ease: 'easeInOut', delay: calc(2.3) }}
                />

                {/* h2 */}
                <motion.path
                  d="M585.413 181.299C590.677 135.025 611.663 98.2125 638.213 98.2125C654.094 98.2125 664.187 110.868 661.321 128.982C659.708 139.652 656.794 152.059 655.128 164.217C653.102 179.602 658.89 191.513 676.813 191.513C702.178 191.513 717.375 164.077 725.613 135.196"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.7), ease: 'easeInOut', delay: calc(3.1) }}
                />

                {/* a1 */}
                <motion.path
                  d="M803.871 112.995C799.007 101.8 788.666 94.2423 772.207 94.2423C744.912 94.2423 724.398 121.538 723.052 150.818C721.878 177.617 734.244 192.681 751.857 192.505C776.858 192.255 795.234 167.699 803.437 115.742C804.449 109.332 805.498 102.638 806.51 96.2274"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.6), ease: 'easeOut', delay: calc(3.7) }}
                />

                {/* a2, o */}
                <motion.path
                  d="M806.51 96.2274C805.486 102.73 804.461 109.232 803.436 115.735C798.955 144.175 796.887 155.395 797.109 162.729C797.628 179.85 803.785 191.513 820.064 191.513C842.563 191.513 860.966 164.721 870.266 138.289C879.653 111.612 891.315 94.9867 915.633 94.9867C935.732 94.9867 951.613 109.875 951.613 137.915C951.613 168.932 931.489 192.257 906.059 192.505C883.681 192.753 868.983 174.639 870.471 147.344C872.208 117.071 890.571 94.9867 914.64 94.9867C928.536 94.9867 940.207 101.164 949.38 107.89C974.247 126.031 993.407 114.82 1000.74 96.8832"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(1.2), ease: 'easeOut', delay: calc(4.2) }}
                />

                {/* sign ` (huyền) */}
                <motion.path
                  d="M763.027 19.3039C768.734 34.6886 780.397 48.3362 792.059 55.5322"
                  stroke="url(#appleStrokeVi)"
                  strokeWidth="13.5"
                  strokeLinecap="round"
                  initial={initialPath}
                  animate={animatePath}
                  transition={{ duration: calc(0.5), ease: 'easeInOut', delay: calc(5.3) }}
                  onAnimationComplete={handleStrokeComplete}
                />
              </svg>
            )}
          </div>

          {/* Subtext and Credentials: Fades in with soft bloom once writing begins/finishes */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={
              isWritten
                ? { opacity: 1, y: 0 }
                : { opacity: 0.35, y: 0 }
            }
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mt-8 sm:mt-12 flex flex-col items-center gap-3 text-center"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#F6A86C]/80" />
              <span className="text-xs sm:text-sm font-mono-tech tracking-[0.3em] uppercase text-[#F3EFE8]/80 font-medium">
                Pham Trung Duc &bull; .NET Engineer
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#F6A86C]/80" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isWritten ? { opacity: 0.7 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs font-sans-ui text-[#F3EFE8]/60 tracking-wider"
            >
              Building scalable backend architecture &amp; distributed systems
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Bar: Touch/Click to Enter hint */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 pb-8 flex items-center justify-between text-[11px] font-mono-tech text-[#F3EFE8]/40">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8ea3fa] animate-ping" />
            <span className="tracking-widest uppercase">PORTFOLIO EXHIBITION 2026</span>
          </div>

          <motion.div 
            animate={{ opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-[#F3EFE8]"
            onClick={handleDismiss}
          >
            <span>TAP ANYWHERE OR PRESS</span>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-white/10 border border-white/10 font-mono text-[#F3EFE8]/70">
              SPACE
            </kbd>
            <span>TO ENTER</span>
          </motion.div>

          <div className="text-right">
            <span>HA NOI, VIET NAM</span>
          </div>
        </div>
      </motion.div>
    );
};
