import React from "react";
import { ArrowUp, Github, Linkedin, Mail, FileText, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#000000] text-white border-t border-white/[0.08] pt-20 pb-12 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Massive Signature Statement */}
        <div className="mb-16 md:mb-24 overflow-hidden text-center">
          <h2
            className="text-[12vw] sm:text-[11vw] font-black uppercase tracking-tighter leading-[0.8] text-white/90 font-display transition-colors hover:text-white"
            style={{ fontFamily: "'Syne', 'Outfit', sans-serif" }}
          >
            KIRAN RATHOD<span className="text-zinc-600">.</span>
          </h2>
        </div>

        {/* Bottom Metadata & Links Grid */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/[0.08]">
          
          {/* Left info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Full-Stack Software Engineer & DevOps Practitioner
            </p>
            <p className="text-[11px] font-mono text-zinc-600">
              © {new Date().getFullYear()} Kiran Santosh Rathod. All Rights Reserved.
            </p>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="flex items-center gap-3">
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
              href="/kiran.rathod.pdf"
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

      </div>
    </footer>
  );
};

export default Footer;