import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'
import classes from '../classes.module.css'

const RoundButton = props => {
  const {
    className,
    disabled,
    style,
    onClick,
    htmlType,
    icon,
    fill,
    iconFill,
    animation,
  } = props

  const [flag, setFlag] = useState(false)

  const handleClick = event => {
    const r = event.currentTarget.getBoundingClientRect()
    const d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2

    event.currentTarget.style.cssText = `--s: 0; --o: 1;`
    event.currentTarget.offsetTop
    event.currentTarget.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${event.clientX -
      r.left}; --y:${event.clientY - r.top};`

    onClick(event)
  }

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
      type={htmlType}
      className={classnames(
        className,
        styles.button,
        styles[animation],
        !disabled &&
          ((flag && classes[`${fill}-hover-bg`]) || classes[`${fill}-bg`])
      )}>
      {icon && (
        <Icon.Medium
          type={icon}
          fill={disabled ? 'text-disabled' : iconFill}
          size="medium"
        />
      )}
    </button>
  )
}

RoundButton.defaultProps = {
  variation: 'primary',
  disabled: false,
  htmlType: 'button',
  fill: 'primary',
  iconFill: 'text-primary',
  animation: 'ripple',
  onClick: e => {},
}

RoundButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  animation: PropTypes.oneOf(['ripple', 'pulse', 'none']),
  inverse: PropTypes.bool,
  icon: PropTypes.string,
}

export default RoundButton
