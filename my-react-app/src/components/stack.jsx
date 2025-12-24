import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ title, subtitle, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group h-[300px] w-full overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-orange-500/30 transition-all duration-500"
    >
      {/* 1. The Background Layer (Radial Glow) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* 2. The Content Layer */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.3em] text-orange-500 uppercase opacity-70">
              Module 0{index + 1}
            </span>
            <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{title}</h3>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-zinc-500 group-hover:border-orange-500 group-hover:text-orange-500 transition-all">
            SC
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Compressed Icon with 3D Float */}
          <motion.img 
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={icon} 
            alt={subtitle} 
            className="w-24 h-24 object-contain filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10"
          />
          <h2 className="text-3xl font-black text-white mt-4 tracking-tighter uppercase group-hover:text-orange-400 transition-colors">
            {subtitle}
          </h2>
        </div>

        {/* 3. The Technical Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-white/5">
           <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-orange-500/40" />
              ))}
           </div>
           <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tighter italic group-hover:text-zinc-400">
             System_Ready
           </span>
        </div>
      </div>
    </motion.div>
  );
};

const Stack = () => {
  const skillData = [
    { title: "Architecture", subtitle: "MERN", icon: "/MERN-logo.png" },
    { title: "Realtime", subtitle: "SOCKET", icon: "/1_255iTWNk6H1N3_QZIBIAUA.png" },
    { title: "Frontend", subtitle: "NEXTJS", icon: "https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75" }
  ];

  return (
    <div className="w-full py-8 px-6 ">
      {/* Compact Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 gap-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            TECH <span className="text-zinc-800 italic font-light " >STACK.</span>
          </h1>
        </div>
        <p className="text-zinc-500 text-[11px] font-mono uppercase tracking-widest max-w-[200px] leading-relaxed">
          Optimized performance & scalable architecture solutions.
        </p>
      </div>

      {/* The Grid - No wasted space */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillData.map((skill, index) => (
          <SkillCard 
            key={index} 
            index={index}
            title={skill.title} 
            subtitle={skill.subtitle} 
            icon={skill.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;