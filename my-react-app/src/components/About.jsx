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
      icon: <Server size={22} className="text-white" />,
      title: "Distributed Backend Architecture",
      desc: "Engineering high-throughput REST & GraphQL APIs, microservices, Service/Repository design patterns, and asynchronous background worker queues with BullMQ and Redis.",
    },
    {
      icon: <Shield size={22} className="text-white" />,
      title: "DevOps & Cloud Infrastructure",
      desc: "Deploying production-grade containerized systems with Docker, Kubernetes, Nginx reverse proxy, SSL/TLS automation, and CI/CD pipelines via GitHub Actions on AWS EC2 & VPS.",
    },
    {
      icon: <Code2 size={22} className="text-white" />,
      title: "Interactive Creative Development",
      desc: "Crafting fluid, high-contrast web applications using React.js, Next.js, GSAP timelines, Lenis smooth scrolling, and bespoke WebGL/Canvas micro-animations.",
    },
    {
      icon: <Database size={22} className="text-white" />,
      title: "Data Reliability & Caching",
      desc: "Designing resilient data layers across PostgreSQL (Prisma/Drizzle) and MongoDB, fortified by Redis multi-tier caching for sub-millisecond query responses.",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full py-20 sm:py-28 md:py-40 bg-[#050505] text-white border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
            01 // Engineering Biography
          </span>
        </div>

        {/* Top Story Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          
          {/* Left Title & Philosophy */}
          <div ref={textRef} className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase font-display leading-[1.05] tracking-tight">
              ARCHITECTING <br />
              SYSTEMS <br />
              <span className="text-zinc-600">THAT SCALE.</span>
            </h2>

            <div className="space-y-3 text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Kiran Santosh Rathod</span>, a Full-Stack Engineer and DevOps practitioner studying Computer Science at <span className="text-white font-medium">VIT Pune</span>.
              </p>
              <p>
                I architect high-throughput systems, cloud infrastructure with Docker and Redis at Blackangler, and founded <span className="text-white font-medium underline underline-offset-4 decoration-white/30">Khanaaval.com</span> serving hundreds of daily students.
              </p>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="https://github.com/kiran04-code"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore GitHub Code</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="/kiran.rathod.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:bg-white/[0.1] transition-all flex items-center justify-center gap-2"
              >
                <span>Read Full Resume</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Bento Box: Academic & Technical Credentials */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            
            {/* Education Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between min-h-[220px]">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-4">
                <GraduationCap size={20} />
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
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between min-h-[220px]">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-4">
                <Shield size={20} />
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
            <div className="sm:col-span-2 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
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

        {/* Core Pillars Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {corePillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
