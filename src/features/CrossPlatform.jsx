// import React from "react";

// const CrossPlatform = () => (
//   <div className="p-8">
//     <h1 className="text-3xl font-bold mb-4">Cross-Platform Support</h1>
//     <p>This feature allows Parasyte to run on Windows, macOS, and Linux.</p>
//   </div>
// );

// export default CrossPlatform;

import React from "react";
import "./CrossPlatform.css"; // Make sure this matches the filename

const CrossPlatform = () => (
  <div className="feature-details">
    <h1>Cross-Platform Compatibility</h1>
    <p>
      Our system is designed to run seamlessly across multiple platforms,
      including Windows, Linux, macOS, Android, and iOS. Whether you're managing
      servers, desktops, or mobile devices, you get a consistent experience and
      feature set.
    </p>
    <p>
      This flexibility ensures you can deploy and scale across heterogeneous
      environments without needing to rebuild or reconfigure core components.
      Updates and features are released uniformly across all platforms to
      minimize fragmentation.
    </p>
    <p>
      From the web dashboard to the native mobile apps, every interface is
      optimized for responsiveness, usability, and real-time synchronization,
      ensuring you're always connected and in control—no matter your device.
    </p>
  </div>
);

export default CrossPlatform;
