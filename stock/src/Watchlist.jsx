import React, { useState, useEffect } from "react";
import { Card, CardContent, Button } from "@mui/material";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    setWatchlist(JSON.parse(localStorage.getItem("watchlist")) || []);
  }, []);

  const removeFromWatchlist = (symbol) => {
    const updatedWatchlist = watchlist.filter((stock) => stock.symbol !== symbol);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">My Watchlist</h1>

      {watchlist.length > 0 ? (
        watchlist.map((stock, index) => (
          <Card key={index} className="shadow-md rounded-lg p-4">
            <CardContent>
              <h2 className="text-xl font-semibold">{stock.company} ({stock.symbol})</h2>
              <p>{stock.description}</p>
              <p>Initial Price: ${stock.initial_price}</p>
              <p>Price in 2002: ${stock.price_2002}</p>
              <p>Price in 2007: ${stock.price_2007}</p>
              <Button variant="contained" color="secondary" onClick={() => removeFromWatchlist(stock.symbol)}>
                Remove from Watchlist
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-center">No stocks in watchlist</p>
      )}
    </div>
  );
};

export default Watchlist;
