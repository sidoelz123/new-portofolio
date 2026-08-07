import React, { useCallback } from "react";
import { motion } from "motion/react";
import { EXPERIENCES, PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES } from "../data/portfolio";
import { Briefcase, Download, ArrowUpRight } from "lucide-react";

interface ExperienceSectionProps {
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

export const ExperienceSection: React.FC<ExperienceSectionProps> = React.memo(({ onSetCursor }) => {
  const handleDownloadCV = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const cvContent = `================================================================
IHZA MAULANA ZAKIYA - FULLSTACK DEVELOPER
================================================================
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
Status: ${PERSONAL_INFO.status}
GitHub: https://github.com/sidoelz123
LinkedIn: https://linkedin.com/in/ihzamz

----------------------------------------------------------------
SUMMARY
----------------------------------------------------------------
${PERSONAL_INFO.bio}

----------------------------------------------------------------
WORK EXPERIENCE
----------------------------------------------------------------
${EXPERIENCES.map(
  (exp) => `* ${exp.role} @ ${exp.company} (${exp.period})
  ${exp.description}`,
).join("\n\n")}

----------------------------------------------------------------
EDUCATION
----------------------------------------------------------------
${EDUCATION_DATA.map((edu) => `* ${edu.degree} - ${edu.institution} (${edu.period})`).join("\n")}

----------------------------------------------------------------
TECHNICAL SKILLS
----------------------------------------------------------------
${SKILL_CATEGORIES.map(
  (cat) => `[${cat.title}]
${cat.skills.map((s) => `  - ${s.name} (${s.tag})`).join("\n")}`,
).join("\n\n")}
================================================================
`;

    const blob = new Blob([cvContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Ihza_Maulana_Zakiya_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <section
      id="experience"
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
              <Briefcase className="w-4 h-4 text-[#70020F]" />
              <span className="font-bold tracking-widest">// 04. EXPERIENCE</span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase"
            >
              WORK & <span className="text-stroke">EXPERIENCE</span>
            </motion.h2>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <p className="max-w-md font-mono text-xs text-neutral-400 leading-relaxed md:text-right">
              Professional track record building production-grade web systems, high-speed
              architectures, and scalable fullstack applications.
            </p>
          </motion.div>
        </motion.div>

        {/* Experience List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-6"
        >
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id || idx}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.005 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => onSetCursor("EXP", "VIEW", true)}
              onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
              className="bg-neutral-950 border border-white/10 p-6 sm:p-8 font-mono hover:border-[#70020F] transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-transparent group-hover:bg-[#70020F] transition-colors" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold text-white">
                  <span className="text-white group-hover:text-[#70020F] transition-colors">
                    {exp.role}
                  </span>
                  <span className="text-[#70020F]">di</span>
                  <span className="text-neutral-200">{exp.company}</span>
                </div>

                <div className="text-xs font-bold text-[#70020F] bg-[#70020F]/10 px-3 py-1 border border-[#70020F]/30 shrink-0 self-start md:self-auto">
                  {exp.period}
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed max-w-4xl font-sans">
                {exp.description}
              </p>
            </motion.div>
          ))}

          {/* Brutalist CV Action Banner */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 bg-neutral-950 border border-white/10 hover:border-[#70020F] flex flex-col md:flex-row items-center justify-between gap-6 font-mono transition-colors"
          >
            <div>
              <div className="text-xs text-[#70020F] font-bold tracking-widest mb-1">
                // RECRUITER TOOLKIT
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase">
                NEED FULL PROFILE & VERIFIED RESUME?
              </h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                Get the complete dossier including technical architectures, project metrics, and
                career history.
              </p>
            </div>

            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => onSetCursor("GET CV", "VIEW", true)}
              onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
              className="w-full md:w-auto px-8 py-4 bg-[#70020F] hover:bg-[#8a0313] text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 flex items-center justify-center gap-3 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.2)] transition-all cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME [PDF/TXT]</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";
