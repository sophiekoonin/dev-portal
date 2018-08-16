import React from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from './AuthContext'

const AuthenticatedRoute = ({ component, ...rest }) => {
  const { Provider } = AuthContext
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
