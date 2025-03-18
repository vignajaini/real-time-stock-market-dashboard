import React, { useState, useEffect } from "react";
import Stocks from "./Stocks";
import MutualFunds from "./MutualFunds";
import FNO from "./FNO";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("stocks");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">📊 Stock Market Dashboard</h1>
      
      {/* Navigation Tabs */}
      <div className="flex space-x-4 mt-4">
        <button 
          className={`px-4 py-2 ${activeTab === "stocks" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("stocks")}>
          Stocks
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === "mutualfunds" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("mutualfunds")}>
          Mutual Funds
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === "fno" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("fno")}>
          F&O
        </button>
      </div>

      {/* Render Components Based on Tab */}
      <div className="mt-6">
        {activeTab === "stocks" && <Stocks />}
        {activeTab === "mutualfunds" && <MutualFunds />}
        {activeTab === "fno" && <FNO />}
      </div>
    </div>
  );
};

export default Dashboard;
