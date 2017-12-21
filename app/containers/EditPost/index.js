/* global FileReader */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'

import BreadCrumb from 'components/BreadCrumb'
import EditorImagePreview from 'components/EditorImagePreview'
import EditorWrapper from './EditorWrapper'

const crumbTrail = [{
  page: 'Dashboard',
  link: '/dashboard'
}, {
  page: 'Blog Posts',
  link: '/blog'
}]

export default class EditPost extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  constructor (props) {
    super(props)
    this.state = {
      files: [],
      body: ''
    }

    this.handleMarkdownUpload = this.handleMarkdownUpload.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.onRemoveImage = this.onRemoveImage.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillUnmount () {
    this.setState({
      files: [],
      body: ''
    })
  }

  handleMarkdownUpload (e) {
    const reader = new FileReader()

    reader.onload = e => this.setState({ body: reader.result })

    reader.readAsText(e.target.files[0])
  }

  handleBodyChange (e) {
    this.setState({ body: e.target.value })
  }

  onDrop (acceptedFiles, rejectedFiles) {
    this.setState({
      files: acceptedFiles
    })
  }

  onRemoveImage () {
    this.setState({
      files: []
    })
  }

  onCancel (e) {
    e.preventDefault()
    this.props.history.goBack()
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(e)
  }

  render () {
    const headerText = this.props.match.params.id === 'new' ? 'New Post' : 'Edit Post'
    return (
      <div>
        <BreadCrumb
          trail={crumbTrail}
          currentPage={headerText}
        />
        <br />
        <EditorWrapper>
          <header>
            <div>{headerText}</div>
          </header>
          <form onSubmit={this.onSubmit}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' />
            <label htmlFor='body'>
              Body
              <span className='btn-markdown' onClick={() => this.uploadMarkdown.click()}>Upload Markdown</span>
              {/* eslint-disable no-return-assign */}
              <input type='file' name='markdown' className='markdown-upload' ref={(ref) => this.uploadMarkdown = ref} onChange={this.handleMarkdownUpload} />
              {/* eslint-enable no-return-assign */}
            </label>
            <textarea type='text' name='body' rows='10' value={this.state.body} onChange={e => this.handleBodyChange(e)} />
            <div>Hero Image</div>
            {this.state.files.length === 0
              ? <Dropzone
                className='dropzone'
                activeClassName='dropzone-active'
                acceptClassName='dropzone-accept'
                rejectClassName='dropzone-reject'
                accept='image/jpg, image/jpeg, image/png'
                onDrop={this.onDrop}
              >
                <div>Drag and drop image</div>
              </Dropzone>
              : <EditorImagePreview src={this.state.files[0].preview} removeImage={this.onRemoveImage} />
            }
            <button className='btn-save' onClick={e => this.onSubmit(e)}>Save</button>
            <button className='btn-cancel' onClick={e => this.onCancel(e)}>Cancel</button>
            {headerText !== 'New Post' &&
              <div className='btn-delete' onClick={() => console.log('TODO: DELETE POST CONFIRMATION!')}>Delete Post</div>
            }
          </form>
        </EditorWrapper>
      </div>
    )
  }
}
