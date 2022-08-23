import React from 'react'
import { useNavigate } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'


export default function Home() {
    const navigate=useNavigate()
    
  return (
    <>
     <Searchbar/>
     <div className='container'>
        <div className='home-banner'>
          <img className="banner-img" src="https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2018/05/Kolkata-Blog-Banner-1030x538.png" alt="banner"/>
            
          <div>
              <h2>You have a lot on your plate, let Favoreats help with dinner</h2>
              <p>Take a few minutes to tell us about your dinner goals and preferences, and we will create a meal plan and suggestions for you that draw from recipes you already have and from our database of over 1 million recipes!</p>
              <button className="explore-btn" onClick={()=>navigate("/recipes")}>Explore More</button>
          </div>
          
        </div>
      </div>
    </>
   
  )
}
