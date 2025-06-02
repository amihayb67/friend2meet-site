import React, { useState, useEffect } from 'react';

const NotifyModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleOverlayClick = (e) => {
    if (e.target.id === 'notify-modal-overlay') {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setError('Please type a correct valid email');
      return;
    }
    setSubmitted(true);
    setError('');
    // Here you could call an API or email service
    console.log('Submitted email:', email);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      id="notify-modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white text-black w-[400px] max-w-full h-full p-10 flex flex-col justify-center transition-transform duration-300 shadow-xl"
        style={{
          boxShadow: '0 0 30px rgba(0,0,0,0.5)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-2xl font-light text-gray-600 hover:text-black"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-xl tracking-widest text-center font-opensanscond mb-6">
          BE THE FIRST TO KNOW<br />WHEN WE GO LIVE
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border px-4 py-2 text-sm font-light font-opensanscond tracking-wide focus:outline-none ${
              error ? 'border-red-500' : 'border-gray-400'
            }`}
          />

          <button
            type="submit"
            className="bg-[#9abee3] hover:bg-[#41566b] text-[#1a1a1a] hover:text-white font-opensanscond text-sm tracking-[0.05em] px-6 py-2 transition-colors"
            style={{
              borderRadius: '0px',
              minHeight: '42px',
              minWidth: '160px',
              fontWeight: 300,
            }}
          >
            Sign Up!
          </button>

          {submitted && (
            <p className="text-green-600 text-sm font-light">Thanks for submitting!</p>
          )}
          {error && <p className="text-red-500 text-sm font-light">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default NotifyModal;
