import React, { Fragment, useEffect } from 'react'
import { useSelect } from 'downshift'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import Arrow from '../util/arrow'
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
    showArrow,
    className,
    style,
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
          {showArrow && (
            <span
              className={classnames(
                styles.listArrow,
                styles[listDirection || 'bottomCenter']
              )}>
              <Arrow fill={COLORS.BG_INPUT} />
            </span>
          )}
          <ul
            style={style}
            className={classnames(
              styles.list,
              className,
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
  showArrow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

Dropdown.defaultProps = {
  items: [],
  emptyText: 'Пусто',
  listDirection: 'bottomCenter',
  showArrow: true,
}

export default Dropdown
