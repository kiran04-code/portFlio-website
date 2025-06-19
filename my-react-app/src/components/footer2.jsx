import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer2 = () => {
  return (
    <div className="relative w-full bg-black py-6 px-4">
      {/* Top Gradient Border */}
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{
          background:
            "linear-gradient(to right, transparent, #fb923c, #fb923c, transparent)",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-white text-sm sm:text-base md:text-lg mb-3">
          Interested in collaborating or connecting with me?
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mb-5">
          <a href="https://www.linkedin.com/in/kiran-rathod-66b009331">
            <FaLinkedin className="text-[28px] text-orange-300 " />
          </a>
          <a href="https://github.com/kiran04-code" >
            <FaGithub className="text-[28px] text-orange-300 " />
          </a>
          <a href="#" >
            <IoLogoInstagram className="text-[28px] text-orange-300 " />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white text-xs sm:text-sm">
          © 2025 <span className="text-orange-300 font-bold border-b-2 border-2-orange"> Kiran Santosh Rathod</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer2;
