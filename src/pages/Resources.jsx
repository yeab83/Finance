import React from 'react';
import DataImg from '../assets/laptop.jpg'; // Replace with a relevant image if available

const Resources = () => {
  return (
    <div className="w-full bg-white py-20 px-6">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8">
        
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-semibold uppercase tracking-widest mb-2">
            Developer Resources
          </p>
          <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold text-gray-800 mb-4">
            Everything You Need to Get Started
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Access high-quality tutorials, documentation, and tools to supercharge your development.
            Whether you're building dashboards, analyzing data, or scaling APIs, our resources are here
            to support you.
          </p>
          <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium py-3 hover:bg-[#00c282] transition">
            View Docs
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src={DataImg}
            alt="Resource illustration"
            className="w-full max-w-[500px] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Resources;
