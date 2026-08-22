import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const projectsList = [
    {
      id: "proj2",
      number: "01",
      title: "QuickChat Real-Time Messenger",
      category: "Real-Time Systems",
      tagline: "Bi-directional WebSocket messaging platform with Zustand state, online status tracking, and end-to-end media sharing.",
      tech: ["React.js", "Socket.IO", "Node.js", "MongoDB", "Zustand", "Tailwind CSS"],
      image: images.project01 || images.proj2_img1,
      live: "https://quick-chat-frontend-7n73.onrender.com/login",
      github: "https://github.com/kiran04-code/QuickChat-Frontend",
    },
    {
      id: "proj3",
      number: "02",
      title: "HealthShield Telehealth Hub",
      category: "Healthcare Infrastructure",
      tagline: "Centralized medical platform with role-based dashboard access, encrypted health records, and dynamic appointment scheduling.",
      tech: ["React.js", "Express.js", "MongoDB", "Node.js", "REST APIs"],
      image: images.L1,
      live: "https://healthshield-frontend-1.onrender.com",
      github: "https://github.com/kiran04-code/HealthShield-Frontend",
    },
    {
      id: "proj4",
      number: "03",
      title: "Kesula Threads Apparel Hub",
      category: "E-Commerce Engineering",
      tagline: "Modern high-performance apparel retail engine with catalog filtering, secure checkout flows, and administrative inventory controls.",
      tech: ["MERN Stack", "Tailwind CSS", "REST API", "Razorpay"],
      image: images.Project2,
      live: null,
      github: "https://github.com/kiran04-code/kesula-threads-backend",
    },
    {
      id: "proj5",
      number: "04",
      title: "VITAcademic Portal",
      category: "Educational Infrastructure",
      tagline: "Student-led centralized academic platform organizing courseware, unit question banks, and handwritten notes for VIT Pune.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: images.Project3,
      live: null,
      github: "https://github.com/kiran04-code",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current?.querySelectorAll(".editorial-project-card") || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full py-20 sm:py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-28 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
                04 // Curated Engineering Archive
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-display">
              SELECTED <span className="text-zinc-600">PROJECTS.</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-sm">
            Scalable distributed architectures, real-time WebSockets, and production-grade full-stack solutions.
          </p>
        </div>

        {/* Large Editorial Project Cards */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="editorial-project-card group relative rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-[#080808] border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center p-5 sm:p-8 md:p-14">
                
                {/* Left Information Column (6 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 sm:space-y-8">
                  <div>
                    {/* Index & Category */}
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-3">
                      <span className="text-zinc-300 font-bold tracking-widest">{project.number}</span>
                      <span>//</span>
                      <span className="uppercase tracking-widest text-zinc-400 truncate">{project.category}</span>
                    </div>

                    {/* Title — Clean Space Grotesk / Outfit font without awkward mid-word breaks */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase font-display mb-3 sm:mb-4 group-hover:text-zinc-200 transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-4 sm:mb-6">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] sm:text-[11px] text-zinc-300 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      data-cursor="view"
                      className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight size={15} />
                    </button>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="open"
                        className="px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] transition-all font-mono text-xs uppercase flex items-center gap-2"
                        title="Live Demonstration"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="open"
                        className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all flex items-center justify-center"
                        title="GitHub Source"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Frame Column (6 cols) */}
                <div
                  onClick={() => navigate(`/project/${project.id}`)}
                  data-cursor="view"
                  className="lg:col-span-6 relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 aspect-[16/10] group-hover:border-white/20 transition-all cursor-pointer shadow-2xl flex items-center justify-center"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
                  />
                  
                  {/* Subtle inner shadow mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectShowcase;
