import React,{useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {BiSearch} from "react-icons/bi"
import { FaShoppingCart } from 'react-icons/fa'
import { Button,Badge } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { getCartData } from '../../redux/reducer'
import { useEffect } from 'react'

export default function Searchbar() {
    const navigate=useNavigate()
    const [searchText,setSearchText]=useState("")
    const [suggestions,setSuggestions]=useState([])
    const formRef=useRef()
    const dispatch=useDispatch()
    
  const {items}=useSelector(state=>state.cart)


  useEffect(()=>{
    dispatch(getCartData())
  },[])

    const getResults=(e)=>{
     e.preventDefault()
  
    
    }

    
  
    const getSearchText=(e)=>{
      
      setSearchText(e.target.value)
      fetch(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${searchText}`)
      .then(res=>res.json())
      .then(data=>{
       
        setSuggestions(data)
      })
      .catch(e=>console.log(e))
    

    }

    const onCartClick=()=>{
      console.log("clicked")
      navigate("/cart")
    }
  return (
    <div>
       
        <form className='form-container w-100' onSubmit={getResults} ref={formRef}>
            <div className='input-container border-end'>
                <BiSearch className='search-icon'/>
                <input placeholder="Search" className='search-bar' type="text" value={searchText} onChange={getSearchText}/>
            </div>
          

            <button className='position-relative btn btn-transparent' onClick={onCartClick}>
              <FaShoppingCart />
              <Badge className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {items.length}
              </Badge>
          </button>
        </form>
    </div>
    
 
  )
}
