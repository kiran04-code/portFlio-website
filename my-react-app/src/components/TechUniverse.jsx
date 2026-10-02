import { useCallback, useRef } from "react";
import gsap from "gsap";
import useScrollMotion from "../hooks/useScrollMotion";

const skillGroups = [
  { title: "Frontend", lead: ["React", "Next.js", "TypeScript"], skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"], description: "Interfaces that are responsive, accessible, and easy to use." },
  { title: "Backend", lead: ["Node.js", "GraphQL", "Socket.IO"], skills: ["Node.js", "Express", "GraphQL", "Socket.IO", "BullMQ"], description: "APIs, real-time services, and background processing." },
  { title: "Data & storage", lead: ["PostgreSQL", "MongoDB", "Redis"], skills: ["PostgreSQL", "MongoDB", "Redis"], description: "Data modeling, reliable persistence, and efficient caching." },
  { title: "Cloud & delivery", lead: ["Docker", "AWS", "Kubernetes"], skills: ["Docker", "Kubernetes", "AWS EC2", "Nginx", "GitHub Actions"], description: "Repeatable deployments and dependable infrastructure." },
];

export default function TechUniverse() {
  const root = useRef(null);
  const animate = useCallback(({ desktop }) => {
    root.current.querySelectorAll(".kinetic-row").forEach((row, index) => {
      const track = row.querySelector(".kinetic-type");
      const distance = () => Math.max(0, track.scrollWidth - row.clientWidth + 24);
      gsap.fromTo(track,
        { x: () => index % 2 ? -distance() : 0 },
        { x: () => index % 2 ? 0 : -distance(), ease: "none", scrollTrigger: {
          trigger: row, start: "top bottom", end: "bottom top", scrub: desktop ? 1.25 : 0.5, invalidateOnRefresh: true,
        } },
      );
      gsap.from(row.querySelector(".kinetic-rule"), { scaleX: 0, transformOrigin: index % 2 ? "right" : "left", ease: "none",
        scrollTrigger: { trigger: row, start: "top 90%", end: "top 55%", scrub: 0.5 } });
    });
  }, []);
  useScrollMotion(root, animate);

  return (
    <section id="skills" className="motion-section kinetic-skills" ref={root} aria-labelledby="skills-title">
      <div className="motion-container">
        <div className="motion-section-label"><p><span>04 /</span> Technical skills</p><span>From the first component to production</span></div>
        <h2 id="skills-title" className="motion-title skills-heading">A practical <span>toolkit.</span></h2>
      </div>
      <div className="kinetic-rows">
        {skillGroups.map((group, index) => (
          <div className="kinetic-row" key={group.title}>
            <div className="kinetic-rule" aria-hidden="true" />
            <div className="kinetic-meta motion-container"><h3><span>0{index + 1}</span>{group.title}</h3><p>{group.skills.join(" / ")}</p></div>
            <div className="kinetic-window" aria-hidden="true">
              <div className="kinetic-type">{group.lead.map((name, i) => <span key={name} className={i === 1 ? "kinetic-outline" : ""}>{name}<span className="kinetic-divider">/</span></span>)}</div>
            </div>
            <p className="motion-sr-only">{group.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
