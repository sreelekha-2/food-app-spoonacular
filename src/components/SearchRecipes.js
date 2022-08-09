import React, { useEffect,useState } from 'react'
import { useParams,Link} from 'react-router-dom'
import Searchbar from './Searchbar'

export default function SearchRecipes() {

    const {search}=useParams()
    const [searchRecipes,setSearchRecipes]=useState([])

    useEffect(()=>{
        getSearchResults()
    },[search])

    const getSearchResults=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`)
        const data=await res.json()
        console.log(data)
        setSearchRecipes(data.results)
    }
  return (
    <>
       <Searchbar/>
       <div className='container'>
     
     {searchRecipes.length===0?<h2 className='no-results'>No Results Found</h2>:(
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
