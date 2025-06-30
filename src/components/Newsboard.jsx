import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

const Newsboard = ({ category }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      console.log("🔍 Fetching from:", `${BACKEND_URL}/api/news?category=${category}`);

      try {
        const response = await fetch(`${BACKEND_URL}/api/news?category=${category}`);
        const data = await response.json();
        setArticle(data.articles);
      } catch (error) {
        console.error("❌ Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-3xl font-bold mb-4   mt-4 text-white">
        Latest <span className="bg-red-600 text-white px-3 py-1 rounded-full">News</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {article.map((news, index) => (
          <div
            key={index}
            className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Newsitem
              title={news.title || "No Title"}
              description={news.description || "No description available."}
              src={
                news.urlToImage ||
                "https://via.placeholder.com/400x200?text=No+Image"
              }
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
