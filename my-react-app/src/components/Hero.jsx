import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const textLine1Ref = useRef(null);
  const textLine2Ref = useRef(null);
  const portraitRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Landing entrance animation for background text
      tl.fromTo(
        [textLine1Ref.current, textLine2Ref.current],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, stagger: 0.12, delay: 0.1 }
      )
      // Portrait smoothly glides up into place overlapping the text
      .fromTo(
        portraitRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1 },
        "-=0.7"
      )
      // Supporting intro and CTAs fade in
      .fromTo(
        bottomRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100vh] w-full pt-24 md:pt-28 pb-10 md:pb-12 px-4 sm:px-6 md:px-12 flex flex-col justify-between bg-[#000000] text-white overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85vw] h-[55vh] bg-white/[0.03] rounded-full blur-[160px] pointer-events-none" />

      {/* Main Composition Stage: Text in Background (z-10) + Image in Front (z-20) */}
      <div className="relative w-full max-w-[1600px] mx-auto my-auto flex items-center justify-center min-h-[52vh] md:min-h-[60vh]">
        
        {/* Layer 1: Background Typography (z-10, behind portrait) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none leading-[0.84]">
          
          {/* Line 1: YES, I AM A */}
          <div className="w-full flex justify-center py-1">
            <h1
              ref={textLine1Ref}
              className="text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13.2vw] font-black uppercase font-condensed tracking-tight text-white whitespace-nowrap drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              YES, I AM A
            </h1>
          </div>

          {/* Line 2: SOFTWARE DEVELOPER */}
          <div className="w-full flex justify-center py-1">
            <h1
              ref={textLine2Ref}
              className="text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13.2vw] font-black uppercase font-condensed tracking-tight text-white whitespace-nowrap drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
            >
              SOFTWARE <span className="text-zinc-400">DEVELOPER</span><span className="text-white">.</span>
            </h1>
          </div>

        </div>

        {/* Layer 2: Image in Front & Shifted Upside (z-20, above the text in background) */}
        <div
          ref={portraitRef}
          className="relative z-20 w-[260px] sm:w-[330px] md:w-[410px] lg:w-[460px] aspect-[3/4] flex items-end justify-center pointer-events-auto -translate-y-6 md:-translate-y-12"
        >
          {/* Direct background-removed cutout from kiran_hero_studio.jpg */}
          <img
            src="/kiran_hero_cutout_clean.png?v=5"
            alt="Kiran Rathod — Software Developer"
            className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.98)] transition-all duration-500 hover:brightness-110"
          />

          {/* Smooth bottom blend overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-transparent pointer-events-none" />
        </div>

      </div>

      {/* Layer 3: Supporting Content & Editorial CTAs */}
      <div
        ref={bottomRef}
        className="relative z-30 max-w-[1500px] w-full mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-4"
      >
        
        {/* Left Narrative */}
        <div className="max-w-xl space-y-3">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-[0.25em]">
            Software Developer · Full-Stack Developer · Problem Solver
          </p>
          
          <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-lg">
            Architecting distributed backend systems, modern high-performance web applications, and scalable cloud infrastructure with clean code and creative precision.
          </p>

          {/* Minimal CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection("khanaaval")}
              data-cursor="explore"
              className="px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              <span>View My Work</span>
              <ArrowDown size={14} />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              data-cursor="pointer"
              className="px-6 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/[0.1] hover:border-white/30 transition-all flex items-center gap-2"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Right Editorial Scroll Indicator */}
        <div className="hidden md:flex flex-col items-end gap-1.5 text-zinc-500 font-mono text-[11px] uppercase tracking-widest">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>(SCROLL TO SEE HOW)</span>
          </div>
          <span className="text-[10px] text-zinc-600 tracking-wider">VIT PUNE • BLACKANGLER • KHANAAVAL</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
