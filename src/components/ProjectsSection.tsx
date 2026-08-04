import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Folder, Layers, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSetCursor }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 px-4 sm:px-8 bg-[#0a0a0a] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#70020F] mb-2">
              <Folder className="w-4 h-4 text-[#70020F]" />
              <span className="font-bold tracking-widest">// 02. FEATURED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
              SELECTED <span className="text-stroke">PROJECTS</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-neutral-400 leading-relaxed">
            High-impact systems engineered for zero-compromise performance, low latency, and visceral digital aesthetics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
              onSetCursor={onSetCursor}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSetCursor={onSetCursor}
      />
    </section>
  );
};
