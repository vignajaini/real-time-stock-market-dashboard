import React, { useEffect, useState } from "react";
import "./Stocks.css"; // Import CSS for styling

const Stocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const mockStocks = [
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: (150 + Math.random() * 50).toFixed(2),
        change: (Math.random() * 4 - 2).toFixed(2),
        logo: "https://logo.clearbit.com/apple.com"
      },
      {
        symbol: "TSLA",
        name: "Tesla Inc.",
        price: (600 + Math.random() * 200).toFixed(2),
        change: (Math.random() * 4 - 2).toFixed(2),
        logo: "https://logo.clearbit.com/tesla.com"
      },
      {
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        price: (2500 + Math.random() * 300).toFixed(2),
        change: (Math.random() * 4 - 2).toFixed(2),
        logo: "https://logo.clearbit.com/google.com"
      },
      {
        symbol: "AMZN",
        name: "Amazon.com Inc.",
        price: (3000 + Math.random() * 500).toFixed(2),
        change: (Math.random() * 4 - 2).toFixed(2),
        logo: "https://logo.clearbit.com/amazon.com"
      },
      {
        symbol: "MSFT",
        name: "Microsoft Corp.",
        price: (280 + Math.random() * 50).toFixed(2),
        change: (Math.random() * 4 - 2).toFixed(2),
        logo: "https://logo.clearbit.com/microsoft.com"
      },
      {
        symbol: "NFLX",
        name: "Netflix Inc.",
        price: (500 + Math.random() * 100).toFixed(2),
        change: (Math.random() * 4 - 2).toFixed(2),
        logo: "https://logo.clearbit.com/netflix.com"
      }
    ];

    setStocks(mockStocks);
  }, []);

  return (
    <div className="stocks-container">
      <h2>📈 Stock Market Dashboard</h2>
      <div className="stocks-grid">
        {stocks.map(({ symbol, name, price, change, logo }, index) => (
          <div key={index} className={`stock-card ${change >= 0 ? "positive" : "negative"}`}>
            <img src={logo} alt={name} className="stock-logo" />
            <h3>{name} ({symbol})</h3>
            <p>💰 Price: ${price}</p>
            <p className="stock-change">
              {change >= 0 ? "🟢" : "🔴"} {change}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stocks;
