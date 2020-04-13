import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import styles from './index.module.css'

const NavPanel = props => {
  const { header, actions } = props
  return (
    <div className={styles.navbar}>
      <span>{header}</span>
      <span>
        {actions.map((i, k) => (
          <span key={k} onClick={i.action} className={styles.actionIcon}>
            <Icon.Medium fill="primary" type={i.icon} />
          </span>
        ))}
      </span>
    </div>
  )
}

NavPanel.propTypes = {
  header: PropTypes.node,
  actions: PropTypes.arrayOf(
    PropTypes.shape({ icon: PropTypes.string, action: PropTypes.func })
  ),
}

NavPanel.defaultProps = {
  actions: [],
}

export default NavPanel
