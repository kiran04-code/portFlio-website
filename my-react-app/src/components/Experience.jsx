import { useCallback, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import useScrollMotion from "../hooks/useScrollMotion";

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

export default function Experience() {
  const root = useRef(null);
  const animate = useCallback(() => {
    const section = root.current;
    gsap.from(section.querySelector(".experience-progress"), {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: { trigger: section.querySelector(".experience-entries"), start: "top 70%", end: "bottom 65%", scrub: 0.5 },
    });
    section.querySelectorAll(".experience-entry").forEach((entry) => {
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: entry, start: "top 85%", end: "top 35%", scrub: 0.65 },
      });
      timeline
        .from(entry.querySelector(".experience-company span"), { yPercent: 110, rotate: 3, transformOrigin: "left bottom", ease: "power2.out", duration: 1 }, 0)
        .from(entry.querySelector(".experience-entry-body"), { x: 32, ease: "power2.out", duration: 1 }, 0)
        .fromTo(entry.querySelector(".experience-node"), { scale: 0.4, backgroundColor: "#27272a" }, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 }, 0.2)
        .from(entry.querySelector(".experience-number"), { y: 35, duration: 1, ease: "none" }, 0);
    });
  }, []);
  useScrollMotion(root, animate);

  return (
    <section id="experience" className="motion-section editorial-experience" ref={root} aria-labelledby="experience-title">
      <div className="motion-container">
        <div className="motion-section-label"><p><span>02 /</span> Experience</p><span>Building with purpose</span></div>
        <div className="experience-layout">
          <div className="experience-intro">
            <h2 id="experience-title" className="motion-title">Where I’ve<br /><span>contributed.</span></h2>
            <a className="motion-link" href="/kiran.rathod.pdf" target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="experience-entries">
            <div className="experience-track" aria-hidden="true"><div className="experience-progress" /></div>
            {experiences.map((exp, index) => (
              <article className="experience-entry" key={exp.company}>
                <span className="experience-node" aria-hidden="true" />
                <div className="experience-entry-body">
                  <div className="experience-period"><span>{exp.period}</span><span>{exp.type}</span></div>
                  <h3 className="experience-company"><span>{exp.company}</span></h3>
                  <p className="experience-role">{exp.role}</p>
                  <p className="experience-one-line">{index === 0 ? "Enterprise platforms. Reliable backends. Automated infrastructure." : "From an idea to a food-tech platform serving 300+ daily students."}</p>
                  <details className="motion-details experience-details">
                    <summary>Explore contributions <span aria-hidden="true">+</span></summary>
                    <div className="experience-expanded">
                      <p>{exp.description}</p>
                      <ul>{exp.highlights.map(point => <li key={point}>{point}</li>)}</ul>
                      <p className="experience-tech">{exp.tech.join(" / ")}</p>
                      <span className="motion-caption">{exp.location}</span>
                    </div>
                  </details>
                </div>
                <span className="experience-number" aria-hidden="true">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
