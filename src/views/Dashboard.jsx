import React from 'react'
import authenticated from '../utils/AuthenticatedComponent'
import { apiBasePath } from '../config'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apps: []
    }
  }
  componentDidMount() {
    const { accessToken } = this.props
    fetch(`${apiBasePath}/apps`, { headers: { authorization: accessToken } })
      .then(res => res.json())
      .then(({ apps }) => this.setState({ apps }))
  }

  render() {
    const { apps } = this.state
    const allApps = apps.forEach(app => <div key={app.id}>{app.name}</div>)

    return <div>{allApps}</div>
  }
}

export default authenticated(Dashboard)
