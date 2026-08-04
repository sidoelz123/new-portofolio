import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolio';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSetCursor }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brief: '',
    budget: '$10k - $25k',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-[#0a0a0a] border-t-2 border-[#70020F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Giant Kinetic Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#70020F] mb-3">
            <Mail className="w-4 h-4 text-[#70020F]" />
            <span className="font-bold tracking-widest">// 05. DIRECT PIPELINE</span>
          </div>

          <h2
            onMouseEnter={() => onSetCursor('INITIATE', 'EMAIL', true)}
            onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white uppercase leading-none select-none hover:text-[#70020F] transition-colors"
          >
            INITIATE <span className="text-stroke">CONTACT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Email & Social Info (Left column) */}
          <div className="lg:col-span-5 font-mono text-xs space-y-8">
            <div className="space-y-4">
              <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
                PRIMARY EMAIL ADDRESS
              </span>

              <div className="bg-neutral-950 border border-white/20 p-5 space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onMouseEnter={() => onSetCursor('MAILTO', 'EMAIL', true)}
                  onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
                  className="text-lg sm:text-2xl font-bold text-white hover:text-[#70020F] transition-colors break-all block"
                >
                  {PERSONAL_INFO.email}
                </a>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <button
                    onClick={handleCopyEmail}
                    onMouseEnter={() => onSetCursor('COPY', 'COPY', true)}
                    onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
                    className="flex items-center gap-2 px-4 py-2 bg-[#70020F] hover:bg-[#8f0415] text-white font-bold transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span>COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold border border-white/20"
                  >
                    <span>MAILTO</span>
                    <ArrowUpRight className="w-4 h-4 text-[#70020F]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability & Socials */}
            <div className="space-y-4">
              <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
                AVAILABILITY STATUS
              </span>
              <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 text-neutral-300">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-bold text-white">{PERSONAL_INFO.status}</span>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
                CONNECT ACROSS NETWORKS
              </span>
              <div className="grid grid-cols-2 gap-3">
                {PERSONAL_INFO.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => onSetCursor(s.label, 'OPEN', true)}
                    onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
                    className="p-3 bg-neutral-950 border border-white/10 hover:border-[#70020F] hover:bg-[#70020F]/10 text-white flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold">{s.label}</div>
                      <div className="text-[10px] text-neutral-500">{s.handle}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#70020F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Form (Right column) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-white/10 p-6 sm:p-10 font-mono text-xs">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="h-16 w-16 bg-[#70020F] text-white rounded-full flex items-center justify-center mx-auto border border-white/20">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold uppercase text-white">INQUIRY TRANSMITTED</h3>
                <p className="text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your message has been logged. Ihza Maulana Zakiya will review your project brief and respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-[#70020F] text-white font-bold hover:bg-[#8f0415] transition-colors mt-4"
                >
                  TRANSMIT ANOTHER INQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                  <span className="font-bold text-white uppercase flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#70020F]" />
                    <span>PROJECT INQUIRY FORM</span>
                  </span>
                  <span className="text-[#70020F] font-bold">[ SECURE ENCRYPTION ]</span>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                    YOUR NAME / ORGANIZATION *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#70020F]"
                    placeholder="E.G. ALEX REID // ACME CORP"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#70020F]"
                    placeholder="ALEX@ORGANIZATION.COM"
                  />
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                    PROJECT BUDGET BAND
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['$5k - $10k', '$10k - $25k', '$25k+'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-3 border text-center transition-colors ${
                          formData.budget === b
                            ? 'bg-[#70020F] border-[#70020F] text-white font-bold'
                            : 'border-white/10 text-neutral-400 hover:border-white/30'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brief */}
                <div className="space-y-2">
                  <label className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                    PROJECT BRIEF & TIMELINE
                  </label>
                  <textarea
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full bg-neutral-900 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#70020F] resize-none"
                    placeholder="DESCRIBE YOUR SYSTEM ARCHITECTURE, KINETIC DESIGN GOALS, OR PRODUCT VISION..."
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => onSetCursor('SUBMIT', 'EMAIL', true)}
                  onMouseLeave={() => onSetCursor('', 'DEFAULT', false)}
                  className="w-full py-4 bg-[#70020F] hover:bg-[#8f0415] text-white font-extrabold uppercase tracking-widest transition-all border border-white/20 shadow-[0_0_20px_rgba(112,2,15,0.6)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT INQUIRY TO IHZA MAULANA</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
