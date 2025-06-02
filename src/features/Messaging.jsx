// // pages/features/Security.jsx
// import React from 'react';

// const Messaging = () => (
//   <section className="feature-detail">
//     <h2>Messaing</h2>
//     <p>PIN-Based Messaging</p>
//   </section>
// );

// export default Messaging;

// import React from "react";

// const MessagingFeatures = () => (
//   <div className="p-8">
//     <h1 className="text-3xl font-bold mb-4">Messaging</h1>
//     <p>Details about messaging capabilities in Parasyte.</p>
//   </div>
// );

// export default MessagingFeatures;

import React from "react";
import "./Messaging.css"; // Make sure this matches the filename

const Messaging = () => (
  <div className="feature-details">
    <h1>Messaging</h1>
    <p>
      Our secure messaging system ensures seamless and encrypted communication
      between users and administrators. Designed for internal coordination,
      system alerts, and remote assistance, the messaging module supports both
      one-on-one and group conversations.
    </p>
    <p>
      All messages are end-to-end encrypted and stored securely, with built-in
      moderation tools and audit logs for compliance. Notifications are
      delivered in real time, and offline messages are queued and pushed once
      users reconnect.
    </p>
    <p>
      This module can be extended with chatbot assistants, voice support, and
      integration with external services like Slack or Microsoft Teams, making
      it a flexible communication layer for any environment.
    </p>
  </div>
);

export default Messaging;
