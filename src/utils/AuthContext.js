import React from 'react'

const initialState = {
  token: null,
  user: null
}

export const { Provider, Consumer } = React.createContext(initialState)
