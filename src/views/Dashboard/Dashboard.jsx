import React, { Fragment } from 'react'
import moment from 'moment'
import authenticated from '../../utils/AuthenticatedComponent'
import { apiBasePath } from '../../config'
import './dashboard.css'

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
    const allApps = apps.map(app => (
      <div className="dashboard-app" key={app.id}>
        <span className="app-title">{app.name}</span>
        <p>Created: {moment(app.created).format('DD/MM/YY HH:mm')}</p>
      </div>
    ))
    return (
      <Fragment>
        <h2>App dashboard</h2>
        <div className="dashboard-container">{allApps}</div>
      </Fragment>
    )
  }
}

export default authenticated(Dashboard)
