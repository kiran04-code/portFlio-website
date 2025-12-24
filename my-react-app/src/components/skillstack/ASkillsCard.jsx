import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, icon, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full group py-10 px-6 cursor-none"
    >
      {/* 1. The Floating Icon (Main Focus) */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          {/* Holographic Glow behind icon */}
          <div className="absolute inset-0 bg-orange-500/20 blur-[60px] rounded-full group-hover:bg-orange-600/40 transition-all duration-700" />
          
          <motion.img
            whileHover={{ rotateY: 15, rotateX: -15, scale: 1.1 }}
            src={icon}
            alt={title}
            className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(251,146,60,0.2)]"
          />
        </div>

        {/* 2. Minimalist Typography */}
        <div className="text-center space-y-2">
          <h3 className="text-[10px] font-mono tracking-[0.5em] text-zinc-500 uppercase group-hover:text-orange-400 transition-colors duration-500">
            {title}
          </h3>
          <p className="text-4xl md:text-5xl font-black text-white tracking-tighter transition-all duration-500 group-hover:italic group-hover:tracking-normal">
            {subtitle}
          </p>
        </div>
      </div>

      {/* 3. The "Glass Frame" (Visible only on hover) */}
      <div className="absolute inset-0 z-0 transition-all duration-700 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[3rem] border border-white/10 backdrop-blur-[2px]" />
        
        {/* Corner Accents */}
        <div className="absolute top-8 left-8 w-2 h-2 border-t-2 border-l-2 border-orange-500/50" />
        <div className="absolute bottom-8 right-8 w-2 h-2 border-b-2 border-r-2 border-orange-500/50" />
      </div>

      {/* 4. Large Background Index (Ghost Number) */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-8xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-orange-500/[0.03] transition-colors duration-700">
        {subtitle.charAt(0)}
      </div>
    </motion.div>
  );
};

export default SkillCard;