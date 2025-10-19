import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Loading from './Loading';

const Newsboard = ({ category }) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      console.log("🔍 Fetching from:", `${BACKEND_URL}/api/news?category=${category}`);

      try {
        const response = await fetch(`${BACKEND_URL}/api/news?category=${category}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        setArticle(data.articles || []);
      } catch (error) {
        console.error("❌ Error fetching news:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  // Show loading component while fetching
  if (loading) {
    return <Loading category={category} />;
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-300">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Show message if no articles found
  if (!article || article.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold text-white mb-2">No News Available</h2>
          <p className="text-gray-300">Try selecting a different category</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-3xl font-bold mb-4 mt-4 text-white">
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