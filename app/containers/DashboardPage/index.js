import React from 'react'

import BreadCrumb from 'components/BreadCrumb'

const crumbTrail = [{
  page: 'Dashboard',
  link: '/dashboard'
}]

export class DashboardPage extends React.Component {
  render () {
    return (
      <div>
        <BreadCrumb
          trail={crumbTrail}
          currentPage='My Dashboard'
        />
        <h2>DashboardPage</h2>
      </div>
    )
  }
}

export default DashboardPage
