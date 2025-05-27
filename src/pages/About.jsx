// src/pages/About.jsx
import React from "react";
import "./About.css";

const About = () => (
  <section className="about">
    <h2>About PArAsYtE</h2>
    <p>PArAsYtE is a hybrid guardian and encrypted communication tool — protecting your system, your identity, and your voice.

Built in Rust for resilience, it monitors CPU, memory, and processes, then streams real-time metrics to Prometheus and Grafana dashboards — web and mobile.

Inspired by BlackBerry’s legendary PIN messaging, PArAsYtE offers secure, peer-to-peer communication using encrypted PINs. No usernames. No servers. Just encrypted messages, disappearing voice calls, and auto-deleting voicemails — protected by facial recognition and local-only access.
</p>

    <h2>Our Mission</h2>
    <p>To protect digital systems without harm, restore anonymous communication, and give people sovereign control over their digital life — through decentralized monitoring, encrypted messaging, and verifiable yet anonymous identity.</p>

    <h3>Why Parasyte?</h3>
    <ul>
      <li>100% encrypted direct messages</li>
      <li>No servers needed</li>
      <li>Anonymous yet verifiable identity</li>
    </ul>
  </section>
);

export default About;
