import React, { useState } from "react";
import "./App.css";
import "./scroll-experience.css";
import AfterHero from "./components/AfterHero";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Reloader from "./components/reloader";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
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
          <Hero loaderComplete={loaderComplete} />
          <AfterHero>
          <About />
          <Experience />
          <ProjectShowcase />
          <TechUniverse />
          <ContactSection />
          </AfterHero>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
