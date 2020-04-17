import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../classes.css'
import Icon from '../Icon'

import styles from './index.module.css'

const Link = props => {
  const { className, fill, style, onClick, children, prefix, suffix } = props

  return (
    <span
      className={classnames(styles.link, classes[`${fill}-text`], className)}
      style={style}
      onClick={onClick}>
      {prefix && <Icon.Small type={prefix} fill={fill} />}
      {children}
      {suffix && <Icon.Small type={suffix} fill={fill} />}
    </span>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node,
  suffix: PropTypes.string,
  prefix: PropTypes.string,
}

Link.defaultProps = {
  fill: 'primary',
}

export default Link
