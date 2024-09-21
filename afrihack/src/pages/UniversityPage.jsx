import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import heroImage from '../assets/hero.png'; 

const UniversityPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { formData } = location.state || {};
  const { gpa, country } = formData || {};

  const universities = {
    Europe: ['University of Amsterdam', 'University of Oxford', 'ETH Zurich'],
    Kenya: ['University of Nairobi', 'Kenyatta University', 'Strathmore University'],
    UK: ['Imperial College London', 'University of Manchester', 'University of Edinburgh'],
  };

  const [selectedUniversity, setSelectedUniversity] = useState('');

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };

  const handleNext = () => {
    if (selectedUniversity) {
      navigate('/documents', {
        state: {
          formData: { ...formData, selectedUniversity },
        },
      });
    } else {
      alert('Please select a university before proceeding.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #001f3f, #90d5ff)', 
      }}
    >
      <div className="bg-white bg-opacity-75 p-6 rounded shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-bold mb-4">UNIVERSITY SELECTION</h2>
        <p>Based on your GPA of {gpa}, you may qualify for the following universities:</p>
        <form className="my-4">
          {universities[country]?.map((university, index) => (
            <div key={index} className="mb-2 flex items-center">
              <input
                type="radio"
                name="university"
                value={university}
                checked={selectedUniversity === university}
                onChange={handleUniversityChange}
                className="mr-2"
              />
              <label>{university}</label>
            </div>
          ))}
        </form>
        {universities[country]?.length === 0 && (
          <p className="text-red-500">No universities available for the selected country.</p>
        )}
        <button
          onClick={handleNext}
          className="bg-[#A57C00] text-white px-4 py-2 mt-4 rounded">
          Continue
        </button>
      </div>
    </div>
  );
};

export default UniversityPage;
