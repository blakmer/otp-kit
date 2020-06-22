import React from 'react'
import InputMask from 'react-input-mask'
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
    mask,
    maskChar,
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
  dropdownEmptyText: PropTypes.string,
  dropdownListDirection: PropTypes.oneOf([
    'topLeft',
    'topCenter',
    'topRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
  ]),
  dropdownItems: PropTypes.arrayOf(PropTypes.node),
  dropdownValue: PropTypes.node,
  onDropdownChange: PropTypes.func,
  onDropdownAction: PropTypes.func,
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

DropdownInput.defaultProps = {
  showArrow: false,
  type: 'text',
  maskChar: ' ',
  mask: undefined,
  status: 'default',
}

export default DropdownInput
