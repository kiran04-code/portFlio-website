import React from "react";
import { ArrowUp, Github, Linkedin, Mail, FileText, Globe, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-28 pb-12 px-6 md:px-12 border-t border-white/[0.08] overflow-hidden select-none">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto flex flex-col justify-between relative z-10">
        
        {/* Top Information Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 border-b border-white/[0.08] pb-12">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">
              Creative Engineering Archive // Index
            </span>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-display tracking-tight text-white">
              KIRAN RATHOD<span className="text-zinc-600">.</span>
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              FULL-STACK DEVELOPER & DEVOPS ENGINEER • VIT PUNE CS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kiran04-code"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shadow-xl"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/kiran-rathod-66b009331"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shadow-xl"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="/Kiran_Rathod_resume_new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-black hover:bg-white hover:border-white transition-all duration-300 shadow-xl"
              title="Resume PDF"
            >
              <FileText size={18} />
            </a>

            <button
              onClick={scrollToTop}
              data-cursor="pointer"
              className="p-3.5 rounded-2xl bg-white text-black hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Monumental Interactive Signature Typography */}
        <div className="my-8 select-none overflow-hidden">
          <h2 className="text-[14vw] font-black uppercase font-display text-stroke-subtle hover:text-white transition-colors duration-700 leading-none text-center tracking-tighter">
            KIRAN.DEV
          </h2>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12 border-t border-white/[0.06] text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <p>© {currentYear} Kiran Rathod. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </span>
            <span className="hidden md:inline text-zinc-800">|</span>
            <span className="hidden md:inline text-zinc-600">Pune, India // UTC+05:30</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;