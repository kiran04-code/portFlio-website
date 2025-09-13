import React from 'react'
import Project001 from './projectscomponents/proj01'
import { useParams } from 'react-router-dom' 

const Project = () => {
  const {id} = useParams
   console.log(id)
    return (
    <div className="mt-10">
       <div className="w-full flex justify-center items-center">
     <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[4rem] font-extrabold bg-gradient-to-b from-orange-300 to-orange-900 text-transparent bg-clip-text flex ">
        Projects
      </h1>
   </div>
      <div className=''>
       <Project001/>
      </div>
    </div>
  )
}

export default Project

