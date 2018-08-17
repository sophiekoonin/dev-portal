import React from 'react'
import context from './AuthContext'
import Redirect from 'react-router-dom/Redirect'

const authenticated = component => props => {
  const Component = component
  const { Consumer } = context
  return (
    <Consumer>
      {({ token }) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    </Consumer>
  )
}

export default authenticated
