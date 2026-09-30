import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Layers, Server, Zap, QrCode, Utensils, ShieldCheck, Cpu, Database, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KhanaavalStory = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const mockupRef = useRef(null);
  const statsRef = useRef(null);
  const archRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.fromTo(
        headlineRef.current?.querySelectorAll(".headline-line") || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 80%",
          },
        }
      );

      // Mockup 3D tilt & scale
      gsap.fromTo(
        mockupRef.current,
        { scale: 0.94, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: mockupRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // Stats stagger
      gsap.fromTo(
        statsRef.current?.querySelectorAll(".stat-card") || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      // Architecture node reveal
      gsap.fromTo(
        archRef.current?.querySelectorAll(".arch-node") || [],
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: archRef.current,
            start: "top 80%",
          },
        }
      );

      // Features stagger
      gsap.fromTo(
        featuresRef.current?.querySelectorAll(".feature-card") || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "300+", label: "Daily Active Users", desc: "Students ordering meals daily" },
    { value: "250+", label: "Verified Subscribers", desc: "Long-term meal plans managed" },
    { value: "99.9%", label: "System Reliability", desc: "Redis caching & BullMQ workers" },
    { value: "< 500ms", label: "Instant QR Check-ins", desc: "Mess verification & real-time analytics" },
  ];

  const architectureNodes = [
    {
      step: "01",
      name: "Frontend Client",
      tech: "React.js / Next.js",
      desc: "Fluid interactive UI, dynamic meal catalogs, real-time cart state & responsive student portal.",
      icon: Layers,
      category: "CLIENT INTERFACE",
      telemetry: "SSR + SPA CLIENT",
    },
    {
      step: "02",
      name: "API Gateway",
      tech: "REST & GraphQL",
      desc: "High-throughput ingress routing, JWT authentication, RBAC permissions & rate limiting.",
      icon: ShieldCheck,
      category: "API INGRESS / AUTH",
      telemetry: "JWT & RBAC GUARD",
    },
    {
      step: "03",
      name: "Core Backend",
      tech: "Node.js & Express",
      desc: "Modular Service/Repository architecture, business logic workflows & order dispatch pipelines.",
      icon: Cpu,
      category: "DOMAIN LOGIC",
      telemetry: "SERVICE / REPO",
    },
    {
      step: "04",
      name: "Queues & Cache",
      tech: "Redis & BullMQ",
      desc: "Asynchronous background worker queues, subscription renewal crons & real-time query caching.",
      icon: Zap,
      category: "ASYNC WORKERS",
      telemetry: "BACKGROUND QUEUES",
    },
    {
      step: "05",
      name: "Database & Pay",
      tech: "MongoDB & Razorpay",
      desc: "ACID transactions, structured meal logs, automated webhooks, recurring UPI billing & settlement.",
      icon: Database,
      category: "DATA & REVENUE",
      telemetry: "ACID TRANSACTIONS",
    },
  ];

  const features = [
    {
      icon: <Utensils className="text-white" size={24} />,
      title: "Meal Subscriptions",
      desc: "Flexible monthly and weekly meal subscription management tailored for college students and mess owners.",
      badge: "MOD-01",
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Daily Ordering Engine",
      desc: "Instant daily meal ordering with real-time menu availability and slot-based dining reservations.",
      badge: "MOD-02",
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: "Cloud Kitchen & Mess Portal",
      desc: "Dedicated administrative dashboard for mess providers to curate daily menus, track billing, and manage inventory.",
      badge: "MOD-03",
    },
    {
      icon: <QrCode className="text-white" size={24} />,
      title: "Instant QR Check-ins",
      desc: "Fast digital attendance validation preventing proxy meals and automating student verification on entry.",
      badge: "MOD-04",
    },
    {
      icon: <Server className="text-white" size={24} />,
      title: "Background Job Processing",
      desc: "BullMQ queue workers handling subscription renewals, email/SMS reminders, and async transaction reconciliations.",
      badge: "MOD-05",
    },
    {
      icon: <ShieldCheck className="text-white" size={24} />,
      title: "Secure Razorpay Gateway",
      desc: "Seamless payment integration supporting UPI, credit cards, auto-refunds, and automated invoice delivery.",
      badge: "MOD-06",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="khanaaval"
      className="relative w-full py-20 sm:py-28 md:py-40 bg-[#000000] text-white border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[85vw] h-[55vh] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header Flag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
            Flagship Production Platform // Live Case Study
          </span>
        </div>

        {/* Scene 1: Manifesto Headline */}
        <div ref={headlineRef} className="space-y-4 mb-16 md:mb-24">
          <div className="overflow-hidden">
            <h2 className="headline-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight font-display leading-[0.95] break-words">
              KHANAAVAL.COM
            </h2>
          </div>
          <div className="overflow-hidden flex flex-wrap items-baseline gap-3 sm:gap-6">
            <h3 className="headline-line text-2xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-zinc-500 font-display">
              FOOD SHOULD BE SIMPLE.
            </h3>
            <span className="headline-line font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-400">
              [ORDER • SUBSCRIBE • EAT]
            </span>
          </div>
          <p className="headline-line text-zinc-400 max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed pt-2 sm:pt-3">
            A production food-tech ecosystem connecting university students with verified mess providers through automated meal subscriptions, queue workers, and QR attendance check-ins.
          </p>
        </div>

        {/* Scene 2: The Real Visual Showcase (Browser Canvas) */}
        <div ref={mockupRef} className="relative mb-20 md:mb-32">
          {/* Main Desktop Window Frame */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.95)] group">
            
            {/* Top Browser Bar */}
            <div className="px-4 sm:px-6 py-3.5 bg-zinc-950/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/60" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/60" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/60" />
              </div>

              <div className="px-3 sm:px-4 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] font-mono text-[10px] sm:text-[11px] text-zinc-400 flex items-center gap-2 truncate max-w-[200px] sm:max-w-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="truncate">https://www.khanaaval.com</span>
              </div>

              <a
                href="https://www.khanaaval.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white flex items-center gap-1 transition-colors shrink-0"
              >
                <span className="hidden sm:inline">Live Site</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Production Screenshot */}
            <div className="relative w-full overflow-hidden bg-black aspect-[16/10] sm:aspect-[16/9]">
              <img
                src="/khanaaval/khanaaval_hero.png"
                alt="Khanaaval Production Web App"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* Scene 3: Live Production Metrics */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 md:mb-32">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0e0e11] via-[#09090b] to-[#040405] border border-white/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              {/* Subtle top rim */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <div>
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-1">
                  {stat.value}
                </h4>
                <p className="text-xs sm:text-sm font-bold text-zinc-300 mb-1">
                  {stat.label}
                </p>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 font-mono mt-3 pt-3 border-t border-white/[0.06]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Scene 4: Technical Architecture Pipeline — Connected Flow */}
        <div ref={archRef} className="mb-20 md:mb-36">
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
                  System Engineering & Distributed Cloud
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-display mt-1 break-words">
                DISTRIBUTED ARCHITECTURE PIPELINE
              </h3>
            </div>
            <p className="text-zinc-500 text-xs font-mono max-w-sm">
              Modular 5-tier Service/Repository flow designed for concurrent meal orders and high throughput during peak hours.
            </p>
          </div>

          {/* Connected Architecture Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {architectureNodes.map((node, idx) => {
              const NodeIcon = node.icon;
              return (
                <div
                  key={idx}
                  className="arch-node relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#101013] via-[#09090b] to-[#040405] border border-white/[0.08] hover:border-white/30 transition-all duration-500 flex flex-col justify-between min-h-[290px] group overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
                >
                  {/* Razor Top Laser Rim */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Ambient Subtle Radial Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/[0.02] blur-2xl pointer-events-none group-hover:bg-white/[0.05] transition-colors" />

                  {/* Card Header: Step & Flow Direction */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-2 py-0.5 rounded-md font-mono text-[10px] uppercase tracking-widest bg-white/[0.04] border border-white/10 text-zinc-400 group-hover:text-zinc-200 group-hover:border-white/20 transition-colors">
                        LAYER {node.step}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                        {idx < architectureNodes.length - 1 && (
                          <ChevronRight size={13} className="text-zinc-600 hidden lg:inline group-hover:text-zinc-300 transition-colors" />
                        )}
                      </div>
                    </div>

                    {/* Monochrome Icon & Category */}
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 group-hover:bg-white/[0.08] group-hover:border-white/25">
                        <NodeIcon size={17} />
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors">
                        {node.category}
                      </span>
                    </div>

                    {/* Layer Title */}
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1.5 font-display group-hover:text-zinc-100 transition-colors">
                      {node.name}
                    </h4>

                    {/* Tech Badge */}
                    <div className="mb-3">
                      <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-300">
                        {node.tech}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[12px] text-zinc-400 leading-relaxed font-light">
                      {node.desc}
                    </p>
                  </div>

                  {/* Bottom Telemetry Status */}
                  <div className="pt-3 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span className="text-zinc-400">
                      {node.telemetry}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scene 5: Feature Storytelling Grid — Cinematic Subsystems */}
        <div ref={featuresRef} className="mb-20">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
                Production Capabilities // Subsystems
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-display mt-1 break-words">
              ENGINEERED FOR REAL WORKLOADS.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="feature-card relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e0e11] via-[#09090b] to-[#040405] border border-white/[0.08] hover:border-white/30 transition-all duration-500 flex flex-col justify-between group overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
              >
                {/* Subtle Cinematic Top Rim Glow */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Background Ambient Radial Accent */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.05] transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Module Code Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-white/25 group-hover:bg-white/[0.08] flex items-center justify-center text-white transition-all duration-300 shadow-inner">
                      {feat.icon}
                    </div>

                    <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] font-mono text-[10px] text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 group-hover:border-white/15 transition-colors">
                      {feat.badge}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-zinc-100 transition-colors font-display">
                    {feat.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* Bottom Status Edge */}
                <div className="pt-5 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                    <span className="text-zinc-400">PRODUCTION READY</span>
                  </span>
                  <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default KhanaavalStory;
