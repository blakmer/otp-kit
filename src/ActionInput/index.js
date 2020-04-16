import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import classes from '../classes.css'
import styles from './index.module.css'

const ActionInput = props => {
  const {
    value,
    defaultValue,
    onChange,
    actions,
    style,
    className,
    placeholder,
    disabled,
    block,
    fill,
  } = props
  return (
    <div
      className={classnames(
        className,
        styles.inputContainer,
        disabled ? styles.disabled : classes[`${fill}-border`],
        block && styles.block
      )}
      style={style}>
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      <div className={styles.actions}>{actions()}</div>
    </div>
  )
}

ActionInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  actions: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  block: PropTypes.bool,
  fill: PropTypes.string,
  disabled: PropTypes.bool,
}

ActionInput.defaultProps = {
  actions: () => {},
  onChange: () => {},
  fill: 'primary',
}

export default ActionInput
