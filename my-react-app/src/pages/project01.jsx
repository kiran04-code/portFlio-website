import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer2 from '../components/footer2';
import Footer3 from '../components/Footer3';
import { FaGithub, FaArrowLeft, FaRocket, FaCode, FaLightbulb } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';
import { projetcs } from '../assets/assets';
import { motion, useScroll, useSpring } from 'framer-motion';

const Project01 = () => {
  const { projs } = useParams();
  const navigate = useNavigate();
  const projectFounded = projetcs.filter((items) => items.name === projs);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-orange-500/30">
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 z-[1000] origin-left'
      />

      <Navbar />

      {projectFounded.map((items, index) => (
        <div key={index} className="relative pt-24 pb-20">

          {/* Header Section */}
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-zinc-500 hover:text-orange-400 transition-colors mb-8 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
            </button>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
            >
              {items.tittle}
            </motion.h1>

            <div className="flex flex-wrap gap-4">
              <a href={items.github} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all shadow-xl">
                <FaGithub className="text-xl" /> GitHub Repository
              </a>
              <a href={items.liveproject} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-black font-bold rounded-full hover:scale-105 transition-all shadow-lg shadow-orange-500/20">
                <FaRocket /> Live Demo
              </a>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">

            {/* Left Column: Technical Narrative */}
            <div className="lg:col-span-7 space-y-16">

              {/* Description */}
              <section>
                <p className="text-xl text-zinc-400 leading-relaxed italic border-l-2 border-orange-500 pl-6">
                  {items.description}
                </p>
              </section>

              {/* Why Built - Bento Style */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <FaLightbulb className="text-orange-400 text-2xl" />
                  <h2 className="text-2xl font-bold">The Problem & Logic</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {items.whybuild.map((impt, i) => (
                    <div key={i} className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-orange-500/30 transition-colors">
                      <p className="text-zinc-300 text-sm leading-relaxed">{impt.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack - Modern Chips */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <FaCode className="text-orange-400 text-2xl" />
                  <h2 className="text-2xl font-bold">Tech Stack</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {items.techTASK.map((section, idx) => {
                    const key = Object.keys(section)[0];
                    const value = section[key];
                    return (
                      <div key={idx} className="group relative px-4 py-3 bg-zinc-900 border border-white/10 rounded-xl">
                        <span className="text-orange-400 text-xs font-mono block mb-1 uppercase tracking-widest">{key}</span>
                        <span className="text-white font-medium">{value[0].text}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Features - List with Custom Bullet */}
              <section>
                <h2 className="text-2xl font-bold mb-6">Core Functionalities</h2>
                <div className="space-y-4">
                  {items.keyfaeture.map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                      <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(249,115,22,1)]" />
                      <p className="text-zinc-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Visual Showcase */}
            {/* Right Column: Visual Showcase (Overlay Scrolling) */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Gallery Preview</h2>
                  <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-1 rounded border border-orange-500/20">
                    {items.projectImage.length} Screens
                  </span>
                </div>

                {/* Scroll Container with hidden scrollbar */}
                <div className="h-[70vh] overflow-y-auto pr-4 space-y-20 custom-gallery-scroll pb-20">
                  {items.projectImage.map((src, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] sticky top-0"
                      style={{ top: `${idx * 20}px` }} // This creates the "Stacking" effect
                    >
                      {/* Top Browser Bar */}
                      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-zinc-900/50 backdrop-blur-md">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/40" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                          <div className="w-2 h-2 rounded-full bg-green-500/40" />
                        </div>
                        <span className="text-[10px] text-zinc-600 font-mono">view_screen_0{idx + 1}.png</span>
                      </div>

                      {/* Image Content */}
                      <div className="relative">
                        <img
                          src={src}
                          alt={`Preview ${idx}`}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Glossy Overlay Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Scroll Indicator */}
                <div className="mt-6 flex items-center justify-center gap-2 text-zinc-600">
                  <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore gallery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Footer3 />
    </div>
  );
};

export default Project01;