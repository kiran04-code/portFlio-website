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
import Project from './components/Project'

function App() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000) // 3 seconds

    return () => clearTimeout(timer)
  }, [])


return (
    <div className='w-full h-screen bg-black text-white'>
      <Reloader />
      {showContent && (
        <>
          <Navbar />
          <Title />
          <Animations />
          <ContactMe />
          <About />
          <Project/>
          <Stack />
          <Skills />
          <Animation2 />
          <Footer />
          <Footer2 />
          <Footer3 />

          {/* All routes go inside <Routes> in React Router v6 */}
          
        </>
      )}
    </div>
  
);

}

export default App
