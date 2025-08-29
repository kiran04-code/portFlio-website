import React from "react";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiRedux } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { motion } from "motion/react";
import { GrGraphQl } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";
const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", effect: "hover:-translate-y-2" },
    { icon: <FaCss3 />, name: "CSS", effect: "hover:rotate-6" },
    { icon: <IoLogoJavascript />, name: "JavaScript", effect: "hover:scale-110" },
    { icon: <SiTypescript />, name: "Typescript", effect: "hover:scale-110" },
    { icon: <FaNodeJs />, name: "Node.js", effect: "hover:rotate-[-12deg]" },
    { icon: <SiExpress />, name: "Express.js", effect: "hover:translate-x-3" },
    { icon: <GrGraphQl />, name: "GraphQl", effect: "hover:translate-x-3" },
    { icon: <IoLogoReact />, name: "React", effect: "hover:scale-105 hover:rotate-3" },
    { icon: <RiNextjsFill />, name: "Nextjs", effect: "hover:scale-105 hover:rotate-3" },
    { icon: <SiRedux />, name: "Redux", effect: "hover:rotate-12" },
    { icon: <BiLogoMongodb />, name: "MongoDB", effect: "hover:scale-110" },
    { icon: <FaGitAlt />, name: "Git", effect: "hover:-rotate-6" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS", effect: "hover:-rotate-12"  },
    { icon: <SiPostman />, name: "Postman", effect: "hover:-rotate-6" },
    { icon: <FaDocker />, name: "Docker", effect: "hover:-rotate-6" },
  ];

return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "anticipate" }}
      whileInView={{ opacity: 1, y: [40, 0] }}
      className="w-full px-6 py-16 bg-gradient-to-b from-black via-[#181818] to-black"
      id="Skills"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm sm:text-base text-zinc-400 font-medium">
          My Technical Skills
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200 text-3xl sm:text-4xl md:text-5xl font-extrabold relative inline-block">
          Tech Stacks
          <span className="block w-16 h-[3px] bg-orange-300 mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="w-24 sm:w-28 md:w-32 h-28 bg-zinc-900/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-orange-500/30 flex flex-col items-center justify-center p-4 transition-all duration-300"
          >
            <div className="text-orange-300 text-4xl sm:text-5xl mb-2 group-hover:animate-pulse">
              {skill.icon}
            </div>
            <h2 className="text-white text-sm sm:text-base font-medium text-center">
              {skill.name}
            </h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
