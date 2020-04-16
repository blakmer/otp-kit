import React, { Fragment, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import RoundButton from '../RoundButton'
import Button from '../Button'
import Typography from '../Typography'
import styles from './index.module.css'

const STATUSES = {
  wait: 'wait',
  process: 'process',
  done: 'done',
  canceled: 'canceled',
}

const Uploader = props => {
  const { status, onChange, progress } = props
  const [hover, setHover] = useState(false)

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
        <Icon.ClipArt
          type="image-upload"
          fill={hover ? 'primary' : 'text-secondary'}
        />
        <Typography.Text
          className={styles.halfMarginBottom}
          color={hover ? 'green' : 'secondary'}>
          Загрузка изображений
        </Typography.Text>
        <Typography.Text
          size="small"
          color={hover ? 'green' : 'secondary'}
          align="center">
          Нажмите или перетащите файлы для загрузки.
        </Typography.Text>
        <input type="file" onChange={e => handleChange(e)} multiple />
      </Fragment>
    ),
    process: (
      <Fragment>
        <span className={classnames(!hover && styles.RoundSpinner)}>
          <RoundButton
            onClick={() => handleState(STATUSES.canceled)}
            icon={hover ? 'close' : 'refresh'}
            fill="bg-input"
            iconFill={hover ? 'error' : 'primary'}
          />
        </span>
        <Typography.Text
          className={classnames(styles.halfMarginTop, styles.halfMarginBottom)}
          color="green">
          Загрузка...
        </Typography.Text>
        <span>
          <Typography.Text size="small">Загружено:</Typography.Text>
          <Typography.Text color="primary" size="small">
            {` ${progress.from} / ${progress.to}`}
          </Typography.Text>
        </span>
      </Fragment>
    ),
    done: (
      <Fragment>
        <Icon.ClipArt type="check" fill="primary" />
        <Typography.Text className={styles.halfMarginBottom} color="green">
          Успех
        </Typography.Text>
        <div className={styles.btnContainer}>
          {!hover ? (
            <Typography.Text size="small" color="green" align="center">
              Все изображения были успешно загружены.
            </Typography.Text>
          ) : (
            <Button
              variation="primary"
              size="small"
              ghost
              onClick={() => handleState(STATUSES.wait)}>
              Загрузить ещё
            </Button>
          )}
        </div>
      </Fragment>
    ),
    canceled: (
      <Fragment>
        <Icon.ClipArt type="error" fill="error" />
        <Typography.Text className={styles.halfMarginBottom} color="red">
          Ошибка сервера
        </Typography.Text>
        <div className={styles.btnContainer}>
          {!hover ? (
            <Typography.Text size="small" color="red" align="center">
              Повторите загрузку позднее, т.к. сервер не доступен.
            </Typography.Text>
          ) : (
            <Button
              variation="error"
              size="small"
              ghost
              onClick={() => handleState(STATUSES.wait)}>
              Отменить
            </Button>
          )}
        </div>
      </Fragment>
    ),
  }

  return (
    <label
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
