import React, { Component } from 'react'

export class SignupForm extends Component {
  
  render() {
    return (
      <div className="container">
        <form>
          <h2>Sign Up</h2>
          <div className="input-field">
            <input type="email" id="email"/>
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input type="password" id="password"/>
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-field">
            <input type="password" id="passwordCheck"/>
            <label htmlFor="passwordCheck">Password Check</label>
          </div>

          <div className="input-field">
            <input type="text" id="displayName"/>
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
}

export default SignupForm
