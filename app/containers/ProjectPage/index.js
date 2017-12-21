import React, { Component } from 'react'

import BreadCrumb from 'components/BreadCrumb'
import ActionButton from 'components/ActionButton'
import AddNewButton from 'components/AddNewButton'
import Wrapper from './Wrapper'

const crumbTrail = [{
  page: 'Dashboard',
  link: '/dashboard'
}]

const sampleTitle1 = 'Bit-Stocks'
const sampleTitle2 = 'This Site'
const sampleTitle3 = 'Nightlife Activity'
const sampleTitle4 = 'Find-My-Rep'

export default class ProjectPage extends Component {
  render () {
    return (
      <div>
        <BreadCrumb
          trail={crumbTrail}
          currentPage='Projects'
        />
        <br />
        <Wrapper>
          <AddNewButton add='Project' link='/projects/edit/new' />
          <ActionButton route='/projects/edit/1' buttonType='project' title={sampleTitle1} />
          <ActionButton route='/projects/edit/2' buttonType='project' title={sampleTitle2} />
          <ActionButton route='/projects/edit/3' buttonType='project' title={sampleTitle3} />
          <ActionButton route='/projects/edit/4' buttonType='project' title={sampleTitle4} />
        </Wrapper>
      </div>
    )
  }
}
