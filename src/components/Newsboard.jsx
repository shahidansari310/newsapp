import React from 'react'
import { useState,useEffect } from 'react'

const Newsboard = () => {


    const [article, setarticle] = useState([])

    useEffect(() => {
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API}`;
      fetch(url).then(reponse=>reponse.json()).then(data=>setarticle(data.article));
    },[])
    
  return (
    <div>
      <h2 className='text-center '>Latest <span className='badge bg-danger'>News</span></h2>
    </div>
  )
}

export default Newsboard
