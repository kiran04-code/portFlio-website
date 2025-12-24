import React from 'react'
import Project001 from './projectscomponents/proj01'
import { useParams } from 'react-router-dom'

const Project = () => {
  // Correctly call useParams as a function
  const { id } = useParams();

  return (
    <div className="mt-10 ">
      <div className="w-full relative flex flex-col justify-center py-24 px-6 md:px-12 overflow-hidden ">
 
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none z-0">
          <h3
            className="text-[18vw] font-black text-transparent opacity-[0.03] leading-none select-none tracking-tighter"
            style={{ WebkitTextStroke: '2px white' }}
          >
            CREATIVE
          </h3>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <div className="h-[1px] w-12 bg-orange-500"></div>
            <h2 className="text-orange-400 font-mono tracking-[0.5em] uppercase text-[10px] md:text-xs font-bold">
              Curated Portfolio
            </h2>
          </div>

          {/* Main Headline */}
          <div className="relative">
            <h1 className="text-7xl md:text-[9rem] lg:text-[11rem]  font-black text-white leading-[0.85] tracking-tighter uppercase italic">
              SELECTED
            </h1>
            <div className="flex items-center gap-6 mt-2">
              {/* Aesthetic "Scroll Down" or "Year" tag */}
              <span className="hidden md:block text-zinc-700 font-mono text-sm tracking-widest rotate-90 origin-left border-l border-zinc-800 pl-4">
                2024—2025
              </span>
              <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-light text-zinc-600 italic leading-[0.85] tracking-tighter uppercase">
                WORKS
              </h1>
            </div>
          </div>

          {/* Description Paragraph - High Contrast Typography */}
          <div className="mt-12 flex justify-end">
            <p className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed text-right border-r-2 border-orange-500 pr-6">
              Blending technical precision with creative vision to build
              <span className="text-white"> digital experiences</span> that matter.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <Project001 />

        {/* Floating background text for premium look */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none -z-10 overflow-hidden">
          <span className="text-[20vw] font-black text-white/[0.02] select-none">CREATIVE</span>
        </div>
      </div>
    </div>
  )
}

export default Project