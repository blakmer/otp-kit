import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Arrow from '../util/arrow'
import styles from './index.module.css'
import classes from '../classes.module.css'

const SHADOWS = {
  none: 'none',
  small: 'small-shadow',
  normal: 'normal-shadow',
  big: 'big-shadow',
  membrane: 'membrane',
}

const Tooltip = props => {
  const {
    className,
    style,
    shadow,
    children,
    content,
    position,
    fill,
    textFill,
    hoverable,
    visible,
  } = props
  const [pos, setPos] = useState('topCenter')
  const getAutoPosition = el => {
    const { innerHeight, innerWidth } = window
    let { top, left, bottom, right } = el.getBoundingClientRect()
    bottom = innerHeight - bottom
    right = innerWidth - right
    const targetDirection = Math.max(top, left, bottom, right)
    switch (targetDirection) {
      case top:
        return 'topCenter'
      case bottom:
        return 'bottomCenter'
      case left:
        return 'middleLeft'
      case right:
        return 'middleRight'
    }
  }
  const block = children.props && children.props.block

  return (
    <span
      className={classnames(
        styles.contentContainer,
        hoverable && styles.hoverable,
        block && styles.block,
        className
      )}
      style={style}
      onMouseEnter={({ target }) => {
        setPos(getAutoPosition(target))
      }}>
      <span
        className={classnames(
          styles.tooltipContainer,
          styles[position === 'auto' ? pos : position],
          visible && styles.visible,
          block && styles.block
        )}>
        <div
          className={classnames(
            styles.tooltip,
            styles[position === 'auto' ? pos : position],
            classes[`${fill}-bg`],
            classes[`${textFill}-text`],
            classes[SHADOWS[shadow]],
            block && styles.block
          )}>
          {content}
          <span
            className={classnames(
              styles.tooltipArrow,
              styles[position === 'auto' ? pos : position]
            )}>
            <Arrow fill={fill} />
          </span>
        </div>
      </span>
      {children}
    </span>
  )
}

Tooltip.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Дочерний элемент */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Элементы во всплывающем меню */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  /** Окрашивание в цвет из списка цветов */
  fill: PropTypes.string,
  /** Окрашивание элементов внутри */
  textFill: PropTypes.string,
  /** Направление всплывающего меню */
  position: PropTypes.oneOf([
    'auto',
    'topLeft',
    'topCenter',
    'topRight',
    'middleRight',
    'middleLeft',
    'bottomRight',
    'bottomCenter',
    'bottomLeft',
  ]),
  /** Управление отображением элемента снаружи */
  visible: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'small', 'normal', 'big', 'membrane']),
}

Tooltip.defaultProps = {
  position: 'auto',
  fill: 'blue',
  textFill: 'bg-input',
  hoverable: true,
  shadow: 'normal',
}

export default Tooltip
