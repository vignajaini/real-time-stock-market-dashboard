import React, { useState } from "react";

const Dashboard = () => {
  const [stocks] = useState([
    { symbol: "AAPL", price: 150 },
    { symbol: "GOOGL", price: 2800 },
    { symbol: "AMZN", price: 3500 },
  ]);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">📊 Stock Market Dashboard</h1>
      <div className="stock-grid">
        {stocks.map(({ symbol, price }) => (
          <div key={symbol} className="stock-card">
            <h2>{symbol}</h2>
            <p className="stock-price">${price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
