import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import classnames from 'classnames'
import Icon from '../Icon'

const RoundButton = props => {
  const {
    className,
    disabled,
    style,
    onClick,
    htmlType,
    variation,
    inverse,
  } = props

  const [flag, setFlag] = useState(false)

  const animationHandler = event => {
    const r = event.currentTarget.getBoundingClientRect()
    const d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2

    event.currentTarget.style.cssText = `--s: 0; --o: 1;`
    event.currentTarget.offsetTop
    event.currentTarget.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${event.clientX -
      r.left}; --y:${event.clientY - r.top};`

    if (onClick) {
      onClick(event)
    }
  }

  const getOnClickFunc = () => {
    return variation === 'primary' && !inverse ? animationHandler : onClick
  }

  const getClasses = () => {
    return classnames(className, styles.button, styles[variation], {
      [styles.secondary]: variation === 'danger' && !disabled,
      [styles.ripple]: variation === 'primary' && !disabled,
      [styles.pulse]: variation !== 'primary' && !disabled,
      [styles.disabled]: disabled,
      [styles.inverse]: inverse && !disabled,
      [styles.inverseDisabled]: inverse && disabled,
    })
  }

  const getIconFill = () => {
    if (disabled) {
      return 'disabled'
    } else if (variation === 'primary' && !inverse) {
      return 'inverse'
    } else if (variation === 'secondary' && !flag) {
      return 'green'
    } else if (variation === 'secondary' && flag) {
      return 'greenHover'
    } else if (variation === 'danger' && !flag) {
      return 'danger'
    } else if (variation === 'danger' && flag) {
      return 'dangerHover'
    } else if (inverse && !flag && variation === 'primary') {
      return 'green'
    } else if (inverse && flag && variation === 'primary') {
      return 'greenHover'
    } else if (inverse && flag && variation === 'danger') {
      return 'dangerHover'
    }
  }

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={getOnClickFunc()}
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
      type={htmlType}
      className={getClasses()}>
      <Icon type="arrow-up" fill={getIconFill()} size="medium" />
    </button>
  )
}

RoundButton.defaultProps = {
  variation: 'primary',
  disabled: false,
  htmlType: 'button',
}

RoundButton.propTypes = {}

export default RoundButton
