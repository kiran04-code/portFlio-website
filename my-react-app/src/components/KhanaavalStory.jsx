import React, { useEffect, useRef } from "react";
import { ArrowUpRight, CheckCircle2, Layers, Server, Zap, Database, QrCode, Utensils, ShieldCheck, Flame } from "lucide-react";
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
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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
        { scale: 0.9, rotateX: 12, opacity: 0.6 },
        {
          scale: 1,
          rotateX: 0,
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
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
    { value: "Instant", label: "QR Check-ins", desc: "Mess verification & real-time analytics" },
  ];

  const architectureNodes = [
    { step: "01", name: "Frontend Client", tech: "React.js / Next.js", desc: "Fluid UI, dynamic menus, cart & subscription state" },
    { step: "02", name: "API Gateway", tech: "REST & GraphQL", desc: "Scalable routing, JWT auth, RBAC permissions" },
    { step: "03", name: "Core Backend", tech: "Node.js & Express", desc: "Service/Repository architecture & business workflows" },
    { step: "04", name: "Queues & Cache", tech: "Redis & BullMQ", desc: "Background job processing & real-time query caching" },
    { step: "05", name: "Database & Pay", tech: "MongoDB & Razorpay", desc: "ACID transactions & automated recurring billing" },
  ];

  const features = [
    {
      icon: <Utensils className="text-white" size={24} />,
      title: "Meal Subscriptions",
      desc: "Flexible monthly and weekly meal subscription management tailored for college students and mess owners.",
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: "Daily Ordering Engine",
      desc: "Instant daily meal ordering with real-time menu availability and slot-based dining reservations.",
    },
    {
      icon: <Layers className="text-white" size={24} />,
      title: "Cloud Kitchen & Mess Portal",
      desc: "Dedicated administrative dashboard for mess providers to curate daily menus, track billing, and manage inventory.",
    },
    {
      icon: <QrCode className="text-white" size={24} />,
      title: "Instant QR Check-ins",
      desc: "Fast digital attendance validation preventing proxy meals and automating student verification on entry.",
    },
    {
      icon: <Server className="text-white" size={24} />,
      title: "Background Job Processing",
      desc: "BullMQ queue workers handling subscription renewals, email/SMS reminders, and async transaction reconciliations.",
    },
    {
      icon: <ShieldCheck className="text-white" size={24} />,
      title: "Secure Razorpay Gateway",
      desc: "Seamless payment integration supporting UPI, credit cards, auto-refunds, and automated invoice delivery.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="khanaaval"
      className="relative w-full py-28 md:py-40 bg-[#050505] text-white border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header Flag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
            Flagship Production Platform // Case Study
          </span>
        </div>

        {/* Scene 1: Manifesto Headline */}
        <div ref={headlineRef} className="space-y-3 mb-16 md:mb-24">
          <div className="overflow-hidden">
            <h2 className="headline-line text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter font-display leading-[0.9]">
              KHANAAVAL.COM
            </h2>
          </div>
          <div className="overflow-hidden flex flex-wrap items-baseline gap-4 md:gap-8">
            <h3 className="headline-line text-2xl sm:text-4xl md:text-6xl font-light uppercase tracking-tighter text-zinc-500 font-display">
              FOOD SHOULD BE SIMPLE.
            </h3>
            <span className="headline-line hidden md:inline-block font-mono text-sm uppercase tracking-widest text-zinc-400">
              [ORDER • SUBSCRIBE • EAT]
            </span>
          </div>
          <p className="headline-line text-zinc-400 max-w-2xl text-base md:text-xl font-light leading-relaxed pt-4">
            Founded and engineered from zero to production. A full-scale food-tech platform bridging university students with verified mess providers through digital subscriptions, daily ordering, and automated cloud kitchen operations.
          </p>
        </div>

        {/* Scene 2: The Real Visual Showcase (Browser Canvas) */}
        <div ref={mockupRef} className="relative mb-24 md:mb-36 perspective-[1000px]">
          {/* Main Desktop Window Frame */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.9)] group">
            
            {/* Top Browser Bar */}
            <div className="px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
              </div>

              <div className="px-4 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] font-mono text-[11px] text-zinc-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>https://www.khanaaval.com</span>
              </div>

              <a
                href="https://www.khanaaval.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Live Site</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Captured Real Screenshot Hero */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src="/khanaaval/khanaaval_hero.png"
                alt="Khanaaval.com Live Platform UI"
                className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Floating Mobile Companion Card */}
          <div className="hidden lg:block absolute -bottom-12 -right-8 w-[280px] rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl z-20 group/mobile">
            <div className="p-3 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>Mobile PWA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="h-[360px] overflow-hidden bg-black">
              <img
                src="/khanaaval/khanaaval_mobile.png"
                alt="Khanaaval Mobile Interface"
                className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover/mobile:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Scene 3: High-Impact Production Metrics */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-36">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <p className="font-mono text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-2 font-display">
                {stat.value}
              </p>
              <h4 className="text-sm font-bold text-zinc-200 tracking-tight mb-1">
                {stat.label}
              </h4>
              <p className="text-xs text-zinc-500 font-mono">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Scene 4: Technical Architecture Pipeline */}
        <div ref={archRef} className="mb-24 md:mb-36">
          <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                System Engineering
              </span>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-display mt-1">
                DISTRIBUTED ARCHITECTURE
              </h3>
            </div>
            <p className="text-zinc-500 text-xs font-mono max-w-sm">
              Service/Repository structure designed for high concurrent student meal orders during lunch/dinner peaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {architectureNodes.map((node, idx) => (
              <div
                key={idx}
                className="arch-node p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between h-[220px] group"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-zinc-600 mb-4">
                    <span>LAYER {node.step}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-zinc-200">
                    {node.name}
                  </h4>
                  <p className="font-mono text-xs text-zinc-400 mb-2">
                    {node.tech}
                  </p>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scene 5: Feature Storytelling Grid */}
        <div ref={featuresRef} className="mb-20">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
              Product Capabilities
            </span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-display mt-1">
              ENGINEERED FEATURES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="feature-card p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                  {React.cloneElement(feat.icon, {
                    className: "group-hover:text-black transition-colors",
                  })}
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight mb-2">
                  {feat.title}
                </h4>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scene 6: Flagship Project CTA */}
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
              Founder & Lead Architect
            </p>
            <h3 className="text-2xl md:text-4xl font-black text-white uppercase font-display tracking-tight">
              EXPERIENCE KHANAAVAL LIVE
            </h3>
            <p className="text-sm text-zinc-400 font-light max-w-lg">
              Explore the real deployed platform connecting hundreds of daily students with campus food providers in Pune.
            </p>
          </div>

          <a
            href="https://www.khanaaval.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="open"
            className="px-8 py-4 rounded-2xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 flex items-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.3)] shrink-0"
          >
            <span>Launch Khanaaval.com</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default KhanaavalStory;
