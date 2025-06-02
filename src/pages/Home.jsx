// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';


const Home = () => (
  <section className="home">
    <div className="hero">
      <h1>Welcome to PArAsYtE – Your Ultimate Autonomous System Companion</h1>

      <p>
        PArAsYtE is a next-generation, intelligent monitoring and management
        platform designed to empower users with total control over their digital
        environments. Whether you're a system administrator, cybersecurity
        professional, or power user, PArAsYtE offers unmatched visibility,
        control, and automation — all from a secure, unified interface.
      </p>

      <h2>What Is PArAsYtE?</h2>
      <p>
        PArAsYtE (Platform for Autonomous Reactive Analysis, System Yield, and
        Threat Enforcement) is a self-hosted toolset that brings together
        advanced system diagnostics, live monitoring, encrypted communications,
        and automated management into one platform. Inspired by modern DevSecOps
        principles and zero-trust security models, it gives users the ability to
        not only observe but intelligently respond to threats, anomalies, or
        inefficiencies in real time.
      </p>

      <h2>Why Choose PArAsYtE?</h2>
      <ul>
        <li>
          <strong>Self-Hosted & Private:</strong> Own your infrastructure. No
          data leaves your servers. No third-party tracking. Full control.
        </li>
        <li>
          <strong>Secure-by-Design:</strong> Built with encryption, multi-factor
          authentication, and tamper-proof logging as default.
        </li>
        <li>
          <strong>Modular Architecture:</strong> Enable only the components you
          need. Add advanced features via plug-ins as your needs grow.
        </li>
        <li>
          <strong>Cross-Platform Compatibility:</strong> Seamless operation
          across Windows, Linux, macOS, Android, and iOS devices.
        </li>
        <li>
          <strong>Real-Time Intelligence:</strong> Monitor system health, logs,
          and communications with actionable insights, not just raw data.
        </li>
      </ul>

      <h2>Key Capabilities at a Glance</h2>
      <ul>
        <li>
          <strong>System Monitoring:</strong> Track CPU, memory, disk, and
          network usage with real-time charts and alerts.
        </li>
        <li>
          <strong>Secure Messaging:</strong> Built-in encrypted chat for remote
          coordination, incident response, and notifications.
        </li>
        <li>
          <strong>Remote Management:</strong> Execute scripts, enforce policies,
          reboot or patch systems from any device.
        </li>
        <li>
          <strong>Peer-to-Peer Communication:</strong> Directly connect devices
          for efficient, secure, and low-latency communication.
        </li>
        <li>
          <strong>Security Controls:</strong> Enforce zero-trust policies,
          detect anomalies, and monitor access patterns in real time.
        </li>
        <li>
          <strong>Dashboard & Insights:</strong> Unified interface with
          customizable widgets for complete operational visibility.
        </li>
      </ul>

      <h2>Who Is It For?</h2>
      <p>
        PArAsYtE is tailored for:
        <ul>
          <li>
            <strong>System administrators</strong> managing fleets of devices.
          </li>
          <li>
            <strong>DevOps and DevSecOps teams</strong> needing visibility and
            automation across environments.
          </li>
          <li>
            <strong>Cybersecurity professionals</strong> seeking hardened
            infrastructure with zero-trust enforcement.
          </li>
          <li>
            <strong>Power users and developers</strong> who value control,
            transparency, and self-hosting over cloud dependency.
          </li>
        </ul>
      </p>

      <h2>Use Cases</h2>
      <ul>
        <li>
          <strong>Home Labs:</strong> Monitor and control your personal servers,
          NAS, and workstations from a mobile app or dashboard.
        </li>
        <li>
          <strong>Enterprise IT:</strong> Remotely manage hundreds of machines
          with policy-based automation and alerting.
        </li>
        <li>
          <strong>Remote Teams:</strong> Use encrypted chat and file sharing to
          securely collaborate on infrastructure operations.
        </li>
        <li>
          <strong>Incident Response:</strong> Get notified instantly when a
          system spikes, crashes, or behaves unusually — and take action
          immediately.
        </li>
      </ul>

      <h2>Built for Extensibility</h2>
      <p>
        PArAsYtE is designed to grow with your needs. Our open architecture
        allows you to:
        <ul>
          <li>
            Integrate with tools like MeshCentral, Grafana, or Prometheus.
          </li>
          <li>Deploy custom scripts and automation flows.</li>
          <li>
            Use APIs to connect with external dashboards, alerting tools, or
            SIEM systems.
          </li>
          <li>Add custom features using plugins and RESTful APIs.</li>
        </ul>
      </p>

      <h2>Security First, Always</h2>
      <p>
        Unlike traditional platforms that prioritize convenience over safety,
        PArAsYtE is secure by default. All communications are encrypted with
        modern standards. Role-based access control, two-factor authentication,
        IP whitelisting, and cryptographically verified logs keep your data
        protected at every step.
      </p>

      <h2>How to Get Started</h2>
      <p>
        You can start using PArAsYtE right away:
        <ol>
          <li>Download the web or mobile client (or both).</li>
          <li>Connect your systems using the onboarding wizard.</li>
          <li>
            Start monitoring, managing, and securing your infrastructure — with
            confidence and clarity.
          </li>
        </ol>
      </p>

      <h2>Join the Mission</h2>
      <p>
        PArAsYtE is more than just a tool — it’s a philosophy. It’s about
        empowering users to take back control of their digital environments, to
        operate independently of big cloud providers, and to secure their data
        on their terms. Whether you're running a personal home server or an
        enterprise-grade network, PArAsYtE is the ultimate companion for
        resilient, autonomous infrastructure.
      </p>
    </div>
    <div className="down">
      <Link to="/features" className="cta-button">
        Explore Features
      </Link>
    </div>
  </section>
);

export default Home;
