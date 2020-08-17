import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'
import classes from '../classes.module.css'

const SHADOWS = {
  small: 'smallShadow',
  normal: 'normalShadow',
  big: 'bigShadow',
  membrane: 'membrane',
  none: '',
}

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
    shadow,
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
          ((flag && classes[`${fill}-hover-bg`]) || classes[`${fill}-bg`]),
        !disabled && !flag && shadow && styles[SHADOWS[shadow]]
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
  shadow: 'small',
}

RoundButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  /** Анимация при клике */
  animation: PropTypes.oneOf(['ripple', 'pulse', 'none']),
  /** Окрашивание в цвет из списка цветов */
  fill: PropTypes.string,
  /** Добавление иконки внутрь кнопки */
  icon: PropTypes.string,
  /** Окрашивание иконки в цвет из списка цветов */
  iconFill: PropTypes.string,
  /** Создаёт тень под кнопкой */
  shadow: PropTypes.oneOf(Object.keys(SHADOWS)),
}

export default RoundButton
