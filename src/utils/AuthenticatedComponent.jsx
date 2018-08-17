import React from 'react'
import context from './AuthContext'
import Redirect from 'react-router-dom/Redirect'

const authenticated = (Component, props) => () => {
  const { Consumer } = context
  return (
    <Consumer>
      {({ token }) => {
        return token ? <Component {...props} /> : <Redirect to="/login" />
      }}
    </Consumer>
  )
}

export default authenticated
