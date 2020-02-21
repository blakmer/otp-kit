import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox } from 'downshift'
import Icon from '../Icon'
import styles from './index.module.css'

const STATUSES = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  disabled: 'disabled',
}

const Select = props => {
  const {
    items,
    defaultValue,
    value,
    onChange,
    emptyText,
    label,
    status,
    block,
    errorMessage,
  } = props

  if (value && !onChange) {
    console.warn('Warning. Use defaultValue or value and onChange')
  }

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    items: items,
    selectedItem: value && onChange ? value : defaultValue,
    itemToString: i => i.title,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem)
    },
  })

  return (
    <div className={classnames(styles.container, block && styles.block)}>
      <label
        {...getComboboxProps()}
        {...(status === STATUSES.disabled ? {} : getToggleButtonProps())}
        className={classnames(
          styles.labelContainer,
          styles[STATUSES[status]],
          block && styles.block
        )}>
        {label && (
          <span
            className={classnames(
              styles.label,
              (isOpen || selectedItem) && styles.labelUp
            )}>
            {label}
          </span>
        )}
        <input
          readOnly
          disabled={status === STATUSES.disabled}
          className={classnames(styles.input, block && styles.block)}
          {...(status === STATUSES.disabled ? {} : getInputProps())}
          {...(value && onChange && { value: selectedItem.title })}
        />
        <span
          className={styles.arrowIcon}
          {...(status === STATUSES.disabled ? {} : getToggleButtonProps())}>
          <Icon.Small type={isOpen ? 'arrow-up' : 'arrow-down'} fill="green" />
        </span>
      </label>
      {isOpen && (
        <ul
          {...getMenuProps()}
          className={classnames(styles.menu, block && styles.block)}>
          {items.map((item, index) => (
            <li
              className={classnames(
                highlightedIndex === index && styles.selected
              )}
              key={`${index}`}
              {...getItemProps({ item, index })}>
              {item.title}
            </li>
          ))}
          {!items.length && <li className={styles.emptyList}>{emptyText}</li>}
        </ul>
      )}
      <p className={styles.errorMessage}>
        {status === 'error' && errorMessage ? errorMessage : null}
      </p>
    </div>
  )
}

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  defaultValue: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onChange: PropTypes.func,
  emptyText: PropTypes.string,
  label: PropTypes.string,
  status: PropTypes.oneOf(Object.keys(STATUSES)),
}

Select.defaultProps = {
  items: [],
  emptyText: 'Пусто',
  status: STATUSES.default,
  onChange: value => {},
}

export default Select
