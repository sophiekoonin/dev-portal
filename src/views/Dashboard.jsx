import React from 'react'
import { AuthContext } from '../utils/AuthContext'

const Dashboard = () => (
  <AuthContext.Consumer>
    {token => <p className="App-intro">List of apps will go here.</p>}
  </AuthContext.Consumer>
)

export default Dashboard
