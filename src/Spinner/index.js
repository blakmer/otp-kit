import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../classes.module.css'
import styles from './index.module.css'

const SIZES = {
  small: 24,
  medium: 32,
  large: 48,
}

const Spinner = props => {
  const { className, style, size, fill, onClick } = props

  return (
    <svg
      className={classnames(
        classes[`${fill}-stroke`],
        classes[`${fill}-fill`],
        className
      )}
      style={style}
      onClick={onClick}
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="-25 -25 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        className={classnames(styles.center, styles.outsideLine)}
        fill="none"
        strokeDasharray="815"
        strokeWidth="58"
        cx="175"
        cy="175"
        r="130"
      />
      <g className={classnames(styles.center, styles.orbit)}>
        <circle cx="268" cy="87" r="38"></circle>
      </g>
    </svg>
  )
}

Spinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  fill: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  onClick: PropTypes.func,
}

Spinner.defaultProps = {
  fill: 'primary',
  size: 'medium',
}

export default Spinner
