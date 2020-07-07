import React, { useState } from 'react'
import Typography from '../Typography'
import UploadIcon from '../util/upload-icon'
import Icon from '../Icon'
import NotificationProvider from '../Notification'
import styles from './index.module.css'
import propTypes from 'prop-types'
import classes from '../classes.module.css'
import classnames from 'classnames'

const toMB = val => {
  return (val / 1024 / 1024).toFixed(2)
}

const UploaderFiles = props => {
  const {
    className,
    style,
    type,
    accept,
    multiple,
    onChange,
    maxFileSize,
  } = props

  const [hover, setHover] = useState(false)

  const handleCheckErrors = (maxFileSize, files, showNotification) => {
    const errors = []
    for (let i in files) {
      if (toMB(files[i].size) >= maxFileSize) {
        errors.push(
          `Файл ${files[i].name} больше ${maxFileSize} МБ. Его прикрепление невозможно`
        )
      }
    }
    if (errors.length > 0) {
      errors.forEach(i => showNotification.error(i))
    }
    return errors.length > 0
  }

  const handleChange = (e, showNotification, isDrop) => {
    const files = isDrop ? e.dataTransfer.files : e.target.files
    let checkErrors = false
    if (maxFileSize) {
      checkErrors = handleCheckErrors(maxFileSize, files, showNotification)
    }
    if (!checkErrors) {
      onChange && onChange(files)
    }
    e.target.value = ''
  }

  const renderInput = showNotification => (
    <input
      onChange={e => handleChange(e, showNotification)}
      type="file"
      accept={accept}
      multiple={multiple}
      style={{ display: 'none' }}
    />
  )

  const renderType = {
    default: showNotification => (
      <section
        className={classnames(styles.uploaderContainer, className)}
        style={style}>
        <UploadIcon className={styles.uploadIcon} fill="primary" />
        <div className={styles.rightText}>
          <Typography.Text size="small">
            Для загрузки документов нажмите на кнопку и выберите необходимые
            файлы.
          </Typography.Text>
          <label className={styles.defaultUploader}>
            <span>Выбрать файлы</span>
            {renderInput(showNotification)}
          </label>
        </div>
      </section>
    ),
    dropzone: showNotification => (
      <label
        className={classnames(
          styles.dropzone,
          hover && styles.hover,
          className
        )}
        style={style}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onDragLeave={() => setHover(false)}
        onDragOver={e => {
          e.preventDefault()
          setHover(true)
        }}
        onDrop={e => {
          e.preventDefault()
          handleChange(e, showNotification, true)
        }}>
        <Icon.Medium type="document-hand" fill="primary" />
        <Typography.Text type="highlighted">
          Перетащите или{' '}
          <span className={classes['primary-text']}>выберите</span> файлы для
          загрузки
        </Typography.Text>
        {renderInput(showNotification)}
      </label>
    ),
  }

  return (
    <NotificationProvider>
      {showNotification => (
        <div>
          {type === 'dropzone'
            ? renderType.dropzone(showNotification)
            : renderType.default(showNotification)}
        </div>
      )}
    </NotificationProvider>
  )
}

UploaderFiles.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  type: propTypes.oneOf(['default', 'dropzone']),
  accept: propTypes.string,
  multiple: propTypes.bool,
  onChange: propTypes.func,
}

UploaderFiles.defaultProps = {
  multiple: true,
  type: 'default',
}

export default UploaderFiles
