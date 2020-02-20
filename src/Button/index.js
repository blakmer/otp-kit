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
    block,
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
      !ghost ? styles.ripple : styles.pulse,
      _variation,
      _floating,
      _disabled,
      ghostDisabled,
      block && styles.block
    )
  }

  const animationHandler = event => {
    const r = event.target.getBoundingClientRect()
    const d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2

    event.target.style.cssText = `--s: 0; --o: 1;`
    event.target.offsetTop
    event.target.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${event.clientX -
      r.left}; --y:${event.clientY - r.top};`

    if (onClick) {
      onClick(event)
    }
  }

  const getOnClickFunc = () => {
    return !ghost ? animationHandler : onClick
  }

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={getOnClickFunc()}
      type={htmlType}
      className={getClasses()}>
      {!ghost && prefix && (
        <Icon.Small type={prefix} fill={!disabled ? 'inverse' : 'disabled'} />
      )}

      {children}

      {!ghost && suffix && (
        <Icon.Small type={suffix} fill={!disabled ? 'inverse' : 'disabled'} />
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
  className: PropTypes.string,
  variation: PropTypes.oneOf(['primary', 'highlighted', 'error', 'blue']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium']),
  floating: PropTypes.bool,
  ghost: PropTypes.bool,
  suffix: PropTypes.string,
  prefix: PropTypes.string,
  block: PropTypes.bool,
}

export default Button
