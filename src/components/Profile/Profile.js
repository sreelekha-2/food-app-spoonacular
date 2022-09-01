import React, { useEffect, useState } from 'react'
import { Outlet, useParams,Link,useNavigate } from 'react-router-dom'
import UsersDetailsService from "../../service/usersData"
import { app } from '../../firebase-config';
import { getAuth, signOut } from 'firebase/auth';

export default function Profile() {

 const [users,setUsers]=useState([])
  const {profile}=useParams()
  const navigate=useNavigate()

  const auth=getAuth(app)

  useEffect(()=>{
    allUsers()
  },[])  

  const allUsers=async()=>{
    const data=await UsersDetailsService.getAllUsersDetails();
    console.log(data)
    setUsers(data.docs.map(doc=>({...doc.data(),id:doc.id})))
  }

 if(users.length!==0){
  console.log(profile)
  const filterResults=users.filter(each=>each.user===profile)
  console.log(filterResults)
  const {username,hash}=filterResults[0]
  localStorage.setItem("usernameHash",JSON.stringify({username:username,hash:hash}))
 }

 const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log(true);
    localStorage.removeItem("token")
    navigate("/userconnect")
    
  } catch (err) {
    console.log(err.message);
  }
};
   
  return (
    <>

    <div className='meal-planner-container'>
            <ul className="mealplan-sidebar">
                <li className='meal-option'><Link to="addmeal" className="meal-link">Add to Meal Plan</Link></li>
                <li  className='meal-option'><Link to="getmeal" className="meal-link">Get Meal Plan Day</Link></li>
                <li  className='meal-option'><Link to="getmealweek" className="meal-link">Get Meal Plan Week</Link></li>
                <li  className='meal-option'><Link to="clearmeal" className="meal-link">Clear Meal Plan Day</Link></li>
                <li  ><button onClick={()=>logoutUser()}  className="meal-link logout-btn meal-option">Sign Out</button></li>
            
            </ul>

            <ul className="mealplan-mainbar">
                <h1>Welcome {profile}!!!</h1>
                <p>You Can Add, Get, Delete and Clear your own meal plans</p>
                <Outlet/>
            </ul>
            

        </div>
    </>
    
  )

}
