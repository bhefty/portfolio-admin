import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'

import BreadCrumb from 'components/BreadCrumb'
import StyledEditor from 'components/StyledEditor'
import EditorImagePreview from 'components/EditorImagePreview'

const crumbTrail = [{
  page: 'Dashboard',
  link: '/dashboard'
}, {
  page: 'Projects',
  link: '/projects'
}]

export default class EditProject extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  constructor (props) {
    super(props)
    this.state = {
      heroImages: [],
      smallImages: []
    }

    this.onHeroDrop = this.onHeroDrop.bind(this)
    this.onHeroRemoveImage = this.onHeroRemoveImage.bind(this)
    this.onSmallDrop = this.onSmallDrop.bind(this)
    this.onSmallRemoveImage = this.onSmallRemoveImage.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  componentWillUnmount () {
    this.setState({
      heroImages: [],
      smallImages: []
    })
  }

  onHeroDrop (acceptedFiles, rejectedFiles) {
    this.setState({
      heroImages: acceptedFiles
    })
  }

  onHeroRemoveImage () {
    this.setState({
      heroImages: []
    })
  }

  onSmallDrop (acceptedFiles, rejectedFiles) {
    this.setState({
      smallImages: acceptedFiles
    })
  }

  onSmallRemoveImage () {
    this.setState({
      smallImages: []
    })
  }

  onCancel (e) {
    e.preventDefault()
    this.props.history.goBack()
  }

  render () {
    const headerText = this.props.match.params.id === 'new' ? 'New Project' : 'Edit Project'
    return (
      <div>
        <BreadCrumb
          trail={crumbTrail}
          currentPage={headerText}
        />
        <br />
        <StyledEditor>
          <header>
            <div>{headerText}</div>
          </header>
          <form>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' />
            <label htmlFor='description'>Description</label>
            <textarea type='text' name='description' rows='3' />
            <label htmlFor='techstack'>Tech Stack Used</label>
            <textarea type='text' name='techstack' rows='1' />
            <label htmlFor='link'>Project Link</label>
            <input type='text' name='link' />
            <div>Hero Image</div>
            {this.state.heroImages.length === 0
              ? <Dropzone
                className='dropzone'
                activeClassName='dropzone-active'
                acceptClassName='dropzone-accept'
                rejectClassName='dropzone-reject'
                accept='image/jpg, image/jpeg, image/png'
                onDrop={this.onHeroDrop}
              >
                <div>Drag and drop image</div>
              </Dropzone>
              : <EditorImagePreview src={this.state.heroImages[0].preview} removeImage={this.onHeroRemoveImage} />
            }
            <div>Small Image</div>
            {this.state.smallImages.length === 0
              ? <Dropzone
                className='dropzone'
                activeClassName='dropzone-active'
                acceptClassName='dropzone-accept'
                rejectClassName='dropzone-reject'
                accept='image/jpg, image/jpeg, image/png'
                onDrop={this.onSmallDrop}
              >
                <div>Drag and drop image</div>
              </Dropzone>
              : <EditorImagePreview src={this.state.smallImages[0].preview} removeImage={this.onSmallRemoveImage} />
            }
            <label htmlFor='favorite'>Favorite</label>
            <input type='checkbox' name='favorite' />
            <button className='btn-save'>Save</button>
            <button className='btn-cancel' onClick={e => this.onCancel(e)}>Cancel</button>
            {headerText !== 'New Project' &&
              <div className='btn-delete' onClick={() => console.log('TODO: DELETE PROJECT CONFIRMATION!')}>Delete Project</div>
            }
          </form>
        </StyledEditor>
      </div>
    )
  }
}
