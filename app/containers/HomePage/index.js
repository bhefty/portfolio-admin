import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

import { loginRequest } from 'auth/actions'
import { makeSelectIsAuthenticated } from 'auth/selectors'

import Wrapper from './Wrapper'

const StyledLink = styled(Link)`
  border: none;
`

export class HomePage extends React.Component {
  render () {
    return (
      <Wrapper>
        <div className='center-content'>
          <h1 className='header'>bh</h1>
          <p className='sub-heading'>ADMIN</p>
          {!this.props.isAuthenticated
            ? <button onClick={this.props.login} className='btn-home'>Login</button>
            : <StyledLink to='/dashboard'><button className='btn-home'>Enter</button></StyledLink>
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
