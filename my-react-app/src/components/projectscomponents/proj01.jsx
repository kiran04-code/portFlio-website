import React from "react";
import { ProjectThambnel } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Project001 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full rounded-2xl px-4 md:px-6 mt-3 md:mt-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [40, 0] }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 p-6 bg-[#1a1a1a] rounded-2xl shadow-lg relative"
      >
        {ProjectThambnel.map((items, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/project/${items.name}`)}
            className="bg-[#111] text-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer flex flex-col border border-gray-800 group"
          >
            {/* Project Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={items.themabaiimg}
                alt={items.projectName}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p className="absolute bottom-2 left-2 bg-orange-400 text-xs px-3 py-1 rounded-full">
                Project
              </p>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow space-y-3">
              {/* Project Name */}
              <h1 className="text-lg md:text-xl font-semibold leading-snug hover:text-orange-400 transition">
                {items.projectName}
              </h1>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 text-sm text-orange-400">
                {items.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-zinc-800 px-2 py-1 rounded-md"
                  >
                    #{techItem.techno}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="mt-auto bg-gradient-to-r from-orange-300 to-orange-600 text-black font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}

        {/* Side Quote */}
        <h1 className="hidden md:block text-[40px] font-bold absolute right-4 bottom-4 bg-gradient-to-r from-gray-600 to-orange-400 bg-clip-text text-transparent">
          Code. Create. Inspire.
        </h1>
      </motion.div>
    </div>
  );
};

export default Project001;
