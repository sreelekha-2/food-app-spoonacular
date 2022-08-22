import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Category from './Category'
import Searchbar from './Searchbar'

export default function CuisineRecipes() {
    const {cuisine}=useParams()
    const [cuisines,setCuisines]=useState([])
    useEffect(()=>{
        getCuisineRecipes()
    },[cuisine])

    const getCuisineRecipes=async()=>{
        const url=`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=${process.env.REACT_APP_API_KEY}`
       const res=await fetch(url)
       const data=await res.json()
       console.log(data)
       setCuisines(data.results)
    }
  return (
    <>
    <Searchbar/>
    <div className='container'>

        <Category/>
      
        <ul className="recipes-container">
            {cuisines.map(recipe=>(
                <Link className="recipe-link"  to={`/recipe/${recipe.id}`} key={recipe.id}>
                <li className="recipe" >
                    <h4 className="recipe-title">{recipe.title}</h4>
                    <img className="recipe-img" src={recipe.image} alt="recipe"/>
                </li>
                </Link>
                
            ))}
        </ul>
    </div>
  </>
  )
}
