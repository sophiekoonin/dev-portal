import React from 'react'
import { Consumer } from './AuthContext'
import Redirect from 'react-router-dom/Redirect'

const authenticated = ({ component }) => props => {
  const Component = component
  return (
    <Consumer>
      {({ token }) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    </Consumer>
  )
}

export default authenticated
