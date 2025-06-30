import React from 'react'
import { useState,useEffect } from 'react'
import Newsitem from './Newsitem'

const Newsboard = ({category}) => {


    const [article, setarticle] = useState([])

    useEffect(() => {
    //   const fetxhnews=async()=>{      
    //      console.log("Fetching news for:", category);
    //     // // const res = await fetch(`http://localhost:5000/api/news?category=${category}`);
    //     // const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news?category=general`);
    //     // const data = await res.json();
    //     //   setarticle(data.articles);

    //       fetch(`/api/news?category=${category}`)
    // .then(res => res.json())
    // .then(data => setarticle(data.articles));
    // }
    // fetxhnews();

     const fetchNews = async () => {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      console.log("Fetching from:", `${BACKEND_URL}/api/news?category=${category}`);
      
      try {
        const response = await fetch(`${BACKEND_URL}/api/news?category=${category}`);
        const data = await response.json();
        setarticle(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    },[category])
    
  return (
    <div>
      <h2 className='y text-center mt-4  transition-transform duration-300 hover:scale-110'>Latest <span className=' badge bg-danger'>News</span></h2>
      {article.map((news,index)=>{
        return <Newsitem 
        key={index} 
        title={news.title} 
        description={news.description} 
        src={news.urlToImage} 
        url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard
