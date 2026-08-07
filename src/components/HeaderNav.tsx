import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data/portfolio";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { MobileBottomBar } from "./MobileBottomBar";

interface HeaderNavProps {
  onOpenTerminal: () => void;
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenTerminal, onSetCursor }) => {
  const [timeString, setTimeString] = useState("");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        }),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "work",
      "capabilities",
      "experience",
      "education",
      "achievements",
      "contact",
    ];

    const handleScroll = () => {
      // Check if user scrolled to bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // const el = document.getElementById(id);
    // if (el) {
    //   el.scrollIntoView({ behavior: "smooth" });
    // }
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 76;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }, 60);
  };

  const getNavClass = (id: string) => {
    const isActive = activeSection === id;
    return `py-1 transition-all border-b-2 flex items-center gap-1 ${
      isActive
        ? "text-white border-[#70020F] font-bold px-2 hover:text-[#70020F] bg-[#70020F]/20 shadow-[0_0_10px_rgba(112,2,15,0.4)] "
        : "text-white border-transparent hover:text-white hover:border-[#70020F]"
    }`;
  };

  const NAV_ITEMS = [
    { id: "work", label: "PROJECTS", cursorText: "WORK", cursorType: "VIEW", index: "01" },
    {
      id: "capabilities",
      label: "CAPABILITIES",
      cursorText: "TECH",
      cursorType: "VIEW",
      index: "02",
    },
    { id: "experience", label: "EXPERIENCE", cursorText: "EXP", cursorType: "VIEW", index: "03" },
    { id: "education", label: "EDUCATION", cursorText: "EDU", cursorType: "VIEW", index: "04" },
    {
      id: "achievements",
      label: "ACHIEVEMENTS",
      cursorText: "AWARDS",
      cursorType: "VIEW",
      index: "05",
    },
    { id: "contact", label: "CONTACT", cursorText: "EMAIL", cursorType: "EMAIL", index: "06" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
          {/* Brand Monogram & Name */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => onSetCursor("HOME", "VIEW", true)}
            onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
          >
            <div className="h-8 w-8 bg-[#70020F] text-white font-bold flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform">
              IMZ
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-[#70020F] transition-colors">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
              <span className="text-[10px] text-neutral-400 tracking-widest hidden sm:inline">
                {PERSONAL_INFO.role.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-neutral-300 font-mono tracking-wider font-bold text-[11px] xl:text-xs">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => onSetCursor(item.cursorText, item.cursorType, true)}
                onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
                className={getNavClass(item.id)}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Action Tools: Terminal, Clock, Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Clock */}
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 text-[11px] text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-[#70020F] animate-ping" />
              <span>{timeString}</span>
            </div>

            {/* Terminal CLI Button */}
            <button
              onClick={onOpenTerminal}
              onMouseEnter={() => onSetCursor("CLI", "TERMINAL", true)}
              onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#70020F] hover:bg-[#8f0415] text-white font-bold transition-all border border-white/20 hover:shadow-[0_0_15px_rgba(112,2,15,0.6)] cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="tracking-wider">CLI [ &gt; ]</span>
            </button>

            {/* Tablet Hamburger Toggle Button (Side-by-side with CLI button) */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              onMouseEnter={() => onSetCursor(isMenuOpen ? "CLOSE" : "MENU", "VIEW", true)}
              onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
              className="hidden md:flex lg:hidden items-center justify-center p-1.5 bg-neutral-900 hover:bg-[#70020F] text-white transition-colors border border-white/20 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <Menu className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Tablet Navigation Slide-down Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-[#0a0a0a]/95 border-t border-white/10 mt-3 pt-4 pb-4 px-4 sm:px-8 font-mono shadow-2xl"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      onMouseEnter={() => onSetCursor(item.cursorText, item.cursorType, true)}
                      onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
                      className={`flex items-center justify-between p-3 border transition-colors text-left cursor-pointer ${
                        isActive
                          ? "bg-[#70020F]/30 border-[#70020F] text-white font-bold"
                          : "bg-white/5 border-white/10 text-neutral-300 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#70020F] font-extrabold text-xs">
                          // {item.index}
                        </span>
                        <span className="tracking-wider uppercase text-xs font-bold">
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`w-3.5 h-3.5 transition-transform ${isActive ? "text-[#70020F] translate-x-0.5 -translate-y-0.5" : "text-neutral-500"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Fixed Mobile Bottom Bar (< md breakpoint) */}
      <MobileBottomBar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onSetCursor={onSetCursor}
      />
    </>
  );
};
