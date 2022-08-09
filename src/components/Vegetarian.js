import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function Vegetarian() {
    



    const [vegRecipes,setVegRecipes]=useState([])

    useEffect(()=>{
        getVegRecipes()
    },[])
    
   const getVegRecipes=async()=>{
        
        if(localStorage.getItem("vegRecipes")==undefined){
            const res=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian,diet&number=10`)
            const data=await res.json()
            console.log(data)
            localStorage.setItem("vegRecipes",JSON.stringify(data.recipes))
            setVegRecipes(data.recipes)
        }
        else{
            setVegRecipes(JSON.parse(localStorage.getItem("vegRecipes")))
        }
    }
  return (
    <>
         <Searchbar/>
        <div className='container'> 
            <h2>Vegetarian Recipes</h2>
            <ul className="recipes-container">
                {vegRecipes.map(recipe=>(
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

 

