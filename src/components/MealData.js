import React,{useState,useEffect} from 'react'
import Meal from './Meal'

export default function MealData(props) {

    const {mealData}=props
    const {nutrients,meals}=mealData
    const {calories,carbohydrates,fat,protein}=nutrients
    
   
  return (
    <div className="mealdata-container">
       
       <h2>Nutrients</h2>
        <ul>
           
            <li>Calories: {calories}</li>
            <li>Carbohydrates: {carbohydrates}</li>
            <li>Fat: {fat}</li>
            <li>Protein: {protein}</li>
        </ul>
      
        
        <h2>Recipes</h2>
    
        <ul className="meals-container">
            {meals.map(meal=>(
                <li key={meal.id} className="meal">
                    <Meal mealDetails={meal}/>
                </li>
            ))}
        
        </ul>
       
    </div>
  )
}
