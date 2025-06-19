import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Footer2 from '../components/footer2'
import Footer3 from '../components/Footer3'
import { FaGithub } from "react-icons/fa6";
const Project001 = () => {
    return (
        <div className="text-white min-h-screen  bg-black">
            <Navbar />

            <div className="w-full min-h-screen px-10 py-10 flex flex-col lg:flex-row items-center gap-10">

                {/* Text Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-orange-300">
                        🚀 QuickChat – Real-Time Chat Application
                    </h1>

                    <p className="text-gray-300 leading-relaxed">
                        <strong className="text-white">QuickChat</strong> is a modern real-time chat application built using the <strong>MERN stack</strong> and <strong>Socket.IO</strong> for instant bi-directional communication. It allows users to chat live with others, see online statuses, and enjoy a smooth, responsive UI – all without page reloads.
                    </p>

                    <div>
                        <h2 className="font-semibold text-lg text-orange-300 mb-1">🧠 Why I Built It</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>To deepen my understanding of WebSockets and Socket.IO</li>
                            <li>To build a real-world app demonstrating real-time data flow</li>
                            <li>To tackle challenges like multi-user chat and status tracking</li>
                            <li>To improve frontend/backend synchronization skills</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg text-orange-300 mb-1">🔧 Tech Stack</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li><strong>Frontend:</strong> React, Tailwind CSS, React Router</li>
                            <li><strong>Backend:</strong> Node.js, Express.js</li>
                            <li><strong>Real-Time:</strong> Socket.IO</li>
                            <li><strong>Database:</strong> MongoDB (Mongoose)</li>
                            <li><strong>Deployment:</strong> Vite + Render</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold text-lg text-orange-300 mb-1">✨ Key Features</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li>Real-time messaging using Socket.IO</li>
                            <li> Online/offline user status</li>
                            <li>Clean and responsive UI</li>
                            <li> Scalable code architecture</li>
                            <li> User-friendly chat interface</li>
                        </ul>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6">
                        {/* GitHub Link */}
                        <div className="flex gap-2 items-center px-4 py-2 border-1 border-orange-300 rounded-3xl bg-black hover:bg-orange-950 transition">
                            <a
                                href="https://github.com/kiran04-code/QuickChats.com.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white hover:text-orange-300"
                            >
                                <FaGithub className="text-orange-300 text-2xl mr-2" />
                                <span className="font-medium">GitHub</span>
                            </a>
                        </div>

                        {/* Live Project Link */}
                        <div className="bg-black px-2 py-2 rounded-3xl flex gap-2 border-1 border-orange-300 hover:bg-orange-950 transition">
                            <h2 className="text-lg font-bold text-orange-300">🔗 Live Project:</h2>
                            <a
                                href="https://quickchats-com-5.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline hover:text-blue-300 transition"
                            >
                                Visit QuickChat Live
                            </a>
                        </div>
                    </div>

                </div>

                {/* Image */}
                <div className="flex-1 max-w-md w-full h-[300px] overflow-y-auto space-y-5 pr-2 scroll-box ">
                    {/* Image Card 1 */}
                    <div className="p-5 border-2 border-orange-300 rounded-2xl backdrop-blur-md    shadow-orange-400 bg-white/10">
                        <div className="w-full flex gap-1 mb-3">
                            <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
                            <div className="w-[15px] h-[15px] bg-yellow-600 rounded-full"></div>
                            <div className="w-[15px] h-[15px] bg-green-600 rounded-full"></div>
                        </div>
                        <img
                            src="/02.png"
                            alt="QuickChat Preview"
                            className="shadow-2xl w-full rounded-2xl"
                        />
                    </div>

                    {/* Image Card 2 */}
                    <div className="p-5 border-2 border-orange-300 rounded-2xl backdrop-blur-md    shadow-orange-400 bg-white/10">
                        <div className="w-full flex gap-1 mb-3">
                            <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
                            <div className="w-[15px] h-[15px] bg-yellow-600 rounded-full"></div>
                            <div className="w-[15px] h-[15px] bg-green-600 rounded-full"></div>
                        </div>
                        <img
                            src="/03.png"
                            alt="QuickChat Preview"
                            className="shadow-2xl w-full rounded-2xl"
                        />
                    </div>
                    <div className="p-5 border-2 border-orange-300 rounded-2xl backdrop-blur-md    shadow-orange-400 bg-white/10">
                        <div className="w-full flex gap-1 mb-3">
                            <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
                            <div className="w-[15px] h-[15px] bg-yellow-600 rounded-full"></div>
                            <div className="w-[15px] h-[15px] bg-green-600 rounded-full"></div>
                        </div>
                        <img
                            src="/01.png"
                            alt="QuickChat Preview"
                            className="shadow-2xl w-full rounded-2xl"
                        />
                    </div>

                </div>
           
            </div>
            <Footer />
            <Footer2 />
            <Footer3 />
        </div>
    )
}

export default Project001
