import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox } from 'downshift'
import Icon from '../Icon/Small'
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
    onChange,
    emptyText,
    label,
    filtered,
    status,
  } = props
  const [val, setVal] = useState(defaultValue)
  const [filter, setFilter] = useState('')
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: items,
    itemToString: i => i.title,
    onInputValueChange: ({ inputValue }) => {
      const row = items.find(i => i.title === inputValue)
      if (row) {
        setVal(inputValue)
        setFilter('')
        onChange && onChange(row)
      } else {
        setFilter(inputValue)
        if (inputValue === '') {
          setVal('')
        }
      }
    },
  })

  return (
    <span
      className={classnames(
        styles.container,
        styles[STATUSES[status]],
        isOpen && styles.isOpen
      )}
      {...getComboboxProps()}>
      <label
        {...(status === STATUSES.disabled ? {} : getToggleButtonProps())}
        className={styles.labelContainer}>
        {label && (
          <span
            className={classnames(
              styles.label,
              (isOpen || val) && styles.labelUp
            )}>
            {label}
          </span>
        )}
        <input
          readOnly={!filtered}
          disabled={status === STATUSES.disabled}
          className={styles.input}
          {...(status === STATUSES.disabled ? {} : getInputProps())}
        />
        <span
          className={styles.arrowIcon}
          {...(status === STATUSES.disabled ? {} : getToggleButtonProps())}>
          <Icon type={isOpen ? 'arrow-up' : 'arrow-down'} fill="green" />
        </span>
      </label>
      {isOpen && (
        <ul {...getMenuProps()} className={styles.menu}>
          {items
            .filter(
              i => i.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
            )
            .map((item, index) => (
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
    </span>
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
  filtered: PropTypes.bool,
  status: PropTypes.oneOf(Object.keys(STATUSES)),
}

Select.defaultProps = {
  items: [],
  emptyText: 'Пусто',
  filtered: true,
  status: STATUSES.default,
}

export default Select
