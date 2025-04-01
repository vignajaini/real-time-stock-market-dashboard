import { Card, CardContent, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Alerts() {
  const [watchlist, setWatchlist] = useState(() => JSON.parse(localStorage.getItem("watchlist")) || []);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const generateAlerts = () => {
      const newAlerts = watchlist.map((stock) => {
        const currentPrice = stock.initial_price + Math.floor(Math.random() * 50 - 25); // Simulated price change
        const priceChange = ((currentPrice - stock.initial_price) / stock.initial_price) * 100;

        if (priceChange >= 10) {
          return { id: stock.symbol, type: "Surge", message: `${stock.company} jumped ${priceChange.toFixed(1)}%!`, color: "green" };
        } else if (priceChange <= -10) {
          return { id: stock.symbol, type: "Drop", message: `${stock.company} dropped ${Math.abs(priceChange.toFixed(1))}%`, color: "red" };
        } else {
          return null;
        }
      }).filter(Boolean);

      setAlerts(newAlerts);
    };

    generateAlerts();
    const interval = setInterval(generateAlerts, 5000); // Refresh alerts every 5s
    return () => clearInterval(interval);
  }, [watchlist]);

  return (
    <div className="alert-container">
      <motion.h2 className="alert-title" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        Stock Alerts 🚨
      </motion.h2>

      {alerts.length === 0 ? (
        <Typography variant="body1" className="no-alerts">No alerts at the moment.</Typography>
      ) : (
        <div className="alert-list">
          {alerts.map((alert) => (
            <motion.div key={alert.id} className="alert-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Card sx={{ background: alert.color === "green" ? "#e8f5e9" : "#ffebee", mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: alert.color }}>{alert.type} Alert</Typography>
                  <Typography variant="body1">{alert.message}</Typography>
                  <Button variant="contained" size="small" sx={{ mt: 1 }} onClick={() => alert("Redirecting...")}>View Stock</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
