import React from 'react'
import { shallow } from 'enzyme'

import ProjectsIcon from '../index'

describe('<ProjectsIcon />', () => {
  it('should contain <svg> element', () => {
    const renderedComponent = shallow(<ProjectsIcon />)
    expect(renderedComponent.find('svg').length).toBe(1)
  })
})
