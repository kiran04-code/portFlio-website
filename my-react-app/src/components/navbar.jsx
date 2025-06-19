import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white font-poppins relative z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl text-orange-300">k</h1>
         <div className="inline-block border-b-3 border-orange-300 pb-0.5">
  <h1 className="text-white font-bold text-xl kiran" >Kiran.dev</h1>
</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-orange-300 transition-colors duration-200">
            About
          </a>
          <a href="#skills" className="hover:text-orange-300 transition-colors duration-200">
            Skills
          </a>
          <a href="#contact" className="hover:text-orange-300 transition-colors duration-200">
            Contact
          </a>
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
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-orange-300">Menu</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close Sidebar">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="px-6 pt-2 space-y-4">
          <a href="#about" className="block hover:text-orange-300" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" className="block hover:text-orange-300" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#contact" className="block hover:text-orange-300" onClick={() => setIsOpen(false)}>
            Contact
          </a>
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
