import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import UserContext from '../../context/UserContext'


function Navbar() {
  const { userData } = useContext(UserContext);
  return (
    <nav className="nav-wraper purple">
      <div className="container">
        <Link to= "/" className="brand-logo">MERN Stack</Link>
        <ul>
          { userData.user ?  <SignedInLinks/> : <SignedOutLinks/> }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
