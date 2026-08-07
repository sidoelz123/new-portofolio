import React from "react";
import { motion } from "motion/react";
import { Briefcase, Cpu, GraduationCap, Award, Mail } from "lucide-react";

interface MobileBottomBarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activeSection,
  onNavigate,
  onSetCursor,
}) => {
  const BOTTOM_ITEMS = [
    { id: "work", label: "PROJECTS", icon: Briefcase, cursorText: "WORK" },
    { id: "capabilities", label: "STACK", icon: Cpu, cursorText: "TECH" },
    { id: "experience", label: "EXP", icon: Briefcase, cursorText: "EXP" },
    { id: "education", label: "EDU", icon: GraduationCap, cursorText: "EDU" },
    { id: "contact", label: "CONTACT", icon: Mail, cursorText: "EMAIL" },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/10 px-2 py-1.5 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.8)]"
      aria-label="Mobile Navigation"
    >
      <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
        {BOTTOM_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              onMouseEnter={() => onSetCursor(item.cursorText, "VIEW", true)}
              onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
              className={`relative flex flex-col items-center justify-center py-2 px-1 min-h-[48px] rounded transition-colors font-mono cursor-pointer ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              {/* Active oxblood top indicator bar */}
              {isActive && (
                <motion.div
                  layoutId="mobileActiveTab"
                  className="absolute top-0 left-2 right-2 h-0.5 bg-[#70020F] shadow-[0_0_8px_#70020F]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon
                className={`w-4 h-4 mb-1 transition-transform ${
                  isActive ? "text-[#70020F] scale-110" : "text-neutral-400"
                }`}
              />
              <span
                className={`text-[9px] font-bold tracking-wider uppercase leading-none ${
                  isActive ? "text-white font-extrabold" : "text-neutral-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
