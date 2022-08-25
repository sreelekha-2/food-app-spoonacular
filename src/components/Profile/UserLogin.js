import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
import UsernamesService from "../../service/service"
import { app } from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function UserLogin() {

    const [userCredentials,setUserCredentials]=useState({email:"",password:""})
    const [users,setUsers]=useState([])

    const navigate=useNavigate()

    const auth=getAuth(app)

    useEffect(()=>{
        allUsers()
    },[])

    const handler=(e)=>{
        const {name,value}=e.target
        setUserCredentials({...userCredentials,[name]:value})
    }

    const allUsers=async()=>{
        const data=await UsernamesService.getAllUsers();
        console.log(data)
        setUsers(data.docs.map(doc=>({...doc.data(),id:doc.id})))
     }

    const onLogin=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
       .then((response) => {
        console.log(response.user);
        navigate(`/mealplanner/profiles/${response.user.displayName}`)
      })
      .catch((err) => alert(err.message));
  




    //     const user=users.filter(each=>each.username===userCredentials.username)
    //     console.log(user)
    //     if(user.length!=0){
    //         if(userCredentials.username===user[0].username && userCredentials.email===user[0].email){
               
    //             navigate(`/mealplanner/profiles/${userCredentials.username}`)
    //         }
    //         else{
    //             alert("Invalid Credentials")
                
    //         }
    //     }
    //    else{
    //     alert("Please Enter Valid Credentials")
    //    }
       

    }

  return (
    <div className='login-form-container'>
        <h2>User Login</h2>
        <form onSubmit={onLogin} className="login-form">
            
            
            
            <div className="form-group">
                <label className="label">Email</label>
                <input type="email" name="email" className="connect-input-field" onChange={handler} required/>
            </div>

            <div className="form-group">
                <label className="label">Password</label>
                <input type="password" name="password" className="connect-input-field" onChange={handler} required/>
            </div>

            <input type="submit" value="Login" className="login-btn"/>
        </form>
    </div>
  )
}
