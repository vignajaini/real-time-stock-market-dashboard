import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stocksData = [
  { company: "Apple Inc.", description: "Technology company specializing in consumer electronics.", initial_price: 100, price_2002: 150, price_2007: 200, symbol: "AAPL" },
  { company: "Tesla Inc.", description: "Electric vehicle and clean energy company.", initial_price: 80, price_2002: 120, price_2007: 300, symbol: "TSLA" },
  { company: "Amazon Inc.", description: "E-commerce and cloud computing giant.", initial_price: 50, price_2002: 90, price_2007: 250, symbol: "AMZN" },
  
];

export default function Portfolio() {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  const addToWatchlist = (stock) => {
    if (!watchlist.some((item) => item.symbol === stock.symbol)) {
      const updatedWatchlist = [...watchlist, stock];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.h1 className="text-3xl font-bold text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Stock Management System
      </motion.h1>

      {stocksData.map((stock, index) => (
        <Card key={index} className="shadow-md rounded-lg p-4">
          <CardContent>
            <h2 className="text-xl font-semibold">{stock.company} ({stock.symbol})</h2>
            <p>{stock.description}</p>
            <p>Initial Price: ${stock.initial_price}</p>
            <p>Price in 2002: ${stock.price_2002}</p>
            <p>Price in 2007: ${stock.price_2007}</p>
            <Button variant="contained" color="primary" onClick={() => addToWatchlist(stock)}>
              Add to Watchlist
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
