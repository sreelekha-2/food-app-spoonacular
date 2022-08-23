import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function GetMealWeek() {

    const {profile}=useParams()
    const [date,setDate]=useState("")
    const [meals,setMeals]=useState(null)

    const usersDetails=JSON.parse(localStorage.getItem("usersDetails"))
    const filterResults=usersDetails.filter(each=>each.user===profile)

    const {username,hash}=filterResults[0]


    const handler=(e)=>{
        setDate(e.target.value)
    }

    const deleteMealItem=id=>{
        
        const url=`https://api.spoonacular.com/mealplanner/${username}/items/${id}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`
        const options={
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }
        let text="do u want to delete";
        if(window.confirm(text)){
            fetch(url,options)
            .then(res=>{
            console.log(res)
            if(res.ok){
                alert("meal deleted successdully")
                getMealPlanWeek()
            }
        })
        }
        
    }

    const getMealPlanWeek=()=>{
        console.log("get meal called")
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
    const submitWeekForm=(e)=>{
        e.preventDefault()
        getMealPlanWeek()
    
    }



  return (
    <div>
         <form onSubmit={submitWeekForm}>
            <label className="label">Start Date</label>
            <input className='input-field' type="date" name="date" onChange={handler} required/>
            <input type="submit" value="Get Meal Plan Week" className='meal-btn'/>
        </form>
       
       
        {meals && (
              <ul className='get-meal-week-container'>
              {meals.map(meal=>(
                  <li>
                      
                      <ul className='get-meal-week-container'>
                          {meal.items.map(item=>(
                              <li className='get-meal-week-item'>
                                  <h3 className='meal-day'>{meal.day}</h3>
                                  <img src={item.value.imageType} alt={item.value.title} className="meal-image" />
                                  <h4 className="meal-slot">{item.slot===1?"Break Fast":item.slot===2?"Lunch":"Dinner"}</h4>
                        
                                  <p className="meal-title">{item.value.title}</p>
                                  <button className='meal-delete-btn' onClick={()=>deleteMealItem(item.id)}>Delete</button>
                              </li>
                          ))}
                      </ul>
                  </li>
              ))}
          </ul>
        )}
      
      {meals && meals.length==0 && <h2>No meals planned for this week</h2>}
    </div>
  )
}
