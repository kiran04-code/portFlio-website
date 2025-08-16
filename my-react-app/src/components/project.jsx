import React from 'react'
import Project001 from './projectscomponents/proj01'
import { useParams } from 'react-router-dom' 

const Project = () => {
  const {id} = useParams
   console.log(id)
    return (
    <div className=" sm:ml-12 md:ml-20 p-5">
       <div className="w-full flex justify-center items-center">
     <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[4rem] font-extrabold bg-gradient-to-b from-orange-300 to-orange-900 text-transparent bg-clip-text flex ">
        Project
      </h1>
   </div>
      <div className='flex mt-5 gap-2 flex-wrap items-center justify-center sm:justify-start'>
       <button ><Project001/></button>
      </div>
    </div>
  )
}

export default Project

