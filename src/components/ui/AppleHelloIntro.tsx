import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface AppleHelloIntroProps {
  onComplete: () => void;
}

export const AppleHelloIntro: React.FC<AppleHelloIntroProps> = ({ onComplete }) => {
  const [isWritten, setIsWritten] = useState(false);
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

        {/* Top Header */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 pt-8 flex items-center justify-between">
          {/* Brand Mark */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#F6A86C] shadow-[0_0_10px_#F6A86C]" />
            <span className="text-xs font-mono-tech tracking-[0.25em] uppercase text-[#F3EFE8]/70">
              PHAM TRUNG DUC
            </span>
          </div>
        </div>

        {/* Center Writing Canvas */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-12">
          {/* SVG Container with Apple Glowing Effects */}
          <div className="relative w-full max-w-[620px] sm:max-w-[740px] flex items-center justify-center">
            {/* Apple "hello" SVG handwriting */}
            <svg
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
