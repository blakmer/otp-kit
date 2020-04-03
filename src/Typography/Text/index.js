import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const Text = props => {
  const {
    align,
    type,
    size,
    compact,
    style,
    className,
    children,
    color,
    ...otherProps
  } = props

  const classNames = classnames(
    className,
    styles[size],
    styles[type],
    styles[color],
    compact && styles.compact
  )

  return (
    <span align={align} className={classNames} style={style} {...otherProps}>
      {children}
    </span>
  )
}

Text.propTypes = {
  children: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'link', 'label', 'highlighted', 'hint']),
  compact: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'disabled',
    'inverse',
    'green',
    'orange',
    'red',
    'terminal',
    'inverseSecondary',
    'inversePrimary',
  ]),
}

Text.defaultProps = {
  align: 'left',
  compact: false,
  type: 'default',
  size: 'default',
  color: 'secondary',
}

export default Text
