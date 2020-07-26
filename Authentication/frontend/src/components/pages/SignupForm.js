import M from 'materialize-css'

import React, { useEffect, useState, useContext } from 'react'
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

function SignupForm() {
  useEffect(()=>{
    M.AutoInit()
  })


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();


  const {setUserData} = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newUser = { email, password, passwordCheck, displayName };
    await Axios.post("http://localhost:5000/users/register", newUser);

    const loginRes = await Axios.post("http://localhost:5000/users/login", {
      email,
      password
    });
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push('/');
  }
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="input-field">
        <input type="email" id="email" onChange={ (e) =>{ setEmail( e.target.value ) } } />
        <label htmlFor="email">Email</label>
      </div>

      <div className="input-field">
        <input type="password" id="password" onChange={ (e) =>{ setPassword( e.target.value ) } }/>
        <label htmlFor="password">Password</label>
      </div>

      <div className="input-field">
        <input type="password" id="passwordCheck" onChange={ (e) =>{ setPasswordCheck( e.target.value ) } }/>
        <label htmlFor="passwordCheck">Password Check</label>
      </div>

      <div className="input-field">
        <input type="text" id="displayName" onChange={ (e) =>{ setDisplayName( e.target.value ) } }/>
        <label htmlFor="displayName">Display Name</label>
      </div>

      <div className="input-field">
        <button className="btn green waves-effect waves-light">
          Sign Up <i className="fa fa-send right"></i>
        </button>
      </div>
    </form>
  </div>
  )
}

export default SignupForm
