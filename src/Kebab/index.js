import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox } from 'downshift'
import RoundButton from '../RoundButton'
import styles from './index.module.css'

const Kebab = props => {
  const { items, onChange, emptyText, block, listDirection, disabled } = props

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: items,
    itemToString: i => i.title,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem)
    },
  })

  return (
    <div className={classnames(styles.container, block && styles.block)}>
      <label
        {...getComboboxProps()}
        {...(disabled ? {} : getToggleButtonProps())}
        className={classnames(styles.labelContainer, block && styles.block)}>
        <RoundButton
          className={styles.kebab}
          icon={!isOpen ? 'menu-kebab' : 'close'}
          inverse
          disabled={disabled}
        />
      </label>
      {isOpen && (
        <ul
          {...getMenuProps()}
          className={classnames(styles.menu, styles[listDirection])}>
          {items.map((item, index) => (
            <li
              className={classnames(
                highlightedIndex === index && styles.selected
              )}
              key={`${index}`}
              {...getItemProps({ item, index })}>
              {item.jsx || item.title}
            </li>
          ))}
          {!items.length && <li className={styles.emptyList}>{emptyText}</li>}
        </ul>
      )}
    </div>
  )
}

Kebab.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      jsx: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node,
      ]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  onChange: PropTypes.func,
  emptyText: PropTypes.string,
  listDirection: PropTypes.oneOf(['bottom', 'top']),
}

Kebab.defaultProps = {
  items: [],
  emptyText: '',
  onChange: value => {},
  listDirection: 'top',
}

export default Kebab
