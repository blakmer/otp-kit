import React from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from 'react-textarea-autosize'
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
    resize,
    className,
    style,
    accessKey,
    autoFocus,
    cols,
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
    block,
    maxRows,
    minRows,
  } = props

  return (
    <TextareaAutosize
      id={id}
      value={value}
      defaultValue={defaultValue}
      className={classnames(
        styles.textarea,
        styles[STATUSES[status]],
        block && styles.block,
        className
      )}
      disabled={status === STATUSES.disabled}
      style={{ ...style, resize: resize ? undefined : 'none' }}
      accessKey={accessKey}
      autoFocus={autoFocus}
      cols={cols}
      form={form}
      maxLength={maxLength}
      maxRows={maxRows}
      minRows={minRows}
      name={name}
      readOnly={readOnly}
      rows={rows}
      tabIndex={tabIndex}
      wrap={wrap}
      onChange={onChange}
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
  status: PropTypes.oneOf(Object.keys(STATUSES)),
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
  block: PropTypes.bool,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
}

Textarea.defaultProps = {
  onChange: () => {},
  minRows: 3,
}

export default Textarea
