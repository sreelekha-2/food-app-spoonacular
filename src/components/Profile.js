import React from 'react'
import { Outlet, useParams,Link } from 'react-router-dom'

export default function Profile() {

    const {profile}=useParams()
  return (
    <>

    <div className='meal-planner-container'>
            <ul className="mealplan-sidebar">
                <li className='meal-option'><Link to="addmeal" className="meal-link">Add to Meal Plan</Link></li>
                <li  className='meal-option'><Link to="getmeal" className="meal-link">Get Meal Plan</Link></li>
               
            </ul>

            <ul className="mealplan-mainbar">
                <h1>Welcome {profile}!!!</h1>
                <p>You Can Add and Get your own meal plans</p>
                <Outlet/>
            </ul>
            

        </div>
    </>
    
  )

}
