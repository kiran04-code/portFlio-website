import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ["hero", "about", "khanaaval", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Khanaaval", id: "khanaaval", isFlagship: true },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Ecosystem", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "py-3 bg-black/75 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl" : "py-5 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Custom Designed KIRAN Brand Logo */}
          <a
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="group flex items-center gap-3 cursor-pointer select-none"
            data-cursor="pointer"
          >
            {/* Geometric Monogram Emblem */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-white via-zinc-200 to-zinc-400 p-[1px] shadow-[0_0_25px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all duration-500">
              <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center relative overflow-hidden">
                
                {/* Subtle internal glow grid */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-60" />
                
                {/* Precision Geometric Vector Mark 'K' */}
                <svg
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-none stroke-white transition-transform duration-500 group-hover:scale-110"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Spine of K */}
                  <line x1="8" y1="6" x2="8" y2="26" stroke="#ffffff" />
                  {/* Upper diagonal arm */}
                  <line x1="8" y1="16" x2="22" y2="6" stroke="#ffffff" />
                  {/* Lower diagonal arm */}
                  <line x1="12" y1="13" x2="23" y2="26" stroke="#ffffff" />
                  {/* Glowing intersection dot */}
                  <circle cx="8" cy="16" r="1.5" fill="#ffffff" stroke="none" />
                </svg>
              </div>
            </div>

            {/* Brand Typography & Status */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight text-white font-display uppercase group-hover:text-zinc-200 transition-colors">
                  KIRAN
                </span>
                <span className="text-zinc-500 font-display font-light text-sm hidden sm:inline">
                  RATHOD
                </span>
              </div>

              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                <span className="truncate">DEVOPS & FULL-STACK</span>
              </span>
            </div>
          </a>

          {/* Center Navigation Pill (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  data-cursor="pointer"
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-black font-bold bg-white shadow-lg"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.isFlagship && (
                    <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${isActive ? "bg-black" : "bg-white"}`} />
                  )}
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Group (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/kiran.rathod.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase text-zinc-300 bg-white/[0.04] border border-white/[0.1] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              data-cursor="pointer"
              className="px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 flex items-center gap-1.5 group shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-cursor="pointer"
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white flex items-center justify-center hover:bg-white/[0.1] transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden bg-black/95 backdrop-blur-3xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 pt-24 sm:pt-28 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-5 sm:space-y-6">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 border-b border-white/10 pb-3">
            Navigation Index
          </p>
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center justify-between text-left group py-1"
            >
              <span className="text-2xl sm:text-4xl font-black tracking-tight text-white group-hover:text-zinc-400 transition-colors font-display">
                0{idx + 1}. {link.name}
              </span>
              <ArrowUpRight size={20} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <a
            href="/kiran.rathod.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-center text-xs font-mono tracking-wider uppercase text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
          >
            <FileText size={15} />
            <span>Download Resume PDF</span>
          </a>

          <p className="text-zinc-600 font-mono text-[11px] uppercase tracking-widest">
            Pune, India • Open Worldwide
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;