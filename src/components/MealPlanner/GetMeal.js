import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

export default function GetMeal() {

    const {profile}=useParams()
    const [meals,setMeals]=useState([])
    const [date,setDate]=useState("")
    const [day,setDay]=useState("")

    const usersDetails=JSON.parse(localStorage.getItem("usersDetails"))
    const filterResults=usersDetails.filter(each=>each.user===profile)

    const {username,hash}=filterResults[0]
  
    const handler=(e)=>{
        
        setDate(e.target.value)
    }
   
    const submitGetMealForm=(e)=>{
        e.preventDefault()
        getMealPlanForUser()
    }
    const getMealPlanForUser=()=>{
      
        const url=`https://api.spoonacular.com/mealplanner/${username}/day/${date}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`
      
        const options={
            method:"GET",
            mode:"cors",
            headers:{
                "Content-Type": "application/json",   
            
            }
        }
        fetch(url, options)
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
            setDay(data.day)
            setMeals(data.items)
        })

        .catch(e=>console.log(e))
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
                alert("meal deleted successfully")
                getMealPlanForUser()
            }
        })
        }
        
    }
  return (
    <div>
        
        <form onSubmit={submitGetMealForm}>
            <label className="label">Date</label>
            <input className='input-field' type="date" name="date" onChange={handler} required/>
            <input type="submit" value="Get Your Meal Plan" className='meal-btn'/>
        </form>
       
        {meals && 
        <ul className='get-meal-week-container'>
                          {meals.map(meal=>(
                              <li className='get-meal-week-item'>
                                  <h3 className='meal-day'>{day}</h3>
                                  <img src={meal.value.imageType} alt={meal.value.title} className="meal-image" />
                                  <h4 className="meal-slot">{meal.slot===1?"Break Fast":meal.slot===2?"Lunch":"Dinner"}</h4>
                        
                                  <p className="meal-title">{meal.value.title}</p>
                                  <button className='meal-delete-btn' onClick={()=>deleteMealItem(meal.id)}>Delete</button>
                              </li>
                          ))}
                      </ul>
           
        }
        {!meals && <h2>No meals planned for this day</h2>}
        
    </div>
  )
}
