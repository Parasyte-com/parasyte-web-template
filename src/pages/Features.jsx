// src/pages/Features.jsx
import React from "react";
import "./Features.css";

const features = [
  { title: "PIN-Based Messaging", desc: "Each user has a unique, encrypted PIN — just like classic BBM." },
  { title: "Peer-to-Peer", desc: "No central server. Direct communication only." },
  { title: "Cross-Platform", desc: "Web and mobile clients for seamless syncing." },
  { title: "Security First", desc: "AES-256 encryption, auto-expiring messages, and more." },
];

const Features = () => (
  <section className="features">
    <h2>Core Features</h2>
    <div className="feature-grid">
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
