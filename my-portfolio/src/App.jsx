// src/App.jsx

import React from 'react';
import Header from './components/Header'; // Importing the Header component
import ProjectList from './components/ProjectList'; // Importing the ProjectList component
import ContactForm from './components/ContactForm'; // Importing the ContactForm component
import About from './components/About'; // Importing the About component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router components

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
