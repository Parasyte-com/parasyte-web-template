// src/pages/Home.jsx
import React from "react";
import "./Home.css";

const Home = () => (
  <section className="home">
    <div className="hero">
      <h1>Secure. Instant. Decentralized.</h1>
      <p>Parasyte connects you with encrypted, PIN-based messaging — no server middlemen.</p> 
    </div>
    <div className="down">
    <a href="/features" className="cta-button">Explore Features</a>
    </div>
  </section>
);

export default Home;
