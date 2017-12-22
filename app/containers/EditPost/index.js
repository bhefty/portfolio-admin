/* global FileReader */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import request from 'utils/request'

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
      existingHeroImage: null,
      heroImage: [],
      title: '',
      body: ''
    }

    this.handleMarkdownUpload = this.handleMarkdownUpload.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.onRemoveImage = this.onRemoveImage.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async componentWillMount () {
    const id = this.props.match.params.id

    if (id !== 'new') {
      const URL = `/api/posts/${id}`
      const data = await request(URL)
      this.setState({
        title: data.title,
        body: data.body,
        existingHeroImage: data.heroImage
      })
    }
  }

  componentWillUnmount () {
    this.setState({
      heroImage: []
    })
  }

  handleMarkdownUpload (e) {
    const reader = new FileReader()

    reader.onload = e => this.setState({ body: reader.result })

    reader.readAsText(e.target.files[0])
  }

  handleTitleChange (e) {
    this.setState({ title: e.target.value })
  }

  handleBodyChange (e) {
    this.setState({ body: e.target.value })
  }

  onDrop (acceptedFiles, rejectedFiles) {
    this.setState({
      heroImage: acceptedFiles
    })
  }

  onRemoveImage () {
    this.setState({
      existingHeroImage: null,
      heroImage: []
    })
  }

  onCancel (e) {
    e.preventDefault()
    this.props.history.goBack()
  }

  async onSubmit (e) {
    e.preventDefault()
    const requestBody = {
      title: this.state.title,
      body: this.state.body,
      heroImage: this.state.existingHeroImage || 'https://billhefty.com/static/img/bill-profile-pic.jpg'
    }
    const slug = this.props.match.params.id !== 'new' ? this.props.match.params.id : null
    const route = !slug ? 'new' : `edit/${slug}`
    const requestURL = `/api/posts/${route}`
    const requestOptions = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(requestBody)
    }

    const response = await request(requestURL, requestOptions)
    console.log(response)
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
            <input type='text' name='title' value={this.state.title} onChange={e => this.handleTitleChange(e)} />
            <label htmlFor='body'>
              Body
              <span className='btn-markdown' onClick={() => this.uploadMarkdown.click()}>Upload Markdown</span>
              {/* eslint-disable no-return-assign */}
              <input type='file' name='markdown' className='markdown-upload' ref={(ref) => this.uploadMarkdown = ref} onChange={this.handleMarkdownUpload} />
              {/* eslint-enable no-return-assign */}
            </label>
            <textarea type='text' name='body' rows='10' value={this.state.body} onChange={e => this.handleBodyChange(e)} />
            <div>Hero Image</div>
            {!this.state.existingHeroImage && this.state.heroImage.length === 0
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
              : this.state.existingHeroImage
              ? <EditorImagePreview src={this.state.existingHeroImage} removeImage={this.onRemoveImage} />
              : <EditorImagePreview src={this.state.heroImage[0].preview} removeImage={this.onRemoveImage} />
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
