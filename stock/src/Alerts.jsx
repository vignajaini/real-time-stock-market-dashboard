import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Alerts() {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const generatedAlerts = watchlist.map((stock) => {
      if (stock.price_2007 > stock.price_2002 * 1.5) {
        return {
          id: stock.symbol,
          type: "Price Surge",
          message: `${stock.company} (${stock.symbol}) surged significantly!`,
        };
      }
      return null;
    }).filter(Boolean);

    setAlerts(generatedAlerts);
  }, [watchlist]);

  return (
    <div className="alert-container">
      <motion.h2 className="alert-title" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        Stock Alerts
      </motion.h2>
      {alerts.length === 0 ? (
        <p className="no-alerts">No alerts at the moment.</p>
      ) : (
        <ul className="alert-list">
          {alerts.map((alert) => (
            <motion.li key={alert.id} className="alert-item" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <strong>{alert.type}:</strong> {alert.message}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
