import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Github, Linkedin, MessageSquare, Terminal } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate direct dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Construct mailto link fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
      window.open(`mailto:kiranrathod0405@gmail.com?subject=${subject}&body=${body}`, "_blank");
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 md:py-40 bg-[#050505] text-white border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
            05 // Get In Touch
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Title & Direct Channels (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight font-display leading-[0.92] break-words">
              LET'S BUILD <br />
              <span className="text-zinc-600">SOMETHING.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light max-w-md leading-relaxed">
              Have an ambitious project, scaling challenge, or high-impact engineering role? Let's discuss architecture, systems, and product execution.
            </p>

            {/* Direct contact cards */}
            <div className="space-y-4 pt-4">
              <a
                href="mailto:kiranrathod0405@gmail.com"
                data-cursor="open"
                className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Email Address</p>
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-zinc-200">
                      kiranrathod0405@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Current Base</p>
                  <p className="text-sm sm:text-base font-bold text-white">
                    Pune, Maharashtra, India • Open Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/kiran04-code"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kiran-rathod-66b009331"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Message Form (6 cols) */}
          <div className="lg:col-span-6 p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/[0.08] shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-zinc-400 font-light max-w-sm mx-auto">
                  Thank you for reaching out. Your default email client has also opened to send the message directly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-xs font-mono uppercase text-zinc-300 hover:bg-white hover:text-black transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:bg-white/[0.05] transition-all font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:bg-white/[0.05] transition-all font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                    Project / Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, timeline, or engineering opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white focus:bg-white/[0.05] transition-all font-sans text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="pointer"
                  className="w-full py-4 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
