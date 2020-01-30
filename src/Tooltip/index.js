import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Arrow from '../util/arrow'
import styles from './index.module.css'

const Tooltip = props => {
  const { children, content, position } = props
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

  return (
    <span
      className={styles.contentContainer}
      onMouseEnter={({ target }) => {
        setPos(getAutoPosition(target))
      }}>
      <span
        className={classnames(
          styles.tooltipContainer,
          styles[position === 'auto' ? pos : position]
        )}>
        <div
          className={classnames(
            styles.tooltip,
            styles[position === 'auto' ? pos : position]
          )}>
          {content}
          <span
            className={classnames(
              styles.tooltipArrow,
              styles[position === 'auto' ? pos : position]
            )}>
            <Arrow fill="#1B82E3" />
          </span>
        </div>
      </span>
      {children}
    </span>
  )
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

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
}

Tooltip.defaultProps = {
  position: 'auto',
}

export default Tooltip
