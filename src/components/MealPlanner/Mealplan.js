import React, { useState } from 'react'
import axios from "axios"
import {Link, Outlet } from 'react-router-dom'
import UserConnect from '../Profile/UserConnect'

export default function Mealplan() {
    const [mealPlanData,setMealPlanData]=useState({date:"",type:"",title:""})
    const handler=(e)=>{
        const {name,value}=e.target
        setMealPlanData({...mealPlanData,[name]:value})
    }

    
    const postMealData=
    {
        date: 1660806036,
        slot: 1,
        position: 0,
        type: "INGREDIENTS",
        value: {
            ingredients: [
                {
                    name: "1 biryani"
                }
            ]
        }
    }



   
    const addToMealPlan=()=>{
        console.log(mealPlanData)
       
        const userDetails=JSON.parse(localStorage.getItem("userData"))
        const {username,hash} =userDetails   
        console.log(userDetails)   
        // const url="https://api.spoonacular.com/mealplanner/sree6/items?apiKey=daff5ff5d65d429fb51b31004ba520da&hash=64865ddc044edf4139ccaa214a8f45cef38a552c"
         const url=`https://api.spoonacular.com/mealplanner/sree12/items?apiKey=${process.env.REACT_APP_API_KEY}&hash=e3ba695e70e54fd130594d63d86f6e7387cb3528`
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

    const getMealPlanData=(e)=>{
        e.preventDefault()
        addToMealPlan()
    }

    const getMealPlanForUser=()=>{
        // const userDetails=JSON.parse(localStorage.getItem("userData"))
        // const {username,hash} =userDetails 
        // const url="https://api.spoonacular.com/mealplanner/sree10/day/2022-08-18?apiKey=daff5ff5d65d429fb51b31004ba520da&hash=1e89bad5e5cb41551ce282c56a03203c89db3995"
        const url= "https://api.spoonacular.com/mealplanner/sree12/day/2022-08-18?hash=e3ba695e70e54fd130594d63d86f6e7387cb3528&apiKey=daff5ff5d65d429fb51b31004ba520da"
        const options={
            method:"GET",
          
            
            headers:{
                "Content-Type": "application/json",
                
            
            }
        }
        fetch(url, options)
        .then(res =>res.json())
        .then(data=>console.log(data))

        .catch(e=>console.log(e))
       
    }   
  return (
    <div>
        <UserConnect/>
    </div>
  )
}
