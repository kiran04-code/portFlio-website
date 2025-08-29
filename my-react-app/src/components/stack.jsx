import React from "react";
import Stack01 from "./skillstack/staks01";
import Stack02 from "./skillstack/staks02";
import Stack03 from "./skillstack/stack03";
import { motion } from "motion/react";

const Stack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: [0, -15] }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="ml-5"
    >
      {/* Section Title */}
      <div className="w-full flex justify-center items-center mb-10 mt-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5rem] font-extrabold bg-gradient-to-b from-orange-300 to-orange-900 text-transparent bg-clip-text">
          Skills
        </h1>
      </div>

      {/* Skills Grid */}
      <div
        className="w-full min-h-[40vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
                   justify-items-center items-center p-6 rounded-xl"
      >
        {/* Skill Card 1 */}
        <div className="w-full h-full p-6 rounded-xl bg-[#2c2822] sshadow-lg">
           <h1 className="text-3xl font-bold bg-gradient-to-b  from-gray-600 to-orange-400 bg-clip-text text-transparent bottom-0  ">MERN</h1>

          <Stack01 />
        </div>

        {/* Skill Card 2 */}
        <div className="w-full h-full p-6 rounded-xl bg-[#2c2822] shadow-lg">
          <h1 className="text-3xl font-bold bg-gradient-to-b  from-gray-600 to-orange-400 bg-clip-text text-transparent bottom-0  ">WEBSOCKET</h1>
          <Stack02 />
        </div>

        {/* Skill Card 3 */}
        <div className="w-full h-full p-6 rounded-xl bg-[#2c2822] shadow-lg">
          <h1 className="text-3xl font-bold bg-gradient-to-b  from-gray-600 to-orange-400 bg-clip-text text-transparent bottom-0  ">NextJs</h1>
          <Stack03 />
        </div>
      </div>
    </motion.div>
  );
};

export default Stack;
