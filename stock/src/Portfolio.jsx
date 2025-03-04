// pages/Portfolio.jsx
import React, { useState } from "react";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([
    { symbol: "AAPL", shares: 10, price: 150 },
    { symbol: "TSLA", shares: 5, price: 700 },
  ]);

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Shares</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map(({ symbol, shares, price }) => (
            <tr key={symbol}>
              <td>{symbol}</td>
              <td>{shares}</td>
              <td>${price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
