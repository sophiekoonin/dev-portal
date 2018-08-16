import React from 'react'
import { AuthContext } from '../utils/AuthContext'

const Dashboard = () => (
  <AuthContext.Consumer>
    {token => (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Developer Portal</h1>
        </header>
        <p className="App-intro">List of apps will go here.</p>
      </div>
    )}
  </AuthContext.Consumer>
)

export default Dashboard
