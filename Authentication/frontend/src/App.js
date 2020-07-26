import 'materialize-css/dist/css/materialize.min.css'

import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import LoginForm from './components/pages/LoginForm';
import SignupForm from './components/pages/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact path="/login" component= {LoginForm} />
        <Route exact path="/signup" component= {SignupForm} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
