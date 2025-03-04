// pages/Alerts.jsx
import React, { useState } from "react";

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { symbol: "AAPL", threshold: 155 },
    { symbol: "TSLA", threshold: 720 },
  ]);

  return (
    <div className="alerts">
      <h1>Price Alerts</h1>
      <ul>
        {alerts.map(({ symbol, threshold }, index) => (
          <li key={index}>{symbol} → Alert at ${threshold}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
