import React from "react"
import { RiSendPlaneFill } from "react-icons/ri";
const ContactMe = ()=>{
    return(
   <div className="w-full h-[7%]  flex justify-center z-10 relative  ">
     <div className="flex gap-2 p-2 rounded-full  border-orange-300 border-b-4">
        <RiSendPlaneFill className="text-orange-300 text-[20px]"/><h1 className="text-white "><button>Contact Me</button></h1>
    </div>
   </div>
    )
}
export default ContactMe