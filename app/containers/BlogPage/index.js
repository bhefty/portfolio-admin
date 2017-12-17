import React, { Component } from 'react'

import BreadCrumb from 'components/BreadCrumb'
import ActionButton from 'components/ActionButton'
import AddNewButton from 'components/AddNewButton'
import Wrapper from './Wrapper'

const crumbTrail = [{
  page: 'Dashboard',
  link: '/dashboard'
}]

const sampleDate1 = '07/19/2017'
const sampleTitle1 = 'Part 1: The Case for React Redux Boilerplate'
const sampleDate2 = '05/28/2017'
const sampleTitle2 = 'Another rewrite and more lessons learned'
const sampleDate3 = '04/13/2017'
const sampleTitle3 = 'Lessons learned in moving to KeystoneJS from development to production'
const sampleDate4 = '04/12/2017'
const sampleTitle4 = 'Welcome'

export default class BlogPage extends Component {
  render () {
    return (
      <div>
        <BreadCrumb
          trail={crumbTrail}
          currentPage='Blog Posts'
        />
        <br />
        <Wrapper>
          <AddNewButton add='Post' link='/blog' />
          <ActionButton route='/blog' buttonType='blog' date={sampleDate1} title={sampleTitle1} />
          <ActionButton route='/blog' buttonType='blog' date={sampleDate2} title={sampleTitle2} />
          <ActionButton route='/blog' buttonType='blog' date={sampleDate3} title={sampleTitle3} />
          <ActionButton route='/blog' buttonType='blog' date={sampleDate4} title={sampleTitle4} />
        </Wrapper>
      </div>
    )
  }
}
