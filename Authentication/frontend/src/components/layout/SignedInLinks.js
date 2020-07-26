import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'


function SignedInLinks() {
  const {  setUserData } = useContext(UserContext);
  const handleLogout = ()=>{
    setUserData({
      token: undefined,
      user:undefined
    })
    localStorage.setItem("auth-token", "")
  }  
  return (
    <>
      <li onClick={handleLogout}>Logout</li> 
    </>
  )
}

export default SignedInLinks
