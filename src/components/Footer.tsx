import { PERSONAL_INFO } from '../data/portfolio';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-4 sm:px-8 py-8 font-mono text-xs text-neutral-400 mb-14 md:mb-0">
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
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

