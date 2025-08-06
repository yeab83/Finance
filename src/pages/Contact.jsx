import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/messages', formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Try again.' });
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="w-full py-24 px-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Contact Us</h2>
          <p className="text-black dark:text-white">
            Have a question or want to work with us? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {status && (
          <div
            className={`mb-6 text-center p-3 rounded-md font-semibold ${
              status.type === 'success'
                ? 'bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-900'
                : 'bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-900'
            }`}
          >
            {status.message}
          </div>
        )}

        <form className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded-md p-3 focus:outline-none focus:border-[#00df9a] bg-white dark:bg-gray-800 text-black dark:text-white"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded-md p-3 focus:outline-none focus:border-[#00df9a] bg-white dark:bg-gray-800 text-black dark:text-white"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 rounded-md p-3 focus:outline-none focus:border-[#00df9a] bg-white dark:bg-gray-800 text-black dark:text-white"
            rows="6"
            placeholder="Your Message"
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
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
