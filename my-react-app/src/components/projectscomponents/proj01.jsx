import React from "react";
import { ProjectThambnel } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Project001 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full bg-[#292522] rounded-2xl px-5 md:mt-5  mt-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [50, -20] }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6     
        md:rounded-br-full bg-[#5a4c39] rounded-2xl  border-1 border-orange-300 "
      >
        {ProjectThambnel.map((items, index) => (
          <motion.div
            key={index}
            whileHover={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate(`/project/${items.name}`)}
            className="bg-[#111] text-white rounded-xl  overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer flex flex-col"
          >
            {/* Project Image */}
            <img
              src={items.themabaiimg}
              alt={items.projectName}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col space-y-2">
              {/* Meta info (example: could be project type or time) */}
       

              {/* Project Name */}
              <h1 className="text-lg font-semibold leading-snug hover:text-orange-400 transition">
                {items.projectName}
              </h1>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 text-sm text-[#ffa137]">
                {items.tech.map((techItem, techIndex) => (
                  <span key={techIndex} className="bg-zinc-700 px-2 py-1 rounded-md">
                    #{techItem.techno}
                  </span>
                ))}
              </div>
              
            </div>
            
          </motion.div>
        ))}
   <h1 className="hidden md:flex text-2xl font-bold absolute right-0 bg-gradient-to-b  from-gray-600 to-orange-400 bg-clip-text text-transparent bottom-0">
  Code. Create. Inspire.
</h1>
      </motion.div>
    </div>
  );
};

export default Project001;
