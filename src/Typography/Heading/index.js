import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../../classes.module.css'
import styles from './index.module.css'

const Heading = props => {
  const {
    children,
    align,
    style,
    className,
    level,
    fill,
    ...otherProps
  } = props
  const innerProps = {
    align,
    className: classnames(className, styles.head, classes[`${fill}-text`]),
    style,
    ...otherProps,
  }

  switch (level) {
    case 1:
      return <h2 {...innerProps}>{children}</h2>
    case 2:
      return <h3 {...innerProps}>{children}</h3>
    default:
      return <h4 {...innerProps}>{children}</h4>
  }
}

Heading.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  style: PropTypes.object,
  level: PropTypes.oneOf([1, 2, 3]),
  fill: PropTypes.string,
}

Heading.defaultProps = {
  level: 1,
  align: 'left',
  fill: 'text-primary',
}

export default Heading
