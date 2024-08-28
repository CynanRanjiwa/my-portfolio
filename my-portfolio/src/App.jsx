import React from 'react';
import './App.css';// importing the css file for styling 

// a simple functional component for the Header 
function Header() {
  return (
    <header className="header">
      <h1>Welcome to My Portfolio</h1>
      <p>This is a showcase of my work and projects.</p>

    </header>
  );
}

//main app component where other components will be integrated 
function App() {
  return (
    <div className="App">
      <Header/> {/* Including the Header component */}
      {/* Other components like project showcase will go here */}
      <section>
        <h2>About Me</h2>
        <p>Hi! I'm a full-stack developer with a passion for building web applications.</p>
      </section>

    </div>
  );
}

export default App;