import React from 'react'
import { motion } from 'motion/react'
const Stack02 = () => {
  return (
    <motion.div   >
         <div
        className="relative bg-[#131313] p-8 w-62 h-75 text-white
                   text-center font-bold flex flex-col items-center justify-center rounded-4xl
              
                   sm:ml-26 mt-10" 
      >
        <img
          src="\1_255iTWNk6H1N3_QZIBIAUA.png"
          alt="Full Stack MERN Icon"
          className="w-32 h-20 mb-4 object-contain rounded-full"
          
        />
        <p className="text-lg font-bold">webSocket</p>
      </div>
    </motion.div>
  )
}

export default Stack02
