import React from 'react'
import { shallow } from 'enzyme'

import { App } from '../index'

describe('<App />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>)
    const isAuthenticated = false
    const location = {
      pathname: '/'
    }
    const renderedComponent = shallow(
      <App isAuthenticated={isAuthenticated} location={location}>
        {children}
      </App>
    )
    expect(renderedComponent.contains(children)).toBe(true)
  })
})
