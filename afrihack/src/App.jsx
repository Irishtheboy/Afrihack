import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import UniversityPage from './pages/UniversityPage';
import DocumentsPage from './pages/DocumentsPage';
import TrackingProgress from './pages/TrackingProgress'; // Import the Tracking Progress page
import Navbar from './pages/Navbar'; 
import './App.css';

function App() {
  console.log('App rendered');
  
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/documents" element={<DocumentsPage />} /> {/* Ensure this matches your URL */}
          <Route path="/track" element={<TrackingProgress />} /> {/* Add the Tracking Progress route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
