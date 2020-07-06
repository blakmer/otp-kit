import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.css'

const Badge = props => {
  const { className, style, children, count } = props
  return (
    <div className={classnames(styles.container, className)} style={style}>
      {children}
      {children && <span className={styles.badge}>{count}</span>}
    </div>
  )
}

Badge.propTypes = {
  /** Дочерний элемент */
  children: PropTypes.node,
  /** Числовое значение */
  count: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Badge
