import React, { useState } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const LEVELS = { inner: 'inner', outer: 'outer', buttons: 'buttons' }

const SIZES = { default: 'default', small: 'small' }

const Tabs = props => {
  const {
    data,
    onChange,
    defaultActive,
    level,
    size,
    block,
    className,
    width,
    style,
  } = props
  const [val, setVal] = useState(defaultActive)
  const otherWidth = width && typeof width === 'number' ? `${width}px` : width
  return (
    <div
      className={classnames(
        styles.tabContainer,
        styles[LEVELS[level]],
        styles[SIZES[size]],
        block && styles.block,
        className
      )}
      style={style}>
      {data.map((i, j) => (
        <div
          key={j}
          onClick={() => {
            setVal(j)
            onChange(i.value, j)
          }}
          style={{ width: otherWidth }}
          className={classnames(styles.tab, val === j && styles.activeTab)}>
          {i.title || i.value}
        </div>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  /** Элементы вкладок */
  data: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      value: propTypes.any.isRequired,
      icon: propTypes.string,
    })
  ),
  /** (value, key) => {} */
  onChange: propTypes.func,
  /** Активная вкладка по умолчанию */
  defaultActive: propTypes.number,
  /** Вид элемента */
  level: propTypes.oneOf(Object.values(LEVELS)),
  /** Размер вкладок */
  size: propTypes.oneOf(Object.values(SIZES)),
  /** Ширина вкладок */
  width: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,
}

Tabs.defaultProps = {
  data: [],
  onChange: () => {},
  defaultActive: 0,
  level: LEVELS.outer,
  size: SIZES.default,
}

export default Tabs
