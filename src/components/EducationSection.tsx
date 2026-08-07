import React from "react";
import { motion } from "motion/react";
import { EDUCATION_DATA } from "../data/portfolio";
import { GraduationCap } from "lucide-react";

interface EducationSectionProps {
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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const EducationSection: React.FC<EducationSectionProps> = React.memo(({ onSetCursor }) => {
  return (
    <section
      id="education"
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
              <GraduationCap className="w-4 h-4 text-[#70020F]" />
              <span className="font-bold tracking-widest">// 05. EDUCATION</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
              ACADEMIC &{" "}
              <span className="text-stroke font-medium md:font-extrabold">EDUCATION</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-neutral-400 leading-relaxed">
            Formal computer science and software engineering foundations driving algorithmic problem
            solving.
          </p>
        </motion.div>

        {/* Education List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.id || idx}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => onSetCursor("EDU", "VIEW", true)}
              onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
              className="bg-neutral-950 border border-white/10 p-6 sm:p-8 font-mono hover:border-[#70020F] transition-colors group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-[#70020F]">// EDU_0{idx + 1}</span>
                <span className="text-xs font-bold text-neutral-400 bg-white/5 px-2.5 py-1 border border-white/10">
                  {edu.period}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#70020F] transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-bold text-neutral-400 flex items-center gap-2">
                  <span className="text-[#70020F]">di</span>
                  <span className="text-white">{edu.institution}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

EducationSection.displayName = "EducationSection";
