import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function UserLogin() {
    const [userCredentials,setUserCredentials]=useState({username:"",email:""})

    const navigate=useNavigate()

    const handler=(e)=>{
        const {name,value}=e.target
        setUserCredentials({...userCredentials,[name]:value})
    }

    const onLogin=(e)=>{
        e.preventDefault()
        const usernames=JSON.parse(localStorage.getItem("usernames"))
        const user=usernames.filter(each=>each.username===userCredentials.username)
        console.log(user)
        if(user.length!=0){
            if(userCredentials.username===user[0].username && userCredentials.email===user[0].email){
               
                navigate(`/mealplanner/profiles/${userCredentials.username}`)
            }
            else{
                alert("Invalid Credentials")
                
            }
        }
       else{
        alert("Please Enter Valid Credentials")
       }
       

    }

  return (
    <div className='login-form-container'>
        <h2>User Login</h2>
        <form onSubmit={onLogin} className="login-form">
            
            <div className="form-group">
                <label className="label">Username</label>
                <input type="text" name="username" className="connect-input-field" onChange={handler} required/>
            </div>
            
            <div className="form-group">
                <label className="label">Email</label>
                <input type="email" name="email" className="connect-input-field" onChange={handler} required/>
            </div>
            <input type="submit" value="Login" className="login-btn"/>
        </form>
    </div>
  )
}
