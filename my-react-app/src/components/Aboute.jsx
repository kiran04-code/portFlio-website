import React from "react";

const About = () => {
  return (
    <div className="w-full  text-white flex justify-center items-start pt-24 px-4 z-80 relative">
      {/* Main container */}
      <div className="w-full max-w-5xl bg-zinc-900 p-8 rounded-tl-[25px] rounded-br-[25px] shadow-lg">
        {/* Heading */}
        <h1 className="text-orange-300 font-bold text-4xl sm:text-5xl  text-center">
          About Me!
        </h1>

        {/* Text content */}
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
          👨‍💻 Passionate Web Developer |{" "}
          <span className="text-orange-300 font-semibold">MERN Stack Developer</span> | Web3 Enthusiast | Software Developer
          <br />
          Hi! I’m{" "}
          <span className="text-orange-300 font-semibold">Kiran Santosh Rathod</span>, a first-year Computer Science Engineering student at VIT, Pune.
          <br />
          I focus on{" "}
          <span className="text-orange-300 font-semibold">Blockchain</span>, and enjoy exploring{" "}
          <span className="text-orange-300 font-semibold">hackathons</span> and{" "}
          <span className="text-orange-300 font-semibold">DevOps</span>.
          <br />
          I'm passionate about full-stack development and building real-world MERN stack projects while diving into next-gen Web3 technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
