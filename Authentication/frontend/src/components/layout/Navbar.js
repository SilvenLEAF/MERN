import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

function Navbar() {
  return (
    <nav className="nav-wraper purple">
      <div className="container">
        <Link to= "/" className="brand-logo">MERN Stack</Link>
        <ul>
          <SignedOutLinks/>
          <SignedInLinks/>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
