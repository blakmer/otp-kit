import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox } from 'downshift'
import Icon from '../../base/Icon'
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
    withError,
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
      className={classnames(styles.container, isOpen && styles.isOpen)}
      {...getComboboxProps()}>
      <label {...getToggleButtonProps()} className={styles.labelContainer}>
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
          className={styles.input}
          {...getInputProps()}
        />
        <span className={styles.arrowIcon} {...getToggleButtonProps()}>
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
}

Select.defaultProps = {
  items: [],
  emptyText: 'Пусто',
  filtered: true,
}

export default Select
