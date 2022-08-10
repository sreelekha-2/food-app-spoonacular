import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="nav">
            <Link to= "/" ><img className="logo" alt="logo" src="https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/landing/address-container-image-burger.png"/></Link>
            <div>
                
                <Link className="nav-link" to= "/">Home</Link>
                <Link className="nav-link" to="/popular">Popular</Link>
                <Link className="nav-link" to= "/vegetarian">Veggie</Link>
                <Link className="nav-link" to="/mealplanner">Mealplan</Link>
                <Link className='nav-link' to="/recipeByIngredients">Recipes By Ingredients</Link>
            </div>
        </nav>
    </div>
  )
}
