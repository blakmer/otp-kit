import React from 'react'
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

const toCurrency = number => {
  let n = number
  if (typeof n === 'string') {
    n = n.replace(/[^0-9]*/g, '')
  }
  const res = isNaN(parseInt(n)) ? '' : parseInt(n)
  return res.toLocaleString()
}

const Input = props => {
  const {
    status,
    suffix,
    prefix,
    inputRef,
    currency,
    /** html props */
    type,
    autoComplete,
    autoFocus,
    defaultValue,
    id,
    name,
    tabIndex,
    value,
    onBlur,
    onChange,
    className,
    mask,
    maskChar,
    block,
    readOnly,
    placeholder,
    ...otherProps
  } = props

  return (
    <label
      className={classnames(
        styles.inputContainer,
        block && styles.block,
        styles[status]
      )}>
      <span className={styles.prefix}>{prefix}</span>
      <InputMask
        inputRef={inputRef}
        placeholder={placeholder}
        onBlur={onBlur}
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
        defaultValue={defaultValue}
        value={currency ? toCurrency(value) : value}
        onChange={onChange}
        className={classnames(
          styles.input,
          suffix && styles.withSuffix,
          prefix && styles.withPrefix,
          styles[status],
          className
        )}
        readOnly={readOnly}
        {...otherProps}
      />
      <span className={styles.suffix}>{suffix}</span>
    </label>
  )
}

Input.propTypes = {
  status: PropTypes.oneOf(Object.values(STATUSES)),
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
  readOnly: PropTypes.bool,
  suffix: PropTypes.node,
  prefix: PropTypes.node,
  placeholder: PropTypes.string,
  inputRef: PropTypes.any,
  currency: PropTypes.bool,
}

Input.defaultProps = {
  status: STATUSES.default,
  type: 'text',
  maskChar: ' ',
  mask: undefined,
}

export default Input
