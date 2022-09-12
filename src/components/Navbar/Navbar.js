import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from "react-icons/io"

export default function Navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
      <Link to= "/" ><img className="logo" alt="logo" src="https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/landing/address-container-image-burger.png"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
                <Link className="nav-link link" to= "/">Home</Link>
                <Link className="nav-link link" to="/recipes">Popular</Link>
                <Link className="nav-link link" to="/userconnect">Meal Plan</Link>
                <Link className='nav-link link' to="/recipeByIngredients">Recipes By Ingredients</Link>
                <Link className='nav-link link' to="/wines">Wines</Link>
                    
          </div>
        </div>
      </div>
</nav>

        {/* <nav className="nav">
            <Link to= "/" ><img className="logo" alt="logo" src="https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/landing/address-container-image-burger.png"/></Link>
            <div>
                
                <Link className="nav-link" to= "/">Home</Link>
                <Link className="nav-link" to="/recipes">Popular</Link>
               
               
               <Link className="nav-link" to="/userconnect">Meal Plan</Link>
                <Link className='nav-link' to="/recipeByIngredients">Recipes By Ingredients</Link>
                <Link className='nav-link' to="/wines">Wines</Link>
                
            </div>
        </nav> */}
    </>
  )
}
