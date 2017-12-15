import React from 'react'
import { shallow } from 'enzyme'

import HomeIcon from '../index'

describe('<HomeIcon />', () => {
  it('should contain <svg> element', () => {
    const renderedComponent = shallow(<HomeIcon />)
    expect(renderedComponent.find('svg').length).toBe(1)
  })
})
