import { ArrowUp, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="portfolio-footer">
    <div className="section-container">
      <div className="footer-main">
        <div><a className="footer-name" href="/#hero">Kiran Rathod<span>.</span></a><p>Software engineering, with care.</p></div>
        <nav aria-label="Social links" className="footer-links">
          <a href="https://github.com/kiran04-code" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/kiran-rathod-66b009331" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
          <a href="/kiran.rathod.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={13} aria-hidden="true" /></a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kiran Santosh Rathod</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>Back to top <ArrowUp size={14} aria-hidden="true" /></button>
      </div>
    </div>
  </footer>
);

export default Footer;
