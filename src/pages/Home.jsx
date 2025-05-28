// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';


const Home = () => (
  <section className="home">
    <div className="hero">
      <h1>Secure. Instant. Decentralized.</h1>
      <p>
      Secure. Instant. Decentralized. Multi-Layered.

PArAsYtE connects you through encrypted, PIN-based messaging with no servers or middlemen — ensuring full privacy and control. It silently protects your device with advanced monitoring, threat detection, and encrypted system logs via Prometheus and Grafana.

With a built-in facial-auth PIN, disappearing chats, encrypted voice calls, and voicemails that vanish after a single play, PArAsYtE redefines private communication. Experience a unified platform to guard your conversations, your system, and your identity — all in one seamless, secure app.
      </p>
    </div>
    <div className="down">
      
      <Link to="/features">
  <button className="cta-button">Explore Features</button>
</Link>

    </div>
  </section>
);

export default Home;
