import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UsersDetailsService from "../../service/usersData"

export default function Profiles() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        allUsers()
    },[])

//    const users=JSON.parse(localStorage.getItem("usernames"))
    const allUsers=async()=>{
       const data=await UsersDetailsService.getAllUsersDetails();
       console.log(data)
       setUsers(data.docs.map(doc=>({...doc.data(),id:doc.id})))
    }


  return (
    <div className='profiles-page'>
        {users &&    <>
              <h2>Users Profiles</h2>
              <ul className='profiles'>
                  {users.map(each=>(
                      <Link to={`login`} className="profile-link" key={each.id}>
                          <li className="profile-container">
                            
                              <p><span className="profile-logo">{each.user.charAt(0)}</span></p>
                              <h3>{each.user}</h3>
                          </li>
                      </Link>
                      
                  ))}
              </ul>
              </>}
        {!users && <div className="no-profiles-container"> <h2>No Profiles Found</h2> <Link to="/userconnect" className='no-profile-link'>Go and Register here</Link></div>}
      
    </div>
  )
}
