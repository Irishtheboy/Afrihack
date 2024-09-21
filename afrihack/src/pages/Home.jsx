import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as needed

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
      setSlideIn(true); // Trigger slide-in effect after fade-in
    }, 100); // Delay to allow transition effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: 'linear-gradient(to bottom, #001f3f, #90d5ff)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mb-4"> 
        <img src={logo} alt="Logo" className="h-24 w-auto" /> 
      </div>
      <h1 className={`text-3xl md:text-4xl font-bold mb-4 text-center text-white transition-transform duration-700 ${slideIn ? 'transform translate-y-0' : 'transform -translate-y-10'}`}>
        EMPIRAS GLOBAL ACADEMY
      </h1>
      
      {/* Increased size for the transparent card */}
      <div className={`bg-white bg-opacity-40 p-12 max-w-md w-full rounded-lg shadow-lg transition-transform duration-700 transform ${slideIn ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'} mb-6`}>
        <h2 className="text-2xl  text-center text-white">EGA presents</h2>
        <p className="text-xl text-center font-italic text-[#A57C00]">STUDY ABROAD, HOME-SCHOOLING</p>
      </div>

      <Link to="/form">
        <button className="bg-[#A57C00] text-white px-4 py-2 rounded text-lg">
          GET STARTED
        </button>
      </Link>
    </div>
  );
};

export default Home;
