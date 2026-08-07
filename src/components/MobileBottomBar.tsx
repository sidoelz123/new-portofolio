import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Briefcase, Cpu, GraduationCap, Mail } from "lucide-react";

interface MobileBottomBarProps {
  activeSection?: string;
  onNavigate: (id: string) => void;
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

const SECTION_TO_NAV_ID: Record<string, string> = {
  hero: "work",
  work: "work",
  capabilities: "capabilities",
  experience: "experience",
  education: "education",
  achievements: "education", // <- Achievements maps to the Edu button
  contact: "contact",
};

const ALL_SECTION_IDS = [
  "hero",
  "work",
  "capabilities",
  "experience",
  "education",
  "achievements",
  "contact",
];

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activeSection,
  onNavigate,
  onSetCursor,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [currentNavId, setCurrentNavId] = useState<string>(() => {
    if (activeSection && SECTION_TO_NAV_ID[activeSection]) {
      return SECTION_TO_NAV_ID[activeSection];
    }
    return "work";
  });

  useEffect(() => {
    const visibleSections = new Map<string, IntersectionObserverEntry>();

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      if (visibleSections.size > 0) {
        // Pick the section that appears first in document order
        for (const id of ALL_SECTION_IDS) {
          if (visibleSections.has(id)) {
            const mappedNavId = SECTION_TO_NAV_ID[id];
            if (mappedNavId) {
              setCurrentNavId(mappedNavId);
              break;
            }
          }
        }
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setCurrentNavId("contact");
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    });

    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const BOTTOM_ITEMS = [
    { id: "work", label: "PROJECTS", icon: Briefcase, cursorText: "WORK" },
    { id: "capabilities", label: "STACK", icon: Cpu, cursorText: "TECH" },
    { id: "experience", label: "EXP", icon: Briefcase, cursorText: "EXP" },
    { id: "education", label: "EDU", icon: GraduationCap, cursorText: "EDU" },
    { id: "contact", label: "CONTACT", icon: Mail, cursorText: "EMAIL" },
  ];

  const handleItemClick = (id: string) => {
    setCurrentNavId(id);
    onNavigate(id);
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg border-t border-white/10 px-2 py-1.5 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.8)]"
      aria-label="Mobile Navigation"
    >
      <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
        {BOTTOM_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentNavId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
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
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 30 }
                  }
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
