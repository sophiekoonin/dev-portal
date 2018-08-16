import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from './AuthContext'

const AuthenticatedRoute = ({ component, ...rest }) => {
  const Component = component

  return (
    <Route {...rest}>
      <Provider>
        <Component />
      </Provider>
    </Route>
  )
}

export default AuthenticatedRoute
