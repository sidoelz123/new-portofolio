import React, { useState, useCallback } from "react";
import { motion } from "motion/react";
import { PROJECTS } from "../data/portfolio";
import { Project } from "../types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Folder } from "lucide-react";

interface ProjectsSectionProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = React.memo(({ onSetCursor }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="work"
      className="py-24 px-4 sm:px-8 bg-[#0a0a0a] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-6"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#70020F] mb-2">
              <Folder className="w-4 h-4 text-[#70020F]" />
              <span className="font-bold tracking-widest">// 02. FEATURED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
              SELECTED <span className="text-stroke font-medium md:font-extrabold">PROJECTS</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-neutral-400 leading-relaxed">
            High-impact systems engineered for zero-compromise performance, low latency, and
            visceral digital aesthetics.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleSelectProject}
              onSetCursor={onSetCursor}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
        onSetCursor={onSetCursor}
      />
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";
