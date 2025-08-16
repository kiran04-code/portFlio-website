import React from 'react'
import { ProjectThambnel } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
const Project001 = () => {
  const navigate = useNavigate()
  return (
    <motion.div 
     initial={{
     opacity:0
     }}
    whileInView={{
      opacity:1,
      y:[50,-20]
    }}
    transition={{
      duration:0.7,

    }}
     className="flex flex-wrap gap-30 p-8 md:ml-1 ml-4 "  >
      {
        ProjectThambnel.map((items, index) => (
          <motion.div whileHover={{
            y:[0,-8,0]
            
          }}
          transition={{
            duration:1

          }}
            key={index}
            className="w-64 h-80 border-2 overflow-hidden border-orange-300 rounded-xl flex flex-col"
            onClick={()=>{navigate(`/project/${items.name}`)}}
          >
            {/* Browser Top Bar */}
            <div className="w-full bg-amber-900 p-2 flex gap-2">
              <div className="w-[12px] h-[12px] bg-red-600 rounded-full"></div>
              <div className="w-[12px] h-[12px] bg-green-600 rounded-full"></div>
              <div className="w-[12px] h-[12px] bg-yellow-400 rounded-full"></div>
            </div>

            {/* Project Image */}
            <img
              src={items.themabaiimg}
              alt={items.projectName}
              className="py-1 px-1 h-[60%] object-center rounded-[7px] overflow-hidden"
            />

            {/* Project Name */}
            <h1 className="bg-gradient-to-b px-15 font-bold  justify-center items-center from-orange-300 to-orange-900 text-transparent bg-clip-text flex text-[15px] text-nowrap text-center ">
              {items.projectName}
            </h1>

            {/* Tech Stack */}
            <div className="w-full px-2 flex flex-wrap gap-1 text-amber-500 bg-zinc-800 p-2 text-[14px]">
              {items.tech.map((techItem, techIndex) => (
                <p key={techIndex}>#{techItem.techno}</p>
              ))}
            </div>
          </motion.div>
        ))
      }
    </motion.div>
  )
}

export default Project001
