import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const stocksData = [
  {
    company: "Apple Inc.",
    description: "Technology company specializing in consumer electronics.",
    initial_price: 100,
    price_2002: 150,
    price_2007: 200,
    symbol: "AAPL",
  },
  {
    company: "Tesla Inc.",
    description: "Electric vehicle and clean energy company.",
    initial_price: 80,
    price_2002: 120,
    price_2007: 300,
    symbol: "TSLA",
  },
  {
    company: "Amazon Inc.",
    description: "E-commerce and cloud computing giant.",
    initial_price: 50,
    price_2002: 90,
    price_2007: 250,
    symbol: "AMZN",
  },
  {
    company: "Microsoft Corp.",
    description: "Software and cloud computing company.",
    initial_price: 60,
    price_2002: 110,
    price_2007: 260,
    symbol: "MSFT",
  },
  {
    company: "Google LLC",
    description: "Technology company specializing in search and online advertising.",
    initial_price: 70,
    price_2002: 130,
    price_2007: 280,
    symbol: "GOOGL",
  },
  {
    company: "Meta Platforms",
    description: "Social media and technology company, formerly Facebook.",
    initial_price: 40,
    price_2002: 80,
    price_2007: 220,
    symbol: "META",
  }
];

export default function Portfolio() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (stock) => {
    if (!watchlist.some((item) => item.symbol === stock.symbol)) {
      setWatchlist([...watchlist, stock]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.h1 
        className="text-3xl font-bold text-center" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        Stock Management System
      </motion.h1>
      
      {stocksData.map((stock, index) => (
        <Card key={index}>
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
      
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">Watchlist</h2>
          {watchlist.length > 0 ? (
            <ul>
              {watchlist.map((stock, index) => (
                <li key={index}>{stock.company} ({stock.symbol})</li>
              ))}
            </ul>
          ) : (
            <p>No stocks in watchlist</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}