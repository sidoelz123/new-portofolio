import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolio';
import { Terminal, X, CornerDownLeft, Sparkles, Send } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onSetCursor }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: 'init',
      output: (
        <div className="text-neutral-300">
          <p className="text-[#70020F] font-bold">SYSTEM TERMINAL [IHZA MAULANA ZAKIYA CLI v4.0]</p>
          <p className="text-neutral-400">Type <span className="text-white font-bold">'help'</span> for available commands or <span className="text-white font-bold">'clear'</span> to wipe screen.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputNode: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-neutral-300">
            <p className="text-white font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-[#70020F] font-bold">about</span> - Display Ihza Maulana Zakiya biography & stats</p>
            <p><span className="text-[#70020F] font-bold">projects</span> - List all featured engineering projects</p>
            <p><span className="text-[#70020F] font-bold">skills</span> - Display fullstack technical matrix</p>
            <p><span className="text-[#70020F] font-bold">contact</span> - Get direct email & social handles</p>
            <p><span className="text-[#70020F] font-bold">ping</span> - Measure system latency response</p>
            <p><span className="text-[#70020F] font-bold">matrix</span> - Execute digital brutalism stream</p>
            <p><span className="text-[#70020F] font-bold">clear</span> - Clear terminal buffer</p>
            <p><span className="text-[#70020F] font-bold">exit</span> - Close terminal window</p>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-2 text-neutral-300">
            <p className="text-white font-bold">{PERSONAL_INFO.name.toUpperCase()} // {PERSONAL_INFO.role.toUpperCase()}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <div className="flex gap-4 text-xs border-t border-white/10 pt-2 text-[#70020F]">
              <span>LOCATION: {PERSONAL_INFO.location}</span>
              <span>STATUS: {PERSONAL_INFO.status}</span>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-3">
            <p className="text-white font-bold">FEATURED PROJECTS:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-[#70020F] pl-3 py-1">
                <p className="text-white font-bold">{p.number}. {p.title.toUpperCase()} — {p.subtitle}</p>
                <p className="text-neutral-400 text-xs">{p.description}</p>
                <p className="text-[#70020F] text-xs font-mono">{p.tags.join(' | ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2">
            <p className="text-white font-bold">TECHNICAL MATRIX:</p>
            <p><strong className="text-[#70020F]">Frontend:</strong> TypeScript, React 19, Next.js, Motion, WebGL/Three.js, Tailwind v4</p>
            <p><strong className="text-[#70020F]">Backend:</strong> Node.js, Express, PostgreSQL, Redis, WebSockets, Firebase</p>
            <p><strong className="text-[#70020F]">DevOps:</strong> Docker, GCP Cloud Run, GitHub Actions, Performance Optimization</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-2 text-neutral-300">
            <p className="text-white font-bold">DIRECT CONTACT PIPELINE:</p>
            <p>EMAIL: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#70020F] font-bold underline">{PERSONAL_INFO.email}</a></p>
            <p>GITHUB: @ihzamaulana</p>
            <p>LINKEDIN: ihzamaulanaz</p>
          </div>
        );
        break;

      case 'ping':
        outputNode = (
          <div className="text-green-400">
            <p>PONG! 64 bytes from antigravity.cloud: icmp_seq=1 ttl=58 time=12.4 ms</p>
            <p>System status: 100% OPERATIONAL</p>
          </div>
        );
        break;

      case 'matrix':
        outputNode = (
          <div className="text-green-400 font-mono text-[11px] leading-tight select-none">
            <p>01001001 01001000 01011010 01000001 00100000 01001101 01000001 01000101</p>
            <p>01010011 01010100 01010010 01001111 00100000 01001011 01001001 01001110</p>
            <p>01000101 01010100 01010011 01000011 00100000 01010100 01011001 01010000</p>
            <p className="text-white mt-1">✓ MATRIX DECODED: IHZA MAULANA ZAKIYA KINETIC ENGINE</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        outputNode = (
          <p className="text-red-400">
            Command not recognized: '{cleanCmd}'. Type <span className="text-white font-bold">'help'</span> for command list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { cmd: input, output: outputNode }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 cursor-pointer"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          className="relative z-10 w-full max-w-3xl bg-[#0a0a0a] border-2 border-[#70020F] shadow-[0_0_40px_rgba(112,2,15,0.5)] font-mono text-xs text-white overflow-hidden flex flex-col h-[520px]"
        >
          {/* Terminal Title Bar */}
          <div className="bg-neutral-950 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#70020F]" />
              <span className="font-bold tracking-wider text-white">
                IHZA_MAULANA_CLI_TERMINAL.EXE
              </span>
            </div>

            <button
              onClick={onClose}
              onMouseEnter={() => onSetCursor('CLOSE', 'VIEW', true)}
              onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
              className="p-1 hover:bg-[#70020F] text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Output Scroll Area */}
          <div className="p-4 overflow-y-auto flex-1 space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-[#70020F] font-bold">ihzamaulana@antigravity:~$</span>
                  <span className="text-white font-bold">{item.cmd}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Input Form */}
          <form onSubmit={handleCommand} className="bg-neutral-950 border-t border-white/10 p-3 flex items-center gap-2">
            <span className="text-[#70020F] font-bold pl-2">ihzamaulana@antigravity:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none"
              placeholder="type command (e.g. 'help', 'projects', 'contact')..."
            />
            <button type="submit" className="px-3 py-1 bg-[#70020F] text-white font-bold text-xs hover:bg-[#8f0415]">
              EXEC
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
