import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolio';
import { ProjectModal } from '../components/ui/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="relative w-full py-16 lg:py-24 bg-[#0A0B0F] text-[#F3EFE8] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header: 02. FEATURED PROJECTS ────────────── View All Projects → */}
        <div className="flex items-center justify-between pb-6 mb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs sm:text-sm font-semibold tracking-wider text-white/50">
              02.
            </span>
            <h2 className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#F3EFE8]">
              FEATURED PROJECTS
            </h2>
          </div>

          <a
            href="https://github.com/khongphaiduc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans-ui text-white/70 hover:text-[#F6A86C] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Projects Grid in Horizontal Sequence matching Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#15161C]/90 shadow-2xl flex flex-col justify-between"
            >
              {/* Project Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0B0F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter contrast-[1.04] brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15161C] via-transparent to-transparent opacity-90" />
              </div>

              {/* Project Card Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-serif-editorial font-bold text-[#F3EFE8] group-hover:text-[#F6A86C] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/60 font-sans-ui mt-0.5 mb-4">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Pills matching Reference */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal for Inspection */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
