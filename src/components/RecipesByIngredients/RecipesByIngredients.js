import React, {useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Circles} from "react-loader-spinner"

import SearchbarIngredients from '../Searchbar/SearchbarIngredients'

export default function RecipesByIngredients(props) {
    const {ingredients}=useParams()
    const [recipes,setRecipes]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const ingredientsText=ingredients.split("+").join(",")
   
  
   
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredientsText}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setRecipes(data)
            setIsLoading(false)
        })
        .catch(e=>console.log(e))
    },[ingredientsText])

    
   
   
  return (
    <div>
        {isLoading?
        <div className="loader">
        <Circles /></div>:<div>
        
        <SearchbarIngredients/>
        <div className='container'>
             <ul className="recipes-container">
              {recipes.map(recipe=>(
                  <Link className="recipe-link"  to={`/recipe/${recipe.id}`} key={recipe.id}>
                  <li className="recipe" >
                      <h4 className="recipe-title">{recipe.title}</h4>
                      <img className="recipe-img" src={recipe.image} alt="recipe"/>
                  </li>
                  </Link>      
              ))}
          </ul>
          </div>
          </div>}
        
          
    </div>
  )
}

