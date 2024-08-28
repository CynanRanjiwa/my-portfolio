import React from 'react';
import '.Header.css';// separate css file for header styling 

// header component to display the main title and description
function Header() {
    return (
        <header className="header">
            <h1>Welcome to My Portfolio</h1>
            <p>This is a showcase of my work and projects.</p>

        </header>
    );
}

export default Header;