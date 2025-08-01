import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Theme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 text-[#00df9a] text-xl sm:text-base"
      title={darkMode ? 'Light Mode' : 'Dark Mode'}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default Theme;
