import React, { useEffect,useState } from 'react'
import { useParams,Link} from 'react-router-dom'
import Searchbar from './Searchbar'
import {Circles} from "react-loader-spinner"

export default function SearchRecipes() {

    const {search}=useParams()
    const [searchRecipes,setSearchRecipes]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        getSearchResults()
    },[search])

    const getSearchResults=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`)
        const data=await res.json()
      
        setSearchRecipes(data.results)
        setIsLoading(false)
    }
  return (
    <>
       <Searchbar/>
       <div className='container'>
        {isLoading && <div className='loader'><Circles/></div>}
        {!isLoading && searchRecipes.length===0 && <div className='no-results'><h2>No Results Found</h2></div>}
        {!isLoading && (
              <ul className="recipes-container">
         
              {searchRecipes.map(recipe=>(
                  <Link className="recipe-link"  to={`/recipe/${recipe.id}`} key={recipe.id}>
                  <li className="recipe" >
                      <h4 className="recipe-title">{recipe.title}</h4>
                      <img className="recipe-img" src={recipe.image} alt="recipe"/>
                  </li>
                  </Link>
              ))}
          </ul>
             )}
     
    
    
 </div>
    </>
 
  )
}
