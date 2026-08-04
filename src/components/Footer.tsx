import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { ArrowUp, Terminal, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSetCursor, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-4 sm:px-8 py-10 font-mono text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 bg-[#70020F] text-white font-bold flex items-center justify-center border border-white/20 text-[10px]">
            IMZ
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-wider">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="text-[10px] text-neutral-500">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED // DIGITAL BRUTALISM v4.0
            </span>
          </div>
        </div>

        {/* Center CLI Button & System Status */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenTerminal}
            onMouseEnter={() => onSetCursor('CLI', 'TERMINAL', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors border border-white/10 px-3 py-1.5 bg-white/5"
          >
            <Terminal className="w-3.5 h-3.5 text-[#70020F]" />
            <span>OPEN TERMINAL CLI</span>
          </button>

          <span className="hidden sm:inline text-neutral-600">|</span>

          <span className="hidden sm:flex items-center gap-1.5 text-neutral-500 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#70020F]" />
            <span>CLOUD RUN DEPLOYMENT OK</span>
          </span>
        </div>

        {/* Right Back-to-top Button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => onSetCursor('TOP', 'VIEW', true)}
          onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-white/20 hover:border-[#70020F] hover:bg-[#70020F] text-white font-bold transition-all"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
