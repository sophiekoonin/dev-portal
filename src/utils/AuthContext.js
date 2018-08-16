import React from 'react'

const initialState = {
  token: null,
  user: null
}

export const AuthContext = React.createContext(initialState)
