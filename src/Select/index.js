import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox } from 'downshift'
import Icon from '../Icon'
import Input from '../Input'
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
    status,
    block,
    placeholder,
    listDirection,
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
        <Input
          placeholder={placeholder}
          readOnly
          status={status}
          block={block}
          {...(status === STATUSES.disabled ? {} : getInputProps())}
          {...(value && onChange && { value: selectedItem.title })}
          suffix={
            <span
              className={styles.arrowIcon}
              {...(status === STATUSES.disabled ? {} : getToggleButtonProps())}>
              <Icon.Small
                type={isOpen ? 'arrow-up' : 'arrow-down'}
                fill="green"
              />
            </span>
          }
        />
      </label>
      {isOpen && (
        <ul
          {...getMenuProps()}
          className={classnames(
            styles.menu,
            styles[listDirection],
            block && styles.block
          )}>
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
  status: PropTypes.oneOf(Object.keys(STATUSES)),
  listDirection: PropTypes.oneOf(['bottom', 'top']),
  placeholder: PropTypes.string,
}

Select.defaultProps = {
  items: [],
  emptyText: 'Пусто',
  status: STATUSES.default,
  onChange: value => {},
  listDirection: 'bottom',
}

export default Select
