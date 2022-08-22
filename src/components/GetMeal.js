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
    console.log(username,hash)
    
    const handler=(e)=>{
        console.log(e.target.value)
        setDate(e.target.value)
    }
   
    const getMealPlanForUser=(e)=>{
        e.preventDefault()
        const url=`https://api.spoonacular.com/mealplanner/${username}/day/${date}?hash=${hash}&apiKey=${process.env.REACT_APP_API_KEY}`
        // const url= `https://api.spoonacular.com/mealplanner/sree12/day/2022-08-18?hash=e3ba695e70e54fd130594d63d86f6e7387cb3528&apiKey=${process.env.REACT_APP_API_KEY}`
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
                alert("meal deleted successdully")
            }
        })
        }
        
    }
  return (
    <div>
        
        <form onSubmit={getMealPlanForUser}>
            <label className="label">Date</label>
            <input className='input-field' type="date" name="date" onChange={handler}/>
            <input type="submit" value="Get Your Meal Plan" className='meal-btn'/>
        </form>
       
        {meals && <ul className="meals-list">
            {meals.map(meal=>(
                <li className='meal'>
                    <p>Day:{day}</p>
                    <p>Slot:{meal.slot}</p>
                    <p>servings :{meal.value.servings}</p>
                    <p>Meal Item :{meal.value.title}</p>
                    <button onClick={()=>deleteMealItem(meal.id)}>Delete</button>
                </li>
            ))}
        </ul>}
        {!meals && <h2>No meals planned for this day</h2>}
        
    </div>
  )
}
