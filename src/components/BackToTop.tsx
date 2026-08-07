import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const BackToTop: React.FC<BackToTopProps> = React.memo(({ onSetCursor }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section height is roughly window.innerHeight or ~500px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          // onMouseEnter={() => onSetCursor('TOP', 'VIEW', true)}
          // onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
          className="fixed bottom-16 md:bottom-6 right-4 sm:right-6 z-40 bg-[#0a0a0a]/90 hover:bg-[#70020F] text-white border border-white/20 hover:border-[#70020F] backdrop-blur-md p-3 sm:px-4 sm:py-3 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(112,2,15,0.6)] flex items-center gap-2 font-mono text-xs font-bold transition-colors group cursor-pointer"
          title="Back to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#70020F] group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
          <span className="hidden sm:inline tracking-wider">// TOP</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
});

BackToTop.displayName = 'BackToTop';

