import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Footer2 from '../components/footer2';
import Footer3 from '../components/Footer3';
import { FaGithub } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { projetcs } from '../assets/assets';
import { motion ,useScroll } from 'motion/react';
import ShoWVideo from './ShoWVideo';
const Project01 = () => {
  const { projs } = useParams()
  const projectFounded = projetcs.filter((items) => items.name === projs)
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const {scrollYProgress} =useScroll()
const [show,setshow] = useState(false)
const [src,setsrc] = useState('')


  return (
    <div>
      {

        projectFounded.map((items, index) =>

          <div className=" relative text-white min-h-screen bg-black">
             <motion.div style={{
          scaleX:scrollYProgress
        }}   className='w-full bg-gradient-to-l z-200 fixed from-orange-300 to-orange-900 h-3'></motion.div>
            <Navbar />
            
            <div className="w-full min-h-screen px-10 py-10 flex flex-col lg:flex-row items-center gap-10">
              {/* Text Content */}
              <div className="flex-1 space-y-6">


                <h1 className="text-3xl lg:text-4xl font-extrabold text-orange-300 ">
                  {items.tittle}
                </h1>
                <p className="text-gray-300 leading-relaxed mt-2">
                  {items.description}
                </p>

                <div>
                  <h2 className="font-semibold text-lg text-orange-300 mb-1">🧠 Why I Built It</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {
                      items.whybuild.map((impt, index) =>
                        <li>{impt.text}</li>
                      )
                    }
                  </ul>
                </div>

                <div>
                  <h2 className="font-semibold text-lg text-orange-300 mb-1">🔧 Tech Stack</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {items.techTASK.map((section, index) => {-0
                      const key = Object.keys(section)[0];
                      const value = section[key];
                      return (
                        <li key={index}>
                          <strong>{key}:</strong> {value[0].text}
                        </li>
                      );
                    })}
                  </ul>

                </div>

                <div>
                  <h2 className="font-semibold text-lg text-orange-300 mb-1">✨ Key Features</h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {
                      items.keyfaeture.map((item, indwex) =>
                        <li>{item.text}</li>
                      )
                    }
                  </ul>
                </div>

                <div className="w-full flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6">
                  {/* GitHub Link */}
                  <div className="flex gap-2 items-center px-4 py-2 border border-orange-300 rounded-3xl bg-black hover:bg-orange-950 transition">
                    <a
                      href={items.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-orange-300"
                    >
                      <FaGithub className="text-orange-300 text-2xl mr-2" />
                      <span className="font-medium">GitHub</span>
                    </a>
                  </div>

                  {/* Live Project Link */}
                  <div className="bg-black px-2 py-2 rounded-3xl flex gap-2 border border-orange-300 hover:bg-orange-950 transition">
                    <h2 className="text-lg font-bold text-orange-300">🔗 Live Project:</h2>
                    <a
                      href={items.liveproject}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-300 transition"
                    >
                      Visit QuickChat Live
                    </a>
                  </div>
                 
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 max-w-md w-full h-[300px] overflow-y-auto space-y-5 pr-2 scroll-box">
                {/* Image Cards */}
                {items.projectImage.map((src, idx) => (
                  <div
                    key={idx}
                    className="p-5 border-2 border-orange-300 rounded-2xl backdrop-blur-md shadow-orange-400 bg-white/10"
                  >
                    <div className="w-full flex gap-1 mb-3">
                      <div className="w-[12px] h-[12px] bg-red-600 rounded-full"></div>
                      <div className="w-[12px] h-[12px] bg-yellow-600 rounded-full"></div>
                      <div className="w-[12px] h-[12px] bg-green-600 rounded-full"></div>
                    </div>
                    <img
                      src={src}
                      alt="QuickChat Preview"
                      
                      className="shadow-2xl w-full rounded-[7px]"
                    />
                  </div>
                ))}
                {/* {items.projectvIDEO.map((src, idx) => (
                  <div
                    key={idx}
                    className="p-5 border-2 border-orange-300 rounded-2xl backdrop-blur-md shadow-orange-400 bg-white/10"
                  >
                    <div className="w-full flex gap-1 mb-3">
                      <div className="w-[12px] h-[12px] bg-red-600 rounded-full"></div>
                      <div className="w-[12px] h-[12px] bg-yellow-600 rounded-full"></div>
                      <div className="w-[12px] h-[12px] bg-green-600 rounded-full"></div>
                    </div>
                    <video
                      src={src}  onClick={()=>{setshow(!show);setsrc(src)}}
                      loop autoPlay muted
                      alt="QuickChat Preview"
                      className="shadow-2xl w-full rounded-[7px]"
                    />
                  </div>
                ))} */}
              </div>
          
            </div>

            <Footer />
            <Footer2 />
            <Footer3 />
          </div>

        )}
    </div>
  );
};

export default Project01;
