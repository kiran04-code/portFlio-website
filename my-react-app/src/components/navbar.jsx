import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState("About")
  const likn = [
  {
    name:"About",
  },
  {
    name:"Skills",
  },
  {
    name:"Contact",
  }


  ]
  return (
    <nav className="bg-black  text-white font-poppins relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-4xl text-orange-300">k</span>
          <div className="inline-block border-b-3 border-orange-300 pb-0.5">
            <h1 className="text-white font-bold text-xl kiran" >Kiran.dev</h1>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {
            likn.map((show)=>(
             <Link
  onClick={() => {
    setHover(show.name);
    const el = document.getElementById(show.name);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className={` 
    ${hover === show.name ? "text-orange-300" : ""}
    hover:text-orange-300 font-semibold transition-colors duration-200`}
>
  {show.name}
</Link>

            ))
          }
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-orange-300">Menu</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close Sidebar">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col p-10 py-5 gap-6 px-2">
            {
            likn.map((show)=>(
             <Link
  onClick={() => {
    setHover(show.name); setIsOpen(false)
    const el = document.getElementById(show.name);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className={` 
    ${hover === show.name ? "text-orange-300" : ""}
    hover:text-orange-300 font-semibold transition-colors duration-200`}
>
  {show.name}
</Link>

            ))
          }
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
