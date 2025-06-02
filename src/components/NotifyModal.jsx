import React, { useState, useEffect } from 'react';

export default function NotifyModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setError(true);
      return;
    }
    setSubmitted(true);
    setError(false);
    // Future integration for email service can go here
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (e.target.id === 'notify-modal-overlay') {
        onClose();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <div
      id="notify-modal-overlay"
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end"
    >
      <div
        className="h-full w-[600px] bg-[#d0d7e0] p-10 shadow-xl transform transition-transform duration-300"
        style={{ transform: 'translateX(0)' }}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-black text-2xl font-light"
          >
            &times;
          </button>
        </div>
        <h2 className="text-4xl font-light text-black mb-8 tracking-wide text-center">
          BE THE FIRST TO KNOW WHEN WE GO LIVE
        </h2>
        <div className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className={`w-[280px] p-2 mb-4 border rounded ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-[280px] bg-[#41566b] text-white py-2 rounded hover:bg-[#2e3d4b] transition-colors"
          >
            Sign Up!
          </button>
          {submitted && (
            <p className="text-green-600 mt-4">Thanks for submitting!</p>
          )}
          {error && !submitted && (
            <p className="text-red-500 mt-2">Please type a correct valid email</p>
          )}
        </div>
      </div>
    </div>
  );
}
