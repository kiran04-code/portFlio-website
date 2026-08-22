import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import SmoothScroll from "../components/SmoothScroll";
import { ArrowLeft, ExternalLink, Github, Sparkles, Layers, Cpu, CheckCircle2, Code2 } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { projetcs } from "../assets/assets";

const Project01 = () => {
  const { projs } = useParams();
  const navigate = useNavigate();
  const projectFounded = projetcs.find((item) => item.name === projs);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projs]);

  if (!projectFounded) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black font-display mb-4">Project Not Found</h1>
        <p className="text-zinc-500 mb-8 font-mono text-sm">The requested case study could not be located.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-xl bg-white text-black font-mono text-xs uppercase font-bold tracking-wider"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <div className="bg-[#000000] min-h-screen text-white selection:bg-white selection:text-black">
        <CustomCursor />
        <Navbar />

        <main className="relative pt-32 md:pt-44 pb-28">
          {/* Header Section */}
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16 md:mb-24">
            <button
              onClick={() => navigate(-1)}
              data-cursor="pointer"
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
                  Case Study // Technical Architecture
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase font-display leading-[0.88] max-w-5xl">
                {projectFounded.tittle}
              </h1>

              <div className="flex flex-wrap items-center gap-4 pt-6">
                {projectFounded.liveproject && (
                  <a
                    href={projectFounded.liveproject}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="open"
                    className="px-8 py-4 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={15} />
                  </a>
                )}

                {projectFounded.github && (
                  <a
                    href={projectFounded.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="open"
                    className="px-6 py-4 rounded-xl bg-white/[0.05] border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/[0.1] hover:border-white/30 transition-all flex items-center gap-2"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Technical Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-16">
              
              {/* Overview / Statement */}
              <section className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                  Executive Summary
                </p>
                <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                  {projectFounded.description}
                </p>
              </section>

              {/* Problem & Architectural Logic */}
              {projectFounded.whybuild && projectFounded.whybuild.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Cpu size={20} className="text-white" />
                    <h2 className="text-2xl md:text-3xl font-black uppercase font-display tracking-tight">
                      Problem & Engineering Logic
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectFounded.whybuild.map((item, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                          <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Technical Stack Architecture */}
              {projectFounded.techTASK && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Code2 size={20} className="text-white" />
                    <h2 className="text-2xl md:text-3xl font-black uppercase font-display tracking-tight">
                      Architecture & Stack
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {projectFounded.techTASK.map((layer, idx) => {
                      const key = Object.keys(layer)[0];
                      const value = layer[key];
                      return (
                        <div
                          key={idx}
                          className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between"
                        >
                          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                            {key} Layer
                          </span>
                          <span className="text-base font-bold text-white font-sans">
                            {value[0]?.text || ""}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Core Features */}
              {projectFounded.keyfaeture && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Layers size={20} className="text-white" />
                    <h2 className="text-2xl md:text-3xl font-black uppercase font-display tracking-tight">
                      Core Functionalities
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {projectFounded.keyfaeture.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-4 hover:border-white/15 transition-all"
                      >
                        <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                        <p className="text-sm text-zinc-300 font-light">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* Right Column: Visual Interface Showcase (5 cols) */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-36">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Screenshots & Interface
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-mono text-[10px] text-zinc-300">
                  {projectFounded.projectImage?.length || 0} Frames
                </span>
              </div>

              <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 custom-scroll">
                {projectFounded.projectImage?.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group"
                  >
                    <div className="px-4 py-3 bg-zinc-900/80 border-b border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                      </div>
                      <span>screen_0{idx + 1}.png</span>
                    </div>
                    <img
                      src={imgSrc}
                      alt={`Project preview frame ${idx + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Project01;