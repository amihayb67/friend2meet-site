// components/NotifyModal.jsx
import React, { useState } from 'react';

export default function NotifyModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please type a correct valid email');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#9abee3]/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#9abee3] p-8 rounded shadow-lg text-center relative w-full max-w-sm">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-black hover:opacity-60"
        >
          &times;
        </button>
        <h2 className="text-xl font-opensanscond text-black tracking-wide mb-2">
          BE THE FIRST TO KNOW
        </h2>
        <p className="text-sm text-black mb-4 tracking-wide">
          SIGN UP AND GET NOTIFIED *
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 text-sm text-black border ${
              error ? 'border-red-500' : 'border-black'
            }`}
          />
          <button
            type="submit"
            className="w-full bg-[#2c3e50] text-white py-2 font-opensanscond text-sm hover:bg-[#1a252f] transition"
          >
            Sign Up!
          </button>
          {submitted && !error && (
            <p className="text-green-700 text-sm mt-2">Thanks for submitting!</p>
          )}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}
