import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Recipes() {

    const [popularRecipes,setPopularRecipes]=useState([])

    useEffect(()=>{
        getPopularRecipes()
    },[])
    
   const getPopularRecipes=async()=>{
        
        if(localStorage.getItem("popularRecipes")==undefined){
            const res=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
            const data=await res.json()
            console.log(data)
            localStorage.setItem("popularRecipes",JSON.stringify(data.recipes))
            setPopularRecipes(data.recipes)
        }
        else{
            setPopularRecipes(JSON.parse(localStorage.getItem("popularRecipes")))
        }
    }
  return (
    <div className='container'>
        <h2>Popular Recipes</h2>
        <ul className="popular-recipes-container">
            {popularRecipes.map(recipe=>(
                <Link className="recipe-link"  to={`/recipe/${recipe.id}`} key={recipe.id}>
                <li className="recipe" >
                    <h4 className="recipe-title">{recipe.title}</h4>
                    <img className="recipe-img" src={recipe.image} alt="recipe"/>
                </li>
                </Link>
                
            ))}
        </ul>

        </div>
  )
}
