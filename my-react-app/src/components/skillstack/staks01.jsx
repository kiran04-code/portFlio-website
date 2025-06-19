import React from 'react'

const Stack01 = () => {
  return (
    <div>
         <div
        className="relative bg-zinc-900 rounded-xl p-8 w-62 h-75 text-white
                   text-center font-bold flex flex-col items-center justify-center
                   border-1 border-orange-300
                   sm:ml-26 mt-10" 
      >
        <img
          src="/MERN-logo.png"
          alt="Full Stack MERN Icon"
          className="w-32 h-20 mb-4 object-contain"
        />
        <p className="text-lg font-bold"> MERN Developer</p>
      </div>
    </div>
  )
}

export default Stack01
