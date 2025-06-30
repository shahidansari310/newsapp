import React from 'react'
import { useState,useEffect } from 'react'
import Newsitem from './Newsitem'

const Newsboard = ({cateogory}) => {


    const [article, setarticle] = useState([])

    useEffect(() => {
      const url=`https://newsapi.org/v2/top-headlines?country=us&cateogory=${cateogory}&apiKey=${import.meta.env.VITE_API}`;

      fetch(url).then(reponse=>reponse.json()).then(data=>setarticle(data.articles));
    },[])
    
  return (
    <div>
      <h2 className='text-center '>Latest <span className='badge bg-danger'>News</span></h2>
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
