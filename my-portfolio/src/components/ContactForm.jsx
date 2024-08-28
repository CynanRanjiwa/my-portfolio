// src/components/ContactForm.jsx

import React, { useState } from 'react';
import './ContactForm.css'; // Separate CSS file for contact form styling

// ContactForm component to capture user messages
function ContactForm() {
  const [name, setName] = useState(''); // State for the name input
  const [email, setEmail] = useState(''); // State for the email input
  const [message, setMessage] = useState(''); // State for the message input

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert(`Thank you, ${name}! Your message has been received.`); // Temporary alert to indicate form submission
    // Here you can add code to send the form data to your server or an email service
  };

  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Updates state with input value
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates state with input value
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Updates state with input value
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm; // Exporting the ContactForm component
