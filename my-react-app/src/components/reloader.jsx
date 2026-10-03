import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./loader.css";

export default function Reloader({ onComplete }) {
  const root = useRef(null);
  const finishRef = useRef(null);
  const notified = useRef(false);
  // A fresh page load always gets the intro, even after a previous visit.
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const notify = () => {
      if (notified.current) return;
      notified.current = true;
      onComplete?.();
    };
    if (!visible) { notify(); return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      notify();
      setVisible(false);
      return;
    }

    const overlay = root.current;
    let disposed = false;
    let readinessTimer;
    const previousFocus = document.activeElement;
    const siblings = [...overlay.parentElement.children].filter(node => node !== overlay);
    const previousInert = siblings.map(node => node.inert);
    siblings.forEach(node => { node.inert = true; });
    overlay.querySelector(".intro-skip").focus({ preventScroll: true });
    const blockScroll = event => { event.preventDefault(); event.stopImmediatePropagation(); };
    const blockKeys = event => {
      if (event.key === "Tab") {
        event.preventDefault();
        overlay.querySelector(".intro-skip").focus({ preventScroll: true });
      } else if (event.key === "Escape") {
        finishRef.current?.();
      } else if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
        if (event.key !== " " || event.target.tagName !== "BUTTON") event.preventDefault();
      }
    };
    window.addEventListener("wheel", blockScroll, { passive: false, capture: true });
    window.addEventListener("touchmove", blockScroll, { passive: false, capture: true });
    window.addEventListener("keydown", blockKeys);
    const finish = () => { if (disposed) return; notify(); setVisible(false); };
    finishRef.current = finish;

    // Start the visual sequence immediately, then wait briefly at the handoff
    // for the actual hero image and fonts. Never strand users on slow assets.
    const portrait = document.querySelector("#hero img");
    const ready = Promise.race([
      Promise.all([document.fonts.ready, portrait?.decode?.().catch(() => {})]),
      new Promise(resolve => { readinessTimer = setTimeout(resolve, 1800); }),
    ]);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const letters = overlay.querySelectorAll(".intro-letter");
      const counter = overlay.querySelector(".intro-counter-value");
      const phase = overlay.querySelector(".intro-phase");
      const progress = { value: 0 };
      const timeline = gsap.timeline({ defaults: { ease: "power3.inOut" }, onComplete: finish });
      gsap.set(letters, { yPercent: 120, rotationX: -80, opacity: 0, transformOrigin: "50% 100%" });
      gsap.set(overlay.querySelector(".intro-line-fill"), { scaleX: 0, transformOrigin: "left" });
      timeline
        .from(overlay.querySelectorAll(".intro-meta"), { y: 12, opacity: 0, duration: 0.45, stagger: 0.08 }, 0)
        .fromTo(overlay.querySelector(".intro-orbit"), { scale: 0.65, rotation: -65, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 1.4, ease: "expo.out" }, 0)
        .to(overlay.querySelector(".intro-orbit-track"), { rotation: 220, duration: 2.2, ease: "power2.inOut" }, 0)
        .from(overlay.querySelectorAll(".intro-orbit-ring"), { scale: 0.3, opacity: 0, duration: 1.1, stagger: 0.12, ease: "expo.out" }, 0.15)
        .to(letters, { yPercent: 0, rotationX: 0, opacity: 1, stagger: { each: 0.045, from: "start" }, duration: 0.85, ease: "expo.out" }, 0.15)
        .fromTo(overlay.querySelector(".intro-name-last"), { xPercent: 8 }, { xPercent: 0, duration: 1.3, ease: "power3.out" }, 0.2)
        .to(progress, { value: 86, duration: 1.45, ease: "power2.inOut", onUpdate: () => { counter.textContent = String(Math.round(progress.value)).padStart(2, "0"); } }, 0)
        .to(overlay.querySelector(".intro-line-fill"), { scaleX: 0.86, duration: 1.45 }, 0)
        .addPause(1.5, () => { ready.then(() => { if (!disposed) timeline.play(); }); })
        .call(() => { phase.textContent = "Ready to explore"; }, [], 1.5)
        .to(progress, { value: 100, duration: 0.3, onUpdate: () => { counter.textContent = String(Math.round(progress.value)).padStart(2, "0"); } }, 1.5)
        .to(overlay.querySelector(".intro-line-fill"), { scaleX: 1, duration: 0.3 }, 1.5)
        .to(overlay.querySelector(".intro-name-first"), { xPercent: -8, duration: 0.65, ease: "power3.in" }, 1.8)
        .to(overlay.querySelector(".intro-name-last"), { xPercent: 8, duration: 0.65, ease: "power3.in" }, 1.8)
        .to(letters, { yPercent: -110, rotationX: 35, stagger: { each: 0.02, from: "edges" }, duration: 0.55, ease: "power3.in" }, 1.8)
        .to(overlay.querySelectorAll(".intro-meta, .intro-bottom"), { opacity: 0, y: -12, duration: 0.3 }, 1.95)
        .to(overlay.querySelector(".intro-orbit"), { scale: 1.25, rotation: 35, opacity: 0, duration: 0.6 }, 1.85)
        .call(notify, [], 2.15)
        .to(overlay.querySelectorAll(".intro-shutter"), {
          yPercent: index => index % 2 ? 100 : -100,
          duration: 1.05, stagger: { each: 0.065, from: "center" }, ease: "expo.inOut",
        }, 2.15);
    }, root);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const preferenceChange = () => { if (reduced.matches) finish(); };
    reduced.addEventListener("change", preferenceChange);
    return () => {
      disposed = true;
      clearTimeout(readinessTimer);
      media.revert();
      finishRef.current = null;
      siblings.forEach((node, index) => { node.inert = previousInert[index]; });
      if (overlay.contains(document.activeElement)) {
        const focusTarget = previousFocus?.closest(".portfolio-footer")
          ? document.querySelector(".site-brand")
          : previousFocus;
        if (focusTarget?.isConnected) focusTarget.focus({ preventScroll: true });
      }
      window.removeEventListener("wheel", blockScroll, true);
      window.removeEventListener("touchmove", blockScroll, true);
      window.removeEventListener("keydown", blockKeys);
      reduced.removeEventListener("change", preferenceChange);
    };
  }, [visible, onComplete]);

  if (!visible) return null;
  return (
    <div ref={root} className="portfolio-intro" role="dialog" aria-modal="true" aria-label="Opening Kiran Rathod’s portfolio">
      <div className="intro-shutters" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <div className="intro-shutter" key={i} />)}</div>
      <div className="intro-content">
        <div className="intro-top intro-meta">
          <span className="intro-brand"><span className="intro-dot" />Kiran Rathod / Portfolio</span>
          <button type="button" onClick={() => finishRef.current?.()} className="intro-skip">Skip intro <span aria-hidden="true">↗</span></button>
        </div>
        <div className="intro-center">
          <div className="intro-overline intro-meta"><span>A little code. A lot of possibility.</span><span aria-hidden="true">[ KR—01 ]</span></div>
          <div className="intro-orbit" aria-hidden="true">
            <div className="intro-orbit-ring" /><div className="intro-orbit-ring" /><div className="intro-orbit-ring" />
            <div className="intro-orbit-track"><span /></div>
            <span className="intro-orbit-core">kr<span>.</span></span>
            <span className="intro-orbit-caption">Ideas in motion</span>
          </div>
          <div className="intro-name" aria-label="Kiran Rathod">
            {["KIRAN", "RATHOD"].map((name, index) => (
              <div className={`intro-name-row ${index ? "intro-name-last" : "intro-name-first"}`} key={name} aria-hidden="true">
                {[...name].map((letter, i) => <span className="intro-letter-mask" key={i}><span className="intro-letter">{letter}</span></span>)}
                {!index && <span className="intro-name-mark" aria-hidden="true">↗</span>}
              </div>
            ))}
          </div>
          <div className="intro-undername intro-meta"><span>Interface</span><span className="intro-connector" aria-hidden="true" /><span>Infrastructure</span></div>
        </div>
        <div className="intro-bottom">
          <div className="intro-bottom-row"><span className="intro-phase">Assembling the experience</span><span className="intro-counter" aria-hidden="true"><span className="intro-counter-value">00</span><span className="intro-counter-total"> / 100</span></span></div>
          <div className="intro-line"><div className="intro-line-fill" /></div>
          <div className="intro-bottom-caption"><span>Full-stack & DevOps</span><span>Pune, India</span></div>
        </div>
      </div>
    </div>
  );
}
