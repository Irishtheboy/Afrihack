import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { FaUserPlus } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="bg-[#001f3f] p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-14 mr-4" />
        <h1 className="text-white text-2xl font-bold">AfriHACK-Connect</h1>
      </div>
      <div>
        <Link to="/signup" className="text-white flex items-center hover:text-yellow-400 transition">
          <FaUserPlus className="mr-2" />
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
