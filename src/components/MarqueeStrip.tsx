import React from 'react';
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useAnimationFrame,
  useMotionValue,
  wrap,
} from 'motion/react';

interface MarqueeStripProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  bgClass?: string;
  textClass?: string;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({
  items,
  direction = 'left',
  speed = 2,
  bgClass = 'bg-[#70020F] text-white',
  textClass = 'font-extrabold text-2xl sm:text-4xl tracking-tighter uppercase',
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out velocity with spring
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Velocity skew clamped between -10deg and 10deg
  const skewX = useTransform(smoothVelocity, [-1200, 1200], [-10, 10]);

  // Acceleration factor based on scroll speed
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  useAnimationFrame((time, delta) => {
    // Base speed conversion: percentage shift per second
    let moveBy = (direction === 'left' ? -1 : 1) * speed * (delta / 1000) * 2;

    // Add scroll velocity boost
    const factor = velocityFactor.get();
    if (direction === 'left') {
      moveBy -= Math.abs(factor) * 0.15;
    } else {
      moveBy += Math.abs(factor) * 0.15;
    }

    // Continuously wrap baseX between -50% and 0% for infinite seamless looping
    baseX.set(wrap(-50, 0, baseX.get() + moveBy));
  });

  // Transform numeric percentage to CSS percentage string
  const x = useTransform(baseX, (v) => `${v}%`);

  // Repeat items inside each set to ensure full screen coverage,
  // then duplicate the set twice (set1 and set2) for exact -50% seamless loop.
  const repeatedSet = items.length < 4 ? [...items, ...items, ...items] : [...items, ...items];
  const fullTrack = [...repeatedSet, ...repeatedSet];

  return (
    <div className={`overflow-hidden py-4 border-y border-white/20 select-none ${bgClass}`}>
      <motion.div style={{ skewX }} className="flex whitespace-nowrap">
        <motion.div style={{ x }} className="flex gap-8 items-center shrink-0">
          {fullTrack.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className={textClass}>{item}</span>
              <span className="text-[#0a0a0a] font-mono text-xl font-black">✦</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

