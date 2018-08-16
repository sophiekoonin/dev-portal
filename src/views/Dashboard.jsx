import React from 'react'
import authenticated from '../utils/AuthenticatedComponent'

const Dashboard = () => <p>Hello world!</p>

export default authenticated(Dashboard)
