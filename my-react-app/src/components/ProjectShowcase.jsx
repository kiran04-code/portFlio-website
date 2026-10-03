import { useCallback, useRef } from "react";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { images, projetcs } from "../assets/assets";
import useScrollMotion from "../hooks/useScrollMotion"

const projects = [
  {
    id: "khanaaval-project", title: "Khanaaval", category: "Meal subscription platform",
    description: "A student meal platform bringing together subscriptions, digital payments, and QR-based attendance.",
    tech: ["React", "Node.js", "MongoDB", "BullMQ"],
    image: "/khanaaval/khanaaval_hero.png", detail: "/khanaaval/khanaaval_mobile.png",
    screen: "/khanaaval/khanaaval_full.png", accent: "#d6efad", tint: "#1c2419",
    live: "https://www.khanaaval.com/", domain: "khanaaval.com", mobile: true,
  },
  {
    id: "proj1", title: "QuickChat", category: "Real-time communication",
    description: "A real-time messaging application with online presence, media sharing, and responsive conversations.",
    tech: ["React", "Node.js", "Socket.IO"], image: images.project01, detail: images.proj1_im1,
    domain: "quickchats.com", accent: "#c3b2f4", tint: "#201b30",
  },
  {
    id: "proj6", title: "Twitter Architecture Clone", category: "Social platform",
    description: "A full-stack social application exploring real-time updates, event processing, and scalable backend design.",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis"], image: images.T1, domain: "twitter / architecture",
    accent: "#b2d4f4", tint: "#17222e", shortTitle: "Twitter Clone",
  },
  {
    id: "proj4", title: "HealthShield", category: "Healthcare application",
    description: "A healthcare platform with appointment scheduling, vaccination tracking, and role-based dashboards.",
    tech: ["React", "Express", "MongoDB"], image: images.L1, detail: images.L2, domain: "healthshield / platform",
    accent: "#b5ded4", tint: "#172723",
  },
  {
    id: "proj5", title: "Kesula Threads", category: "E-commerce",
    description: "An apparel storefront with product discovery, checkout, and tools for managing the product catalog.",
    tech: ["React", "TypeScript", "MongoDB"], domain: "kesula / threads",
    accent: "#e7c9aa", tint: "#2a221b",
  },
  {
    id: "proj3", title: "VITAcademic", category: "Education",
    description: "A shared resource library helping VIT Pune students find course materials, notes, and question banks.",
    tech: ["React", "Node.js", "MongoDB"], image: images.Project3, detail: images.img2_proj3,
    domain: "vitacademic / resources",
    accent: "#d4c4ef", tint: "#231e2b",
  },
].map(project => {
  const details = projetcs.find(item => item.name === project.id);
  return {
    ...project, details,
    live: project.live || details?.liveproject,
    image: project.image || details?.projectImage?.[0],
    detail: project.detail || details?.projectImage?.[1],
  };
});

function ProjectVisual({ project, index }) {
  return (
    <div className={`project-scene project-scene-${index % 3}`} data-cursor="explore">
      <div className="scene-grid" aria-hidden="true" />
      <span className="scene-watermark" aria-hidden="true">0{index + 1}</span>
      <span className="scene-caption"><i aria-hidden="true" /> {project.category}</span>
      <span className="scene-format" aria-hidden="true">Web experience ↗</span>
      <div className="scene-depth">
        <div className="device-main">
          <div className="device-tilt">
            <div className="device-bar" aria-hidden="true"><span className="device-dots"><i /><i /><i /></span><span>{project.domain}</span><ArrowUpRight size={10} /></div>
            <div className="device-screen"><img src={project.screen || project.image} alt={`${project.title} application preview`} width="1440" height="900" decoding="async" /></div>
          </div>
        </div>
        {project.detail && (
          <div className={`device-detail ${project.mobile ? "device-phone" : "device-window"}`} aria-hidden="true">
            {project.mobile ? <span className="device-speaker" /> : <div className="device-detail-bar"><i /><i /><i /></div>}
            <div className="detail-screen"><img src={project.detail} alt="" width={project.mobile ? 390 : 1440} height={project.mobile ? 844 : 900} decoding="async" /></div>
          </div>
        )}
      </div>
      <span className="scene-index" aria-hidden="true">0{index + 1} / 06</span>
      <span className="scene-open" aria-hidden="true">Explore project <ArrowUpRight size={14} /></span>
      {project.details ? (
        <Link className="project-scene-link" to={`/project/${project.id}`} aria-label={`View ${project.title} case study`} />
      ) : (
        <a className="project-scene-link" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} />
      )}
    </div>
  );
}

