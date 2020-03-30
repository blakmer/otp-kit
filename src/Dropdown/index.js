import React, { Fragment, useEffect } from 'react'
import { useSelect } from 'downshift'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import Arrow from '../util/arrow'
import Icon from '../Icon'
import { COLORS } from '../docs'

const Dropdown = props => {
  const {
    items,
    defaultValue,
    onChange,
    emptyText,
    listDirection,
    children,
    onOpen,
  } = props

  const {
    isOpen,
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

  useEffect(() => {
    onOpen && onOpen(isOpen)
  }, [isOpen])
  return (
    <span className={styles.dropdown}>
      <span {...getToggleButtonProps()}>{children}</span>
      {isOpen && (
        <Fragment>
          <span
            className={classnames(
              styles.listArrow,
              styles[listDirection || 'bottomCenter']
            )}>
            <Arrow fill={COLORS.BG_INPUT} />
          </span>
          <ul
            className={classnames(
              styles.list,
              styles[listDirection || 'bottomCenter']
            )}
            {...getMenuProps()}>
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
  items: PropTypes.arrayOf(PropTypes.node),
  defaultValue: PropTypes.node,
  onOpen: PropTypes.func,
  onChange: PropTypes.func,
  emptyText: PropTypes.string,
  listDirection: PropTypes.oneOf([
    'topLeft',
    'topCenter',
    'topRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
  ]),
}

Dropdown.defaultProps = {
  items: [],
  emptyText: 'Пусто',
  listDirection: 'bottomCenter',
}

export default Dropdown
