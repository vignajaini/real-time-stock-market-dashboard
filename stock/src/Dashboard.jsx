// pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [history, setHistory] = useState({});

  useEffect(() => {
    const ws = new WebSocket("wss://example.com/stock-data"); // Replace with actual API

    ws.onmessage = (event) => {
      const stockData = JSON.parse(event.data);
      setStocks(stockData);
      setHistory((prev) => {
        const updatedHistory = { ...prev };
        stockData.forEach(({ symbol, price }) => {
          updatedHistory[symbol] = [...(updatedHistory[symbol] || []), { time: new Date().toLocaleTimeString(), price }];
        });
        return updatedHistory;
      });
    };

    return () => ws.close();
  }, []);

  return (
    <div className="dashboard">
      <h1>Real-Time Stock Market Dashboard</h1>
      <div className="stock-grid">
        {stocks.map(({ symbol, price }) => (
          <div key={symbol} className="stock-card">
            <h2>{symbol}</h2>
            <p className="price">${price}</p>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={history[symbol] || []}>
                <XAxis dataKey="time" hide />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
