import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { loginRequest } from 'auth/actions'
import { makeSelectIsAuthenticated } from 'auth/selectors'

import Wrapper from './Wrapper'

export class HomePage extends React.Component {
  render () {
    return (
      <Wrapper>
        <h1>Home</h1>
        {!this.props.isAuthenticated
          ? <button onClick={this.props.login}>Login</button>
          : <Link to='/dashboard'>Dashboard</Link>
        }
      </Wrapper>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated()
})

export const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(loginRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
