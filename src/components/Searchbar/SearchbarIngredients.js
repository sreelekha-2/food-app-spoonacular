import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import {  useNavigate } from 'react-router-dom'

export default function SearchbarIngredients() {
    const [ingredients,setIngredients]=useState("")
   
    const navigate=useNavigate()
    const getSearchText=(e)=>{
        setIngredients(e.target.value)
    }

    const getRecipes=(e)=>{
        e.preventDefault()
        const ingredientsText=ingredients.split(",").join("+")
        navigate(`/recipeByIngredients/${ingredientsText}`)
        
        
    }
  return (
    <div>
        <form onSubmit={getRecipes} className="form-container">
            <h2 className='search-title'>Find Recipes what you have in your kitchen</h2>
            <div className="input-container">
                <BiSearch/>
                <input className="ingredients-input" type="search" placeholder="Enter Ingredients with comma seperated" onChange={getSearchText}/>
               
            </div>
        </form>
   
    </div>
  )
}
