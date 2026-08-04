import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Sparkles, RefreshCw, Zap, Type, Move } from 'lucide-react';

interface TypographyPlaygroundProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const TypographyPlayground: React.FC<TypographyPlaygroundProps> = ({ onSetCursor }) => {
  const [text, setText] = useState('KINETIC BRUTALISM');
  const [skew, setSkew] = useState(8);
  const [perspective, setPerspective] = useState(800);
  const [colorMode, setColorMode] = useState<'solid' | 'stroke' | 'oxblood' | 'matrix'>('stroke');
  const [letterSpacing, setLetterSpacing] = useState(-2);
  const [fontSize, setFontSize] = useState(64);
  const [rotateX, setRotateX] = useState(12);

  const resetControls = () => {
    setText('KINETIC BRUTALISM');
    setSkew(8);
    setPerspective(800);
    setColorMode('stroke');
    setLetterSpacing(-2);
    setFontSize(64);
    setRotateX(12);
  };

  const textPresetList = [
    'KINETIC BRUTALISM',
    'IHZA MAULANA ZAKIYA',
    'FULLSTACK DEVELOPER',
    'SUB-FRAME LATENCY',
    'HIGH PERFORMANCE'
  ];

  const getColorClass = () => {
    switch (colorMode) {
      case 'solid':
        return 'text-white';
      case 'stroke':
        return 'text-stroke';
      case 'oxblood':
        return 'text-[#70020F] border-b-2 border-[#70020F]';
      case 'matrix':
        return 'text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]';
      default:
        return 'text-white';
    }
  };

  return (
    <section id="playground" className="py-24 px-4 sm:px-8 bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#70020F] mb-2">
              <Zap className="w-4 h-4 text-[#70020F]" />
              <span className="font-bold tracking-widest">// 03. INTERACTIVE LAB</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white uppercase">
              KINETIC <span className="text-stroke">PLAYGROUND</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-neutral-400 leading-relaxed">
            Real-time kinetic typography distortion matrix. Adjust skew, perspective, font parameters, and color shaders to observe real-time DOM vector calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Left side) */}
          <div className="lg:col-span-5 bg-neutral-950 border border-white/10 p-6 font-mono text-xs space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold text-white uppercase flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#70020F]" />
                <span>KINETIC PARAMETERS</span>
              </span>
              <button
                onClick={resetControls}
                className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>RESET</span>
              </button>
            </div>

            {/* Presets */}
            <div className="space-y-2">
              <label className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                TEXT PRESETS
              </label>
              <div className="flex flex-wrap gap-1.5">
                {textPresetList.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setText(preset)}
                    className={`px-2.5 py-1 border text-[11px] transition-colors ${
                      text === preset
                        ? 'bg-[#70020F] border-[#70020F] text-white font-bold'
                        : 'border-white/10 text-neutral-400 hover:border-white/30'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="space-y-2">
              <label className="text-[10px] text-neutral-500 uppercase tracking-widest block flex items-center gap-1">
                <Type className="w-3 h-3 text-[#70020F]" />
                <span>CUSTOM TEXT STRING</span>
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value.toUpperCase())}
                className="w-full bg-neutral-900 border border-white/20 px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#70020F]"
                placeholder="TYPE ANYTHING..."
              />
            </div>

            {/* Skew Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-neutral-400">
                <span>VELOCITY SKEW (SKEWX)</span>
                <span className="text-[#70020F] font-bold">{skew}°</span>
              </div>
              <input
                type="range"
                min="-25"
                max="25"
                value={skew}
                onChange={(e) => setSkew(Number(e.target.value))}
                className="w-full accent-[#70020F] bg-neutral-900 cursor-pointer"
              />
            </div>

            {/* 3D RotateX Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-neutral-400">
                <span>3D TILT (ROTATEX)</span>
                <span className="text-[#70020F] font-bold">{rotateX}°</span>
              </div>
              <input
                type="range"
                min="-45"
                max="45"
                value={rotateX}
                onChange={(e) => setRotateX(Number(e.target.value))}
                className="w-full accent-[#70020F] bg-neutral-900 cursor-pointer"
              />
            </div>

            {/* Perspective Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-neutral-400">
                <span>CAMERA PERSPECTIVE</span>
                <span className="text-[#70020F] font-bold">{perspective}px</span>
              </div>
              <input
                type="range"
                min="200"
                max="1500"
                step="50"
                value={perspective}
                onChange={(e) => setPerspective(Number(e.target.value))}
                className="w-full accent-[#70020F] bg-neutral-900 cursor-pointer"
              />
            </div>

            {/* Color Mode Select */}
            <div className="space-y-2">
              <label className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                TEXT SHADER MODE
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['stroke', 'solid', 'oxblood', 'matrix'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setColorMode(mode)}
                    className={`px-3 py-2 border uppercase font-bold text-center transition-colors ${
                      colorMode === mode
                        ? 'bg-[#70020F] border-[#70020F] text-white'
                        : 'border-white/10 text-neutral-400 hover:border-white/30'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Playground Visual Stage (Right side) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-white/10 p-8 min-h-[480px] flex flex-col justify-between relative overflow-hidden group">
            {/* Stage Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            <div className="flex items-center justify-between font-mono text-xs text-neutral-500 border-b border-white/10 pb-3 relative z-10">
              <span className="flex items-center gap-1.5">
                <Move className="w-3.5 h-3.5 text-[#70020F]" />
                <span>CANVAS STAGE // HOVER TO DISTORT</span>
              </span>
              <span>RENDER: GPU ACCELERATED</span>
            </div>

            {/* Main Animated Text Stage */}
            <div
              className="my-auto py-12 flex items-center justify-center relative z-10 select-none overflow-hidden"
              style={{ perspective: `${perspective}px` }}
            >
              <motion.div
                style={{
                  skewX: `${skew}deg`,
                  rotateX: `${rotateX}deg`,
                  letterSpacing: `${letterSpacing}px`,
                  transformStyle: 'preserve-3d',
                }}
                className={`font-extrabold uppercase text-center leading-none tracking-tighter transition-all duration-150 ${getColorClass()}`}
              >
                <div className="text-4xl sm:text-6xl md:text-7xl font-black max-w-full break-words">
                  {text || 'KINETIC MATRIX'}
                </div>
              </motion.div>
            </div>

            {/* Stage Footer Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-400 border-t border-white/10 pt-3 relative z-10">
              <span>SKEW: {skew}° | ROTX: {rotateX}°</span>
              <span>COLOR: {colorMode.toUpperCase()}</span>
              <span className="text-[#70020F] font-bold">IHZA MAULANA ZAKIYA // 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
