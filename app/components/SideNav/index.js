import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import SideNavWrapper from './SideNavWrapper'
import HomeIcon from 'components/HomeIcon'
import BlogIcon from 'components/BlogIcon'
import ProjectsIcon from 'components/ProjectsIcon'

const SideNav = ({ id }) => {
  return (
    <SideNavWrapper id={id}>
      <Link to='/dashboard'><HomeIcon /> Dashboard</Link>
      <Link to='/blog'><BlogIcon /> Blog Posts</Link>
      <Link to='/projects'><ProjectsIcon /> Projects</Link>
    </SideNavWrapper>
  )
}

SideNav.propTypes = {
  id: PropTypes.string.isRequired
}

export default SideNav
