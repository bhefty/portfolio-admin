import React from 'react'
import PropTypes from 'prop-types'

import PreviewWrapper from './PreviewWrapper'

const EditorImagePreview = ({ src, removeImage }) => {
  return (
    <PreviewWrapper>
      <img src={src} alt='Preview of image to be uploaded' />
      <span className='delete-img' onClick={removeImage}>
        <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z' />
          <path d='M0 0h24v24H0z' fill='none' />
        </svg>
      </span>
    </PreviewWrapper>
  )
}

EditorImagePreview.propTypes = {
  src: PropTypes.string.isRequired
}

export default EditorImagePreview
