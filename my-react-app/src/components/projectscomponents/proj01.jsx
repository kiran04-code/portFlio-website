import React from "react";
import { ProjectThambnel } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight, Plus } from "lucide-react";

const Project001 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-20 px-4 md:px-10 ">
      <div className="max-w-[1400px] mx-auto">
        {/* Header with high-end typography */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-orange-400 font-mono tracking-[0.3em] uppercase text-xs">Portfolio Showcase</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Featured <span className="text-zinc-600 italic font-light">Artifacts.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs text-sm leading-relaxed border-l border-zinc-800 pl-6">
            A curated selection of full-stack applications and blockchain experiments developed at VIT Pune.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-12 gap-6">
          {ProjectThambnel.map((items, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              onClick={() => navigate(`/project/${items.name}`)}
              className={`relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/5 
                ${index === 0 ? "col-span-12 md:col-span-8 h-[500px]" : "col-span-12 md:col-span-4 h-[500px]"} 
                ${index === 1 ? "md:col-span-4" : ""}
              `}
            >
              {/* Image with Parallax-like Hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={items.themabaiimg}
                  alt={items.projectName}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
              </div>

              {/* Floating Content */}
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    {items.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-zinc-300 uppercase tracking-widest">
                        {t.techno}
                      </span>
                    ))}
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-orange-400 group-hover:text-black group-hover:border-orange-400 transition-all duration-500">
                    <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-sm">
                    {items.projectName}
                  </h3>
                  <div className="flex items-center gap-4 text-orange-400 font-semibold text-sm group-hover:gap-6 transition-all">
                    <p>Explore Case Study</p>
                    <MoveRight size={20} />
                  </div>
                </div>
              </div>

              {/* Glass Border Glow on Hover */}
              <div className="absolute inset-0 border-[1px] border-orange-400/0 group-hover:border-orange-400/30 rounded-[2.5rem] transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project001;