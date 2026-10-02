import { useCallback, useRef } from "react";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { images, projetcs } from "../assets/assets";
import useScrollMotion from "../hooks/useScrollMotion";

const projects = [
  {
    id: "khanaaval-project", title: "Khanaaval", category: "Meal subscription platform",
    description: "A student meal platform bringing together subscriptions, digital payments, and QR-based attendance.",
    tech: ["React", "Node.js", "MongoDB", "BullMQ"],
    image: "/khanaaval/khanaaval_hero.png", detail: "/khanaaval/khanaaval_mobile.png",
    live: "https://www.khanaaval.com/", domain: "khanaaval.com", mobile: true,
  },
  {
    id: "proj1", title: "QuickChat", category: "Real-time communication",
    description: "A real-time messaging application with online presence, media sharing, and responsive conversations.",
    tech: ["React", "Node.js", "Socket.IO"], image: images.project01, detail: images.proj1_im1,
    domain: "quickchats.com",
  },
  {
    id: "proj6", title: "Twitter Architecture Clone", category: "Social platform",
    description: "A full-stack social application exploring real-time updates, event processing, and scalable backend design.",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis"], image: images.T1, domain: "twitter / architecture",
  },
  {
    id: "proj4", title: "HealthShield", category: "Healthcare application",
    description: "A healthcare platform with appointment scheduling, vaccination tracking, and role-based dashboards.",
    tech: ["React", "Express", "MongoDB"], image: images.L1, detail: images.L2, domain: "healthshield / platform",
  },
  {
    id: "proj5", title: "Kesula Threads", category: "E-commerce",
    description: "An apparel storefront with product discovery, checkout, and tools for managing the product catalog.",
    tech: ["React", "TypeScript", "MongoDB"], domain: "kesula / threads",
  },
  {
    id: "proj3", title: "VITAcademic", category: "Education",
    description: "A shared resource library helping VIT Pune students find course materials, notes, and question banks.",
    tech: ["React", "Node.js", "MongoDB"], image: images.Project3, detail: images.img2_proj3,
    domain: "vitacademic / resources",
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
      <span className="scene-caption">{project.category}</span>
      <div className="scene-depth">
        <div className="device-main">
          <div className="device-tilt">
            <div className="device-bar" aria-hidden="true"><span className="device-dots"><i /><i /><i /></span><span>{project.domain}</span><ArrowUpRight size={10} /></div>
            <div className="device-screen"><img src={project.image} alt={`${project.title} application preview`} width="1440" height="900" decoding="async" /></div>
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
    const cleanups = [];
    let active = -1;

    const setActive = index => {
      if (index === active) return;
      active = index;
      counter.textContent = String(index + 1).padStart(2, "0");
      panels.forEach((panel, i) => {
        panel.inert = i !== index;
        panel.setAttribute("aria-hidden", String(i !== index));
        panel.dataset.active = String(i === index);
      });
      controls.forEach((button, i) => {
        if (i === index) button.setAttribute("aria-current", "step");
        else button.removeAttribute("aria-current");
      });
    };

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
          end: () => `+=${window.innerHeight * projects.length * 1.15}`,
          pin: true, scrub: 0.85, invalidateOnRefresh: true, anticipatePin: 1,
        },
        onUpdate() {
          const time = this.time();
          setActive(Math.min(projects.length - 1, Math.max(0, Math.floor((time + 0.32) / 1.6))));
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
            .fromTo(scene, { clipPath: "inset(0 0 100% 0)", yPercent: 12 }, { clipPath: "inset(0 0 0% 0)", yPercent: 0, duration: 0.85 }, start - 0.45)
            .fromTo(text, { yPercent: 110, rotate: 4 }, { yPercent: 0, rotate: 0, duration: 0.65, stagger: 0.05 }, start - 0.3)
            .fromTo(panel.querySelector(".project-meta"), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, start - 0.08);
          const previous = panels[i - 1];
          timeline.to(previous.querySelector(".project-scene"), { scale: 0.9, xPercent: -6, yPercent: -4, opacity: 0.2, duration: 0.85 }, start - 0.45)
            .to(previous.querySelector(".project-copy"), { y: -24, opacity: 0, duration: 0.35 }, start - 0.45)
            .set(previous, { autoAlpha: 0 }, start + 0.4);
        }
        timeline.fromTo(main,
          { rotateY: i % 2 ? 12 : -12, rotateX: 7, rotation: i % 2 ? 2 : -2, xPercent: i % 2 ? 4 : -4, y: 25, scale: 0.91 },
          { rotateY: i % 2 ? -3 : 3, rotateX: 0, rotation: 0, xPercent: 0, y: -12, scale: 1, duration: 1.35, ease: "none" }, start);
        timeline.fromTo(panel.querySelector(".device-screen img"), { scale: 1.06 }, { scale: 1, duration: 1.35, ease: "none" }, start);
        if (detail) timeline.fromTo(detail,
          { y: 48, x: 24, rotation: i % 2 ? -5 : 5 },
          { y: -12, x: -10, rotation: i % 2 ? -2 : 2, duration: 1.35, ease: "none" }, start);
      });
      timeline.to({}, { duration: 0.25 });
      timeline.fromTo(section.querySelector(".project-progress-fill"), { scaleX: 0 }, { scaleX: 1, duration: timeline.duration(), ease: "none" }, 0);
      cleanups.push(() => {
        timelineRef.current = null;
        stage.classList.remove("is-pinned");
        panels.forEach(panel => { panel.inert = false; panel.removeAttribute("aria-hidden"); delete panel.dataset.active; });
        controls.forEach(button => button.removeAttribute("aria-current"));
      });
    } else {
      panels.forEach(panel => {
        const scene = panel.querySelector(".project-scene");
        gsap.fromTo(panel.querySelector(".device-main"),
          { y: 28, rotateY: -6, rotateX: 4, scale: 0.94 },
          { y: -8, rotateY: 0, rotateX: 0, scale: 1, ease: "none", scrollTrigger: { trigger: scene, start: "top 95%", end: "bottom 25%", scrub: 0.55 } });
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
          <nav aria-label="Select a project" className="project-steps">{projects.map((project, i) => <button type="button" className="project-step" key={project.id} onClick={() => goToProject(i)} aria-label={`Show ${project.title}`}>0{i + 1}</button>)}</nav>
          <span className="project-scroll-label">Selected projects</span>
        </div>
        <div className="project-panels">
          {projects.map((project, index) => (
            <article className="project-panel" key={project.id} aria-labelledby={`title-${project.id}`}>
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
        <div className="project-stage-bottom"><span>Design meets engineering.</span><span>Keep scrolling <ArrowDown size={12} aria-hidden="true" /></span></div>
        <div className="project-progress" aria-hidden="true"><div className="project-progress-fill" /></div>
      </div>
    </section>
  );
}
