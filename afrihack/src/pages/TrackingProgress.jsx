import React from 'react';
import { Link } from 'react-router-dom';

const TrackingProgress = () => {
  // Sample data for progress tracking
  const progressData = [
    { id: 1, task: 'Application Submitted', status: 'Completed' },
    { id: 2, task: 'Documents Verified', status: 'In Progress' },
    { id: 3, task: 'Interview Scheduled', status: 'Pending' },
    { id: 4, task: 'Final Decision', status: 'Pending' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#001f3f] to-[#90d5ff]">
      <h1 className="text-3xl font-bold text-white mb-6">Tracking Progress</h1>
      <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-[#A57C00] mb-4">Your Application Progress</h2>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Task</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {progressData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.task}</td>
                <td className={`border border-gray-300 px-4 py-2 ${item.status === 'Completed' ? 'text-green-600' : item.status === 'In Progress' ? 'text-yellow-600' : 'text-red-600'}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          <Link to="/" className="bg-[#A57C00] text-white px-4 py-2 rounded hover:bg-[#A57C00]/80 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TrackingProgress;
