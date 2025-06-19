import React from 'react'

const Project1 = () => {
    return (
    <div className='ml-2  w-62 h-75 border-2 overflow-hidden border-orange-300 rounded-xl items-baseline-last flex flex-col '>
      <div className='w-full  bg-amber-900 p-2 flex gap-2  '>
        <div className='w-[15px] h-[15px] bg-red-600 rounded-full'></div>
        <div className='w-[15px] h-[15px] bg-green-600 rounded-full'></div>
        <div className='w-[15px] h-[15px] bg-yellow-400 rounded-full'></div>
      </div>
        <img src="\02.png" alt="" className='py-1 px-1 h-[60%] object-center rounded-[7px] overflow-hidden' />
        <h1 className='bg-gradient-to-b px-20 font-bold from-orange-300 to-orange-900 text-transparent bg-clip-text flex text-[15px]'>Chat Apps </h1>
        <div className='w-full px-2 flex flex-wrap gap-1 text-amber-500 bg-zinc-800 p-2 text-[15px] '>
            
            <p>#React.js</p>
            <p>#node.js</p>
            <p>#express.js</p>
            <p>#MongoDB</p>
            <p>#socket.io</p>
            <p>#TailwindCss</p>
        </div>
    </div>
  )
}

export default Project1
