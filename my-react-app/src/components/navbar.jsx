import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;
    // React renders the section after the browser's initial fragment lookup.
    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(location.hash.slice(1));
      if (section) {
        window.scrollTo({
          top: Math.max(0, section.getBoundingClientRect().top + window.scrollY - 80),
          behavior: "instant",
        });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "hero";
      for (const { id } of navLinks) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160) current = id;
      }
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1180px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector("a")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab") {
        const controls = [...drawerRef.current.querySelectorAll("a, button")];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNavigation = (event, id) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    setIsOpen(false);
    if (location.pathname !== "/") return;
    const section = document.getElementById(id);
    if (!section) return;
    event.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: Math.max(0, section.getBoundingClientRect().top + window.scrollY - 80),
      behavior: reducedMotion ? "instant" : "smooth",
    });
    // Keep keyboard focus with the destination when the mobile dialog closes.
    requestAnimationFrame(() => {
      section.setAttribute("tabindex", "-1")
      section.focus({ preventScroll: true });
    });
  };

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="site-header-inner">
          <a
            href="/#hero"
            onClick={(event) => handleNavigation(event, "hero")}
            className="site-brand"
            aria-label="Kiran Rathod, back to home"
          >
            <span className="brand-monogram" aria-hidden="true">kr<span>.</span></span>
            <span className="brand-copy">
              <span className="brand-name">Kiran Rathod<span>.</span></span>
              <span className="brand-role">Software Engineer</span>
            </span>
          </a>
          <nav className="desktop-navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(event) => handleNavigation(event, link.id)}
                aria-current={activeSection === link.id ? "location" : undefined}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="header-resume" href="/kiran.rathod.pdf" target="_blank" rel="noopener noreferrer">
              <FileText size={15} aria-hidden="true" /> Resume
            </a>
            <a href="/#contact" onClick={(event) => handleNavigation(event, "contact")} className="header-contact">
              Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          ref={drawerRef}
          id="mobile-navigation"
          className="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          data-lenis-prevent
        >
          <div className="mobile-navigation-heading">
            <span className="section-eyebrow">Explore the portfolio</span>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label="Close navigation menu"
              onClick={() => {
                setIsOpen(false);
                menuButtonRef.current?.focus();
              }}
            >
              <X size={22} />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(event) => handleNavigation(event, link.id)}
                aria-current={activeSection === link.id ? "location" : undefined}
              >
                <span className="mobile-link-number">0{index + 1}</span>
                {link.name}
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="mobile-navigation-footer">
            <a className="portfolio-button" href="/kiran.rathod.pdf" target="_blank" rel="noopener noreferrer">
              <FileText size={16} aria-hidden="true" /> View resume
            </a>
            <span>Pune, India / Open worldwide</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
