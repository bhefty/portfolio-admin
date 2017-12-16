import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import TopNavWrapper from './TopNavWrapper'
import LockIcon from 'components/LockIcon'

const TopNav = ({ id, logout }) => {
  return (
    <TopNavWrapper id={id}>
      <div className='brand'>
        <Link to='/'>Portfolio Admin</Link>
      </div>
      <div className='btn-logout'>
        <button onClick={() => logout()}><LockIcon /><span className='btn-text'>Logout</span></button>
      </div>
    </TopNavWrapper>
  )
}

TopNav.propTypes = {
  id: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}

export default TopNav
