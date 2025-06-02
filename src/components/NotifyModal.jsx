// main.jsx
import { useState } from 'react';
import NotifyModal from './NotifyModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
      {showModal && <NotifyModal onClose={() => setShowModal(false)} />}

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>

      <div className="z-10 text-center w-full px-4">
        <h1 className="text-[100px] leading-[1.1] text-center tracking-[0.1em] font-barlow">
          UNDER<br />
          CONSTRUCTION
        </h1>
        <h2 className="text-xl md:text-2xl tracking-[0.5em] text-center font-barlow mt-8 mb-10">
          FUTURE OF DATING
        </h2>
        <div className="w-full h-2 bg-gray-700 mb-12">
          <div
            className="h-full bg-blue-400 transition-all duration-1000"
            style={{ width: '75%' }}
          ></div>
        </div>
        <div className="mt-20 flex justify-center">
          <button
            role="button"
            aria-label="Notify Me!"
            className="font-opensanscond text-[15px] tracking-[0.05em] px-6 py-2 flex items-center justify-center transition-colors duration-200"
            style={{
              backgroundColor: '#9abee3',
              color: '#1a1a1a',
              borderRadius: '0px',
              minHeight: '42px',
              minWidth: '160px',
              fontWeight: 300,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#41566b';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#9abee3';
              e.currentTarget.style.color = '#1a1a1a';
            }}
            onClick={() => setShowModal(true)}
          >
            <span className="pointer-events-none">Notify Me!</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


// NotifyModal.jsx
import { useEffect } from 'react';

export default function NotifyModal({ onClose }) {
  useEffect(() => {
    const handleKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-10 pt-8 shadow-lg w-full max-w-md h-full overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>
        <h3 className="text-lg font-semibold mb-6 tracking-wide">
          BE THE FIRST TO KNOW WHEN WE GO LIVE
        </h3>
        <input
          type="email"
          placeholder="Your email"
          className="w-full border border-gray-300 p-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 w-full hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </button>
        <p className="mt-3 text-sm text-green-600">Thanks for submitting!</p>
      </div>
    </div>
  );
}
