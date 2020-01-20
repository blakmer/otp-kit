import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'

const PRIMARIES = {
  primary: styles.primary,
  highlighted: styles.highlighted,
  error: styles.error,
  blue: styles.blue,
}

const SECONDARIES = {
  primary: styles.ghostPrimary,
  highlighted: styles.ghostHighlighted,
  error: styles.ghostError,
  blue: styles.ghostBlue,
}

const Button = props => {
  const {
    className,
    variation,
    disabled,
    style,
    onClick,
    htmlType,
    children,
    size,
    floating,
    ghost,
    suffix,
    prefix,
  } = props

  const getClasses = () => {
    const _variation = !ghost ? PRIMARIES[variation] : SECONDARIES[variation],
      _floating = floating && !ghost && !disabled ? styles.floating : null,
      _disabled = disabled && !ghost ? styles.disabled : null,
      ghostDisabled = disabled && ghost ? styles.ghostDisabled : null

    return classnames(
      className,
      styles.button,
      styles[size],
      _variation,
      _floating,
      _disabled,
      ghostDisabled
    )
  }

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      type={htmlType}
      className={getClasses()}>
      {!ghost && prefix && (
        <Icon type={prefix} fill={!disabled ? 'inverse' : 'disabled'} />
      )}

      {children}

      {!ghost && suffix && (
        <Icon type={suffix} fill={!disabled ? 'inverse' : 'disabled'} />
      )}
    </button>
  )
}

Button.defaultProps = {
  variation: 'primary',
  disabled: false,
  size: 'medium',
  htmlType: 'button',
  floating: false,
  ghost: false,
}

Button.propTypes = {
  variation: PropTypes.oneOf(['primary', 'highlighted', 'error', 'blue'])
    .isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  floating: PropTypes.bool,
  ghost: PropTypes.bool,
  suffix: PropTypes.string,
  prefix: PropTypes.string,
}

export default Button
