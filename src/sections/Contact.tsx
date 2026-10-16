import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../components/ui/Icons';
import { MagneticButton } from '../components/ui/MagneticButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contactRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          scale: 1.06,
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (archRef.current) {
        gsap.fromTo(
          archRef.current,
          { opacity: 0.5, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contactRef.current,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1,
            },
          }
        );
      }
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative w-full min-h-screen py-24 lg:py-36 flex items-center justify-center bg-[#0A0B0F] text-[#F3EFE8] overflow-hidden"
    >
      {/* Background Architectural Arch Image with Sunset Cityscape */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform pointer-events-none"
      >
        <img
          src="/images/contact-background.webp"
          alt="Monumental circular concrete arch overlooking sunset cityscape"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.12]"
        />
        {/* Layered Gradient Masks for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-[#0A0B0F]/50 to-[#0A0B0F]/80" />
        <div className="absolute inset-0 bg-[#0A0B0F]/30 backdrop-blur-[1px]" />
      </div>

      {/* Circular Arch Framing Glow */}
      <div
        ref={archRef}
        className="absolute w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full border border-[#F6A86C]/20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(246,168,108,0.06)_0%,transparent_70%)]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Editorial Subtitle */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F6A86C] animate-pulse" />
          <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#D7B38C]">
            05 // FINALE &amp; CONTACT
          </span>
        </div>

        <p className="text-sm sm:text-base font-mono-tech uppercase tracking-[0.3em] text-[#F6A86C] mb-4">
          Have an idea in mind?
        </p>

        {/* Monumental Serif Typography */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif-editorial font-light tracking-tight text-[#F3EFE8] leading-[0.95] mb-8">
          LET&apos;S CREATE <br />
          <span className="font-bold italic text-[#F6A86C]">SOMETHING</span> <br />
          MEANINGFUL.
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#F3EFE8]/80 max-w-xl font-sans-ui font-light leading-relaxed mb-12">
          Seeking opportunities in backend engineering, distributed systems development, and microservices architecture. Let&apos;s build resilient software that matters.
        </p>

        {/* Interactive Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md">
          <MagneticButton className="w-full sm:w-auto">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F3EFE8] text-[#0A0B0F] font-sans-ui font-bold text-sm tracking-wide uppercase hover:bg-[#F6A86C] transition-all duration-300 shadow-[0_0_30px_rgba(246,168,108,0.3)] group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>

          <button
            onClick={copyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-[#15161C]/80 backdrop-blur-md text-xs font-mono-tech uppercase tracking-wider text-[#F3EFE8] hover:border-[#D7B38C] hover:bg-[#15161C] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#60E45E]" />
                <span className="text-[#60E45E]">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#D7B38C]" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Direct Email Address Display */}
        <div className="mt-8">
          <span className="text-xs font-mono-tech text-[#F3EFE8]/40 block mb-1">
            OR DIRECT INQUIRY
          </span>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="text-base sm:text-lg font-serif-editorial text-[#D7B38C] hover:text-[#F6A86C] transition-colors border-b border-[#D7B38C]/30 pb-0.5"
          >
            {PORTFOLIO_DATA.profile.email}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-10">
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-[#F6A86C] hover:bg-[#F6A86C]/10 transition-colors text-xs font-mono-tech uppercase tracking-wider"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-[#F6A86C] hover:bg-[#F6A86C]/10 transition-colors text-xs font-mono-tech uppercase tracking-wider"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={PORTFOLIO_DATA.profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-[#F6A86C] hover:bg-[#F6A86C]/10 transition-colors text-xs font-mono-tech uppercase tracking-wider"
          >
            <FacebookIcon className="w-4 h-4" />
            <span>Facebook</span>
          </a>
        </div>

        {/* Closing Editorial Message */}
        <p className="mt-16 text-xs font-handwritten text-[#D7B38C] text-xl opacity-90 max-w-sm">
          &ldquo;Precision in every packet &mdash; resilience in every service.&rdquo;
        </p>
      </div>
    </section>
  );
};
