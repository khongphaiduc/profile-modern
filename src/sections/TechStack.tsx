import React, { useState } from 'react';
import { PORTFOLIO_DATA, TechItem } from '../data/portfolio';
import { TechStack3D } from '../components/three/TechStack3D';
import { Layers, Server, Database, MessageSquare, Terminal, Eye } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showCompositionRef, setShowCompositionRef] = useState<boolean>(false);

  const categories = [
    { name: 'All', icon: Layers },
    { name: 'Core', icon: Server },
    { name: 'Database', icon: Database },
    { name: 'Messaging', icon: MessageSquare },
    { name: 'DevOps', icon: Terminal },
  ];

  const filteredTech = PORTFOLIO_DATA.techStack.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section
      id="tech-stack"
      className="relative w-full py-24 lg:py-36 bg-[#0A0B0F] text-[#F3EFE8] overflow-hidden"
    >
      {/* Deep Atmospheric Blue-Violet Illumination Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#512BD4]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#F6A86C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 mb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#A9B4F7]" />
              <span className="text-xs sm:text-sm font-mono-tech uppercase tracking-[0.3em] text-[#A9B4F7]">
                03 // TECHNOLOGIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif-editorial font-light tracking-tight text-[#F3EFE8] leading-tight">
              Ecosystem Matrix &amp; <br />
              <span className="font-bold italic text-[#A9B4F7]">Architectural Blocks</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm text-[#F3EFE8]/70 max-w-sm text-left md:text-right font-sans-ui">
              Engineered with modern .NET 8 at the nucleus, surrounded by asynchronous event brokers, low-latency caches, and CI/CD automation.
            </p>

            <button
              onClick={() => setShowCompositionRef(!showCompositionRef)}
              className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#F6A86C] hover:text-[#F3EFE8] transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showCompositionRef ? 'Switch to 3D Canvas' : 'View Concept Artwork Reference'}</span>
            </button>
          </div>
        </div>

        {/* 3D Interactive Installation OR 2D Fallback / Reference Artwork */}
        <div className="mb-16">
          {showCompositionRef ? (
            <div className="relative w-full h-[580px] lg:h-[680px] rounded-3xl overflow-hidden border border-white/15 bg-[#15161C] shadow-2xl group">
              <img
                src="/images/tech-stack.png"
                alt="Architectural Composition Reference for Tech Stack"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-mono-tech tracking-[0.25em] text-[#F6A86C] block mb-1">
                    Concept Vision
                  </span>
                  <h4 className="text-2xl font-serif-editorial font-bold text-[#F3EFE8]">
                    Floating Architectural Ecosystem
                  </h4>
                </div>
                <button
                  onClick={() => setShowCompositionRef(false)}
                  className="px-5 py-2.5 rounded-full bg-[#F3EFE8] text-[#0A0B0F] text-xs font-mono-tech uppercase tracking-wider font-semibold hover:bg-[#F6A86C] transition-colors cursor-pointer"
                >
                  Return to 3D Space
                </button>
              </div>
            </div>
          ) : (
            <TechStack3D />
          )}
        </div>

        {/* Filter Bar & Detailed Specification Cards */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
            <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#F3EFE8]/50">
              Technical Directory
            </span>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono-tech uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat.name
                        ? 'bg-[#A9B4F7] text-[#0A0B0F] font-bold shadow-[0_0_20px_rgba(169,180,247,0.35)]'
                        : 'bg-white/5 text-[#F3EFE8]/70 border border-white/10 hover:border-white/25 hover:text-[#F3EFE8]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Technology Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTech.map((item: TechItem) => (
              <div
                key={item.name}
                className="group p-5 rounded-2xl bg-[#15161C]/80 border border-white/10 hover:border-[#A9B4F7]/50 hover:bg-[#15161C] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-white/5 text-[#A9B4F7] border border-white/5">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono-tech text-[#F6A86C]">
                      {item.level}
                    </span>
                  </div>

                  <h4 className="text-xl font-serif-editorial font-bold text-[#F3EFE8] group-hover:text-[#A9B4F7] transition-colors mb-2">
                    {item.name}
                  </h4>

                  <p className="text-xs text-[#F3EFE8]/70 leading-relaxed font-sans-ui">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-white/40">
                  <span>DEPLOYED IN PRODUCTION</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60E45E]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
