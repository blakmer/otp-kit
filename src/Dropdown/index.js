import React, { Fragment } from 'react'
import { useSelect } from 'downshift'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import Arrow from '../util/arrow'

const Dropdown = props => {
  const {
    items,
    defaultValue,
    onChange,
    emptyText,
    listDirection,
    children,
    onAction,
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
    onIsOpenChange: onAction,
  })

  return (
    <span className={styles.dropdown} {...getToggleButtonProps()}>
      {children}

      <div className={classnames(!isOpen && styles.hide)}>
        {showArrow && (
          <span
            className={classnames(
              styles.listArrow,
              styles[listDirection || 'bottomCenter']
            )}>
            <Arrow fill="bg-input" />
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
      </div>
    </span>
  )
}

Dropdown.propTypes = {
  /** Элементы всплывающего меню */
  items: PropTypes.arrayOf(PropTypes.node),
  /** Значение по умолчанию */
  defaultValue: PropTypes.node,
  /** Callback, вызываемый при открытии всплывающего меню */
  onAction: PropTypes.func,
  onChange: PropTypes.func,
  /** Текст, отображаемый при отсутствии элементов во всплывающем меню */
  emptyText: PropTypes.string,
  /** Направление всплывающего меню */
  listDirection: PropTypes.oneOf([
    'topLeft',
    'topCenter',
    'topRight',
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
  ]),
  /** Отображение стрелки у всплывающего меню */
  showArrow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  /** Дочерний элемент */
  children: PropTypes.node,
}

Dropdown.defaultProps = {
  items: [],
  emptyText: 'Пусто',
  listDirection: 'bottomCenter',
  showArrow: true,
}

export default Dropdown
