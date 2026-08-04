import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolio';
import { X, ExternalLink, Github, Cpu, ShieldCheck, Layers, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSetCursor }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md overflow-y-auto">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-0 cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="relative z-10 w-full max-w-4xl bg-[#0a0a0a] border-2 border-[#70020F] shadow-[0_0_50px_rgba(112,2,15,0.4)] p-6 sm:p-10 font-mono text-white overflow-hidden max-h-[90vh] flex flex-col justify-between"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[#70020F] text-white font-bold text-xs">
                PROJECT {project.number}
              </span>
              <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              onMouseEnter={() => onSetCursor('CLOSE', 'VIEW', true)}
              onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
              className="p-2 bg-neutral-900 border border-white/20 hover:border-[#70020F] hover:bg-[#70020F] transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="overflow-y-auto space-y-8 pr-2">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase mb-2">
                {project.title}
              </h2>
              <p className="text-lg text-[#70020F] font-bold">{project.subtitle}</p>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-950 p-4 border border-white/10">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col border-l-2 border-[#70020F] pl-3">
                  <span className="text-[10px] text-neutral-500 uppercase">{m.label}</span>
                  <span className="text-xl font-extrabold text-white">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              <h3 className="text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                <Terminal className="w-3.5 h-3.5 text-[#70020F]" />
                <span>ARCHITECTURAL BRIEF</span>
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.extendedDescription}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2 border-b border-white/10 pb-2">
                <Layers className="w-3.5 h-3.5 text-[#70020F]" />
                <span>TECHNICAL HIGHLIGHTS</span>
              </h3>
              <ul className="space-y-2">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="text-[#70020F] font-bold">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-3">
              <h3 className="text-xs text-neutral-400 uppercase tracking-widest border-b border-white/10 pb-2">
                TECH STACK PIPELINE
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/20 text-xs text-white font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 mt-6">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => onSetCursor('LAUNCH', 'LAUNCH', true)}
                  onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#70020F] hover:bg-[#8f0415] text-white font-bold text-xs transition-colors border border-white/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LAUNCH LIVE DEMO</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => onSetCursor('GITHUB', 'OPEN', true)}
                  onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs transition-colors border border-white/20"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>

            <span className="text-xs text-neutral-500 font-mono">
              DEVELOPED BY {PERSONAL_INFO.name.toUpperCase()}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
