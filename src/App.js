import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import AuthenticatedRoute from './utils/AuthenticatedRoute'
import Dashboard from './views/Dashboard'
import LoginPage from './views/LoginPage'
import Layout from './components/Layout'
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
      <Layout>
        <Router>
          <div>
            <AuthenticatedRoute exact path="/" component={Dashboard} />
            <Route path="/login" component={LoginPage} />
          </div>
        </Router>
      </Layout>
    )
  }
}

export default hot(module)(App)
