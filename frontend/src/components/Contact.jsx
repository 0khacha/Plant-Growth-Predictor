import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="page-container contact">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-description">
        We'd love to hear from you! Whether you have feedback, ideas, or just want to connect, 
        feel free to reach out.
      </p>
      <ul className="contact-list">
        <li><strong>Email:</strong> greenai.ensiasd@gmail.com</li>
        <li><strong>GitHub:</strong> github.com/ensiasd-plant-growth</li>
        <li><strong>LinkedIn:</strong> linkedin.com/school/ensiasd</li>
      </ul>
      <p className="page-description">
        Let's grow together. 🌿
      </p>
    </div>
  );
};

export default Contact;
