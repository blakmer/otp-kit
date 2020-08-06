import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'
import classes from '../classes.module.css'

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
        block && styles.block,
        className
      )}>
      {prefix && (
        <Icon.Small
          type={prefix}
          fill={!disabled ? prefixFill : 'text-disabled'}
        />
      )}

      {children}

      {suffix && (
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
  style: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  htmlType: PropTypes.string,
  /** Дочерний элемент внутри кнопки */
  children: PropTypes.node,
  /** Изменение размера кнопки */
  size: PropTypes.oneOf(['small', 'medium']),
  /** Отвечает за добавление тени вокруг кнопки */
  floating: PropTypes.bool,
  /** Делает кнопку прозрачной с границей вокруг */
  ghost: PropTypes.bool,
  /** Добавление иконки в правой части кнопки */
  suffix: PropTypes.string,
  /** Добавление иконки в левой части кнопки */
  prefix: PropTypes.string,
  /** Окрашивание кнопки в цвет из списка цветов */
  fill: PropTypes.string,
  /** Окрашивание иконки слева в цвет из списка цветов */
  prefixFill: PropTypes.string,
  /** Окрашивание иконки справа в цвет из списка цветов */
  suffixFill: PropTypes.string,
  /** Расположение кнопки во всю ширину относительно родителя */
  block: PropTypes.bool,
}

export default Button
