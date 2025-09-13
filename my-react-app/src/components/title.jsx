import React from "react";
import { SiReaddotcv } from "react-icons/si";
import { MdContactEmergency } from "react-icons/md";
const Title = () => {
  return (
    <div className="w-full h-[35%]  flex flex-col md:flex-row md:justify-start items-center md:items-start relative md:px-40 z-40 px-4">
      {/* Text Section */}
      <div className="w-full md:w-auto text-center md:text-left md:mr-10 mt-6 md:mt-0">
        <h1 className="text-white font-bold text-4xl md:text-5xl md:leading-[1.2]">
          Yes! I'm a <br />
          <span className="text-orange-300 font-semibold md:text-[7vw]">
            Software Developer.
          </span>
        </h1>
        <p className="text-white mt-4">
          Thanks for visiting my portfolio. Explore my work, skills, and aspirations.
        </p>
        <div className="flex justify-center md:justify-start gap-2 mt-4">
          
            <a
              href="/kiran_Resumee.pdf"
              download="kiran_Resumee.pdf"
              className="p-2 bg-[#393a3d] text-white rounded-[10px]  justify-center items-center gap-2 cursor-pointer flex"
            >
              <SiReaddotcv/>
              Download CV
            </a>

       
          <button className="p-2 border-2 border-gray-600 text-white rounded-[10px] flex justify-center items-center gap-2">
            <MdContactEmergency/>
            Contact Me
          </button>
        </div>
      </div>

      {/* Optional: Add an image or illustration here if needed */}
    </div>
  );
};

export default Title;
