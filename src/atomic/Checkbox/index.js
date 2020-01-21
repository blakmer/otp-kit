import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const Checkbox = props => {
  const {
    autoComplete,
    autoFocus,
    defaultChecked,
    fill,
    disabled,
    id,
    name,
    ref,
    placeholder,
    readOnly,
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
  } = props

  return (
    <span className={styles.checkboxWrapper}>
      <input
        autoComplete={autoComplete ? 'on' : 'off'}
        autoFocus={autoFocus}
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        ref={ref}
        placeholder={placeholder}
        readOnly={readOnly}
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
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  fill: PropTypes.oneOf(['blue', 'yellow', 'purple']),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  ref: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
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
  autoComplete: false,
  disabled: false,
  readOnly: false,
}

export default Checkbox
