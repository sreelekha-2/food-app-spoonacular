import React from 'react'
import { Outlet, useParams,Link } from 'react-router-dom'

export default function Profile() {

    const {profile}=useParams()
    
  return (
    <>

    <div className='meal-planner-container'>
            <ul className="mealplan-sidebar">
                <li className='meal-option'><Link to="addmeal" className="meal-link">Add to Meal Plan</Link></li>
                <li  className='meal-option'><Link to="getmeal" className="meal-link">Get Meal Plan Day</Link></li>
                <li  className='meal-option'><Link to="getmealweek" className="meal-link">Get Meal Plan Week</Link></li>
                <li  className='meal-option'><Link to="clearmeal" className="meal-link">Clear Meal Plan Day</Link></li>
            
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
