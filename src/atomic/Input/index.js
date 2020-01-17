import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const STATUSES = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  disabled: 'disabled',
}

const Input = props => {
  const { state } = props
  const [changed, setChanged] = useState(false)
  const [value, setValue] = useState(undefined)
  const [status, setStatus] = useState(STATUSES.default)

  const changeValue = e => {
    setChanged(!!e.target.value)
    setValue(e.target.value)
  }

  useEffect(() => {
    setStatus(state)
  }, [state])

  return (
    <label
      className={classnames(
        styles.inputContainer,
        changed && styles.changed,
        styles[status]
      )}>
      <span
        className={classnames(
          styles.inputLabel,
          changed && styles.changed,
          styles[status]
        )}>
        Label
      </span>
      <input
        disabled={status === STATUSES.disabled}
        defaultValue={value}
        onChange={e => changeValue(e)}
        className={classnames(
          styles.input,
          changed && styles.changed,
          styles[status]
        )}
      />
    </label>
  )
}

Input.propTypes = {}

export default Input
