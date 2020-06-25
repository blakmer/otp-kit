import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox, useMultipleSelection } from 'downshift'
import ArrowUp from '../util/arrow-up'
import ArrowDown from '../util/arrow-down'
import Icon from '../Icon'
import styles from './index.module.css'

const STATUSES = {
  default: 'default',
  error: 'error',
  warning: 'warning',
  disabled: 'disabled',
}

const Multiselect = props => {
  const {
    className,
    style,
    items,
    initialSelected,
    selected,
    emptyText,
    onChange,
    onItemSelect,
    onRemoveClick,
    status,
    block,
    listDirection,
  } = props

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({
    initialSelectedItems: initialSelected,
    onSelectedItemsChange: onChange,
    ...(selected && { selectedItems: selected }),
  })

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
  } = useCombobox({
    items: items,
  })

  const renderItem = (item, index) => {
    const itemProps = getItemProps({ item, index })
    const isSelected = selectedItems.filter(e => e.value === item.value).length
    return (
      <li
        className={classnames(isSelected && styles.selected)}
        key={`${index}`}
        {...itemProps}
        onClick={() => {
          selected
            ? onItemSelect(item, isSelected)
            : isSelected
            ? removeSelectedItem(item)
            : addSelectedItem(item)
        }}>
        {item.title}
      </li>
    )
  }

  return (
    <div
      className={classnames(styles.container, block && styles.block, className)}
      {...getComboboxProps()}
      style={style}>
      <div
        className={classnames(
          styles.labelContainer,
          block && styles.block,
          styles[STATUSES[status]],
          isOpen && styles.opened
        )}
        {...(status === STATUSES.disabled ? {} : getToggleButtonProps())}>
        <div className={styles.selectedItems}>
          {selectedItems.map((selectedItem, index) => (
            <span
              className={styles.selectedItem}
              key={`selected-item-${index}`}
              {...getSelectedItemProps({ selectedItem, index })}
              onClick={e => {
                e.stopPropagation()
              }}>
              <span className={styles.title}>{selectedItem.title}</span>
              <Icon.Small
                className={styles.close}
                type="close"
                fill="text-inverse"
                onClick={() => {
                  selected
                    ? onRemoveClick(selectedItem)
                    : removeSelectedItem(selectedItem)
                }}
              />
            </span>
          ))}
        </div>
        <input
          {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
        />
        <span className={styles.arrowIcon}>
          {isOpen ? <ArrowUp fill="primary" /> : <ArrowDown fill="primary" />}
        </span>
      </div>
      <ul
        {...getMenuProps()}
        className={classnames(
          styles.menu,
          !isOpen && styles.hide,
          styles[STATUSES[status]],
          styles[listDirection],
          block && styles.block
        )}>
        {items.map((item, index) => renderItem(item, index))}
        {!items.length && <li className={styles.emptyList}>{emptyText}</li>}
      </ul>
    </div>
  )
}

Multiselect.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  initialSelected: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  emptyText: PropTypes.string,
  status: PropTypes.oneOf(Object.keys(STATUSES)),
  onChange: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onItemSelect: PropTypes.func,
  listDirection: PropTypes.oneOf(['bottom', 'top']),
  block: PropTypes.bool,
}

Multiselect.defaultProps = {
  items: [],
  initialSelected: [],
  emptyText: 'Пусто',
  status: STATUSES.default,
  onChange: value => {},
  onRemoveClick: item => {},
  onItemSelect: item => {},
  listDirection: 'bottom',
}

export default Multiselect
