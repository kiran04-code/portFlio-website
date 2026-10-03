import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, RotateCcw } from "lucide-react";
import gsap from "gsap";
import useScrollMotion from "../hooks/useScrollMotion";
import "./footer.css";

const localTime = () => new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false,
}).format(new Date());

export default function Footer({ onReplayIntro }) {
  const root = useRef(null);
  const [time, setTime] = useState(localTime);
  useEffect(() => {
    const timer = setInterval(() => setTime(localTime()), 30000);
    return () => clearInterval(timer);
  }, []);

  const animate = useCallback(() => {
    const footer = root.current;
    gsap.from(footer.querySelectorAll(".footer-signature-letter"), {
      yPercent: 110, rotation: 8, stagger: 0.025, ease: "power3.out",
      scrollTrigger: { trigger: footer, start: "top 95%", end: "bottom bottom", scrub: 0.8 },
    });
    gsap.from(footer.querySelector(".footer-orbit-mark"), {
      rotation: -100, ease: "none",
      scrollTrigger: { trigger: footer, start: "top bottom", end: "bottom bottom", scrub: 1 },
    });
    gsap.fromTo(footer.querySelector(".footer-ticker-track"), { xPercent: -15 }, {
      xPercent: 0, ease: "none",
      scrollTrigger: { trigger: footer, start: "top bottom", end: "bottom top", scrub: 0.6 },
    });
    gsap.from(footer.querySelectorAll(".footer-hello-line > span"), {
      yPercent: 110, rotation: 4, duration: 0.7, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: footer, start: "top 85%", toggleActions: "play none none reverse" },
    });
  }, []);
  useScrollMotion(root, animate);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    document.querySelector(".site-brand")?.focus({ preventScroll: true });
  };

  return (
    <footer className="portfolio-footer signature-footer" ref={root} aria-label="Portfolio footer">
      <div className="footer-ticker" aria-hidden="true"><div className="footer-ticker-track">{Array.from({ length: 4 }, (_, i) => <span key={i}>YOUR NEXT BIG IDEA <span>✳</span> LET’S BUILD IT <ArrowUpRight /></span>)}</div></div>
      <div className="footer-shell">
        <div className="footer-topline">
          <span><i aria-hidden="true" /> Always curious. Always building.</span>
          <span>Pune, India <span className="footer-local-time">{time} IST</span></span>
        </div>
        <div className="footer-connect">
          <div className="footer-invitation">
            <p>Have a wild idea? I’m listening.</p>
            <a href="mailto:kiranrathod0405@gmail.com" className="footer-hello" aria-label="Let's make it happen. Email Kiran Rathod.">
              <span className="footer-hello-line"><span>LET’S MAKE</span></span>
              <span className="footer-hello-line"><span>IT HAPPEN<span className="footer-hello-dot">.</span></span></span>
              <span className="footer-hello-arrow"><ArrowUpRight aria-hidden="true" /></span>
            </a>
            <a className="footer-email" href="mailto:kiranrathod0405@gmail.com">kiranrathod0405@gmail.com</a>
          </div>
          <nav className="footer-directory" aria-label="Footer navigation">
            <p>Explore</p>
            <a href="#about">About <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href="#projects">Selected work <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href="/kiran.rathod.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={13} aria-hidden="true" /></a>
          </nav>
          <nav className="footer-directory" aria-label="Social links">
            <p>Elsewhere</p>
            <a href="https://github.com/kiran04-code" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/kiran-rathod-66b009331" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href="mailto:kiranrathod0405@gmail.com">Email <ArrowUpRight size={13} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className="footer-signature" aria-label="Kiran Rathod">
          <span className="footer-signature-name" aria-hidden="true">{[..."KIRAN RATHOD"].map((letter, index) => <span className="footer-signature-mask" key={index}><span className="footer-signature-letter">{letter === " " ? "\u00a0" : letter}</span></span>)}</span>
          <svg className="footer-orbit-mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="50" r="46" /><ellipse cx="50" cy="50" rx="22" ry="46" transform="rotate(35 50 50)" /><ellipse cx="50" cy="50" rx="22" ry="46" transform="rotate(-35 50 50)" /><path d="M4 50h92" /><circle cx="50" cy="50" r="5" fill="currentColor" />
          </svg>
        </div>
        <div className="footer-colophon">
          <p>© {new Date().getFullYear()} Kiran Rathod</p>
          <span>A little code. A lot of possibility.</span>
          <div className="footer-actions">
            {onReplayIntro && <button type="button" onClick={onReplayIntro} className="footer-replay">Replay intro <RotateCcw size={13} aria-hidden="true" /></button>}
            <button type="button" onClick={backToTop} className="footer-top-button">Back to top <ArrowUp size={14} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </footer>
  );
}
