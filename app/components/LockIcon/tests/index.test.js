import React from 'react'
import { shallow } from 'enzyme'

import LockIcon from '../index'

describe('<LockIcon />', () => {
  it('should contain <svg> element', () => {
    const renderedComponent = shallow(<LockIcon />)
    expect(renderedComponent.find('svg').length).toBe(1)
  })
})
