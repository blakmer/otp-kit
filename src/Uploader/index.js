import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Typography from '../Typography'

import styles from './index.module.css'

const Uploader = props => {
  const handleChange = e => {
    console.log(e.target.files)
  }

  const handleDrop = e => {
    e.preventDefault()
    console.log(e.dataTransfer.files)
  }

  return (
    <label
      className={styles.uploader}
      onDrop={e => handleDrop(e)}
      onDragOver={e => e.preventDefault()}>
      <Icon.ClipArt type="image-upload" />
      <Typography.Text size="small" align="center">
        Переместите сюда изображения для загрузки
      </Typography.Text>
      <input type="file" onChange={e => handleChange(e)} multiple />
    </label>
  )
}

Uploader.propTypes = {}

export default Uploader
