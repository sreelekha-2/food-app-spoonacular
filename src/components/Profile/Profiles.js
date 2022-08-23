import React from 'react'
import { Link } from 'react-router-dom'

export default function Profiles() {

   const users=JSON.parse(localStorage.getItem("usernames"))

  return (
    <div className='profiles-page'>
        {users &&    <>
              <h2>Users Profiles</h2>
              <ul className='profiles'>
                  {users.map(each=>(
                      <Link to={`login`} className="profile-link">
                          <li className="profile-container">
                              <p><span className="profile-logo">{each.firstName.charAt(0)}{each.lastName.charAt(0)}</span></p>
                              <h3>{each.username}</h3>
                          </li>
                      </Link>
                      
                  ))}
              </ul>
              </>}
        {!users && <div className="no-profiles-container"> <h2>No Profiles Found</h2> <Link to="/userconnect" className='no-profile-link'>Go and Register here</Link></div>}
      
    </div>
  )
}
