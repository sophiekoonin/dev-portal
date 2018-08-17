import React from 'react'
import context from './AuthContext'

class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: 'hello',
      user: null
    }
  }

  render() {
    const { Provider } = context
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export default AuthProvider
