import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import MealData from './MealData'

export default function MealPlanner() {
    const navigate=useNavigate()
    const [calories,setCalories]=useState("")
    const [mealData,setMealData]=useState(null)

    const getMealPlanner=()=>{
        setCalories("")
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=daff5ff5d65d429fb51b31004ba520da&timeFrame=day&diet=vegetarian&targetCalories=${calories}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMealData(data)
          
        })
        .catch(e=>console.log(e))
    }

    const getCalories=(e)=>{
        setCalories(e.target.value)
    }
 
  return (
    <>
      
      <div className='form-container'>
            <div>
                <input type="number" className='calories-input' value={calories}  placeholder="Enter calories" onChange={getCalories}/>
                    
            </div>
            <button onClick={()=>getMealPlanner()} className="get-meal-btn">Get Meal Plan</button>
        </div>
        <div className="container text-container">
            <h1>Get Your Meal Plan</h1>
            <h2>You have a lot on your plate, let Favoreats help with dinner</h2>
            <p>Take a few minutes to tell us about your dinner goals and preferences, and we will create a meal plan and suggestions for you that draw from recipes you already have and from our database of over 1 million recipes!</p>
            
            {mealData && <MealData mealData={mealData}/>}
            
        </div>
        
    </>
  )
}