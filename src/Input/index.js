import React from 'react'
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
    inputRef,
    innerRef,
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
    style,
    block,
    readOnly,
    placeholder,
    noBorder,
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
      <input
        ref={innerRef}
        placeholder={placeholder}
        onBlur={onBlur}
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
          noBorder && styles.noBorder,
          className
        )}
        style={style}
        readOnly={readOnly}
        {...otherProps}
      />
      <span className={styles.suffix}>{suffix}</span>
    </label>
  )
}

Input.propTypes = {
  /** Состояние элемента */
  status: PropTypes.oneOf(Object.values(STATUSES)),
  type: PropTypes.string,
  /** Автозаполнение */
  autoComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  autoFocus: PropTypes.bool,
  /** Значение по умолчанию */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  /** Навигация с клавиатуры */
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Установление значения */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Callback, вызываемый при изменении значения */
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  /** Располагает элемент во всю ширину относительно родителя */
  block: PropTypes.bool,
  /** Запрет ручного ввода данных */
  readOnly: PropTypes.bool,
  /** Добавление элементов в правой части компонента */
  suffix: PropTypes.node,
  /** Добавление элементов в левой части компонента */
  prefix: PropTypes.node,
  placeholder: PropTypes.string,
  /** Ссылка на элемент */
  inputRef: PropTypes.any,
  /** Делает бордеры прозрачными */
  noBorder: PropTypes.bool,
}

Input.defaultProps = {
  status: STATUSES.default,
  type: 'text',
}

export default Input
