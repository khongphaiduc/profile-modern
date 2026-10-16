import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../ui/Icons';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0B0F] text-[#F3EFE8] border-t border-white/10 overflow-hidden pt-16 pb-12">
      {/* Background architectural fine grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Identity & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#D7B38C]/40 rotate-45 flex items-center justify-center">
                <span className="font-serif-editorial text-xs font-bold text-[#F3EFE8] -rotate-45">
                  PTĐ
                </span>
              </div>
              <span className="font-serif-editorial text-xl font-bold tracking-wider text-[#F3EFE8]">
                PHẠM TRUNG ĐỨC
              </span>
            </div>
            <p className="text-sm text-[#F3EFE8]/70 leading-relaxed max-w-md font-sans-ui">
              Software Engineering undergraduate at FPT University. Architecting high-throughput .NET backend microservices, event-driven pipelines, and distributed systems.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono-tech text-[#D7B38C]">
              <span className="w-2 h-2 rounded-full bg-[#60E45E] animate-ping" />
              <span>{PORTFOLIO_DATA.profile.coordinates} &bull; VIETNAM</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#F6A86C] block">
              Site Navigation
            </span>
            <ul className="space-y-2 text-sm font-sans-ui">
              <li>
                <a href="#me" className="text-[#F3EFE8]/70 hover:text-[#F3EFE8] transition-colors">
                  01 / Cinematic Hero
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#F3EFE8]/70 hover:text-[#F3EFE8] transition-colors">
                  02 / About & Philosophy
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#F3EFE8]/70 hover:text-[#F3EFE8] transition-colors">
                  03 / Selected Works
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="text-[#F3EFE8]/70 hover:text-[#F3EFE8] transition-colors">
                  04 / Tech Ecosystem
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#F3EFE8]/70 hover:text-[#F3EFE8] transition-colors">
                  05 / Journey & Education
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#F6A86C] block">
              Direct Inquiries
            </span>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="text-lg sm:text-xl font-serif-editorial text-[#F3EFE8] hover:text-[#D7B38C] transition-colors block break-all"
            >
              {PORTFOLIO_DATA.profile.email}
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F3EFE8] hover:border-[#F6A86C] hover:bg-[#F6A86C]/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F3EFE8] hover:border-[#F6A86C] hover:bg-[#F6A86C]/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F3EFE8] hover:border-[#F6A86C] hover:bg-[#F6A86C]/10 transition-colors"
                aria-label="Facebook Profile"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F3EFE8] hover:border-[#F6A86C] hover:bg-[#F6A86C]/10 transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#F3EFE8]/50">
          <div>
            &copy; {new Date().getFullYear()} Phạm Trung Đức. Designed with Architectural Brutalism.
          </div>
          <div className="flex items-center gap-6">
            <span>FPT UNIVERSITY &bull; SE</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#F3EFE8] hover:text-[#F6A86C] transition-colors cursor-pointer group"
              aria-label="Scroll to top"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
