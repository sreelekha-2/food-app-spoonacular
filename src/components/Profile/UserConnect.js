import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UsernamesService from "../../service/service"
import UsersDetailsService from "../../service/usersData"
import { app } from '../../firebase-config'
import {getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

export default function UserConnect() {

    const [userDetails,setUserDetails]=useState({username:"",firstName:"",lastName:"",email:"",password:"",displayName:""})
    
    const navigate=useNavigate()
    const formRef=useRef()
    
    const auth=getAuth(app)
 

    const handler=(e)=>{
        const {name,value}=e.target
        setUserDetails({...userDetails,[name]:value})
      
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
      
      
        if(res.ok){
            alert("user successfully registered")
            addUserData({...data,user:userDetails.username,password:userDetails.password})
            // navigate("/mealplanner/profiles")
        }
      
        formRef.current.reset()
    }

    const signUp=()=>{
    
        
        createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then((response) => {
          console.log(response.user);
          updateProfile(auth.currentUser, {
            displayName: userDetails.username,
          }).then(() => {
            console.log("Profile updated!")
            console.log(auth.currentUser);
          }).catch((error) => {
            console.log("An error occurred")
          });

          connectUser()
        //   return response.user.updateProfile({displayName:userDetails.username})
        })
        
        .catch((err) => alert(err.message))
    }

    const submitDetails=(e)=>{
        e.preventDefault();
        signUp()
        // connectUser()
        
        // try{
        //     await UsernamesService.addUser(userDetails)

        //     console.log("user added")
        //     await connectUser()
        // }

        // catch(err){
        //     console.log(err.message)
        // } 

    }

    const addUserData=async(data)=>{
        console.log("hash")
     
        console.log(data)
        try{
            await UsersDetailsService.addUsersDetails(data)
        }
        catch(err){
            console.log(err.message)
        }
    }

    

  return (
    <div className="mealplan-container">
        <h2>Welcome to meal planner </h2>
        <p>Please fill the details to add your own meal plan</p>
        <form ref={formRef} onSubmit={submitDetails} className="connect-form">
            <div className="form-group">
                <label className="label">Username</label>
                <input type="text" name="username" className="connect-input-field" onChange={handler} required/>
            </div>
            
            <div className="form-group">
                <label className="label">Firstname</label>
                <input type="text" name="firstName" className="connect-input-field" onChange={handler} required/>
            </div>

            <div className="form-group">
                <label className="label">Lastname</label>
                <input type="text" name="lastName" className="connect-input-field" onChange={handler} required/>
            </div>

            <div className="form-group">
                <label className="label">Email</label>
                <input type="email" name="email" className="connect-input-field" onChange={handler} required/>
            </div>

            <div className="form-group">
                <label className="label">Password</label>
                <input type="password" name="password" className="connect-input-field" onChange={handler} required/>
            </div>
            <input type="submit" value="Connect" className="meal-btn"/>
        </form>
        
        {/* <button onClick={()=>addUsernameHash()}>Add to database</button> */}
        <div className='go-to-profile-container'>
            <p>Do you have profile?</p>
            <button onClick={()=>navigate("/mealplanner/profiles")} className="go-to-profile">go to profile</button>
        </div>
    </div>
  )
}
