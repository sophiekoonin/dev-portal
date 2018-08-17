import React from 'react'

const LoginPage = () => (
  <div>
    <h1>Log in</h1>
    <div className="login-form">
      <form>
        <label htmlFor="login-user">Username</label>
        <input id="login-user" required />
        <label htmlFor="login-pass">Password</label>
        <input id="login-pass" type="password" required />
        <button id="login-submit">Submit</button>
      </form>
    </div>
  </div>
)

export default LoginPage
