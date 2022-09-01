import React, { useRef, useState,useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'
import UsernamesService from "../../service/service"
import UsersDetailsService from "../../service/usersData"
import { app } from '../../firebase-config'
import {getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

export default function UserConnect() {

    const [userDetails,setUserDetails]=useState({username:"",firstName:"",lastName:"",email:"",password:"",displayName:""})
    
    const [users,setUsers]=useState([])
    const navigate=useNavigate()
    const formRef=useRef()
    
    const auth=getAuth(app)
 

    const handler=(e)=>{
        const {name,value}=e.target
        setUserDetails({...userDetails,[name]:value})
      
    }

    const connectUser=async(userObject)=>{
        const url=`https://api.spoonacular.com/users/connect?apiKey=${process.env.REACT_APP_API_KEY}`;
        const options={
            method:"POST",
            body:JSON.stringify(userObject),
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res=await fetch(url,options)
        const data=await res.json()
      
      
        if(res.ok){
            alert("user successfully registered")
            console.log(userObject)
            console.log(users)
             
            const myUsers=await allUsers()
            console.log(myUsers)
            const dbUser=myUsers.filter(each=>each.email===userObject.email)
            console.log(dbUser)
            if(dbUser.length===0){
                addUserData({...data,user:userObject.firstName,email:userObject.email})
            }
            
          
            
            // navigate("/mealplanner/login")
            navigate(`/mealplanner/${userObject.firstName}`)
        }
      
        formRef.current.reset()
    }

    const allUsers=async()=>{
        const data=await UsersDetailsService.getAllUsersDetails();
        console.log(data)
        const myUsers=data.docs.map(doc=>({...doc.data(),id:doc.id}))
        console.log(myUsers)
        return myUsers
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
          connectUser(userDetails)
 
        })
        
        .catch((err) => alert(err.message))
    }

    const submitDetails=(e)=>{
        e.preventDefault();
        signUp()
       

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

    
    function handleCallbackResponse(response){
        console.log("token : "+response.credential)
        console.log(response)
        const user=jwt_decode(response.credential)
        localStorage.setItem("token",JSON.stringify(response.credential))
        localStorage.setItem("profile",user.given_name)
     
        const userData={
            username:user.name,
            firstName:user.given_name,
            lastName:user.family_name,
            email:user.email
        }
        console.log(userData)
        connectUser(userData)
        // navigate(`/mealplanner/${userData.firstName}`)
    }

    useEffect(()=>{
 
        /*global google*/

        google.accounts.id.initialize({
            client_id:"615413987915-1q927mnqq8661hnc55vcn755f26liroh.apps.googleusercontent.com",
            callback:handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline",size:"large"}
        )

    },[])

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
        <div>
            <p>OR</p>
            <div id="signInDiv"></div>
        </div>
        <div className='go-to-profile-container'>
            <p>Do you have an account?</p>
            <button onClick={()=>navigate("/mealplanner/login")} className="go-to-profile">Sign In</button>
        </div>
    </div>
  )
}
