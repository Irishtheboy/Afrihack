import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { FaBars } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#001f3f] p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 mr-4" />
        <h1 className="text-white text-2xl font-bold">AfriHACK-Connect</h1>
      </div>
      <div className="relative">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FaBars className="h-6 w-6" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white bg-opacity-70 rounded shadow-lg z-10 transition-all duration-300 ease-in-out">
            <Link to="/" className="block px-4 py-2 text-black hover:bg-[#A57C00] hover:text-white transition-colors duration-300 ease-in">
              Home
            </Link>
            <Link to="/track" className="block px-4 py-2 text-black hover:bg-[#A57C00] hover:text-white transition-colors duration-300 ease-in">
              Track Progress
            </Link>
            <button onClick={toggleMenu} className="block px-4 py-2 text-black w-full text-left hover:bg-[#A57C00] hover:text-white transition-colors duration-300 ease-in">
              Close Menu
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
