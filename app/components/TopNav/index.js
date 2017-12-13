import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import TopNavWrapper from './TopNavWrapper'

const TopNav = ({ id }) => {
  return (
    <TopNavWrapper id={id}>
      <Link to='/'>Portfolio Admin</Link>
      <button onClick={() => console.log('TODO: Logout function')}>Logout</button>
    </TopNavWrapper>
  )
}

TopNav.propTypes = {
  id: PropTypes.string.isRequired
}

export default TopNav
