import React,{useRef, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function AddMeal() {
    const {profile}=useParams()
    const addMealForm=useRef()
    console.log(profile)
    const [mealPlanData,setMealPlanData]=useState({date:"",title:"",servings:"",slot:0})
    const [uniqueNo,setUniqueNo]=useState(1)
    const handler=(e)=>{
        const {name,value}=e.target
        setMealPlanData({...mealPlanData,[name]:value})
    }

    
   const usersDetails=JSON.parse(localStorage.getItem("usersDetails"))
   const filterResults=usersDetails.filter(each=>each.user===profile)


    console.log(filterResults)
   
    const addToMealPlan=()=>{
        console.log(mealPlanData)
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
                imageType: "jpg",
            }
        }
       
        console.log(postMealData)
       
        const {username,hash}=filterResults[0]
        console.log(username,hash)  
       
       
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
   
    });
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
                <input type="date" className="input-field" name="date" onChange={handler}/>

                {/* <label className="label">Type</label>
                <input type="text" className="input-field" name="type"  onChange={handler}/> */}

                <label className="label">Title</label>
                <input type="text" className="input-field" name="title"  onChange={handler}/>

                <label className="label">Servings</label>
                <input type="number" className="input-field" name="servings" onChange={handler}/>

                <label className="label">Slot</label>
                <select className="input-field" name="slot" onChange={handler}>
                    <option value="1">Break Fast</option>
                    <option value="2">Lunch</option>
                    <option value="3">Dinner</option>
                </select>
                <input type="submit" value="Add Meal" className="meal-btn"/>
            </form>
    </div>
  )
}
