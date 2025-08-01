import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Theme from '../theme/theme';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => setNav(false);

  return (
     <div className='fixed top-0 left-0  w-full bg-white dark:bg-black text-black dark:text-white flex justify-between  items-center h-20 md:h-18 px-20 '>
      <h1 className=' text-3xl font-bold text-[#00df9a]'>REACT.</h1>

      <ul className='hidden md:flex'> 
        <li className='p-4'><Link to="/" onClick={closeMenu}>Home</Link></li>       
        <li className='p-4'><Link to="/Company" onClick={closeMenu}>Company</Link></li>    
        <li className='p-4'><Link to="/Resources" onClick={closeMenu}>Resources</Link></li> 
        <li className='p-4 '><Link to="/Contact" onClick={closeMenu}>Contact</Link></li> 
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={
        nav 
          ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
          : 'fixed left-[-100%] top-0 ease-in-out duration-500'
      }>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <li className='p-4 border-b border-gray-600'><Link to="/" onClick={closeMenu}>Home</Link></li>       
        <li className='p-4 border-b border-gray-600'><Link to="/Company" onClick={closeMenu}>Company</Link></li>    
        <li className='p-4 border-b border-gray-600'><Link to="/Resources" onClick={closeMenu}>Resources</Link></li>    
        <li className='p-4 border-b border-gray-600'><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>    
      </ul>
       <Theme />
    </div>
  );
};

export default Navbar;
