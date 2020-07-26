import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLinks() {
  return (
    <>
      <li><NavLink to="/">Logout</NavLink></li> 
    </>
  )
}

export default SignedInLinks
