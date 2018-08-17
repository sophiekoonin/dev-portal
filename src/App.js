import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Dashboard from './views/Dashboard/Dashboard'
import LoginPage from './views/LoginPage/LoginPage'
import Layout from './components/Layout'
import AuthProvider from './utils/AuthProvider'
class App extends React.Component {
  render() {
    return (
      <Layout>
        <AuthProvider>
          <Router>
            <div>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={LoginPage} />
            </div>
          </Router>
        </AuthProvider>
      </Layout>
    )
  }
}

export default hot(module)(App)
