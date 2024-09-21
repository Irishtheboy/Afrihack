import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    residence: '',
    gpa: '',
    country: '',
    studyInterest: '' // New field for study interest
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check GPA qualification
    const gpa = parseFloat(formData.gpa);
    if (gpa >= 3.0 && gpa <= 4.0) {
      console.log('Qualified for international universities:', formData);
      navigate('/university', { state: { formData } }); // Navigate to UniversityPage with formData
    } else {
      alert('You do not qualify for international universities.'); // Alert for unqualified students
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #001f3f, #90d5ff)', // Gradient background
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-3xl mx-4 transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">STUDENT INFORMATION FORM</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2">
              <label className="block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block">Residence</label>
              <input
                type="text"
                name="residence"
                value={formData.residence}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block">GPA</label>
              <input
                type="number"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
                step="0.01"
                className="border rounded px-3 py-2 w-full"
                required
              />
              <p className="text-sm text-blue-600">
                <a href="https://www.scholaro.com/gpa-calculator/South%20Africa" target="_blank" rel="noopener noreferrer">
                  Click here for GPA calculator
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Please enter your GPA (must be between 3.0 and 4.0 to qualify).
              </p>
              
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block">Country for Study</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              >
                <option value="">Select</option>
                <option value="Europe">Europe</option>
                <option value="Kenya">Kenya</option>
                <option value="UK">UK</option>
              </select>
            </div>
            {/* New dropdown for study interest */}
            <div className="w-full sm:w-1/2 px-2">
              <label className="block">Interest of Study</label>
              <select
                name="studyInterest"
                value={formData.studyInterest}
                onChange={handleChange}
                className="border rounded px-3 py-2 w-full"
                required
              >
                <option value="">Select</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Engineering">Engineering</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Medicine">Medicine</option>
                <option value="Education">Education</option>
                <option value="Social Sciences">Social Sciences</option>
                <option value="Arts">Arts</option>
                <option value="Law">Law</option>
                <option value="Environmental Studies">Environmental Studies</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Link to="/" className="bg-[#A57C00] text-white px-4 py-2 rounded hover:bg-[#A57C00]/80 transition">
              Previous
            </Link>
            <button type="submit" className="bg-[#A57C00] text-white px-4 py-2 rounded hover:bg-[#A57C00]/80 transition">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
