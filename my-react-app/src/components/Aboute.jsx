import React from "react";
import { Code2, Globe, Cpu, Palette, ExternalLink, Settings,  } from "lucide-react";

const About = () => {
  const roles = [
    { title: "Full-Stack Developer", icon: <Code2 size={18} />, color: "from-blue-500/20" },
    { title: "Next.js devloper", icon: <Globe size={18} />, color: "from-orange-500/20" },
    { title: "Web3 Enthusiast", icon: <Cpu size={18} />, color: "from-purple-500/20" },
    { title: "DevOps", icon: <Settings size={18} />, color: "from-emerald-500/20" },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center  py-20 px-6 overflow-hidden relative" id="About">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full"></div>

      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: Decorative Image/Badge Area (4 Columns) */}
        <div className="lg:col-span-5 relative group">
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-2">
             <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
              alt="Coding Workspace" 
              className="rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 object-cover h-[500px] w-full"
            />
            {/* Overlay Info Card */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl">
              <p className="text-orange-400 font-mono text-sm mb-1">Education</p>
              <h4 className="text-white font-bold text-lg leading-tight">B.Tech in Computer Science</h4>
              <p className="text-zinc-400 text-sm">VIT, Pune • 2nd Year Student</p>
            </div>
          </div>
          {/* Floating Geometric Element */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400 rounded-2xl -rotate-12 z-0 opacity-20 group-hover:rotate-0 transition-transform duration-500"></div>
        </div>

        {/* RIGHT SIDE: Content (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <span className="text-orange-400 font-mono tracking-[0.2em] text-sm uppercase">01. Discovery</span>
            <h2 className="text-white text-5xl md:text-7xl  mt-2">
              Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Pixels.</span>
            </h2>
          </div>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-2xl">
            <p>
              Hi, I'm <span className="text-white font-semibold">Kiran Santosh Rathod</span>. I don't just write code; I architect digital experiences. Based in Pune, I spend my time pushing the boundaries of what's possible on the web.
            </p>
            <p>
              My expertise lies in the <span className="text-orange-300">MERN stack</span> and <span className="text-orange-300">Next.js</span>, with a growing obsession for the decentralized world of <span className="text-white font-medium underline underline-offset-8 decoration-orange-400/30">Web3 and Ethereum.</span>
            </p>
          </div>

          {/* Role Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {roles.map((role, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br ${role.color} to-transparent border border-white/5 hover:border-white/20 transition-all group`}
              >
                <div className="p-2 bg-zinc-800 rounded-lg text-orange-400 group-hover:scale-110 transition-transform">
                  {role.icon}
                </div>
                <p className="text-zinc-200 font-medium">{role.title}</p>
              </div>
            ))}
          </div>

          {/* Social Link Trigger */}
          <button className="flex items-center gap-3 text-orange-300 hover:text-orange-400 transition-colors mt-4 font-medium group">
            Check out my GitHub 
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;