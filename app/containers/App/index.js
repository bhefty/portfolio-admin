import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return (
      <div>
        <h3>Nav here</h3>
        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}

export default withRouter(connect(null, null)(App))
