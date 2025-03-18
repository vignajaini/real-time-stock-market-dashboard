/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Watchlist from "./Watchlist";
import News from "./News";
import Portfolio from "./Portfolio";
import Alerts from "./Alerts";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/news" element={<News />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
      {showAuthModal && (
        <AuthModal
          isLogin={isLogin}
          onClose={() => setShowAuthModal(false)}
          setIsAuthenticated={setIsAuthenticated}
          openLogin={openLogin}
        />
      )}
    </Router>
  );
}

export default App;*/
/*
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Watchlist from "./Watchlist";
import News from "./News";
import Portfolio from "./Portfolio";
import Alerts from "./Alerts";
import Navbar from "./Navbar";
import Home from "./Home";
import AuthModal from "./AuthModal"; // New modal component
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openSignup = () => {
    setIsLogin(false);
    setShowAuthModal(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setShowAuthModal(true);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Home openSignup={openSignup} />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/watchlist" element={isAuthenticated ? <Watchlist /> : <Navigate to="/" />} />
        <Route path="/news" element={isAuthenticated ? <News /> : <Navigate to="/" />} />
        <Route path="/portfolio" element={isAuthenticated ? <Portfolio /> : <Navigate to="/" />} />
        <Route path="/alerts" element={isAuthenticated ? <Alerts /> : <Navigate to="/" />} />
      </Routes>
      {showAuthModal && (
        <AuthModal
          isLogin={isLogin}
          onClose={() => setShowAuthModal(false)}
          setIsAuthenticated={setIsAuthenticated}
          openLogin={openLogin}
        />
      )}
    </Router>
  );
}

export default App;*/
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Watchlist from "./Watchlist";
import News from "./News";
import Portfolio from "./Portfolio";
import Alerts from "./Alerts";
import Navbar from "./Navbar";
import Home from "./Home";
import AuthModal from "./AuthModal";  // New modal component for signup/login
import "./App.css";

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup"); // Default to signup

  const openSignup = () => {
    setAuthMode("signup");
    setIsAuthModalOpen(true);
  };

  const openLogin = () => {
    setAuthMode("login");
    setIsAuthModalOpen(true);
  };

  const closeModal = () => setIsAuthModalOpen(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home openSignup={openSignup} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/news" element={<News />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>

      {/* Authentication Modal */}
      {isAuthModalOpen && <AuthModal mode={authMode} onClose={closeModal} />}
    </Router>
  );
}

export default App;