export default function ProjectShowcase() {
  const root = useRef(null);
  const timelineRef = useRef(null);
  const animate = useCallback(({ desktop, finePointer }) => {
    const section = root.current;
    const stage = section.querySelector(".project-stage");
    const panels = [...section.querySelectorAll(".project-panel")];
    const controls = [...section.querySelectorAll(".project-step")];
    const counter = section.querySelector(".project-current");
    const currentName = section.querySelector(".project-current-name");
    const cleanups = [];
    let active = -1;

    const setActive = (index, isolate = desktop) => {
      if (index === active) return;
      active = index;
      counter.textContent = String(index + 1).padStart(2, "0");
      currentName.textContent = projects[index].shortTitle || projects[index].title;
      stage.style.setProperty("--project-accent", projects[index].accent);
      panels.forEach((panel, i) => {
        if (isolate) {
          if (i !== index && panel.contains(document.activeElement)) controls[index].focus({ preventScroll: true });
          panel.inert = i !== index;
          panel.setAttribute("aria-hidden", String(i !== index));
          panel.dataset.active = String(i === index);
        }
      });
      controls.forEach((button, i) => {
        if (i === index) button.setAttribute("aria-current", "step");
        else button.removeAttribute("aria-current");
      });
    };
    cleanups.push(() => {
      timelineRef.current = null;
      stage.classList.remove("is-pinned");
      stage.style.removeProperty("--project-accent");
      panels.forEach(panel => { panel.inert = false; panel.removeAttribute("aria-hidden"); delete panel.dataset.active; });
      controls.forEach(button => { button.removeAttribute("aria-current"); button.style.removeProperty("--step-progress"); });
    });

    gsap.from(section.querySelectorAll(".work-heading > span"), {
      yPercent: 110, rotate: 3, stagger: 0.08, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 85%", end: "top 25%", scrub: 0.75 },
    });

    if (desktop) {
      stage.classList.add("is-pinned");
      gsap.set(panels, { autoAlpha: 0 });
      gsap.set(panels[0], { autoAlpha: 1 });
      setActive(0);
      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: stage, start: "top 84px",
          // A short scroll advances each chapter; the full set takes under three viewports.
          end: () => `+=${window.innerHeight * (projects.length - 1) * 0.55}`,
          pin: true, scrub: 0.4, invalidateOnRefresh: true, anticipatePin: 1,
        },
        onUpdate() {
          const time = this.time();
          setActive(Math.min(projects.length - 1, Math.max(0, Math.floor((time + 0.32) / 1.6))));
          controls.forEach((button, i) => button.style.setProperty("--step-progress", gsap.utils.clamp(0, 1, (time - i * 1.6 + 0.32) / 1.6)));
        },
      });
      timelineRef.current = timeline;
      panels.forEach((panel, i) => {
        const main = panel.querySelector(".device-main");
        const detail = panel.querySelector(".device-detail");
        const scene = panel.querySelector(".project-scene");
        const text = panel.querySelectorAll(".project-word-mask > span");
        const start = i * 1.6;
        timeline.addLabel(`project-${i}`, start + 0.42);
        if (i > 0) {
          timeline.set(panel, { autoAlpha: 1 }, start - 0.45)
            .fromTo(scene, { clipPath: "inset(100% 0 0 0 round 18px)", yPercent: 10 }, { clipPath: "inset(0% 0 0 0 round 18px)", yPercent: 0, duration: 0.85 }, start - 0.45)
            .fromTo(text, { yPercent: 110, rotate: 4 }, { yPercent: 0, rotate: 0, duration: 0.65, stagger: 0.05 }, start - 0.3)
            .fromTo(panel.querySelector(".project-meta"), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, start - 0.08);
          const previous = panels[i - 1];
          timeline.to(previous.querySelector(".project-scene"), { scale: 0.92, yPercent: -8, rotation: -2, opacity: 0.15, duration: 0.85 }, start - 0.45)
            .to(previous.querySelector(".project-copy"), { y: -24, opacity: 0, duration: 0.35 }, start - 0.45)
            .set(previous, { autoAlpha: 0 }, start + 0.4);
        }
        timeline.fromTo(main,
          { rotateY: i % 2 ? 12 : -12, rotateX: 7, rotation: i % 2 ? 2 : -2, xPercent: i % 2 ? 4 : -4, y: 25, scale: 0.91 },
          { rotateY: i % 2 ? -3 : 3, rotateX: 0, rotation: 0, xPercent: 0, y: -12, scale: 1, duration: 1.35, ease: "none" }, start);
        timeline.fromTo(panel.querySelector(".device-screen img"), { scale: 1.04, objectPosition: "50% 0%" }, { scale: 1, objectPosition: "50% 100%", duration: 1.35, ease: "none" }, start);
        timeline.fromTo(panel.querySelector(".scene-watermark"), { y: 35 }, { y: -25, duration: 1.35, ease: "none" }, start);
        if (detail) timeline.fromTo(detail,
          { y: 48, x: 24, rotation: i % 2 ? -5 : 5 },
          { y: -12, x: -10, rotation: i % 2 ? -2 : 2, duration: 1.35, ease: "none" }, start);
      });
      timeline.to({}, { duration: 0.25 });
      timeline.fromTo(section.querySelector(".project-progress-fill"), { scaleX: 0 }, { scaleX: 1, duration: timeline.duration(), ease: "none" }, 0);
    } else {
      panels.forEach((panel, index) => {
        const scene = panel.querySelector(".project-scene");
        ScrollTrigger.create({ trigger: panel, start: "top 55%", end: "bottom 55%", onToggle: self => { if (self.isActive) setActive(index, false); } });
        gsap.fromTo(scene, { clipPath: "inset(12% 0 0 0 round 18px)" }, {
          clipPath: "inset(0% 0 0 0 round 18px)", ease: "none",
          scrollTrigger: { trigger: scene, start: "top 95%", end: "top 30%", scrub: 0.5 },
        });
        gsap.fromTo(panel.querySelector(".device-main"),
          { y: 28, rotateY: -6, rotateX: 4, scale: 0.94 },
          { y: -8, rotateY: 0, rotateX: 0, scale: 1, ease: "none", scrollTrigger: { trigger: scene, start: "top 95%", end: "bottom 25%", scrub: 0.55 } });
        gsap.fromTo(panel.querySelector(".device-screen img"), { objectPosition: "50% 0%" }, {
          objectPosition: "50% 100%", ease: "none", scrollTrigger: { trigger: scene, start: "top 60%", end: "bottom 20%", scrub: 0.6 },
        });
        const detail = panel.querySelector(".device-detail");
        if (detail) gsap.fromTo(detail, { y: 32, rotation: 5 }, {
          y: -12, rotation: -2, ease: "none", scrollTrigger: { trigger: scene, start: "top 95%", end: "bottom 25%", scrub: 0.7 },
        });
        gsap.from(panel.querySelectorAll(".project-word-mask > span"), { yPercent: 110, duration: 0.65, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 85%", toggleActions: "play none none reverse" } });
      });
    }

    if (finePointer) {
      panels.forEach(panel => {
        const scene = panel.querySelector(".project-scene");
        const tilt = panel.querySelector(".device-tilt");
        const rotateX = gsap.quickTo(tilt, "rotationX", { duration: 0.8, ease: "power3.out" });
        const rotateY = gsap.quickTo(tilt, "rotationY", { duration: 0.8, ease: "power3.out" });
        const move = event => {
          const bounds = scene.getBoundingClientRect();
          rotateY(((event.clientX - bounds.left) / bounds.width - 0.5) * 6);
          rotateX(((event.clientY - bounds.top) / bounds.height - 0.5) * -5);
        };
        const leave = () => { rotateX(0); rotateY(0); };
        scene.addEventListener("pointermove", move);
        scene.addEventListener("pointerleave", leave);
        cleanups.push(() => { scene.removeEventListener("pointermove", move); scene.removeEventListener("pointerleave", leave); });
      });
    }
    return () => cleanups.forEach(cleanup => cleanup());
  }, []);
  useScrollMotion(root, animate);

  const goToProject = index => {
    const timeline = timelineRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (timeline?.scrollTrigger) {
      const trigger = timeline.scrollTrigger;
      const position = timeline.labels[`project-${index}`] / timeline.duration();
      window.scrollTo({ top: trigger.start + position * (trigger.end - trigger.start), behavior: reduced ? "instant" : "smooth" });
    } else {
      root.current.querySelectorAll(".project-panel")[index].scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" });
    }
  };

  return (
    <section id="projects" className="motion-section selected-work" ref={root} aria-labelledby="projects-title">
      <span id="khanaaval" className="legacy-section-anchor" aria-hidden="true" />
      <div className="work-intro motion-container">
        <div className="motion-section-label"><p><span>03 /</span> Selected work</p><span>Full-stack products / Real-world problems</span></div>
        <h2 id="projects-title" className="work-heading"><span>Selected</span><span>work<span className="work-count">(06)</span></span></h2>
        <div className="work-intro-bottom"><p>Ideas into applications.</p><span>Scroll to explore <ArrowDown size={14} aria-hidden="true" /></span></div>
      </div>
      <div className="project-stage motion-container">
        <div className="project-stage-toolbar">
          <p><span className="project-current">01</span><span className="project-total"> / 06</span></p>
          <span className="project-current-name">Khanaaval</span>
          <span className="project-scroll-label">Scroll to change project <ArrowDown size={12} aria-hidden="true" /></span>
        </div>
        <div className="project-panels">
          {projects.map((project, index) => (
            <article className="project-panel" key={project.id} aria-labelledby={`title-${project.id}`} style={{ "--project-accent": project.accent, "--project-tint": project.tint }}>
              <div className="project-copy">
                <p className="project-kicker"><span>0{index + 1}</span> {project.category}</p>
                <h3 className="project-title" id={`title-${project.id}`}>{project.title.split(" ").map((word, i) => <span className="project-word-mask" key={word + i}><span>{word}</span>{" "}</span>)}</h3>
                <div className="project-meta">
                  <p className="project-description">{project.description}</p>
                  <ul className="project-stack" aria-label="Technologies">{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
                  <div className="project-links">
                    {project.details ? <Link className="motion-link project-primary-link" to={`/project/${project.id}`}>View project <ArrowUpRight size={18} aria-hidden="true" /></Link> : <a className="motion-link project-primary-link" href={project.live} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight size={18} aria-hidden="true" /></a>}
                    {project.details && project.live && <a className="project-icon-link" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} live site`}><ArrowUpRight size={18} aria-hidden="true" /></a>}
                    {project.details?.github && <a className="project-icon-link" href={project.details.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source on GitHub`}><Github size={17} aria-hidden="true" /></a>}
                  </div>
                </div>
              </div>
              <ProjectVisual project={project} index={index} />
            </article>
          ))}
        </div>
        <nav aria-label="Select a project" className="project-steps">{projects.map((project, i) => (
          <button type="button" className="project-step" key={project.id} onClick={() => goToProject(i)} aria-label={`Show ${project.title}`}>
            <img src={project.image} alt="" width="80" height="50" />
            <span className="project-step-number">0{i + 1}</span><span className="project-step-name">{project.shortTitle || project.title}</span>
            <span className="project-step-fill" aria-hidden="true" />
          </button>
        ))}</nav>
        <div className="project-progress" aria-hidden="true"><div className="project-progress-fill" /></div>
      </div>
    </section>
  );
}
