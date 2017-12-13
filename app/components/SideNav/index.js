import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import SideNavWrapper from './SideNavWrapper'

const SideNav = ({ id }) => {
  return (
    <SideNavWrapper id={id}>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/blog'>Blog Posts</Link>
      <Link to='/projects'>Projects</Link>
    </SideNavWrapper>
  )
}

SideNav.propTypes = {
  id: PropTypes.string.isRequired
}

export default SideNav
