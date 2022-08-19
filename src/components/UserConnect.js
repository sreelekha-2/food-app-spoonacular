import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserConnect() {
    const [userDetails,setUserDetails]=useState({username:"",firstName:"",lastName:"",email:""})
    const navigate=useNavigate()
    const formRef=useRef()
    const users=[]
    const usersDetails=[]
    const handler=(e)=>{
        const {name,value}=e.target
        setUserDetails({...userDetails,[name]:value})
    }

    const submitDetails=(e)=>{
        e.preventDefault();
        
        
        if(localStorage.getItem("usernames")==undefined){
            users.push({user:userDetails.username,fname:userDetails.firstName,lname:userDetails.lastName})
            localStorage.setItem("usernames",JSON.stringify(users))
            connectUser()
        }
        else{
            
            const users=JSON.parse(localStorage.getItem("usernames"))
            const result=users.some(each=>each.user===userDetails.username)
            console.log(result)
            if(result){
                alert("user already added")
                formRef.current.reset()
            }
            else{
                users.push({user:userDetails.username,fname:userDetails.firstName,lname:userDetails.lastName})
                console.log(users)
                localStorage.setItem("usernames",JSON.stringify(users))
                connectUser()
            }
          
        }
        
      
       

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
        if(localStorage.getItem("usersDetails")==undefined){
            usersDetails.push({...data,user:userDetails.username})
            localStorage.setItem("usersDetails",JSON.stringify(usersDetails))
        }
        else{
            const usersDetails=JSON.parse(localStorage.getItem("usersDetails"))
            usersDetails.push({...data,user:userDetails.username})
            localStorage.setItem("usersDetails",JSON.stringify(usersDetails))
        }

        formRef.current.reset()
       
   
    }
  return (
    <div className="mealplan-container">
        <h2>Welcome to meal planner </h2>
        <p>Please fill the details to add your own meal plan</p>
        <form ref={formRef} onSubmit={submitDetails} className="connect-form">
            <div className="form-group">
                <label className="label">Username</label>
                <input type="text" name="username" className="connect-input-field" onChange={handler}/>
            </div>
            
            <div className="form-group">
                <label className="label">Firstname</label>
                <input type="text" name="firstName" className="connect-input-field" onChange={handler}/>
            </div>

            <div className="form-group">
                <label className="label">Lastname</label>
                <input type="text" name="lastName" className="connect-input-field" onChange={handler}/>
            </div>

            <div className="form-group">
                <label className="label">Email</label>
                <input type="email" name="email" className="connect-input-field" onChange={handler}/>
            </div>
            
       
            <input type="submit" value="Connect" className="meal-btn"/>
        </form>
        <div className='go-to-profile-container'>
            <p>Do you have profile?</p>
            <button onClick={()=>navigate("profiles")} className="go-to-profile">go to profile</button>
        </div>
    </div>
  )
}
