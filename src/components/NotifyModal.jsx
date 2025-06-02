import React, { useState, useEffect } from 'react';

const NotifyModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50); // Trigger transition after mount
  }, []);

  
  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setSubmitted(true);
      setError('');
      setShowTooltip(false);
    } else {
      setError('Please type a correct valid email');
      setSubmitted(false);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 1500);
    }
  };
  
  const handleOverlayClick = (e) => {
    if (e.target.id === 'notify-modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="notify-modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex"
    >
      <div
        className={`h-full w-[600px] bg-[#90b0dc] p-8 relative transition-transform duration-700 ease-in-out transform ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ marginLeft: 'auto' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black"
          style={{ width: '40px', height: '40px', fontSize: '40px', lineHeight: '40px' }}
        >
          x
        </button>
        <div className="h-full flex flex-col items-center justify-center">
          <h2 className="text-black text-[36px] font-normal text-center mb-6">
            BE THE FIRST TO KNOW WHEN WE GO LIVE
          </h2>

          <div className="relative inline-block">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-[300px] p-2 mb-4 text-center border ${
                error ? 'border-red-500' : 'border-gray-300'
              } rounded text-black`}
            />
            {showTooltip && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 text-sm bg-red-600 text-white px-3 py-1 rounded shadow-md z-10 whitespace-nowrap"
                style={{ bottom: 'calc(100% + 5px)' }} // 10px above the input
              >
                {error}
              </div>
            )}
          </div>     
          
{/*           <div className="relative inline-block">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            title={error || ''}
            className={`w-[300px] p-2 mb-4 text-center border ${
              error ? 'border-red-500' : 'border-gray-300'
            } rounded text-black`}
          />
          {error && (
            <div className="absolute mt-[-30px] text-sm bg-red-600 text-white px-2 py-1 rounded shadow-lg z-10">
              {error}
            </div>
          )}
          </div> */}
          
{/*           <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-[300px] p-2 mb-4 text-center border ${
              error ? 'border-red-500' : 'border-gray-300'
            } rounded text-black`}
          /> */}
          <button
            onClick={handleSubmit}
            className="w-[300px] py-2 bg-[#1a1a1a] text-white hover:bg-[#333] transition-colors duration-300"
          >
            Sign Up!
          </button>
          {submitted && (
            <p className="text-white mt-4">Thanks for submitting!</p>
          )}
{/*           {error && (
            <p className="text-red-500 mt-4">{error}</p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default NotifyModal;
