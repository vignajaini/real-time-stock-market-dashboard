<<<<<<< HEAD
import React from "react";
=======
/*import React from "react";
import { Link } from "react-router-dom";
>>>>>>> ff3fdf6 (updated)
import "./Home.css";
const Home = ({ openSignup }) => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to StockPulse</h1>
        <p>Your all-in-one stock market tracking solution</p>
        <button onClick={openSignup} className="button-primary">Sign Up</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Live Market Updates</h2>
          <p>Stay ahead with real-time stock prices.</p>
        </div>
        <div className="feature-card">
          <h2>Personalized Watchlist</h2>
          <p>Track your favorite stocks with ease.</p>
        </div>
        <div className="feature-card">
          <h2>Market Insights & News</h2>
          <p>Get the latest financial updates in one place.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
*/
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">StockPulse</div>
      
        <div className="auth-buttons">
          <Link to="/login" className="auth-button">Log In</Link>
          <Link to="/signup" className="auth-button signup">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Real-Time Market Insights</h1>
        <p>Track stocks, analyze trends, and make smarter investments—all in one platform.</p>
        <button className="button-primary">Get Started</button>
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
