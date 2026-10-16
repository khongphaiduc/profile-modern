import React, { useState } from 'react';
import { ArrowRight, Briefcase, Mail, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../components/ui/Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const BottomSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full pt-4 pb-16 lg:pb-24 bg-[#0A0B0F] text-[#F3EFE8] overflow-hidden select-none">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Grid Matching Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-start">
          
          {/* ======================================================== */}
          {/* 03. TECH STACK (COLUMN 1 - Categorized Stack Listing) */}
          {/* ======================================================== */}
          <div id="tech-stack" className="lg:col-span-3 flex flex-col justify-start h-full scroll-mt-24">
            {/* Header: 03. TECH STACK */}
            <div className="flex items-center gap-3 pb-3 mb-4 border-b border-white/10">
              <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-white/50">
                03.
              </span>
              <h2 className="font-serif-editorial text-lg sm:text-xl font-bold tracking-wider uppercase text-[#F3EFE8]">
                TECH STACK
              </h2>
            </div>

            {/* Categorized Tech Stack Listing */}
            <div className="space-y-3.5 font-sans-ui">
              {/* BackEnd */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8ea3fa]" />
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#8ea3fa] font-semibold">
                    BackEnd
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['C#', '.NET Core', 'ASP.NET Core', 'EF Core', 'Microservices', 'RESTful API', 'LINQ', 'OOP & SOLID', 'Design Patterns'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-[#F3EFE8]/85 hover:border-[#8ea3fa]/60 hover:bg-[#8ea3fa]/10 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6A86C]" />
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#F6A86C] font-semibold">
                    Database
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['SQL Server', 'PostgreSQL', 'Redis'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-[#F3EFE8]/85 hover:border-[#F6A86C]/60 hover:bg-[#F6A86C]/10 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real-Time / Messaging */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#38bdf8] font-semibold">
                    Real-Time / Messaging
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['RabbitMQ', 'SignalR', 'Worker Service'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-[#F3EFE8]/85 hover:border-[#38bdf8]/60 hover:bg-[#38bdf8]/10 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps / Tools */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#a78bfa] font-semibold">
                    DevOps &amp; Tools
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Git', 'Docker', 'Docker Compose', 'CI/CD (Jenkins)', 'Postman', 'xUnitTest'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-[#F3EFE8]/85 hover:border-[#a78bfa]/60 hover:bg-[#a78bfa]/10 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FrontEnd */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#34d399] font-semibold">
                    FrontEnd
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['HTML', 'CSS', 'Bootstrap', 'ReactJS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-[#F3EFE8]/85 hover:border-[#34d399]/60 hover:bg-[#34d399]/10 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 04. EXPERIENCE & EDUCATION (COLUMN 2 - 29% / 3.5 cols) */}
          {/* ======================================================== */}
          <div id="experience" className="lg:col-span-3 xl:col-span-3 flex flex-col justify-between h-full scroll-mt-24">
            {/* Header: 04. EXPERIENCE & EDUCATION */}
            <div className="flex items-center gap-3 pb-3 mb-5 border-b border-white/10">
              <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-white/50">
                04.
              </span>
              <h2 className="font-serif-editorial text-lg sm:text-xl font-bold tracking-wider uppercase text-[#F3EFE8]">
                EXPERIENCE &amp; EDUCATION
              </h2>
            </div>

            {/* Vertical Timeline */}
            <div className="relative pl-8 space-y-6 before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/15">
              
              {/* Item 1: FPT Software */}
              <div className="relative">
                {/* FPT Software Badge */}
                <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-md p-1">
                  <div className="flex items-center justify-center font-bold text-[8px] leading-none tracking-tighter">
                    <span className="text-[#005CA9]">F</span>
                    <span className="text-[#F37021]">P</span>
                    <span className="text-[#008080]">T</span>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono-tech text-[#F6A86C] block font-semibold">
                    Sep 2025 &mdash; April 2026
                  </span>
                  <h3 className="text-base font-serif-editorial font-bold text-[#F3EFE8]">
                    FPT Software
                  </h3>
                  <span className="text-xs font-sans-ui text-white/80 block font-medium">
                    Back End Developer
                  </span>
                  <p className="text-xs text-white/60 font-sans-ui leading-relaxed pt-1">
                    Built & maintained RESTful APIs, optimized existing code for system stability, and collaborated in Agile sprints & iterative feature delivery.
                  </p>
                </div>
              </div>

              {/* Item 2: FPT University & IELTS */}
              <div className="relative">
                {/* Academic Degree Badge */}
                <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-[#1e293b] border border-white/20 flex items-center justify-center shadow-md text-[#8ea3fa]">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono-tech text-white/40 block">
                    2022 &mdash; 2026
                  </span>
                  <h3 className="text-base font-serif-editorial font-bold text-[#F3EFE8]">
                    FPT University
                  </h3>
                  <span className="text-xs font-sans-ui text-white/80 block font-medium">
                    Software Engineering &bull; IELTS 6.0
                  </span>
                  <p className="text-xs text-white/60 font-sans-ui leading-relaxed pt-1">
                    Core foundation in Data Structures, Database Architecture, OOP, and Distributed Systems. Certified IELTS 6.0 (2025).
                  </p>
                </div>
              </div>

              {/* Item 3: Freelancer Backend Developer */}
              <div className="relative">
                {/* Freelance Badge */}
                <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-[#1e293b] border border-white/20 flex items-center justify-center shadow-md text-[#F6A86C]">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono-tech text-[#F6A86C] block font-semibold">
                    May 2026 &mdash; Present
                  </span>
                  <h3 className="text-base font-serif-editorial font-bold text-[#F3EFE8]">
                    Freelancer Backend Developer
                  </h3>
                  <p className="text-xs text-white/60 font-sans-ui leading-relaxed pt-1">
                    Building custom backend systems, designing microservices architectures, cloud deployment to VPS, and collaborating on high-impact client projects.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* 05. LET'S WORK TOGETHER (COLUMN 3 - 46% / 6 cols - FULL ARCH) */}
          {/* ======================================================== */}
          <div id="contact" className="lg:col-span-6 xl:col-span-6 relative flex flex-col justify-between h-full min-h-[380px] scroll-mt-24 rounded-2xl overflow-hidden bg-[#0A0B0F]">
            
            {/* FULL BACKGROUND ARTWORK: contact-background.webp spanning the right half in full without box crop */}
            <div className="absolute right-0 top-0 bottom-0 w-[62%] sm:w-[65%] h-full pointer-events-none overflow-hidden">
              <img
                src="/images/contact-background.webp"
                alt="Monumental circular concrete arch overlooking sunset cityscape"
                className="w-full h-full object-cover object-[center_center] filter contrast-[1.08] brightness-[0.98]"
              />
              {/* Smooth Left Gradient Fade into pure black for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0F] via-[#0A0B0F]/40 to-transparent" />
              {/* Subtle top/bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0F]/30 via-transparent to-[#0A0B0F]/60" />
            </div>

            {/* Overlaid Gold Cursive Script: Same Passion Bigger Journey right on the foliage at arch foot */}
            <div className="absolute left-[34%] sm:left-[36%] bottom-6 pointer-events-none transform -rotate-12 z-20">
              <p className="font-handwritten text-2xl sm:text-3xl lg:text-[2.2rem] text-[#F6A86C] leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Same <br />
                Passion <br />
                Bigger <br />
                Journey.
              </p>
            </div>

            {/* Header: 05. LET'S WORK TOGETHER */}
            <div className="relative z-10 flex items-center gap-3 pb-3 mb-5 border-b border-white/10 w-full">
              <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-white/50">
                05.
              </span>
              <h2 className="font-serif-editorial text-lg sm:text-xl font-bold tracking-wider uppercase text-[#F3EFE8]">
                LET&apos;S WORK TOGETHER
              </h2>
            </div>

            {/* Left Content (Text, CTA, Social Icons) */}
            <div className="relative z-10 max-w-[50%] sm:max-w-[46%] flex flex-col justify-between flex-grow pb-1">
              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif-editorial font-bold text-[#F3EFE8] leading-[1.08] mb-2">
                  Have an idea <br /> in mind?
                </h3>

                <p className="text-xs sm:text-[13px] text-white/70 font-sans-ui leading-relaxed mb-3">
                  I&apos;m currently open to new opportunities, freelance projects and collaborations. Feel free to reach out!
                </p>

                {/* Contact Coordinates */}
                <div className="text-[11px] font-mono-tech text-white/50 mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>Hà Nội</span>
                  <span>&bull;</span>
                  <a href="tel:0329255823" className="hover:text-[#F6A86C] transition-colors">
                    0329 255 823
                  </a>
                  <span>&bull;</span>
                  <a href="https://phamtrungduc.info" target="_blank" rel="noopener noreferrer" className="text-[#8ea3fa] hover:text-[#F6A86C] transition-colors">
                    phamtrungduc.info
                  </a>
                </div>

                {/* Get In Touch Pill Button */}
                <div className="mb-6">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/35 bg-[#0A0B0F]/90 text-xs sm:text-[13px] font-sans-ui font-medium text-[#F3EFE8] hover:border-white hover:bg-white/10 transition-all group"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {/* Facebook / Social Icon */}
                <a
                  href={PORTFOLIO_DATA.profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={copyEmail}
                  className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white/50 transition-colors cursor-pointer"
                  aria-label="Email"
                  title="Click to copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-[#60E45E]" /> : <Mail className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
