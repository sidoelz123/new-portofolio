import React, { useState } from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../data/portfolio";
import { ArrowDown, Cpu, Sparkles, Terminal, Activity, ShieldCheck } from "lucide-react";

interface HeroProps {
  isLoaded: boolean;
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isLoaded, onSetCursor, onOpenTerminal }) => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [activeLetter, setActiveLetter] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, normX: 0, normY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;
    setMousePos({ x, y, normX, normY });
  };

  // Split name into letters for staggered 3D animation
  const nameFirst = "IHZA".split("");
  const nameMiddle = "MAULANA".split("");
  const nameLast = "ZAKIYA".split("");

  const roleLetters = "FULLSTACK DEVELOPER".split("");

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 600);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 120,
      rotateX: -90,
      scale: 0.8,
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 flex flex-col justify-between overflow-hidden bg-[#0a0a0a]"
    >
      {/* Interactive Kinetic Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Fine Matrix Grid Pattern */}
        <div
          className="absolute inset-0 opacity-25 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform: `translate3d(${mousePos.normX * -12}px, ${mousePos.normY * -12}px, 0)`,
          }}
        />

        {/* Major Oxblood Structural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20 transition-transform duration-500 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(112, 2, 15, 0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(112, 2, 15, 0.35) 1px, transparent 1px)
            `,
            backgroundSize: "160px 160px",
            transform: `translate3d(${mousePos.normX * -24}px, ${mousePos.normY * -24}px, 0)`,
          }}
        />

        {/* Kinetic Cursor Radial Glow Torch */}
        {isHovered && (
          <div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300"
            style={{
              left: `${mousePos.x - 300}px`,
              top: `${mousePos.y - 300}px`,
              background:
                "radial-gradient(circle, rgba(112, 2, 15, 0.3) 0%, rgba(112, 2, 15, 0.08) 45%, transparent 70%)",
            }}
          />
        )}

        {/* Dynamic Laser Coordinate Axes Tracking Cursor */}
        {isHovered && (
          <>
            <div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#70020F]/50 to-transparent pointer-events-none transition-all duration-75"
              style={{ top: `${mousePos.y}px` }}
            />
            <div
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#70020F]/50 to-transparent pointer-events-none transition-all duration-75"
              style={{ left: `${mousePos.x}px` }}
            />
          </>
        )}
      </div>

      {/* Background brutalist structural grid lines */}
      <div className="absolute inset-0 border-x border-white/5 max-w-7xl mx-auto pointer-events-none flex justify-between z-0">
        <div className="w-px h-full bg-white/5" />
        <div className="w-px h-full bg-white/5 hidden md:block" />
        <div className="w-px h-full bg-white/5 hidden lg:block" />
      </div>

      {/* Top Telemetry Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 py-4 border-b border-white/10 font-mono text-xs z-10">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#70020F]/20 border border-[#70020F] text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-[#70020F]" />
            <span>SYS_VERIFIED</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-neutral-400">
          <button
            onClick={triggerGlitch}
            onMouseEnter={() => onSetCursor("GLITCH", "VIEW", true)}
            onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
            className="flex items-center gap-1.5 text-[#70020F] hover:text-white transition-colors border border-white/10 px-2 py-1 bg-white/5"
          >
            <Sparkles className="w-3 h-3" />
            <span>[ TRIGGER KINETIC IMPULSE ]</span>
          </button>
        </div>
      </div>

      {/* Main Staggered 3D Typography Area */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 z-10 perspective-1000">
        {/* Name 3D Staggered Container */}
        {isLoaded && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`transform-style-3d select-none transition-all duration-300 ${
              glitchActive ? "skew-x-12 blur-[0.5px] text-[#70020F]" : ""
            }`}
          >
            {/* First + Middle Name Row */}
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-6 gap-y-2 mb-2">
              <div className="flex">
                {nameFirst.map((char, index) => (
                  <motion.span
                    key={`first-${index}`}
                    variants={letterVariants}
                    onMouseEnter={() => setActiveLetter(index)}
                    onMouseLeave={() => setActiveLetter(null)}
                    className={`inline-block text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter leading-none transition-transform hover:scale-110 hover:-translate-y-2 hover:text-[#70020F] ${
                      activeLetter === index ? "text-[#70020F]" : "text-white"
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <div className="flex">
                {nameMiddle.map((char, index) => (
                  <motion.span
                    key={`middle-${index}`}
                    variants={letterVariants}
                    onMouseEnter={() => setActiveLetter(10 + index)}
                    onMouseLeave={() => setActiveLetter(null)}
                    className={`inline-block text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] md:font-extrabold tracking-tighter leading-none text-stroke transition-transform hover:scale-110 hover:-translate-y-2 hover:text-white ${
                      activeLetter === 10 + index ? "text-white" : ""
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Last Name + Role Row */}
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-6 gap-y-2">
              <div className="flex">
                {nameLast.map((char, index) => (
                  <motion.span
                    key={`last-${index}`}
                    variants={letterVariants}
                    onMouseEnter={() => setActiveLetter(20 + index)}
                    onMouseLeave={() => setActiveLetter(null)}
                    className="inline-block text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter leading-none text-white hover:text-[#70020F] transition-colors"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Oxblood Badge Symbol */}
              <motion.div
                variants={letterVariants}
                className="hidden lg:flex items-center justify-center px-6 py-2 bg-[#70020F] text-white border border-white/20 ml-4 font-mono text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(112,2,15,0.8)]"
              >
                // 01 ARCHITECT
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Staggered Role Text (Sub-headline) */}
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 border-t-2 border-[#70020F] pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            {/* Animated Role Characters */}
            <div className="flex flex-wrap items-center gap-x-1.5 font-mono text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-300">
              <span className="hidden md:block text-[#70020F] font-bold mr-2">&gt;&gt;</span>
              {roleLetters.map((char, i) => (
                <span
                  key={i}
                  className={
                    char === " " ? "w-3" : "hover:text-[#70020F] transition-colors cursor-pointer"
                  }
                >
                  {char}
                </span>
              ))}
            </div>

            <p className="max-w-md text-xs sm:text-sm font-mono text-neutral-400 leading-relaxed border-l-2 border-neutral-800 pl-4">
              {PERSONAL_INFO.subHeadline}
            </p>
          </motion.div>
        )}
      </div>

      {/* Bottom Bar: Quick Stats & Scroll Down Indicator */}
      {/* <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs z-10"> */}
      {/*   {PERSONAL_INFO.stats.map((stat, i) => ( */}
      {/*     <div key={i} className="flex flex-col border-l border-white/10 pl-4"> */}
      {/*       <span className="text-neutral-500 text-[10px] tracking-widest">{stat.label}</span> */}
      {/*       <span className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-[#70020F]"> */}
      {/*         {stat.value} */}
      {/*       </span> */}
      {/*     </div> */}
      {/*   ))} */}
      {/* </div> */}

      {/* Scroll Down Floating CTA */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center mt-8 pt-4 font-mono text-xs z-10">
        <button
          onClick={() => scrollToSection("work")}
          onMouseEnter={() => onSetCursor("EXPLORE", "EXPLORE", true)}
          onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
        >
          <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#70020F] group-hover:bg-[#70020F] transition-colors">
            <ArrowDown className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="tracking-widest">SCROLL TO EXPLORE ARCHITECTURE</span>
        </button>

        <button
          onClick={onOpenTerminal}
          onMouseEnter={() => onSetCursor("TERMINAL", "TERMINAL", true)}
          onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
          className="hidden sm:flex items-center gap-2 text-neutral-500 hover:text-[#70020F] transition-colors"
        >
          <Terminal className="w-3.5 h-3.5 text-[#70020F]" />
          <span>PRESS `~` OR CLICK FOR TERMINAL</span>
        </button>
      </div>
    </section>
  );
};
