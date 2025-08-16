import React from 'react'
import { motion } from 'motion/react'
const Footer3 = () => {
  return (
  <div className="bg-black flex items-center justify-center ">
 <motion.h1 initial={{
  opacity:0
 }}
  whileInView={{
 opacity:1,
 y:[0,30]
 }} 
 transition={{
  duration:1,
  
 }}
 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-extrabold text-center bg-gradient-to-b from-orange-300 to-orange-900 text-transparent bg-clip-text">
  KIRAN RATHOD
</motion.h1>

</div>


  )
}

export default Footer3
