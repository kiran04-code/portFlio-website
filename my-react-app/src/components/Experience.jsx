import React, { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, GitBranch, Layers, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line progress animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );

      // Cards stagger reveal
      gsap.fromTo(
        containerRef.current?.querySelectorAll(".experience-card") || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
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

  const experiences = [
    {
      period: "2026 — Present",
      role: "Full-Stack Developer & DevOps Engineer",
      company: "Blackangler Pvt. Limited",
      location: "Pune, India",
      type: "Full-Time",
      description:
        "Leading architectural design and cloud infrastructure deployment for enterprise business solutions, high-throughput lead generation pipelines, and automated inventory systems.",
      highlights: [
        "Architected scalable backend systems using Service/Repository pattern and modular REST APIs.",
        "Engineered and automated CI/CD deployment pipelines using Docker, Nginx reverse proxy, SSL/TLS, and GitHub Actions.",
        "Implemented Redis multi-tier caching reducing database read latency by over 65%.",
        "Engineered custom enterprise platform suites featuring Lead Generation and Inventory Management platforms with business workflow automation.",
      ],
      tech: ["Node.js", "Express.js", "Docker", "Nginx", "Redis", "GitHub Actions", "REST APIs", "PostgreSQL", "AWS EC2"],
    },
    {
      period: "2024 — 2026",
      role: "Founder & Lead Full-Stack Architect",
      company: "Khanaaval.com",
      location: "Pune, India",
      type: "Product Venture",
      description:
        "Founded and engineered an end-to-end food-tech platform serving 300+ daily active university students with automated meal subscriptions and verified mess management.",
      highlights: [
        "Developed full-stack architecture with React.js, Node.js, Express, and MongoDB.",
        "Integrated BullMQ background job queues for scheduled reminders, automated subscription billing, and ledger updates.",
        "Integrated Razorpay gateway for automated recurring payment processing.",
        "Implemented digital QR attendance check-in system for mess managers.",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Redis", "BullMQ", "Razorpay", "GraphQL", "Tailwind CSS"],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 md:mb-28 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
                Career Trajectory
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter font-display">
              PROFESSIONAL <span className="text-zinc-600">EXPERIENCE.</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-sm">
            Proven track record designing scalable software architectures and deploying production cloud infrastructure.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-12">
          
          {/* Animated Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-white via-zinc-400 to-zinc-800 origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card relative">
                
                {/* Node indicator */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </div>

                {/* Content Box */}
                <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300">
                  
                  {/* Top metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-white text-black font-mono text-xs font-bold tracking-wider uppercase">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-mono text-xs text-zinc-400 uppercase">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-display mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg md:text-xl text-zinc-400 font-medium mb-6">
                    {exp.company}
                  </p>

                  <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed mb-8 max-w-3xl">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                      Key Technical Contributions:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-xs md:text-sm text-zinc-400">
                          <CheckCircle2 size={16} className="text-white shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
