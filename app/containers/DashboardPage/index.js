import React from 'react'

import BreadCrumb from 'components/BreadCrumb'
import ActionButton from 'components/ActionButton'

import Wrapper from './Wrapper'

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
        <br />
        <Wrapper>
          <ActionButton route='/blog' buttonType='blog' />
          <ActionButton route='/projects' buttonType='project' />
        </Wrapper>

      </div>
    )
  }
}

export default DashboardPage
