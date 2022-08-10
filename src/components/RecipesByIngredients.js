import React, {useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function RecipesByIngredients(props) {
    const {ingredients}=useParams()
    const [recipes,setRecipes]=useState([])
    const ingredientsText=ingredients.split("+").join(",")
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredientsText}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setRecipes(data)
        })
        .catch(e=>console.log(e))
    },[])
   
  return (
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
  )
}

