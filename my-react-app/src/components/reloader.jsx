import React, { useState, useEffect } from "react";

const Reloader = () => {
  const [visible, setVisible] = useState(false);
  const [swipeOut, setSwipeOut] = useState(false);
  const [contentHidden, setContentHidden] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    const swipeTimer = setTimeout(() => {
      setSwipeOut(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setContentHidden(true);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(swipeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`w-full h-screen bg-black overflow-hidden relative ${contentHidden ? 'hidden' : ''}`}>
      <div
        className={`w-full h-full absolute top-0 left-0 transition-all duration-1000 ease-in-out flex items-center justify-center
          ${swipeOut ? "opacity-0 scale-90" : "opacity-100 scale-100"}
          ${contentHidden ? "hidden" : ""}
        `}
      >
        <div className="text-center px-4">
          <h1
            className={`text-4xl md:text-6xl font-extrabold text-orange-300 transform transition-all duration-1000 ease-out ${
              visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-110"
            }`}
          >
            Kiran.dev
          </h1>

          {visible && (
            <p
              className={`mt-4 text-lg md:text-2xl font-medium text-orange-300 transition-all duration-1000 ease-out delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              MERN Stack Developer
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reloader;
