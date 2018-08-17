import React from 'react'
import context from './AuthContext'
import { apiBasePath } from '../config'

class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accessToken: null,
      username: null,
      hasError: false
    }
  }

  getAccessToken = async (username, password) => {
    await this.setState({ hasError: false })
    const res = await fetch(`${apiBasePath}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    const body = await res.json()
    if (res.status !== 200) {
      return this.setState({ hasError: true }, () => body['error'])
    } else {
      const { accessToken } = body
      return this.setState({ accessToken })
    }
  }

  render() {
    const { Provider } = context
    return (
      <Provider value={{ ...this.state, doLogin: this.getAccessToken }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default AuthProvider
