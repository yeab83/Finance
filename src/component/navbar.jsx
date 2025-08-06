import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Theme from '../theme/theme';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  // Prevent scrolling when nav is open
  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : 'auto';
  }, [nav]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white z-50 shadow-md">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center h-20 px-6 sm:px-10 lg:px-16">
        <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/Company" onClick={closeMenu}>Company</Link></li>
          <li><Link to="/Resources" onClick={closeMenu}>Resources</Link></li>
          <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="flex items-center  gap-2">
          <Theme />
          <div onClick={handleNav} className="cursor-pointer md:hidden z-50">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-[70%] h-full bg-[#000300] text-white p-6 pt-20 z-40 transform transition-transform duration-300 ease-in-out ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h1 className="text-3xl font-bold text-[#00df9a] mb-6">REACT.</h1>
        <li className="p-4 border-b border-gray-600"><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li className="p-4 border-b border-gray-600"><Link to="/Company" onClick={closeMenu}>Company</Link></li>
        <li className="p-4 border-b border-gray-600"><Link to="/Resources" onClick={closeMenu}>Resources</Link></li>
        <li className="p-4 border-b border-gray-600"><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {nav && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </div>
  );
};

export default Navbar;
