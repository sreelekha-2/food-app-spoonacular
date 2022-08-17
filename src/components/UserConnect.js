import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserConnect() {
    const [userDetails,setUserDetails]=useState({username:"",firstName:"",lastName:"",email:""})
    const navigate=useNavigate()
    const handler=(e)=>{
        const {name,value}=e.target
        setUserDetails({...userDetails,[name]:value})
    }

    const submitDetails=(e)=>{
        e.preventDefault();
        connectUser()
        navigate("/getmealplanner")

    }

    const connectUser=async()=>{
        const url=`https://api.spoonacular.com/users/connect?apiKey=${process.env.REACT_APP_API_KEY}`;
        const options={
            method:"POST",
            body:JSON.stringify(userDetails),
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res=await fetch(url,options)
        const data=await res.json()
      
        console.log(data)
        localStorage.setItem("userData",JSON.stringify(data))
   
    }
  return (
    <div>
        <form onSubmit={submitDetails}>
            <label>Username</label><br></br>
            <input type="text" name="username" onChange={handler}/><br></br>
            <label>Firstname</label><br></br>
            <input type="text" name="firstName" onChange={handler}/><br></br>
            <label>Lastname</label><br></br>
            <input type="text" name="lastName" onChange={handler}/><br></br>
            <label>Email</label><br></br>
            <input type="email" name="email" onChange={handler}/><br></br>
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}
