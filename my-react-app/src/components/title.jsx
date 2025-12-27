import React from "react";
import { SiReaddotcv } from "react-icons/si";
import { MdContactEmergency } from "react-icons/md";
import { motion } from "motion/react";

const Title = () => {
  return (
    <section className="relative md:h-170 h-140 w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. Subtle Radial Background Glow - Optimized for Black BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#fb923c10_0%,transparent_60%)] pointer-events-none" />

      {/* 3. Availability Badge (Left) */}
      <div className="absolute left-4 top-[15%] md:left-12 lg:left-24 md:top-[45%] z-30">
        <div className="flex items-center gap-2 bg-zinc-900/50 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 shadow-xl">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-gray-200 whitespace-nowrap">
            Available for Opportunities
          </span>
        </div>
      </div>

      {/* 4. Specialization Text (Right) */}
      <div className="absolute right-4 top-[20%] md:right-12 lg:right-24 md:top-[45%] z-30 max-w-[100px] md:max-w-[200px] text-right">
        <p className="text-[8px] md:text-[19px] font-bold leading-tight text-gray-400 uppercase tracking-tighter">
          Full-Stack Dev, <br />
          Scalable Software <br />
          & Web3 Developer.
        </p>
      </div>

      {/* 5. Main Subject Image (TOP GAP FIX HERE) */}
    <div className="relative z-10 w-full max-w-[90vw] sm:max-w-[500px] md:max-w-xl lg:max-w-2xl mt-10 md:mt-20 flex justify-center mx-auto">
  <motion.img 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    src="/kk.png" 
    alt="Kiran Portfolio" 
    // w-[110%] on mobile allows the image to feel "larger than life"
    className="w-[125%] sm:w-full h-auto object-contain brightness-110 
               drop-shadow-[0_0_40px_rgba(251,146,60,0.15)] 
               hover:drop-shadow-[0_0_60px_rgba(251,146,60,0.25)] 
               transition-all duration-700" 
  />
  
</div>

      {/* 6. Bold Name Overlap (Bottom Left) */}
      <div className="absolute bottom-[30%] md:bottom-[0%] left-4 md:left-12 lg:left-24 z-20 pointer-events-none">
        <h1 className="text-[12vw] md:text-[10vw] font-black text-white leading-[1] tracking-tighter uppercase">
          I AM <br />
          <p className="font-black text-[12vw]">KIRAN</p>
        </h1>
      </div>

      {/* 7. Role/Title (Bottom Right) */}
      <div className="absolute bottom-[28%] md:bottom-[10%] right-4 md:right-12 lg:right-24 z-20 text-right pointer-events-none">
        <h2 className="text-[5vw] md:text-[4vw] font-black  text-white md:text-white leading-[0.9] tracking-tighter uppercase">
          SOFTWARE <br /> DEVELOPER
        </h2>
      </div>

      {/* 8. Call to Action Buttons */}
      <div className="absolute bottom-25 md:bottom-8 flex gap-4 z-40 scale-90 md:scale-100">
        <a 
          href="/Kiran_Rathod_resume_new.pdf" 
          className="p-4 bg-zinc-900 text-white border border-white/10 rounded-full hover:bg-white hover:text-black transition-all shadow-2xl"
        >
          <SiReaddotcv size={20} />
        </a>

        <button 
          className="p-4 bg-orange-500 text-black rounded-full hover:scale-110 transition-all shadow-lg shadow-orange-500/30"
        >
          <MdContactEmergency size={20} />
        </button>
      </div>

    </section>
  );a
};

export default Title;
