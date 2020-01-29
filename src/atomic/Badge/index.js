import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Badge = props => {
  const { children, count } = props
  return (
    <div className={styles.container}>
      {children}
      {children && <span className={styles.badge}>{count}</span>}
    </div>
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  badge: PropTypes.number,
}

export default Badge
