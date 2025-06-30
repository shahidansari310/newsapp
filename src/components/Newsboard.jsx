import React from 'react'
import { useState,useEffect } from 'react'
import Newsitem from './Newsitem'

const Newsboard = ({category}) => {


    const [article, setarticle] = useState([])

    useEffect(() => {
      const fetxhnews=async()=>{      
        const res = await fetch(`http://localhost:5000/api/news?category=${category}`);
        const data = await res.json();
          setarticle(data.articles);
    }
    fetxhnews();
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
