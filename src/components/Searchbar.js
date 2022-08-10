import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {BiSearch} from "react-icons/bi"

export default function Searchbar() {
    const navigate=useNavigate()
    const [searchText,setSearchText]=useState("")

    const getResults=(e)=>{
     e.preventDefault()
     navigate(`/recipes/${searchText}`)
    
    }
  
    const getSearchText=(e)=>{
      console.log(e.target.value)
      setSearchText(e.target.value)
    }
  return (
    <div className='form-container'>
        <h2 className='search-title'>Search Your Favorite</h2>
        <form onSubmit={getResults}>
            <div className='input-container'>
                <input placeholder="search your favorite" className='search-bar' type="search" value={searchText} onChange={getSearchText}/>
                <BiSearch/>
            </div>

        </form>
    </div>
    
 
  )
}
