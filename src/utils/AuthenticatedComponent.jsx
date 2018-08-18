import React from 'react'
import context from './AuthContext'
import Redirect from 'react-router-dom/Redirect'

import { loginPath } from '../config'

const authenticated = (Component, props) => () => {
  const { Consumer } = context
  return (
    <Consumer>
      {({ accessToken }) => {
        return accessToken ? (
          <Component {...props} accessToken={accessToken} />
        ) : (
          <Redirect to={loginPath} />
        )
      }}
    </Consumer>
  )
}

export default authenticated
