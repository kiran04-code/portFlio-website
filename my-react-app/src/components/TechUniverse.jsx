import React, { useState, useEffect, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiRedis,
  SiSocketdotio,
  SiAmazonec2,
  SiGithub,
  SiGraphql,
} from "react-icons/si";
import { TbBrandSpeedtest } from "react-icons/tb";
import { Sparkles, Layers, Cpu } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechUniverse = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSkill, setActiveSkill] = useState({
    name: "Distributed Systems & Full-Stack Core",
    category: "Architecture & DevOps",
    description: "Designing end-to-end distributed applications, containerized deployments, caching layers, and high-performance interactive user interfaces.",
    icon: <Cpu className="text-white" size={24} />,
    tags: ["Full-Stack", "DevOps", "Microservices", "Cloud", "Real-Time"],
  });

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "languages", label: "Languages" },
    { id: "backend", label: "Backend & Queues" },
    { id: "devops", label: "DevOps & Cloud" },
    { id: "database", label: "Databases" },
    { id: "frontend", label: "Frontend & UI" },
  ];

  const orbitTiers = [
    {
      id: "inner",
      radiusMobile: "210px",
      radiusDesktop: "340px",
      duration: "25s",
      direction: "animate-orbit-cw",
      items: [
        {
          name: "Node.js",
          category: "backend",
          catLabel: "Runtime & Core Services",
          desc: "Event-driven asynchronous I/O, REST APIs, microservices, and background worker engines.",
          icon: <SiNodedotjs className="text-white text-base md:text-xl" />,
          tags: ["Event-Loop", "Async I/O", "Microservices"],
        },
        {
          name: "React.js",
          category: "frontend",
          catLabel: "Modern User Interfaces",
          desc: "Modular UI component architectures, hooks, custom state stores, and dynamic DOM rendering.",
          icon: <SiReact className="text-white text-base md:text-xl" />,
          tags: ["Hooks", "Virtual DOM", "SPA"],
        },
        {
          name: "Docker",
          category: "devops",
          catLabel: "Containerization",
          desc: "Multi-stage builds, container isolation, environment parity, and lightweight deployment images.",
          icon: <SiDocker className="text-white text-base md:text-xl" />,
          tags: ["Containers", "Images", "Compose"],
        },
        {
          name: "Redis",
          category: "backend",
          catLabel: "In-Memory Cache & Queues",
          desc: "Sub-millisecond query caching, distributed session state, Pub/Sub channels, and BullMQ queues.",
          icon: <SiRedis className="text-white text-base md:text-xl" />,
          tags: ["Caching", "Key-Value", "Pub/Sub"],
        },
        {
          name: "TypeScript",
          category: "languages",
          catLabel: "Type-Safe Engineering",
          desc: "Strict compile-time type safety, interface contracts, generics, and enterprise-grade maintainability.",
          icon: <SiTypescript className="text-white text-base md:text-xl" />,
          tags: ["Static Typing", "Generics", "Interfaces"],
        },
        {
          name: "PostgreSQL",
          category: "database",
          catLabel: "Relational Database",
          desc: "ACID transactions, relational constraints, foreign keys, Prisma/Drizzle type-safe queries.",
          icon: <SiPostgresql className="text-white text-base md:text-xl" />,
          tags: ["ACID", "Relational", "Prisma"],
        },
      ],
    },
    {
      id: "outer",
      radiusMobile: "310px",
      radiusDesktop: "560px",
      duration: "40s",
      direction: "animate-orbit-ccw",
      items: [
        {
          name: "Next.js",
          category: "frontend",
          catLabel: "Full-Stack React Framework",
          desc: "Server-Side Rendering (SSR), Server Components (RSC), App Router, and edge-rendered micro-frontends.",
          icon: <SiNextdotjs className="text-white text-base md:text-xl" />,
          tags: ["SSR", "App Router", "Edge"],
        },
        {
          name: "JavaScript (ES6+)",
          category: "languages",
          catLabel: "Core Web Language",
          desc: "Prototypes, asynchronous promises, closures, functional algorithms, and browser runtime internals.",
          icon: <SiJavascript className="text-white text-base md:text-xl" />,
          tags: ["ESNext", "Async/Await", "Closures"],
        },
        {
          name: "Express.js",
          category: "backend",
          catLabel: "API Server Framework",
          desc: "Clean Service/Repository architecture, custom middleware, route handlers, and error boundaries.",
          icon: <SiExpress className="text-white text-base md:text-xl" />,
          tags: ["Middleware", "Routing", "REST"],
        },
        {
          name: "GraphQL",
          category: "backend",
          catLabel: "Declarative API Querying",
          desc: "Schema-first API design, type resolvers, unified graphs, avoiding under/over-fetching.",
          icon: <SiGraphql className="text-white text-base md:text-xl" />,
          tags: ["Schemas", "Resolvers", "Queries"],
        },
        {
          name: "Tailwind CSS",
          category: "frontend",
          catLabel: "Utility-First Styling",
          desc: "Bespoke design systems, dark modes, fluid typography, and glassmorphic micro-interactions.",
          icon: <SiTailwindcss className="text-white text-base md:text-xl" />,
          tags: ["Design System", "Responsive", "Glassmorphism"],
        },
        {
          name: "MongoDB",
          category: "database",
          catLabel: "NoSQL Database",
          desc: "Document modeling, aggregation pipelines, indexed lookups, replication, and Mongoose ORM.",
          icon: <SiMongodb className="text-white text-base md:text-xl" />,
          tags: ["Aggregation", "NoSQL", "Mongoose"],
        },
        {
          name: "Kubernetes",
          category: "devops",
          catLabel: "Container Orchestration",
          desc: "Pod deployments, rolling updates, cluster networking, configmaps, and ingress controllers.",
          icon: <SiKubernetes className="text-white text-base md:text-xl" />,
          tags: ["K8s", "Pods", "Ingress"],
        },
        {
          name: "Nginx",
          category: "devops",
          catLabel: "Web Server & Proxy",
          desc: "Reverse proxy routing, SSL/TLS certificate termination, gzip compression, and rate limiting.",
          icon: <SiNginx className="text-white text-base md:text-xl" />,
          tags: ["Reverse Proxy", "SSL/TLS", "Load Balancer"],
        },
        {
          name: "BullMQ",
          category: "backend",
          catLabel: "Job Queue System",
          desc: "Redis-backed background job processing, delayed queues, retries, and scheduled cron workflows.",
          icon: <TbBrandSpeedtest className="text-white text-base md:text-xl" />,
          tags: ["Queues", "Workers", "Job Scheduling"],
        },
        {
          name: "Socket.IO",
          category: "backend",
          catLabel: "Real-Time WebSockets",
          desc: "Bi-directional instant event channels, room broadcasting, heartbeat pinging, and zero-latency chat.",
          icon: <SiSocketdotio className="text-white text-base md:text-xl" />,
          tags: ["WebSockets", "Rooms", "Real-Time"],
        },
        {
          name: "AWS EC2 & VPS",
          category: "devops",
          catLabel: "Cloud Compute",
          desc: "Cloud infrastructure provisioning, Linux server hardening, security groups, and SSH key management.",
          icon: <SiAmazonec2 className="text-white text-base md:text-xl" />,
          tags: ["Compute", "Linux", "Infrastructure"],
        },
        {
          name: "GitHub Actions",
          category: "devops",
          catLabel: "CI/CD Automation",
          desc: "Continuous integration workflows, automated testing, docker builds, and seamless deployment triggers.",
          icon: <SiGithub className="text-white text-base md:text-xl" />,
          tags: ["Pipelines", "Automated Tests", "Deployments"],
        },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current?.querySelectorAll(".orbit-fade-in") || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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
      id="skills"
      className="relative w-full py-20 sm:py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="orbit-fade-in flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16 border-b border-white/[0.08] pb-6 sm:pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
                03 // Technical Ecosystem & Orbit
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight font-display break-words">
              ENGINEERING <span className="text-zinc-600">UNIVERSE.</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-sm">
            Interactive visualization of production-tested technologies across distributed systems, DevOps, and modern UI engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="orbit-fade-in flex flex-wrap gap-2 justify-center mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor="pointer"
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    : "bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Orbit Galaxy Visualization (Responsive on Mobile, Tablet & Desktop) */}
        <div className="orbit-fade-in relative w-full h-[360px] sm:h-[460px] md:h-[620px] flex justify-center items-center my-4 overflow-visible">
          
          {/* Orbit Rings */}
          {orbitTiers.map((tier) => (
            <div
              key={tier.id}
              className="absolute rounded-full border border-white/[0.08] transition-all duration-700 pointer-events-none"
              style={{
                width: `var(--radius-${tier.id})`,
                height: `var(--radius-${tier.id})`,
              }}
            >
              {/* Responsive Ring CSS Variables */}
              <style>{`
                :root {
                  --radius-inner: ${tier.id === "inner" ? "210px" : ""};
                  --radius-outer: ${tier.id === "outer" ? "310px" : ""};
                }
                @media (min-width: 640px) {
                  :root {
                    --radius-inner: ${tier.id === "inner" ? "270px" : ""};
                    --radius-outer: ${tier.id === "outer" ? "420px" : ""};
                  }
                }
                @media (min-width: 768px) {
                  :root {
                    --radius-inner: ${tier.id === "inner" ? tier.radiusDesktop : ""};
                    --radius-outer: ${tier.id === "outer" ? tier.radiusDesktop : ""};
                  }
                }
              `}</style>

              <div
                className={`relative w-full h-full rounded-full ${tier.direction} pointer-events-auto`}
                style={{ "--orbit-duration": tier.duration }}
              >
                {tier.items.map((item, idx) => {
                  const isHighlighted = activeCategory === "all" || activeCategory === item.category;
                  const isSelected = activeSkill.name === item.name;

                  return (
                    <div
                      key={idx}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `
                          rotate(${(360 / tier.items.length) * idx}deg) 
                          translateY(calc(-1 * var(--radius-${tier.id}) / 2))
                        `,
                      }}
                    >
                      {/* Node Planet */}
                      <button
                        onClick={() =>
                          setActiveSkill({
                            name: item.name,
                            category: item.catLabel,
                            description: item.desc,
                            icon: item.icon,
                            tags: item.tags,
                          })
                        }
                        onMouseEnter={() =>
                          setActiveSkill({
                            name: item.name,
                            category: item.catLabel,
                            description: item.desc,
                            icon: item.icon,
                            tags: item.tags,
                          })
                        }
                        data-cursor="pointer"
                        className={`w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110 md:scale-125 z-30"
                            : isHighlighted
                            ? "bg-zinc-950 border-white/30 text-white hover:scale-110 md:hover:scale-125 hover:bg-white hover:text-black hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.15)] opacity-100"
                            : "bg-zinc-950/40 border-white/5 text-zinc-600 opacity-20 hover:opacity-100"
                        }`}
                        title={item.name}
                        aria-label={item.name}
                      >
                        {item.icon}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Central Solar Core with Kiran's Portrait */}
          <div className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full p-[2px] bg-gradient-to-br from-white/60 via-white/20 to-transparent shadow-[0_0_60px_rgba(255,255,255,0.2)] md:shadow-[0_0_100px_rgba(255,255,255,0.25)] flex items-center justify-center group cursor-pointer transition-transform duration-500 hover:scale-105">
            
            {/* Ambient Cosmic Rotating Ring */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-white/20 border-dashed animate-[spin_25s_linear_infinite] pointer-events-none" />
            
            {/* Core Image Window */}
            <div className="w-full h-full rounded-full bg-black overflow-hidden relative border border-white/30 flex items-center justify-center shadow-inner">
              <img
                src="/kiran_hero_studio.jpg"
                alt="Kiran Rathod — Core Architect"
                className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              
              {/* Cinematic Bottom HUD Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end items-center pb-2 md:pb-3">
                <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[8px] sm:text-[10px] font-mono text-white font-black tracking-widest uppercase">KIRAN</span>
                </div>
                <p className="text-[7px] sm:text-[8px] font-mono text-zinc-400 uppercase tracking-widest hidden sm:block">
                  CORE ARCHITECT
                </p>
              </div>
            </div>
          </div>

          {/* Floating Selected Node HUD Inspector (Desktop Floating) */}
          <div className="hidden lg:block absolute bottom-2 right-4 max-w-sm p-6 rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/20 shadow-2xl z-30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center">
                {activeSkill.icon}
              </div>
              <div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">{activeSkill.category}</p>
                <h5 className="text-lg font-bold text-white tracking-tight font-display">{activeSkill.name}</h5>
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
              {activeSkill.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {activeSkill.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 font-mono text-[10px] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Selected Skill HUD Inspector for Mobile & Tablet (Clean bottom card) */}
        <div className="lg:hidden mt-8 max-w-md mx-auto p-5 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-white/15 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center">
              {activeSkill.icon}
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">{activeSkill.category}</p>
              <h5 className="text-base font-bold text-white tracking-tight font-display">{activeSkill.name}</h5>
            </div>
          </div>
          <p className="text-xs text-zinc-400 font-light leading-relaxed mb-3">
            {activeSkill.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {activeSkill.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 font-mono text-[10px] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechUniverse;
