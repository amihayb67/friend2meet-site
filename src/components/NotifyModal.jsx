import React, { useState, useEffect } from 'react';

const NotifyModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage('');
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage('Thanks for submitting!');
      // You can trigger backend logic here
    } else {
      setMessage('Please type a correct valid email');
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.id === 'notify-modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="notify-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div
        className={`bg-[#94B0DC] text-black p-8 rounded-md shadow-md w-[600px] h-auto flex flex-col items-center justify-center transition-transform duration-1000 transform ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black"
          style={{ width: '20px', height: '20px' }}
        >
          ×
        </button>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          BE THE FIRST TO KNOW WHEN WE GO LIVE
        </h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Your email"
          className="px-4 py-2 mb-4 w-[300px] text-black"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#1a1a1a] text-white px-6 py-2 w-[300px]"
        >
          Sign Up!
        </button>
        {message && (
          <p className="text-sm mt-4 text-center" style={{ minHeight: '20px' }}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default NotifyModal;
