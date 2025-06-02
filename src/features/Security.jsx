// // pages/features/Security.jsx
// import React from 'react';

// const Security = () => (
//   <section className="feature-detail">
//     <h2>Security</h2>
//     <p>Messages, calls, and voicemails are encrypted on-device.</p>
//   </section>
// );

// export default Security;

import React from "react";
import "./Security.css"; // Make sure this matches the filename

const Security = () => (
  <div className="feature-details">
    <h1>Security</h1>
    <p>
      Security is the backbone of the entire platform. From encrypted
      communications to access restrictions and tamper-proof logs, every feature
      is built with security in mind. Our system uses AES-256 and RSA-2048
      encryption to protect data at rest and in transit.
    </p>
    <p>
      Multi-factor authentication (MFA), role-based access controls, and
      automated patch management ensure that only authorized users can access
      critical systems. Anomaly detection and threat intelligence integrations
      add layers of proactive protection.
    </p>
    <p>
      Compliance with major security standards such as ISO 27001 and NIST
      ensures your infrastructure remains audit-ready and resilient against
      modern cyber threats.
    </p>
  </div>
);

export default Security;
