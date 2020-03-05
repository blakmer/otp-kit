import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
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
  const {
    state,
    label,
    /** html props */
    type,
    autoComplete,
    autoFocus,
    defaultValue,
    id,
    name,
    tabIndex,
    value,
    onChange,
    className,
    mask,
    maskChar,
    block,
    errorMessage,
  } = props

  const [val, setVal] = useState(value || defaultValue)
  const [changed, setChanged] = useState(val)
  const [status, setStatus] = useState(STATUSES.default)

  const changeValue = e => {
    setChanged(!!e.target.value)
    setVal(e.target.value)
    onChange && onChange(e)
  }

  useEffect(() => {
    setVal(value)
  }, [value])

  useEffect(() => {
    setStatus(state)
  }, [state])

  return (
    <div
      className={classnames(styles.wrapper, block && styles.block, className)}>
      <label
        className={classnames(
          styles.inputContainer,
          changed && styles.changed,
          styles[status]
        )}>
        {label && (
          <span
            className={classnames(
              styles.inputLabel,
              changed && styles.changed,
              styles[status]
            )}>
            {label}
          </span>
        )}
        <InputMask
          mask={mask}
          maskChar={maskChar}
          type={type}
          autoComplete={
            typeof autoComplete === 'string'
              ? autoComplete
              : autoComplete
              ? 'on'
              : 'off'
          }
          autoFocus={autoFocus}
          id={id}
          name={name}
          tabIndex={tabIndex}
          disabled={status === STATUSES.disabled}
          defaultValue={defaultValue && val}
          value={value && val}
          onChange={
            (onChange && value) || !value ? e => changeValue(e) : undefined
          }
          className={classnames(
            styles.input,
            changed && styles.changed,
            styles[status]
          )}
        />
      </label>
      <p className={styles.errorMessage}>
        {status === 'error' && errorMessage ? errorMessage : null}
      </p>
    </div>
  )
}

Input.propTypes = {
  state: PropTypes.oneOf(Object.values(STATUSES)),
  label: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  maskChar: PropTypes.string,
  mask: PropTypes.string,
  block: PropTypes.bool,
  errorMessage: PropTypes.string,
}

Input.defaultProps = {
  state: STATUSES.default,
  type: 'text',
  maskChar: ' ',
  mask: undefined,
}

export default Input
