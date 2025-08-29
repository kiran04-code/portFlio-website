import React from 'react'
import { motion } from 'motion/react'
const Stack03 = () => {
  return (
    <motion.div   >
         <div
        className="relative bg-[#131313] p-8 w-62 h-75 text-white
                   text-center font-bold flex flex-col items-center justify-center rounded-4xl
              
                   sm:ml-26 mt-10" 
      >
        <img
          src="https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75"
          alt="Full Stack MERN Icon"
          className="w-32 h-20 mb-4 object-contain rounded-full"
          
        />
        <p className="text-lg font-bold  ">NextJs</p>
      </div>
    </motion.div>
  )
}

export default Stack03
