import React,{useState} from 'react'
import Navbar from './Navbar'
import Recipes from './Recipes'

export default function Home() {

  // const getResults=(e)=>{
  //  e.preventDefault()

  // }
   
  return (
    <div>
        {/* <form >
          <input type="search" value="search..."/>
          <input type="submit" value="Submit"/>
        </form>
       
        <h2>Welcome To Our App</h2>
        <p>We are delivering so many benefits</p>
    
        <img className="banner-img" src="https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2018/05/Kolkata-Blog-Banner-1030x538.png" alt="banner"/>
         */}
        <Recipes />
    </div>
  )
}
