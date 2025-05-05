"use client";
import { useState } from "react";

export const WaitlistModal = ({ open, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmit) onSubmit(email);
  };

  const handleClose = () => {
    setEmail("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative mx-4">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-center mb-2">
              Join the Waitlist
            </h3>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-900 transition"
            >
              Join
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl font-bold text-center">Thank you!</h3>
            <p className="text-center">You've been added to the waitlist.</p>
            <button
              className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-900 transition"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
