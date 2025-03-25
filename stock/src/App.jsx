import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Watchlist from "./Watchlist";
import News from "./News";
import Portfolio from "./Portfolio";
import Alerts from "./Alerts";
import Navbar from "./Navbar";
import AuthModal from "./AuthModal"; 
import FNO from "./FNO";  
import MutualFunds from "./MutualFunds"; 
import Stocks from "./Stocks"; 

import "./App.css";

function App() {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  return (
    <Router>
      <Navbar openAuthModal={() => setAuthModalOpen(true)} />
      <Routes>

        <Route path="/" element={<Home openAuthModal={() => setAuthModalOpen(true)} />} />
        <Route path="/dashboard" element={<Dashboard />} />

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
      {isAuthModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}

        
    </Router>
  );
}

export default App;
