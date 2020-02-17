import React, { useState, useRef, useEffect } from 'react'
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
    readOnly,
    id,
    rows,
    tabIndex,
    wrap,
    value,
    label,
    onChange,
    status,
    stretchHeight,
    errorMessage,
    block,
  } = props

  const [stateValue, setValue] = useState(value || '')
  const textArea = useRef(null)

  useEffect(() => {
    const computedStyles = getComputedStyle(textArea.current.parentElement)
    const padding =
      parseInt(computedStyles.paddingTop) +
      parseInt(computedStyles.paddingBottom)

    if (stretchHeight) {
      textArea.current.parentElement.style.height =
        textArea.current.scrollHeight + padding + 'px'
    }
  }, [])

  const handleChange = event => {
    const { target } = event

    setValue(target.value)

    const computedStyles = getComputedStyle(target.parentElement)
    const padding =
      parseInt(computedStyles.paddingTop) +
      parseInt(computedStyles.paddingBottom)

    if (stretchHeight) {
      target.parentElement.style.height = target.scrollHeight + padding + 'px'
    }

    if (onChange) {
      onChange(event)
    }
  }

  const getLabelStyles = () =>
    classnames(styles.label, !disabled && styles[status], {
      [styles.changed]: stateValue.trim().length,
      [styles.disabled]: disabled,
    })

  const getTextareaWrapperStyles = () =>
    classnames(styles.textareaWrapper, !disabled && styles[status], {
      [styles.disabled]: disabled,
    })

  return (
    <label className={classnames(styles.wrapper, block && styles.block)}>
      <span className={getLabelStyles()}>{label}</span>
      <div className={getTextareaWrapperStyles()}>
        <textarea
          id={id}
          value={stateValue}
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
          ref={textArea}
        />
      </div>
      {!errorMessage ? (
        <small
          className={styles.limit}>{`${stateValue.length}/${maxLength}`}</small>
      ) : (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
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
  wrap: PropTypes.string,
  onChange: PropTypes.func,
  stretchHeight: PropTypes.bool,
  errorMessage: PropTypes.string,
  block: PropTypes.bool,
}

export default Textarea
