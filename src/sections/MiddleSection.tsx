import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolio';
import { ProjectModal } from '../components/ui/ProjectModal';

export const MiddleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Introduction');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const navItems = ['Introduction', 'Education', 'Experience', 'Skills'];

  const tabContents: Record<string, { p1: string; p2: string }> = {
    Introduction: {
      p1: "I'm Phạm Trung Đức, a Backend Developer and Software Engineering student at FPT University (Hà Nội).",
      p2: "Passionate about building scalable microservices, distributed systems, high-concurrency caching and production-ready applications with .NET, RabbitMQ, and Redis.",
    },
    Education: {
      p1: "FPT University (2022 — 2026) · Software Engineering major.",
      p2: "Solid foundation in Data Structures, OOP, Database Architecture, and Distributed Systems. Certified IELTS 6.0 English proficiency (2025).",
    },
    Experience: {
      p1: "Freelancer Backend Developer (May 2026 — Present) & FPT Software (Sep 2025 — April 2026).",
      p2: "Built & maintained RESTful APIs, optimized existing code for system stability, and developed production backend architectures.",
    },
    Skills: {
      p1: "BackEnd: C#, .NET Core, ASP.NET Core, EF Core, Microservices, RESTful API. Databases: SQL Server, PostgreSQL, Redis.",
      p2: "Messaging & DevOps: RabbitMQ, SignalR, Worker Service, Docker & Compose, CI/CD Jenkins, Git, Postman, xUnitTest.",
    },
  };

  // Project cards with exact 3D perspective arc matching the user's reference
  const projects3D = [
    {
      ...PORTFOLIO_DATA.projects[0],
      displayTitle: 'Foodly',
      subLine1: 'Food Order',
      subLine2: 'Microservices',
      pills: ['.NET 8', 'Microservices', 'RabbitMQ'],
      rotateY: 15,
      scale: 0.98,
      z: -10,
    },
    {
      ...PORTFOLIO_DATA.projects[1],
      displayTitle: 'Hotel Booking',
      subLine1: 'Management',
      subLine2: 'System',
      pills: ['ASP.NET Core', 'Redis', 'RabbitMQ'],
      rotateY: 6,
      scale: 1.02,
      z: 10,
    },
    {
      ...PORTFOLIO_DATA.projects[2],
      displayTitle: 'LÉM STEM',
      subLine1: 'E-commerce',
      subLine2: 'Platform',
      pills: ['ASP.NET Core', 'React', 'R2'],
      rotateY: -6,
      scale: 1.0,
      z: 5,
    },
    {
      ...PORTFOLIO_DATA.projects[3],
      displayTitle: 'Smart Parking',
      subLine1: 'IoT System',
      subLine2: '(Arduino)',
      pills: ['Arduino', 'Sensors', 'LCD'],
      rotateY: -15,
      scale: 0.98,
      z: -10,
    },
  ];

  return (
    <section className="relative w-full -mt-16 lg:-mt-20 pt-8 lg:pt-12 z-30 select-none overflow-hidden pb-10">
      {/* Background Architectural Floor & Wall Shadows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0B0F]/90 to-[#0A0B0F] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 lg:gap-6 items-end">
          
          {/* ========================================================================= */}
          {/* 01. ABOUT ME (LEFT WING - DIAGONAL SLANTED ORIGAMI WALL + MOUNTAIN BILLBOARD) */}
          {/* ========================================================================= */}
          <div id="about" className="xl:col-span-6 2xl:col-span-6 relative scroll-mt-28">
            {/* Dark Concrete Cantilever Foundation Wedge (Bottom Left) */}
            <div
              className="absolute -bottom-6 -left-6 w-72 h-20 bg-[#08090C] transform -rotate-3 -skew-x-12 pointer-events-none shadow-2xl z-0"
              aria-hidden="true"
            />

            {/* Container for Ivory Panel + Tall Mountain Billboard */}
            <div className="relative flex items-end z-10">
              
              {/* Slanted Warm Ivory Origami Paper Panel */}
              <div
                className="relative flex-grow bg-[#F3EFE8] text-[#0A0B0F] shadow-[0_35px_80px_rgba(0,0,0,0.95)] p-5 sm:p-7 lg:p-8"
                style={{
                  clipPath: 'polygon(0 14%, 100% 0%, 100% 100%, 0 88%)',
                }}
              >
                {/* Header: 01. ABOUT ME ───────── */}
                <div className="flex items-center gap-3 mb-5 pb-2 border-b border-[#0A0B0F]/15">
                  <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-[#0A0B0F]">
                    01.
                  </span>
                  <h2 className="font-serif-editorial text-lg sm:text-xl font-bold tracking-wider uppercase text-[#0A0B0F]">
                    ABOUT ME
                  </h2>
                  <div className="h-[1px] bg-[#0A0B0F]/20 w-20 sm:w-32" />
                </div>

                {/* 3 Columns Inside Ivory Panel */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                  
                  {/* Column 1: Vertical Sub-nav */}
                  <div className="sm:col-span-3 space-y-2 font-sans-ui text-xs text-[#0A0B0F]/60 border-r border-[#0A0B0F]/10 pr-2.5">
                    {navItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => setActiveTab(item)}
                        className={`flex items-center gap-1.5 text-left transition-colors cursor-pointer w-full py-0.5 ${
                          activeTab === item
                            ? 'text-[#0A0B0F] font-bold'
                            : 'hover:text-[#0A0B0F] text-[#0A0B0F]/45'
                        }`}
                      >
                        {activeTab === item && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0A0B0F] shrink-0" />
                        )}
                        <span className={activeTab === item ? '' : 'pl-3'}>
                          {item}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Column 2: Bio Description & Button */}
                  <div className="sm:col-span-6 space-y-3 pr-2 min-h-[110px]">
                    <p className="text-xs text-[#0A0B0F]/85 font-sans-ui leading-relaxed">
                      {tabContents[activeTab]?.p1 || tabContents.Introduction.p1}
                    </p>
                    <p className="text-xs text-[#0A0B0F]/85 font-sans-ui leading-relaxed">
                      {tabContents[activeTab]?.p2 || tabContents.Introduction.p2}
                    </p>

                    <div className="pt-1.5">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A0B0F]/30 text-xs font-sans-ui font-medium text-[#0A0B0F] hover:bg-[#0A0B0F] hover:text-[#F3EFE8] transition-all"
                      >
                        <span>More About Me</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Column 3: Stats (5+, IELTS 6.0, 100%) */}
                  <div className="sm:col-span-3 space-y-3 border-l border-[#0A0B0F]/15 pl-3.5 flex flex-col justify-center">
                    <div>
                      <span className="text-2xl font-serif-editorial font-bold text-[#0A0B0F] leading-none block">
                        5+
                      </span>
                      <span className="text-[10px] font-sans-ui text-[#0A0B0F]/70 block leading-tight mt-0.5">
                        Projects <br /> Completed
                      </span>
                    </div>

                    <div>
                      <span className="text-lg font-serif-editorial font-bold text-[#0A0B0F] leading-none block">
                        IELTS 6.0
                      </span>
                      <span className="text-[10px] font-sans-ui text-[#0A0B0F]/70 block leading-tight mt-0.5">
                        English <br /> Proficiency
                      </span>
                    </div>

                    <div>
                      <span className="text-2xl font-serif-editorial font-bold text-[#0A0B0F] leading-none block">
                        100%
                      </span>
                      <span className="text-[10px] font-sans-ui text-[#0A0B0F]/70 block leading-tight mt-0.5">
                        Passion for <br /> Building
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Tall Vertical Mountain Photo Billboard Rising Above the Ivory Panel */}
              <div className="relative w-36 sm:w-44 lg:w-48 shrink-0 -ml-2 -mb-2 z-20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden rounded-r-xl border-l border-white/20 aspect-[3/4.8]">
                <img
                  src="/images/about-landscape.png"
                  alt="Mountain ridges with sun rays"
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F]/75 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Cursive Gold Script: A better version of myself every day */}
                <div className="absolute inset-0 flex items-center justify-center p-3 text-center pointer-events-none">
                  <p className="font-handwritten text-xl sm:text-2xl text-[#F3EFE8] leading-tight drop-shadow-md transform -rotate-6">
                    A better <br />
                    version <br />
                    of myself <br />
                    every day.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* 02. FEATURED PROJECTS (RIGHT WING - 4 MONOLITHS IN 3D PERSPECTIVE ARC) */}
          {/* ========================================================================= */}
          <div id="projects" className="xl:col-span-6 2xl:col-span-6 relative scroll-mt-28">
            
            {/* Dark Concrete Overhead Structure Shadow */}
            <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-[#0A0B0F] pointer-events-none" />

            {/* Header: 02. FEATURED PROJECTS ────────────── View All Projects → */}
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-white/50">
                  02.
                </span>
                <h2 className="font-serif-editorial text-lg sm:text-xl font-bold tracking-wider uppercase text-[#F3EFE8]">
                  FEATURED PROJECTS
                </h2>
              </div>

              <a
                href="https://github.com/khongphaiduc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans-ui text-white/70 hover:text-[#F6A86C] transition-colors group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* 3D Curved Perspective Stage Container */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 items-end pt-2 pb-3"
              style={{
                perspective: '1400px',
                transformStyle: 'preserve-3d',
              }}
            >
              {projects3D.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                    rotateY: 0,
                    zIndex: 30,
                    boxShadow: '0 30px 60px -10px rgba(0,0,0,0.95), 0 0 25px rgba(246,168,108,0.3)',
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  onClick={() => setSelectedProject(project as Project)}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-white/15 bg-[#15161C] shadow-[0_25px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between relative will-change-transform"
                  style={{
                    transform: `rotateY(${project.rotateY}deg) scale(${project.scale}) translateZ(${project.z}px)`,
                    transformOrigin: 'bottom center',
                  }}
                >
                  {/* Project Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0B0F]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15161C] via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Project Info Block */}
                  <div className="p-3 flex flex-col justify-between flex-grow bg-[#15161C]">
                    <div>
                      <h3 className="text-sm font-serif-editorial font-bold text-[#F3EFE8] group-hover:text-[#F6A86C] transition-colors leading-snug">
                        {project.displayTitle}
                      </h3>
                      {/* Stacked 2-line subtitle matching reference */}
                      <p className="text-[11px] text-white/55 font-sans-ui mt-0.5 mb-2.5 leading-tight">
                        {project.subLine1} <br />
                        {project.subLine2}
                      </p>
                    </div>

                    {/* Tech Stack Pills matching reference */}
                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-white/5">
                      {project.pills.map((pill) => (
                        <span
                          key={pill}
                          className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono-tech text-white/80 whitespace-nowrap"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Direct Links: Product & Source */}
                    {(project.liveDemoUrl || project.githubUrl) && (
                      <div className="pt-2 mt-2 border-t border-white/10 flex flex-col gap-1 text-[10px] font-mono-tech">
                        {project.liveDemoUrl && (
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-[#F6A86C] font-semibold shrink-0">Product :</span>
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[#F3EFE8]/85 hover:text-[#F6A86C] underline underline-offset-2 truncate transition-colors flex items-center gap-1"
                              title={project.liveDemoUrl}
                            >
                              <span className="truncate">{project.liveDemoUrl.replace('https://', '')}</span>
                              <ExternalLink className="w-2.5 h-2.5 shrink-0 text-[#F6A86C]" />
                            </a>
                          </div>
                        )}
                        {project.githubUrl && (
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-white/50 font-semibold shrink-0">Source :</span>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-[#8ea3fa] hover:text-[#F6A86C] underline underline-offset-2 truncate transition-colors flex items-center gap-1"
                              title={project.githubUrl}
                            >
                              <span className="truncate">{project.githubUrl.replace('https://github.com/', '')}</span>
                              <ExternalLink className="w-2.5 h-2.5 shrink-0 text-[#8ea3fa]" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Floor Reflection Gradient */}
                  <div className="absolute -bottom-2 left-2 right-2 h-2 bg-gradient-to-b from-white/10 to-transparent blur-sm pointer-events-none" />
                </motion.div>
              ))}
            </div>

            {/* Polished Concrete Floor Line under Project Cards */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

        </div>
      </div>

      {/* Project Modal for Deep Architecture Inspection */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
