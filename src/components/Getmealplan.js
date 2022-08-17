import React, { useState } from 'react'
import axios from "axios"

export default function Getmealplan() {
    const [mealPlanData,setMealPlanData]=useState({date:"",type:"",title:""})
    const handler=(e)=>{
        const {name,value}=e.target
        setMealPlanData({...mealPlanData,[name]:value})
    }

    // console.log(Date.parse(mealPlanData.date)/1000)
    // const postMealData={
    //     date: Date.parse(mealPlanData.date)/1000,
     
    //     type: mealPlanData.type,
    //     value: {
         
    //         servings: 2,
    //         title: mealPlanData.title,
    //         imageType: "jpg",
    //     }
    // }

    const postMealData={
        "date": 1660723752,
        "slot": 1,
        "position": 0,
        "type": "INGREDIENTS",
        "value": {
            "ingredients": [
                {
                    "name": "1 custard apple"
                }
            ]
        }
    }
       
    

   
    const addToMealPlan=()=>{
        console.log(JSON.stringify(postMealData))
        const userDetails=JSON.parse(localStorage.getItem("userData"))
        const {username,hash} =userDetails   
        console.log(userDetails)   
        const url="https://api.spoonacular.com/mealplanner/sree6/items?apiKey=daff5ff5d65d429fb51b31004ba520da&hash=64865ddc044edf4139ccaa214a8f45cef38a552c"
        //  const url=`https://api.spoonacular.com/mealplanner/${username}/items?apiKey=${process.env.REACT_APP_API_KEY}&hash=${hash}`
        const options={
            method:"POST",
            body:postMealData,
            headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }
        //  fetch(url,options)
        //  .then(res=>res.json())
        //  .then(data=>{
        //     console.log(data)
        //  })
        //  .catch(e=>console.log(e))
        axios.post(url,options)
        .then(res=>console.log(res))
        
        .catch(e=>console.log(e))
    }

    const getMealPlanData=(e)=>{
        e.preventDefault()
        addToMealPlan()
    }
  return (
    <div>
        <button>Add to meal plan</button>
        <button>get meal plan</button>

        <form onSubmit={getMealPlanData}>
            <label>Date</label><br></br>
            <input type="date" name="date" onChange={handler}/><br></br>
            <label>Type</label><br></br>
            <input type="text" name="type"/><br></br>
            <label>Title</label><br></br>
            <input type="text" name="title"/><br></br>
            <input type="submit"/>
        </form>
    </div>
  )
}
