import React from 'react'
import Redirect from 'react-router-dom/Redirect'
import context from '../../utils/AuthContext'
import './login.css'
class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  onUpdateUsername = e => {
    this.setState({ username: e.target.value })
  }
  onUpdatePassword = e => {
    this.setState({ password: e.target.value })
  }

  onSubmitLogin = (e, doLogin) => {
    e.preventDefault()
    doLogin(this.state.username, this.state.password)
  }

  render() {
    const { Consumer } = context
    return (
      <Consumer>
        {({ accessToken, doLogin }) =>
          accessToken !== null && accessToken !== 'undefined' ? (
            <Redirect to="/" />
          ) : (
            <div>
              <h1>Log in</h1>
              <div className="login-form">
                <form onSubmit={e => this.onSubmitLogin(e, doLogin)}>
                  <label htmlFor="login-user">Username</label>
                  <input
                    id="login-user"
                    required
                    value={this.state.username}
                    onChange={this.onUpdateUsername}
                  />
                  <label htmlFor="login-pass">Password</label>
                  <input
                    id="login-pass"
                    type="password"
                    required
                    value={this.state.password}
                    onChange={this.onUpdatePassword}
                  />
                  <button id="login-submit" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )
        }
      </Consumer>
    )
  }
}
export default LoginPage
