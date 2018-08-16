import React from 'react'

import './Layout.css'

const Layout = ({ children }) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Developer Portal</h1>
    </header>
    <div className="App-body">{children}</div>
  </div>
)

export default Layout
