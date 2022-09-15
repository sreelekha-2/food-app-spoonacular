import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Searchbar from '../Searchbar/Searchbar'
import image from "../../assets/food-img.png"

export default function Home() {
    const navigate=useNavigate()
    
  return (
    <div className='home-page'>
       <Navbar/>
     
     <div className='container'>
       
        <div className='home-banner row'>
         
            
          <div className='col-5'>
              <h2 className='banner-main-head'><span className='banner-head'>Fast</span> <span className='banner-subhead'>Food <br></br> Delivery</span></h2>
              <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
              <button className="explore-btn" onClick={()=>navigate("/recipes")}>Explore More</button>
          </div>
          <div className='col-7'>
          <img className="banner-img" src={image} alt="banner"/>
          </div>
     
        </div>
      </div>
    </div>
   
  )
}
