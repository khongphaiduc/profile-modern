import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Introduction');

  const navItems = ['Introduction', 'Education', 'Interests', 'What I Do'];

  return (
    <section id="about" className="relative w-full py-16 lg:py-24 bg-[#0A0B0F] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Giant Asymmetrical Warm Ivory Polygon Panel (#F3EFE8) */}
        <div
          className="relative bg-[#F3EFE8] text-[#0A0B0F] rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 4%, 100% 100%, 0 100%)',
          }}
        >
          {/* Top Line: 01. ABOUT ME ──────── */}
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-[#0A0B0F]/10">
            <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-[#0A0B0F]">
              01.
            </span>
            <h2 className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#0A0B0F]">
              ABOUT ME
            </h2>
            <div className="h-[1px] bg-[#0A0B0F]/20 flex-grow max-w-xs hidden sm:block" />
          </div>

          {/* Grid Layout: Left Nav + Bio Text + Stats + Landscape Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Nav Tabs */}
            <div className="lg:col-span-3 space-y-3 font-sans-ui text-sm text-[#0A0B0F]/60">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`flex items-center gap-2.5 text-left transition-colors cursor-pointer w-full py-1 ${
                    activeTab === item
                      ? 'text-[#0A0B0F] font-bold'
                      : 'hover:text-[#0A0B0F]'
                  }`}
                >
                  {activeTab === item && (
                    <span className="w-2 h-2 rounded-full bg-[#0A0B0F] shrink-0" />
                  )}
                  <span className={activeTab === item ? 'translate-x-0' : 'pl-4.5'}>
                    {item}
                  </span>
                </button>
              ))}
            </div>

            {/* Center: Biography Description & CTA */}
            <div className="lg:col-span-4 space-y-6">
              <p className="text-sm sm:text-base text-[#0A0B0F]/85 font-sans-ui leading-relaxed">
                I&apos;m Phạm Trung Đức, a Software Engineering student at FPT University. I&apos;m passionate about building web applications, solving real-world problems and continuously learning new technologies.
              </p>
              <p className="text-sm sm:text-base text-[#0A0B0F]/85 font-sans-ui leading-relaxed">
                I enjoy turning ideas into useful software products.
              </p>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#0A0B0F]/30 text-xs sm:text-sm font-sans-ui font-medium text-[#0A0B0F] hover:border-[#0A0B0F] hover:bg-[#0A0B0F] hover:text-[#F3EFE8] transition-all"
                >
                  <span>More About Me</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Metrics Stats: 5+, 2+, 100% */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col justify-between lg:justify-start gap-6 border-y lg:border-y-0 lg:border-l border-[#0A0B0F]/15 py-4 lg:py-0 lg:pl-8">
              <div>
                <span className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#0A0B0F] block">
                  5+
                </span>
                <span className="text-xs font-sans-ui text-[#0A0B0F]/70 block leading-tight mt-1">
                  Projects <br /> Completed
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#0A0B0F] block">
                  2+
                </span>
                <span className="text-xs font-sans-ui text-[#0A0B0F]/70 block leading-tight mt-1">
                  Years <br /> Experience
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[#0A0B0F] block">
                  100%
                </span>
                <span className="text-xs font-sans-ui text-[#0A0B0F]/70 block leading-tight mt-1">
                  Passion for <br /> Building
                </span>
              </div>
            </div>

            {/* Right: Framed Vertical Mountain Photo with Handwritten Cursive Text */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] group">
                <img
                  src="/images/about-landscape.png"
                  alt="Mountain range landscape"
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F]/60 via-transparent to-transparent" />

                {/* Overlaid Cursive Handwritten Text */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center pointer-events-none">
                  <p className="font-handwritten text-2xl sm:text-3xl text-[#F3EFE8] leading-snug drop-shadow-lg transform -rotate-3">
                    A better <br />
                    version <br />
                    of myself <br />
                    every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
