import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Reloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    // Progress counter logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("hasSeenLoader", "true");
          }, 500); // Small pause at 100%
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Speed of the counter

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
        >
          {/* Main Name */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              KIRAN RATHOD<span className="text-orange-400">.</span>
            </motion.h1>
          </div>

          {/* Progress Percentage */}
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20">
            <p className="text-6xl md:text-9xl font-light opacity-20 tabular-nums">
              {progress}%
            </p>
          </div>

          {/* Thin Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-orange-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-zinc-500 uppercase tracking-[0.5em] text-xs"
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Reloader;