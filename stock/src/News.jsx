
import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?category=business&apiKey=YOUR_API_KEY")
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="news">
      <h1>Stock Market News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
