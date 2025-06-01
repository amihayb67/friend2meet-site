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
        <h1 className="text-[100px] leading-[1.1] text-center tracking-[0.1em] font-barlow mb-6">
          UNDER<br />
          CONSTRUCTION
        </h1>
{/*         <h1 className="text-4xl md:text-6xl font-bold mb-6">UNDER CONSTRUCTION</h1> */}

        <h2 className="text-xl md:text-2xl tracking-[0.5em] text-center font-barlow mb-8">
          FUTURE OF DATING
        </h2>
{/*         <h2 className="text-xl md:text-2xl mb-8 tracking-wide">FUTURE OF DATING</h2> */}

        <div className="w-full max-w-md mx-auto rounded-full h-4 mb-8" style={{ backgroundColor: '#FCF5F0' }}>
          <div className="h-4 rounded-full w-2/3 transition-all duration-500" style={{ backgroundColor: '#A7BEDF' }}></div>
        </div>
{/*         <div className="w-full max-w-md mx-auto bg-gray-800 rounded-full h-4 mb-8">
          <div className="bg-blue-500 h-4 rounded-full w-1/2 transition-all duration-500"></div>
        </div> */}

<div className="flex justify-center">
  <a
    href="#"
    role="button"
    aria-label="Notify Me!"
    className="font-barlow text-[15px] tracking-wide text-[#1a1a1a] px-6 py-2 flex items-center justify-center transition"
    style={{
      backgroundColor: '#9abee3',
      borderRadius: '0px',
      minHeight: '42px',
      minWidth: '160px',
    }}
  >
    <span className="pointer-events-none">Notify Me!</span>
  </a>
</div>
{/*         <button
          className="bg-[#AFBDD6] text-black px-6 py-2 font-barlow shadow-sm hover:bg-[#49586D^] transition"
          style={{ borderRadius: '0px' }}
        >
          Notify Me!
        </button> */}
{/*         <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition">
          Notify Me!
        </button> */}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
