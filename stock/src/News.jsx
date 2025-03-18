import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Tabs, Tab } from "@mui/material";
import { motion } from "framer-motion";

const News = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [stockNews, setStockNews] = useState([]);
  const [trendingStocks, setTrendingStocks] = useState([]);
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("business");

  const NEWS_API_KEY = "YOUR_NEWSAPI_KEY";
  const STOCK_API_KEY = "YOUR_FMP_API_KEY";

  useEffect(() => {
    fetchTrendingStocks();
    fetchLatestNews();
    fetchStockNews(stockSymbol);
  }, []);

  const fetchLatestNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${selectedCategory}&apiKey=${NEWS_API_KEY}`
      );
      setLatestNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  const fetchStockNews = async (symbol) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/stock_news?tickers=${symbol}&limit=10&apikey=${STOCK_API_KEY}`
      );
      setStockNews(response.data);
    } catch (error) {
      console.error("Error fetching stock news:", error);
    }
    setLoading(false);
  };

  const fetchTrendingStocks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${STOCK_API_KEY}`
      );
      setTrendingStocks(response.data);
    } catch (error) {
      console.error("Error fetching trending stocks:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Stock Market News</h1>

      {/* News Category Filter */}
      <Tabs
        value={selectedCategory}
        onChange={(event, newValue) => setSelectedCategory(newValue)}
        centered
      >
        {["business", "technology", "crypto", "finance", "energy"].map(
          (category) => (
            <Tab
              key={category}
              label={category.toUpperCase()}
              value={category}
              onClick={() => fetchLatestNews()}
            />
          )
        )}
      </Tabs>

      {/* Trending Stocks Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">🔥 Trending Stocks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingStocks.slice(0, 8).map((stock, index) => (
            <motion.div
              key={index}
              className="border p-3 rounded-lg text-center shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold">{stock.ticker}</h3>
              <p className="text-green-600">Price: ${stock.price}</p>
              <p
                className={
                  stock.changesPercentage > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {stock.changesPercentage}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest Market News Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">📰 Latest {selectedCategory} News</h2>
        {loading ? (
          <p>Loading latest news...</p>
        ) : (
          latestNews.map((article, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="mb-4"
            >
              <Card className="shadow-lg">
                <CardContent>
                  <h3 className="font-semibold">{article.title}</h3>
                  <p className="text-gray-600">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Read more
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>

      {/* Stock-Specific News Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">📈 Stock-Specific News</h2>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter stock symbol (e.g., TSLA, AAPL)"
            value={stockSymbol}
            onChange={(e) => setStockSymbol(e.target.value.toUpperCase())}
            className="border p-2 rounded"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => fetchStockNews(stockSymbol)}
          >
            Search
          </Button>
        </div>

        {loading ? (
          <p>Loading stock news...</p>
        ) : (
          stockNews.map((article, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }} className="mb-4">
              <Card className="shadow-lg">
                <CardContent>
                  <h3 className="font-semibold">{article.title}</h3>
                  <p className="text-gray-600">{article.summary}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Read more
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
