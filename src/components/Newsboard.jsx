import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

const Newsboard = ({ category }) => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
        const res = await fetch(
          `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API}`
        );
        const data = await res.json();

        if (data.articles) {
          setArticle(data.articles);
        } 
    }

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className='y text-center mt-4 transition-transform duration-300 hover:scale-110'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>

      {error && <p className="text-center text-red-500">{error}</p>}

      {article?.length > 0 ? (
        article.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        !error && <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default Newsboard;
