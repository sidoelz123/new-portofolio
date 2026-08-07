import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, SKILL_CATEGORIES } from "../data/portfolio";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Instagram,
  Sparkles,
} from "lucide-react";

interface ContactSectionProps {
  onSetCursor: (text: string, context: any, isHovered: boolean) => void;
}

const FORM_STORAGE_KEY = "ihza_contact_form_draft";

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const SOCIAL_MEDIA_CARDS = [
  {
    id: "github",
    name: "GitHub",
    handle: "@sidoelz123",
    url: "https://github.com/sidoelz123",
    icon: Github,
    tag: "// CODE REPOS",
    status: "ACTIVE COMMITTER",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "ihzamz",
    url: "https://linkedin.com/in/ihzamz",
    icon: Linkedin,
    tag: "// PROFESSIONAL NETWORK",
    status: "OPEN FOR ROLES",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@ijaa212",
    url: "https://instagram.com/ijaa212",
    icon: Instagram,
    tag: "// SOCIAL MEDIA",
    status: "DAILY LOGS",
  },
];

export const ContactSection: React.FC<ContactSectionProps> = React.memo(({ onSetCursor }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);
  const handleDownloadCV = () => {
    window.open(PERSONAL_INFO.document_cv, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-8 bg-[#0a0a0a] border-t-2 border-[#70020F] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Giant Kinetic Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#70020F] mb-3">
            <Mail className="w-4 h-4 text-[#70020F]" />
            <span className="font-bold tracking-widest">// 07. DIRECT PIPELINE</span>
          </div>

          <h2
            onMouseEnter={() => onSetCursor("INITIATE", "EMAIL", true)}
            onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white uppercase leading-none select-none hover:text-[#70020F] transition-colors"
          >
            INITIATE <span className="text-stroke font-medium md:font-extrabold">CONTACT</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Direct Email & Social Info (Left column) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 font-mono text-xs space-y-8">
            <div className="space-y-4">
              <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
                PRIMARY EMAIL ADDRESS
              </span>

              <div className="bg-neutral-950 border border-white/20 p-5 space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onMouseEnter={() => onSetCursor("MAILTO", "EMAIL", true)}
                  onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
                  className="text-lg sm:text-2xl font-bold text-white hover:text-[#70020F] transition-colors break-all block"
                >
                  {PERSONAL_INFO.email}
                </a>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <button
                    onClick={handleCopyEmail}
                    onMouseEnter={() => onSetCursor("COPY", "COPY", true)}
                    onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
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

            {/* Recruiter CV Download Block */}
            <div className="space-y-4">
              <span className="text-neutral-500 text-[10px] uppercase tracking-widest block">
                RECRUITER DOSSIER & PROFILE
              </span>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => onSetCursor("DOWNLOAD CV", "VIEW", true)}
                onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
                className="w-full p-4 bg-neutral-950 hover:bg-[#70020F] border-2 border-white/20 hover:border-[#70020F] text-white font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-between transition-colors shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0px_#70020F] cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-[#70020F] group-hover:text-white transition-colors" />
                  <span>DOWNLOAD FULL CV [TXT / PROFILE]</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Interactive Social Media Network Cards with Hover-Reveal (Right Column) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 font-mono text-xs space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-neutral-400 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#70020F]" />
                <span>CONNECT ACROSS NETWORKS</span>
              </span>
              <span className="text-[#70020F] font-bold text-[10px] hidden sm:inline">
                [ HOVER TO REVEAL SPECS ]
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {SOCIAL_MEDIA_CARDS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => onSetCursor(social.name.toUpperCase(), "OPEN", true)}
                    onMouseLeave={() => onSetCursor("", "DEFAULT", false)}
                    className="group relative bg-neutral-950 border border-white/15 hover:border-[#70020F] transition-all duration-300 p-6 overflow-hidden flex flex-col justify-between min-h-[140px] shadow-lg hover:shadow-[0_0_30px_rgba(112,2,15,0.3)] cursor-pointer"
                  >
                    {/* Background Scanline & Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#70020F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between text-[10px] text-neutral-500 relative z-10 mb-3">
                      <span className="font-bold tracking-widest text-[#70020F] group-hover:text-white transition-colors">
                        {social.tag}
                      </span>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 border border-white/10 text-neutral-300 group-hover:border-[#70020F] transition-colors">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#70020F] animate-pulse" />
                        <span className="font-bold">{social.status}</span>
                      </div>
                    </div>

                    {/* Main Name & Icon Row */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-neutral-900 border border-white/10 group-hover:bg-[#70020F] group-hover:border-[#70020F] group-hover:text-white text-[#70020F] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-white group-hover:text-[#70020F] transition-colors tracking-tight">
                            {social.name}
                          </h3>
                          <span className="text-neutral-400 font-mono text-xs group-hover:text-white transition-colors">
                            {social.handle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
                        <span className="text-[10px] font-bold tracking-widest uppercase hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#70020F]">
                          CONNECT [↗]
                        </span>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
