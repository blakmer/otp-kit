import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'

const Toggler = props => {
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
    className,
    style,
  } = props

  return (
    <div className={classnames(styles.wrapper, className)} style={style}>
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        name={name}
        required={required}
        tabIndex={tabIndex}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <label
        className={classnames(styles.switch, {
          [styles.disabled]: disabled,
          [styles.switchBlue]: fill === 'blue',
          [styles.switchYellow]: fill === 'yellow',
          [styles.switchPurple]: fill === 'purple',
        })}
        htmlFor={id}
      />
      <div className={styles.circle} />
    </div>
  )
}

Toggler.propTypes = {
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  fill: PropTypes.oneOf(['blue', 'yellow', 'purple']),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
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
  disabled: false,
}

export default Toggler
