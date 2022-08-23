import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ClearMeal() {

    const {profile}=useParams()
    const [date,setDate]=useState("")
    const usersDetails=JSON.parse(localStorage.getItem("usersDetails"))
    const filterResults=usersDetails.filter(each=>each.user===profile)

    const {username,hash}=filterResults[0]
    
    
    const clearMealPlan=(e)=>{
        e.preventDefault()
       
        const url=`https://api.spoonacular.com/mealplanner/${username}/day/${date}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`
        const options={
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",   
            
            }
        }
        fetch(url,options)
        .then(res=>{
            if(res.ok){
                alert("meal plan deleted succefully")
            }
        })
        .catch(e=>console.log(e))
    }

    const handler=(e)=>{
        setDate(e.target.value)
    }

   
  return (
    <div>
         <form onSubmit={clearMealPlan}>
            <label className="label">Date</label>
            <input className='input-field' type="date" name="date" onChange={handler} required/>
            <input type="submit" value="Clear Meal Plan" className='meal-btn'/>
        </form>
    </div>
  )
}
