import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const ActionInput = props => {
  const {
    value,
    defaultValue,
    onChange,
    actions,
    style,
    className,
    placeholder,
  } = props
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} placeholder={placeholder} />
      <div className={styles.actions}>{actions()}</div>
    </div>
  )
}

ActionInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  actions: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
}

ActionInput.defaultProps = {
  actions: () => {},
  onChange: () => {},
}

export default ActionInput
