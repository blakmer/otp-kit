import React, { Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Typography from '../Typography'
import Button from '../Button'
import styles from './index.module.css'

const STATUSES = {
  wait: 'wait',
  process: 'process',
  done: 'done',
  canceled: 'canceled',
}

const Uploader = props => {
  const { status, onChange } = props

  const handleChange = e => {
    onChange({ status: STATUSES.process, files: e.target.files })
  }

  const handleDrop = e => {
    e.preventDefault()
    onChange({ status: STATUSES.process, files: e.dataTransfer.files })
  }

  const innerContent = {
    wait: (
      <Fragment>
        <Icon.ClipArt type="image-upload" />
        <Typography.Text size="small" align="center">
          Переместите сюда изображения для загрузки
        </Typography.Text>
        <input type="file" onChange={e => handleChange(e)} multiple />
      </Fragment>
    ),
    process: (
      <Fragment>
        <span>
          <Icon.Medium type="refresh" fill="green" />
        </span>
        <Typography.Heading level={3} color="secondary" align="center">
          50 / 100
        </Typography.Heading>
        <Button size="small">Отменить</Button>
      </Fragment>
    ),
    done: (
      <Fragment>
        <Icon.ClipArt type="check" />
      </Fragment>
    ),
    canceled: (
      <Fragment>
        <Icon.ClipArt type="check" />
      </Fragment>
    ),
  }

  return (
    <label
      className={classnames(styles.uploader, styles[STATUSES[status]])}
      onDrop={e => handleDrop(e)}
      onDragOver={e => e.preventDefault()}>
      {innerContent[STATUSES[status]]}
    </label>
  )
}

Uploader.propTypes = {}

export default Uploader
