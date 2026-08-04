import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { Cpu, Terminal, ShieldCheck, Zap } from 'lucide-react';

interface SkillsSectionProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSetCursor }) => {
  return (
    <section id="capabilities" className="py-24 px-4 sm:px-8 bg-[#0a0a0a] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#70020F] mb-2">
              <Cpu className="w-4 h-4 text-[#70020F]" />
              <span className="font-bold tracking-widest">// 04. TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
              CAPABILITIES & <span className="text-stroke">STACK</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-neutral-400 leading-relaxed">
            Full-stack mastery spanning high-throughput server runtimes, real-time networking protocols, and GPU-driven kinetic client interfaces.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
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
                    onMouseEnter={() => onSetCursor(`${skill.level}%`, 'VIEW', true)}
                    onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
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
                      <div
                        className="h-full bg-[#70020F] group-hover:bg-white transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
