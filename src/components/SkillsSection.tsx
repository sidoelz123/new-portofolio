import React from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "../data/portfolio";
import { Cpu } from "lucide-react";

interface SkillsSectionProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -15,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 120,
    },
  },
};

export const SkillsSection: React.FC<SkillsSectionProps> = React.memo(({ onSetCursor }) => {
  return (
    <section
      id="capabilities"
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
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs font-mono text-[#70020F] mb-2"
            >
              <Cpu className="w-4 h-4 text-[#70020F]" />
              <span className="font-bold tracking-widest">// 03. TECHNICAL MATRIX</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase"
            >
              CAPABILITIES &{" "}
              <span className="text-stroke font-medium md:font-extrabold">STACK</span>
            </motion.h2>
          </div>

          {/* <motion.p */}
          {/*   variants={itemVariants} */}
          {/*   className="max-w-md font-mono text-xs text-neutral-400 leading-relaxed" */}
          {/* > */}
          {/*   Full-stack mastery spanning high-throughput server runtimes, real-time networking */}
          {/*   protocols, and GPU-driven kinetic client interfaces. */}
          {/* </motion.p> */}
        </motion.div>

        {/* Skill Matrix Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-neutral-950 border border-white/10 p-6 sm:p-8 font-mono hover:border-[#70020F] transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-[#70020F] font-bold text-xs">// {cat.code}</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  {cat.title}
                </span>
              </div>

              {/* Skill Bars List */}
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    onMouseEnter={() => onSetCursor(`${skill.level}%`, "VIEW", true)}
                    onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
                    className="group space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-bold group-hover:text-[#70020F] transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-neutral-500 text-[10px] bg-white/5 px-2 py-0.5 border border-white/10">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Level Bar */}
                    <div className="w-full bg-neutral-900 h-2 border border-white/10 overflow-hidden p-0.5">
                      <motion.div
                        className="h-full bg-[#70020F] group-hover:bg-white transition-colors duration-300"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.2 + sIdx * 0.05,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";
