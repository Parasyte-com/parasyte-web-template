// src/pages/Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact-page">
  <section className="contact">
    <h2>Get in Touch</h2>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email Address" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  </section>
  </div>
);

export default Contact;
