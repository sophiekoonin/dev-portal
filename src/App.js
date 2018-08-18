import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Dashboard from './views/Dashboard/Dashboard'
import LoginPage from './views/LoginPage/LoginPage'
import Layout from './components/Layout'
import AuthProvider from './utils/AuthProvider'
import { rootPath, loginPath } from './config'
class App extends React.Component {
  render() {
    return (
      <Layout>
        <AuthProvider>
          <Router>
            <div>
              <Route exact path={rootPath} component={Dashboard} />
              <Route path={loginPath} component={LoginPage} />
            </div>
          </Router>
        </AuthProvider>
      </Layout>
    )
  }
}

export default hot(module)(App)
