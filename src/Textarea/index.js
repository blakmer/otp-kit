import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

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
    label,
    onChange,
    status,
    stretchHeight,
    errorMessage,
    block,
  } = props

  const [stateValue, setValue] = useState(value || defaultValue)
  const [changed, setChanged] = useState(stateValue)
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

  useEffect(() => {
    setValue(value)
  }, [value])

  const handleChange = event => {
    const { target } = event

    setChanged(!!target.value)
    setValue(target.value)
    onChange && onChange(event)

    const computedStyles = getComputedStyle(target.parentElement)
    const padding =
      parseInt(computedStyles.paddingTop) +
      parseInt(computedStyles.paddingBottom)

    if (stretchHeight) {
      target.parentElement.style.height = target.scrollHeight + padding + 'px'
    }
  }

  const getLabelStyles = () =>
    classnames(styles.label, !disabled && styles[status], {
      [styles.changed]: changed,
      [styles.disabled]: disabled,
    })

  const getTextareaWrapperStyles = () =>
    classnames(styles.textareaWrapper, !disabled && styles[status], {
      [styles.disabled]: disabled,
    })

  return (
    <label
      className={classnames(styles.wrapper, block && styles.block, className)}
      style={style}>
      <span className={getLabelStyles()}>{label}</span>
      <div className={getTextareaWrapperStyles()}>
        <textarea
          id={id}
          value={value && stateValue}
          defaultValue={defaultValue && stateValue}
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
          onChange={(onChange && value) || !value ? handleChange : undefined}
          ref={textArea}
        />
      </div>
      {!errorMessage ? (
        <small className={styles.limit}>{`${
          changed ? stateValue.length : 0
        }/${maxLength}`}</small>
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
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['error', 'warning', 'default']),
  disabled: PropTypes.bool,
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
  wrap: PropTypes.string,
  onChange: PropTypes.func,
  stretchHeight: PropTypes.bool,
  errorMessage: PropTypes.string,
  block: PropTypes.bool,
}

export default Textarea
