import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 blur-md"></div>
      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">UNDER CONSTRUCTION</h1>
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
