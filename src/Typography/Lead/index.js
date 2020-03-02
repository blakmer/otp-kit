import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const Lead = props => {
  const {
    children,
    align,
    style,
    className,
    highlighted,
    compact,
    color,
    ...otherProps
  } = props

  return (
    <h5
      align={align}
      style={style}
      className={classnames(
        className,
        styles.lead,
        styles[color],
        highlighted && styles.highlighted,
        compact && styles.compact
      )}
      {...otherProps}>
      {children}
    </h5>
  )
}

Lead.propTypes = {
  children: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'disabled',
    'inverse',
    'green',
    'orange',
    'red',
  ]),
}

Lead.defaultProps = {
  highlighted: false,
  compact: false,
  align: 'left',
  color: 'primary',
}

export default Lead
