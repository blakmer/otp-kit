import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../../classes.css'
import styles from './index.module.css'

const Paragraph = props => {
  const {
    children,
    align,
    style,
    className,
    highlighted,
    fill,
    ...otherProps
  } = props

  return (
    <p
      align={align}
      style={style}
      className={classnames(
        className,
        styles.paragraph,
        classes[`${fill}-text`],
        highlighted && styles.highlighted
      )}
      {...otherProps}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  fill: PropTypes.string,
}

Paragraph.defaultProps = {
  highlighted: false,
  align: 'left',
  fill: 'text-secondary',
}

export default Paragraph
