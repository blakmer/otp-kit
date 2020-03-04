import React, { Fragment } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Typography from '../Typography'
import Link from '../Link'
import styles from './index.module.css'

const STATUSES = {
  wait: 'wait',
  process: 'process',
  done: 'done',
  canceled: 'canceled',
}

const Uploader = props => {
  const { status, onChange, progress } = props

  const handleChange = e => {
    onChange({ status: STATUSES.process, files: e.target.files })
  }

  const handleDrop = e => {
    e.preventDefault()
    if (status === STATUSES.wait)
      onChange({ status: STATUSES.process, files: e.dataTransfer.files })
  }

  const handleState = status => {
    onChange({ status })
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
        <Typography.Heading level={3} color="green" align="center">
          {`${progress.from} / ${progress.to}`}
        </Typography.Heading>
        <span className={styles.rotateIcon}>
          <Icon.Medium type="refresh" fill="green" />
        </span>
        <Link onClick={() => handleState(STATUSES.canceled)}>Отменить</Link>
      </Fragment>
    ),
    done: (
      <Fragment>
        <Icon.ClipArt type="check" />
        <Link onClick={() => handleState(STATUSES.wait)}>Загрузить снова</Link>
      </Fragment>
    ),
    canceled: (
      <Fragment>
        <Icon.ClipArt type="error" />
        <Link variation="error" onClick={() => handleState(STATUSES.wait)}>
          Загрузить снова
        </Link>
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

Uploader.propTypes = {
  status: PropTypes.oneOf(Object.keys(STATUSES)),
  /** ({status, [files]}) => {} */
  onChange: PropTypes.func.isRequired,
  /** for status Process */
  progress: PropTypes.shape({ from: PropTypes.number, to: PropTypes.number }),
}

Uploader.defaultProps = {
  progress: { from: 0, to: 0 },
  onChange: () => {},
}

export default Uploader
