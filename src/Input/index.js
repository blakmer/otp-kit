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

const Input = props => {
  const {
    status,
    suffix,
    prefix,
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
        value={value}
        onChange={onChange}
        className={classnames(
          styles.input,
          suffix && styles.withSuffix,
          prefix && styles.withPrefix,
          styles[status],
          className
        )}
        readOnly={readOnly}
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
}

Input.defaultProps = {
  status: STATUSES.default,
  type: 'text',
  maskChar: ' ',
  mask: undefined,
}

export default Input
