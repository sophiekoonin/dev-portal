import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import AuthenticatedRoute from './utils/AuthenticatedRoute'
import Dashboard from './views/Dashboard'
import LoginPage from './views/LoginPage'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: null,
      user: null
    }
  }

  render() {
    return (
      <Router>
        <div>
          <AuthenticatedRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
