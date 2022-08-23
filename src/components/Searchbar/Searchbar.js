import React,{useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {BiSearch} from "react-icons/bi"

export default function Searchbar() {
    const navigate=useNavigate()
    const [searchText,setSearchText]=useState("")
    const [suggestions,setSuggestions]=useState([])
    const formRef=useRef()

    const getResults=(e)=>{
     e.preventDefault()
     navigate(`/recipes/${searchText}`)
    
    }

    window.onclick=function(e){
      console.log(e.target)
      console.log(formRef)
      if(e.target===formRef.current){
        console.log("true")
        setSuggestions([])
      }
    }

    const suggestionClick=(title)=>{
      setSearchText(title)
      setSuggestions([])
     
    }
  
    const getSearchText=(e)=>{
      console.log(e.target.value)
      setSearchText(e.target.value)
      fetch(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${searchText}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setSuggestions(data)
      })
      .catch(e=>console.log(e))
    

    }
  return (
    <div className='form-container'>
        <h2 className='search-title'>Search Your Favorite</h2>
        <form onSubmit={getResults} ref={formRef}>
            <div className='input-container'>
                <BiSearch/>
                <input placeholder="search your favorite" className='search-bar' type="text" value={searchText} onChange={getSearchText}/>
            </div>
            {suggestions.length!==0 &&  <ul className='suggestions-container'>
                  {suggestions.map(suggestion=>(
                    <li key={suggestion.id} className="suggestion" onClick={()=>suggestionClick(suggestion.title)}>{suggestion.title}</li>
                  ))}
            </ul>}
           

        </form>
    </div>
    
 
  )
}
