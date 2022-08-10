import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import {  useNavigate } from 'react-router-dom'

export default function RecipesByIngredientsHome() {
    const [ingredients,setIngredients]=useState("")
   
    const navigate=useNavigate()
    const getSearchText=(e)=>{
        setIngredients(e.target.value)
    }

    const getRecipes=(e)=>{
        e.preventDefault()
        console.log(ingredients)
        const ingredientsText=ingredients.split(",").join("+")
        navigate(`${ingredientsText}`)
        
        
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
        <div className='container'>
            <div className='ingredients-recipes-intro'>
                <img alt="ingredient-intro" className='ingredient-intro-image' src="https://previews.123rf.com/images/monticello/monticello1108/monticello110800025/10081575-groceries-in-wicker-basket-on-kitchen-table.jpg"/>
                <div>
                    <h2>Find Recipes what you have in your kitchen</h2>
                    <p>Find recipes that use as many of the ingredients you have available as possible while limiting missing ingredients. </p>
                
                </div>
              </div>

           
     

        
        </div>

    </div>
  )
}
