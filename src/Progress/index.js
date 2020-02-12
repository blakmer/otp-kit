import React from 'react'
import styles from './index.module.css'
import classnames from 'classnames'

const Progress = props => {
  const { className, value, max } = props
  const percent = Math.round((value * 100) / max)

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

export default Progress
