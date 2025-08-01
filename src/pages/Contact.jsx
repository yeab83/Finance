import React from 'react';

const Contact = () => {
  return (
    <div className="w-full bg-white py-24 px-4 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have a question or want to work with us? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <form className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
          <input
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#00df9a]"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#00df9a]"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#00df9a]"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#00df9a] text-black font-medium py-3 rounded-md hover:bg-[#00c282] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
