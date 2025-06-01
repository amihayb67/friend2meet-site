import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/f2m - bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font_0">
          UNDER CONSTRUCTION
        </h1>        
{/*         <h1 class="font_0 wixui-rich-text__text" style="line-height:1.1em; text-align:center; font-size:100px;">
          <span style="letter-spacing:0.1em;" class="wixui-rich-text__text">
            UNDER<br class="wixui-rich-text__text">
            CONSTRUCTION
          </span>
        </h1> */}
          
        <h2 className="text-xl md:text-2xl mb-8 tracking-wide">FUTURE OF DATING</h2>

        <div className="w-full max-w-md mx-auto bg-gray-800 rounded-full h-4 mb-8">
          <div className="bg-blue-500 h-4 rounded-full w-1/2 transition-all duration-500"></div>
        </div>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition">
          Notify Me!
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
