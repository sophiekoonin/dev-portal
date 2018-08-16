import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import './App.css'
import Dashboard from './views/Dashboard'
import LoginPage from './views/LoginPage'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={LoginPage} />
    </div>
  </Router>
)

export default hot(module)(App)
