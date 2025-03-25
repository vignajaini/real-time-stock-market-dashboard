
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, PieChart, BarChart3 } from "lucide-react";
import "./Home.css";

const Home = ({ openAuthModal }) => {
  return (
    <div className="home-container">
      <div className="overlay"></div>

      {/* Hero Section with Animation */}
      <motion.div 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Stock Pulse</h1>
        <h3>Real-Time Market Insights</h3> 
        <div className="scrolling-container">
        <p className="scrolling-text">Stay ahead in the market—track stocks, decode trends,and invest smarter with real-time insights, all in one powerful platform.</p>
        </div>
        <motion.button 
          onClick={openAuthModal} 
          className="home-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Features Section */}
      <div className="features">
        <motion.div 
          className="feature-card" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <TrendingUp className="feature-icon"/>
          <h3>Live Stock Data</h3>
          <p>Get real-time updates on global markets.</p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <PieChart className="feature-icon"/>
          <h3>Portfolio Tracking</h3>
          <p>Monitor and manage your investments easily.</p>
        </motion.div>

        <motion.div 
          className="feature-card"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <BarChart3 className="feature-icon"/>
          <h3>AI Market Predictions</h3>
          <p>Use AI-driven analytics for better decisions.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

