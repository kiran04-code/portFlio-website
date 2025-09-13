import React from "react";

const About = () => {
  const roles = [
    "Full-Stack Developer",
    "Next.js Developer",
    "Web3 Enthusiast",
    "UI/UX Enthusiast",
  ];

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center relative px-4 py-10 md:py-24 z-[90] "
      id="About"
    >
      <div className="w-full max-w-5xl bg-[#1e1e1f] p-10 md:p-10 border-1 border-dashed border-orange-300 shadow-2xl  transition-all duration-500">
        <h1 className="text-orange-300 font-extrabold text-4xl sm:text-5xl mb-10 text-center">
          Know <span className="text-white">About Me!</span>
        </h1>

        {/* Profession Badges - New Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-[#29292b] border border-orange-400 hover:bg-orange-300 hover:text-zinc-900 text-orange-300 font-semibold px-6 py-4 rounded-3xl shadow-lg flex items-center justify-center text-center transition-all duration-300 cursor-default"
            >
              {role}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex flex-col justify-center gap-4">
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mt-2">
              Hi! I’m{" "}
              <span className="text-orange-300 font-bold text-lg sm:text-xl">
                Kiran Santosh Rathod
              </span>
              , a second-year Computer Science Engineering student at VIT, Pune.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mt-2">
              I love crafting clean, scalable, and efficient web applications that
              merge functionality with modern design principles.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              I focus on{" "}
              <span className="text-orange-300 font-semibold text-lg sm:text-xl">
                Ethereum
              </span>{" "}
              and{" "}
              <span className="text-orange-300 font-semibold text-lg sm:text-xl">
                Web3 technologies
              </span>
              , building modern web applications with{" "}
              <span className="text-orange-300 font-semibold text-lg sm:text-xl">
                Next.js
              </span>{" "}
              and full-stack development.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mt-2">
              I'm passionate about exploring decentralized apps, developing real-world{" "}
              <span className="text-orange-300 font-semibold text-lg sm:text-xl">
                Full-Stack Projects
              </span>{" "}
              and diving into the next-generation Web3 ecosystems.
            </p>
          </div>
        </div>

        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent mt-12 rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
