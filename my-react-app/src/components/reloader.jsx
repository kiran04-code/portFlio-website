import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Reloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenLoader_v2");
    if (hasSeen) {
      setIsLoading(false);
      if (onComplete) onComplete();
      return;
    }

    const startTime = Date.now();
    const duration = 2200; // 2.2 seconds opening

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Easing curve
      const easedProgress = Math.floor(progressRatio * 100);
      setProgress(easedProgress);

      if (progressRatio < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("hasSeenLoader_v2", "true");
          if (onComplete) onComplete();
        }, 300);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="luxury-loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-16 bg-black text-white selection:bg-none pointer-events-auto"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                KIRAN RATHOD // ARCHIVE
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">
              SYS_INIT_2026
            </span>
          </div>

          {/* Center Brand typography */}
          <div className="my-auto space-y-4">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter uppercase font-display leading-[0.85]"
              >
                KIRAN
              </motion.h1>
            </div>
            <div className="overflow-hidden flex items-baseline gap-6">
              <motion.h1
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter uppercase text-zinc-600 font-display leading-[0.85]"
              >
                RATHOD
              </motion.h1>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden sm:inline-block font-mono text-xs text-zinc-500 uppercase tracking-widest"
              >
                [FULL-STACK & DEVOPS]
              </motion.span>
            </div>
          </div>

          {/* Bottom Progress & Ticker */}
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                  Loading Creative Engineering Studio
                </p>
                <p className="font-mono text-[10px] text-zinc-600 tracking-wider mt-1">
                  MERN • NEXT.JS • REDIS • BULLMQ • DOCKER • KUBERNETES
                </p>
              </div>

              <div className="font-mono text-5xl md:text-7xl font-light text-white tracking-tighter tabular-nums">
                {progress < 10 ? `0${progress}` : progress}
                <span className="text-zinc-600 text-2xl md:text-3xl font-light">%</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-[2px] bg-zinc-900 overflow-hidden relative">
              <motion.div
                className="h-full bg-white transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Reloader;