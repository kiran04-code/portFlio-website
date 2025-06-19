import React from "react";

const Footer = () => {
  return (
    <div className="   z-80 relative">
        {/* Contact Me Tag */}
<div className="w-full  ">
  <div className="max-w-6xl mx-auto px-4 py-5 text-center">
    <h1 className="text-2xl sm:text-3xl text-orange-300 " style={{ fontFamily: 'Poppins, sans-serif'}}>
      Contact Me
    </h1>
  </div>
</div>


        <div className="w-full flex flex-col md:flex-row ">
      {/* Left Image Section (45% on desktop) */}
        
      <div className="w-full md:w-[45%] h-72 md:h-[350px] flex items-center justify-center  p-5">
        <img
          src="/kiran.dev.png"
          alt="kiran.dev"
          className="h-67 md:h-80 object-contain rounded-xl shadow-lg border-2 border-orange-300"
        />
      </div>

      {/* Right Form Section (55% on desktop) */}
      <div className="w-full md:w-[55%] h-auto md:h-[350px] p-6 flex flex-col justify-center items-center">
        <div className="w-full max-w-md bg-zinc-800 p-6 rounded-xl border-2 border-orange-300 shadow-lg">
          <h2 className="text-white text-xl font-semibold text-center mb-4">Send a Message</h2>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-3 px-4 py-2 rounded-md border border-orange-300 bg-black text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full mb-4 px-4 py-2 rounded-md border border-orange-300 bg-black text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
          ></textarea>
          <button className="w-full bg-orange-300 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-400 transition">
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
