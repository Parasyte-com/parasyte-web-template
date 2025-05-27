// src/pages/Features.jsx
import React from "react";
import "./Features.css";

const features = [
  { title: "PIN-Based Messaging", 
  desc: "Each user has a unique, encrypted PIN — just like classic BBM." },
  { title: "Peer-to-Peer Architecture", 
  desc: "Direct connections. No servers. No metadata exposure." },
  { title: "Cross-Platform", desc: "Consistent experience across web, iOS, and Android." },
  { title: "End-to-End Encryption", 
  desc: "Messages, calls, and voicemails are encrypted on-device." },
  { title: "Facial Recognition & Biometrics", desc: "Unlock your private space with face/biometric verification" },
  { title: "Disappearing Voice Calls & Voicemails", desc: "Auto-delete after play, offering ephemeral voice communication." },
  { title: "System Monitoring (Prometheus + Grafana)", 
  desc: "Real-time CPU, memory, and process stats via secure dashboards." },
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
