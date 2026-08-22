import React, { useState } from "react";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, 
  SiNodedotjs, SiExpress, SiGraphql, SiMongodb, SiRedis, 
  SiSocketdotio, SiWebrtc, SiDocker, SiKubernetes, SiGit, 
  SiGithub, SiPostman, SiAmazonec2, SiPostgresql, SiNginx, SiLinux, SiCplusplus 
} from "react-icons/si";
import { TbApi, TbBrandSpeedtest } from "react-icons/tb";
import { Layers, Server, Shield, Cpu, Terminal, Sparkles, Database, Globe, ArrowUpRight } from "lucide-react";

const TechUniverse = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSkill, setActiveSkill] = useState({
    name: "Distributed Systems & Full-Stack Core",
    category: "System Engineering",
    description: "Designing end-to-end distributed applications, containerized deployments, caching layers, and high-performance interactive user interfaces.",
    icon: <Cpu className="text-white" size={28} />,
    tags: ["High Availability", "Microservices", "CI/CD", "Real-Time"],
  });

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "languages", label: "Languages" },
    { id: "backend", label: "Backend & Queues" },
    { id: "devops", label: "DevOps & Cloud" },
    { id: "database", label: "Databases" },
    { id: "frontend", label: "Frontend & UI" },
  ];

  // Orbiting rings configuration
  const orbitTiers = [
    {
      id: "inner",
      radius: "280px",
      duration: "26s",
      direction: "animate-orbit-cw",
      items: [
        {
          name: "React.js",
          category: "frontend",
          catLabel: "Frontend Core",
          desc: "Component composition, custom state hooks, reconciler optimization, and smooth virtual DOM rendering.",
          icon: <SiReact size={22} className="text-white" />,
          tags: ["Hooks", "Context", "Performance"],
        },
        {
          name: "Node.js",
          category: "backend",
          catLabel: "Backend Runtime",
          desc: "High-throughput asynchronous I/O, event loop orchestration, microservice architectures, and worker threads.",
          icon: <SiNodedotjs size={22} className="text-white" />,
          tags: ["Event Loop", "Streams", "V8 Engine"],
        },
        {
          name: "TypeScript",
          category: "languages",
          catLabel: "Language",
          desc: "Strict type definitions, generics, type-safe API contracts, and robust compiler verification.",
          icon: <SiTypescript size={20} className="text-white" />,
          tags: ["Type Safety", "Generics", "Interfaces"],
        },
        {
          name: "Next.js",
          category: "frontend",
          catLabel: "Full-Stack Framework",
          desc: "Server-side rendering (SSR), static site generation, API routing, server actions, and SEO optimization.",
          icon: <SiNextdotjs size={22} className="text-white" />,
          tags: ["SSR", "App Router", "Server Actions"],
        },
        {
          name: "Redis",
          category: "backend",
          catLabel: "In-Memory Cache",
          desc: "Multi-tier caching, sub-millisecond query access, pub/sub messaging channels, and session management.",
          icon: <SiRedis size={20} className="text-white" />,
          tags: ["In-Memory", "Pub/Sub", "Caching"],
        },
        {
          name: "Docker",
          category: "devops",
          catLabel: "Containerization",
          desc: "Multi-stage production image builds, Alpine lightweight containers, compose environments, and isolation.",
          icon: <SiDocker size={22} className="text-white" />,
          tags: ["Containers", "Multi-stage", "Compose"],
        },
      ],
    },
    {
      id: "outer",
      radius: "500px",
      duration: "42s",
      direction: "animate-orbit-ccw",
      items: [
        {
          name: "GraphQL",
          category: "backend",
          catLabel: "API Architecture",
          desc: "Declarative schema definitions, queries, mutations, resolvers, and Apollo server integrations.",
          icon: <SiGraphql size={20} className="text-white" />,
          tags: ["Schemas", "Mutations", "Resolvers"],
        },
        {
          name: "MongoDB",
          category: "database",
          catLabel: "NoSQL Database",
          desc: "Document modeling, aggregation pipelines, indexed lookups, replication, and Mongoose ORM.",
          icon: <SiMongodb size={20} className="text-white" />,
          tags: ["Aggregation", "NoSQL", "Mongoose"],
        },
        {
          name: "PostgreSQL",
          category: "database",
          catLabel: "Relational Database",
          desc: "ACID transactions, relational constraints, foreign keys, Prisma/Drizzle type-safe queries.",
          icon: <SiPostgresql size={20} className="text-white" />,
          tags: ["ACID", "Relational", "Prisma"],
        },
        {
          name: "Kubernetes",
          category: "devops",
          catLabel: "Container Orchestration",
          desc: "Pod deployments, rolling updates, cluster networking, configmaps, and ingress controllers.",
          icon: <SiKubernetes size={20} className="text-white" />,
          tags: ["K8s", "Pods", "Ingress"],
        },
        {
          name: "Nginx",
          category: "devops",
          catLabel: "Web Server & Proxy",
          desc: "Reverse proxy routing, SSL/TLS certificate termination, gzip compression, and rate limiting.",
          icon: <SiNginx size={20} className="text-white" />,
          tags: ["Reverse Proxy", "SSL/TLS", "Load Balancer"],
        },
        {
          name: "BullMQ",
          category: "backend",
          catLabel: "Job Queue System",
          desc: "Redis-backed background job processing, delayed queues, retries, and scheduled cron workflows.",
          icon: <TbBrandSpeedtest size={20} className="text-white" />,
          tags: ["Queues", "Workers", "Job Scheduling"],
        },
        {
          name: "Socket.IO",
          category: "backend",
          catLabel: "Real-Time WebSockets",
          desc: "Bi-directional instant event channels, room broadcasting, heartbeat pinging, and zero-latency chat.",
          icon: <SiSocketdotio size={20} className="text-white" />,
          tags: ["WebSockets", "Rooms", "Real-Time"],
        },
        {
          name: "AWS EC2 & VPS",
          category: "devops",
          catLabel: "Cloud Compute",
          desc: "Cloud infrastructure provisioning, Linux server hardening, security groups, and SSH key management.",
          icon: <SiAmazonec2 size={20} className="text-white" />,
          tags: ["Compute", "Linux", "Infrastructure"],
        },
        {
          name: "GitHub Actions",
          category: "devops",
          catLabel: "CI/CD Automation",
          desc: "Continuous integration workflows, automated testing, docker builds, and seamless deployment triggers.",
          icon: <SiGithub size={20} className="text-white" />,
          tags: ["Pipelines", "Automated Tests", "Deployments"],
        },
        {
          name: "C++",
          category: "languages",
          catLabel: "Systems Programming",
          desc: "Data structures, pointer arithmetic, algorithmic problem solving, and computational efficiency.",
          icon: <SiCplusplus size={20} className="text-white" />,
          tags: ["STL", "Data Structures", "Algorithms"],
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-28 md:py-40 bg-[#050505] text-white border-t border-white/[0.08] overflow-hidden select-none"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
                03 // Technical Universe
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter font-display">
              TECHNICAL <span className="text-zinc-600">ECOSYSTEM.</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-sm">
            Interactive visualization of production-tested technologies across distributed systems, DevOps, and modern UI engineering.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor="pointer"
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
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

        {/* Orbit Galaxy Visualization (Desktop & Tablet) */}
        <div className="hidden md:flex relative w-full h-[620px] justify-center items-center my-4 orbit-paused">
          
          {/* Orbit Rings */}
          {orbitTiers.map((tier) => (
            <div
              key={tier.id}
              className="absolute rounded-full border border-white/[0.08] transition-all duration-700 pointer-events-none"
              style={{
                width: tier.radius,
                height: tier.radius,
              }}
            >
              <div
                className={`relative w-full h-full rounded-full ${tier.direction} pointer-events-auto`}
                style={{ "--orbit-duration": tier.duration }}
              >
                {tier.items.map((item, idx) => {
                  const isHighlighted = activeCategory === "all" || activeCategory === item.category;
                  return (
                    <div
                      key={idx}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `
                          rotate(${(360 / tier.items.length) * idx}deg) 
                          translateY(calc(-${tier.radius} / 2))
                        `,
                      }}
                    >
                      {/* Node */}
                      <div
                        onMouseEnter={() =>
                          setActiveSkill({
                            name: item.name,
                            category: item.catLabel,
                            description: item.desc,
                            icon: item.icon,
                            tags: item.tags,
                          })
                        }
                        onClick={() =>
                          setActiveSkill({
                            name: item.name,
                            category: item.catLabel,
                            description: item.desc,
                            icon: item.icon,
                            tags: item.tags,
                          })
                        }
                        data-cursor="pointer"
                        className={`w-12 h-12 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          isHighlighted
                            ? "bg-zinc-950 border-white/30 text-white hover:scale-125 hover:bg-white hover:text-black hover:border-white shadow-[0_0_25px_rgba(255,255,255,0.15)] opacity-100"
                            : "bg-zinc-950/40 border-white/5 text-zinc-600 opacity-20 hover:opacity-100"
                        }`}
                        title={item.name}
                      >
                        {item.icon}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Central Solar Core */}
          <div className="relative z-20 w-44 h-44 rounded-full bg-black border border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center p-6 text-center group cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-white animate-ping mb-2" />
            <h4 className="text-sm font-black font-display tracking-tight text-white uppercase">
              FULL-STACK
            </h4>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">
              & DEVOPS
            </p>
          </div>

          {/* Floating Selected Node HUD Inspector */}
          <div className="absolute bottom-2 right-4 max-w-sm p-6 rounded-3xl bg-black/90 backdrop-blur-2xl border border-white/20 shadow-2xl z-30 transition-all duration-300">
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

        {/* Mobile Interactive Tech Stack Grid */}
        <div className="md:hidden space-y-4 pt-6">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/15">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center">
                {activeSkill.icon}
              </div>
              <div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">{activeSkill.category}</p>
                <h5 className="text-base font-bold text-white tracking-tight">{activeSkill.name}</h5>
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed mb-3">
              {activeSkill.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {activeSkill.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded bg-white/[0.05] font-mono text-[10px] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[...orbitTiers[0].items, ...orbitTiers[1].items]
              .filter((item) => activeCategory === "all" || activeCategory === item.category)
              .map((item, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setActiveSkill({
                      name: item.name,
                      category: item.catLabel,
                      description: item.desc,
                      icon: item.icon,
                      tags: item.tags,
                    })
                  }
                  className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                    activeSkill.name === item.name
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.02] border-white/[0.08] text-white hover:border-white/20"
                  }`}
                >
                  <div className="text-lg">{item.icon}</div>
                  <span className="text-[10px] font-mono font-medium truncate w-full text-center">
                    {item.name}
                  </span>
                </button>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechUniverse;
