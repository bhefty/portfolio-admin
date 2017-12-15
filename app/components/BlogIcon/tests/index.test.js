import React from 'react'
import { shallow } from 'enzyme'

import BlogIcon from '../index'

describe('<BlogIcon />', () => {
  it('should contain <svg> element', () => {
    const renderedComponent = shallow(<BlogIcon />)
    expect(renderedComponent.find('svg').length).toBe(1)
  })
})
