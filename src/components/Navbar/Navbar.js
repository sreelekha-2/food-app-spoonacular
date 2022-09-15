import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from "react-icons/io"
import Searchbar from '../Searchbar/Searchbar'
import { useSelector } from 'react-redux'
import logo from "../../assets/logo.png"
import { FaShoppingCart } from 'react-icons/fa'
import { Button,Badge } from 'react-bootstrap'

export default function Navbar() {

  const {items}=useSelector(state=>state.cart)
  
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
      <div className="container">
      <Link to= "/" className='logo'><img src={logo} alt="logo"/>NEOFood</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto">
                <Link className="nav-link link" to= "/">Home</Link>
                <Link className="nav-link link" to="/recipes">Menu</Link>
         
                <Link className="nav-link link" to="/userconnect">Contact</Link>
                <Link className='nav-link link' to="/wines">Shop</Link>   

          </div>
          <Searchbar/>
         
          {/* <button className='position-relative btn btn-transparent'>
              <FaShoppingCart />
              <Badge className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {count}
              </Badge>
          </button> */}
         
        </div>
      </div>
</nav>


        {/* <nav className="nav">
            <Link to= "/" ><img className="logo" alt="logo" src="https://res.cloudinary.com/glovoapp/image/fetch//f_auto,q_auto/https://glovoapp.com/images/landing/address-container-image-burger.png"/></Link>
            <div>
                
                <Link className="nav-link" to= "/">Home</Link>
                
               
               
               <Link className="nav-link" to="/userconnect">Meal Plan</Link>
                <Link className='nav-link' to="/recipeByIngredients">Recipes By Ingredients</Link>
                <Link className='nav-link' to="/wines">Wines</Link>
                
            </div>
        </nav> */}
    </>
  )
}
