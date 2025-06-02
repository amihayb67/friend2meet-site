import React, { useState, useEffect } from 'react';

export default function NotifyModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please type a correct valid email');
      return;
    }
    setError('');
    setSubmitted(true);
    // Email sending logic goes here
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black bg-opacity-40 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="fixed right-0 top-0 h-full shadow-lg p-8 flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out"
        style={{ width: '600px', backgroundColor: '#76A1D6', transform: 'translateX(0)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black"
          style={{ width: '20px', height: '20px', fontSize: '20px' }}
        >
          ×
        </button>
        <h2
          className="text-center mb-6"
          style={{ fontSize: '28px', fontWeight: '400', color: 'black' }}
        >
          BE THE FIRST TO KNOW WHEN WE GO LIVE
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 mb-4"
          style={{ width: '300px' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="py-2"
          style={{ width: '300px', backgroundColor: '#1a1a1a', color: 'white', fontWeight: 300 }}
        >
          Sign Up!
        </button>
        {error && (
          <p className="text-red-600 mt-4" style={{ width: '300px', textAlign: 'center' }}>{error}</p>
        )}
        {submitted && !error && (
          <p className="text-white mt-4" style={{ width: '300px', textAlign: 'center' }}>Thanks for submitting!</p>
        )}
      </div>
    </div>
  );
}
