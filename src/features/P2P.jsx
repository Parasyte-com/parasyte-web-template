// // pages/features/Security.jsx
// import React from 'react';

// const P2P = () => (
//   <section className="feature-detail">
//     <h2>Peer-to-peer</h2>
//     <p>Messages, calls, and voicemails are encrypted on-device.</p>
//   </section>
// );

// export default P2P;

import React from "react";
import "./P2P.css"; // Make sure this matches the filename

const P2P = () => (
  <div className="feature-details">
    <h1>P2P Connectivity</h1>
    <p>
      Enable direct, secure communication between devices using Peer-to-Peer
      (P2P) networking. This architecture reduces latency, enhances privacy, and
      improves performance by bypassing centralized servers when possible.
    </p>
    <p>
      Our P2P implementation supports encrypted data transmission, NAT
      traversal, and automatic fallback to relays when direct connection is not
      feasible. It’s perfect for remote sessions, data sharing, or
      device-to-device coordination in IoT environments.
    </p>
    <p>
      The system includes advanced session management, retry logic, and peer
      discovery protocols, ensuring resilience and adaptability in any network
      condition.
    </p>
  </div>
);

export default P2P;
