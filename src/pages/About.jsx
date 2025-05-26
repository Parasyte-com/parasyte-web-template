// src/pages/About.jsx
import React from "react";
import "./About.css";

const About = () => (
  <section className="about">
    <h2>Our Mission</h2>
    <p>Parasyte was built for privacy-first communication. Inspired by BlackBerry’s PIN messaging, we aim to return control to users.</p>

    <h3>Why Parasyte?</h3>
    <ul>
      <li>100% encrypted direct messages</li>
      <li>No servers needed</li>
      <li>Anonymous yet verifiable identity</li>
    </ul>
  </section>
);

export default About;
