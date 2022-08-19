import React from 'react'
import { Link } from 'react-router-dom'

export default function Profiles() {
   const users=JSON.parse(localStorage.getItem("usernames"))
   console.log(users)
  return (
    <div className='profiles-page'>
        {users.length===0?<h2>No Profiles Found</h2>:(
              <>
              <h2>Users Profiles</h2>
              <ul className='profiles'>
                  {users.map(each=>(
                      <Link to={`${each.user}`} className="profile-link">
                          <li className="profile-container">
                              <p><span className="profile-logo">{each.fname.charAt(0)}{each.lname.charAt(0)}</span></p>
                              <h3>{each.user}</h3>
                          </li>
                      </Link>
                      
                  ))}
              </ul>
              </>
        )}
      
    </div>
  )
}
