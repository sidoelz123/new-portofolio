import React, { useState, useEffect, useCallback, useMemo } from "react";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { CustomCursor } from "./components/CustomCursor";
import { Preloader } from "./components/Preloader";
import { HeaderNav } from "./components/HeaderNav";
import { Hero } from "./components/Hero";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { TerminalModal } from "./components/TerminalModal";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { CursorState, CursorContextType } from "./types";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    text: "",
    context: "DEFAULT",
    isHovered: false,
  });

  const setCursor = useCallback(
    (text: string, context: CursorContextType = "DEFAULT", isHovered: boolean = false) => {
      setCursorState({ text, context, isHovered });
    },
    [],
  );

  const handleOpenTerminal = useCallback(() => {
    setTerminalOpen(true);
  }, []);

  const handleCloseTerminal = useCallback(() => {
    setTerminalOpen(false);
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Keyboard shortcut listener for terminal ~ or ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      } else if (e.key === "Escape" && terminalOpen) {
        setTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [terminalOpen]);

  const marqueeItems1 = useMemo(
    () => [
      "IHZA MAULANA ZAKIYA",
      "SOFTWARE ENGINEER",
      "FULLSTACK DEVELOPER",
      "WEB DEVELOPER",
      "LINUX ENTHUSIAST",
      "PORTOFOLIO",
      "2026",
    ],
    [],
  );

  const marqueeItems2 = useMemo(
    () => ["CAHTANI", "HARVEST GUARD", "TODO - LIST", "01001001 01001008 01011010 01000001"],
    [],
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#70020F] selection:text-white font-sans relative overflow-x-hidden">
      {/* SVG Analog/Digital Noise Overlay */}
      <NoiseOverlay />

      {/* Magnetic Contextual Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* System Boot Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* App Header */}
      <HeaderNav onOpenTerminal={handleOpenTerminal} onSetCursor={setCursor} />

      {/* Hero Section with Staggered 3D Text Reveal */}
      <Hero isLoaded={isLoaded} onSetCursor={setCursor} onOpenTerminal={handleOpenTerminal} />

      {/* Marquee Strip Direction Left */}
      <MarqueeStrip
        items={marqueeItems1}
        direction="left"
        speed={0.5}
        bgClass="bg-[#70020F] text-white"
        textClass="font-extrabold text-2xl sm:text-4xl tracking-tighter uppercase"
      />
      {/* Marquee Strip Direction Right with Stroked Text */}
      <MarqueeStrip
        items={marqueeItems2}
        direction="right"
        speed={0.5}
        bgClass="bg-[#70020F] text-white"
        textClass="font-extrabold text-2xl sm:text-4xl tracking-tighter uppercase"
      />

      {/* Selected Projects Showcase */}
      <ProjectsSection onSetCursor={setCursor} />

      {/* Technical Capabilities Matrix */}
      <SkillsSection onSetCursor={setCursor} />

      {/* Experience Section */}
      <ExperienceSection onSetCursor={setCursor} />

      {/* Education Section */}
      <EducationSection onSetCursor={setCursor} />

      {/* Achievements Section */}
      <AchievementsSection onSetCursor={setCursor} />

      {/* Direct Contact Pipeline Section */}
      <ContactSection onSetCursor={setCursor} />

      {/* Monospaced Brutalist Footer */}
      <Footer />

      {/* Floating Back To Top Button */}
      <BackToTop onSetCursor={setCursor} />

      {/* Interactive Terminal Modal */}
      <TerminalModal isOpen={terminalOpen} onClose={handleCloseTerminal} onSetCursor={setCursor} />
    </div>
  );
}
