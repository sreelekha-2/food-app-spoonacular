import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function RecipeInfo() {
    const {id}=useParams()
    const [info,setInfo]=useState([])
    const [activeTab,setActiveTab]=useState("ingredients")
    const [ingredients,setIngredients]=useState([])
    const [priceDetails,setPriceDetails]=useState([])
   
    console.log(id)
    useEffect(()=>{
        recipeInfo()
        getPriceDetails()
    },[])

    const recipeInfo=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data=await res.json()
        console.log(data)
        setInfo(data)
        setIngredients(data.extendedIngredients)

    }

    const getPriceDetails=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data=await res.json()
        console.log(data)
        setPriceDetails(data)
    }

    const changeActiveTab=tab=>{
        setActiveTab(tab)
    }

    const ingredientClassName=  activeTab==="ingredients"?"active":""
    const processClassName=activeTab==="process"?"active":""
    const priceClassName=activeTab==="price"?"active":""

    

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
                <button className={`info-btn ${priceClassName}`} onClick={()=>changeActiveTab("price")}>Price Details</button>
                {activeTab==="ingredients" && <ul>
                    {ingredients.map(ingredient=>(
                        <li key={ingredient.id}>
                           
                            <p>  {ingredient.original}</p>
                          
                        </li>
                    ))}
                    </ul>}

                {activeTab==="process"&&<p dangerouslySetInnerHTML={{__html:info.instructions}}></p>}
                
                {activeTab==="price" && (
                    <div>
                <ul className="price-details-container">
                    {priceDetails.ingredients.map(each=>(
                        <li>
                            <p> {each.amount.us.value} {each.amount.us.unit} {each.name} - Rs. {each.price}/-</p>
                        </li>
                    ))}
                    </ul>
                    <h3>Total Price: <span>Rs. {priceDetails.totalCost}/-</span></h3>
                    </div>)
                    }
            
            </div>
          

        </div>
    </div>
    </>
    
  )
}
