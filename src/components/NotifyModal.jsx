import React, { useState } from 'react';

const NotifyModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setSubmitted(true);
      setError('');
      // TODO: Add actual submission logic
    } else {
      setError('Please type a correct valid email');
    }
  };

  return (
    <div
      className="fixed top-0 right-0 h-full w-[480px] bg-[#2d3e50] z-50 shadow-lg transition-transform duration-500"
      style={{ transform: 'translateX(0%)' }}
    >
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="flex flex-col items-center justify-center h-full px-8 relative z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          ×
        </button>
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          BE THE FIRST TO KNOW WHEN WE GO LIVE
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[224px] px-4 py-2 mb-4 border border-gray-300 rounded text-black"
        />
        <button
          onClick={handleSubmit}
          className="w-[224px] bg-[#9abee3] text-black py-2 rounded hover:bg-[#41566b] hover:text-white transition-colors"
        >
          Sign Up!
        </button>
        {submitted && (
          <p className="text-green-400 text-sm mt-4">Thanks for submitting!</p>
        )}
        {error && (
          <p className="text-red-500 text-sm mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default NotifyModal;
