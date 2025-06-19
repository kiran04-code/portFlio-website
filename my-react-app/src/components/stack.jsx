import React from "react";
import Stack01 from "./skillstack/staks01";
import Stack02 from "./skillstack/staks02";
const Stack = () => {
  return (
   <div>
   <div className="w-full flex justify-center items-center">
     <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[4rem] font-extrabold bg-gradient-to-b from-orange-300 to-orange-900 text-transparent bg-clip-text flex ">
        Skills
      </h1>
   </div>
     <div
      className="w-full min-h-[40vh] bg-black flex flex-wrap  gap-8
                 justify-center sm:justify-start items-center" 
    >
      
      {/* Full Stack MERN Developer Card */}
     <Stack01/>
     <Stack02/>
    </div>
   </div>
  );
};

export default Stack;
