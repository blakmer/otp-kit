import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const Paragraph = props => {
  const {
    children,
    align,
    style,
    className,
    highlighted,
    color,
    ...otherProps
  } = props

  return (
    <p
      align={align}
      style={style}
      className={classnames(
        className,
        styles.paragraph,
        styles[color],
        highlighted && styles.highlighted
      )}
      {...otherProps}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
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

Paragraph.defaultProps = {
  highlighted: false,
  align: 'left',
  color: 'secondary',
}

export default Paragraph
