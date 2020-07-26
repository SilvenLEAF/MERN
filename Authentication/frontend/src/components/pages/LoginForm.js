import React, { Component } from 'react'

export class LoginForm extends Component {
  
  render() {
    return (
      <div className="container">
        <form>
          <h2>Log In</h2>
          <div className="input-field">
            <input type="email" id="email"/>
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input type="password" id="password"/>
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-field">
            <button className="btn green waves-effect waves-light">
              Log In <i className="fa fa-send right"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
