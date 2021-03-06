import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { loginRequest, logout } from 'auth/actions'
import { makeSelectIsAuthenticated } from 'auth/selectors'

import TopNav from 'components/TopNav'
import SideNav from 'components/SideNav'
import Footer from 'components/Footer'

import AppWrapper from './AppWrapper'

export class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  }

  render () {
    if (this.props.location.pathname === '/' || !this.props.isAuthenticated) {
      return React.Children.toArray(this.props.children)
    } else {
      return (
        <AppWrapper>
          <section id='page'>
            <TopNav id='nav-top' logout={this.props.logout} />
            <SideNav id='nav-side' />
            <main id='main-content'>
              {React.Children.toArray(this.props.children)}
            </main>
            <Footer />
          </section>
        </AppWrapper>
      )
    }
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
