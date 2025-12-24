import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer3 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Subtitle / Professional Role */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-4 font-medium"
        >
          Creative Developer & Designer
        </motion.p>

        {/* The Name: Premium Mask Animation */}
        <div className="overflow-hidden mb-8">
          <motion.h1 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
          >
            KIRAN RATHOD<span className="text-orange-400">.</span>
          </motion.h1>
        </div>

        {/* Social Links Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 mb-12"
        >
          <a 
            href="https://www.linkedin.com/in/kiran-rathod-66b009331" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group transition-all duration-300"
          >
            <div className="p-3 rounded-full border border-white/5 group-hover:border-orange-300/50 group-hover:bg-orange-300/5 transition-all">
               <FaLinkedin className="text-[28px] text-orange-300 group-hover:scale-110 transition-transform" />
            </div>
          </a>

          <a 
            href="https://github.com/kiran04-code" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group transition-all duration-300"
          >
            <div className="p-3 rounded-full border border-white/5 group-hover:border-orange-300/50 group-hover:bg-orange-300/5 transition-all">
              <FaGithub className="text-[28px] text-orange-300 group-hover:scale-110 transition-transform" />
            </div>
          </a>
        </motion.div>

        {/* Professional Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-[11px] uppercase tracking-[0.2em]">
          <p>© {currentYear} Kiran Rathod</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for hire
            </span>
            <span className="hidden md:block text-zinc-800">|</span>
            <p>India — Global</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;