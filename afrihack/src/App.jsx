import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import UniversityPage from './pages/UniversityPage';
import DocumentsPage from './pages/DocumentsPage';
import Navbar from './pages/Navbar'; // Ensure the path is correct
import './App.css';

function App() {
  console.log('App rendered');
  
  return (
    <Router>
      <div>
        <Navbar /> {/* Render the Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/documents" element={<DocumentsPage />} /> {/* Ensure this matches your URL */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
