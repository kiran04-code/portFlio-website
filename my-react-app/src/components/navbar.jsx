import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText, Terminal, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
          scrolled ? "py-3 bg-black/60 backdrop-blur-2xl border-b border-white/[0.08]" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Mark */}
          <a
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="group flex items-center gap-3 cursor-pointer"
            data-cursor="pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-white text-black font-extrabold flex items-center justify-center text-sm tracking-tighter transition-transform duration-300 group-hover:scale-105 group-hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              KR.
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
                KIRAN RATHOD
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                DevOps & Full-Stack
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
              href="/Kiran_Rathod_resume_new.pdf"
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
            className="lg:hidden w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white flex items-center justify-center hover:bg-white/[0.1] transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden bg-black/95 backdrop-blur-3xl transition-all duration-500 flex flex-col justify-between p-8 pt-28 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 border-b border-white/10 pb-3">
            Navigation Index
          </p>
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center justify-between text-left group"
            >
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-zinc-400 transition-colors font-display">
                0{idx + 1}. {link.name}
              </span>
              <ArrowUpRight size={22} className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <a
            href="/Kiran_Rathod_resume_new.pdf"
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