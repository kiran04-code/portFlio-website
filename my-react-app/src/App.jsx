import React, { useState } from "react";
import "./App.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Reloader from "./components/reloader";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import KhanaavalStory from "./components/KhanaavalStory";
import Experience from "./components/Experience";
import ProjectShowcase from "./components/ProjectShowcase";
import TechUniverse from "./components/TechUniverse";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <SmoothScroll>
      <div className="portfolio-root bg-black text-white selection:bg-white selection:text-black">
        <Reloader onComplete={() => setLoaderComplete(true)} />
        <CustomCursor />
        <Navbar />

        <main>
          {/* 1. Cinematic Hero with Monumental Typography & Parallax Portrait */}
          <Hero loaderComplete={loaderComplete} />

          {/* 2. Engineering Biography & Technical Philosophy */}
          <About />

          {/* 3. Flagship Production Case Study: Khanaaval.com */}
          <KhanaavalStory />

          {/* 4. Professional Industry Experience Timeline */}
          <Experience />

          {/* 5. Editorial Selected Projects Archive */}
          <ProjectShowcase />

          {/* 6. Interactive Technical Universe / Skills Ecosystem */}
          <TechUniverse />

          {/* 7. Cinematic Contact & Inquiry Section */}
          <ContactSection />
        </main>

        {/* 8. Luxury Editorial Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
