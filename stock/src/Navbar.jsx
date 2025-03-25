
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/watchlist">Watchlist</Link>
      <Link to="/news">News</Link>
      <Link to="/alerts">Alerts</Link>
    </nav>
  );
};

export default Navbar;
