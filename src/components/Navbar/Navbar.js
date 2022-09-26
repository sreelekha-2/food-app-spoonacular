
import React,{useRef, useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { FaShoppingCart } from 'react-icons/fa'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {BiSearch} from "react-icons/bi"
import { useSelector,useDispatch } from 'react-redux'
import { getCartData } from '../../redux/reducer'

import "./navbar.css"


export default function Navbar() {

  const { items } = useSelector(state => state.cart)

  const [activeTab, setActiveTab] = useState("home")
  const [searchText,setSearchText]=useState("")
  const formRef=useRef()
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const homeLink = activeTab === "home" ? "activeNav" : ""
  const menuLink = activeTab === "menu" ? "activeNav" : ""
  const contactLink = activeTab === "contact" ? "activeNav" : ""
  const shopLink = activeTab === "shop" ? "activeNav" : ""

  const cartLink = activeTab === "cart" ? "cartActive" : ""

  const location=useLocation()
  console.log(location)
  const getColor=path=>{
    console.log(path)
    if(location.pathname===path){
      console.log(true)
      
      return "green";
    }
  }
  

useEffect(()=>{
  dispatch(getCartData())
},[])

  const getResults=(e)=>{
   e.preventDefault()

  
  }

  

  const onCartClick=()=>{
    console.log("clicked")
   
    setActiveTab("cart")
    navigate("/cart")
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center fixed-top nav-container">
        <div className="container">
          <Link to="/" className='logo'><img src={logo} alt="logo" />NEOFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <Link className='nav-link link' style={{color:getColor("/")}} to="/">Home</Link>
              <Link className='nav-link link' style={{color:getColor("/menu")}} to="/menu">Menu</Link>
              <Link className='nav-link link' style={{color:getColor("/contact")}}  to="/contact">Contact</Link>
              <Link className='nav-link link' style={{color:getColor("/shop")}} to="/shop">Shop</Link>

            </div>
            <div>

              <form className='form-container w-100' onSubmit={getResults} ref={formRef}>
                <div className='input-container border-end'>
                  <BiSearch className='search-icon' />
                  <input placeholder="Search" className='search-bar' type="text" value={searchText}  />
                </div>


                <button className='position-relative btn btn-transparent' style={{color:getColor("/cart")}}  onClick={()=>onCartClick()}>
                  <FaShoppingCart />
                  <Badge className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                    {items.length}
                  </Badge>
                </button>
              </form>
            </div>


          </div>
        </div>
      </nav>


     
    </>
  )
}
