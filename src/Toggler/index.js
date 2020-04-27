import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import classes from '../classes.module.css'

const Toggler = props => {
  const {
    defaultChecked,
    fill,
    disabled,
    name,
    required,
    tabIndex,
    checked,
    onBlur,
    onChange,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    className,
    style,
  } = props

  const [check, setCheck] = useState(checked || defaultChecked || false)
  const handleChange = e => {
    if (checked === undefined) {
      setCheck(e.target.checked)
    }
    onChange(e)
  }

  return (
    <div className={classnames(styles.wrapper, className)} style={style}>
      <label>
        <input
          className={styles.input}
          type="checkbox"
          defaultChecked={defaultChecked}
          checked={checked}
          disabled={disabled}
          name={name}
          required={required}
          tabIndex={tabIndex}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <div
          className={classnames(
            styles.switch,
            check && !disabled && classes[`${fill}-bg`],
            check && !disabled && classes[`${fill}-border`],
            !check && !disabled && classes['bg-input-bg'],
            disabled && styles.disabled
          )}
        />
        <div className={styles.circle} />
      </label>
    </div>
  )
}

Toggler.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  fill: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
}

Toggler.defaultProps = {
  fill: 'primary',
  onChange: e => {},
}

export default Toggler
