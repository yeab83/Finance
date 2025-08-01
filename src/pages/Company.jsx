import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Company = () => {
  return (
    <div className='w-full bg-white py-20 px-6'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
        <img className='w-full max-w-[500px] mx-auto my-8 rounded-lg shadow-lg' src={Laptop} alt='Laptop' />
        
        <div className='flex flex-col justify-center md:pl-8'>
          <p className='text-[#00df9a] font-semibold uppercase tracking-widest mb-2'>
            About Our Company
          </p>
          <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2 text-gray-800'>
            Empowering Businesses Through Data
          </h1>
          <p className='text-gray-600 mt-4 leading-relaxed'>
            At React Analytics Inc., we provide smart, scalable solutions to help companies grow with confidence.
            From powerful data dashboards to real-time analytics tools, our mission is to simplify decision-making
            through intuitive technology.
          </p>
          <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium mt-6 py-3 hover:bg-[#00c282] transition'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;
