// import React from "react";

// const Management = () => (
//   <div className="p-8">
//     <h1 className="text-3xl font-bold mb-4">Management</h1>
//     <p>Remote control, policy configuration, and system orchestration.</p>
//   </div>
// );

// export default Management;

import React from "react";
import "./Management.css"; // Make sure this matches the filename

const Management = () => (
  <div className="feature-details">
    <h1>Management</h1>
    <p>
      The Management module allows full administrative control over your
      infrastructure, systems, and user policies. You can remotely execute
      commands, schedule updates, enforce security policies, and manage access
      controls across all devices.
    </p>
    <p>
      Features include role-based access management (RBAC), remote software
      deployment, system patching, and configuration backup/restore. All actions
      are logged and can be reviewed in an auditable trail.
    </p>
    <p>
      This feature is ideal for IT administrators looking to streamline system
      governance while maintaining tight security and operational compliance
      across distributed environments.
    </p>
  </div>
);

export default Management;
