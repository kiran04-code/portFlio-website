import React from "react";
import { ProjectThambnel } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight, Plus } from "lucide-react";

const Project001 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-24 px-6 md:px-12 bg-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-orange-400 font-light tracking-[0.4em] uppercase text-[10px] md:text-xs block"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Portfolio Showcase
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Featured <span className="text-zinc-700 italic font-normal" style={{ fontFamily: "'Dancing Script', cursive" }}>Artifacts.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed border-l border-zinc-800 pl-6 font-light" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
            A curated selection of full-stack applications and blockchain experiments developed at VIT Pune.
          </p>
        </div>

        {/* The Grid - Responsive logic improved */}
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {ProjectThambnel.map((items, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/project/${items.name}`)}
              className={`relative group cursor-pointer overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#0a0a0a] border border-white/5 
                col-span-12 
                ${index % 2 === 0 ? "md:col-span-8" : "md:col-span-4"} 
                aspect-[4/5] md:aspect-auto md:h-[600px]
              `}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={items.themabaiimg}
                  alt={items.projectName}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              {/* Floating Content */}
           {/* Floating Content */}
<div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between">
  
  {/* TOP PART: Tags & Action Button */}
  <div className="flex justify-between items-start">
    <div className="flex flex-wrap gap-2 max-w-[80%]">
      {items.tech.map((t, i) => (
        <span 
          key={i} 
          className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] md:text-[11px] text-zinc-200 uppercase tracking-[0.2em] font-light" 
          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        >
          {t.techno}
        </span>
      ))}
    </div>
    
    {/* Plus Icon - Visible on desktop, subtle hover effect */}
    <div className="hidden sm:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white group-hover:bg-orange-400 group-hover:text-black group-hover:border-orange-400 transition-all duration-500 shadow-lg">
      <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
    </div>
  </div>

  {/* BOTTOM PART: Title & Link */}
  <div className="space-y-4 md:space-y-6">
    <div className="overflow-hidden">
       <motion.h3 
         initial={{ y: "100%" }}
         whileInView={{ y: 0 }}
         transition={{ duration: 0.5 }}
         className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[0.9] max-w-lg" 
         style={{ fontFamily: "'Outfit', sans-serif" }}
       >
         {items.projectName}
       </motion.h3>
    </div>

    <div className="flex items-center gap-4 text-orange-400 font-light text-xs md:text-sm tracking-[0.3em] uppercase group-hover:gap-6 transition-all duration-500">
      <p style={{ fontFamily: "'Josefin Sans', sans-serif" }}>Explore Case Study</p>
      <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
    </div>
  </div>
</div>

{/* GRADIENT OVERLAY (Add this to ensure text is ALWAYS visible) */}
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Interaction Overlay (Glass Stroke) */}
              <div className="absolute inset-0 border-2 border-orange-400/0 group-hover:border-orange-400/20 rounded-[2rem] md:rounded-[3rem] transition-all duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project001;