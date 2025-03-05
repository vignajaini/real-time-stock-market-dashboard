import React, { useEffect, useState, useCallback } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [history, setHistory] = useState({});

  useEffect(() => {
    const ws = new WebSocket("wss://example.com/stock-data"); // Replace with actual API

    ws.onmessage = (event) => {
      const stockData = JSON.parse(event.data);
      
      // Batch state updates to prevent excessive re-renders
      setStocks((prevStocks) => {
        if (JSON.stringify(prevStocks) !== JSON.stringify(stockData)) {
          return stockData;
        }
        return prevStocks;
      });

      setHistory((prevHistory) => {
        return stockData.reduce((updatedHistory, { symbol, price }) => {
          if (!prevHistory[symbol] || prevHistory[symbol].slice(-1)[0].price !== price) {
            updatedHistory[symbol] = [...(prevHistory[symbol] || []), { time: new Date().toLocaleTimeString(), price }];
          } else {
            updatedHistory[symbol] = prevHistory[symbol]; // Keep previous history if no change
          }
          return updatedHistory;
        }, { ...prevHistory });
      });
    };

    return () => ws.close();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">📈 Real-Time Stock Market Dashboard</h1>
      <div className="stock-grid">
        {stocks.map(({ symbol, price }) => (
          <div key={symbol} className="stock-card">
            <h2 className="stock-symbol">{symbol}</h2>
            <p className="stock-price">${price}</p>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={history[symbol] || []}>
                <XAxis dataKey="time" hide />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#ffcc00" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
