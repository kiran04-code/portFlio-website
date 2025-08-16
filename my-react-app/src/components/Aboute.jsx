import React from "react";

const About = () => {
  return (
    <div className="w-full text-white flex justify-center items-start pt-24 px-4 z-80 relative" id="About">
      <div className="w-full max-w-5xl bg-zinc-900 p-8 rounded-3xl shadow-lg">
        <h1 className="text-orange-300 font-bold text-4xl sm:text-5xl mb-6">
         Know  <span>About Me!</span>
        </h1>
        <div className=" md:flex md:flex-col md:gap-2 md:w-full ">
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl md:w-full "> Web Developer&nbsp;|&nbsp;
          <span className="text-2xl font-semibold text-orange-300">MERN Stack Developer</span>&nbsp;|&nbsp;
          Web3 Enthusiast&nbsp;|&nbsp;Software Developer <br />
          
          Hi! I’m <span className="text-2xl font-semibold">Kiran Santosh Rathod</span>, a first-year Computer Science Engineering student at VIT, Pune.</p>
        
        <p>  I focus on <span className=" text-xl font-semibold">Blockchain</span>, and enjoy exploring <span className="text-2xl font-semibold">hackathons</span> and <span className=" text-2xl font-semibold">DevOps</span>.
     
          I'm passionate about full-stack development and love building real-world <span className=" text-xl font-semibold">MERN stack projects</span> while diving into next-gen <br /> <span className=" text-2xl font-semibold">Web3 technologies</span>.</p>
     
        </div>
      </div>
    </div>
  );
};

export default About;
