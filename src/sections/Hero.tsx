import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myAvatar from '../assets/myavatar.webp';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 18,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (svgPathRef.current) {
        const length = svgPathRef.current.getTotalLength();
        gsap.set(svgPathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(svgPathRef.current, {
          strokeDashoffset: 0,
          duration: 2.2,
          delay: 0.6,
          ease: 'power2.out',
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="me"
      ref={heroRef}
      className="relative w-full min-h-[920px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0B0F]"
    >
      {/* Background Image with Layered Shadows */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[115%] -top-[7%] will-change-transform pointer-events-none"
      >
        <img
          src="/images/hero-background.webp"
          alt="Brutalist architectural sunset scenery"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08]"
        />
        {/* Subtle cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-transparent to-[#0A0B0F]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0F]/85 via-transparent to-[#0A0B0F]/50" />
      </div>

      {/* Progressive Curved Luminous Thread Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F6A86C" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8ea3fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F6A86C" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          ref={svgPathRef}
          d="M 60 520 C 280 500, 480 320, 850 480 S 1320 220, 1460 300"
          fill="none"
          stroke="url(#curveGradient)"
          strokeWidth="1.6"
        />
      </svg>

      {/* Circular Avatar Frame on the Right - Responsive on mobile, tablet & desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        className="block absolute right-5 top-24 sm:right-10 sm:top-28 md:right-[8%] lg:right-[12%] xl:right-[15%] md:top-[16%] lg:top-[18%] z-20"
      >
        <div className="relative group">
          {/* Subtle Ambient Glow Ring */}
          <div className="absolute -inset-1.5 md:-inset-2 rounded-full bg-gradient-to-tr from-[#F6A86C]/30 via-[#8ea3fa]/25 to-transparent blur-md opacity-70 group-hover:opacity-100 transition duration-700" />

          {/* Sleek Thin Border Ring */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-[330px] xl:h-[330px] rounded-full p-[2px] bg-gradient-to-b from-white/45 via-white/20 to-[#F6A86C]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            {/* Inner Frame with Image */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0B0F]">
              <img
                src={myAvatar}
                alt="Phạm Trung Đức"
                className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Slanted Handwritten Quote near Developer: "Turning Ideas Into Real Products" */}
      <div className="block absolute z-20 pointer-events-none transform -rotate-6 md:-rotate-12 right-[130px] top-[100px] sm:right-[175px] sm:top-[120px] md:right-auto md:left-[44%] md:top-[22%] lg:left-[48%] lg:top-[26%]">
        <p className="font-handwritten text-lg sm:text-2xl md:text-3xl xl:text-4xl text-[#F6A86C] leading-[1.05] md:leading-none opacity-95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] select-none text-right md:text-left">
          Turning <br />
          Ideas <br />
          Into <br />
          Real Products
        </p>
      </div>

      {/* Vertical Right Edge Label: SOFTWARE DEVELOPER — */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20 pointer-events-none">
        <span className="text-[10px] font-mono-tech tracking-[0.35em] uppercase text-white/50 rotate-90 origin-center whitespace-nowrap">
          SOFTWARE DEVELOPER &mdash;
        </span>
      </div>

      {/* Right Side Editorial Quote: “ Clean Code Better Products Brighter Future ” */}
      <div className="hidden lg:flex flex-col items-center text-center absolute right-[6%] bottom-[24%] z-20 pointer-events-none max-w-[210px]">
        <p className="font-serif-editorial italic text-lg xl:text-xl text-[#F3EFE8]/90 leading-snug">
          &ldquo; Clean Code <br />
          Better Products <br />
          Brighter Future &rdquo;
        </p>
        <div className="flex items-center gap-2 mt-3 text-white/40 text-[10px]">
          <span className="w-8 h-[1px] bg-white/30" />
          <span className="text-[#F6A86C]">&loz;</span>
          <span className="w-8 h-[1px] bg-white/30" />
        </div>
      </div>

      {/* Main Left Content Container */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 pt-36 pb-20 flex flex-col justify-between min-h-[920px] lg:min-h-screen">
        {/* Central Left Typography */}
        <div className="max-w-3xl my-auto py-8">

          {/* Main Title: Pham Trung Đức */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-serif-editorial font-bold tracking-tight leading-[0.92] text-[#F3EFE8]">
              Pham <br />
              Trung <span className="text-[#8ea3fa]">Đức</span>
            </h1>
          </motion.div>

          {/* Subtitle: . N E T   B A C K E N D   D E V E L O P E R */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex items-center gap-2"
          >
            <span className="text-xs sm:text-sm font-mono-tech uppercase tracking-[0.35em] text-[#8ea3fa] font-medium">
              . N E T &nbsp; B A C K E N D &nbsp; D E V E L O P E R
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-5 text-sm sm:text-base lg:text-lg text-[#F3EFE8]/80 max-w-xl font-sans-ui leading-relaxed"
          >
            I build scalable web applications, microservices and real-world products using .NET, cloud technologies and modern development practices.
          </motion.p>

          {/* CTA Button: (->) View My Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 flex items-center gap-6"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-3.5 pl-3.5 pr-7 py-2.5 rounded-full border border-white/25 bg-[#0A0B0F]/60 backdrop-blur-md text-xs sm:text-sm font-sans-ui text-[#F3EFE8] hover:border-[#F6A86C] hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#F6A86C] group-hover:bg-[#F6A86C] group-hover:text-[#0A0B0F] transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
              <span className="font-medium tracking-wide">View My Works</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Left: SCROLL DOWN indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-3 text-xs font-mono-tech uppercase tracking-[0.25em] text-white/50"
        >
          <span className="w-[1px] h-6 bg-white/40" />
          <span className="text-[10px]">SCROLL DOWN</span>
        </motion.div>
      </div>
    </section>
  );
};
