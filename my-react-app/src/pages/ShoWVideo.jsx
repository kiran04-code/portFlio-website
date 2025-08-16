import React from 'react'

const ShoWVideo = ({src}) => {
  return (
    <div  onClick={()=>src.setshow(false)} className="z-20 flex left-0 right-0 absolute w-full h-screen justify-center  items-center md:items-center">
  <video
    src={src.src}
    className="w-[300px] h-[300px] md:w-full md:h-full rounded-xl  shadow-2xl "
    autoPlay
    loop
    muted
  />
</div>

  )
}

export default ShoWVideo
