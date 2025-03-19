import React from "react";
import "./Home.css";

const Home = ({ openAuthModal }) => {
  return (
    <div className="home-container">
      <div className="overlay"></div>

      

      {/* Hero Section */}
      <div className="hero">
        <h1>Real-Time Market Insights</h1>
        <p>Track stocks, analyze trends, and make smarter investments—all in one platform.</p>
        <button onClick={openAuthModal} className="button-primary">Sign Up</button>
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature-card">
          <h3>Live Stock Data</h3>
          <p>Get real-time updates on global markets.</p>
        </div>
        <div className="feature-card">
          <h3>Portfolio Tracking</h3>
          <p>Monitor and manage your investments easily.</p>
        </div>
        <div className="feature-card">
          <h3>AI Market Predictions</h3>
          <p>Use AI-driven analytics for better decisions.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
