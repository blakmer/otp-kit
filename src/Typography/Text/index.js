import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../../classes.module.css'
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
    fill,
    ...otherProps
  } = props

  const classNames = classnames(
    className,
    styles[size],
    styles[type],
    classes[`${fill}-text`],
    compact && styles.compact
  )

  return (
    <span align={align} className={classNames} style={style} {...otherProps}>
      {children}
    </span>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'link', 'label', 'highlighted', 'hint']),
  compact: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  fill: PropTypes.string,
}

Text.defaultProps = {
  align: 'left',
  compact: false,
  type: 'default',
  size: 'default',
  fill: 'text-secondary',
}

export default Text
