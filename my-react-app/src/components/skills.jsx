import React from "react";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiRedux } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", effect: "hover:-translate-y-2" },
    { icon: <FaCss3 />, name: "CSS", effect: "hover:rotate-6" },
    { icon: <IoLogoJavascript />, name: "JavaScript", effect: "hover:scale-110" },
    { icon: <SiTypescript />, name: "Typescript", effect: "hover:scale-110" },
    { icon: <FaNodeJs />, name: "Node.js", effect: "hover:rotate-[-12deg]" },
    { icon: <SiExpress />, name: "Express.js", effect: "hover:translate-x-3" },
    { icon: <IoLogoReact />, name: "React", effect: "hover:scale-105 hover:rotate-3" },
    { icon: <SiRedux />, name: "Redux", effect: "hover:rotate-12" },
    { icon: <BiLogoMongodb />, name: "MongoDB", effect: "hover:scale-110" },
    { icon: <FaGitAlt />, name: "Git", effect: "hover:-rotate-6" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS", effect: "hover:-rotate-12"  },
    { icon: <SiPostman />, name: "Postman", effect: "hover:-rotate-6" },
  ];

  return (
    <div className="w-full px-4 py-12 bg-black ">
      {/* Gradient Title */}
      <div className="text-center mb-10">
        <p className="text-sm sm:text-base text-zinc-400 font-medium">My Technical Skills</p>
        <h2 className="text-transparent bg-clip-text bg-orange-300 text-2xl sm:text-3xl md:text-4xl font-extrabold font-poppins">
          Tech Stacks.
        </h2>
      </div>

      {/* Grid of Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center px-2 sm:px-6 md:px-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`w-24 sm:w-28 md:w-32 bg-zinc-900 hover:bg-orange-500/20 rounded-tl-[20px] rounded-br-[20px] flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out ${skill.effect}`}
          >
            <div className="text-orange-300 text-4xl sm:text-5xl mb-2">{skill.icon}</div>
            <h2 className="text-white text-sm sm:text-base font-semibold text-center">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
