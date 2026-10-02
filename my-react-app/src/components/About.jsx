import { useCallback, useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import useScrollMotion from "../hooks/useScrollMotion";

const disciplines = [
  ["Full-stack development", "Thoughtful interfaces backed by clean APIs and maintainable application architecture.", "React / Next.js / Node.js"],
  ["Cloud & DevOps", "Containerized deployments, automated pipelines, and reliable production environments.", "Docker / AWS / GitHub Actions"],
  ["Backend & data", "Structured data models, caching, and background jobs that keep applications responsive.", "PostgreSQL / Redis / BullMQ"],
];

export default function About() {
  const root = useRef(null);
  const animate = useCallback(({ desktop }) => {
    const section = root.current;
    const lines = section.querySelectorAll(".about-display-line");
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: desktop ? "top 84px" : "top 75%",
        end: desktop ? () => `+=${window.innerHeight * 0.85}` : "center 40%",
        pin: desktop ? section.querySelector(".about-stage") : false,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });
    timeline
      .fromTo(lines, { x: (i) => (i ? 70 : -70) }, { x: 0, duration: 1.4, stagger: 0.12, ease: "power2.out" }, 0)
      .fromTo(section.querySelectorAll(".about-ink"), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", stagger: 0.35, duration: 0.85, ease: "none" }, 0)
      .from(section.querySelectorAll(".about-footnote"), { y: 30, stagger: 0.1, duration: 0.6, ease: "power2.out" }, 0.45);
  }, []);
  useScrollMotion(root, animate);

  return (
    <section id="about" className="motion-section editorial-about" ref={root} aria-labelledby="about-title">
      <div className="about-stage motion-container">
        <div className="motion-section-label"><p><span>01 /</span> About me</p><span>Pune, India · Open worldwide</span></div>
        <div className="about-display">
          <div className="about-intro-label"><ArrowDownRight size={24} aria-hidden="true" /><span>From interface<br />to infrastructure.</span></div>
          <h2 id="about-title">
            {["Thoughtful code.", "Reliable systems."].map((line) => (
              <span className="about-display-line" key={line}>
                <span>{line}</span><span className="about-ink" aria-hidden="true">{line}</span>
              </span>
            ))}
          </h2>
        </div>
        <div className="about-bottom">
          <div className="about-footnote about-bio">
            <p>I’m <strong>Kiran Santosh Rathod.</strong><br />Full-stack developer. DevOps engineer.<br />Turning complex problems into useful software.</p>
            <div className="motion-links">
              <a className="motion-link" href="/kiran.rathod.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="motion-link" href="https://github.com/kiran04-code" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="about-footnote"><span className="motion-caption">Currently</span><p>Full-Stack & DevOps Engineer</p><span>Blackangler Pvt. Limited</span></div>
          <div className="about-footnote"><span className="motion-caption">Education</span><p>B.Tech in Computer Science</p><span>Vishwakarma Institute of Technology, Pune</span></div>
        </div>
      </div>
      <div className="motion-container about-more">
        <details className="motion-details">
          <summary>Background & approach <span aria-hidden="true">+</span></summary>
          <div className="about-detail-content">
            <p>I work across application development and cloud infrastructure at Blackangler, while studying Computer Science at VIT Pune. My focus is on clear architecture, dependable backends, and interfaces that feel simple to use.</p>
            <div className="about-disciplines">{disciplines.map(([title, description, stack]) => <div key={title}><h3>{title}</h3><p>{description}</p><span className="motion-caption">{stack}</span></div>)}</div>
          </div>
        </details>
      </div>
    </section>
  );
}
