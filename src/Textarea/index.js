import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const STATUSES = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  disabled: 'disabled',
}

const Textarea = props => {
  const {
    className,
    style,
    accessKey,
    autoFocus,
    cols,
    disabled,
    form,
    maxLength,
    name,
    readOnly,
    id,
    rows,
    tabIndex,
    wrap,
    value,
    defaultValue,
    onChange,
    status,
    stretchHeight,
    block,
  } = props

  const handleChange = event => {
    const { target } = event
    onChange && onChange(event)
  }

  return (
    <textarea
      id={id}
      value={value}
      defaultValue={defaultValue}
      className={styles.textarea}
      accessKey={accessKey}
      autoFocus={autoFocus}
      cols={cols}
      disabled={disabled}
      form={form}
      maxLength={maxLength}
      name={name}
      readOnly={readOnly}
      rows={rows}
      tabIndex={tabIndex}
      wrap={wrap}
      onChange={handleChange}
    />
  )
}

Textarea.defaultProps = {
  maxLength: 50,
}

Textarea.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['error', 'warning', 'default']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  accessKey: PropTypes.string,
  autoFocus: PropTypes.bool,
  cols: PropTypes.number,
  form: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  rows: PropTypes.number,
  tabIndex: PropTypes.number,
  wrap: PropTypes.oneOf(['soft', 'hard', 'off']),
  onChange: PropTypes.func,
  stretchHeight: PropTypes.bool,
  errorMessage: PropTypes.string,
  block: PropTypes.bool,
}

export default Textarea
