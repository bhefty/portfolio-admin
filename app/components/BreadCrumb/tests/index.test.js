import React from 'react'
import { shallow } from 'enzyme'

import BreadCrumb from '../index'

describe('<BreadCrumb />', () => {
  it('should render with correct prop types', () => {
    const mockTrail = [{
      link: '/pagetest',
      page: 'Page Test'
    }]
    const mockCurrentPage = 'This Page'
    const renderedComponent = shallow(
      <BreadCrumb trail={mockTrail} currentPage={mockCurrentPage} />
    )
    expect(renderedComponent.find('div').length).toBe(1)
  })

  it('should link to the correct number of crumbs', () => {
    const mockTrail = [{
      link: '/pagetest',
      page: 'Page Test'
    }, {
      link: '/second',
      page: 'Second Page'
    }]
    const mockCurrentPage = 'This Page'
    const renderedComponent = shallow(
      <BreadCrumb trail={mockTrail} currentPage={mockCurrentPage} />
    )

    expect(renderedComponent.find('Link').length).toBe(2)
  })
})
