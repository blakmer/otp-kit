import React, { useState } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.module.css'

const LEVELS = { inner: 'inner', outer: 'outer' }

const SIZES = { default: 'default', small: 'small' }

const Tabs = props => {
  const { data, onChange, defaultActive, level, size } = props
  const [val, setVal] = useState(defaultActive)
  return (
    <div
      className={classnames(
        styles.tabContainer,
        styles[LEVELS[level]],
        styles[SIZES[size]]
      )}>
      {data.map((i, j) => (
        <div
          key={j}
          onClick={() => {
            setVal(j)
            onChange(i.value, j)
          }}
          className={classnames(styles.tab, val === j && styles.activeTab)}>
          {i.title || i.value}
        </div>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      value: propTypes.any.isRequired,
      icon: propTypes.string,
    })
  ),
  /** (value, key) => {} */
  onChange: propTypes.func,
  defaultActive: propTypes.number,
  level: propTypes.oneOf(Object.values(LEVELS)),
  size: propTypes.oneOf(Object.values(SIZES)),
}

Tabs.defaultProps = {
  data: [],
  onChange: () => {},
  defaultActive: 0,
  level: LEVELS.outer,
  size: SIZES.default,
}

export default Tabs
