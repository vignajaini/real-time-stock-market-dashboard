// pages/Watchlist.jsx
import React, { useState } from "react";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState(["AAPL", "TSLA", "GOOGL"]);

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <ul>
        {watchlist.map((stock, index) => (
          <li key={index}>{stock}</li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
