import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#me' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/PhamTrungDuc_NET.pdf';
    link.setAttribute('download', 'PhamTrungDuc_NET_Developer.pdf');
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'py-3.5 bg-[#0A0B0F]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          {/* Left: Apple Hello Replay Button */}
          {onReplayIntro ? (
            <button
              type="button"
              onClick={onReplayIntro}
              title="Replay Apple Hello effect"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#F6A86C]/40 transition-all cursor-pointer select-none"
            >
              <span className="font-borel text-base text-[#F3EFE8]/80 group-hover:text-[#F6A86C] transition-colors -rotate-2 inline-block">
                hello
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F6A86C]/70 group-hover:scale-125 transition-transform" />
            </button>
          ) : (
            <div className="w-6 sm:w-8" aria-hidden="true" />
          )}


          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-[13px] font-sans-ui text-[#F3EFE8]/75 hover:text-[#F3EFE8] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle + Download CV */}
          <div className="flex items-center gap-3.5">

            {/* Download CV Pill Button */}
            <button
              onClick={handleDownloadCV}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.04] text-xs font-sans-ui text-[#F3EFE8] hover:border-[#F6A86C] hover:bg-[#F6A86C]/10 transition-all cursor-pointer"
            >
              <span>Download CV</span>
              <Download className="w-3.5 h-3.5 text-[#F3EFE8]/70" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-[#F3EFE8] cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#0A0B0F]/98 backdrop-blur-2xl flex flex-col justify-center px-8 py-20">
          <div className="space-y-6">
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.3em] text-[#F6A86C] block">
              Menu Index
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-3xl font-serif-editorial text-[#F3EFE8] hover:text-[#F6A86C] transition-colors"
              >
                <span className="font-mono-tech text-xs text-[#D7B38C]/60 mr-3">
                  0{idx + 1}
                </span>
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              {onReplayIntro && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#F6A86C]/40 bg-[#F6A86C]/10 text-[#F6A86C] text-sm cursor-pointer"
                >
                  <span className="font-borel text-lg">hello</span>
                  <span>Replay Apple Intro</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadCV();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[#F3EFE8] text-sm"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
