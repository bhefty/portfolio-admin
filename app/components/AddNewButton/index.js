import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  background-color: rgb(33, 150, 83);
  height: 110px;
  width: 100%;
  cursor: pointer;
  color: #fff;
  border: none;

  &:hover {
    background-color: rgba(33, 150, 83, .8)
  }
`

const AddNewButton = ({ add, link }) => {
  return (
    <Link to={link}>
      <Button>
        Add New {add}
      </Button>
    </Link>
  )
}

AddNewButton.propTypes = {
  add: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default AddNewButton
