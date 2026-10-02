import { useCallback, useRef, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import gsap from "gsap";
import useScrollMotion from "../hooks/useScrollMotion";

const ContactSection = () => {
  const root = useRef(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [draftOpened, setDraftOpened] = useState(false);
  const animate = useCallback(({ finePointer }) => {
    const section = root.current;
    gsap.from(section.querySelectorAll(".contact-heading h2 > span > span"), {
      yPercent: 110, rotate: 2, duration: 1, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 80%", end: "top 20%", scrub: 0.65 },
    });
    const link = section.querySelector(".contact-heading-link");
    gsap.from(link, { rotation: -45, scale: 0.8, ease: "none",
      scrollTrigger: { trigger: section, start: "top 85%", end: "top 20%", scrub: 0.8 } });
    if (!finePointer) return;
    const x = gsap.quickTo(link, "x", { duration: 0.5, ease: "power3.out" });
    const y = gsap.quickTo(link, "y", { duration: 0.5, ease: "power3.out" });
    const move = event => {
      const bounds = link.getBoundingClientRect();
      x((event.clientX - bounds.left - bounds.width / 2) * 0.2);
      y((event.clientY - bounds.top - bounds.height / 2) * 0.2);
    };
    const leave = () => { x(0); y(0); };
    link.addEventListener("pointermove", move);
    link.addEventListener("pointerleave", leave);
    return () => { link.removeEventListener("pointermove", move); link.removeEventListener("pointerleave", leave); };
  }, []);
  useScrollMotion(root, animate);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name.trim()}`);
    const body = encodeURIComponent(`Name: ${formState.name.trim()}\nEmail: ${formState.email.trim()}\n\n${formState.message.trim()}`);
    window.location.href = `mailto:kiranrathod0405@gmail.com?subject=${subject}&body=${body}`;
    setDraftOpened(true);
  };

  return (
    <section id="contact" ref={root} className="portfolio-section contact-section" aria-labelledby="contact-title">
      <div className="section-container">
        <div className="section-heading-line">
          <p className="section-eyebrow"><span>05 /</span> Get in touch</p>
          <span className="section-aside">Good work starts with a conversation</span>
        </div>
        <div className="contact-heading">
          <h2 id="contact-title"><span><span>Have something</span></span><span><span>in mind?</span></span></h2>
          <a href="mailto:kiranrathod0405@gmail.com" className="contact-heading-link" aria-label="Email Kiran Rathod"><ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="contact-layout">
          <div className="contact-copy">
            <p>I’m open to engineering roles, interesting projects, and thoughtful collaborations. Tell me what you’re working on.</p>
            <a href="mailto:kiranrathod0405@gmail.com" className="contact-email"><Mail size={18} aria-hidden="true" /><span>kiranrathod0405@gmail.com</span><ArrowUpRight size={17} aria-hidden="true" /></a>
            <p className="contact-location"><MapPin size={16} aria-hidden="true" />Pune, India · Open worldwide</p>
            <div className="contact-socials">
              <a href="https://github.com/kiran04-code" target="_blank" rel="noopener noreferrer" className="portfolio-text-link"><Github size={16} aria-hidden="true" />GitHub<ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/kiran-rathod-66b009331" target="_blank" rel="noopener noreferrer" className="portfolio-text-link"><Linkedin size={16} aria-hidden="true" />LinkedIn<ArrowUpRight size={13} aria-hidden="true" /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Let’s start a conversation</h3>
            <div className="contact-form-row">
              <div>
                <label htmlFor="contact-name">Your name</label>
                <input id="contact-name" name="name" autoComplete="name" required placeholder="Alex Morgan" value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} />
              </div>
              <div>
                <label htmlFor="contact-email">Email address</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="alex@company.com" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message">What are you working on?</label>
              <textarea id="contact-message" name="message" required rows={5} placeholder="A little about your project or opportunity..." value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} />
            </div>
            <div className="contact-form-footer">
              <span>Opens a draft in your email app.</span>
              <button className="portfolio-button portfolio-button-primary" type="submit">Compose email <ArrowUpRight size={16} aria-hidden="true" /></button>
            </div>
            {draftOpened && <p className="contact-form-notice" role="status">Your email draft is ready to open. Send it from your email app to complete your message. If no app opened, email me directly using the address alongside.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
