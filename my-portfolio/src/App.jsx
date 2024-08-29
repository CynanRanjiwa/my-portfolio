import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router components
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
        </Router>
    );
}

export default App;
