import { useState, useEffect } from 'react'
import './App.css'
import Reloader from './components/reloader'
import Title from './components/title'
import Navbar from './components/navbar'
import Skills from "./components/skills"
import About from "./components/Aboute"
import ContactMe from "./components/contact"
import Footer from './components/footer'
import Footer2 from './components/footer2'
import Stack from './components/stack'
import Animations from "./components/animation"
import Animation2 from './components/animation2'
import Footer3 from './components/Footer3'
import Project from './components/project'
import { motion, useScroll } from "motion/react"
import SkillOrbit from './components/footer'

function App() {
  const [showContent, setShowContent] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-screen bg-black text-white relative">
      <Reloader />
      {showContent && (
        <>
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="w-full bg-gradient-to-l z-200 fixed from-orange-300 to-orange-900 h-3"
          ></motion.div>


          <Navbar />
          <Title />

          {/* Top-right image */}
          <img
            src="/background-S4EJ6pKPdfdf.png" // <-- Replace this with your image path
            alt="top right"
            className="absolute md:top-0 md:right-0 top-25   w-[500vw]" // adjust size as needed
          />
          <About />
          <Project />
          <Stack />
          <SkillOrbit />
          <Footer2 />
          <Footer3 />
        </>
      )}
    </div>
  )
}

export default App
