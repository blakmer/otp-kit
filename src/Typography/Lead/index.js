import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../../classes.css'
import styles from './index.module.css'

const Lead = props => {
  const {
    children,
    align,
    style,
    className,
    highlighted,
    compact,
    fill,
    ...otherProps
  } = props

  return (
    <h5
      align={align}
      style={style}
      className={classnames(
        className,
        styles.lead,
        classes[`${fill}-text`],
        highlighted && styles.highlighted,
        compact && styles.compact
      )}
      {...otherProps}>
      {children}
    </h5>
  )
}

Lead.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  compact: PropTypes.bool,
  fill: PropTypes.string,
}

Lead.defaultProps = {
  highlighted: false,
  compact: false,
  align: 'left',
  fill: 'text-primary',
}

export default Lead
