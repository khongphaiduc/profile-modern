import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0B0F]/90 backdrop-blur-xl transition-all"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-4xl bg-[#15161C] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-[#F3EFE8] max-h-[90vh] flex flex-col"
          >
            {/* Header bar with controls */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0B0F]/60 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-[#F6A86C]">
                  PROJECT // {project.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="text-xs text-[#F3EFE8]/60 font-mono-tech">
                  {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer text-[#F3EFE8]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Project Hero Visual */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15161C] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-[#F3EFE8] tracking-wide mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D7B38C] font-mono-tech">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[#F6A86C] mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> System Overview
                </h4>
                <p className="text-base sm:text-lg text-[#F3EFE8]/85 leading-relaxed font-sans-ui">
                  {project.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="bg-[#0A0B0F]/70 border border-white/10 rounded-2xl p-6">
                <h4 className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[#A9B4F7] mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Architectural Specifications
                </h4>
                <div className="space-y-3">
                  {project.architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#F3EFE8]/80 leading-relaxed font-sans-ui">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F6A86C] mt-2 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[#F3EFE8]/60 mb-3">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-mono-tech text-[#F3EFE8] hover:border-[#D7B38C]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Key Features */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-mono-tech text-[#F3EFE8]/60 mb-3">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-[#F3EFE8]/75"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F6A86C] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product & Source URL Info Box */}
              {(project.liveDemoUrl || project.githubUrl) && (
                <div className="p-4 rounded-2xl bg-[#0A0B0F]/80 border border-white/10 space-y-2.5 font-mono-tech text-xs">
                  {project.liveDemoUrl && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[#F6A86C] font-semibold tracking-wider text-[11px]">
                        Product :
                      </span>
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F3EFE8] hover:text-[#F6A86C] underline underline-offset-4 flex items-center gap-1.5 transition-colors"
                      >
                        <span>{project.liveDemoUrl}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#F6A86C]" />
                      </a>
                    </div>
                  )}
                  {project.githubUrl && (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-white/60 font-semibold tracking-wider text-[11px]">
                        Source :
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8ea3fa] hover:text-[#F6A86C] underline underline-offset-4 flex items-center gap-1.5 transition-colors break-all"
                      >
                        <span>{project.githubUrl}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#8ea3fa]" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F3EFE8] text-[#0A0B0F] font-sans-ui font-medium text-sm hover:bg-[#F6A86C] transition-all hover:shadow-[0_0_20px_rgba(246,168,108,0.4)]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-[#F3EFE8] font-sans-ui text-sm hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demonstration</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="ml-auto text-xs uppercase tracking-[0.15em] font-mono-tech text-[#F3EFE8]/50 hover:text-[#F3EFE8] transition-colors cursor-pointer"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
