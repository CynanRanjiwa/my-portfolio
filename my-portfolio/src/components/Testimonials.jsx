import React from 'react';
import './Testimonials.css';

// sample data for testimonials - replace with dynamic data if needed
const testimonials = [
    {id: 1, name: 'Hannah', text: 'Great developer! Highly recommended!',},
    {id: 2, name: 'Antonio', text: 'Delivered on time and exceeded expectations.'},
];
//testimonials component to display client reviews 
function Testimonials() {
    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <ul>
            {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <blockquote>{testimonial.text}</blockquote>
            <cite>- {testimonial.name}</cite>
          </li>
            ))}

            </ul>

        </section>
    );
}

export default Testimonials;
