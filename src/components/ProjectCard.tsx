import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, onSetCursor }) => {
  return (
    <motion.div
      onClick={() => onSelect(project)}
      onMouseEnter={() => onSetCursor('EXPLORE', 'VIEW', true)}
      onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group cursor-pointer bg-neutral-950 border border-white/10 hover:border-[#70020F] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Background Hover Oxblood Accent Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#70020F]/0 group-hover:bg-[#70020F]/15 transition-all duration-500 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Card Header: Number & Category */}
        <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[#70020F] font-bold">// {project.number}</span>
            <span className="text-neutral-400 font-bold uppercase">{project.category}</span>
          </div>
          <span className="text-neutral-500">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase group-hover:text-[#70020F] transition-colors mb-2">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-neutral-400 mb-6">{project.subtitle}</p>

        {/* Description */}
        <p className="font-mono text-xs text-neutral-300 leading-relaxed mb-8">
          {project.description}
        </p>
      </div>

      {/* Tech Stack & Action Button */}
      <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] text-neutral-300 group-hover:border-white/30"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-[10px] text-neutral-500">
              +{project.tags.length - 3} MORE
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-[#70020F] group-hover:text-white font-bold transition-colors">
          <span>VIEW SPEC</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};
