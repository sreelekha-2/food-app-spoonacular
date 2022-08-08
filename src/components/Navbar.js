import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="nav">
            <Link to= "/" className="logo"><h3>FOODRACK</h3></Link>
            <div>
                
                <Link className="nav-link" to= "/">Home</Link>

                <Link className="nav-link" to= "/vegetarian">Veggie</Link>
            </div>
        </nav>
    </div>
  )
}
