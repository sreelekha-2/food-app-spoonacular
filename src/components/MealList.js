import React,{useState,useEffect} from 'react'
import MealData from './MealData'
import { useNavigate } from 'react-router-dom'

export default function MealList() {
  const [mealData,setMealData]=useState(null)
  const navigate=useNavigate()
  useEffect(()=>{
     
      fetch("https://api.spoonacular.com/mealplanner/generate?apiKey=daff5ff5d65d429fb51b31004ba520da&timeFrame=day&diet=vegetarian")
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          setMealData(data)
        
      })
      .catch(e=>console.log(e))
  },[])
  return (
    <div>
      
      <div className='text-container'>
        
          {mealData && <MealData mealData={mealData}/>}
      </div>
       
    </div>
  )
}
