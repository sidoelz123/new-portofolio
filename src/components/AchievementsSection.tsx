import React from "react";
import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../data/portfolio";
import { Trophy, Award } from "lucide-react";

interface AchievementsSectionProps {
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

export const AchievementsSection: React.FC<AchievementsSectionProps> = React.memo(
  ({ onSetCursor }) => {
    return (
      <section
        id="achievements"
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
                <Trophy className="w-4 h-4 text-[#70020F]" />
                <span className="font-bold tracking-widest">// 06. ACHIEVEMENTS</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
                HONORS &{" "}
                <span className="text-stroke font-medium md:font-extrabold">ACHIEVEMENTS</span>
              </h2>
            </div>

            <p className="max-w-md font-mono text-xs text-neutral-400 leading-relaxed">
              Recognitions, competition awards, and professional technical certifications.
            </p>
          </motion.div>

          {/* Achievements List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.a
                key={ach.id || idx}
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => onSetCursor("AWARD", "VIEW", true)}
                onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
                className="bg-neutral-950 border border-white/10 p-6 font-mono hover:border-[#70020F] transition-colors group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#70020F]">
                      <Award className="w-4 h-4" />
                      <span>ACH_0{idx + 1}</span>
                    </div>
                    <span className="text-xs font-bold text-white bg-[#70020F]/20 border border-[#70020F]/40 px-2 py-0.5">
                      {ach.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white group-hover:text-[#70020F] transition-colors leading-snug mb-3">
                    {ach.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 font-bold">
                  <span className="text-neutral-500 block text-[10px] uppercase mb-1">
                    ISSUER / ORGANIZER
                  </span>
                  <span className="text-neutral-200">{ach.issuer}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    );
  },
);

AchievementsSection.displayName = "AchievementsSection";
