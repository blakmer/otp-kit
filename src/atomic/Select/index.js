import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox } from 'downshift'
import Icon from '../../base/Icon'
import styles from './index.module.css'

const Select = props => {
  const { items } = props
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: items,
    itemToString: i => i.title,
    onInputValueChange: ({ inputValue }) => {},
  })

  return (
    <span className={styles.container} {...getComboboxProps()}>
      <label {...getToggleButtonProps()}>
        <span className={styles.label}>Label</span>
        <input className={styles.input} readOnly {...getInputProps()} />
        <span className={styles.arrowIcon}>
          <Icon type="arrow-down" fill="green" />
        </span>
      </label>
      <ul {...getMenuProps()} className={styles.menu}>
        {isOpen &&
          items.map((item, index) => (
            <li
              className={classnames(
                highlightedIndex === index && styles.selected
              )}
              key={`${index}`}
              {...getItemProps({ item, index })}>
              {item.title}
            </li>
          ))}
      </ul>
    </span>
  )
}

Select.propTypes = {}

Select.defaultProps = {
  items: [
    { value: 1, title: 'one' },
    { value: 2, title: 'two' },
    { value: 3, title: 'tree' },
  ],
}

export default Select
