import React, { useState, useEffect } from 'react';
import { NoiseOverlay } from './components/NoiseOverlay';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { TypographyPlayground } from './components/TypographyPlayground';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TerminalModal } from './components/TerminalModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CursorState, CursorContextType } from './types';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    text: '',
    context: 'DEFAULT',
    isHovered: false,
  });

  const setCursor = (text: string, context: CursorContextType = 'DEFAULT', isHovered: boolean = false) => {
    setCursorState({ text, context, isHovered });
  };

  // Keyboard shortcut listener for terminal ~ or ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape' && terminalOpen) {
        setTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#70020F] selection:text-white font-sans relative overflow-x-hidden">
      {/* SVG Analog/Digital Noise Overlay */}
      <NoiseOverlay />

      {/* Magnetic Contextual Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* System Boot Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* App Header */}
      <HeaderNav
        onOpenTerminal={() => setTerminalOpen(true)}
        onSetCursor={setCursor}
      />

      {/* Hero Section with Staggered 3D Text Reveal */}
      <Hero
        isLoaded={isLoaded}
        onSetCursor={setCursor}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Marquee Strip Direction Left */}
      <MarqueeStrip
        items={[
          'FULLSTACK DEVELOPER',
          'KINETIC TYPOGRAPHY',
          'DIGITAL BRUTALISM',
          'SUB-18MS LATENCY',
          'IHZA MAULANA ZAKIYA',
          'HIGH THROUGHPUT ARCHITECTURE',
        ]}
        direction="left"
        speed={0.5}
        bgClass="bg-[#70020F] text-white"
        textClass="font-extrabold text-2xl sm:text-4xl tracking-tighter uppercase"
      />

      {/* Selected Projects Showcase */}
      <ProjectsSection onSetCursor={setCursor} />

      {/* Marquee Strip Direction Right with Stroked Text */}
      <MarqueeStrip
        items={[
          'AETHER OS / WEBGL',
          'VANGUARD / FINTECH',
          'MONOLITH / BRAND EXPERIENCE',
          'SYSTEM BOOT OK',
          '01001001 01001000 01011010 01000001',
        ]}
        direction="right"
        speed={2}
        bgClass="bg-neutral-950 text-white"
        textClass="font-extrabold text-2xl sm:text-4xl tracking-tighter uppercase text-stroke"
      />

      {/* Interactive Kinetic Typography Playground / Lab */}
      <TypographyPlayground onSetCursor={setCursor} />

      {/* Technical Capabilities Matrix */}
      <SkillsSection onSetCursor={setCursor} />

      {/* Direct Contact Pipeline Section */}
      <ContactSection onSetCursor={setCursor} />

      {/* Monospaced Brutalist Footer */}
      <Footer
        onSetCursor={setCursor}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onSetCursor={setCursor}
      />
    </div>
  );
}
