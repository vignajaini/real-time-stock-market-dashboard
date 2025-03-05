import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to StockPulse</h1>
        <p>Your all-in-one stock market tracking solution</p>
        <Link to="/dashboard" className="button-primary">Explore Dashboard</Link>
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
