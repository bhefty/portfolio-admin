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
        <div className='center-content'>
          <h1 className='header'>bh</h1>
          <p className='sub-heading'>ADMIN</p>
          {!this.props.isAuthenticated
            ? <button onClick={this.props.login} className='btn-home'>Login</button>
            : <button className='btn-home'><Link to='/dashboard'>Enter</Link></button>
          }
        </div>
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
