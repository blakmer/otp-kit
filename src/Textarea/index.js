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

Textarea.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Состояние элемента */
  status: PropTypes.oneOf(Object.keys(STATUSES)),
  /** Установление значения */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Значение по умолчанию */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Фокус на элемент по клавише */
  accessKey: PropTypes.string,
  autoFocus: PropTypes.bool,
  /** Изменение ширины элемента */
  cols: PropTypes.number,
  form: PropTypes.string,
  /** Максимальное число символов */
  maxLength: PropTypes.number,
  name: PropTypes.string,
  /** Запрет ручного ввода данных */
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  /** Изменение высоты элемента */
  rows: PropTypes.number,
  /** Навигация с клавиатуры */
  tabIndex: PropTypes.number,
  /** Перенос текста */
  wrap: PropTypes.oneOf(['soft', 'hard', 'off']),
  onChange: PropTypes.func,
  /** Располагает элемент во всю ширину относительно родителя */
  block: PropTypes.bool,
  /** Минимальная высота элемента */
  minRows: PropTypes.number,
  /** Максимальная высота элемента */
  maxRows: PropTypes.number,
}

Textarea.defaultProps = {
  onChange: () => {},
  status: 'default',
  minRows: 3,
}

export default Textarea
