import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOT_LOGS, PERSONAL_INFO } from '../data/portfolio';
import { Terminal, ShieldAlert, Cpu, FastForward } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
      // Variable increment to simulate hacking/system loading
      const delta = Math.floor(Math.random() * 8) + 1;
      currentProgress = Math.min(100, currentProgress + delta);
      setProgress(currentProgress);

      // Add log entries based on progress milestone
      const targetLogIndex = Math.floor((currentProgress / 100) * BOOT_LOGS.length);
      if (targetLogIndex > logIndex && logIndex < BOOT_LOGS.length) {
        setLogs((prev) => [...prev, BOOT_LOGS[logIndex]]);
        logIndex++;
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Allow curtain reveal animation to complete
        }, 400);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setLogs(BOOT_LOGS);
    setIsFinished(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0a0a0a] p-6 md:p-12 text-white font-mono border-b-2 border-[#70020F] select-none overflow-hidden"
        >
          {/* Scanline texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none bg-[length:100%_4px]" />

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 bg-[#70020F] animate-pulse" />
              <span className="text-xs tracking-widest text-neutral-400 font-bold uppercase">
                SYSTEM BOOT SEQUENCE // {PERSONAL_INFO.shortName}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-xs text-neutral-500">
                LOC: {PERSONAL_INFO.location}
              </span>
              <button
                onClick={handleSkip}
                className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/20 hover:border-[#70020F] hover:bg-[#70020F]/20 text-xs text-neutral-300 transition-colors rounded-none"
              >
                <FastForward className="w-3 h-3 text-[#70020F]" />
                <span>SKIP [ESC]</span>
              </button>
            </div>
          </div>

          {/* Main Counter & Matrix Area */}
          <div className="my-auto py-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Big Counter */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-xs text-[#70020F] tracking-widest uppercase font-bold mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 animate-spin text-[#70020F]" />
                <span>INITIALIZING MEMORY MATRIX</span>
              </span>

              <div className="flex items-baseline gap-2">
                <span className="text-7xl sm:text-9xl md:text-[13rem] font-extrabold tracking-tighter leading-none text-white">
                  {String(progress).padStart(3, '0')}
                </span>
                <span className="text-3xl sm:text-5xl font-bold text-[#70020F]">%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-900 h-3 border border-white/10 mt-6 p-0.5 overflow-hidden">
                <motion.div
                  className="h-full bg-[#70020F]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Terminal Live Output */}
            <div className="lg:col-span-5 bg-neutral-950/80 border border-white/10 p-5 font-mono text-xs h-64 overflow-y-auto flex flex-col justify-end shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-neutral-500 text-[10px]">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#70020F]" />
                  <span>BOOT_DIAGNOSTIC.LOG</span>
                </span>
                <span>STATUS: RUNNING</span>
              </div>
              <div className="space-y-1.5">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-neutral-300">
                    <span className="text-[#70020F] font-bold">&gt;</span>
                    <span className="leading-tight">{log}</span>
                  </div>
                ))}
                {logs.length < BOOT_LOGS.length && (
                  <div className="flex items-center gap-1 text-[#70020F] animate-pulse">
                    <span>_</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs text-neutral-400 relative z-10">
            <div className="flex items-center gap-6">
              <span>TARGET: {PERSONAL_INFO.name.toUpperCase()}</span>
              <span>ROLE: {PERSONAL_INFO.headline}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
              <ShieldAlert className="w-3.5 h-3.5 text-[#70020F]" />
              <span>DIGITAL BRUTALISM // KINETIC MATRIX v4.0</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
