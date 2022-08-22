import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function GetMealWeek() {

    const {profile}=useParams()
    const [date,setDate]=useState("")
    const [meals,setMeals]=useState([])

    const usersDetails=JSON.parse(localStorage.getItem("usersDetails"))
    const filterResults=usersDetails.filter(each=>each.user===profile)

    const {username,hash}=filterResults[0]
    console.log(username,hash)

    const handler=(e)=>{
        setDate(e.target.value)
    }


    const getMealPlanWeek=(e)=>{
        e.preventDefault()
        const url=`https://api.spoonacular.com/mealplanner/${username}/week/${date}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`
        const options={
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }
        fetch(url,options)
        .then(res=>res.json())
        .then(data=>{
            setMeals(data.days)
            console.log(data.days)
        })
        .catch(e=>console.log(e))
    }

  return (
    <div>
         <form onSubmit={getMealPlanWeek}>
            <label className="label">Start Date</label>
            <input className='input-field' type="date" name="date" onChange={handler}/>
            <input type="submit" value="Get Meal Plan Week" className='meal-btn'/>
        </form>
        {meals.length===0?<h2>No Meals Planned for this week</h2>:(
              <ul>
              {meals.map(meal=>(
                  <li>
                      <p>Day : {meal.day}</p>
                      <ul>
                          {meal.items.map(item=>(
                              <li>
                                  <p>Slot:{item.slot}</p>
                                  <p>servings :{item.value.servings}</p>
                                  <p>Meal Item :{item.value.title}</p>
                                  <button>Delete</button>
                              </li>
                          ))}
                      </ul>
                  </li>
              ))}
          </ul>
        )}
      
    </div>
  )
}
