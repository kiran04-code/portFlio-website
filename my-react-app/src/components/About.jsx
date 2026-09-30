import React, { useEffect, useRef } from "react";
import { Shield, Code2, Server, Database, ArrowUpRight, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const corePillars = [
    {
      id: "SYS-01",
      icon: Server,
      title: "Distributed Backend Architecture",
      desc: "Engineering high-throughput REST & GraphQL APIs, microservices, Service/Repository design patterns, and asynchronous background worker queues with BullMQ and Redis.",
      tags: ["BullMQ Queues", "Microservices", "REST & GraphQL", "Redis Pub/Sub"],
      telemetry: "HIGH THROUGHPUT",
      metric: "< 5ms Latency",
    },
    {
      id: "OPS-02",
      icon: Shield,
      title: "DevOps & Cloud Infrastructure",
      desc: "Deploying production-grade containerized systems with Docker, Kubernetes, Nginx reverse proxy, SSL/TLS automation, and CI/CD pipelines via GitHub Actions on AWS EC2 & VPS.",
      tags: ["Docker & K8s", "AWS EC2 & VPS", "CI/CD Actions", "Nginx Proxy"],
      telemetry: "ZERO DOWNTIME",
      metric: "99.99% Uptime",
    },
    {
      id: "EXP-03",
      icon: Code2,
      title: "Interactive Creative Development",
      desc: "Crafting fluid, high-contrast web applications using React.js, Next.js, GSAP timelines, Lenis smooth scrolling, and bespoke WebGL/Canvas micro-animations.",
      tags: ["GSAP 3 Motion", "React / Next.js", "Lenis Smooth", "Canvas Shaders"],
      telemetry: "60 FPS RENDER",
      metric: "Physics Motion",
    },
    {
      id: "DAT-04",
      icon: Database,
      title: "Data Reliability & Caching",
      desc: "Designing resilient data layers across PostgreSQL (Prisma/Drizzle) and MongoDB, fortified by Redis multi-tier caching for sub-millisecond query responses.",
      tags: ["PostgreSQL", "Redis L1/L2 Cache", "MongoDB ACID", "Prisma / Drizzle"],
      telemetry: "PERSISTENT CORE",
      metric: "Sub-ms Cache Hits",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full py-20 sm:py-28 md:py-40 bg-[#000000] text-white border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85vw] h-[50vh] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
            01 // Engineering Biography & Core Disciplines
          </span>
        </div>

        {/* Top Story Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          
          {/* Left Title & Philosophy */}
          <div ref={textRef} className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase font-display leading-[1.02] tracking-tight">
              ARCHITECTING <br />
              SYSTEMS <br />
              <span className="text-zinc-600">THAT SCALE.</span>
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Kiran Santosh Rathod</span>, a Full-Stack Engineer and DevOps practitioner studying Computer Science at <span className="text-white font-medium">VIT Pune</span>.
              </p>
              <p>
                I architect high-throughput systems, cloud infrastructure with Docker and Redis at Blackangler, and founded <span className="text-white font-medium underline underline-offset-4 decoration-white/40">Khanaaval.com</span> serving hundreds of daily students.
              </p>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="https://github.com/kiran04-code"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                <span>Explore GitHub Code</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="/kiran.rathod.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/[0.1] hover:border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Read Full Resume</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Bento Box: Academic & Technical Credentials */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            
            {/* Education Card */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e0e11] via-[#09090b] to-[#040405] border border-white/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col justify-between min-h-[220px] group overflow-hidden shadow-xl">
              {/* Subtle top rim */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-105 group-hover:bg-white/[0.08] transition-all">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  Academic Foundation
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                  B.Tech in Computer Science
                </h4>
                <p className="text-xs text-zinc-400">
                  Vishwakarma Institute of Technology (VIT), Pune
                </p>
                <p className="text-[11px] font-mono text-zinc-500 mt-2">
                  Algorithms • Distributed OS • Database Internals
                </p>
              </div>
            </div>

            {/* Current Production Role */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e0e11] via-[#09090b] to-[#040405] border border-white/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col justify-between min-h-[220px] group overflow-hidden shadow-xl">
              {/* Subtle top rim */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-105 group-hover:bg-white/[0.08] transition-all">
                <Shield size={22} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  Industry Role
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                  Full-Stack & DevOps
                </h4>
                <p className="text-xs text-zinc-400">
                  Blackangler Pvt. Limited
                </p>
                <p className="text-[11px] font-mono text-zinc-500 mt-2">
                  Cloud Infrastructure • Service/Repo Architecture
                </p>
              </div>
            </div>

            {/* Platform Founder */}
            <div className="sm:col-span-2 relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e0e11] via-[#09090b] to-[#040405] border border-white/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 overflow-hidden shadow-xl">
              {/* Subtle top rim */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Active Startup Venture
                  </p>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight break-words">
                  Founder @ Khanaaval.com
                </h4>
                <p className="text-xs text-zinc-400">
                  Live Food-Tech ecosystem serving 300+ daily student meals.
                </p>
              </div>

              <a
                href="https://www.khanaaval.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>
        </div>

        {/* Core Pillars Grid — Cinematic Monochrome Cards */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <h3 className="text-sm font-mono uppercase tracking-[0.25em] text-zinc-300">
                Core Engineering Disciplines & Capabilities
              </h3>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-zinc-500">
              [SYSTEMS • DEVOPS • UI • DATA]
            </span>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {corePillars.map((pillar, i) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={i}
                  className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#111114] via-[#09090b] to-[#040405] border border-white/[0.08] hover:border-white/30 transition-all duration-500 flex flex-col justify-between group overflow-hidden min-h-[380px] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
                >
                  {/* Razor Sharp Top Laser Glow Rim */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Ambient Subtle Radial Glow Background */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/[0.02] blur-3xl pointer-events-none group-hover:bg-white/[0.05] transition-colors" />

                  {/* Upper Section: Code Badge, Icon, Title, and Desc */}
                  <div>
                    {/* Card Top Row: Monospace Code Badge & Live Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-2.5 py-1 rounded-md font-mono text-[10px] uppercase tracking-widest bg-white/[0.04] border border-white/10 text-zinc-400 group-hover:text-zinc-200 group-hover:border-white/20 transition-colors">
                        {pillar.id}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
                          {pillar.telemetry}
                        </span>
                      </div>
                    </div>

                    {/* Themed Monochrome Icon Box */}
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 text-white transition-all duration-500 group-hover:scale-105 group-hover:bg-white/[0.08] group-hover:border-white/25 shadow-inner">
                      <IconComponent size={22} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 font-display group-hover:text-zinc-100 transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-light mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Lower Section: Tech Matrix Tags & Telemetry Footer */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.08] text-zinc-400 group-hover:border-white/15 group-hover:text-zinc-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Performance Metric Footer */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-1">
                      <span className="text-zinc-400 font-medium">
                        {pillar.metric}
                      </span>
                      <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
