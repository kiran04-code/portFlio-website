import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Cpu, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", icon: <Home size={16} />, id: "Hero" },
    { name: "About", icon: <User size={16} />, id: "About" },
    { name: "Skills", icon: <Cpu size={16} />, id: "Skills" },
    { name: "Contact", icon: <MessageSquare size={16} />, id: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed left-0 w-full flex justify-center z-[100] transition-all duration-500 ease-in-out ${scrolled ? "top-4" : "top-0"}`}>
        <div 
          className={`
            flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23, 1, 0.32, 1)]
            ${scrolled 
              ? "w-[90%] md:w-[600px] px-2 py-2 rounded-2xl bg-zinc-900/70 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              : "w-full px-8 py-6 bg-transparent border-transparent"}
          `}
        >
          {/* Logo Branding */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("Hero")}>
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-black font-black text-lg transition-transform group-hover:rotate-[10deg]">
                K
              </div>
              <div className="absolute inset-0 bg-orange-400 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            {!scrolled && (
              <p className="text-white font-bold tracking-tight text-lg hidden sm:block">
                Kiran<span className="text-orange-400">.dev</span>
              </p>
            )}
          </div>

          {/* Desktop Links (Floating Pill Style) */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActive(link.name);
                  scrollToSection(link.id);
                }}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300
                  ${active === link.name ? "text-white" : "text-zinc-400 hover:text-zinc-100"}
                `}
              >
                {active === link.name && (
                  <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg -z-10 animate-in fade-in zoom-in duration-300"></div>
                )}
                <span className={`${active === link.name ? "text-orange-400" : "text-zinc-500"}`}>{link.icon}</span>
                {link.name}
              </button>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <button 
            onClick={() => scrollToSection("Contact")}
            className={`hidden md:flex items-center gap-2 px-5 py-2 bg-orange-400 text-black rounded-xl font-bold text-sm hover:bg-orange-300 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/20`}
          >
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Designer Full-Screen Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActive(link.name);
                scrollToSection(link.id);
              }}
              className="group relative"
            >
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              <h3 className={`text-5xl font-black tracking-tighter transition-all duration-300 ${active === link.name ? "text-orange-400 translate-x-4" : "text-zinc-600 hover:text-white hover:translate-x-4"}`}>
                {link.name}
              </h3>
            </button>
          ))}
          
          <div className="pt-12 flex flex-col items-center gap-4">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
            <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">VIT Pune Engineering</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;