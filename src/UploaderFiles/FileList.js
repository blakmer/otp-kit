import React, { useState } from 'react'
import classnames from 'classnames'
import styles from './index.module.css'
import Icon from '../Icon'
import propTypes from 'prop-types'

import IconDoc from '../IconDoc'

const toMB = val => {
  return (val / 1024 / 1024).toFixed(2)
}

const FileList = props => {
  const { className, style, files, block, onRemove } = props
  const [hover, setHover] = useState(undefined)

  return (
    <section
      className={classnames(styles.fileList, block && styles.block, className)}
      style={style}>
      {files.map((item, index) => {
        const extension = item.name
          .split('.')
          .reverse()[0]
          .toUpperCase()
        return (
          <div
            key={index}
            className={styles.item}
            onMouseEnter={() => {
              setHover(index)
            }}
            onMouseLeave={() => {
              setHover(undefined)
            }}>
            <IconDoc className={styles.prefix}>{extension}</IconDoc>
            <div className={styles.content}>
              <span className={styles.filename}>{item.name}</span>
              <span>{toMB(item.size)} МБ</span>
            </div>
            <Icon.Medium
              className={styles.suffix}
              onClick={() => {
                onRemove(index, item)
              }}
              type="trash"
              fill={hover === index ? 'error' : 'text-disabled'}
            />
          </div>
        )
      })}
    </section>
  )
}

FileList.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  files: propTypes.arrayOf(propTypes.shape(File)),
}

FileList.defaultProps = {
  files: [],
  onRemove: (index, item) => {},
}

export default FileList
