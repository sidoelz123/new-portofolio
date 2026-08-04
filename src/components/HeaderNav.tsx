import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Terminal, Copy, Check, ArrowUpRight, Zap } from 'lucide-react';

interface HeaderNavProps {
  onOpenTerminal: () => void;
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenTerminal, onSetCursor }) => {
  const [timeString, setTimeString] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-xs">
        {/* Brand Monogram & Name */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onMouseEnter={() => onSetCursor('HOME', 'VIEW', true)}
          onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
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
        <nav className="hidden lg:flex items-center gap-6 text-neutral-300 font-mono tracking-wider">
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => onSetCursor('INDEX', 'VIEW', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#70020F]"
          >
            // 01. HERO
          </button>
          <button
            onClick={() => scrollToSection('work')}
            onMouseEnter={() => onSetCursor('WORK', 'VIEW', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#70020F]"
          >
            // 02. PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('playground')}
            onMouseEnter={() => onSetCursor('SKEW', 'VIEW', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#70020F] flex items-center gap-1 text-[#70020F]"
          >
            <Zap className="w-3 h-3 text-[#70020F]" />
            <span>03. KINETIC LAB</span>
          </button>
          <button
            onClick={() => scrollToSection('capabilities')}
            onMouseEnter={() => onSetCursor('TECH', 'VIEW', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#70020F]"
          >
            // 04. CAPABILITIES
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            onMouseEnter={() => onSetCursor('EMAIL', 'EMAIL', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="hover:text-white transition-colors py-1 hover:border-b-2 hover:border-[#70020F]"
          >
            // 05. CONTACT
          </button>
        </nav>

        {/* Right Action Tools: Terminal, Clock, Contact Quick Email */}
        <div className="flex items-center gap-3">
          {/* Live Clock */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 text-[11px] text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#70020F] animate-ping" />
            <span>{timeString}</span>
          </div>

          {/* Quick Email Copy */}
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => onSetCursor('COPY', 'COPY', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-white/20 hover:border-[#70020F] text-white transition-colors text-xs"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-400">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#70020F]" />
                <span className="truncate max-w-[120px]">ihzamaulanaz</span>
              </>
            )}
          </button>

          {/* Terminal CLI Button */}
          <button
            onClick={onOpenTerminal}
            onMouseEnter={() => onSetCursor('CLI', 'TERMINAL', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#70020F] hover:bg-[#8f0415] text-white font-bold transition-all border border-white/20 hover:shadow-[0_0_15px_rgba(112,2,15,0.6)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="tracking-wider">CLI [ &gt; ]</span>
          </button>
        </div>
      </div>
    </header>
  );
};
