import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const Progress = props => {
  const { className, value, max } = props
  const percent = value > 0 && max > 0 ? Math.round((value * 100) / max) : 0

  return (
    <div className={classnames(styles.progress, className)}>
      <progress value={value} max={max} id="progress" />
      <label
        htmlFor="progress"
        className={classnames({
          [styles.complete]: percent === 100,
        })}>
        {percent}%
      </label>
    </div>
  )
}

Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
}

export default Progress
