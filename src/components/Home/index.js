import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from "../../assets/food-img.png"
import foodImg from "../../assets/trending-food.png"
import trendingSmallImg from "../../assets/trending-food-small.png"
import Recipes from '../Recipes/Recipes'
import Contact from './Contact'
import Footer from './Footer'
import { BsFillPlayFill, BsFillStarFill } from "react-icons/bs"
import { AiOutlineShoppingCart} from "react-icons/ai"
import {HiOutlineHeart} from "react-icons/hi"
import "./index.css"

export default function Home() {
    const navigate=useNavigate()
    
  return (
   <>

    <div className='home-page'>
      <div className='container home-container'>
        <div className='row align-items-center'>  
          <div className='col-lg-5 col-md-12 col-sm-12 d-flex flex-column align-items-sm-center align-items-lg-start'>
            <div className='banner-main-head'>
                <h1 className="banner-head poppins-bold">Fast</h1>
                <h2 className='ms-3 banner-subhead poppins-bold'>Food <br></br> Delivery</h2>
            </div>
              
              <p className='banner-desc poppins-regular'>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
              <div className='mt-4 d-flex align-items-center'>
                  <button className='rounded-pill order-btn text-white me-3 poppins-semibold'>Order Now</button>
                  <button className='btn btn-light rounded-circle play-btn me-2'><BsFillPlayFill className="play-icon" /></button>
                  <a href="#" className='watch-video-link poppins-semibold'>Watch Video</a>
              </div>
              <div className='mt-5'>
                  <BsFillStarFill className='yellow-star'/>
                  <BsFillStarFill className='yellow-star'/>
                  <BsFillStarFill className='yellow-star'/>
                  <BsFillStarFill className='yellow-star'/>
                  <BsFillStarFill className='yellow-star'/>
                  <p className='mt-3 rating'><span className='five-star-rating'>5 star rating</span><br></br> based on 1788 reviews</p>
              </div>
              
          </div>
          <div className='col-lg-7 col-md-12 col-sm-12 text-sm-center'>
          <img className="banner-img" src={image} alt="banner"/>
          </div>
     
        </div>

        <div className='row trending-food-wrapper'>
            <h2 className='trending-food-head inter-font-bold'>Todays Trending Food</h2>
            <p className='trending-food-desc inter-font-regular'>Peoples loves it most the past week...</p>
            <div className='col-lg-4 col-md-5 col-sm-12'>
               
                <img src={foodImg} className="trending-food-img" alt="trending food"/>
                <div className='trending-small-img-container d-flex justify-content-center'>
                    <img src={trendingSmallImg} className="trending-small-img" alt="small food"/>
                    <img src={trendingSmallImg} className="trending-small-img" alt="small food"/>
                    <img src={trendingSmallImg} className="trending-small-img" alt="small food"/>
                </div>
            </div>
            <div className='col-lg-8 col-md-7 col-sm-12 d-flex flex-column justify-content-between trending-recipe-wrapper'>
              <div>
                  <h3 className='trending-food-name inter-font-bold'>Basomoti Kacchi Biriyani</h3>
                  <p className='trending-food-price montserrat-font-semibold'>Rs 1,050/-</p>
                  <div className='black-star-container d-flex'>
                    <div className='me-5'>
                      <BsFillStarFill className='black-star'/>
                      <BsFillStarFill className='black-star'/>
                      <BsFillStarFill className='black-star'/>
                      <BsFillStarFill className='black-star'/>
                      <BsFillStarFill className='black-star'/>
                    </div>
                    
                    <p className='review montserrat-font-regular'>5.0 out of (1256) Reviews</p>
                 
                  </div>
              </div>
              <div>
                <label className='select-label montserrat-font-semibold'>Select Quantity</label>
                <div className='quantity-btn-container'>
                    <button className='quantity-btn'>0.5</button>
                    <button className='quantity-btn'>1</button>
                    <button className='quantity-btn'>2</button>
                    <button className='quantity-btn'>5</button>
                    <button className='quantity-btn'>10</button>
                    <button className='quantity-btn'>20</button>
                </div>
                <div className='d-flex'>
                    <div className='wish-list'><HiOutlineHeart className="heart-img"/></div>
                    <div className='wish-list'><AiOutlineShoppingCart className="cart-img"/></div>
                </div>
              </div>
               
            </div>
        </div>

        <Recipes/>
        <Contact/>
      </div>
    </div>
   
   <Footer/>
   </>
    
   
  )
}
