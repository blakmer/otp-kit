import React, { useState } from 'react'
import Typography from '../Typography'
import UploadIcon from '../util/upload-icon'
import Icon from '../Icon'
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
    onError,
  } = props

  const [hover, setHover] = useState(false)

  const handleCheckErrors = (maxFileSize, files) => {
    const errors = []
    for (let i in files) {
      if (toMB(files[i].size) >= maxFileSize) {
        errors.push(
          `Файл ${files[i].name} больше ${maxFileSize} МБ. Его прикрепление невозможно`
        )
      }
    }
    if (errors.length > 0) {
      errors.forEach(err => onError(err))
    }
    return errors.length > 0
  }

  const handleChange = (e, isDrop) => {
    const files = isDrop ? e.dataTransfer.files : e.target.files
    let checkErrors = false
    if (maxFileSize) {
      checkErrors = handleCheckErrors(maxFileSize, files)
    }
    if (!checkErrors) {
      onChange(files)
    }
    e.target.value = ''
  }

  const renderInput = () => (
    <input
      onChange={e => handleChange(e)}
      type="file"
      accept={accept}
      multiple={multiple}
      style={{ display: 'none' }}
    />
  )

  const renderType = {
    default: () => (
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
            <span className={styles.inputColor}>Выбрать файлы</span>
            {renderInput()}
          </label>
        </div>
      </section>
    ),
    dropzone: () => (
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
          handleChange(e, true)
        }}>
        <Icon.Medium type="document-hand" fill="primary" />
        <Typography.Text type="highlighted">
          Перетащите или{' '}
          <span className={classes['primary-text']}>выберите</span> файлы для
          загрузки
        </Typography.Text>
        {renderInput()}
      </label>
    ),
  }

  return (
    <div>
      {type === 'dropzone' ? renderType.dropzone() : renderType.default()}
    </div>
  )
}

UploaderFiles.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  type: propTypes.oneOf(['default', 'dropzone']),
  accept: propTypes.string,
  multiple: propTypes.bool,
  onChange: propTypes.func,
  onError: propTypes.func,
}

UploaderFiles.defaultProps = {
  multiple: true,
  type: 'default',
  onError: e => {},
  onChange: e => {},
}

export default UploaderFiles
