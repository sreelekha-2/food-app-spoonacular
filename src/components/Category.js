import React from 'react'
import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import {GiNoodles,GiChopsticks} from "react-icons/gi"
import { Link } from 'react-router-dom'


export default function Category() {
  return (
    <div>
          <ul className='cuisine-container'>
            <li className="cuisine">
                <Link to="/cuisine/american" className='cuisine-link'>
                    <FaPizzaSlice/>
                    <h4 className="cuisine-name">American</h4>
                </Link>
            </li>
            <li className="cuisine"><Link to="/cuisine/spanish"  className='cuisine-link'><GiChopsticks/><h4 className="cuisine-name">Spanish</h4></Link></li>
            <li className="cuisine"><Link to="/cuisine/chinese" className='cuisine-link'><GiNoodles/><h4 className="cuisine-name">Chinese</h4></Link></li>
            <li className="cuisine"><Link to="/cuisine/french" className='cuisine-link'><FaHamburger/><h4 className="cuisine-name">French</h4></Link></li>
       </ul>
    </div>
  )
}
