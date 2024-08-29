// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link component from React Router
import './Header.css'; // Separate CSS file for header styling

// Header component to display the main title, description, and navigation links
function Header() {
  return (
    <header className="header">
      <h1>Welcome to My Portfolio</h1>
      <p>This is a showcase of my work and projects.</p>
      <nav>
        <Link to="/">About</Link> {/* Link to About page */}
        <Link to="/projects">Projects</Link> {/* Link to Projects page */}
        <Link to="/contact">Contact</Link> {/* Link to Contact page */}
      </nav>
    </header>
  );
}

export default Header; // Exporting the Header component
