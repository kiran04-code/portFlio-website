import React from "react";
import { 
  SiHtml5, SiCss3, SiCplusplus, SiSolidity, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, 
  SiGraphql, SiMongodb, SiPrisma, SiRedis, SiSocketdotio, 
  SiWebrtc, SiDocker, SiKubernetes, SiGit, SiGithub, 
  SiPostman, SiAmazonec2, SiWeb3Dotjs, SiEthereum 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const SkillOrbit = () => {
  const tiers = [
    {
      id: "inner",
      radius: "280px",
      duration: "20s",
      skills: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-[#000000]" />, name: "Next.js" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
        { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
        { icon: <SiJavascript className="text-[#F7DF1E]" />, name: "JavaScript" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
      ],
    },
    {
      id: "middle",
      radius: "500px",
      duration: "35s",
      reverse: true,
      skills: [
        { icon: <SiExpress className="text-[#000000]" />, name: "Express.js" },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
        { icon: <SiPrisma className="text-[#2D3748]" />, name: "Prisma ORM" },
        { icon: <SiRedis className="text-[#DC382D]" />, name: "Redis" },
        { icon: <SiGraphql className="text-[#E10098]" />, name: "GraphQL" },
        { icon: <TbApi className="text-[#0081CB]" />, name: "REST APIs" },
        { icon: <SiSocketdotio className="text-[#010101]" />, name: "Socket.IO" },
        { icon: <SiWebrtc className="text-[#333333]" />, name: "WebRTC" },
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React Native" },
      ],
    },
    {
      id: "outer",
      radius: "750px",
      duration: "50s",
      skills: [
        { icon: <SiHtml5 className="text-[#E34F26]" />, name: "HTML5" },
        { icon: <SiCss3 className="text-[#1572B6]" />, name: "CSS3" },
        { icon: <SiCplusplus className="text-[#00599C]" />, name: "C++" },
        { icon: <SiSolidity className="text-[#363636]" />, name: "Solidity" },
        { icon: <SiDocker className="text-[#2496ED]" />, name: "Docker" },
        { icon: <SiKubernetes className="text-[#326CE5]" />, name: "Kubernetes" },
        { icon: <SiGit className="text-[#F05032]" />, name: "Git" },
        { icon: <SiGithub className="text-[#181717]" />, name: "GitHub" },
        { icon: <SiPostman className="text-[#FF6C37]" />, name: "Postman" },
        { icon: <SiAmazonec2 className="text-[#FF9900]" />, name: "EC2" },
         { icon: <SiReact className="text-[#61DAFB]" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-[#000000]" />, name: "Next.js" },
        { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
        { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
        { icon: <SiJavascript className="text-[#F7DF1E]" />, name: "JavaScript" },
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
        { icon: <SiWeb3Dotjs className="text-[#F16822]" />, name: "Web3" },
        { icon: <SiEthereum className="text-[#3C3C3D]" />, name: "Etherjs" },
      ],
    },
  ];

  return (
    <section className="relative w-full py-5 min-h-[800px] overflow-hidden flex flex-col items-center " id="Skills">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-[#f8916221]" />

      {/* Orbit Container */}
      <div className="relative w-full max-w-[1500px] h-[700px] flex justify-center items-center mt-10">
        
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="absolute rounded-full border border-slate-200/60 transition-all duration-700"
            style={{
              width: tier.radius,
              height: tier.radius,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* The Rotating Ring */}
            <div
              className={`relative w-full h-full rounded-full animate-orbit ${tier.reverse ? 'direction-reverse' : ''}`}
              style={{ '--duration': tier.duration }}
            >
              {tier.skills.map((skill, index) => (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `
                      rotate(${(360 / tier.skills.length) * index}deg) 
                      translateY(calc(-${tier.radius} / 2))
                    `,
                  }}
                >
                  {/* Counter-rotating icon so it stays upright */}
                  <div className="animate-orbit-reverse group relative" style={{ '--duration': tier.duration }}>
                    <div className="bg-white p-3 md:p-4 rounded-full shadow-lg border border-slate-100 text-2xl md:text-3xl flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:border-blue-200 cursor-pointer">
                      {skill.icon}
                    </div>
                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Central Character/Avatar - Perfectly Centered */}
        <div className="relative z-20  flex items-center justify-center">
          <div className="w-40 p-5 h-40 flex items-center justify-center  md:w-100 md:h-105 rounded-full overflow-hidden border-8 border-white shadow-2xl relative bg-white">
            <img
              src="/Gemini_Generated_Image_tpj19dtpj19dtpj1-removebg-preview.png"
              alt="Avatar"
              className="w-[90%] h-[100%] object-cover"
            />
            <div className="absolute inset-0 bg-blue-500/5 hover:bg-transparent transition-colors" />
          </div>
        </div>
      </div>

      {/* Header Content */}
      <div className="text-center z-30 py-15 px-6">
        <h2 className="text-5xl font-extrabold tracking-tight text-white mb-4">
          Technical <span className="text-[#F16822] ">Ecosystem</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
          A visualization of my current tech stack. Hover over any icon to explore or visit my
          <a href="#" className="ml-1 text-[#F16822] font-medium hover:underline">GitHub</a>.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit {
          animation: orbit var(--duration) linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit var(--duration) linear infinite reverse;
        }
        .direction-reverse {
          animation-direction: reverse;
        }
        .animate-orbit:hover, .animate-orbit:hover .animate-orbit-reverse {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default SkillOrbit;