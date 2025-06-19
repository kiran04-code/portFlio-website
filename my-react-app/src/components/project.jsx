import React from 'react'
import Project1 from './projectscomponents/Project1'
import { NavLink } from 'react-router-dom'

const Project = () => {
  return (
    <div className=" sm:ml-12 md:ml-20 p-5">
       <div className="w-full flex justify-center items-center">
     <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[4rem] font-extrabold bg-gradient-to-b from-orange-300 to-orange-900 text-transparent bg-clip-text flex ">
        Project
      </h1>
   </div>
      <div className='flex mt-5 gap-2 flex-wrap items-center justify-center sm:justify-start'>
     <NavLink to="/project1"><Project1/></NavLink>
      </div>
    </div>
  )
}

export default Project

