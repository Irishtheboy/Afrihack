import React, { useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DocumentsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const [transcripts, setTranscripts] = useState([]);
  const [additionalFiles, setAdditionalFiles] = useState([]);
  const [visaDocuments, setVisaDocuments] = useState([]);
  const [visaStatus, setVisaStatus] = useState('');
  const [residenceRecommendation, setResidenceRecommendation] = useState('');
  const [locationEvaluation, setLocationEvaluation] = useState('');

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setTranscripts((prevFiles) => [...prevFiles, ...files]);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleUploadMore = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    input.multiple = true;
    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      setAdditionalFiles((prevFiles) => [...prevFiles, ...files]);
    };
    input.click();
  };

  const handleVisaUpload = (e) => {
    const files = Array.from(e.target.files);
    setVisaDocuments(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFiles = [...transcripts, ...additionalFiles, ...visaDocuments];

    if (allFiles.length > 0) {
      console.log('Form submitted:', allFiles);
      alert('Empiresa Global Academy has received your application and will get back to you.');
      navigate('/'); 
    } else {
      alert('Please upload at least one document.');
    }
  };

  const renderFileList = (files) => (
    <ul className="list-disc ml-6">
      {files.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))}
    </ul>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #001f3f, #90d5ff)', // Gradient background
      }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-lg w-full mx-4">
        <h2 className="text-xl font-bold mb-4 text-blue-600 text-center">DOCUMENT UPLOAD</h2>
        <p className="text-center">Selected University: {formData?.selectedUniversity || 'No university selected'}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Upload Transcripts */}
          <div>
            <label className="block font-semibold mb-1">Upload documents:</label>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-dashed border-2 border-gray-400 p-4 text-center mb-2 cursor-pointer"
              onClick={handleUploadMore}
            >
              Drag & drop your transcript files here or <span className="text-blue-500">click to upload more</span>
            </div>
            {transcripts.length > 0 && renderFileList(transcripts)}
            {additionalFiles.length > 0 && renderFileList(additionalFiles)}
          </div>

          {/* Visa Status */}
          <div>
            <label className="block font-semibold mb-1">Do you have a Visa?</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="visaStatus"
                  value="Yes"
                  checked={visaStatus === 'Yes'}
                  onChange={(e) => setVisaStatus(e.target.value)}
                  className="mr-2"
                />
                Yes
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="visaStatus"
                  value="No"
                  checked={visaStatus === 'No'}
                  onChange={(e) => setVisaStatus(e.target.value)}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>

          
          {visaStatus === 'Yes' && (
            <div>
              <label className="block font-semibold mb-1">Upload Visa Documents:</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleVisaUpload}
                multiple
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              {visaDocuments.length > 0 && renderFileList(visaDocuments)}
            </div>
          )}

          
          <div>
            <label className="block font-semibold mb-1">Residence Recommendation:</label>
            <textarea
              value={residenceRecommendation}
              onChange={(e) => setResidenceRecommendation(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              rows="3"
              placeholder="Please provide your residence recommendation..."
            />
          </div>

      
          <div>
            <label className="block font-semibold mb-1">Location Evaluation:</label>
            <textarea
              value={locationEvaluation}
              onChange={(e) => setLocationEvaluation(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              rows="3"
              placeholder="Please evaluate the location..."
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#A57C00] text-white px-4 py-2 mt-4 rounded w-full hover:bg-[#A57C00]/80 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentsPage;
