import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { loginRequest, logout } from 'auth/actions'
import { makeSelectIsAuthenticated } from 'auth/selectors'

export class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  }

  render () {
    return (
      <div>
        <h3>Nav here</h3>
        {this.props.isAuthenticated
        ? <button onClick={this.props.logout}>Logout</button>
        : <button onClick={this.props.login}>Login</button>
        }
        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated()
})

export const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(loginRequest()),
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
