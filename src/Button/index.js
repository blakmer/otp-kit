import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'
import classes from '../classes.css'

const Button = props => {
  const {
    className,
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
    fill,
    prefixFill,
    suffixFill,
  } = props

  const [flag, setFlag] = useState(false)

  const handleClick = event => {
    const r = event.target.getBoundingClientRect()
    const d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2

    event.target.style.cssText = `--s: 0; --o: 1;`
    event.target.offsetTop
    event.target.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${event.clientX -
      r.left}; --y:${event.clientY - r.top};`

    onClick(event)
  }

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={handleClick}
      type={htmlType}
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
      className={classnames(
        styles.button,
        styles[size],
        !ghost && (flag ? classes[`${fill}-hover-bg`] : classes[`${fill}-bg`]),
        !ghost && classes[`text-inverse-text`],
        ghost ? styles.pulse : styles.ripple,
        ghost && styles.ghost,
        ghost && classes[`${fill}-text`],
        ghost && !disabled && classes[`${fill}-border`],
        floating && !ghost && !disabled && styles.floating,
        disabled && styles.disabled,
        block && styles.block,
        className
      )}>
      {!ghost && prefix && (
        <Icon.Small
          type={prefix}
          fill={!disabled ? prefixFill : 'text-disabled'}
        />
      )}

      {children}

      {!ghost && suffix && (
        <Icon.Small
          type={suffix}
          fill={!disabled ? suffixFill : 'text-disabled'}
        />
      )}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  size: 'medium',
  htmlType: 'button',
  floating: false,
  ghost: false,
  onClick: e => {},
  fill: 'primary',
  prefixFill: 'text-inverse',
  suffixFill: 'text-inverse',
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium']),
  floating: PropTypes.bool,
  ghost: PropTypes.bool,
  suffix: PropTypes.string,
  prefix: PropTypes.string,
  fill: PropTypes.string,
  prefixFill: PropTypes.string,
  suffixFill: PropTypes.string,
  block: PropTypes.bool,
}

export default Button
