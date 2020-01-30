import React, { Fragment } from 'react'
import { useSelect } from 'downshift'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import Arrow from '../util/arrow'
import Icon from '../Icon'
import { COLORS } from '../docs'

const Dropdown = props => {
  const { items, defaultValue, placeholder, onChange, emptyText } = props

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    selectedItem: defaultValue,
    onSelectedItemChange: ({ selectedItem }) => {
      if (onChange) onChange(selectedItem)
    },
  })
  return (
    <span className={styles.dropdown}>
      <span
        className={classnames(styles.label, isOpen && styles.isOpen)}
        {...getToggleButtonProps()}>
        <span className={styles.labelText}>{selectedItem || placeholder}</span>
        <Icon type={isOpen ? 'arrow-up' : 'arrow-down'} fill="green" />
      </span>
      {isOpen && (
        <Fragment>
          <span className={styles.listArrow}>
            <Arrow fill={COLORS.BG_INPUT}></Arrow>
          </span>
          <ul className={styles.list} {...getMenuProps()}>
            {items.map((item, index) => (
              <li
                className={classnames(
                  highlightedIndex === index && styles.highlighted
                )}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}>
                {item}
              </li>
            ))}
            {items.length === 0 && (
              <li className={styles.emptyList}>{emptyText}</li>
            )}
          </ul>
        </Fragment>
      )}
    </span>
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number])
  ),
  defaultValue: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  emptyText: PropTypes.string,
}

Dropdown.defaultProps = {
  items: [],
  placeholder: 'List',
  emptyText: 'Пусто',
}

export default Dropdown
