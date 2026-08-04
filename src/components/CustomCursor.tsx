import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { CursorState } from '../types';

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useSpring(0, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch || !isVisible) return null;

  const isExpanded = cursorState.isHovered || cursorState.text.length > 0;

  return (
    <>
      {/* Outer Magnetic Ring / Bubble */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isExpanded ? 2.4 : 1,
          backgroundColor: isExpanded ? '#70020F' : 'transparent',
          borderColor: isExpanded ? '#70020F' : 'rgba(255, 255, 255, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full border border-white/40 backdrop-blur-[1px] mix-blend-difference"
      >
        <div className={`flex items-center justify-center ${isExpanded ? 'h-14 w-14' : 'h-8 w-8'}`}>
          {cursorState.text ? (
            <span className="text-[9px] font-mono font-bold tracking-widest text-white uppercase animate-fade-in">
              {cursorState.text}
            </span>
          ) : (
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
          )}
        </div>
      </motion.div>

      {/* Crosshair precision indicator */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 text-[10px] text-white/30 font-mono"
      >
        <span className="absolute -top-3 left-1/2 -translate-x-1/2">+</span>
      </motion.div>
    </>
  );
};
