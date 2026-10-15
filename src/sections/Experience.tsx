import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { GraduationCap, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getMilestoneIcon = (idx: number) => {
    if (idx === 0) return GraduationCap;
    if (idx === 1) return Code2;
    return Rocket;
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-36 bg-[#0A0B0F] text-[#F3EFE8] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#D7B38C]" />
            <span className="text-xs sm:text-sm font-mono-tech uppercase tracking-[0.3em] text-[#D7B38C]">
              04 // THE JOURNEY
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif-editorial font-light tracking-tight text-[#F3EFE8] leading-tight">
            Academic Foundation &amp; <br />
            <span className="font-bold italic text-[#F6A86C]">Engineering Trajectory</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F3EFE8]/70 max-w-xl font-sans-ui">
            An authentic chronology of higher education, system architecture experiments, and deliberate mastery of backend ecosystems.
          </p>
        </div>

        {/* Timeline Container with Center Vertical Line */}
        <div className="relative pt-6 pb-12">
          {/* Animated Central Vertical Architectural Line */}
          <div
            ref={lineRef}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#F6A86C] via-[#D7B38C]/50 to-transparent -translate-x-1/2 will-change-transform"
          />

          <div className="space-y-16 sm:space-y-24">
            {PORTFOLIO_DATA.timeline.map((item, idx) => {
              const isEven = idx % 2 === 1;
              const Icon = getMilestoneIcon(idx);

              return (
                <div
                  key={idx}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-0"
                >
                  {/* Central Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-[#F6A86C] bg-[#0A0B0F] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(246,168,108,0.5)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F6A86C]" />
                  </div>

                  {/* Left Column / Right Column depending on alternating layout */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:order-2 sm:pl-16' : 'sm:order-1 sm:pr-16 sm:text-right'
                    }`}
                  >
                    <div className="inline-block">
                      <span className="text-3xl sm:text-5xl lg:text-6xl font-serif-editorial font-light text-[#D7B38C]/40 block mb-1">
                        {item.period}
                      </span>
                      <span className="text-xs uppercase font-mono-tech tracking-[0.25em] text-[#F6A86C] block">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Card Column */}
                  <div
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                      isEven ? 'sm:order-1 sm:pr-16' : 'sm:order-2 sm:pl-16'
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#15161C]/80 border border-white/10 hover:border-[#D7B38C]/40 transition-all duration-300 shadow-xl space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#F6A86C]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-serif-editorial font-bold text-[#F3EFE8]">
                            {item.title}
                          </h3>
                          <span className="text-xs font-mono-tech text-[#D7B38C]">
                            {item.institution}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#F3EFE8]/75 leading-relaxed font-sans-ui">
                        {item.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-white/5">
                        {item.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-[#F3EFE8]/70"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F6A86C] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
