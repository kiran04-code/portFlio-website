import React from "react";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiExpress, SiRedux, SiTypescript, SiPostman, SiWebrtc } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3 />, name: "CSS" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <TbBrandCpp />, name: "C++" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <IoLogoReact />, name: "React" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <BiLogoMongodb />, name: "MongoDB" },

];

const Footer = () => {
  const chunked = [];
  for (let i = 0; i < skills.length; i += 5) {
    chunked.push(skills.slice(i, i + 5));
  }
  return (
    <div className="relative w-full py-6 space-y-10" id="Skills" >
      {chunked.map((row, rowIndex) => (
        <div key={rowIndex} className="relative">

          <div className="grid grid-cols-5 gap-6 justify-items-center relative z-[90] p-3">
            {row.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-black text-orange-300 md:text-4xl p-3 border-2 border-orange-300 rounded-4xl z-[90]"
              >
                {skill.icon}
              </div>
            ))}
          </div>

          <div
            className="absolute md:top-10  top-9 -bottom-4 left-0 w-full h-0.5 -z-[90]"
            style={{
              background:
                "linear-gradient(to right, transparent, #fb923c, #fb923c, transparent)",
            }}
          ></div>
        </div>
      ))}
      <div className="flex flex-col md:flex-row md:px-25 gap-10 md:gap-15 justify-evenly w-full py-10">

        <div className="relative grid grid-cols-4 md:px-0 px-3 md:grid-cols-2 gap-x-10 md:gap-x-55 gap-y-6 md:gap-y-0 mr-0 md:mr-7">
          <div
            className=" md:block absolute w-full top-8 left-0 md:w-[37vw] h-0.5 -z-[80] -translate-y-1/2"
            style={{
              background:
                "linear-gradient(to right, transparent, #fb923c, #fb923c, transparent)",
            }}
          ></div>

          {[SiRedux, RiTailwindCssFill, SiPostman, GrGraphQl].map((Icon, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 z-[90] bg-black text-orange-300 border-2 border-orange-300 rounded-full text-2xl md:text-3xl"
            >
              <Icon />
            </div>
          ))}
        </div>
        <div className="md:hidden  relative grid grid-cols-4 px-3 md:grid-cols-2 gap-x-10 md:gap-x-55 gap-y-6 md:gap-y-0 mr-0 md:mr-7 mt-8 md:mt-0">
          {/* Line for right side (hidden on mobile) */}
          <div
            className=" md:block absolute w-full top-8 right-0 md:w-[35vw] h-0.5 -z-[80] -translate-y-1/2"
            style={{
              background:
                "linear-gradient(to right, transparent, #fb923c, #fb923c, transparent)",
            }}
          ></div>

          {[FaGitAlt, FaGithub, FaDocker, SiWebrtc].map((Icon, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 z-[90] bg-black text-orange-300 border-2 border-orange-300 rounded-full text-2xl md:text-3xl"
            >
              <Icon />
            </div>
          ))}
        </div>
        {/* Middle Image + Text */}
        <div className="text-center px-4 md:px-10 relative bottom-0 md:bottom-11 mt-8 md:mt-0">
          <div className="flex justify-center items-center mb-4">
            <img src="/Gemini_Generated_Image_tpj19dtpj19dtpj1-removebg-preview.png" alt="stack" className="w-48 md:w-45" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-orange-300">
            Stack & Skills
          </h1>
        </div>
        <p className="text-center md:hidden ">These are some of my tech skills, check out my github profile to learn more</p>
       
        <div className=" hidden  relative md:grid px-3  md:px-0 md:grid-cols-2 gap-x-10 md:gap-x-55 gap-y-6 md:gap-y-0 mr-0 md:mr-7 mt-8 md:mt-0">
  
          <div
            className=" md:block absolute w-full top-8 right-0 md:w-[35vw] h-0.5 -z-[80] -translate-y-1/2"
            style={{
              background:
                "linear-gradient(to right, transparent, #fb923c, #fb923c, transparent)",
            }}
          ></div>

          {[FaGitAlt, FaGithub, FaDocker, SiWebrtc].map((Icon, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 z-[90] bg-black text-orange-300 border-2 border-orange-300 rounded-full text-2xl md:text-3xl"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
        <div className="flex justify-center">
          <div className=" flex justify-center absolute bottom-20">
           <p className=" md:flex hidden mb-10 relative text-center ">These are some of my tech skills, check out my github profile to learn more</p>
        </div>
        </div>
    </div>
  );
};

export default Footer;
