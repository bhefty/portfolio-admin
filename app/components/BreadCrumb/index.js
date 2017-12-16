import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Wrapper from './Wrapper'

const BreadCrumb = ({ trail, currentPage }) => {
  return (
    <Wrapper>
      <div>
        {trail.map((item, idx) => {
          return (<span key={idx}><Link to={item.link}>{item.page}</Link> / </span>)
        })}
        {currentPage}
      </div>
    </Wrapper>
  )
}

BreadCrumb.propTypes = {
  trail: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
  })).isRequired,
  currentPage: PropTypes.string.isRequired
}

export default BreadCrumb
