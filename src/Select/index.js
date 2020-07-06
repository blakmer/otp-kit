import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useCombobox } from 'downshift'
import ArrowUp from '../util/arrow-up'
import ArrowDown from '../util/arrow-down'
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
    className,
    style,
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
    initialSelectedItem: defaultValue,
    ...(value && { inputValue: value.title }),
    itemToString: i => i.title,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem)
    },
  })

  return (
    <div
      className={classnames(styles.container, block && styles.block, className)}
      style={style}
      {...getComboboxProps()}>
      <label
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
          {...getInputProps({ refKey: 'inputRef' })}
          suffix={
            <span
              className={styles.arrowIcon}
              {...(status === STATUSES.disabled ? {} : getToggleButtonProps())}>
              {isOpen ? (
                <ArrowUp fill="primary" />
              ) : (
                <ArrowDown fill="primary" />
              )}
            </span>
          }
        />
      </label>

      <ul
        {...getMenuProps()}
        className={classnames(
          styles.menu,
          !isOpen && styles.hide,
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
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Элементы всплывающго меню */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  /** Элемент из списка, выбранный по умолчанию */
  defaultValue: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onChange: PropTypes.func,
  /** Текст, отображаемый при отсутствии элементов во всплывающем меню */
  emptyText: PropTypes.string,
  /** Состояние элемента */
  status: PropTypes.oneOf(Object.keys(STATUSES)),
  /** Направление всплывающего меню */
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
