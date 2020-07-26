import 'materialize-css/dist/css/materialize.min.css'

import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LoginForm from './components/pages/LoginForm';
import SignupForm from './components/pages/SignupForm';
import UserContext from './context/UserContext'
import Axios from 'axios';

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect(()=>{
    const checkLoggedIn = async ()=>{
      let token = localStorage.getItem('auth-token');
      if(token === null){
        localStorage.setItem("auth-token", "");
        token= "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid", null, {
          headers: { "x-auth-token": token }
        }
      );
      if(tokenRes.data){
        const userRes = await Axios.get(
          "http://localhost:5000/users/", {
            headers:  { "x-auth-token": token }
          }
        );
        setUserData({
          token,
          user: userRes.data
        })
      }
    }

    checkLoggedIn();
  })

  return (
    <BrowserRouter>
      <UserContext.Provider value= {{ userData, setUserData }}>
        <div className="App">
          <Navbar/>
        
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/login" component= {LoginForm} />
            <Route exact path="/signup" component= {SignupForm} />
          </Switch>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
