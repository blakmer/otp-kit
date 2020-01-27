import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from '../../base/Icon'

import styles from './index.module.css'

const STATUSES = {
  primary: 'primary',
  blue: 'blue',
  error: 'error'
}

const FILLS = {
  primary: 'green',
  blue: 'blue',
  error: 'danger'
}

const Link = props => {
  const {
    className,
    variation,
    style,
    onClick,
    children,
    prefix,
    suffix,
  } = props

  const variationColor = STATUSES[variation] ? variation : 'primary';

  return (
    <span className={classnames(
      styles.link,
      styles[variationColor],
      className,
    )}
          style={style}
          onClick={onClick}
    >
      {prefix && (
        <Icon type={prefix} fill={FILLS[variationColor] || FILLS['primary']}/>
      )}
      {children}
      {suffix && (
        <Icon type={suffix} fill={FILLS[variationColor] || FILLS['primary']}/>
      )}
    </span>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  variation: PropTypes.oneOf(['primary','blue','error']),
  style: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node,
  suffix: PropTypes.string,
  prefix: PropTypes.string
}

Link.defaultProps = {
  variation:'primary'
}

export default Link;