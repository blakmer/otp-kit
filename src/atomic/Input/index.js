import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const Input = props => {
  return (
    <label className={styles.inputContainer}>
      <span className={styles.inputLabel}>Label</span>
      <input className={styles.input} />
    </label>
  )
}

export default Input
