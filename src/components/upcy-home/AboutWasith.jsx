"use client";
import { useState } from "react";

export const AboutWasith = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could handle the form submission (API call, etc)
  };

  const handleClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Decorative gradient image can be added here if you want */}
      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="mb-5 text-4xl md:text-6xl text-white font-bold tracking-px-n leading-tight">
              Meet Wasith <br /> the team powering UPCY.
            </h2>
            <p className="text-white text-opacity-90 font-medium md:max-w-2xl">
              We’re <span className="font-bold">Wasith</span> — a product studio
              crafting next-generation tools for creators and digital
              entrepreneurs. Our mission is to empower communities to build,
              sell, and express themselves through technology. UPCY is one of
              our flagship platforms — a social-selling fashion app that
              redefines how people connect, trade, and inspire through style. By
              blending commerce with creativity, we aim to make peer-to-peer
              selling not just easier, but more personal, social, and
              sustainable. <br /> At Wasith, we don’t just launch products; we
              design ecosystems that bring people together.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-wrap ml-auto md:w-56 -m-2">
              <div className="w-full p-2">
                <button
                  className="py-4 px-6 w-full font-medium rounded-full shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Let's talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
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
                  Let's talk
                </h3>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  value={form.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  required
                  placeholder="Your message"
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 min-h-[100px]"
                  value={form.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:cursor-pointer transition"
                >
                  Send
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-2xl font-bold text-center">Thank you!</h3>
                <p className="text-center">
                  We've received your message and will be in touch soon.
                </p>
                <button
                  className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:cursor-pointer"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
