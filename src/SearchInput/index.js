import React, { useState, useEffect } from 'react'
import Input from '../Input'
import Icon from '../Icon'
import classnames from 'classnames'
import propTypes from 'prop-types'
import styles from './index.module.css'

const ANIMATIONS = {
  left: 'left',
  center: 'center',
  right: 'right',
}

const SearchIcon = props => {
  const { onClick, inside, type } = props
  return (
    <Icon.Medium
      className={classnames(
        styles.searchIcon,
        inside ? styles.inside : styles.outside,
        type && styles.centered
      )}
      noGap
      type={type ? type : 'search'}
      fill="primary"
      style={{ padding: '20px' }}
      onClick={e => {
        onClick && onClick()
      }}
    />
  )
}

const SearchInput = props => {
  const {
    className,
    inputClassName,
    style,
    compact,
    block,
    animation,
    placeholder,
    value,
    defaultValue,
    onChange,
    inputRef,
    autoComplete,
    autoFocus,
    prefix,
    searchIcon,
    tabIndex,
    onRemove,
    noBorder,
    onEnter,
  } = props

  const [searchVisible, setSearchVisible] = useState(!compact || false)
  const [searchValue, setSearchValue] = useState(defaultValue || '')
  const controlled = value !== undefined

  useEffect(() => {
    ;(value || defaultValue) && setSearchVisible(true)
  }, [])

  return (
    <label
      className={classnames(
        styles.searchInputContainer,
        searchVisible ? styles.visible : styles.hidden,
        animation && styles[`animation${ANIMATIONS[animation]}`],
        compact ? searchVisible && styles.block : block && styles.block,
        className
      )}
      style={style}>
      <Input
        className={classnames(styles.searchInput, inputClassName)}
        placeholder={placeholder}
        suffix={
          <SearchIcon
            inside
            type={
              controlled
                ? value
                  ? 'close'
                  : searchIcon
                : searchValue
                ? 'close'
                : searchIcon
            }
            onClick={() => {
              onRemove()
              !controlled && setSearchValue('')
            }}
          />
        }
        noBorder={noBorder}
        value={value || searchValue}
        onChange={e => {
          onChange(e)
          !controlled && setSearchValue(e.target.value)
        }}
        onBlur={() =>
          compact &&
          (controlled ? setSearchVisible(value) : setSearchVisible(searchValue))
        }
        inputRef={inputRef}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        prefix={prefix}
        tabIndex={tabIndex}
        onKeyDown={e =>
          e.key === 'Enter' && onEnter(controlled ? value : searchValue)
        }
        block
      />
      {!searchVisible && compact && (
        <SearchIcon
          type={searchIcon}
          onClick={() => {
            setSearchVisible(!searchVisible)
          }}
        />
      )}
    </label>
  )
}

SearchInput.propTypes = {
  className: propTypes.string,
  inputClassName: propTypes.string,
  style: propTypes.object,
  /** Изменение размера неактивного элемента */
  compact: propTypes.bool,
  /** Располагает элемент во всю ширину относительно родителя */
  block: propTypes.bool,
  /** Внешний вид перехода элемента из компактного режима в обычный */
  animation: propTypes.oneOf(Object.values(ANIMATIONS)),
  placeholder: propTypes.string,
  /** Установление значения */
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  /** Значение по умолчанию */
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  /** Callback, вызываемый при изменении значения */
  onChange: propTypes.func,
  /** Ссылка на элемент */
  inputRef: propTypes.any,
  /** Автозаполнение */
  autoComplete: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  autoFocus: propTypes.bool,
  /** Добавление элементов в левой части компонента */
  prefix: propTypes.node,
  /** Навигация с клавиатуры */
  tabIndex: propTypes.oneOfType([propTypes.string, propTypes.number]),
  /** Callback, вызываемый при нажатии на кнопку очистки поля */
  onRemove: propTypes.func,
  /** Callback, вызываемый при нажатии кнопки ввода */
  onEnter: propTypes.func,
  /** Делает границы элемента Input прозрачными */
  noBorder: propTypes.bool,
}

SearchInput.defaultProps = {
  animation: 'right',
  placeholder: 'Поиск...',
  onRemove: () => {},
  onChange: () => {},
  onEnter: val => {},
}

export default SearchInput
