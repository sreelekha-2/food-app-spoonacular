import React,{useRef, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function AddMeal() {
    const {profile}=useParams()
    const addMealForm=useRef()
    const [mealPlanData,setMealPlanData]=useState({date:"",title:"",servings:"",slot:1,url:""})
    const [uniqueNo,setUniqueNo]=useState(1)

    const handler=(e)=>{
        const {name,value}=e.target
        setMealPlanData({...mealPlanData,[name]:value})
    }

    
   const usersDetails=JSON.parse(localStorage.getItem("usersDetails"))
   const filterResults=usersDetails.filter(each=>each.user===profile)
   
    const addToMealPlan=()=>{
       
        setUniqueNo(uniqueNo+1)
        const postMealData=
        {
            date: (Date.parse(mealPlanData.date))/1000,
            slot: mealPlanData.slot,
            position: 0,
            type: "RECIPE",
            value: {
                id: uniqueNo,
                servings: mealPlanData.servings,
                title:mealPlanData.title,
                imageType: mealPlanData.url,
            }
        }
       
        const {username,hash}=filterResults[0]
       
        const url=`https://api.spoonacular.com/mealplanner/${username}/items?apiKey=${process.env.REACT_APP_API_KEY}&hash=${hash}`
        const options={
            method:"POST",
            body:JSON.stringify(postMealData),
            mode: "cors",
            headers:{
                "Content-Type": "application/json",
            
            }
        }

       
        fetch(url, options)
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
        alert("meal succefully added")
   
        })
    .catch(err=>{
        console.log(err)
        alert("meal not added")
    })
    }

    const addMealPlanData=(e)=>{
        e.preventDefault()
        addMealForm.current.reset()
        addToMealPlan()
    }

   
  return (
    <div className="add-meal-container">
        
           
            <form className="add-meal-form" ref={addMealForm} onSubmit={addMealPlanData}>

                <label className="label">Date</label>
                <input type="date" className="input-field" name="date" onChange={handler} required/>


                <label className="label">Title</label>
                <input type="text" className="input-field" name="title"  onChange={handler} required/>

                <label className="label" htmlFor="url">Enter an https:// Image URL:</label>

                <input type="text" name="url" id="url"
                    placeholder="https://example.com"
                    pattern="https://.*" size="30"
                    className="input-field"
                    onChange={handler}
                    required
                    />

                <label className="label">Servings</label>
                <input type="number" className="input-field" name="servings" onChange={handler} required/>

                <label className="label">Slot</label>
                <select className="input-field" name="slot" onChange={handler} required>
                    <option value="1">Break Fast</option>
                    <option value="2">Lunch</option>
                    <option value="3">Dinner</option>
                </select>
                <input type="submit" value="Add Meal" className="meal-btn"/>
            </form>
    </div>
  )
}
