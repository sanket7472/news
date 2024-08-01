import React, { useEffect, useState } from 'react'
import axios from 'axios'
import express from 'express'





function Home() {
const [news , setnews] = useState([])


const loadnews= async()=>{
    const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-07-01&sortBy=publishedAt&apiKey=091d6b7c752f44e3912ecd34a4f05b47")
     setnews(response.data)
}

useEffect (
    () => {
        loadnews();
        },[]
)


  return (
    <>
    <h1>News App</h1>
    {
        news.map((newsarticle, i) => {
            const [author, title, description, url, urlToImg, publishedAt, content]= newsarticle

            return (
                <div key={i}>
                   <img src= {urlToImg} className='news-img'/>
                    <h2>{title}</h2>


                </div>
            )

        })
            

        }
    
    </>
  )
}

export default Home