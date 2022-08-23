import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from "react-icons/io"

export default function Navbar() {
  return (
    <div>
        <nav className="nav">
            <Link to= "/" ><img className="logo" alt="logo" src="https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/landing/address-container-image-burger.png"/></Link>
            <div>
                
                <Link className="nav-link" to= "/">Home</Link>
                <Link className="nav-link" to="/recipes">Popular</Link>
               <div className='dropdown'>
                  <Link className="nav-link" to="">Meal Plan
                  <IoMdArrowDropdown/>
                  </Link>
                 
                  <div className='dropdown-content'>
                    <Link className="nav-link dropdown-link" to="/mealplanner">Generate Mealplan</Link>
                    <Link className="nav-link dropdown-link" to="/userconnect">Create Mealplan</Link>
                </div>
               </div>
               
                
                <Link className='nav-link' to="/recipeByIngredients">Recipes By Ingredients</Link>
                <Link className='nav-link' to="/wines">Wines</Link>
                <Link className='nav-link' to="/mealplanner/profiles">Profiles</Link>
            </div>
        </nav>
    </div>
  )
}
