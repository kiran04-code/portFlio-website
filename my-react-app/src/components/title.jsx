import React from "react";

const Title = () => {
  return (
    <div className="w-full h-[35%] flex items-center justify-center z-10 ">
      <div className="px-4 md:px-0 text-center mt-15">
        <h1 className="text-white font-bold text-4xl md:text-5xl">
          Yes! I'm a{" "}
          <span className="text-orange-300 font-bold  md:text-7xl">
            Software Developer.
          </span>
        </h1>
        <p className="text-white mt-4">
          Thanks for visiting my portfolio. Explore my work, skills, and aspirations.
        </p>
      </div>
    </div>
  );
};

export default Title;
