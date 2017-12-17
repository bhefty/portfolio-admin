import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import BlogIcon from 'components/BlogIcon'
import ProjectsIcon from 'components/ProjectsIcon'
import StyledButton from 'components/StyledButton'

const StyledLink = styled(Link)`
  text-decoration: none;
`

const ActionButton = ({ buttonType, route }) => {
  let buttonIcon
  let titleText

  if (buttonType === 'blog') {
    buttonIcon = <BlogIcon />
    titleText = '# Blog Posts'
  } else if (buttonType === 'project') {
    buttonIcon = <ProjectsIcon />
    titleText = '# Projects'
  }

  return (
    <StyledLink to={route}>
      <StyledButton type={buttonType}>
        <div className='action-btn-count'>
          {titleText}
        </div>
        <div className='action-btn-icon'>
          {buttonIcon}
        </div>
        <div className='action-btn-details-container'>
          <span className='action-btn-details'>View Details</span>
          <span className='action-btn-arrow'>&#9656;</span>
        </div>
      </StyledButton>
    </StyledLink>
  )
}

ActionButton.propTypes = {
  buttonType: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

export default ActionButton
