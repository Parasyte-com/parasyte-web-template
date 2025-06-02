// import React from "react";

// const Monitoring = () => (
//   <div className="p-8">
//     <h1 className="text-3xl font-bold mb-4">Monitoring</h1>
//     <p>View system health, metrics, and logs in real time.</p>
//   </div>
// );

// export default Monitoring;

// import React from "react";
// import "./Monitoring.css"; // Make sure this matches the filename

// const Monitoring = () => (
//   <div className="feature-details">
//     <h1 className="text-3xl font-bold mb-4">Monitoring</h1>
//     <p>View system health, metrics, and logs in real time.</p>
//   </div>
// );

// export default Monitoring;

import React from "react";
import "./Management.css"; // Make sure this matches the filename

const Management = () => (
  <div className="feature-details">
    <h1>Monitoring</h1>
    <p>
      Get real-time visibility into your systems with powerful monitoring
      capabilities. Track critical metrics like CPU usage, memory consumption,
      disk activity, and process lifecycles with intuitive dashboards and
      visualizations.
    </p>
    <p>
      Built on industry standards like Prometheus and sysinfo, the monitoring
      module provides alerts, historical data trends, and predictive analytics
      to prevent system failures before they occur. It also supports integration
      with third-party tools like Grafana.
    </p>
    <p>
      You can configure threshold-based alerts, generate automated reports, and
      monitor multiple systems simultaneously. This ensures optimal uptime,
      performance, and fast incident response.
    </p>
  </div>
);

export default Management;
