import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function RecipeInfo() {
    const {id}=useParams()
    const [info,setInfo]=useState([])
    const [activeTab,setActiveTab]=useState("ingredients")
    const [ingredients,setIngredients]=useState([])
    console.log(id)
    useEffect(()=>{
        recipeInfo()
    },[])

    const recipeInfo=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data=await res.json()
        console.log(data)
        setInfo(data)
        setIngredients(data.extendedIngredients)

    }

    const changeActiveTab=tab=>{
        setActiveTab(tab)
    }

    const ingredientClassName=  activeTab==="ingredients"?"active":""
    const processClassName=activeTab==="process"?"active":""

    

  return (
    <>
    
     <div className="recipe-info-container">
       
        <div className="recipe-wrapper">
            <div>
                <p>{info.title}</p>
                <img className="recipe-img" src={info.image} alt="recipe"/>
            </div>
            <div className="btn-container">
                <button className={`info-btn ${ingredientClassName}`} onClick={()=>changeActiveTab("ingredients")}>Ingredients</button>
                <button className={`info-btn ${processClassName}`} onClick={()=>changeActiveTab("process")}>Recipe Process</button>
                {activeTab==="ingredients" && <ul>
                    {ingredients.map(ingredient=>(
                        <li key={ingredient.id}>
                            {ingredient.original}
                        </li>
                    ))}
                    </ul>}

                {activeTab==="process"&&<p dangerouslySetInnerHTML={{__html:info.instructions}}></p>}
            </div>
          

        </div>
    </div>
    </>
    
  )
}
