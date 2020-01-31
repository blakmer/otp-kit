import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const Textarea = props => {
  const {
    accessKey,
    autoFocus,
    cols,
    disabled,
    form,
    maxLength,
    name,
    placeholder,
    readOnly,
    id,
    rows,
    tabIndex,
    wrap,
    value,
    label,
    onChange,
    status,
  } = props

  const [stateValue, setValue] = useState(value || '')

  const handleChange = event => {
    setValue(event.target.value)

    if (onChange) {
      onChange(event)
    }
  }

  const getLabelStyles = () =>
    classnames(styles.label, !disabled && styles[status], {
      [styles.changed]: stateValue.trim().length,
      [styles.disabled]: disabled,
    })

  const getTextareaStyles = () =>
    classnames(styles.textarea, !disabled && styles[status], {
      [styles.disabled]: disabled,
    })

  return (
    <label className={styles.wrapper}>
      <span className={getLabelStyles()}>{label}</span>
      <textarea
        id={id}
        value={stateValue}
        className={getTextareaStyles()}
        accessKey={accessKey}
        autoFocus={autoFocus}
        cols={cols}
        disabled={disabled}
        form={form}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        tabIndex={tabIndex}
        wrap={wrap}
        onChange={handleChange}
      />
      <div className={styles.limit}>{`${stateValue.length}/${maxLength}`}</div>
    </label>
  )
}

Textarea.defaultProps = {
  maxLength: 50,
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['error', 'warning']),
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Textarea
