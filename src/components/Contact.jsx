import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! 🚀");
    // You can add email sending via EmailJS or Formspree here
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-[#180025]/50 via-[#11001b] to-[#1c0031]/50 px-6 py-20 text-white font-sans rounded-3xl">
        <h2 className="text-4xl font-bold mb-3 text-center">Contact Me</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-10">
        {/* Left Content */}
        <div className="mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-pink-400 text-5xl">🔮</span> Let’s Create
            Something Amazing Together
          </h2>
          {/* <img
            src="https://assets-global.website-files.com/63b6c6e5eacc9324cd98e9f7/63c7b0d88d19b8036b5a3f98_Vector-1.svg"
            alt="line"
            className="mt-6"
          /> */}
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6  p-8 rounded-xl shadow-md"
        >
          <div>
            <label className="block mb-1 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-transparent"
              placeholder="Enter message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full transition duration-300"
          >
            ✨ Send Message ✨
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
