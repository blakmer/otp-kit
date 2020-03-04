import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const Checkbox = props => {
  const {
    defaultChecked,
    fill,
    disabled,
    id,
    name,
    required,
    tabIndex,
    checked,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    children,
    className,
  } = props

  return (
    <span className={className}>
      <input
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        required={required}
        tabIndex={tabIndex}
        checked={checked}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classnames(styles.checkbox, {
          [styles.disabledChecked]: disabled,
          [styles.checkboxBlue]: fill === 'blue',
          [styles.checkboxYellow]: fill === 'yellow',
          [styles.checkboxPurple]: fill === 'purple',
        })}
        id={id}
        type="checkbox"
      />
      <label className={styles.checkmark} htmlFor={id}>
        {children}
      </label>
    </span>
  )
}

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  fill: PropTypes.oneOf(['blue', 'yellow', 'purple']),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.bool,
  tabIndex: PropTypes.number,
  checked: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node,
}

Checkbox.defaultProps = {
  disabled: false,
}

export default Checkbox
