import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Dropdown from '../Dropdown'
import ArrowDown from '../util/arrow-down'
import Divider from '../Divider'
import styles from './index.module.css'

const STATUSES = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  disabled: 'disabled',
}

const DropdownInput = props => {
  const {
    dropdownEmptyText,
    dropdownDirection,
    dropdownItems,
    dropdownValue,
    onDropdownChange,
    onDropdownAction,
    showArrow,
    status,
    suffix,
    inputRef,
    currency,
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
  } = props

  return (
    <label
      className={classnames(
        styles.inputContainer,
        block && styles.block,
        styles[status]
      )}
      style={style}>
      <div
        className={classnames(
          styles.prefix,
          status === 'disabled' && styles.disabled
        )}>
        <Dropdown
          emptyText={dropdownEmptyText}
          listDirection={dropdownDirection}
          items={dropdownItems}
          showArrow={showArrow}
          onChange={onDropdownChange}
          onAction={onDropdownAction}>
          <div
            className={classnames(
              styles.dropdown,
              status === 'disabled' && styles.disabled
            )}>
            {dropdownValue}
            <ArrowDown
              fill={status === 'disabled' ? 'text-disabled' : 'primary'}
            />
          </div>
        </Dropdown>
        <Divider className={styles.divider} type="vertical" />
      </div>

      <input
        ref={inputRef}
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
        value={currency ? toCurrency(value) : value}
        onChange={onChange}
        className={classnames(
          styles.input,
          suffix && styles.withSuffix,
          styles[status],
          className
        )}
        readOnly={readOnly}
      />
      <span className={styles.suffix}>{suffix}</span>
    </label>
  )
}

DropdownInput.propTypes = {
  /** Текст, отображаемый при отсутствии элементов во всплывающем меню */
  dropdownEmptyText: PropTypes.string,
  /** Направление всплывающего меню */
  dropdownListDirection: PropTypes.oneOf([
    'topLeft',
    'topCenter',
    'topRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
  ]),
  /** Элементы всплывающего меню */
  dropdownItems: PropTypes.arrayOf(PropTypes.node),
  /** Значение для всплывающего меню */
  dropdownValue: PropTypes.node,
  onDropdownChange: PropTypes.func,
  /** Callback, вызываемый при открытии всплывающего меню */
  onDropdownAction: PropTypes.func,
  /** Состояние элемента */
  status: PropTypes.oneOf(Object.values(STATUSES)),
  type: PropTypes.string,
  /** Автозаполнение */
  autoComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  autoFocus: PropTypes.bool,
  /** Значение Input по умолчанию */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  name: PropTypes.string,
  /** Навигация с клавиатуры */
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Установление значения для Input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Callback, вызываемый при изменении значения в Input */
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  /** Располагает элемент во всю ширину относительно родителя */
  block: PropTypes.bool,
  /** Запрет ручного ввода данных */
  readOnly: PropTypes.bool,
  /** Добавление элементов в правой части компонента */
  suffix: PropTypes.node,
  placeholder: PropTypes.string,
  /** Ссылка на элемент */
  inputRef: PropTypes.any,
  /** Преобразование к вводу валюты */
  currency: PropTypes.bool,
}

DropdownInput.defaultProps = {
  showArrow: false,
  type: 'text',
  status: 'default',
}

DropdownInput.displayName = 'DropdownInput' //Needed for FormItem component

export default DropdownInput
