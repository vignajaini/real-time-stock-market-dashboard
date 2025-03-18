import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Watchlist from "./Watchlist";
import News from "./News";
import Portfolio from "./Portfolio";
import Alerts from "./Alerts";
import Navbar from "./Navbar";
import Home from "./Home";
import FNO from "./FNO";  // Futures & Options Component
import MutualFunds from "./MutualFunds"; // Mutual Funds Component
import Stocks from "./Stocks"; // Stocks Component
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="stocks" element={<Stocks />} />
          <Route path="mutualfunds" element={<MutualFunds />} />
          <Route path="fNO" element={<FNO />} />
        </Route>
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/news" element={<News />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </Router>
  );
}

export default App;
