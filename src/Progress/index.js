import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const Progress = props => {
  const { className, style, value, max, showPercent, block } = props
  const percent = value > 0 && max > 0 ? Math.round((value * 100) / max) : 0

  return (
    <div
      className={classnames(styles.progress, block && styles.block, className)}
      style={style}>
      <progress
        className={block && styles.block}
        value={value}
        max={max}
        id="progress"
      />
      {showPercent && (
        <label
          htmlFor="progress"
          className={classnames({
            [styles.complete]: percent === 100,
          })}>
          {percent}%
        </label>
      )}
    </div>
  )
}

Progress.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Установка значения */
  value: PropTypes.number,
  /** Максимальное значение */
  max: PropTypes.number,
  block: PropTypes.bool,
  showPercent: PropTypes.bool,
}

Progress.defaultProps = {
  showPercent: true,
}

export default Progress
