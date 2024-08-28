import React from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ContactForm from './components/ContactForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';// importing the css file for styling 


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Including the Header component */}
        {/* React Router setup to manage routes */}
        <Routes>
          <Route path="/" element={<About />} /> {/* Default route to the About page */}
          <Route path="/projects" element={<ProjectList />} /> {/* Route to the ProjectList page */}
          <Route path="/contact" element={<ContactForm />} /> {/* Route to the ContactForm page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exporting the App component
