import React, { useEffect, useRef } from "react";
import { ProjectThambnel, projetcs } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowcase = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const projectCards = containerRef.current?.querySelectorAll(".editorial-project-card") || [];

      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Enhanced project list combining assets data
  const projectsList = [
    {
      id: "proj6",
      number: "01",
      title: "Twitter Architecture Clone",
      category: "Distributed Social Platform",
      tagline: "High-concurrency social media architecture with event-driven messaging, GraphQL API federation, and Redis caching.",
      image: ProjectThambnel.find((p) => p.name === "proj6")?.themabaiimg,
      tech: ["Next.js", "GraphQL", "PostgreSQL", "Kafka", "Redis", "Socket.IO", "Prisma ORM"],
      live: "https://twitter-frontend-gamma-three.vercel.app/",
      github: "https://github.com/kiran04-code",
    },
    {
      id: "proj1",
      number: "02",
      title: "QuickChat Live Messenger",
      category: "Real-Time Communication",
      tagline: "Instant bi-directional messaging platform with real-time presence detection, WebSocket channels, and zero-latency chat rooms.",
      image: ProjectThambnel.find((p) => p.name === "proj1")?.themabaiimg,
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      live: "https://quickchats-com-5.onrender.com/",
      github: "https://github.com/kiran04-code/QuickChats.com.git",
    },
    {
      id: "proj4",
      number: "03",
      title: "HeathShield Telehealth Hub",
      category: "Healthcare & Vaccination",
      tagline: "Comprehensive medical appointment and vaccination tracking portal with WebRTC video consultations and geo-location search.",
      image: ProjectThambnel.find((p) => p.name === "proj4")?.themabaiimg,
      tech: ["React.js", "Node.js", "MongoDB", "ZegoCloud Video", "Leaflet Maps", "Razorpay"],
      live: "https://lifeshield.onrender.com/",
      github: "https://github.com/kiran04-code/Lifeshield.git",
    },
    {
      id: "proj5",
      number: "04",
      title: "Kesula Threads Apparel Hub",
      category: "E-Commerce & Inventory",
      tagline: "Modern menswear commerce web application featuring live inventory management, dynamic filtering, and Razorpay checkout.",
      image: ProjectThambnel.find((p) => p.name === "proj5")?.themabaiimg,
      tech: ["React.js", "TypeScript", "Node.js", "MongoDB", "Razorpay", "Framer Motion"],
      live: "https://kusala-threads.onrender.com",
      github: "https://github.com/kiran04-code",
    },
    {
      id: "proj3",
      number: "05",
      title: "VITAcademic Portal",
      category: "Educational Infrastructure",
      tagline: "Student-led centralized academic platform organizing courseware, unit question banks, and handwritten notes for VIT Pune.",
      image: ProjectThambnel.find((p) => p.name === "proj3")?.themabaiimg,
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      live: "https://vitacadeemic.onrender.com",
      github: "https://github.com/kiran04-code/vitAcadamic.git",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 md:mb-28 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
                04 // Curated Engineering Archive
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter font-display">
              SELECTED <span className="text-zinc-600">PROJECTS.</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-sm">
            Scalable distributed architectures, real-time WebSockets, and production-grade full-stack solutions.
          </p>
        </div>

        {/* Large Editorial Project Cards */}
        <div className="space-y-16 md:space-y-24">
          {projectsList.map((project, idx) => (
            <div
              key={project.id}
              className="editorial-project-card group relative rounded-3xl md:rounded-[2.5rem] bg-[#080808] border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center p-8 md:p-14">
                
                {/* Left Information Column (6 cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
                  <div>
                    {/* Index & Category */}
                    <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-4">
                      <span className="text-zinc-300 font-bold tracking-widest">{project.number}</span>
                      <span>//</span>
                      <span className="uppercase tracking-widest text-zinc-400">{project.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display mb-4 group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-6">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-zinc-300 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.06]">
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      data-cursor="view"
                      className="px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2"
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
                        className="px-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/[0.1] transition-all flex items-center gap-2"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="open"
                        className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all"
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Image Showcase (6 cols) */}
                <div
                  onClick={() => navigate(`/project/${project.id}`)}
                  data-cursor="view"
                  className="lg:col-span-6 relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-black cursor-pointer group/img"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out grayscale group-hover/img:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 font-mono text-[10px] text-zinc-300 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles size={11} className="text-white" />
                    <span>Explore Breakdown</span>
                  </div>
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
